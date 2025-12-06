import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truhand Labs – AI-Powered QA & Regression Testing",
  description:
    "Truhand Labs is a boutique QA and automation studio combining Playwright, exploratory testing, and AI-powered analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-th-bg text-th-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
