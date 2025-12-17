import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import MiniScan from "./components/MiniScan";
import ContactForm from "./components/ContactForm";

import Link from "next/link";
import { articles } from "./insights/articles";

export default function Home() {
  return (
    <main className="min-h-screen bg-th-bg text-th-text">
      <NavBar />

      {/* push content below fixed nav */}
      <div className="pt-[80px]">
        <Hero />
        <About />
        <HowItWorks />
        <Packages />
        <WhyUs />

        {/* ✅ INSIGHTS PREVIEW (inline, no new file) */}
        <section id="insights" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  Insights
                </h2>
                <p className="mt-3 text-th-muted max-w-2xl">
                  Practical articles on QA automation, Playwright regression,
                  AI-assisted analysis, and preventing production bugs.
                </p>
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-5 py-2 text-sm text-th-text hover:border-th-accent/50 hover:shadow-neon-soft transition"
              >
                View all insights <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group rounded-3xl border border-white/10 bg-black/60 p-6 hover:border-th-accent/60 hover:shadow-neon-soft transition"
                >
                  <p className="text-xs text-th-muted">
                    {article.date} · Truhand Labs
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-th-text group-hover:drop-shadow-[0_0_14px_rgba(0,180,255,0.35)]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-th-muted">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-th-accent">
                    Read → 
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <MiniScan />
        <ContactForm />

        {/* ✅ Footer */}
        <footer className="border-t border-white/10 bg-black/80 mt-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-center text-xs text-th-muted flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © {new Date().getFullYear()} Truhand LLC. Truhand Labs™ is a
              division of Truhand LLC.
            </p>
            <div className="flex gap-4">
              <Link href="/insights" className="hover:text-th-text transition">
                Insights
              </Link>
              <a href="#" className="hover:text-th-text transition">
                Privacy
              </a>
              <a href="#" className="hover:text-th-text transition">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
