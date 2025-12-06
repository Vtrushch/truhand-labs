export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full border-b border-white/5 bg-hero-radial"
    >
      {/* subtle radial / particle-ish background */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-32 right-10 h-64 w-64 rounded-full bg-th-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-th-accent-secondary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 pt-32 pb-20 sm:px-6 md:flex-row md:items-center">
        {/* LEFT column */}
        <div className="md:w-1/2 space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-th-accent/40 bg-th-surface/60 px-4 py-1 text-xs font-medium text-th-muted shadow-neon-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-th-accent-secondary" />
            <span>AI-Powered QA &amp; Regression Testing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-th-text">
            We find the bugs your users will.
          </h1>

          <p className="text-base sm:text-lg text-th-muted max-w-xl">
            Truhand Labs combines automated Playwright flows, manual exploratory
            testing, and AI-assisted analysis to uncover issues before they hit
            production.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-xl bg-th-accent px-6 py-3 text-sm font-semibold text-th-bg shadow-neon hover:shadow-neon-soft transition-transform hover:-translate-y-[1px]"
            >
              Get a Bronze QA Audit
            </a>

            <a
              href="#mini-scan"
              className="inline-flex items-center justify-center rounded-xl border border-th-accent px-6 py-3 text-sm font-semibold text-th-accent hover:bg-th-accent/10 transition-transform hover:-translate-y-[1px]"
            >
              Run Free Mini AI Scan
            </a>
          </div>
        </div>

        {/* RIGHT column – AI scanner preview card */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-th-accent/50 bg-black/70 p-5 shadow-neon animate-pulse-glow">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-th-muted">
                AI Scanner Preview
              </span>
              <span className="h-2 w-2 rounded-full bg-th-accent-secondary shadow-neon-soft" />
            </div>

            {/* fake console / code */}
            <div className="rounded-lg bg-th-bg/80 px-4 py-3 text-xs font-mono text-th-muted border border-white/5">
              <p>
                <span className="text-th-accent">AI</span> Scan initialized…
              </p>
              <p>Loading DOM tree…</p>
              <p>Accessibility checks running…</p>
              <p>
                Console errors detected:{" "}
                <span className="text-red-400 font-semibold">3</span>
              </p>
              <p className="mt-2 text-th-accent-secondary">
                › audit.log
                <span className="inline-block w-2 h-4 align-middle animate-blink bg-th-accent ml-1" />
              </p>
            </div>

            {/* Gauge */}
            <div className="mt-6 flex items-center justify-between">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-th-accent/80 bg-th-bg/60 shadow-neon-soft">
                <div className="absolute inset-[6px] rounded-full border border-th-accent-secondary/60" />
                <span className="text-xs text-th-muted">
                  System
                  <br />
                  <span className="text-th-accent text-lg font-semibold">
                    82%
                  </span>
                </span>
              </div>

              <ul className="text-xs text-th-muted space-y-1">
                <li>✓ DOM coverage: 73%</li>
                <li>✓ A11y checks: 41 rules</li>
                <li>⚠ Console: 3 errors</li>
                <li>⚠ Performance budget: near limit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
