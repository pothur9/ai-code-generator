import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { ContactCTA } from './components/ContactCTA';

export function Enterprise() {
  return (
    <div className="pt-16">
      <Hero />
      <Features />
      <CaseStudies />
      <ContactCTA />
    </div>
  );
}