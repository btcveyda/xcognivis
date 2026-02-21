import type { Metadata } from 'next';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { CTABanner, Footer } from './components/Shared';
import RevealProvider from './components/RevealProvider';

/* Page-level metadata (merges with root layout metadata) */
export const metadata: Metadata = {
  title: 'XcogniVis — Intelligent Systems & AI Solutions',
  description:
    'XcogniVis empowers businesses, startups, enterprises, and individuals with intelligent, scalable, and future-ready digital solutions in AI, ML, Data Science, and Full-Stack Development.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* Skip to main content — accessibility & SEO */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#1e7de0] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Fixed navigation */}
      <Nav />

      {/* Main content */}
      <RevealProvider>
        <main id="main-content">
          {/* ── LANDING ── */}
          <Hero />

          {/* Visual divider */}
          <div
            aria-hidden="true"
            className="section-divider"
          />

          {/* ── ABOUT ── */}
          <About />

          <div
            aria-hidden="true"
            className="section-divider"
          />

          {/* ── SERVICES ── */}
          <Services />

          {/* ── CTA ── */}
          <CTABanner />
        </main>

        {/* Footer */}
        <Footer />
      </RevealProvider>
    </>
  );
}
