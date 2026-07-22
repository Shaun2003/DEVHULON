import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ServicesGrid } from '@/components/services-grid'
import { ContactDetails } from '@/components/contact-details'
import { CtaSection } from '@/components/cta-section'
import { industries, whyChoose } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Our Services | Devhulon Business & People Solutions',
  description:
    'Comprehensive business and people solutions: business consulting, human capital, recruitment, training, payroll & HR compliance, and digital solutions.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Solutions for Every Stage of Your Business Journey"
        subtitle="Tailored solutions for a stronger tomorrow — practical services designed to help your business grow, develop people, and improve performance."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ServicesGrid showItems />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">
                Talk to us about your next project.
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Ready to make your next business move?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you need strategy, recruitment, training, payroll support or digital solutions,
                our team is ready to help. Contact Devhulon today for a clear, practical plan.
              </p>
            </div>
            <ContactDetails compact showForm />
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-foreground sm:text-3xl">
              Why Choose Devhulon?
            </h2>
            <ul className="mt-6 space-y-4">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-foreground sm:text-3xl">
              Industries We Serve
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-md bg-green px-4 py-2 text-sm font-medium text-green-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-2xl font-extrabold text-navy sm:text-3xl">
            Practical Solutions.{' '}
            <span className="text-green">Stronger People. Better Results.</span>
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
