const steps = [
  {
    title: "1. Onboard & scope",
    description:
      "We review your app, define critical flows, and connect to your staging or production-like environment.",
  },
  {
    title: "2. Build smart flows",
    description:
      "We design Playwright-based flows plus exploratory test charters tailored to your real-world user journeys.",
  },
  {
    title: "3. Run & analyze",
    description:
      "Our runs combine automated checks, AI-driven analysis, and manual review to surface meaningful issues.",
  },
  {
    title: "4. Report & iterate",
    description:
      "You get videos, PDF summaries, and actionable insights. We refine and maintain the suite over time.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full border-b border-white/5 bg-black/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-4 text-sm text-th-muted">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-th-surface/60 border border-white/10 px-5 py-6"
            >
              <h3 className="mb-3 text-th-text font-semibold text-base">
                {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
