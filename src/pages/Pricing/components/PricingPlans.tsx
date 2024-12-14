import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for personal projects',
    features: [
      'Up to 3 projects',
      'Basic development environment',
      'Community support',
      'Basic templates'
    ]
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'For professional developers',
    features: [
      'Unlimited projects',
      'Advanced development tools',
      'Priority support',
      'All templates',
      'Custom domains'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'Dedicated support',
      'Custom contracts',
      'SLA guarantees'
    ]
  }
];

export function PricingPlans() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{plan.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-600 dark:text-gray-300">/month</span>}
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.name === 'Pro' ? 'primary' : 'outline'}
                className="mt-8 w-full"
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}