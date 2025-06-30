'use client';

import Link from 'next/link';

const insights = [
  {
    title: 'How AI Is Transforming Early-Stage Startups',
    category: 'Blog Post',
    description:
      'Anwar shares his view on how generative AI is impacting product development, team structures, and founder decisions.',
    link: '#',
  },
  {
    title: '2024 HealthTech Investment Trends',
    category: 'Report',
    description:
      'A downloadable deep dive into emerging health tech solutions and investment benchmarks from the past year.',
    link: '#',
  },
  {
    title: 'Interview on the "Startup Circle" Podcast',
    category: 'Podcast',
    description:
      'Mr. Arshi discusses founder resilience and lessons learned from 30+ startup journeys.',
    link: '#',
  },
];

export default function InsightsPage() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Insights & Resources</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm font-medium text-blue-600 mb-1">{item.category}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Link
                href={item.link}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
