import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "./articles";



export const metadata: Metadata = {
  title: "Insights | Truhand Labs",
  description:
    "Articles and insights on Playwright QA automation, AI-assisted testing, regression strategy, and real-world bug prevention.",
};

export default function InsightsPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">Insights</h1>
        <p className="text-th-muted max-w-2xl">
          Practical articles on QA automation, Playwright testing, AI-assisted
          analysis, and preventing production bugs.
        </p>
      </div>

      {/* Top panel (enterprise feel) */}
      <div className="mb-10 rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8 shadow-neon-soft">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-th-muted mb-2">
              Truhand Labs Knowledge Base
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold">
              QA strategy, Playwright automation &amp; AI-assisted testing
            </h2>
            <p className="mt-2 text-sm text-th-muted">
              Short, actionable reads. Built for product teams that want fewer
              regressions, faster releases, and clearer QA signals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#mini-scan"
              className="inline-flex items-center justify-center rounded-full bg-th-accent px-5 py-2.5 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
            >
              Run free mini scan
            </Link>
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center rounded-full border border-th-accent/60 bg-black/40 px-5 py-2.5 text-sm font-semibold text-th-accent hover:bg-th-accent/10 transition-colors"
            >
              View packages
            </Link>
          </div>
        </div>

        {/* Search (UI only) */}
        <div className="mt-6">
          <label className="block text-xs font-medium text-th-muted mb-1">
            Search (coming soon)
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search topics: regression, Playwright, AI, accessibility…"
              className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-th-text outline-none focus:border-th-accent focus:ring-1 focus:ring-th-accent"
              disabled
            />
            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-th-muted cursor-not-allowed"
              disabled
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <Link
          href={`/insights/${featured.slug}`}
          className="group mb-8 block rounded-3xl border border-th-accent/40 bg-gradient-to-b from-th-accent/10 to-black/60 p-6 sm:p-8 hover:border-th-accent/70 hover:shadow-neon transition"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs text-th-muted mb-1">
                Featured · {featured.date} · Truhand Labs
              </p>
              <h2 className="text-2xl font-semibold mb-2 group-hover:drop-shadow-[0_0_14px_rgba(0,180,255,0.35)]">
                {featured.title}
              </h2>
              <p className="text-sm text-th-muted max-w-3xl">{featured.excerpt}</p>
            </div>

            <div className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-th-accent">
              Read <span aria-hidden>→</span>
            </div>
          </div>
        </Link>
      )}

      {/* Articles grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group block rounded-3xl border border-white/10 bg-black/60 p-6 hover:border-th-accent/60 hover:shadow-neon-soft transition"
          >
            <p className="text-xs text-th-muted mb-1">
              {article.date} · Truhand Labs
            </p>

            <h3 className="text-lg font-semibold mb-2 text-th-text group-hover:drop-shadow-[0_0_14px_rgba(0,180,255,0.25)]">
              {article.title}
            </h3>

            <p className="text-sm text-th-muted">{article.excerpt}</p>

            <div className="mt-5 text-sm font-semibold text-th-accent">
              Read <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Want a quick snapshot of your app’s health?
        </h3>
        <p className="text-sm text-th-muted mb-5 max-w-2xl mx-auto">
          Run a free mini AI scan to preview what we typically surface in a first audit:
          accessibility flags, console errors, and performance signals.
        </p>
        <Link
          href="/#mini-scan"
          className="inline-flex items-center justify-center rounded-full bg-th-accent px-6 py-3 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
        >
          Run free mini scan
        </Link>
      </div>
    </>
  );
}
