"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import styled from "styled-components";

// Styled icon components to replace emojis
const IconWrapper = styled.span<{ $gradient?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #8b5cf6, #6366f1)'};
  margin-right: 8px;
`;

const RocketIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #8b5cf6, #6366f1)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  </IconWrapper>
);

const FormIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #a855f7, #7c3aed)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  </IconWrapper>
);

const CelebrationIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #3b82f6, #06b6d4)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
  </IconWrapper>
);

const LocationIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #06b6d4, #0ea5e9)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  </IconWrapper>
);

const ClockIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #f97316, #ef4444)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  </IconWrapper>
);

const LockIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #ef4444, #dc2626)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  </IconWrapper>
);

const MicIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #22c55e, #10b981)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  </IconWrapper>
);

const TrophyIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #eab308, #f59e0b)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  </IconWrapper>
);

const CodeIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #a855f7, #ec4899)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  </IconWrapper>
);

const BuildingIcon = () => (
  <IconWrapper $gradient="linear-gradient(135deg, #ec4899, #8b5cf6)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  </IconWrapper>
);

const MedalFirst = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
`;

const MedalSecond = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9ca3af, #6b7280);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(156, 163, 175, 0.4);
`;

const MedalThird = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f97316, #ea580c);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
`;

const SpecialStar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 28px;
    height: 28px;
    fill: #ec4899;
  }
`;

const timelineData = [
  {
    title: "Dec 1",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <RocketIcon /> Registration Opens
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Start your wHACKiest journey! Register your team and get ready for the biggest hackathon at RIT.
        </p>
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-3">
            <FormIcon />
            <span className="text-white font-semibold">Team Registration</span>
          </div>
          <ul className="text-neutral-300 text-sm space-y-2">
            <li>• Form teams of 2-4 members</li>
            <li>• Submit your innovative ideas</li>
            <li>• No registration fee required!</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Dec 4",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <CelebrationIcon /> Inauguration Ceremony
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Join us for the grand opening of wHACKiest 2025! Meet the organizers, sponsors, and fellow hackers.
        </p>
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-3">
            <LocationIcon />
            <span className="text-white font-semibold">ESB Seminar Hall 1</span>
          </div>
          <p className="text-neutral-300 text-sm">Time: 2:30 PM</p>
          <p className="text-neutral-300 text-sm mt-2">
            Problem statements will be revealed!
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Dec 7",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <ClockIcon /> Applications Close
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Last chance to submit your applications! Make sure your team details and idea submissions are complete.
        </p>
        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-6 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-3">
            <LockIcon />
            <span className="text-white font-semibold">Deadline: 6:00 PM</span>
          </div>
          <p className="text-neutral-300 text-sm">
            Don't miss out on this opportunity to showcase your skills!
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Dec 9-10",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <MicIcon /> Ideathon - Pitching Round
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Present your innovative ideas to our panel of judges. Top 60 teams will be selected for the main hackathon!
        </p>
        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-center gap-3 mb-3">
            <TrophyIcon />
            <span className="text-white font-semibold">Selection Round</span>
          </div>
          <ul className="text-neutral-300 text-sm space-y-2">
            <li>• 5-minute pitch per team</li>
            <li>• Q&A with judges</li>
            <li>• Top 60 teams advance</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Dec 12-13",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <CodeIcon /> 24-Hour Hackathon
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          The main event! Build, innovate, and compete for amazing prizes in this 24-hour coding marathon.
        </p>
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/30 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <BuildingIcon />
            <span className="text-white font-semibold">Venue: RIT Campus</span>
          </div>
          <p className="text-neutral-300 text-sm">
            Offline event with mentorship, workshops, and refreshments!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-500/30 text-center flex flex-col items-center">
            <MedalFirst>1</MedalFirst>
            <p className="text-yellow-400 font-bold mt-2">₹18,000</p>
            <p className="text-neutral-400 text-xs">1st Place</p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-500/30 text-center flex flex-col items-center">
            <MedalSecond>2</MedalSecond>
            <p className="text-gray-300 font-bold mt-2">₹12,000</p>
            <p className="text-neutral-400 text-xs">2nd Place</p>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/30 text-center flex flex-col items-center">
            <MedalThird>3</MedalThird>
            <p className="text-orange-400 font-bold mt-2">₹10,000</p>
            <p className="text-neutral-400 text-xs">3rd Place</p>
          </div>
          <div className="bg-pink-900/30 rounded-lg p-4 border border-pink-500/30 text-center flex flex-col items-center">
            <SpecialStar>
              <svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
            </SpecialStar>
            <p className="text-pink-400 font-bold mt-2">₹5,000</p>
            <p className="text-neutral-400 text-xs">Special Prizes</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function EventTimeline() {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Timeline data={timelineData} />
      </TimelineContainer>
    </TimelineWrapper>
  );
}

const TimelineWrapper = styled.section`
  position: relative;
  width: 100%;
  background: transparent;
  padding: 80px 0;
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;
