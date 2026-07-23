import type { BlogPost, Service } from '@/lib/site-data'

export const siteUrl = 'https://www.devhulon.co.za'
export const siteTitle = 'Devhulon Business & People Solutions'
export const siteDescription =
  'Devhulon Business & People Solutions is a trusted South African consulting firm helping businesses achieve sustainable growth through innovative solutions, people development, strategic consulting, digital transformation, and professional support services.'

export const organizationSchema = {
  '@type': 'Organization',
  name: 'Devhulon',
  alternateName: 'Devhulon Business & People Solutions',
  url: siteUrl,
  logo: `${siteUrl}/devhulon-logo-full.jpeg`,
  description: siteDescription,
  sameAs: [
    'https://www.linkedin.com/company/92842789/',
    'https://www.facebook.com/Devhulon',
    'https://www.instagram.com/devhulon/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+27-65-575-4118',
    email: 'info@devhulon.co.za',
  },
  areaServed: ['ZA'],
}

export const websiteSchema = {
  '@type': 'WebSite',
  url: siteUrl,
  name: siteTitle,
  description: siteDescription,
  publisher: {
    '@type': 'Organization',
    name: 'Devhulon',
  },
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function blogPostingSchema(post: BlogPost) {
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devhulon',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/devhulon-logo-full.jpeg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    url: `${siteUrl}/blog/${post.slug}`,
    image: `${siteUrl}/devhulon-logo-full.jpeg`,
    articleSection: post.category,
  }
}

export function serviceSchema(service: Service, url: string) {
  return {
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Devhulon',
      url: siteUrl,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Businesses in South Africa',
    },
    url,
  }
}
