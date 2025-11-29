"use client";

import { SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import styled from "styled-components";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { useState } from "react";
import { GradientDots } from "@/components/ui/gradient-dots";

// NEW IMPORTS
import LightRays from "@/components/ui/LightRays";

export default function Hero() {
    const [active, setActive] = useState(true);

  return (
    <SectionWrapper id={SectionId.HERO}>

      {/* ===== FULL HERO BACKGROUND LIGHT RAYS ===== */}
      

      <HeroContainer>

        {/* ===== Pixelated Logo ===== */}
        <LogoWrapper>
          <PixelatedCanvasWrapper>
    <PixelatedCanvas
      src="/assets/img/logo/Logo_CodeRIT.png"
      width={600}
      height={340}
      cellSize={active ? 1 : 1}
      dotScale={active ? 0.4 : 1}
      shape="square"
      backgroundColor="transparent"
      distortionMode={active ? "glitch" : "none"}
      distortionStrength={active ? 1 : 0}
      distortionRadius={active ? 180 : 0}
      followSpeed={active ? 0.3: 0}
      jitterStrength={active ? 2 : 0}
      jitterSpeed={active ? 1 : 0}
      tintColor="#FFFFFF"
      tintStrength={active ? 0 : 0}
      interactive
      sampleAverage
      objectFit="contain"
      fadeOnLeave={true}
      fadeSpeed={0.08}
      className="pixelated-logo"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    />
          </PixelatedCanvasWrapper>
        </LogoWrapper>

        {/* ===== Static Multi-line Text ===== */}
        <StaticTextWrapper>
          <SubText>& Dept of CSE</SubText>
          <SubText>Presents</SubText>
        </StaticTextWrapper>

<TextHoverEffect text="wHACKiest" />

        {/* ===== Sparkles Underline - Below Text ===== */}
        <SparklesUnderlineWrapper>
          <div className="w-[40rem] h-32 relative">

            {/* Gradient Lines */}
            <div className="absolute inset-x-20 top-0 
                bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                h-[2px] w-3/4 blur-sm" />

            <div className="absolute inset-x-20 top-0 
                bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                h-px w-3/4" />

            <div className="absolute inset-x-60 top-0 
                bg-gradient-to-r from-transparent via-sky-500 to-transparent 
                h-[5px] w-1/4 blur-sm" />

            <div className="absolute inset-x-60 top-0 
                bg-gradient-to-r from-transparent via-sky-500 to-transparent 
                h-px w-1/4" />

            {/* Sparkles */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000000"
            />

            {/* Fade mask */}
            <div className="absolute inset-0 bg-transparent
                [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
          </div>
        </SparklesUnderlineWrapper>

        {/* ===== Event Info ===== */}
        <EventInfo>
          <EventDate>December 12-13, 2025</EventDate>
          <EventLocation>ESB Seminar Hall 1 • RIT Campus</EventLocation>
        </EventInfo>

      </HeroContainer>
    </SectionWrapper>
  );
}

/* ====================================================
                        BACKGROUND LIGHT RAYS
==================================================== */

const LightRaysBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

/* ====================================================
                        MAIN HERO
==================================================== */

const HeroContainer = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const PixelatedCanvasWrapper = styled.div`
  max-width: 600px;
  width: 100%;
`;

const StaticTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  gap: 2px;
`;

const SubText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
  text-align: center;
`;

const WHackiestWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
`;

const SparklesUnderlineWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1px;
  z-index: 2;
`;

const EventInfo = styled.div`
  margin-top: auto;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const EventDate = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #818cf8;
`;

const EventLocation = styled.p`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
`;
