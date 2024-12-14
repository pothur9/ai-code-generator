import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Enterprise-Grade Development</span>
            <span className="block text-blue-600 dark:text-blue-400">Built for Teams</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Secure, scalable, and collaborative development environments for enterprise teams
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Contact Sales</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: "Enterprise Security",
              description: "SOC 2 Type II certified with advanced security controls"
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: "Team Collaboration",
              description: "Real-time collaboration with granular permissions"
            },
            {
              icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: "Global Infrastructure",
              description: "Distributed infrastructure for optimal performance"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}