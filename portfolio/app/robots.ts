import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/components/'], 
    },
    sitemap: 'https://ashleeyin.com/sitemap.xml',
  }
}