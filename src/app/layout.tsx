import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'როლანდ ართმელაძე | Full-Stack & Frontend Developer',
    template: '%s | როლანდ ართმელაძე',
  },
  description:
    'როლანდ ართმელაძის პერსონალური პორტფოლიო. Web Developer სპეციალიზაციით React.js, Next.js, TypeScript და თანამედროვე Web ტექნოლოგიებში.',
  keywords: [
    'როლანდ ართმელაძე',
    'Roland Artmeladze',
    'Web Developer',
    'Frontend Developer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'პორტფოლიო',
    'ვებ დეველოპერი',
  ],
  authors: [{ name: 'როლანდ ართმელაძე' }],
  creator: 'როლანდ ართმელაძე',
  metadataBase: new URL('https://portfolio-inky-tau-14.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ka_GE',
    url: 'https://portfolio-inky-tau-14.vercel.app',
    title: 'როლანდ ართმელაძე | Full-Stack & Frontend Developer',
    description:
      'ინოვაციური ვებ-აპლიკაციების შემუშავება React.js, Next.js და თანამედროვე ტექნოლოგიების გამოყენებით.',
    siteName: 'Roland Artmeladze Portfolio',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'როლანდ ართმელაძე - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'როლანდ ართმელაძე | Full-Stack Developer',
    description:
      'ინოვაციური ვებ-აპლიკაციების შემუშავება React.js, Next.js და თანამედროვე ტექნოლოგიების გამოყენებით.',
    images: ['/assets/images/app_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} dark`}>
      <body className={manrope.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frolandport1918back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}