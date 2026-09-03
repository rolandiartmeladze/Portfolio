import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

/* ==========================================================================
   1. GOOGLE FONTS SETUP (ფონტების კონფიგურაცია)
   ========================================================================== 
   Next.js-ის ოპტიმიზებული ფონტები CSS ცვლადებით (`--font-manrope`, `--font-jetbrains-mono`).
*/
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

/* ==========================================================================
   2. VIEWPORT CONFIGURATION (ეკრანის პარამეტრები)
   ========================================================================== 
   მობილური მოწყობილობებისა და რესპონსიული დიზაინის ადაპტაციისთვის.
*/
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/* ==========================================================================
   3. MULTILINGUAL SEO METADATA (ორენოვანი SEO მეტამონაცემები)
   ========================================================================== 
   ოპტიმიზებულია საძიებო სისტემებისთვის (Google, Bing) ქართულ და ინგლისურ ენებზე.
*/
export const metadata: Metadata = {
  // მთავარი სათაურის შაბლონი
  title: {
    default: 'როლანდ ართმელაძე | Roland Artmeladze — Full-Stack & Frontend Developer',
    template: '%s | Roland Artmeladze',
  },
  
  // ორენოვანი აღწერა (ქართული და ინგლისური საკვანძო ფრაზებით)
  description:
    'როლანდ ართმელაძის პერსონალური პორტფოლიო. Web & Full-Stack Developer specializing in React.js, Next.js 15, TypeScript, Tailwind CSS, and Node.js.',

  // გაფართოებული ორენოვანი საკვანძო სიტყვები (Keywords)
  keywords: [
    // ქართული საკვანძო სიტყვები
    'როლანდ ართმელაძე',
    'პორტფოლიო',
    'ვებ დეველოპერი',
    'ფრონტენდ დეველოპერი',
    'ფულსტეკ დეველოპერი',
    'პროგრამისტი',
    
    // ინგლისური საკვანძო სიტყვები
    'Roland Artmeladze',
    'Web Developer Portfolio',
    'Frontend Developer',
    'Full-Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js 15',
    'TypeScript Engineer',
    'Tailwind CSS',
    'Node.js Developer',
    'Bento Grid Portfolio',
  ],

  authors: [{ name: 'Roland Artmeladze / როლანდ ართმელაძე' }],
  creator: 'Roland Artmeladze',
  metadataBase: new URL('https://portfolio-inky-tau-14.vercel.app'),

  // ენობრივი ალტერნატივები (Canonical & Alternate Locales)
  alternates: {
    canonical: '/',
    languages: {
      'ka-GE': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },

  // Open Graph (Facebook, LinkedIn, Discord გაზიარებისთვის)
  openGraph: {
    type: 'website',
    locale: 'ka_GE',
    alternateLocale: ['en_US'],
    url: 'https://portfolio-inky-tau-14.vercel.app',
    title: 'როლანდ ართმელაძე | Roland Artmeladze — Full-Stack Developer',
    description:
      'Interactive Web Developer Portfolio featuring Next.js 15, React 19, Bento Grid architecture, and STAR methodology case studies.',
    siteName: 'Roland Artmeladze Portfolio',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Roland Artmeladze Portfolio — Full-Stack Developer',
        type: 'image/png',
      },
    ],
  },

  // Twitter Cards (X/Twitter გაზიარებისთვის)
  twitter: {
    card: 'summary_large_image',
    title: 'როლანდ ართმელაძე | Roland Artmeladze — Full-Stack Developer',
    description:
      'Interactive Web Developer Portfolio featuring Next.js 15, React 19, Bento Grid architecture, and modern Web Stack.',
    images: ['/assets/images/app_logo.png'],
  },

  // საძიებო რობოტების ინდექსაციის წესები
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

/* ==========================================================================
   4. ROOT LAYOUT COMPONENT (მთავარი ლეიაუტი)
   ========================================================================== 
*/
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka" className={`${manrope.variable} ${jetbrainsMono.variable} dark`}>
      <body className={manrope.className}>
        {children}

        {/* ანალიტიკის სკრიპტები */}
        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frolandport1918back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20"
        />
        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.3"
        />
      </body>
    </html>
  );
}