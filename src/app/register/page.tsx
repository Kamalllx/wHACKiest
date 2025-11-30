"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Link from "next/link"

interface FormData {
  teamName: string
  teamLeadName: string
  teamLeadUSN: string
  teammate2Name: string
  teammate2USN: string
  teammate3Name: string
  teammate3USN: string
  teammate4Name: string
  teammate4USN: string
}

interface FormErrors {
  [key: string]: string
}

export default function RegisterPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    teamLeadName: "",
    teamLeadUSN: "",
    teammate2Name: "",
    teammate2USN: "",
    teammate3Name: "",
    teammate3USN: "",
    teammate4Name: "",
    teammate4USN: "",
  })

  useEffect(() => {
    if (formRef.current) {
      const formElements = formRef.current.querySelectorAll(".form-field")
      gsap.fromTo(
        formElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      )
    }
  }, [])

  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 35, 50, ${p.opacity})`
        ctx.fill()

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139, 35, 50, ${0.05 * (1 - dist / 150)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const validateUSN = (usn: string): string | null => {
    if (!usn) return null
    const trimmedUSN = usn.trim().toUpperCase()
    if (trimmedUSN.length !== 10 && trimmedUSN.length !== 12) {
      return `USN must be 10 or 12 characters`
    }
    const usnRegex = /^1MS\d{2}[A-Z]{2}\d{3}(-T)?$/i
    if (!usnRegex.test(trimmedUSN)) {
      return `Invalid USN format (e.g., 1MS22CS001 or 1MS24CS001-T)`
    }
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setServerError("")
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleUSNBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value) {
      const error = validateUSN(value)
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError("")

    const newErrors: FormErrors = {}

    if (!formData.teamName.trim()) newErrors.teamName = "Team name is required"
    if (!formData.teamLeadName.trim()) newErrors.teamLeadName = "Team lead name is required"
    if (!formData.teamLeadUSN.trim()) {
      newErrors.teamLeadUSN = "Team lead USN is required"
    } else {
      const usnError = validateUSN(formData.teamLeadUSN)
      if (usnError) newErrors.teamLeadUSN = usnError
    }
    if (!formData.teammate2Name.trim()) newErrors.teammate2Name = "Teammate 2 name is required"
    if (!formData.teammate2USN.trim()) {
      newErrors.teammate2USN = "Teammate 2 USN is required"
    } else {
      const usnError = validateUSN(formData.teammate2USN)
      if (usnError) newErrors.teammate2USN = usnError
    }

    if (formData.teammate3USN) {
      const usnError = validateUSN(formData.teammate3USN)
      if (usnError) newErrors.teammate3USN = usnError
    }
    if (formData.teammate4USN) {
      const usnError = validateUSN(formData.teammate4USN)
      if (usnError) newErrors.teammate4USN = usnError
    }

    if ((formData.teammate3Name && !formData.teammate3USN) || (!formData.teammate3Name && formData.teammate3USN)) {
      newErrors.teammate3USN = "Both name and USN required for Teammate 3"
    }
    if ((formData.teammate4Name && !formData.teammate4USN) || (!formData.teammate4Name && formData.teammate4USN)) {
      newErrors.teammate4USN = "Both name and USN required for Teammate 4"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setServerError(data.error || "Registration failed. Please try again.")
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSuccess(true)
    } catch {
      setServerError("Network error. Please check your connection and try again.")
      setIsSubmitting(false)
    }
  }

  const BackgroundElements = () => (
    <>
      {/* Grid pattern */}
      <div className="grid-pattern" />

      <canvas className="particles-canvas" id="particles" />

      {/* Floating code snippets */}
      <div className="code-float code-1">{"<hack/>"}</div>
      <div className="code-float code-2">{"{ }"}</div>
      <div className="code-float code-3">{"</>"}</div>
      <div className="code-float code-4">{"[ ]"}</div>
      {/* Updated code snippet */}
      <div className="code-float code-5">{"fn()"}</div>
      <div className="code-float code-6">{"=>"}</div>
      <div className="code-float code-7">{"import"}</div>
      <div className="code-float code-8">{"async"}</div>

      {/* Glowing orbs */}
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      <div className="glow-orb orb-3" />
      <div className="glow-orb orb-4" />

      <div className="hex-grid" />

      {/* Circuit lines - enhanced */}
      <svg className="circuit-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="circuit-line line-1" d="M0,20 L30,20 L30,50 L60,50 L60,80" />
        <path className="circuit-line line-2" d="M100,30 L70,30 L70,70 L40,70 L40,90" />
        <path className="circuit-line line-3" d="M0,80 L20,80 L20,60 L50,60 L50,30" />
        <path className="circuit-line line-4" d="M100,70 L80,70 L80,40 L60,40 L60,10" />
        <circle className="circuit-node node-pulse" cx="30" cy="20" r="2" />
        <circle className="circuit-node node-pulse" cx="60" cy="50" r="2" />
        <circle className="circuit-node node-pulse" cx="70" cy="30" r="2" />
        <circle className="circuit-node node-pulse" cx="40" cy="70" r="2" />
        <circle className="circuit-node node-pulse" cx="60" cy="80" r="2" />
        <circle className="circuit-node node-pulse" cx="50" cy="60" r="2" />
      </svg>

      <div className="bracket bracket-1">{"{"}</div>
      <div className="bracket bracket-2">{"}"}</div>
      <div className="bracket bracket-3">{"<"}</div>
      <div className="bracket bracket-4">{">"}</div>

      {/* Binary strips */}
      <div className="binary-strip strip-1">10110010</div>
      <div className="binary-strip strip-2">01001101</div>
      <div className="binary-strip strip-3">11010011</div>
      <div className="binary-strip strip-4">00101110</div>

      <div className="scan-line" />
    </>
  )

  if (isSuccess) {
    return (
      <div ref={containerRef} className="register-container">


        <BackgroundElements />

        <div className="success-wrapper">
          <div className="success-card">
            <div className="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h1 className="success-title">Registration Successful!</h1>
            <p className="success-subtitle">Welcome to wHACKiest 2025</p>
            <p className="success-description">
              Your team has been registered successfully. Join our WhatsApp group to stay updated with the latest
              announcements.
            </p>

            <a
              href="https://chat.whatsapp.com/EXrJ1AA59IK6P7aNDplr4H"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join WhatsApp Group
            </a>
          </div>
        </div>

        <style jsx>{`
          ${sharedStyles}


          .success-wrapper {
            position: relative;
            z-index: 10;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
          }

          .success-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 50px 40px;
            text-align: center;
            max-width: 520px;
            width: 100%;
            box-shadow: 
              0 25px 60px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(139, 35, 50, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
            animation: cardSlideIn 0.5s ease-out;
          }

          @keyframes cardSlideIn {
            from { 
              transform: translateY(30px) scale(0.95); 
              opacity: 0; 
            }
            to { 
              transform: translateY(0) scale(1); 
              opacity: 1; 
            }
          }

          .success-icon {
            color: #22c55e;
            margin-bottom: 24px;
            animation: scaleIn 0.5s ease-out 0.2s both;
          }

          @keyframes scaleIn {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          .success-title {
            font-family: 'Castledown', Impact, 'Arial Black', sans-serif;
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            font-weight: 800;
            color: #8B2332;
            margin: 0 0 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .success-subtitle {
            font-family: 'Castledown', Impact, sans-serif;
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            color: #555;
            margin: 0 0 20px;
          }

          .success-description {
            font-size: 0.95rem;
            color: #666;
            margin: 0 0 32px;
            line-height: 1.6;
          }

          .whatsapp-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            margin-bottom: 20px;
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          }

          .whatsapp-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
          }

          @media (max-width: 500px) {
            .success-card {
              padding: 40px 24px;
              margin: 20px;
            }
            .back-to-home-btn {
              top: 12px;
              left: 12px;
              padding: 10px 16px;
              font-size: 0.85rem;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="register-container">

      <BackgroundElements />

      <div className="register-content">
        <div className="register-header">
          <h1 className="register-title">
            <span className="title-main">wHACKiest</span>
            <span className="title-year">&lt;/2025&gt;</span>
          </h1>
          <h2 className="register-subtitle highlight-animate text-10xl font-extrabold">REGISTER YOUR TEAM</h2>
        </div>

        {serverError && (
          <div className="server-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {serverError}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="register-form">
          <div className="form-field team-name-field">
            <label htmlFor="teamName">
              Team Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleInputChange}
              placeholder="Enter your team name"
              className={errors.teamName ? "input-error" : ""}
            />
            {errors.teamName && <span className="error-text">{errors.teamName}</span>}
          </div>

          <div className="teammates-grid">
            <div className="form-section">
              <h3 className="section-title">
                <span className="member-number">01</span>
                Team Lead
              </h3>
              <div className="form-field">
                <label htmlFor="teamLeadName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="teamLeadName"
                  name="teamLeadName"
                  value={formData.teamLeadName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={errors.teamLeadName ? "input-error" : ""}
                />
                {errors.teamLeadName && <span className="error-text">{errors.teamLeadName}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="teamLeadUSN">
                  USN <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="teamLeadUSN"
                  name="teamLeadUSN"
                  value={formData.teamLeadUSN}
                  onChange={handleInputChange}
                  onBlur={handleUSNBlur}
                  placeholder="1MS22CS001"
                  className={errors.teamLeadUSN ? "input-error" : ""}
                />
                {errors.teamLeadUSN && <span className="error-text">{errors.teamLeadUSN}</span>}
              </div>
            </div>

            <div className="form-section">
              <h3 className="section-title">
                <span className="member-number">02</span>
                Teammate 2
              </h3>
              <div className="form-field">
                <label htmlFor="teammate2Name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="teammate2Name"
                  name="teammate2Name"
                  value={formData.teammate2Name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={errors.teammate2Name ? "input-error" : ""}
                />
                {errors.teammate2Name && <span className="error-text">{errors.teammate2Name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="teammate2USN">
                  USN <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="teammate2USN"
                  name="teammate2USN"
                  value={formData.teammate2USN}
                  onChange={handleInputChange}
                  onBlur={handleUSNBlur}
                  placeholder="1MS22CS002"
                  className={errors.teammate2USN ? "input-error" : ""}
                />
                {errors.teammate2USN && <span className="error-text">{errors.teammate2USN}</span>}
              </div>
            </div>

            <div className="form-section optional">
              <h3 className="section-title">
                <span className="member-number">03</span>
                Teammate 3 <span className="optional-tag">Optional</span>
              </h3>
              <div className="form-field">
                <label htmlFor="teammate3Name">Name</label>
                <input
                  type="text"
                  id="teammate3Name"
                  name="teammate3Name"
                  value={formData.teammate3Name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="teammate3USN">USN</label>
                <input
                  type="text"
                  id="teammate3USN"
                  name="teammate3USN"
                  value={formData.teammate3USN}
                  onChange={handleInputChange}
                  onBlur={handleUSNBlur}
                  placeholder="1MS22CS003"
                  className={errors.teammate3USN ? "input-error" : ""}
                />
                {errors.teammate3USN && <span className="error-text">{errors.teammate3USN}</span>}
              </div>
            </div>

            <div className="form-section optional">
              <h3 className="section-title">
                <span className="member-number">04</span>
                Teammate 4 <span className="optional-tag">Optional</span>
              </h3>
              <div className="form-field">
                <label htmlFor="teammate4Name">Name</label>
                <input
                  type="text"
                  id="teammate4Name"
                  name="teammate4Name"
                  value={formData.teammate4Name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="teammate4USN">USN</label>
                <input
                  type="text"
                  id="teammate4USN"
                  name="teammate4USN"
                  value={formData.teammate4USN}
                  onChange={handleInputChange}
                  onBlur={handleUSNBlur}
                  placeholder="1MS22CS004"
                  className={errors.teammate4USN ? "input-error" : ""}
                />
                {errors.teammate4USN && <span className="error-text">{errors.teammate4USN}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner" />
                Registering...
              </>
            ) : (
              <>
                <span>Register Team</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        ${sharedStyles}

        .back-to-home-btn {
          position: fixed;
          top: 30px;
          left: 30px;
          z-index: 99999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: rgba(139, 35, 50, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          border: 2px solid rgba(139, 35, 50, 1);
          box-shadow: 0 6px 25px rgba(139, 35, 50, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          will-change: transform;
        }

        .back-to-home-btn:hover {
          transform: translateX(-8px);
          background: #8B2332;
          box-shadow: 0 8px 30px rgba(139, 35, 50, 0.4);
        }

        .back-to-home-btn:active {
          transform: translateX(-4px) scale(0.98);
        }

        .register-content {
          position: relative;
          z-index: 10;
          margin: 0 auto;
          padding: 120px 40px 60px;
          max-width: 1300px;   /* was 1100px */
        }

        .register-header {
          text-align: center;
          margin-bottom: 40px;
        }

/* COMMON HIGHLIGHT ANIMATION BASE */
.highlight-animate {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 4px 8px;
  z-index: 1;
}

.highlight-animate::before {
  content: "";
  position: absolute;
  left: -120%;
  top: 0;
  width: 120%;
  height: 100%;
  background: linear-gradient(90deg, #ffe27a, #ffcf33, #ffb800);
  transform: skewX(-15deg);
  z-index: -1;
  animation: slide-highlight 1.1s ease forwards;
}

@keyframes slide-highlight {
  0% { left: -120%; }
  100% { left: 0%; }
}


.register-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin: 0 0 15px;
}

.title-main {
  font-family: 'Castledown', Impact, 'Arial Black', sans-serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  color: #8B2332;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: -90px;
}

.title-main.highlight-animate::before {
  background: linear-gradient(90deg, #ffd5d5, #ff9c9c, #ff6f6f);
}

.title-year {
  font-family: 'Courier New', monospace;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: #333;
  font-weight: 700;
}

.title-year.highlight-animate::before {
  background: linear-gradient(90deg, #d4e8ff, #9ecbff, #6fb4ff);
}

/* SUBTITLE */
.register-subtitle {
  font-family: 'Castledown', Impact, sans-serif;
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: #555;
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.register-subtitle.highlight-animate::before {
  background: linear-gradient(90deg, #ffe27a, #ffcf33, #ffb800);
}

        .register-description {
          font-size: 1rem;
          color: #666;
          margin: 0;
        }

        .server-error {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #b91c1c;
          font-size: 0.95rem;
          margin-bottom: 24px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .register-form {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 55px 60px;
          border: 1px solid rgba(139, 35, 50, 0.1);
          box-shadow: 0 25px 80px rgba(139, 35, 50, 0.08);
          max-width: 100%;    /* wider form card */
          margin: 0 auto;  
        }

        /* Team name spans full width */
        .team-name-field {
          margin-bottom: 30px;
          max-width: 400px;
        }

.teammates-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 40px;

  max-width: 90%;         /* prevents full stretch and centers */
  margin-left: auto;      /* centers horizontally */
  margin-right: auto;
}


        @media (max-width: 1024px) {
          .teammates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .teammates-grid {
            grid-template-columns: 1fr;
          }
          .register-form {
            padding: 24px;
          }
        }

        .form-section {
          position: relative;
          width: 100%;
          padding: 28px;
          background: rgba(139, 35, 50, 0.02);
          border-radius: 18px;
          border: 1px solid rgba(139, 35, 50, 0.06);
          transition: all 0.3s ease;
        }
        .form-section:not(:last-child)::after {
  content: "";
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(139, 35, 50, 0.08); /* soft line */
  transform: scaleY(0.6);
}

        .form-section:hover {
          border-color: rgba(139, 35, 50, 0.15);
          background: rgba(139, 35, 50, 0.06);
        }

        .form-section.optional {
          opacity: 0.85;
        }

        .form-section.optional:hover {
          opacity: 1;
        }

        .section-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #8B2332;
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .member-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #8B2332, #a52a2a);
          color: #fff;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .optional-tag {
          font-size: 0.65rem;
          font-weight: 500;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0;
          background: rgba(0,0,0,0.05);
          padding: 2px 8px;
          border-radius: 4px;
          margin-left: auto;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }

        .form-field:last-child {
          margin-bottom: 0;
        }

        .form-field label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #333;
        }

        .required {
          color: #dc2626;
        }

        .form-field input {
          padding: 12px 14px;
          border: 2px solid #e5e5e5;
          border-radius: 10px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: #fff;
        }

        .form-field input:focus {
          outline: none;
          border-color: #8B2332;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(139, 35, 50, 0.1);
        }

        .form-field input.input-error {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .error-text {
          font-size: 0.75rem;
          color: #dc2626;
        }

        .submit-btn {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          padding: 18px 32px;
          background: linear-gradient(135deg, #8B2332 0%, #a52a2a 100%);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(139, 35, 50, 0.3);
        }

        .submit-btn:hover:not(:disabled) svg {
          transform: translateX(4px);
        }

        .submit-btn svg {
          transition: transform 0.3s ease;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

const sharedStyles = `
  .register-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background: #FDF6F0;
  }

  /* Particles canvas */
  .particles-canvas {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  /* Grid pattern background */
  .grid-pattern {
    position: fixed;
    inset: 0;
    background-image: 
      linear-gradient(rgba(139, 35, 50, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(139, 35, 50, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
  }

  /* Hex grid overlay */
  .hex-grid {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%238B2332' fillOpacity='0.02'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  /* Floating code snippets */
  .code-float {
    position: fixed;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-weight: 700;
    color: rgba(139, 35, 50, 0.07);
    font-size: clamp(1.5rem, 4vw, 3rem);
    z-index: 1;
    pointer-events: none;
    user-select: none;
  }

  .code-1 {
    top: 8%;
    left: 5%;
    animation: drift 20s ease-in-out infinite;
  }

  .code-2 {
    top: 12%;
    right: 8%;
    font-size: clamp(2.5rem, 6vw, 5rem);
    animation: drift 25s ease-in-out infinite reverse;
  }

  .code-3 {
    bottom: 25%;
    left: 8%;
    animation: drift 18s ease-in-out infinite;
  }

  .code-4 {
    top: 45%;
    right: 5%;
    animation: drift 22s ease-in-out infinite reverse;
  }

  .code-5 {
    bottom: 40%;
    right: 12%;
    font-size: clamp(1.2rem, 3vw, 2rem);
    animation: drift 19s ease-in-out infinite;
  }

  .code-6 {
    top: 65%;
    left: 3%;
    animation: drift 24s ease-in-out infinite reverse;
  }

  .code-7 {
    top: 30%;
    left: 12%;
    font-size: clamp(1rem, 2.5vw, 1.8rem);
    animation: drift 21s ease-in-out infinite;
  }

  .code-8 {
    bottom: 15%;
    right: 6%;
    font-size: clamp(1rem, 2.5vw, 1.8rem);
    animation: drift 23s ease-in-out infinite reverse;
  }

  @keyframes drift {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.07;
    }
    25% {
      transform: translate(20px, -25px) rotate(3deg);
      opacity: 0.12;
    }
    50% {
      transform: translate(-15px, 20px) rotate(-2deg);
      opacity: 0.05;
    }
    75% {
      transform: translate(25px, 15px) rotate(2deg);
      opacity: 0.1;
    }
  }

  /* Floating brackets */
  .bracket {
    position: fixed;
    font-family: 'Fira Code', monospace;
    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 300;
    color: rgba(139, 35, 50, 0.03);
    z-index: 0;
    pointer-events: none;
  }

  .bracket-1 {
    top: 5%;
    left: 2%;
    animation: bracketFloat 15s ease-in-out infinite;
  }

  .bracket-2 {
    bottom: 5%;
    right: 2%;
    animation: bracketFloat 15s ease-in-out infinite reverse;
  }

  .bracket-3 {
    top: 40%;
    right: 3%;
    animation: bracketFloat 18s ease-in-out infinite;
  }

  .bracket-4 {
    bottom: 40%;
    left: 3%;
    animation: bracketFloat 18s ease-in-out infinite reverse;
  }

  @keyframes bracketFloat {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.03; }
    50% { transform: translateY(-20px) scale(1.05); opacity: 0.06; }
  }

  /* Glowing orbs */
  .glow-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 0;
    pointer-events: none;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 35, 50, 0.08) 0%, transparent 70%);
    top: -150px;
    right: -150px;
    animation: orbFloat 10s ease-in-out infinite;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(139, 35, 50, 0.06) 0%, transparent 70%);
    bottom: -100px;
    left: -100px;
    animation: orbFloat 12s ease-in-out infinite reverse;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(139, 35, 50, 0.05) 0%, transparent 70%);
    top: 35%;
    left: 15%;
    animation: orbFloat 14s ease-in-out infinite;
  }

  .orb-4 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(139, 35, 50, 0.04) 0%, transparent 70%);
    top: 60%;
    right: 10%;
    animation: orbFloat 16s ease-in-out infinite reverse;
  }

  @keyframes orbFloat {
    0%, 100% {
      transform: scale(1) translate(0, 0);
    }
    33% {
      transform: scale(1.1) translate(20px, -20px);
    }
    66% {
      transform: scale(0.95) translate(-15px, 15px);
    }
  }

  /* Circuit SVG */
  .circuit-svg {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .circuit-line {
    fill: none;
    stroke: rgba(139, 35, 50, 0.08);
    stroke-width: 0.2;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: drawLine 10s ease-in-out infinite;
  }

  .line-1 { animation-delay: 0s; }
  .line-2 { animation-delay: 2.5s; }
  .line-3 { animation-delay: 5s; }
  .line-4 { animation-delay: 7.5s; }

  @keyframes drawLine {
    0%, 100% {
      stroke-dashoffset: 300;
      opacity: 0.3;
    }
    50% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  .circuit-node {
    fill: rgba(139, 35, 50, 0.15);
  }

  .node-pulse {
    animation: nodePulse 2s ease-in-out infinite;
  }

  .circuit-node:nth-child(5) { animation-delay: 0.3s; }
  .circuit-node:nth-child(6) { animation-delay: 0.6s; }
  .circuit-node:nth-child(7) { animation-delay: 0.9s; }
  .circuit-node:nth-child(8) { animation-delay: 1.2s; }
  .circuit-node:nth-child(9) { animation-delay: 1.5s; }
  .circuit-node:nth-child(10) { animation-delay: 1.8s; }

  @keyframes nodePulse {
    0%, 100% {
      r: 1.5;
      opacity: 0.1;
    }
    50% {
      r: 3;
      opacity: 0.4;
    }
  }

  /* Binary strips */
  .binary-strip {
    position: fixed;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.65rem;
    color: rgba(139, 35, 50, 0.04);
    letter-spacing: 4px;
    writing-mode: vertical-rl;
    z-index: 1;
    pointer-events: none;
  }

  .strip-1 {
    top: 8%;
    left: 18%;
    animation: binaryScroll 20s linear infinite;
  }

  .strip-2 {
    top: 25%;
    right: 15%;
    animation: binaryScroll 25s linear infinite reverse;
  }

  .strip-3 {
    bottom: 15%;
    left: 28%;
    animation: binaryScroll 22s linear infinite;
  }

  .strip-4 {
    top: 50%;
    right: 25%;
    animation: binaryScroll 28s linear infinite reverse;
  }

  @keyframes binaryScroll {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    15% {
      opacity: 0.04;
    }
    85% {
      opacity: 0.04;
    }
    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }

  /* Scan line effect */
  .scan-line {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(139, 35, 50, 0.1), transparent);
    z-index: 2;
    pointer-events: none;
    animation: scanMove 8s linear infinite;
  }

  @keyframes scanMove {
    0% { top: -2px; opacity: 0; }
    5% { opacity: 1; }
    95% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  @media (max-width: 768px) {
    .code-float {
      font-size: clamp(1rem, 3vw, 2rem);
    }
    .code-2 {
      font-size: clamp(1.5rem, 5vw, 3rem);
    }
    .bracket {
      font-size: clamp(3rem, 10vw, 6rem);
    }
    .glow-orb {
      filter: blur(60px);
    }
    .orb-1 { width: 300px; height: 300px; }
    .orb-2 { width: 250px; height: 250px; }
    .orb-3 { width: 200px; height: 200px; }
    .orb-4 { display: none; }
    .hex-grid { opacity: 0.3; }
  }
`
