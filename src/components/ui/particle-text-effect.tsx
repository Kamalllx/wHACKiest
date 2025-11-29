"use client"

import { useEffect, useRef } from "react"

interface Vector2D {
  x: number
  y: number
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }

  closeEnoughTarget = 100
  maxSpeed = 3.5        // faster
  maxForce = 0.12        // stronger steering
  particleSize = 8
  isKilled = false

  startColor = { r: 0, g: 0, b: 0 }
  targetColor = { r: 0, g: 0, b: 0 }
  colorWeight = 0
  colorBlendRate = 0.015 // faster color blend

  move() {
    let proximityMult = 1
    const distance = Math.sqrt(
      (this.pos.x - this.target.x) ** 2 +
      (this.pos.y - this.target.y) ** 2
    )

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    }

    const magnitude = Math.sqrt(towardsTarget.x ** 2 + towardsTarget.y ** 2)
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    }

    const steerMagnitude = Math.sqrt(steer.x ** 2 + steer.y ** 2)
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce
      steer.y = (steer.y / steerMagnitude) * this.maxForce
    }

    this.acc.x += steer.x
    this.acc.y += steer.y

    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D, drawAsPoints: boolean) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    }

    ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`

    if (drawAsPoints) {
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
    } else {
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2)
      this.target.x = randomPos.x
      this.target.y = randomPos.y

      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      }
      this.targetColor = { r: 0, g: 0, b: 0 }
      this.colorWeight = 0

      this.isKilled = true
    }
  }

  private generateRandomPos(x: number, y: number, mag: number): Vector2D {
    const randomX = Math.random() * 1000
    const randomY = Math.random() * 500

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x ** 2 + direction.y ** 2)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return { x: x + direction.x, y: y + direction.y }
  }
}

interface ParticleTextEffectProps {
  words?: string[]
  className?: string
}

const DEFAULT_WORDS = ["& Dept of CSE", "Presents", "wHACKiest"]

const WORD_COLORS: { [key: string]: { r: number; g: number; b: number } } = {
  
  "& Dept of CSE": { r: 167, g: 139, b: 250 },
  "Presents": { r: 251, g: 191, b: 36 },
  "wHACKiest": { r: 52, g: 211, b: 153 },
}

export function ParticleTextEffect({ words = DEFAULT_WORDS, className }: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const wordIndexRef = useRef(0)
  const isPausedRef = useRef(false)

  const pixelSteps = 5
  const drawAsPoints = true

  const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
    const randomX = Math.random() * 1000
    const randomY = Math.random() * 400

    const direction = { x: randomX - x, y: randomY - y }
    const magnitude = Math.sqrt(direction.x ** 2 + direction.y ** 2)

    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return { x: x + direction.x, y: y + direction.y }
  }

  const nextWord = (word: string, canvas: HTMLCanvasElement) => {
    const offscreenCanvas = document.createElement("canvas")
    offscreenCanvas.width = canvas.width
    offscreenCanvas.height = canvas.height
    const offscreenCtx = offscreenCanvas.getContext("2d")!

    let fontSize = 80
    if (canvas.width < 500) fontSize = 40
    else if (canvas.width < 700) fontSize = 55
    else if (canvas.width < 900) fontSize = 65

    offscreenCtx.fillStyle = "white"
    offscreenCtx.font = `bold ${fontSize}px Arial, sans-serif`
    offscreenCtx.textAlign = "center"
    offscreenCtx.textBaseline = "middle"
    offscreenCtx.fillText(word, canvas.width / 2, canvas.height / 2)

    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data

    const newColor = WORD_COLORS[word] || {
      r: Math.random() * 200 + 55,
      g: Math.random() * 200 + 55,
      b: Math.random() * 200 + 55,
    }

    const particles = particlesRef.current
    let particleIndex = 0
    const coordsIndexes: number[] = []

    for (let i = 0; i < pixels.length; i += pixelSteps * 4) coordsIndexes.push(i)
    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
    }

    for (const pixelIndex of coordsIndexes) {
      const alpha = pixels[pixelIndex + 3]
      if (alpha > 0) {
        const x = (pixelIndex / 4) % canvas.width
        const y = Math.floor(pixelIndex / 4 / canvas.width)

        let particle: Particle

        if (particleIndex < particles.length) {
          particle = particles[particleIndex]
          particle.isKilled = false
          particleIndex++
        } else {
          particle = new Particle()
          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
          particle.pos = { ...randomPos }

          particle.maxSpeed = Math.random() * 4 + 3
          particle.maxForce = particle.maxSpeed * 0.05
          particle.particleSize = Math.random() * 4 + 4
          particle.colorBlendRate = Math.random() * 0.015 + 0.003

          particles.push(particle)
        }

        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        }
        particle.targetColor = newColor
        particle.colorWeight = 0

        particle.target = { x, y }
      }
    }

    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height)
    }
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const particles = particlesRef.current

    // Transparent canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
      p.move()
      p.draw(ctx, drawAsPoints)
    })

    // Detect if word fully formed (all particles not killed)
    const allSettled = particles.every((p) => !p.isKilled)

    // Pause logic
    if (allSettled && !isPausedRef.current) {
      isPausedRef.current = true
      setTimeout(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length
        nextWord(words[wordIndexRef.current], canvas)
        isPausedRef.current = false
      }, 3200) // pause duration (2.2 seconds)
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const updateSize = () => {
      const containerWidth = container.offsetWidth
      const width = Math.min(containerWidth, 1000)
      const height = Math.min(width * 0.4, 400)

      canvas.width = width
      canvas.height = height

      nextWord(words[wordIndexRef.current], canvas)
    }

    updateSize()
    window.addEventListener("resize", updateSize)

    nextWord(words[0], canvas)
    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [words])

  return (
    <div ref={containerRef} className={`w-full flex justify-center ${className || ""}`}>
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "100%",
          height: "auto",
          background: "transparent",
        }}
      />
    </div>
  )
}
