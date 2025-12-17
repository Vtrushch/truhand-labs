"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Overview" },
  { href: "#packages", label: "Packages" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#mini-scan", label: "Mini AI Scan" },
  { href: "/insights", label: "Insights" }, // NEW
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="bg-[#05070C]/80 backdrop-blur-xl border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3.5">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-th-accent rounded-md"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9">
              <Image
                src="/truhand-logo.svg"
                alt="Truhand Labs"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[11px] tracking-[0.24em] uppercase text-th-text">
                Truhand Labs
              </span>
              <span className="text-[10px] text-th-muted">
                QA &amp; AI Automation Studio
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-th-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-medium hover:text-th-text transition-colors focus:outline-none"
              >
                {link.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-th-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 hover:border-th-accent/40 transition focus:outline-none"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="h-[2px] w-5 bg-th-text" />
              <span className="h-[2px] w-5 bg-th-text" />
            </span>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#05070C]/95 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm text-th-muted">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 hover:text-th-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
