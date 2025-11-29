"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import styled from "styled-components";

const timelineData = [
  {
    title: "Dec 1",
    content: (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          🚀 Registration Opens
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Start your wHACKiest journey! Register your team and get ready for the biggest hackathon at RIT.
        </p>
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">📝</span>
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
        <h3 className="text-2xl font-bold text-white mb-4">
          🎉 Inauguration Ceremony
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Join us for the grand opening of wHACKiest 2025! Meet the organizers, sponsors, and fellow hackers.
        </p>
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">📍</span>
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
        <h3 className="text-2xl font-bold text-white mb-4">
          ⏰ Applications Close
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Last chance to submit your applications! Make sure your team details and idea submissions are complete.
        </p>
        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-6 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🔒</span>
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
        <h3 className="text-2xl font-bold text-white mb-4">
          🎤 Ideathon - Pitching Round
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          Present your innovative ideas to our panel of judges. Top 60 teams will be selected for the main hackathon!
        </p>
        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🏆</span>
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
        <h3 className="text-2xl font-bold text-white mb-4">
          💻 24-Hour Hackathon
        </h3>
        <p className="text-neutral-300 text-sm md:text-base mb-6">
          The main event! Build, innovate, and compete for amazing prizes in this 24-hour coding marathon.
        </p>
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/30 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🏫</span>
            <span className="text-white font-semibold">Venue: RIT Campus</span>
          </div>
          <p className="text-neutral-300 text-sm">
            Offline event with mentorship, workshops, and refreshments!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-500/30 text-center">
            <span className="text-2xl">🥇</span>
            <p className="text-yellow-400 font-bold mt-2">₹18,000</p>
            <p className="text-neutral-400 text-xs">1st Place</p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-500/30 text-center">
            <span className="text-2xl">🥈</span>
            <p className="text-gray-300 font-bold mt-2">₹12,000</p>
            <p className="text-neutral-400 text-xs">2nd Place</p>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/30 text-center">
            <span className="text-2xl">🥉</span>
            <p className="text-orange-400 font-bold mt-2">₹10,000</p>
            <p className="text-neutral-400 text-xs">3rd Place</p>
          </div>
          <div className="bg-pink-900/30 rounded-lg p-4 border border-pink-500/30 text-center">
            <span className="text-2xl">⭐</span>
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
