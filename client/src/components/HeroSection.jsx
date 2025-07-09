'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-black py-40 h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Empowering Visionary Founders to Build the Future
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Early-stage angel investor providing capital, mentorship, and a global network to transformative startups in HealthTech, AI, and Sustainability.
        </p>

        {/* Credibility Metrics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 dark:text-gray-300 mb-10">
          <span className="text-xl font-semibold">30+ Startups Backed</span>
          <span className="hidden md:inline">•</span>
          <span className="text-xl font-semibold">$20M+ Invested</span>
          <span className="hidden md:inline">•</span>
          <span className="text-xl font-semibold">5 Exits</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
              Submit Your Pitch
            </span>
          </Link>
          <Link href="/#portfolio">
            <span className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              View Portfolio
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
