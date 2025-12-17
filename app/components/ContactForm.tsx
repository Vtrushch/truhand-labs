"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CONTACT FORM SUBMITTED:", form);
    alert("Your message has been sent (placeholder).");
  };

  return (
    <section id="contact" className="w-full bg-th-bg">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl border border-th-accent/50 bg-black/75 p-8 sm:p-10 shadow-neon-soft">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Contact Truhand Labs
          </h2>
          <p className="text-sm sm:text-base text-th-muted mb-8 max-w-xl">
            Tell us about your product, stack, and deployment cadence. We
            typically reply within 24 hours with a suggested approach and
            available start dates.
          </p>

          <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-th-muted mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-th-text outline-none focus:border-th-accent focus:ring-1 focus:ring-th-accent"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-th-muted mb-1">
                  Work email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-th-text outline-none focus:border-th-accent focus:ring-1 focus:ring-th-accent"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-th-muted mb-1">
                Company / Project URL
              </label>
              <input
                name="company"
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-th-text outline-none focus:border-th-accent focus:ring-1 focus:ring-th-accent"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-th-muted mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-th-text outline-none focus:border-th-accent focus:ring-1 focus:ring-th-accent resize-none"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-th-accent px-6 py-3 text-sm font-semibold text-th-bg hover:bg-th-accent-secondary transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
