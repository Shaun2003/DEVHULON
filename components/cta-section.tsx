import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="bg-gray-50/50 relative pt-12 sm:pt-16 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-balance text-2xl sm:text-3xl font-extrabold tracking-tight text-[#031529] md:text-4xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-[#031529]/80 font-medium">
          Partner with Devhulon Business &amp; People Solutions and discover practical solutions that
          help your business grow, develop people, and improve performance.
        </p>
        <Link
          href="/contact"
          className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#3CB54A] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-[13px] tracking-widest uppercase font-semibold text-white transition-colors hover:bg-[#329E40] shadow-md hover:shadow-lg"
        >
          Book Your Consultation Today {'>'}
        </Link>
      </div>
    </section>
  )
}
