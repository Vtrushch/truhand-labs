const packages = [
  {
    name: "Bronze",
    price: "From $500",
    description: "Perfect for a focused initial QA audit.",
    features: [
      "5 user flows",
      "Basic functional testing",
      "AI-assisted checks",
      "Console & network analysis",
      "Email PDF report",
    ],
  },
  {
    name: "Silver",
    price: "From $1,200",
    description: "For growing products needing deeper coverage.",
    features: [
      "12 regression flows",
      "Multi-browser execution",
      "Visual diff snapshots",
      "Accessibility checks",
      "Performance snapshot",
      "Detailed dashboard PDF",
    ],
  },
  {
    name: "Gold",
    price: "From $2,500",
    description: "Full-stack QA partnership for your team.",
    features: [
      "Full regression suite",
      "Chrome + Safari + mobile emulation",
      "Deep AI scanning (DOM, console, performance)",
      "Video proof of each flow",
      "Priority delivery & Slack integration",
      "Custom QA scripting + maintenance",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="w-full border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Packages
        </h2>
        <p className="text-th-muted text-center mb-12 max-w-2xl mx-auto">
          Choose a package that matches your current release cadence and risk
          tolerance. Upgrade as your QA needs grow.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col rounded-2xl bg-th-surface border border-th-accent/40 shadow-neon-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon"
            >
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                <p className="text-th-accent text-lg mb-1">{pkg.price}</p>
                <p className="text-xs text-th-muted">{pkg.description}</p>
              </div>
              <div className="px-6 pb-6 flex-1">
                <ul className="space-y-2 text-sm text-th-muted">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-th-accent-secondary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-th-accent px-4 py-2.5 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
                >
                  Request this package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
