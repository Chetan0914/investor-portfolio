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
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Investment Portfolio</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                {/* Use Image from next/image if logos are local */}
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.sector}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
