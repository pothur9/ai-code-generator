import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card } from '../components/shared/Card';
import { BookOpen, Code, Terminal } from 'lucide-react';

export function Documentation() {
  const sections = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      link: '#getting-started'
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'API Reference',
      description: 'Detailed API documentation and examples',
      link: '#api-reference'
    },
    {
      icon: <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'CLI Documentation',
      description: 'Command-line interface usage and commands',
      link: '#cli-docs'
    }
  ];

  return (
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Documentation</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about using Bolt</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {sections.map((section, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <a href={section.link} className="block">
            <div className="flex flex-col items-center text-center">
              {section.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{section.description}</p>
            </div>
          </a>
        </Card>
      ))}
    </div>

    <div className="prose dark:prose-invert max-w-none">
      <h2 id="getting-started">Getting Started</h2>
      <p>Welcome to Bolt! This guide will help you get started with our platform...</p>
      
      <h2 id="api-reference">API Reference</h2>
      <p>Explore our comprehensive API documentation...</p>
      
      <h2 id="cli-docs">CLI Documentation</h2>
      <p>Learn how to use the Bolt CLI for maximum productivity...</p>
    </div>
  </div>
  );
}