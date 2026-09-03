import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
