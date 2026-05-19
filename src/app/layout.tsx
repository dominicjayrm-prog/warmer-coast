import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { SITE } from '@/lib/site';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/nav/Footer';
import { CookieBanner } from '@/components/trust/CookieBanner';
import { ExitIntentModal } from '@/components/marketing/ExitIntentModal';
import { Analytics } from '@/components/analytics/Analytics';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'WarmerCoast | Move to Spain, Portugal or Gibraltar without the costly mistakes',
    template: '%s | WarmerCoast',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    url: SITE.url,
    images: [SITE.defaultOgImage],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    images: [SITE.defaultOgImage],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <CookieBanner />
          <ExitIntentModal />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
