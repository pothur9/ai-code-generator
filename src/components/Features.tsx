import React from 'react';
import { Code2, Globe, Lock, Cloud } from 'lucide-react';

export function Features() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Everything you need to build amazing projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Powerful features that help you code faster and smarter
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              icon: <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: 'Intelligent Code Completion',
              description: 'Smart suggestions and auto-completion for faster development'
            },
            {
              icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: 'Collaborative Development',
              description: 'Work together in real-time with your team members'
            },
            {
              icon: <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: 'Secure by Default',
              description: 'Enterprise-grade security for your development environment'
            },
            {
              icon: <Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
              title: 'Cloud-Powered',
              description: 'Access your workspace from anywhere, anytime'
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}