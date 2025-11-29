'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import FloatingNavbar from '@/components/Navbar/FloatingNavbar';
import { Layout } from '@/components/base';

const Hero = dynamic(() => import('@/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/sections/About'), { ssr: false });
const Prizes = dynamic(() => import('@/sections/Prizes'), { ssr: false });
const ProblemStatements = dynamic(() => import('@/sections/ProblemStatements'), { ssr: false });
const Stats = dynamic(() => import('@/sections/Stats'), { ssr: false });
const TalkingPoints = dynamic(() => import('@/sections/TalkingPoints'), { ssr: false });
const Projects = dynamic(() => import('@/sections/Projects'), { ssr: false });
const Testimonials = dynamic(() => import('@/sections/Testimonials'), { ssr: false });
const FAQ = dynamic(() => import('@/sections/FAQ'), { ssr: false });
const Footer = dynamic(() => import('@/sections/Footer'), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <FloatingNavbar />
      <Suspense fallback={<div />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div />}>
        <Prizes />
      </Suspense>
      <Suspense fallback={<div />}>
        <ProblemStatements />
      </Suspense>
      <Suspense fallback={<div />}>
        <About />
      </Suspense>
      <Suspense fallback={<div />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div />}>
        <TalkingPoints />
      </Suspense>
      <Suspense fallback={<div />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </Layout>
  );
}
