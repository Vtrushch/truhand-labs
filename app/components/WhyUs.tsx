const features = [
  {
    icon: "🕵️‍♂️",
    title: "Deep bug hunting",
    description:
      "We combine scripted Playwright flows with exploratory testing to catch the weird, real-world issues that break user trust.",
  },
  {
    icon: "🤖",
    title: "AI-assisted analysis",
    description:
      "Accessibility, performance, console, and DOM scans highlight critical issues instantly—not buried in logs.",
  },
  {
    icon: "📹",
    title: "Video proof reports",
    description:
      "Every run includes video evidence and clean PDF summaries that PMs, devs, and stakeholders can all understand.",
  },
  {
    icon: "✅",
    title: "No bug — no pay",
    description:
      "If we genuinely find nothing in a regression run, you don’t pay for that cycle. We’re incentivised to add real value.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-black/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Why choose Truhand Labs?
        </h2>
        <p className="text-th-muted text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          A focused QA partner for teams that care about stability, speed, and
          real-world user experience — not just checking boxes.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-black/70 border border-white/10 px-5 py-6 shadow-neon-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon"
            >
              <div className="mb-3 flex items-center justify-center h-9 w-9 rounded-full bg-th-accent/20 text-lg">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold mb-2 text-th-text">
                {feature.title}
              </h3>
              <p className="text-sm text-th-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
