'use client';

import Image from 'next/image';

const portfolioItems = [
  {
    name: 'HealthBridge',
    sector: 'HealthTech',
    logo: '/logos/healthbridge.png',
    description: 'Telemedicine platform revolutionizing rural healthcare delivery.',
  },
  {
    name: 'NeuroFlow AI',
    sector: 'Artificial Intelligence',
    logo: '/logos/neuroflow.png',
    description: 'AI-based mental health diagnostics and treatment tools.',
  },
  {
    name: 'EcoCharge',
    sector: 'Sustainability',
    logo: '/logos/ecocharge.png',
    description: 'Clean energy storage and battery optimization startup.',
  },
  // Add more items here later
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 py-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Investment Portfolio
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-lg dark:shadow-gray-800 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
                {item.name}
              </h2>
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center mb-1">{item.sector}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
