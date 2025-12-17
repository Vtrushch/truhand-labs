const packages = [
  {
    name: "Bronze",
    badge: "Best for first audit",
    price: "From $500",
    description: "Quick QA health-check on your most critical user flows.",
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
    badge: "Most popular",
    price: "From $1,200",
    description: "Deeper regression coverage across key browsers.",
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
    badge: "Full QA partnership",
    price: "From $2,500",
    description: "Ongoing QA automation and reporting as a service.",
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
    <section id="packages" className="w-full bg-th-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Packages
        </h2>
        <p className="text-th-muted text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Choose a package that matches your current release cadence and risk
          tolerance. Upgrade as your product and team grow.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl bg-black/70 border shadow-neon-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon ${
                i === 1
                  ? "border-th-accent/70"
                  : "border-white/10"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-6 rounded-full bg-th-accent/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-th-bg">
                  {pkg.badge}
                </div>
              )}

              <div className="px-6 pt-7 pb-4">
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
                  className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    i === 1
                      ? "bg-th-accent text-th-bg hover:bg-th-accent-secondary"
                      : "bg-white/5 text-th-text hover:bg-white/10"
                  }`}
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
