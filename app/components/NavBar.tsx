"use client";

import { useState } from "react";

const navLinks = [
  { href: "#packages", label: "Packages" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#mini-scan", label: "Mini AI Scan" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="border-b border-th-accent/20 bg-th-bg/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo / brand */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-[0.22em] uppercase text-th-text">
              Truhand Labs
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-th-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative transition hover:text-th-text"
              >
                {link.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-th-accent transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-x-0 bottom-0 mx-auto h-[2px] w-0 rounded-full bg-th-accent/60 blur-sm transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            aria-label="Toggle navigation"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-[5px]">
              <span className="h-[2px] w-5 bg-th-text" />
              <span className="h-[2px] w-5 bg-th-text" />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-th-bg/95 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm text-th-muted">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-1 hover:text-th-text"
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
