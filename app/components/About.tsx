export default function About() {
  return (
    <section id="about" className="w-full border-b border-white/5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          What is Truhand Labs?
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-th-muted">
          Truhand Labs is a boutique QA and automation studio. We combine
          Playwright test suites, exploratory manual testing, and AI-powered
          analysis to improve reliability, reduce production incidents, and
          accelerate your development workflow.
        </p>
      </div>
    </section>
  );
}
