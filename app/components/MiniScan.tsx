"use client";

import { useState } from "react";

type ScanState = "idle" | "loading" | "done";

export default function MiniScan() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<ScanState>("idle");

  const runScan = () => {
    if (!url) return;
    setState("loading");
    setTimeout(() => {
      setState("done");
    }, 2000);
  };

  return (
    <section
      id="mini-scan"
      className="w-full border-b border-white/5 bg-th-bg/90"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Free Mini AI Scan
        </h2>
        <p className="text-th-muted text-center mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Enter any public URL and get a 60-second synthetic QA snapshot.
          Includes accessibility, performance, and console error preview.
        </p>

        <div className="mx-auto max-w-4xl rounded-2xl border border-th-accent/50 bg-th-surface/90 p-6 shadow-neon-soft">
          {/* Input + button row */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <label className="flex-1 text-sm text-th-muted">
              Website URL
              <input
                type="url"
                placeholder="https://your-app.com"
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-th-text outline-none focus:border-th-accent focus:ring-1 focus:ring-th-accent"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            <button
              type="button"
              onClick={runScan}
              className="md:mt-6 inline-flex items-center justify-center rounded-xl bg-th-accent px-5 py-2.5 text-sm font-semibold text-th-bg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-th-accent-secondary transition-colors"
              disabled={!url || state === "loading"}
            >
              {state === "loading" ? "Running scan…" : "Run mini scan"}
            </button>
          </div>

          {/* Scan states */}
          {state === "idle" && (
            <p className="text-xs text-th-muted">
              We simulate a lightweight headless run — no traffic or login is
              performed in this demo.
            </p>
          )}

          {state === "loading" && (
            <div className="flex flex-col gap-3 text-sm text-th-muted">
              <div className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border border-th-accent border-t-transparent" />
                <span>Initializing synthetic browser…</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full bg-th-accent/40" />
                <span>Analyzing accessibility landmarks…</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full bg-th-accent/40" />
                <span>Collecting console and network errors…</span>
              </div>
            </div>
          )}

          {state === "done" && (
            <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr,1.3fr] text-sm">
              {/* Score & issues */}
              <div className="space-y-4">
                <div className="rounded-xl border border-th-accent/40 bg-black/60 p-4">
                  <p className="text-xs text-th-muted mb-1">Health score</p>
                  <p className="text-3xl font-semibold text-th-accent">
                    81 / 100
                  </p>
                  <p className="mt-2 text-xs text-th-muted">
                    Good foundation. Some issues may impact accessibility and
                    perceived performance.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-th-muted mb-2">Top issues</p>
                  <ul className="space-y-2 text-th-muted">
                    <li>• Missing accessible labels on primary CTA buttons.</li>
                    <li>• 3 console errors linked to third-party scripts.</li>
                    <li>• Largest content element loads after 4.2 seconds.</li>
                  </ul>
                </div>
              </div>

              {/* Fake console output */}
              <div className="rounded-xl border border-white/15 bg-black/80 p-4 font-mono text-xs text-th-muted">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-th-text/80">console</span>
                  <span className="text-th-accent/80 text-[10px]">
                    synthetic-run #001
                  </span>
                </div>
                <pre className="whitespace-pre-wrap">
{`[info] Loaded URL: ${url}
[warn] [a11y] Button ".primary-cta" missing aria-label
[warn] [perf] LCP element exceeded 4000ms budget
[error] [console] TypeError: Cannot read properties of undefined (reading 'map')`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
