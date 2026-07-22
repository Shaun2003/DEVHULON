import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, BookOpen, ClipboardList, Download, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { ContactDetails } from '@/components/contact-details'

export const metadata: Metadata = {
  title: 'Resources | Devhulon Business & People Solutions',
  description:
    'Guides, insights and tools from Devhulon to help you build stronger businesses and develop your people.',
}

const resources = [
  {
    icon: FileText,
    title: 'Business Growth Guides',
    text: 'Practical guides on strategy, planning and process improvement to help your business scale.',
  },
  {
    icon: BookOpen,
    title: 'HR & Compliance Insights',
    text: 'Stay up to date with labour legislation, HR best practice, and workplace compliance.',
  },
  {
    icon: ClipboardList,
    title: 'Templates & Checklists',
    text: 'Ready-to-use HR policies, contracts and checklists to save you time.',
  },
  {
    icon: Download,
    title: 'Company Profile',
    text: 'Download the Devhulon company profile to learn more about our full range of solutions.',
  },
]

const faqs = [
  {
    q: 'What services does Devhulon offer?',
    a: 'We offer business consulting, human capital solutions, recruitment and talent acquisition, training and development, payroll and HR compliance, and digital solutions.',
  },
  {
    q: 'Which areas do you operate in?',
    a: 'We are based in Thohoyandou, Limpopo and Gauteng, and serve businesses across South Africa.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Yes. We tailor practical, affordable solutions for SMEs as well as large organisations and NGOs.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply book a consultation through our contact page and our team will get in touch to understand your needs.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights & Resources"
        subtitle="Helpful guides, tools and answers to help you build a stronger business and develop your people."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {resources.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green/10 text-green">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green transition-colors hover:text-green/80"
              >
                Request Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">
                Need help choosing the right resources?
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Talk to us about the best solutions for your business.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you need guides, compliance insights, or tools to support your HR and business processes,
                our team can help you get the right resources quickly.
              </p>
            </div>
            <ContactDetails compact showForm />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
                  {faq.q}
                  <span className="ml-4 text-green transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
