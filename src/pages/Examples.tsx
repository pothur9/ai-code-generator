import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card } from '../components/shared/Card';
import type { Example } from '../types';

export function Examples() {
  const examples: Example[] = [
    {
      id: '1',
      title: 'React Todo App',
      description: 'A complete todo application with React and TypeScript',
      tags: ['React', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=640'
    },
    {
      id: '2',
      title: 'Next.js Blog',
      description: 'Blog template built with Next.js and MDX',
      tags: ['Next.js', 'MDX', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=640'
    },
    {
      id: '3',
      title: 'E-commerce Store',
      description: 'Full-featured e-commerce store with shopping cart',
      tags: ['React', 'Redux', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=640'
    }
  ];

  return (
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Examples</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">Explore our collection of example projects</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {examples.map((example) => (
        <Card key={example.id} className="overflow-hidden">
          <img
            src={example.image}
            alt={example.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{example.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{example.description}</p>
          <div className="flex flex-wrap gap-2">
            {example.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </div>
  );
}