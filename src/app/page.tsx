'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import FloatingNavbar from '@/components/Navbar/FloatingNavbar';
import { Layout } from '@/components/base';

const Hero = dynamic(() => import('@/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/sections/About'), { ssr: false });
const Prizes = dynamic(() => import('@/sections/Prizes'), { ssr: false });
const EventTimeline = dynamic(() => import('@/sections/EventTimeline'), { ssr: false });
const ProblemStatements = dynamic(() => import('@/sections/ProblemStatements'), { ssr: false });
const Stats = dynamic(() => import('@/sections/Stats'), { ssr: false });
const TalkingPoints = dynamic(() => import('@/sections/TalkingPoints'), { ssr: false });
const Projects = dynamic(() => import('@/sections/Projects'), { ssr: false });
const Testimonials = dynamic(() => import('@/sections/Testimonials'), { ssr: false });
const FAQ = dynamic(() => import('@/sections/FAQ'), { ssr: false });
const Footer = dynamic(() => import('@/sections/Footer'), { ssr: false });

// Upstack animation section wrapper
const UpstackSection = ({ 
  children, 
  delay = 0,
  allowSticky = false 
}: { 
  children: React.ReactNode; 
  delay?: number;
  allowSticky?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`upstack-section ${allowSticky ? 'allow-sticky' : ''}`}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero takes full control - no Layout wrapper */}
      <Hero />
      
      {/* Main content with upstacking animation */}
      <div className="main-content-wrapper">
        <Layout>
          <FloatingNavbar />
          
          <UpstackSection delay={0}>
            <Suspense fallback={<div />}>
              <Prizes />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100} allowSticky>
            <Suspense fallback={<div />}>
              <EventTimeline />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100}>
            <Suspense fallback={<div />}>
              <ProblemStatements />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100} allowSticky>
            <Suspense fallback={<div />}>
              <About />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100}>
            <Suspense fallback={<div />}>
              <Stats />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100} allowSticky>
            <Suspense fallback={<div />}>
              <TalkingPoints />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100}>
            <Suspense fallback={<div />}>
              <Projects />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100}>
            <Suspense fallback={<div />}>
              <Testimonials />
            </Suspense>
          </UpstackSection>
          
          <UpstackSection delay={100}>
            <Suspense fallback={<div />}>
              <FAQ />
            </Suspense>
          </UpstackSection>
          
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </Layout>
      </div>
    </>
  );
}
