"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-4 text-white max-w-4xl font-bold">
          Event Timeline
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg">
          Mark your calendars! Here's everything you need to know about wHACKiest 2025.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Glowing marker dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        
        {/* Neon timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-purple-900/30 to-transparent"
        >
          {/* Animated neon fill */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] rounded-full"
            initial={{ boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)' }}
          >
            {/* Core neon line */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-500 to-purple-600 rounded-full" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-500 to-purple-600 rounded-full blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-500 to-purple-600 rounded-full blur-md opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
