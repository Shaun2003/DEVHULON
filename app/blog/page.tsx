import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactDetails } from '@/components/contact-details'
import { CtaSection } from '@/components/cta-section'
import { BlogList } from '@/components/blog-list'
import { blogPosts } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Blog & Insights | Devhulon | Business & HR Articles',
  description:
    'Read the latest articles on business consulting, HR strategy, recruitment, training, compliance, and digital solutions to help your business grow.',
  keywords: [
    'business blog',
    'HR articles',
    'business insights',
    'consultation tips',
    'workplace advice',
    'business strategy',
  ],
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Business & HR Insights"
        subtitle="Stay informed with the latest articles on business strategy, HR best practices, recruitment, compliance, and digital transformation."
      />

      <BlogList posts={sortedPosts} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">
                Want to stay informed?
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Get the latest insights and practical guidance for your business.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Have questions about one of our articles or want help applying it to your organisation? Contact our team today.
              </p>
            </div>
            <ContactDetails compact showForm />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
