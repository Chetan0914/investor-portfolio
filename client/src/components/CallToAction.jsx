'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to build something exceptional?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Whether you're raising your first round or scaling your next big thing — I'm here to support founders building for long-term impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-100 transition"
          >
            Submit Your Pitch
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
