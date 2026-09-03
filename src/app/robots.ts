import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-inky-tau-14.vercel.app/';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // ბლოკავს API route-ებს
          '/admin/',      // ბლოკავს ადმინ პანელს (თუ არსებობს)
          '/private/',    // ბლოკავს პრივატურ/სატესტო გვერდებს
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}