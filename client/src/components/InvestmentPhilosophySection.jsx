'use client';

import Link from 'next/link';
import { Lightbulb, Handshake, Target, CheckCircle } from 'lucide-react';

const principles = [
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: 'Founder-First Focus',
    description:
      'I invest in passionate, coachable founders solving real problems—not just business models.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-blue-600" />,
    title: 'Beyond Capital',
    description:
      'I bring strategic advice, mentorship, and access to my global network to help startups grow.',
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    title: 'Long-Term Impact',
    description:
      'Focused on creating lasting value over chasing fast exits or short-term wins.',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: 'Founder-Friendly Process',
    description:
      'Expect quick, clear communication with honest feedback at every stage.',
  },
];

export default function InvestmentPhilosophySection() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-20 border-b">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          What I Look for in Startups
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          A founder-first mindset focused on long-term impact, not just returns.
        </p>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/criteria">
            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg">
              Learn more about my investment criteria →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
