"use client";

import React from "react";
import { motion } from "framer-motion";

export const GlowingCircuits = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Left side circuits */}
      <svg
        className="absolute left-0 top-0 h-full w-1/3 opacity-30"
        viewBox="0 0 200 800"
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <linearGradient id="circuit-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Static circuit lines */}
        <path
          d="M 20 0 L 20 200 L 60 240 L 60 400 L 30 430 L 30 600 L 80 650 L 80 800"
          fill="none"
          stroke="rgba(99, 102, 241, 0.15)"
          strokeWidth="1"
        />
        <path
          d="M 80 0 L 80 150 L 120 190 L 120 350 L 90 380 L 90 500 L 140 550 L 140 800"
          fill="none"
          stroke="rgba(99, 102, 241, 0.12)"
          strokeWidth="1"
        />
        <path
          d="M 140 0 L 140 100 L 180 140 L 180 300 L 150 330 L 150 450 L 190 490 L 190 800"
          fill="none"
          stroke="rgba(99, 102, 241, 0.1)"
          strokeWidth="1"
        />

        {/* Animated pulse along first path */}
        <motion.circle
          r="3"
          fill="#818cf8"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 20 0 L 20 200 L 60 240 L 60 400 L 30 430 L 30 600 L 80 650 L 80 800"
          />
        </motion.circle>

        {/* Circuit nodes */}
        <circle cx="20" cy="200" r="3" fill="rgba(99, 102, 241, 0.3)" />
        <circle cx="60" cy="240" r="3" fill="rgba(99, 102, 241, 0.3)" />
        <circle cx="60" cy="400" r="3" fill="rgba(99, 102, 241, 0.3)" />
        <circle cx="30" cy="430" r="3" fill="rgba(99, 102, 241, 0.3)" />
        <circle cx="80" cy="650" r="3" fill="rgba(99, 102, 241, 0.3)" />
      </svg>

      {/* Right side circuits */}
      <svg
        className="absolute right-0 top-0 h-full w-1/3 opacity-30"
        viewBox="0 0 200 800"
        preserveAspectRatio="xMaxYMin slice"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          d="M 20 0 L 20 200 L 60 240 L 60 400 L 30 430 L 30 600 L 80 650 L 80 800"
          fill="none"
          stroke="rgba(168, 85, 247, 0.15)"
          strokeWidth="1"
        />
        <path
          d="M 80 0 L 80 150 L 120 190 L 120 350 L 90 380 L 90 500 L 140 550 L 140 800"
          fill="none"
          stroke="rgba(168, 85, 247, 0.12)"
          strokeWidth="1"
        />
        <path
          d="M 140 0 L 140 100 L 180 140 L 180 300 L 150 330 L 150 450 L 190 490 L 190 800"
          fill="none"
          stroke="rgba(168, 85, 247, 0.1)"
          strokeWidth="1"
        />

        {/* Animated pulse */}
        <motion.circle
          r="3"
          fill="#a855f7"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
        >
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M 80 0 L 80 150 L 120 190 L 120 350 L 90 380 L 90 500 L 140 550 L 140 800"
          />
        </motion.circle>

        {/* Circuit nodes */}
        <circle cx="80" cy="150" r="3" fill="rgba(168, 85, 247, 0.3)" />
        <circle cx="120" cy="190" r="3" fill="rgba(168, 85, 247, 0.3)" />
        <circle cx="120" cy="350" r="3" fill="rgba(168, 85, 247, 0.3)" />
        <circle cx="90" cy="380" r="3" fill="rgba(168, 85, 247, 0.3)" />
        <circle cx="140" cy="550" r="3" fill="rgba(168, 85, 247, 0.3)" />
      </svg>

      {/* Hex pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 15v22L30 52 0 37V15z' fill='none' stroke='%236366f1' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }}
      />
    </div>
  );
};

export default GlowingCircuits;
