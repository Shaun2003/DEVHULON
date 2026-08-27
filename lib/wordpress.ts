import type { BlogPost } from '@/lib/site-data'

const wordpressApiUrl = process.env.WORDPRESS_API_URL?.replace(/\/$/, '')

export type WordPressPost = {
  id: number
  slug: string
  date: string
  modified: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    author?: Array<{ name?: string }>
    ['wp:featuredmedia']?: Array<{ source_url?: string; alt_text?: string }>
    ['wp:term']?: Array<Array<{ name?: string }>>
  }
}

function decodeHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&#8217;|&#x2019;/g, "'")
    .replace(/&#8211;|&#x2013;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .trim()
}

function mapPost(post: WordPressPost): BlogPost {
  const terms = post._embedded?.['wp:term']?.flat() ?? []
  const category = terms.find((term) => term.name)?.name ?? 'Insights'

  return {
    slug: post.slug,
    title: decodeHtml(post.title.rendered),
    excerpt: decodeHtml(post.excerpt.rendered),
    content: decodeHtml(post.content.rendered),
    contentHtml: post.content.rendered,
    author: post._embedded?.author?.[0]?.name ?? 'Devhulon Business & People Solutions',
    category,
    date: post.date,
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
  }
}

async function fetchWordPress(path: string) {
  if (!wordpressApiUrl) return null

  try {
    const response = await fetch(`${wordpressApiUrl}${path}`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) return null
    return (await response.json()) as WordPressPost | WordPressPost[]
  } catch {
    return null
  }
}

export async function getWordPressPosts(): Promise<BlogPost[]> {
  const posts = await fetchWordPress('/posts?per_page=100&_embed')
  return Array.isArray(posts) ? posts.map(mapPost) : []
}

export async function getWordPressPost(slug: string) {
  const posts = await fetchWordPress(`/posts?slug=${encodeURIComponent(slug)}&_embed`)
  return Array.isArray(posts) && posts.length > 0 ? mapPost(posts[0]) : undefined
}
