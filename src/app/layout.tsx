import type { Metadata, Viewport } from 'next';
import { Jost, Prata } from 'next/font/google';
import Analytics from '@/components/Analytics';
import { buildJsonLd, DESCRIPTION, GOOGLE_VERIFICATION, KEYWORDS, NOINDEX, SITE_NAME, siteOrigin, siteUrl, TITLE, YANDEX_VERIFICATION } from '@/lib/seo';
import './globals.css';

const prata = Prata({ subsets: ['latin', 'cyrillic'], weight: '400', variable: '--font-prata', display: 'swap' });
const jost = Jost({ subsets: ['latin', 'cyrillic'], weight: ['400', '500'], variable: '--font-jost', display: 'swap' });

const SITE_URL = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: { default: TITLE, template: `%s | ${SITE_NAME}` },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  category: 'real estate',
  keywords: KEYWORDS,
  alternates: { canonical: SITE_URL },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION
  },
  robots: NOINDEX
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1
        }
      },
  verification: {
    google: GOOGLE_VERIFICATION,
    yandex: YANDEX_VERIFICATION
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E1A24'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${prata.variable} ${jost.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }} />
        <Analytics />
      </body>
    </html>
  );
}
