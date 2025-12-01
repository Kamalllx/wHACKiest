"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { mediaQueries } from "@/utils/responsive";
import * as THREE from "three";

// -----------------------------------------------------------------------------
// MATCHING BACKGROUND ELEMENTS (UNDER VANTA)
// -----------------------------------------------------------------------------

const BackgroundDecor = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image:
    linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 45px 45px;
`;

const FloatingBlobs = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 420px;
    height: 420px;
    filter: blur(150px);
    opacity: 0.12;
    border-radius: 50%;
    animation: floatBlob 16s infinite ease-in-out alternate;
  }

  &::before {
    top: -160px;
    left: -120px;
    background: #8b5cf6;
  }

  &::after {
    bottom: -160px;
    right: -120px;
    background: #0ea5e9;
    animation-delay: -6s;
  }

  @keyframes floatBlob {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(40px) scale(1.05); }
  }
`;

const CircuitLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  svg {
    opacity: 0.05;
  }

  mask-image: radial-gradient(circle at center, white 40%, transparent 80%);
`;

// -----------------------------------------------------------------------------
// PRIZES LOGIC (unchanged from your original)
// -----------------------------------------------------------------------------

const PRIZE_WORDS = [
  "wHACKiest",
  "PRIZE POOL",
  "Best Female Team",
  "Rs 5,000",
  "Best Freshers Team",
  "Rs 5,000",
  "2nd Runner Up",
  "Rs 10,000",
  "Runner Up",
  "Rs 12,000",
  "WINNER",
  "Rs 18,000",
  "GRAND TOTAL",
  "Rs 50,000"
];

// Desktop font sizes
const PRIZE_FONT_SIZES_DESKTOP = [
  140, 120, 90, 110, 90, 110,
  100, 130, 110, 120, 120, 120, 120, 120
];

// Mobile font sizes (scaled down)
const PRIZE_FONT_SIZES_MOBILE = [
  60, 50, 40, 48, 40, 48,
  44, 56, 48, 52, 52, 52, 52, 52
];

const PRIZE_FRAME_DELAYS = [
  200, 180, 160, 180, 160, 180,
  180, 200, 180, 220, 250, 280, 300, 400
];

const PRIZE_COLORS = [
  { r: 139, g: 92, b: 246 },
  { r: 59, g: 130, b: 246 },
  { r: 236, g: 72, b: 153 },
  { r: 255, g: 215, b: 0 },
  { r: 52, g: 211, b: 153 },
  { r: 255, g: 215, b: 0 },
  { r: 205, g: 127, b: 50 },
  { r: 255, g: 165, b: 0 },
  { r: 192, g: 192, b: 192 },
  { r: 255, g: 215, b: 0 },
  { r: 255, g: 215, b: 0 },
  { r: 255, g: 215, b: 0 },
  { r: 139, g: 92, b: 246 },
  { r: 255, g: 215, b: 0 }
];

declare global {
  interface Window {
    THREE: typeof THREE;
    VANTA: { RINGS: (opt: any) => any };
  }
}

const Prizes = () => {
  const vantaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let effect: any = null;

    const script = document.createElement("script");
    script.src = "/vanta.rings.min.js";
    script.async = true;

    script.onload = () => {
      if (window.VANTA && vantaRef.current) {
        effect = window.VANTA.RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          scale: 1.15,
          scaleMobile: 1.1,

          backgroundColor: 0x0d0c1c,
          color: 0x8b5cf6,
        });
      }
    };

    document.body.appendChild(script);
    return () => {
      effect?.destroy?.();
      script.remove();
    };
  }, []);

  return (
    <SectionContainer id="prizes">

      {/* BACKGROUND UNDERLAY */}
      <BackgroundDecor />
      <FloatingBlobs />

      <CircuitLines>
        <svg width="100%" height="100%">
          <path d="M140 0 L140 260 L460 260" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          <path d="M0 330 L260 330 L260 700" stroke="#ffffff" strokeWidth="2" fill="none" />
        </svg>
      </CircuitLines>

      {/* HEADING ON TOP */}
      <SectionHeading>PRIZES</SectionHeading>

      {/* PARTICLE TEXT (z-index 25) */}
      <ParticleOverlay>
        <ParticleCanvasWrapper>
          <ParticleTextEffect
            words={PRIZE_WORDS}
            fontSizes={isMobile ? PRIZE_FONT_SIZES_MOBILE : PRIZE_FONT_SIZES_DESKTOP}
            frameDelays={PRIZE_FRAME_DELAYS}
            colors={PRIZE_COLORS}
            transparent={true}
            className="particle-canvas"
          />
        </ParticleCanvasWrapper>
      </ParticleOverlay>

      {/* VANTA RINGS (z-index 20) */}
      <VantaBackground ref={vantaRef} />

      {/* NEON BEAM (z-index 30) */}
      <NeonBeam />

    </SectionContainer>
  );
};

// -----------------------------------------------------------------------------
// STYLED ELEMENTS
// -----------------------------------------------------------------------------

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #0d0c1c;
  overflow: hidden;
  padding-top: 0;
  
  ${mediaQueries.medium} {
    min-height: 60vh;
    height: auto;
  }
  
  @media (max-width: 480px) {
    min-height: 50vh;
  }
`;

/* Heading is on TOP of particles */
const SectionHeading = styled.h2`
  position: relative;
  z-index: 30;
  width: 100%;
  text-align: center;
  font-family: 'Castledown', Impact, 'Arial Black', sans-serif;
  font-size: 3.8rem;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: 6px;
  text-shadow:
    0 0 15px rgba(255, 215, 0, 0.5),
    0 0 30px rgba(139, 92, 246, 0.4),
    3px 3px 0 rgba(139, 92, 246, 0.25);
  margin-bottom: 40px;
  padding: 0 20px;

  ${mediaQueries.medium} {
    font-size: 2rem;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }
`;

const ParticleOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 25;
  pointer-events: none;
`;

const ParticleCanvasWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  .particle-canvas {
    width: 100% !important;
    height: 100% !important;
    max-width: 100%;
  }
`;

const VantaBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 20;  /* FIXED — Vanta ABOVE background, BELOW particles */
  pointer-events: none;
`;

const NeonBeam = styled.div`
  position: absolute;
  bottom: 0;
  height: 12px;
  width: 100%;
  z-index: 30;

  background: linear-gradient(
    90deg,
    #8b5cf6 0%,
    #a855f7 25%,
    #0ea5e9 50%,
    #a855f7 75%,
    #8b5cf6 100%
  );

  box-shadow:
    0 0 25px #8b5cf6,
    0 0 40px #0ea5e9,
    0 0 80px rgba(138, 92, 246, 0.7);
`;

export default Prizes;
