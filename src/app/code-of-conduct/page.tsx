'use client';

import React from 'react';
import { InfoPage } from '@/components/base';
import { content, title } from '@/copy/codeOfConduct';

const sections = [
  { id: 'quick-version', title: 'Quick Version' },
  { id: 'full-version', title: 'Full Version' },
  { id: 'harassment-discrimination-policy', title: 'Harassment & Discrimination Policy' },
  { id: 'mlh-code-of-conduct', title: 'MLH Code of Conduct' },
];

export default function CodeOfConductPage() {
  return <InfoPage sections={sections} content={content} title={title} />;
}

