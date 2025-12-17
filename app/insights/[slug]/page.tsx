import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { articles } from "../articles";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

/**
 * Cleaner content renderer:
 * - Headings: ## / ###
 * - Lists only start after a line that ends with ":" (e.g. "We often see:")
 * - Then consumes the following short lines as list items until blank line
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];

  let list: string[] = [];
  let inList = false;

  const flushList = (key: string) => {
    if (list.length === 0) return;
    nodes.push(
      <ul key={key} className="my-5 list-disc pl-6 space-y-1">
        {list.map((item, idx) => (
          <li key={`${key}-${idx}`} className="text-th-text/85">
            {item.replace(/^[•\-\*]\s*/, "").replace(/[,;]$/, "").trim()}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  const isListItemLine = (t: string) => {
    if (!t) return false;
    if (/^[•\-\*]\s+/.test(t)) return true;
    // short lines without sentence-ending punctuation are usually list items in your content
    if (t.length <= 70 && !/[.!?]$/.test(t)) return true;
    return false;
  };

  lines.forEach((raw, i) => {
    const t = raw.trim();

    // blank line
    if (!t) {
      inList = false;
      flushList(`ul-${i}`);
      return;
    }

    // headings
    if (t.startsWith("## ")) {
      inList = false;
      flushList(`ul-${i}`);
      nodes.push(
        <h2 key={`h2-${i}`} className="scroll-mt-28">
          {t.replace("## ", "")}
        </h2>
      );
      return;
    }
    if (t.startsWith("### ")) {
      inList = false;
      flushList(`ul-${i}`);
      nodes.push(
        <h3 key={`h3-${i}`} className="scroll-mt-28">
          {t.replace("### ", "")}
        </h3>
      );
      return;
    }

    // start list only after ":" line
    if (t.endsWith(":")) {
      inList = true;
      flushList(`ul-${i}`);
      nodes.push(
        <p key={`p-${i}`} className="text-th-text/85">
          {t}
        </p>
      );
      return;
    }

    // list items (only if we are in list mode)
    if (inList && isListItemLine(t)) {
      list.push(t);
      return;
    }

    // otherwise normal paragraph
    inList = false;
    flushList(`ul-${i}`);
    nodes.push(
      <p key={`p-${i}`} className="text-th-text/85">
        {t}
      </p>
    );
  });

  flushList("ul-end");
  return nodes;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Truhand Labs" },
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        {/* Back */}
        <div className="mb-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-th-muted hover:text-th-text transition"
          >
            <span aria-hidden>←</span> Back to Insights
          </Link>
        </div>

        {/* Layout */}
        <div className="grid gap-10 xl:gap-12 lg:grid-cols-[minmax(0,1fr),360px]">
          {/* Main */}
          <div>
            {/* Hero card */}
            <header className="mb-8 rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8 shadow-neon-soft">
              <p className="text-xs text-th-muted">
                {article.date} · Truhand Labs
              </p>

              <h1 className="mt-3 text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight">
                {article.title}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-th-muted max-w-3xl">
                {article.seoDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#mini-scan"
                  className="inline-flex items-center justify-center rounded-full bg-th-accent px-6 py-3 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
                >
                  Run free mini scan
                </Link>
                <Link
                  href="/#packages"
                  className="inline-flex items-center justify-center rounded-full border border-th-accent/60 bg-black/40 px-6 py-3 text-sm font-semibold text-th-accent hover:bg-th-accent/10 transition-colors"
                >
                  View packages
                </Link>
              </div>
            </header>

            {/* Article */}
            <article
              className="
                prose prose-invert max-w-none
                prose-headings:tracking-tight
                prose-p:leading-7
                prose-p:text-th-text/85
                prose-p:max-w-[72ch]
                prose-li:text-th-text/85
                prose-strong:text-th-text
                prose-a:text-th-accent
                prose-a:no-underline hover:prose-a:underline
                prose-h2:mt-10 prose-h2:mb-3
                prose-h3:mt-6 prose-h3:mb-2
              "
            >
              {/* CONTENT CARD (Pункт 2: фон) */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
                {renderContent(article.content)}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 rounded-3xl border border-th-accent/40 bg-black/70 p-6 sm:p-8">
                <h3 className="mt-0">Want to see what issues exist in your app?</h3>
                <p className="text-th-muted">
                  Run a free mini AI scan to preview the kind of signals we typically surface:
                  console errors, accessibility flags, and early performance warnings.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3 not-prose">
                  <Link
                    href="/#mini-scan"
                    className="inline-flex items-center justify-center rounded-full bg-th-accent px-6 py-3 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
                  >
                    Run free mini scan
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-th-text hover:bg-white/10 transition-colors"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </article>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-5">Related insights</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/insights/${a.slug}`}
                      className="group rounded-3xl border border-white/10 bg-black/60 p-6 hover:border-th-accent/60 hover:shadow-neon-soft transition"
                    >
                      <p className="text-xs text-th-muted">
                        {a.date} · Truhand Labs
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-th-text group-hover:drop-shadow-[0_0_14px_rgba(0,180,255,0.25)]">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm text-th-muted">{a.excerpt}</p>
                      <div className="mt-5 text-sm font-semibold text-th-accent">
                        Read <span aria-hidden>→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[96px] h-fit">
            <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-neon-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-th-muted">
                Quick actions
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  href="/#mini-scan"
                  className="w-full inline-flex items-center justify-center rounded-full bg-th-accent px-5 py-2.5 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
                >
                  Run free mini scan
                </Link>

                <Link
                  href="/#packages"
                  className="w-full inline-flex items-center justify-center rounded-full border border-th-accent/60 bg-black/40 px-5 py-2.5 text-sm font-semibold text-th-accent hover:bg-th-accent/10 transition-colors"
                >
                  Bronze QA audit
                </Link>

                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-th-text hover:bg-white/10 transition-colors"
                >
                  Contact us
                </Link>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-th-muted">
                <p className="font-semibold text-th-text mb-1">What you get (typical)</p>
                <ul className="space-y-1">
                  <li>• Console &amp; network signals</li>
                  <li>• Accessibility flags</li>
                  <li>• Performance snapshot</li>
                  <li>• Clear PDF summary</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
