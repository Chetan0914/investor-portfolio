'use client';

import {
  Brain,
  Network,
  BarChart3,
  UserRoundCheck,
  Mail,
} from 'lucide-react';

const values = [
  {
    icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Mentorship & Guidance',
    description:
      '1-on-1 mentorship sessions, strategic input on GTM, operations, and a long-term partnership mindset.',
  },
  {
    icon: <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Networking & Ecosystem Access',
    description:
      'Introductions to key stakeholders, curated pitch events, and access to exclusive community sessions.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Expertise & Practical Support',
    description:
      'Tailored advice across HealthTech, AI/ML, FinTech, and ClimaTech, plus pitch training and hiring support.',
  },
  {
    icon: <UserRoundCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Flexible, Founder-Friendly Approach',
    description:
      'Accessible communication, founder-first mindset, transparency, and empathy from day one.',
  },
];

export default function ValueBeyondCapital() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Value Beyond Capital
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          More than just funding — Mr. Arshi becomes a long-term partner in your journey.
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

        {/* Get in Touch CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you believe Mr. Arshi is the right fit for your journey, reach out for mentorship, pitching sessions, or partnerships.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Contact Mr. Arshi
          </a>
        </div>
      </div>
    </section>
  );
}
