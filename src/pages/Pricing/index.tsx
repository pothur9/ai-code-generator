import React from 'react';
import { PricingPlans } from './components/PricingPlans';
import { FAQ } from './components/FAQ';

export function Pricing() {
  return (
    <div className="pt-16">
      <PricingPlans />
      <FAQ />
    </div>
  );
}