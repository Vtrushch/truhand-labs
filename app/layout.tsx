import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Truhand Labs – Playwright QA Automation & AI-Powered Regression Testing",
    template: "%s | Truhand Labs",
  },
  description:
    "Truhand Labs is a boutique QA and automation studio. We use Playwright, AI-assisted analysis, and exploratory testing to find bugs before your users do.",
  metadataBase: new URL("https://truhandlabs.com"),
  openGraph: {
    title:
      "Truhand Labs – Playwright QA Automation & AI-Powered Regression Testing",
    description:
      "End-to-end QA audits, Playwright regression suites, and AI-assisted analysis for SaaS and fintech teams.",
    url: "https://truhandlabs.com",
    siteName: "Truhand Labs",
    type: "website",
    images: [
      {
        url: "/og-image-truhand-labs.png",
        width: 1200,
        height: 630,
        alt: "Truhand Labs – QA & AI Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Truhand Labs – Playwright QA Automation & AI-Powered Regression Testing",
    description:
      "We stress-test your product before your users do. QA audits, regression suites, and AI-powered analysis.",
    images: ["/og-image-truhand-labs.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-th-bg text-th-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
