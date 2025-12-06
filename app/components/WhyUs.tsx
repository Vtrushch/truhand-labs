const features = [
  {
    icon: "🕵️‍♂️",
    title: "Deep bug hunting",
    description:
      "We combine scripted flows with exploratory testing to catch real-world issues.",
  },
  {
    icon: "🤖",
    title: "AI-assisted analysis",
    description:
      "Accessibility, performance and console scans highlight issues instantly.",
  },
  {
    icon: "📹",
    title: "Video proof reports",
    description:
      "Every run includes video evidence and clean PDF summaries.",
  },
  {
    icon: "✅",
    title: "No bug — no pay",
    description:
      "If we find nothing in your regression run, you don’t pay for that cycle.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full border-b border-white/5 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Why choose us?
        </h2>
        <p className="text-th-muted text-center mb-12 max-w-2xl mx-auto">
          A focused partner for teams that care about quality, speed, and
          confidence in every release.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-th-surface/70 border border-th-accent/30 px-5 py-6 shadow-neon-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon"
            >
              <div className="mb-3 text-2xl">{feature.icon}</div>
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
