import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '../components/shared/Card';
import type { Template } from '../types';

const templates: Template[] = [
  {
    id: '1',
    name: 'React + TypeScript',
    description: 'Start a new React project with TypeScript and modern tooling',
    tags: ['React', 'TypeScript', 'Vite'],
    icon: '⚛️'
  },
  {
    id: '2',
    name: 'Next.js',
    description: 'Build full-stack web applications with Next.js',
    tags: ['Next.js', 'React', 'TypeScript'],
    icon: '▲'
  },
  // Add more templates...
];

export function Templates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Start with a template
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Choose from our collection of production-ready templates
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">{template.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}