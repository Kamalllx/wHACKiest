"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import styled from "styled-components";
import { SectionId } from "@/constants";

// -----------------------------------------------------------------------------
// BACKGROUND ELEMENTS (Grid + Neon Blobs + Circuit Lines)
// -----------------------------------------------------------------------------

const BackgroundDecor = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  /* Subtle grid */
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;

  background-color: rgba(0, 0, 0, 0.25);
`;

const FloatingBlobs = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 450px;
    height: 450px;
    filter: blur(140px);
    opacity: 0.12;
    border-radius: 50%;
    animation: float 14s infinite ease-in-out alternate;
  }

  &::before {
    top: -120px;
    left: -80px;
    background: #9a4dff;
  }

  &::after {
    bottom: -120px;
    right: -80px;
    background: #00e0ff;
    animation-delay: -7s;
  }

  @keyframes float {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(60px) scale(1.1); }
  }
`;

const CircuitLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  mask-image: radial-gradient(circle at center, white 30%, transparent 80%);

  svg {
    opacity: 0.08;
  }
`;

// -----------------------------------------------------------------------------
// ICON SET (Your existing icons, untouched)
// -----------------------------------------------------------------------------

const IconBase = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center justify-center text-zinc-100 ${className}`}>
    {children}
  </div>
);

const RocketIcon = () => (
  <IconBase>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  </IconBase>
);

const micSvgStyle = { transform: "translateY(-1px)" };

const MicIcon = () => (
  <IconBase>
    <svg
      width="28"
      height="28"
      style={micSvgStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
    </svg>
  </IconBase>
);

const FlagIcon = () => (
  <IconBase>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
      <line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  </IconBase>
);

const ClockIcon = () => (
  <IconBase>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  </IconBase>
);

const PresentationIcon = () => (
  <IconBase>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h20"/>
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/>
      <path d="m7 21 5-5 5 5"/>
    </svg>
  </IconBase>
);

const MailCheckIcon = () => (
  <IconBase>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      <path d="m16 19 2 2 4-4"/>
    </svg>
  </IconBase>
);

const CodeIcon = () => (
  <IconBase>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  </IconBase>
);

// -----------------------------------------------------------------------------
// TIMELINE WRAPPERS
// -----------------------------------------------------------------------------

const TimelineWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 140px 0;
  z-index: 0;
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
`;

// -----------------------------------------------------------------------------
// TIMELINE CONTENT (Your original timeline untouched)
// -----------------------------------------------------------------------------

const timelineData = [
  {
    title: "Dec 1",
    content: (
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <RocketIcon />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Kickoff
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Registration Opens
        </h3>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          The gateway to innovation opens here. Register your squad for the premier hackathon at RIT. 
          Submit your innovative ideas early.
        </p>

        <div className="flex flex-wrap gap-8 text-base text-zinc-300 font-medium">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-zinc-600"></span>
            Team Size: 2-4 Members
          </div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-zinc-600"></span>
            Registration Fee: Free
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Dec 4",
    content: (
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <FlagIcon />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            14:30 IST
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Inauguration Ceremony
        </h3>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-2">
          Join us at <span className="text-white">ESB Seminar Hall 1</span>.
        </p>
        <p className="text-zinc-500 text-base">
          Unveiling problem statements. Introduction to mentors and sponsors.
        </p>
      </div>
    ),
  },

  {
    title: "Dec 6",
    content: (
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <ClockIcon />
          <span className="text-red-500 font-mono text-sm uppercase tracking-widest">
            Deadline
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Applications Close
        </h3>

        <div className="border-l-2 border-red-500 pl-6">
          <p className="text-zinc-200 text-xl font-semibold mb-2">11:59 PM Sharp</p>
          <p className="text-zinc-500 text-base">
            Ensure team details are finalized. No late entries accepted.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "Dec 9-10",
    content: (
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <PresentationIcon />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Selection Round
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Ideathon: The Pitch
        </h3>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
          5-minute rapid fire pitch to industry judges. Prove your concept's viability.
        </p>
      </div>
    ),
  },

  {
    title: "Dec 11",
    content: (
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <MailCheckIcon />
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest">
            18:00 IST
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Ideathon Results
        </h3>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-200 text-lg font-medium">
              Announcement of 60 Finalist Teams
            </span>
            <span className="text-zinc-500 text-sm">
              Top teams selected to proceed to the main event.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-200 text-lg font-medium">
              Offline Participation Confirmation
            </span>
            <span className="text-zinc-500 text-sm">
              Selected teams must confirm attendance for Dec 12-13.
            </span>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Dec 12-13",
    content: (
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <CodeIcon />
          <span className="text-purple-500 font-mono text-sm uppercase tracking-widest">
            The Main Event
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Grand Finale
        </h3>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
          24 hours of relentless innovation at RIT Campus. Build, break, and deploy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-8">
          <div>
            <p className="text-3xl font-bold text-white mb-1">₹18k</p>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
              Winner
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-zinc-300 mb-1">₹12k</p>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
              Runner Up
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-zinc-300 mb-1">₹10k</p>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
              2nd Runner
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-zinc-300 mb-1">₹5k</p>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
              Special
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------

export default function EventTimeline() {
  return (
    <TimelineWrapper id={SectionId.TIMELINE}>
      <BackgroundDecor />
      <FloatingBlobs />

      <CircuitLines>
        <svg width="100%" height="100%">
          <path d="M0 200 L300 200 L300 600 L700 600" stroke="#ffffff" strokeWidth="2" fill="none" />
          <path d="M100 0 L100 300 L500 300" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        </svg>
      </CircuitLines>

      <TimelineContainer>
        <Timeline data={timelineData} />
      </TimelineContainer>
    </TimelineWrapper>
  );
}
