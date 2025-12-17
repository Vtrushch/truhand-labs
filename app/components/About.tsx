export default function About() {
  return (
    <section id="about" className="w-full bg-th-bg">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-black/60 px-6 sm:px-10 py-10 shadow-neon-soft">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
            What is Truhand Labs?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-th-muted">
            Truhand Labs is a boutique QA and automation studio. We combine
            Playwright test suites, exploratory manual testing, and AI-powered
            analysis to improve reliability, reduce production incidents, and
            accelerate your development workflow.
          </p>
          <p className="mt-4 text-sm text-th-muted">
            We plug into your existing engineering culture as a focused QA
            partner—no heavy process, no bureaucracy. Just clear, repeatable
            test runs that protect each release.
          </p>
        </div>
      </div>
    </section>
  );
}
