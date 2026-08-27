import type { MetadataRoute } from 'next'
import { services } from '@/lib/site-data'
import { getWordPressPosts } from '@/lib/wordpress'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cybercircuit.co.za'

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getWordPressPosts()
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/resources`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-conditions`, lastModified: new Date() },
    { url: `${baseUrl}/popia-privacy-notice`, lastModified: new Date() },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date() },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
