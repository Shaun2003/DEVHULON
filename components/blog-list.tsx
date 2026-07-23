'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import type { BlogPost } from '@/lib/site-data'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory)

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'border border-green bg-green text-navy'
                    : 'border border-gray-300 text-gray-700 hover:border-green hover:text-[#1c5c23]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="h-48 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-[#1c5c23] uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy group-hover:text-green transition-colors">{post.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green">
                    Read More <span className="sr-only">about {post.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found in this category. Check back soon for new insights.</p>
          </div>
        )}
      </section>
    </>
  )
}
