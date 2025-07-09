export default function CriteriaPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Investment Criteria
        </h1>

        {/* Sectors of Interest */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Sectors of Focus
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I actively invest in early-stage startups across the following innovation-driven sectors:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-400 text-base space-y-2">
            <li>HealthTech & Digital Health</li>
            <li>Artificial Intelligence & Automation</li>
            <li>ClimateTech & Sustainability</li>
            <li>Clean Energy & Battery Innovation</li>
            <li>Future of Work & Education</li>
          </ul>
        </div>

        {/* Stage of Investment */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Stage of Investment
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I typically participate in:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-400 text-base space-y-2">
            <li>Pre-Seed and Seed rounds (preferred)</li>
            <li>Occasional Series A if there's strong traction</li>
            <li>Initial check size between $25K – $250K</li>
          </ul>
        </div>

        {/* Founder Qualities */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            What I Look For in Founders
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-400 text-base space-y-2">
            <li>Deep domain expertise or personal insight into the problem</li>
            <li>Relentless execution ability and adaptability</li>
            <li>Clear vision with a strong narrative</li>
            <li>Ethical leadership and inclusive team culture</li>
          </ul>
        </div>

        {/* Impact & Responsibility */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Impact & Responsibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I give preference to startups that embed sustainability, accessibility, and ethical AI into their core product or operations.
          </p>
        </div>
      </div>
    </section>
  );
}
