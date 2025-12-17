/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "th-bg": "#05070C",
        "th-accent": "#00B4FF",
        "th-accent-secondary": "#14E3FF",
        "th-text": "#E7EEF5",
        "th-muted": "#97A6B3",
        "th-surface": "#0B111A",
      },
      boxShadow: {
        neon: "0 0 40px rgba(0, 180, 255, 0.35)",
        "neon-soft": "0 0 24px rgba(0, 180, 255, 0.2)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0, 180, 255, 0)" },
          "50%": { boxShadow: "0 0 32px rgba(0, 180, 255, 0.45)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        blink: "blink 1.1s step-start infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(0,180,255,0.32), transparent 60%)",
        "grid-lines":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
plugins: [require("@tailwindcss/typography")],

};
