import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { HomeHero } from '@/components/home-hero'
import { FeatureStrip } from '@/components/feature-strip'
import { ServicesGrid } from '@/components/services-grid'
import { CtaSection } from '@/components/cta-section'
import { industries, whyChoose } from '@/lib/site-data'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeatureStrip />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl sm:text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Our Services
          </h2>
          <p className="mt-2 sm:mt-3 text-pretty text-sm sm:text-base text-muted-foreground">
            Comprehensive solutions for every stage of your business journey.
          </p>
        </div>
        <div className="mt-8 sm:mt-12">
          <ServicesGrid showItems={false} />
        </div>
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md bg-green px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Transition Wave Divider to the Navy Section */}
      <div className="w-full relative -mb-1 z-10 pointer-events-none">
        <svg
          className="w-full h-[60px] md:h-[100px] text-navy"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M0,0 Q720,120 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>

      <section className="bg-navy py-20 relative z-0">
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

      <CtaSection />
    </>
  )
}
