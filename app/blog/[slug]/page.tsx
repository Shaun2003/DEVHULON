import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { ContactDetails } from '@/components/contact-details'
import { JsonLd } from '@/components/json-ld'
import { blogPostingSchema, breadcrumbSchema, siteUrl } from '@/lib/seo'
import { blogPosts } from '@/lib/site-data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | Devhulon Blog',
    }
  }

  return {
    title: `${post.title} | Devhulon Blog`,
    description: post.excerpt,
    keywords: [post.category, 'business', 'HR', 'consultation'],
    openGraph: {
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      title: `${post.title} | Devhulon Blog`,
      description: post.excerpt,
      images: [
        {
          url: `${siteUrl}/devhulon-logo-full.jpeg`,
          alt: `${post.title} | Devhulon Blog`,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            blogPostingSchema(post),
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Blog', url: `${siteUrl}/blog` },
              { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
            ]),
          ],
        }}
        id={`blog-post-jsonld-${post.slug}`}
      />
      <section className="relative w-full bg-gradient-to-br from-navy via-navy to-navy/90 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mb-6">
            <span className="inline-block rounded-full bg-green px-3 py-1 text-xs font-semibold text-white uppercase tracking-wide">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 border-t border-white/20 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-ZA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <button className="flex items-center gap-2 ml-auto hover:text-white transition-colors">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-navy mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.startsWith('-')) {
              const items = paragraph.split('\n').filter((line) => line.startsWith('-'))
              return (
                <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base">
                      {item.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              )
            }
            if (paragraph.startsWith('**')) {
              const parts = paragraph.split('**')
              return (
                <p key={index} className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4">
                  {parts.map((part, i) => (
                    <span key={i} className={i % 2 === 1 ? 'font-bold text-navy' : ''}>
                      {part}
                    </span>
                  ))}
                </p>
              )
            }
            return (
              <p key={index} className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        <section className="mx-auto mt-14 rounded-3xl border border-border bg-secondary p-8 shadow-sm sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">
                Want to act on these ideas?
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Talk to Devhulon about practical next steps for your business.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you have questions about this article or want help applying it to your organisation,
                contact us and we&apos;ll connect you with the right expert.
              </p>
            </div>
            <ContactDetails compact showForm />
          </div>
        </section>

        <div className="mt-12 border-t border-border pt-12">
          <h3 className="text-lg font-semibold text-navy mb-6">Related Articles</h3>
          {relatedPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex-1 p-4 flex flex-col">
                    <span className="inline-block w-fit rounded-full bg-green/10 px-2 py-1 text-xs font-semibold text-green uppercase tracking-wide mb-2">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-bold text-navy group-hover:text-green transition-colors mb-2 text-sm">
                      {relatedPost.title}
                    </h4>
                    <p className="text-xs text-muted-foreground flex-1">{relatedPost.excerpt}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-green font-semibold">
                      Read More
                      <ArrowLeft className="h-3 w-3 rotate-180" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No related articles found.</p>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
