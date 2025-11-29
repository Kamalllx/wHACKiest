"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { mediaQueries } from "@/utils/responsive";
import * as THREE from "three";

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

// 2× font sizes
const PRIZE_FONT_SIZES = [
  140, 120, 90, 110, 90, 110,
  100, 130, 110, 120, 120, 120, 120, 120
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
          scale: 1.2,
          scaleMobile: 1.1,

          // ⭐ Slightly brighter background
          backgroundColor: 0x111026,

          color: 0x8b5cf6
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
      
      {/* ⭐ Section Heading */}
      <SectionHeading>
        PRIZES
      </SectionHeading>

      <ParticleOverlay>
        <ParticleCanvasWrapper>
          <ParticleTextEffect
            words={PRIZE_WORDS}
            fontSizes={PRIZE_FONT_SIZES}
            frameDelays={PRIZE_FRAME_DELAYS}
            colors={PRIZE_COLORS}
            transparent={true}
            className="particle-canvas"
          />
        </ParticleCanvasWrapper>
      </ParticleOverlay>

      <VantaBackground ref={vantaRef} />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;

  /* ⭐ Slightly brighter navy */
  background: #111026;

  overflow: hidden;
  padding-top: 80px;
`;

const SectionHeading = styled.h2`
  position: relative;
  z-index: 30;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  color: white;

  /* subtle glowing title */
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.4),
               0 0 30px rgba(139, 92, 246, 0.3);

  margin-bottom: 40px;

  @media (max-width: 700px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ParticleOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  pointer-events: none;
`;

const ParticleCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .particle-canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const VantaBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default Prizes;
