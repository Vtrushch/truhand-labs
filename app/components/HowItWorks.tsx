const steps = [
  {
    title: "1. Onboard & scope",
    description:
      "We review your app, define critical paths, and connect to your staging or production-like environment. You get a clear proposal with flows, cadence, and pricing.",
  },
  {
    title: "2. Build smart flows",
    description:
      "We design Playwright flows and exploratory test charters that mirror actual user journeys: onboarding, checkout, dashboards, admin operations, and more.",
  },
  {
    title: "3. Run & analyze",
    description:
      "We execute runs with automated checks, AI analysis, and manual review. Console, performance, accessibility, and visual issues are surfaced immediately.",
  },
  {
    title: "4. Report & iterate",
    description:
      "You receive video proof, PDF summaries, and a prioritized bug list. We maintain and evolve the suite as your product changes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-black/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          How it works
        </h2>
        <p className="text-th-muted text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          A lightweight process designed for busy engineering teams. No QA
          bureaucracy — just focused, repeatable test runs that protect every
          release.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 hidden sm:block">
            <div className="h-full w-[2px] bg-gradient-to-b from-th-accent/60 via-white/10 to-th-accent-secondary/60" />
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative flex gap-4 sm:gap-6 rounded-2xl bg-th-surface/95 border border-white/10 px-5 py-5 sm:px-6 sm:py-6 shadow-neon-soft"
              >
                {/* bullet */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black border border-th-accent text-[11px] text-th-accent">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-th-text mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-th-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
