"use client"

import { useRef, useEffect, useState, createElement, memo } from "react"

export enum Tag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  P = "p",
}

/* -----------------------------------------------------------
    MAIN COMPONENT - Only renders "wHACKiest" with reverse reveal effect
----------------------------------------------------------- */
export const Component = () => {
  return (
    <div className="flex justify-center w-full max-w-full overflow-hidden bg-transparent pointer-events-none">
      <VaporizeText
        text="wHACKiest"
        font={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(48px, 12vw, 120px)",
          fontWeight: 800,
        }}
        color="rgb(255,255,255)"
        spread={5}
        density={7}
        animation={{
          revealDuration: 2,
        }}
        direction="left-to-right"
        alignment="center"
        tag={Tag.H1}
      />
    </div>
  )
}

/* -----------------------------------------------------------
    TYPE DEFINITIONS
----------------------------------------------------------- */

type VaporizeTextProps = {
  text: string
  font: {
    fontFamily: string
    fontSize: string
    fontWeight: number
  }
  color: string
  spread: number
  density: number
  animation: {
    revealDuration: number
  }
  direction: "left-to-right" | "right-to-left"
  alignment: "left" | "center" | "right"
  tag: Tag
}

type Particle = {
  x: number
  y: number
  ox: number
  oy: number
  alpha: number
  baseAlpha: number
  colorRGB: string
  vx: number
  vy: number
  active: boolean
}

/* -----------------------------------------------------------
    VAPORIZER CORE - Reverse effect: particles fade away to reveal text
----------------------------------------------------------- */

function VaporizeText({ text, font, color, density, animation, direction, alignment, tag }: VaporizeTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const particlesRef = useRef<Particle[]>([])
  const boundsRef = useRef<{ left: number; right: number; width: number } | null>(null)

  const [phase, setPhase] = useState<"vapor" | "done">("vapor")

  const revealRef = useRef(0)

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  const revealTime = animation.revealDuration * 1000

  // --------------------------
  // SETUP PARTICLES
  // --------------------------
  function setupParticles() {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = container.clientWidth
    const height = container.clientHeight || 180

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + "px"
    canvas.style.height = height + "px"

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)

    const rgb = extractRGB(color)

    const { particles, bounds } = rasterizeText({
      ctx,
      text,
      width,
      height,
      font,
      colorRGB: rgb,
      alignment,
      density,
    })

    particlesRef.current = particles
    boundsRef.current = bounds

    revealRef.current = 0
    setPhase("vapor")
  }

  // --------------------------
  // RESIZE OBSERVER
  // --------------------------
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    setupParticles()

    const obs = new ResizeObserver(() => {
      setupParticles()
    })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // --------------------------
  // ANIMATION LOOP
  // --------------------------
  useEffect(() => {
    let frame: number
    let last = performance.now()

    const animate = (now: number) => {
      const dt = now - last
      last = now

      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const w = canvas.width / dpr
      const h = canvas.height / dpr

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current
      const bounds = boundsRef.current

      switch (phase) {
        case "vapor":
          if (!bounds) break
          revealRef.current += dt / revealTime
          const progress = Math.min(1, revealRef.current)

          const cutoff =
            direction === "left-to-right"
              ? bounds.left + bounds.width * progress
              : bounds.right - bounds.width * progress

          drawReverseReveal(ctx, particles, cutoff, direction, progress, now)

          if (progress >= 1) {
            setPhase("done")
          }
          break

        case "done":
          // Draw all particles at full opacity - text stays solid
          drawStatic(ctx, particles)
          break
      }

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [phase, direction, revealTime, dpr])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "100%",
        height: "180px",
        position: "relative",
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          maxWidth: "100%",
        }}
      />
      <HiddenSEO tag={tag} text={text} />
    </div>
  )
}

/* -----------------------------------------------------------
    SEO HIDDEN TEXT
----------------------------------------------------------- */
const HiddenSEO = memo(function HiddenSEO({
  tag = Tag.P,
  text,
}: {
  tag: Tag
  text: string
}) {
  return createElement(
    tag,
    {
      style: {
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        userSelect: "none",
        pointerEvents: "none",
      },
    },
    text,
  )
})

/* -----------------------------------------------------------
    RASTERIZE TEXT → PARTICLES
----------------------------------------------------------- */
function rasterizeText({
  ctx,
  text,
  width,
  height,
  font,
  colorRGB,
  alignment,
  density,
}: {
  ctx: CanvasRenderingContext2D
  text: string
  width: number
  height: number
  font: { fontFamily: string; fontSize: string; fontWeight: number }
  colorRGB: string
  alignment: "left" | "center" | "right"
  density: number
}) {
  ctx.clearRect(0, 0, width, height)

  let fontSize = 110
  const fontSizeStr = font.fontSize
  if (fontSizeStr.includes("clamp")) {
    const matches = fontSizeStr.match(/clamp$$([^,]+),\s*([^,]+),\s*([^)]+)$$/)
    if (matches) {
      const minSize = Number.parseInt(matches[1].replace("px", ""), 10) || 48
      const maxSize = Number.parseInt(matches[3].replace("px", ""), 10) || 120
      const vwSize = width * 0.12
      fontSize = Math.max(minSize, Math.min(maxSize, vwSize))
    }
  } else {
    fontSize = Number.parseInt(fontSizeStr.replace("px", ""), 10)
  }

  ctx.font = `${font.fontWeight} ${fontSize}px ${font.fontFamily}`
  ctx.textBaseline = "middle"
  ctx.textAlign = alignment

  let x = width / 2
  if (alignment === "left") x = fontSize
  if (alignment === "right") x = width - fontSize

  const y = height / 2

  const m = ctx.measureText(text)
  const textWidth = m.width

  const bounds = {
    left: alignment === "center" ? x - textWidth / 2 : alignment === "left" ? x : x - textWidth,
    right: alignment === "center" ? x + textWidth / 2 : alignment === "left" ? x + textWidth : x,
    width: textWidth,
  }

  ctx.fillStyle = `rgb(${colorRGB})`
  ctx.fillText(text, x, y)

  const img = ctx.getImageData(0, 0, width, height)
  const data = img.data

  const particles: Particle[] = []
  const step = Math.max(1, 9 - density)

  for (let py = 0; py < height; py += step) {
    for (let px = 0; px < width; px += step) {
      const idx = (py * width + px) * 4
      const a = data[idx + 3]
      if (a > 30) {
        particles.push({
          x: px,
          y: py,
          ox: px,
          oy: py,
          alpha: 1,
          baseAlpha: a / 255,
          colorRGB,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          active: true,
        })
      }
    }
  }

  ctx.clearRect(0, 0, width, height)
  return { particles, bounds }
}

/* -----------------------------------------------------------
    DRAW PHASES - Reverse effect
----------------------------------------------------------- */

function drawReverseReveal(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  cutoff: number,
  direction: string,
  progress: number,
  time: number,
) {
  const vaporZone = 80

  for (const p of particles) {
    const isRevealed = direction === "left-to-right" ? p.ox <= cutoff : p.ox >= cutoff
    const distFromCutoff = Math.abs(p.ox - cutoff)
    const inVaporZone = !isRevealed && distFromCutoff < vaporZone

    if (isRevealed) {
      // Draw solid revealed text
      ctx.fillStyle = `rgba(${p.colorRGB},${p.baseAlpha})`
      ctx.fillRect(p.ox, p.oy, 1.5, 1.5)
    } else if (inVaporZone) {
      // Draw fading vapor particles ahead of the reveal line
      const fadeAlpha = (distFromCutoff / vaporZone) * p.baseAlpha * 0.6
      const offsetX = Math.sin(time * 0.003 + p.ox * 0.1) * 8 * (distFromCutoff / vaporZone)
      const offsetY =
        Math.cos(time * 0.004 + p.oy * 0.1) * 12 * (distFromCutoff / vaporZone) - (distFromCutoff / vaporZone) * 15

      ctx.fillStyle = `rgba(${p.colorRGB},${fadeAlpha})`
      ctx.fillRect(p.ox + offsetX, p.oy + offsetY, 2, 2)
    } else {
      // Draw stationary vapor particles (not yet in zone)
      const vaporAlpha = p.baseAlpha * 0.4
      const gentleOffsetX = Math.sin(time * 0.002 + p.ox * 0.05) * 3
      const gentleOffsetY = Math.cos(time * 0.002 + p.oy * 0.05) * 3

      ctx.fillStyle = `rgba(${p.colorRGB},${vaporAlpha})`
      ctx.fillRect(p.ox + gentleOffsetX, p.oy + gentleOffsetY, 2, 2)
    }
  }
}

function drawStatic(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (const p of particles) {
    ctx.fillStyle = `rgba(${p.colorRGB},${p.baseAlpha})`
    ctx.fillRect(p.ox, p.oy, 1.5, 1.5)
  }
}

/* -----------------------------------------------------------
    RGB Helper
----------------------------------------------------------- */
function extractRGB(input: string) {
  const match = input.match(/(\d+),\s*(\d+),\s*(\d+)/)
  if (!match) return "255,255,255"
  return `${match[1]},${match[2]},${match[3]}`
}
