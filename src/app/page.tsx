'use client';

import React, { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components';
import { Layout } from '@/components/base';
import { useNavColour } from '@/utils/hooks/useNavColour';

const Hero = dynamic(() => import('@/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/sections/About'), { ssr: false });
const Stats = dynamic(() => import('@/sections/Stats'), { ssr: false });
const TalkingPoints = dynamic(() => import('@/sections/TalkingPoints'), { ssr: false });
const Projects = dynamic(() => import('@/sections/Projects'), { ssr: false });
const Testimonials = dynamic(() => import('@/sections/Testimonials'), { ssr: false });
const Leaders = dynamic(() => import('@/sections/Leaders'), { ssr: false });
const Sponsors = dynamic(() => import('@/sections/Sponsors'), { ssr: false });
const FAQ = dynamic(() => import('@/sections/FAQ'), { ssr: false });
const Footer = dynamic(() => import('@/sections/Footer'), { ssr: false });

export default function Home() {
  const leadersRef = useRef<HTMLDivElement>(null);
  const NAV = useNavColour(leadersRef);

  return (
    <Layout>
      <Navbar colour={NAV} />
      <Suspense fallback={<div />}>
        <Hero />
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
        <div ref={leadersRef}>
          <Leaders />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <Sponsors />
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

