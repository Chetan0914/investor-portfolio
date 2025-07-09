'use client';

import Link from 'next/link';

const portfolio = [
  {
    name: 'Howbout',
    description: 'AI-Powered Scheduling — Raised Series A in 2024',
    sector: 'AI/ML',
    status: 'Active',
    logo: '/logos/howbout.png', // Place this in /public/logos/
  },
  {
    name: 'Medix',
    description: 'Digital Health — Acquired by Health Corp, 2023',
    sector: 'HealthTech',
    status: 'Exited',
    logo: '/logos/medix.png',
  },
  {
    name: 'FinVerse',
    description: 'Embedded Finance — $10M follow-on round, 2025',
    sector: 'FinTech',
    status: 'Active',
    logo: '/logos/finverse.png',
  },
  {
    name: 'ClimaTech',
    description: 'Sustainability Solutions — Scaling carbon monitoring',
    sector: 'ClimaTech',
    status: 'Active',
    logo: '/logos/climatech.png',
  },
];

export default function PortfolioHighlights() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Portfolio Highlights
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          A few startups I've proudly backed — from health tech to climate solutions.
        </p>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolio.map((company, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 p-5 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-900"
            >
              <div className="flex items-center gap-4 mb-4">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-700 rounded" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {company.sector}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{company.description}</p>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  company.status === 'Active'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                }`}
              >
                {company.status}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg">
              View Full Portfolio →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
