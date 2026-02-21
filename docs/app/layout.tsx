import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'XcogniVis — Intelligent Systems & AI Solutions',
    template: '%s | XcogniVis',
  },
  description:
    'XcogniVis is a technology and intelligent systems company founded by Wilfred Aquila, specialising in AI, Machine Learning, Deep Learning, Data Science, Full-Stack Development, Android Engineering, Database Architecture, and Business Intelligence.',
  keywords: [
    'Artificial Intelligence','Machine Learning','Deep Learning','Data Science',
    'Full-Stack Development','Android Engineering','Database Architecture',
    'Business Intelligence','AI solutions','intelligent systems','XcogniVis','Wilfred Aquila',
  ],
  authors: [{ name: 'Wilfred Aquila', url: 'https://xcognivis.com' }],
  creator: 'Wilfred Aquila',
  publisher: 'XcogniVis',
  metadataBase: new URL('https://xcognivis.com'),
  alternates: { canonical: '/' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://xcognivis.com',
    siteName: 'XcogniVis',
    title: 'XcogniVis — Intelligent Systems & AI Solutions',
    description: 'Empowering businesses with intelligent, scalable, and future-ready digital solutions.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'XcogniVis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XcogniVis — Intelligent Systems & AI Solutions',
    description: 'Empowering businesses with AI, ML, Data Science, Full-Stack Dev & more.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#040810',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://xcognivis.com/#organization',
      name: 'XcogniVis', url: 'https://xcognivis.com',
      founder: { '@type': 'Person', name: 'Wilfred Aquila', jobTitle: 'Founder & CEO' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@xcognivis.com' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Prevent flash of wrong theme on load */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('xcognivis-theme');document.documentElement.setAttribute('data-theme',t||'dark');})();`
        }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}