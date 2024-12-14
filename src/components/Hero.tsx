import React from 'react';
import { ArrowRight, Terminal, Sparkles, Zap } from 'lucide-react';
import { Link} from 'react-router-dom';
export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Instant Dev Environments
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start coding instantly with pre-configured development environments.
            No setup required. Just code.
          </p>
          <div className="mt-10 flex justify-center gap-4">
          <Link to="/playground">
    <button
      aria-label="Navigate to playground"
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
    >
      Get Started
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </Link>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              View Examples
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: <Terminal className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
              title: "Instant Setup",
              description: "Start coding in seconds with pre-configured environments"
            },
            {
              icon: <Sparkles className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
              title: "Modern Stack",
              description: "Built with the latest technologies and best practices"
            },
            {
              icon: <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
              title: "Lightning Fast",
              description: "Optimized performance for seamless development"
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}