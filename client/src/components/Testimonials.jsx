'use client';

const testimonials = [
  {
    quote:
      "Mr. Arshi was a game-changer for us — not just with capital, but the strategic clarity and network he brought.",
    name: 'Aisha Khan',
    role: 'Co-founder, NeuroPulse',
    image: '/founders/aisha.jpg', // Optional — place in public/founders/
  },
  {
    quote:
      "His input during our pivot was invaluable. He truly understands founders and gives space with accountability.",
    name: 'Rahul Mehta',
    role: 'CEO, EcoFlux',
    image: '', // fallback to initials
  },
  {
    quote:
      "He opened doors we didn’t even know existed. We closed our seed round faster than we expected.",
    name: 'Zara Patel',
    role: 'Founder, Finora',
    image: '/founders/zara.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-zinc-950 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          What Founders Say
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Honest, high-signal feedback and long-term partnership are at the heart of every investment I make.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Submit Your Pitch
          </a>
        </div>
      </div>
    </section>
  );
}
