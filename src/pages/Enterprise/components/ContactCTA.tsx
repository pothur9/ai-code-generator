import React from 'react';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export function ContactCTA() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Ready to transform your development workflow?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Get in touch with our enterprise team to discuss your needs and learn how Bolt can help your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Talk to Sales
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discuss your requirements with our enterprise sales team
              </p>
              <Button className="w-full">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Schedule a Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                See Bolt Enterprise in action with a personalized demo
              </p>
              <Button variant="outline" className="w-full">
                Book Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}