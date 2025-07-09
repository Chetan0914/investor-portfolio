'use client';

import { Cpu, HeartPulse, Leaf, Banknote, ShieldCheck, GraduationCap, Rocket, Waves, ShoppingBag, Gamepad, Coins, Factory } from 'lucide-react';

const sectors = [
  {
    level: 'Highly Interested',
    description: 'Actively looking to invest in these high-impact sectors.',
    color: 'bg-yellow-50 border-yellow-300 dark:bg-yellow-950 dark:border-yellow-700',
    items: [
      { label: 'HealthTech', icon: <HeartPulse /> },
      { label: 'AI / Machine Learning', icon: <Cpu /> },
      { label: 'Sustainability', icon: <Leaf /> },
      { label: 'FinTech', icon: <Banknote /> },
    ],
  },
  {
    level: 'Open to Explore',
    description: 'Exploring opportunities in these emerging areas.',
    color: 'bg-gray-50 border-gray-300 dark:bg-zinc-800 dark:border-gray-700',
    items: [
      { label: 'Cybersecurity', icon: <ShieldCheck /> },
      { label: 'AgriTech', icon: <Leaf /> },
      { label: 'EdTech', icon: <GraduationCap /> },
      { label: 'SpaceTech', icon: <Rocket /> },
      { label: 'BlueTech', icon: <Waves /> },
    ],
  },
  {
    level: 'Less Likely (But Open-Minded)',
    description: 'Will consider exceptional ideas in these categories.',
    color: 'bg-gray-50 border-gray-300 dark:bg-zinc-800 dark:border-gray-700',
    items: [
      { label: 'Retail & Consumer Goods', icon: <ShoppingBag /> },
      { label: 'Gaming & Media', icon: <Gamepad /> },
      { label: 'Web3 / Blockchain', icon: <Coins /> },
      { label: 'Manufacturing / Hardware', icon: <Factory /> },
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white dark:bg-black ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Industries & Domains of Interest
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Areas where I’m actively investing, open to exploring, or occasionally advising exceptional founders.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sectorGroup, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 shadow-sm ${sectorGroup.color} transition hover:shadow-md`}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {sectorGroup.level}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {sectorGroup.description}
              </p>

              <div className="space-y-3">
                {sectorGroup.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="w-5 h-5 text-blue-600 dark:text-blue-400">{item.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
