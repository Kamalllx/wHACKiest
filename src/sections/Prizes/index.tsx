"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { mediaQueries } from "@/utils/responsive";
import * as THREE from "three";

// Prize data with progressive sizing - building up to Grand Prize
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
  "Rs 50,000+"
];

// Progressive font sizes - getting bigger towards Grand Prize
const PRIZE_FONT_SIZES = [
  70,   // wHACKiest
  60,   // PRIZE POOL
  45,   // Best Female Team
  55,   // Rs 5,000
  45,   // Best Freshers Team
  55,   // Rs 5,000
  50,   // 2nd Runner Up
  65,   // Rs 10,000
  55,   // Runner Up
  75,   // Rs 12,000
  80,   // WINNER
  95,   // Rs 18,000
  90,   // GRAND TOTAL
  130   // Rs 50,000+ - BIGGEST
];

// Frame delays - longer for important reveals
const PRIZE_FRAME_DELAYS = [
  200,  // wHACKiest
  180,  // PRIZE POOL
  160,  // Best Female Team
  180,  // Rs 5,000
  160,  // Best Freshers Team
  180,  // Rs 5,000
  180,  // 2nd Runner Up
  200,  // Rs 10,000
  180,  // Runner Up
  220,  // Rs 12,000
  250,  // WINNER
  280,  // Rs 18,000
  300,  // GRAND TOTAL
  400   // Rs 50,000+ - longest display
];

// Colors - vibrant neon colors
const PRIZE_COLORS = [
  { r: 139, g: 92, b: 246 },   // Purple - wHACKiest
  { r: 59, g: 130, b: 246 },   // Blue - Prize Pool
  { r: 236, g: 72, b: 153 },   // Pink - Best Female
  { r: 255, g: 215, b: 0 },    // Gold
  { r: 52, g: 211, b: 153 },   // Emerald - Freshers
  { r: 255, g: 215, b: 0 },    // Gold
  { r: 205, g: 127, b: 50 },   // Bronze
  { r: 255, g: 165, b: 0 },    // Orange
  { r: 192, g: 192, b: 192 },  // Silver
  { r: 255, g: 215, b: 0 },    // Gold
  { r: 255, g: 215, b: 0 },    // Gold - Winner
  { r: 255, g: 215, b: 0 },    // Gold
  { r: 139, g: 92, b: 246 },   // Purple - Grand Total
  { r: 255, g: 215, b: 0 },    // Ultimate Gold
];

declare global {
  interface Window {
    THREE: typeof THREE;
    VANTA: {
      RINGS: (options: VantaRingsOptions) => VantaEffect;
    };
  }
}

interface VantaRingsOptions {
  el: HTMLElement;
  THREE: typeof THREE;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number;
  color?: number;
}

interface VantaEffect {
  destroy: () => void;
  setOptions: (options: Partial<VantaRingsOptions>) => void;
}

const Prizes: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;
    let script: HTMLScriptElement | null = null;

    const loadVanta = async () => {
      if (!vantaRef.current) return;

      // Set THREE on window for Vanta
      window.THREE = THREE;

      // Load the Vanta script
      script = document.createElement("script");
      script.src = "/vanta.rings.min.js";
      script.async = true;
      
      script.onload = () => {
        if (window.VANTA && vantaRef.current) {
          effect = window.VANTA.RINGS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 0.6,  // Smaller rings
            scaleMobile: 0.5,
            backgroundColor: 0x141425,  // Original bg color
            color: 0x8b5cf6, // Purple rings
          });
          setVantaEffect(effect);
        }
      };

      document.body.appendChild(script);
    };

    loadVanta();

    return () => {
      if (effect) {
        effect.destroy();
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <SectionContainer id="prizes">
      {/* Particle Text Effect on top - Main focus */}
      <ParticleOverlay>
        <ParticleContainer>
          <ParticleTextEffect 
            words={PRIZE_WORDS}
            fontSizes={PRIZE_FONT_SIZES}
            frameDelays={PRIZE_FRAME_DELAYS}
            colors={PRIZE_COLORS}
            transparent={true}
            className="particle-canvas"
          />
        </ParticleContainer>
      </ParticleOverlay>
      
      {/* Vanta Rings below with gap */}
      <VantaBackground ref={vantaRef} />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background: #141425;
  padding-top: 80px;
`;

const ParticleOverlay = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const VantaBackground = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  max-height: 400px;
  z-index: 1;
  margin-top: 40px;
  
  ${mediaQueries.medium} {
    height: 40vh;
    max-height: 300px;
  }
  
  ${mediaQueries.largeMobile} {
    height: 35vh;
    max-height: 250px;
  }
`;

const ParticleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 50vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .particle-canvas {
    width: 100% !important;
    height: 100% !important;
    max-width: 1100px;
    max-height: 550px;
  }

  ${mediaQueries.medium} {
    height: 45vh;
    min-height: 350px;
  }

  ${mediaQueries.largeMobile} {
    height: 40vh;
    min-height: 300px;
  }
`;

export default Prizes;
