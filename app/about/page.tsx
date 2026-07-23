import type { Metadata } from 'next'
import Image from 'next/image'
import { Eye, Target, Heart, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { ContactDetails } from '@/components/contact-details'
import { approach, coreValues } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us | Devhulon Business & People Solutions',
  description:
    'Devhulon is a South African consulting firm committed to building stronger businesses and developing greater futures through innovative, people-centred solutions.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Stronger Businesses. Developing Greater Futures."
        subtitle="A trusted South African consulting partner helping organisations grow, improve performance, and achieve sustainable success."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Devhulon Business &amp; People Solutions is a South African consulting firm committed
              to delivering innovative business solutions that help organisations grow, improve
              performance, and achieve sustainable success.
            </p>
            <p>
              We combine business consulting, human capital solutions, training and development,
              digital solutions, and strategic advisory to empower businesses and build
              high-performing teams.
            </p>
            <p>
              We believe that people are every organisation&apos;s greatest asset. When supported by
              the right systems and strategies, they drive lasting impact and create a better
              tomorrow.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/about-team.png"
              alt="Devhulon consulting team collaborating in a boardroom"
              width={720}
              height={520}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">
                Want to learn more?
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Talk to our team about your business and people goals.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We can help you design practical strategies, improve employee performance, and build
                stronger teams. Reach out today and let&apos;s discuss the next step.
              </p>
            </div>
            <ContactDetails compact showForm />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green/10 text-green">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-navy">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To be a trusted business consulting partner recognised for transforming organisations
              through innovative solutions and people development.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green/10 text-green">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-navy">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To provide professional, practical, and innovative solutions that help organisations
              build stronger businesses, develop people, improve performance, and achieve
              sustainable growth.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green/10 text-green">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-navy">Our Values</h3>
            <ul className="mt-3 space-y-2">
              {coreValues.map((value) => (
                <li key={value} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Our Approach
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            A clear, proven process for delivering lasting results.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="text-3xl font-extrabold text-green/25">{item.step}</span>
              <h3 className="mt-2 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
