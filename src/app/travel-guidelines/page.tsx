'use client';

import React from 'react';
import { InfoPage } from '@/components/base';
import { content, title } from '@/copy/travelGuidelines';

const sections = [
  { id: 'whackiest-buses', title: 'wHACKiest Buses' },
  { id: 'flight-bookings', title: 'Flight Bookings' },
  { id: 'driving', title: 'Driving' },
  { id: 'getting-to-campus', title: 'Getting to Campus' },
];

export default function TravelGuidelinesPage() {
  return <InfoPage sections={sections} content={content} title={title} />;
}

