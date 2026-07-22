import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { FAQSection } from '@/components/faq-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactDetails } from '@/components/contact-details'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, siteUrl } from '@/lib/seo'
import { businessConsultingFAQs, services, testimonials } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Business Consulting Services | Devhulon | Strategy, Planning & Advisory',
  description:
    'Expert business consulting services including strategy development, business planning, process improvement, and advisory. Help your organisation improve performance and achieve sustainable growth.',
  keywords: [
    'business consulting',
    'business strategy',
    'business planning',
    'process improvement',
    'business advisory',
    'strategic planning',
    'business growth',
    'organisational development',
    'South Africa',
  ],
}

const featureList = [
  'Business Strategy Development',
  'Business Plans',
  'Company Profiles',
  'Business Process Improvement',
  'Strategic Planning',
  'Business Advisory Services',
]

const supportingList = [
  'Business Strategy Development',
  'Vision And Mission Development',
  'Strategic Goal Setting',
  'Business Growth Strategies',
  'Market Positioning',
  'Competitive Analysis',
  'SWOT Analysis',
  'Strategic Risk Assessment',
  'Business Performance Reviews',
  'Strategy Alignment Workshops',
  'Implementation Roadmaps',
  'Strategic Review And Monitoring',
]

const planningList = [
  'Business Plan Development',
  'Start-Up Business Planning',
  'Expansion Planning',
  'Operational Planning',
  'Financial Planning Support',
  'Market Research',
  'Business Model Development',
  'Feasibility Assessments',
  'Business Growth Planning',
  'Investor-Ready Business Plans',
]

const processList = [
  'Business Process Reviews',
  'Workflow Analysis',
  'Process Mapping',
  'SOP Development',
  'Process Optimisation',
  'Operational Efficiency Reviews',
  'Business Process Documentation',
  'Internal Process Improvement',
  'Productivity Improvement Strategies',
  'Continuous Improvement Planning',
]

const strategicList = [
  'Strategic Planning Workshops',
  'Vision, Mission & Values Development',
  'Strategic Goal Setting',
  'Business Objective Development',
  'Organisational Strategy Development',
  'Departmental Strategic Planning',
  'Performance Measurement Frameworks',
  'KPI Development',
  'Strategic Risk Assessment',
  'Strategy Review & Evaluation',
  'Strategic Implementation Support',
  'Annual Strategic Planning Sessions',
]

const advisoryList = [
  'Business Performance Reviews',
  'Business Growth Advisory',
  'Operational Improvement',
  'Leadership Advisory',
  'Management Support',
  'Organisational Reviews',
  'Risk Management Advice',
  'Business Decision Support',
  'Business Improvement Strategies',
  'Business Expansion Planning',
  'Productivity Improvement',
  'Business Problem Solving',
]

const growthList = [
  'Business Growth Strategies',
  'Growth Opportunity Assessments',
  'Market Expansion Planning',
  'Business Scaling Strategies',
  'Revenue Growth Planning',
  'Operational Growth Planning',
  'Business Performance Improvement',
  'Productivity Enhancement',
  'Organisational Growth Support',
  'Business Transformation Planning',
  'Leadership Support During Growth',
  'Growth Monitoring And Reviews',
]

const processImprovementBenefits = [
  'Improve operational efficiency',
  'Reduce unnecessary costs',
  'Increase productivity',
  'Improve service delivery',
  'Enhance customer satisfaction',
  'Eliminate duplication of work',
  'Improve accountability',
  'Strengthen internal controls',
  'Standardise business processes',
  'Support continuous improvement',
]

const strategicBenefits = [
  'Establish a clear long-term direction',
  'Improve leadership decision-making',
  'Align departments around common objectives',
  'Improve accountability',
  'Strengthen organisational performance',
  'Prepare for future challenges',
  'Allocate resources effectively',
  'Improve business sustainability',
  'Measure progress through clear performance indicators',
  'Increase organisational focus',
]

const businessConsultingPage = () => {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchema(
              services.find((service) => service.slug === 'business-consulting')!,
              `${siteUrl}/services/business-consulting`
            ),
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Services', url: `${siteUrl}/services` },
              { name: 'Business Consulting', url: `${siteUrl}/services/business-consulting` },
            ]),
          ],
        }}
        id="service-business-consulting-jsonld"
      />
      <PageHero
        eyebrow="Business Consulting"
        title="Helping Businesses Grow With Confidence"
        subtitle="Every successful business needs a clear direction and the right support to achieve sustainable growth. Devhulon provides practical consulting services that improve performance, increase efficiency, and enable better decisions."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Business Consulting Helping Businesses Grow With Confidence
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every successful business needs a clear direction and the right support to achieve sustainable growth. At Devhulon Business & People Solutions, we provide practical business consulting services that help organisations improve performance, increase efficiency, and make informed decisions. Whether you are starting a business, expanding operations, or improving your current processes, we are here to help.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-navy">Our Business Consulting Services</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {featureList.map((item) => (
                    <li key={item} className="rounded-2xl bg-[#F6FFF4] px-4 py-3 text-sm text-navy">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Business Strategy Development</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Every successful business begins with a clear strategy. Without a well-defined direction, organisations often struggle with inconsistent growth, poor decision-making, inefficient resource allocation, and missed opportunities. At Devhulon, we help organisations develop practical business strategies that align with their vision, strengthen competitive position, and create a clear roadmap for sustainable success.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Whether you are launching a new business, expanding into new markets, or reviewing your current direction, we work alongside you to develop strategies that support long-term growth and measurable results.
                </p>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">What Is Business Strategy Development?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Business strategy development is the process of defining where your business is today, where you want it to be, and how you will get there. A strong strategy provides direction, helps prioritise resources, improves decision-making, and creates a framework for achieving business objectives.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                    {supportingList.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Business Planning</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Every successful business begins with a well-developed plan. Whether you're launching a new venture, expanding operations, seeking funding, or entering a new market, a structured business plan provides the roadmap needed to achieve your goals.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  At Devhulon, we develop practical, results-driven business plans that support informed decision-making and sustainable growth. Our approach goes beyond writing documents—we help you create a strategic plan that guides your business toward long-term success.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-navy">Why Business Planning Matters</h3>
                    <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                      {['Define clear business goals', 'Understand your target market', 'Plan for sustainable growth', 'Improve financial planning', 'Attract investors and funding', 'Reduce business risks', 'Measure business performance'].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-navy">Our Business Planning Services</h3>
                    <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                      {planningList.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Business Process Improvement</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Every organisation has processes that determine how work is performed, how customers are served, and how business objectives are achieved. As businesses grow, inefficient processes can lead to wasted time, unnecessary costs, reduced productivity, inconsistent service delivery, and missed opportunities.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  At Devhulon, we help organisations evaluate, redesign, and optimise business processes to improve operational efficiency, reduce costs, and enhance overall business performance.
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
                  {processList.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">Benefits of Process Improvement</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                    {processImprovementBenefits.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Strategic Planning</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Strategic planning helps businesses define where they want to go, how they will get there, and how success will be measured. We help organisations develop practical strategic plans that align people, processes, and resources with long-term objectives.
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
                  {strategicList.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">Benefits of Strategic Planning</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                    {strategicBenefits.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Business Advisory</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Business advisory gives organisations trusted guidance on decision-making, operations, risk management, and growth. We provide ongoing support that helps businesses improve performance, overcome challenges, and achieve sustainable success.
                </p>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">Our Business Advisory Services</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                    {advisoryList.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Business Growth Consulting</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Growth requires the right strategy, informed decisions, efficient operations, and adaptability. We help businesses identify opportunities, overcome growth barriers, and develop practical strategies for long-term success.
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
                  {growthList.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Organisational Effectiveness</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Sustainable success depends on how effectively people, processes, leadership, and structure work together. We help organisations align these elements to improve performance, engagement, and long-term growth.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {['Improve overall performance', 'Increase productivity', 'Strengthen accountability', 'Improve employee engagement', 'Enhance leadership effectiveness', 'Reduce duplication of responsibilities', 'Improve communication', 'Align people with business objectives', 'Support business growth', 'Create a high-performance culture'].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Change Management</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Change is a natural part of growth, but it must be managed carefully. We focus on the human side of transformation, helping organisations prepare employees, align leaders, reduce resistance, and implement change without disrupting performance.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {['Change readiness assessment', 'Change strategy development', 'Leadership support during change', 'Employee communication and engagement', 'Process and culture alignment', 'Implementation support', 'Monitoring progress', 'Adjusting plans as needed', 'Measuring change effectiveness'].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border bg-secondary p-8 text-left text-sm text-foreground/90 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-navy">Why Choose Devhulon?</h3>
              <ul className="mt-4 space-y-3">
                {['Tailored Business Solutions', 'Practical Advice', 'Professional Support', 'Results-Driven Approach', 'Long-Term Partnerships'].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-sm leading-relaxed text-foreground/90">
                Ready to grow your business? Contact us today to discuss your business goals and build a practical plan for sustainable growth.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={businessConsultingFAQs} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-secondary p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Need Business Consulting Support?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's discuss your business goals and develop practical solutions to help you achieve sustainable growth.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
              >
                Request a Consultation
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy mb-4">Get in Touch</h3>
              <ContactDetails compact showForm />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

export default businessConsultingPage
