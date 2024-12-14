import React from 'react';
import { Lock, Users, Zap, Shield, Globe, Clock } from 'lucide-react';
import { Card } from '../../../components/shared/Card';

const features = [
  {
    icon: <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with advanced security controls and audit logging'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Team Management',
    description: 'Centralized team management with role-based access control'
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'High Performance',
    description: 'Dedicated resources and optimized infrastructure for your team'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Compliance',
    description: 'GDPR, HIPAA, and other compliance standards supported'
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Global Infrastructure',
    description: 'Distributed infrastructure across multiple regions'
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: '24/7 Support',
    description: 'Enterprise-grade support with dedicated account management'
  }
];

export function Features() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Enterprise Features</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to scale your development workflow
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-start p-6">
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}