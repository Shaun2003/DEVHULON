import Link from 'next/link'
import { ContactDetails } from '@/components/contact-details'

export function CtaSection() {
  return (
    <section className="bg-gray-50/50 relative pt-12 sm:pt-16 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-balance text-2xl sm:text-3xl font-extrabold tracking-tight text-[#031529] md:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-[#031529]/80 font-medium lg:mx-0">
              Partner with Devhulon Business &amp; People Solutions and discover practical solutions that
              help your business grow, develop people, and improve performance.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#3CB54A] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-[13px] tracking-widest uppercase font-semibold text-white transition-colors hover:bg-[#329E40] shadow-md hover:shadow-lg"
            >
              Book Your Consultation Today {'>'}
            </Link>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/80">
              Contact Us Today
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Have a question or need support? Reach out by phone, email, or send an enquiry through our contact page.
            </p>
            <div className="mt-6">
              <ContactDetails compact showForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
