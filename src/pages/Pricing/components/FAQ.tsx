import React from 'react';
import { Card } from '../../../components/shared/Card';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. Your service will continue until the end of your billing period.'
  },
  {
    question: 'Do you offer educational discounts?',
    answer: 'Yes, we offer special pricing for educational institutions. Please contact our sales team for more information.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer email support for all plans, with priority support for Pro plans and dedicated support for Enterprise customers.'
  }
];

export function FAQ() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Have a question? We're here to help.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}