'use client';

import React from 'react';
import { InfoPage } from '@/components/base';
import { content, title } from '@/copy/privacy';

const sections = [
  { id: 'preface', title: 'Preface' },
  { id: 'terminology', title: 'Terminology' },
  { id: 'data-we-collect', title: 'Data we collect' },
  { id: 'data-we-share', title: 'Data we share' },
  { id: 'data-security', title: 'Data security' },
  { id: 'your-rights', title: 'Your rights' },
  { id: 'questions', title: 'Questions' },
];

export default function PrivacyPage() {
  return <InfoPage sections={sections} content={content} title={title} />;
}

