import type { MetadataRoute } from 'next';

const baseUrl = 'https://idoldo.com';
const locales = ['en', 'zh'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/waitlist', '/privacy', '/tos', '/about', '/contact'];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page}`;
      const alternates: Record<string, string> = {};

      for (const altLocale of locales) {
        alternates[altLocale] = `${baseUrl}/${altLocale}${page}`;
      }

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page === '/waitlist' ? 0.9 : 0.5,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}
