'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What stage do you typically invest in?',
    answer: 'I focus on pre-seed to seed-stage startups — typically investing in the first institutional round.',
  },
  {
    question: 'Do you lead rounds?',
    answer: 'I’m flexible — I can lead, co-lead, or follow, depending on the founder and round structure.',
  },
  {
    question: 'What’s your typical check size?',
    answer: 'Usually $50K–$250K initially, with room for follow-on.',
  },
  {
    question: 'Do you invest outside India?',
    answer: 'Yes — I back founders globally, with strong emphasis on impact and market potential.',
  },
  {
    question: 'Will I get mentorship post-investment?',
    answer: 'Absolutely. I prefer founder-first, hands-on support — with your permission and pacing.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black border-b">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900 shadow-sm">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left text-gray-800 dark:text-white font-medium text-lg"
              >
                <span>{faq.question}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIndex === i && (
                <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
