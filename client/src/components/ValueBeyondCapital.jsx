'use client';

import { Brain, Network, BarChart3, UserRoundCheck } from 'lucide-react';

const values = [
  {
    icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Strategic Mentorship',
    description:
      'Hands-on guidance on product, growth, hiring, and GTM from day one to scale.',
  },
  {
    icon: <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Global Network Access',
    description:
      'Warm introductions to top-tier co-investors, advisors, and industry operators.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Fundraising Support',
    description:
      'Help refining decks, positioning, and closing rounds with credibility.',
  },
  {
    icon: <UserRoundCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Founder-First Ethos',
    description:
      'Deep respect for founder autonomy, speed, and mental bandwidth.',
  },
];

export default function ValueBeyondCapital() {
  return (
    <section className="py-20 bg-white dark:bg-black border-b">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Value Beyond Capital
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          More than just funding — I become a long-term partner in your journey.
        </p>

        {/* Value Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-700 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                {value.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
