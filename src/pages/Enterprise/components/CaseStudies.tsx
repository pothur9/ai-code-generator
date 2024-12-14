import React from 'react';
import { Card } from '../../../components/shared/Card';

const caseStudies = [
  {
    company: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
    quote: 'Bolt has transformed how our engineering team collaborates. Development time has been cut in half.',
    author: 'Sarah Chen',
    role: 'CTO at TechCorp'
  },
  {
    company: 'InnovateLabs',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
    quote: 'The enterprise features and security controls give us peace of mind while maintaining developer productivity.',
    author: 'Michael Rodriguez',
    role: 'VP of Engineering at InnovateLabs'
  },
  {
    company: 'GlobalTech',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
    quote: "Bolt enterprise solution has been instrumental in our digital transformation journey.",
    author: 'Emily Watson',
    role: 'Director of Technology at GlobalTech'
  }
];

export function CaseStudies() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            See how leading companies are transforming their development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8">
              <img
                src={study.logo}
                alt={`${study.company} logo`}
                className="w-16 h-16 rounded-full mb-6"
              />
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                {study.quote}
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {study.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {study.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}