export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-th-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-center">
        <p className="text-sm text-th-muted">
          © 2025 Truhand LLC. Truhand Labs™ is a division of Truhand LLC.
        </p>

        <div className="mt-4 flex items-center justify-center gap-5 text-xs">
          <a className="text-th-muted hover:text-th-text transition" href="/insights">
            Insights
          </a>
          <a className="text-th-muted hover:text-th-text transition" href="/privacy">
            Privacy
          </a>
          <a className="text-th-muted hover:text-th-text transition" href="/terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
