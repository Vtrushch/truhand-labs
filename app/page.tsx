import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import MiniScan from "./components/MiniScan";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Main content */}
      <div className="pt-[80px]">
        <Hero />
        <About />
        <HowItWorks />
        <Packages />
        <WhyUs />
        <MiniScan />
        <ContactForm />

        <footer className="border-t border-white/10 bg-black/80">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-center text-xs text-th-muted flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © 2025 Truhand LLC. Truhand Labs™ is a division of Truhand LLC.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-th-text">
                Privacy
              </a>
              <a href="#" className="hover:text-th-text">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
