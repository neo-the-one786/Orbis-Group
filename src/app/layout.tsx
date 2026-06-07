import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import ClientLayout from '@/components/layout/ClientLayout';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Orbis Group — Experiences Designed Beautifully',
    template: '%s | Orbis Group',
  },
  description:
    'Orbis Group is a premium experiential marketing and partnership company. We create memorable experiences through collaboration, culture, and exceptional execution.',
  keywords: [
    'experiential marketing',
    'luxury events',
    'brand partnerships',
    'experiential design',
    'Orbis Group',
    'event marketing',
    'brand experiences',
  ],
  authors: [{ name: 'Orbis Group' }],
  creator: 'Orbis Group',
  metadataBase: new URL('https://orbisgroup.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orbisgroup.com',
    siteName: 'Orbis Group',
    title: 'Orbis Group — Experiences Designed Beautifully',
    description:
      'Premium experiential marketing and brand partnerships. We create memorable experiences through collaboration, culture, and exceptional execution.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orbis Group — Experiences Designed Beautifully',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbis Group — Experiences Designed Beautifully',
    description:
      'Premium experiential marketing and brand partnerships.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
