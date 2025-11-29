"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"               // full responsive width
      height="100%"
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
      style={{
      maxWidth: "88%",
      overflow: "visible",
      marginBottom: "-70px",
      }}
    >
      <defs>
        {/* SCRATCH/FILL PATTERN FOR INITIAL VISIBILITY */}
<defs>
  {/* flowing color gradient changing over time */}
  <linearGradient id="lineColorFlow" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#ffd27f">
      <animate
        attributeName="stop-color"
        values="#ffd27f; #ffb3c6; #8ed8ff; #b46cff; #ffd27f"
        dur="12s"
        repeatCount="indefinite"
      />
    </stop>

    <stop offset="50%" stopColor="#8ed8ff">
      <animate
        attributeName="stop-color"
        values="#8ed8ff; #b46cff; #ffd27f; #ffb3c6; #8ed8ff"
        dur="12s"
        repeatCount="indefinite"
      />
    </stop>

    <stop offset="100%" stopColor="#b46cff">
      <animate
        attributeName="stop-color"
        values="#b46cff; #ffd27f; #8ed8ff; #ffb3c6; #b46cff"
        dur="12s"
        repeatCount="indefinite"
      />
    </stop>
  </linearGradient>

  {/* BEAUTIFUL cross-hatch lines that stay forever */}
  <pattern
    id="scratchFill"
    patternUnits="objectBoundingBox"
    patternContentUnits="objectBoundingBox"
    width="0.06"
    height="0.06"
  >
    <rect width="1" height="1" fill="transparent" />

    {/* diagonal ↘ lines */}
    <line
      x1="0"
      y1="0"
      x2="1"
      y2="1"
      stroke="url(#lineColorFlow)"
      strokeWidth="0.02"
      strokeLinecap="round"
    />

    {/* diagonal ↙ lines */}
    <line
      x1="1"
      y1="0"
      x2="0"
      y2="1"
      stroke="url(#lineColorFlow)"
      strokeWidth="0.02"
      strokeLinecap="round"
    />

    {/* fine vertical line for texture */}
    <line
      x1="0.5"
      y1="0"
      x2="0.5"
      y2="1"
      stroke="url(#lineColorFlow)"
      strokeWidth="0.008"
      strokeLinecap="round"
    />

    {/* fine horizontal line for extra texture */}
    <line
      x1="0"
      y1="0.5"
      x2="1"
      y2="0.5"
      stroke="url(#lineColorFlow)"
      strokeWidth="0.008"
      strokeLinecap="round"
    />
  </pattern>
</defs>





        {/* HOVER GRADIENT */}
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        {/* REVEAL MASK */}
<motion.radialGradient
  id="revealMask"
  gradientUnits="userSpaceOnUse"
  r="22%"
  initial={{ cx: "50%", cy: "50%" }}
  animate={maskPosition}
  transition={{ duration: duration ?? 0.0, ease: "easeOut" }}
>
  {hovered ? (
    <>
      <stop offset="0%" stopColor="white" />
      <stop offset="100%" stopColor="black" />
    </>
  ) : (
    <>
      <stop offset="0%" stopColor="black" />
      <stop offset="100%" stopColor="black" />
    </>
  )}
</motion.radialGradient>



        <mask id="textMask">
          <rect width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* INITIAL SCRATCH FILL TEXT (ALWAYS VISIBLE) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#scratchFill)"
        className="font-[helvetica] text-6xl font-bold"
        stroke="#000000ff"
        strokeWidth="0.2"
        opacity="1"
      >
        {text}  
      </text>

      {/* OUTLINE DRAW ANIMATION */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1.2"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-6xl font-bold dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* HOVER COLOR REVEAL TEXT */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1.2 "
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-6xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
