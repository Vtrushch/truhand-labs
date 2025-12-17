import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full bg-hero-radial">
      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen bg-grid-lines bg-grid" />

      {/* glowing blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-th-accent/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-th-accent-secondary/22 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16 lg:pb-20 flex flex-col gap-16 lg:flex-row lg:items-center">
        {/* LEFT column */}
        <div className="lg:w-[56%] space-y-7 animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-th-accent/40 bg-black/60 px-4 py-1.5 text-[11px] font-medium text-th-muted shadow-neon-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            AI-powered QA partner for SaaS, fintech, and B2B teams.
          </p>

          <h1 className="text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-semibold leading-tight tracking-tight">
            We stress-test your product
            <span className="block text-th-accent">
              before your users do.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-th-muted max-w-xl">
            Truhand Labs blends Playwright automation, exploratory QA, and
            AI-driven analysis to catch bugs, regressions, and edge cases before
            they ever reach production.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full bg-th-accent px-7 py-3 text-sm sm:text-base font-semibold text-th-bg shadow-neon-soft hover:shadow-neon transition-transform hover:-translate-y-[1px]"
            >
              Book a Bronze QA Audit
            </a>

            <a
              href="#mini-scan"
              className="inline-flex items-center justify-center rounded-full border border-th-accent px-7 py-3 text-sm sm:text-base font-semibold text-th-accent hover:bg-th-accent/10 transition-transform hover:-translate-y-[1px]"
            >
              Run a Free Mini AI Scan
            </a>
          </div>

          {/* Stats strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs text-th-muted">
            <div>
              <p className="font-semibold text-th-text text-sm">
                10k+ test runs
              </p>
              <p>across SaaS, ecommerce, and internal tools.</p>
            </div>
            <div>
              <p className="font-semibold text-th-text text-sm">
                3–5× faster releases
              </p>
              <p>for teams with our automation suites.</p>
            </div>
            <div>
              <p className="font-semibold text-th-text text-sm">Stack</p>
              <p>Playwright · TypeScript · Next.js · AWS · Lighthouse</p>
            </div>
          </div>
        </div>

        {/* RIGHT column – scanner card + preview */}
        <div className="lg:w-[44%] flex flex-col gap-5">
          {/* AI scanner card */}
          <div className="rounded-2xl border border-th-accent/70 bg-black/80 p-6 shadow-neon-soft">
            <div className="mb-4 flex items-center justify-between text-[11px]">
              <span className="uppercase tracking-[0.2em] text-th-muted">
                AI Scanner
              </span>
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-red-400" />
              </span>
            </div>

            <div className="rounded-lg bg-th-bg/95 px-4 py-3 text-[11px] font-mono text-th-muted border border-white/10">
              <p>
                <span className="text-th-accent">ai</span> scan initialised…
              </p>
              <p>loading DOM tree…</p>
              <p>running accessibility checks…</p>
              <p>
                console errors detected:{" "}
                <span className="text-red-400 font-semibold">3</span>
              </p>
              <p className="mt-2 text-th-accent-secondary">
                › truhand-labs-audit.log
                <span className="inline-block w-2 h-4 align-middle animate-blink bg-th-accent ml-1" />
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-th-accent/90 bg-th-bg/90 shadow-neon-soft">
                <div className="absolute inset-[6px] rounded-full border border-th-accent-secondary/70" />
                <span className="text-[11px] text-th-muted text-center leading-tight">
                  System
                  <br />
                  <span className="text-th-accent text-2xl font-semibold">
                    86%
                  </span>
                </span>
              </div>

              <ul className="text-[11px] text-th-muted space-y-1">
                <li>✓ DOM coverage: 78%</li>
                <li>✓ A11y rules: 52 checked</li>
                <li>⚠ Console: 3 errors</li>
                <li>⚠ Perf budget: 4.1s LCP</li>
              </ul>
            </div>
          </div>

          {/* Screenshot / mocked dashboard */}
          <div className="rounded-2xl border border-white/10 bg-black/70 p-4 flex items-center gap-4 shadow-neon-soft">
            <div className="relative h-20 w-28 overflow-hidden rounded-xl bg-gradient-to-br from-th-accent/40 to-th-accent-secondary/20">
              <Image
                src="/truhand-dashboard-placeholder.png"
                alt="Truhand Labs report preview"
                fill
                className="object-cover opacity-90 mix-blend-screen"
              />
            </div>
            <div className="text-xs text-th-muted">
              <p className="font-semibold text-th-text mb-1">
                Clear QA snapshots
              </p>
              <p>
                Each run ships with a QA health score, key metrics, and a
                concise PDF summary your team can act on immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* logo strip */}
      <div className="relative border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap items-center gap-4 text-[11px] text-th-muted">
          <span className="uppercase tracking-[0.25em] text-[10px]">
            Trusted by teams using
          </span>
          <span className="h-[1px] w-10 bg-white/10" />
          <span>Playwright</span>
          <span>Next.js</span>
          <span>AWS</span>
          <span>Lighthouse</span>
          <span>GitHub Actions</span>
        </div>
      </div>
    </section>
  );
}
