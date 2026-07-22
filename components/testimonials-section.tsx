import { Star } from 'lucide-react'

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  rating?: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export function TestimonialsSection({ testimonials, title = 'Client Testimonials', subtitle }: TestimonialsProps) {
  return (
    <section className="bg-gray-50/50 px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-balance text-2xl sm:text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 sm:mt-4 text-pretty text-sm sm:text-base text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {testimonial.rating && (
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              )}

              <blockquote className="mb-6 text-sm sm:text-base leading-relaxed text-muted-foreground italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-navy text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium text-green">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Client testimonials coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
