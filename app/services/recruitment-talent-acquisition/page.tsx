import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { FAQSection } from '@/components/faq-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactDetails } from '@/components/contact-details'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, siteUrl } from '@/lib/seo'
import { recruitmentFAQs, services, testimonials } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Recruitment & Talent Acquisition Services | Devhulon | Find Top Talent',
  description:
    'Professional recruitment and talent acquisition services including permanent, temporary, and executive recruitment. Find the right candidates for your business.',
  keywords: [
    'recruitment services',
    'talent acquisition',
    'permanent recruitment',
    'executive search',
    'candidate screening',
    'recruitment agency',
    'hiring',
    'South Africa',
  ],
}

const serviceList = [
  'Permanent Recruitment',
  'Temporary Recruitment',
  'Executive Recruitment',
  'Candidate Screening',
  'Interview Coordination',
  'Background & Reference Checks',
  'Onboarding Support',
]

const subsection = (
  title: string,
  subtitle: string,
  description: string,
  list: string[],
  benefits: string[],
) => (
  <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-navy">Our Services Include</h3>
        <ul className="mt-4 space-y-3 text-sm text-foreground/80">
          {list.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-navy">Benefits</h3>
        <ul className="mt-4 space-y-3 text-sm text-foreground/80">
          {benefits.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default function RecruitmentPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchema(
              services.find((service) => service.slug === 'recruitment-talent-acquisition')!,
              `${siteUrl}/services/recruitment-talent-acquisition`
            ),
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Services', url: `${siteUrl}/services` },
              { name: 'Recruitment & Talent Acquisition', url: `${siteUrl}/services/recruitment-talent-acquisition` },
            ]),
          ],
        }}
        id="service-recruitment-talent-acquisition-jsonld"
      />
      <PageHero
        eyebrow="Recruitment & Talent Acquisition"
        title="Finding The Right Talent For Your Business"
        subtitle="People are the driving force behind every successful organisation. We help businesses attract, identify, and recruit qualified professionals who align with their goals and values."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you're recruiting one employee or building an entire team, we provide professional recruitment solutions tailored to your business needs.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy">Our Recruitment Services</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-foreground/90">
                  {serviceList.map((item) => (
                    <li key={item} className="rounded-2xl bg-[#F6FFF4] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {subsection(
              'Permanent Recruitment',
              'Hiring The Right Talent For Long-Term Success',
              'Finding the right permanent employee requires more than reviewing CVs. We help businesses identify candidates with the right qualifications, experience, skills, and cultural fit.',
              [
                'Vacancy Consultation',
                'Job Advertising',
                'Candidate Sourcing',
                'CV Screening',
                'Interview Coordination',
                'Candidate Shortlisting',
              ],
              [
                'Access to qualified candidates',
                'Reduced hiring time',
                'Better hiring decisions',
                'Improved employee retention',
              ],
            )}

            {subsection(
              'Temporary Recruitment',
              'Flexible Staffing Solutions',
              'Business demands change, and sometimes you need additional support for a short period. We assist organisations in sourcing suitable temporary employees for project-based work, seasonal demand, or temporary replacements.',
              [
                'Temporary Staffing',
                'Fixed-Term Placements',
                'Contract Recruitment',
                'Short-Term Workforce Solutions',
              ],
              [
                'Flexible workforce',
                'Reduced recruitment time',
                'Business continuity',
                'Cost-effective staffing',
              ],
            )}

            {subsection(
              'Executive Recruitment',
              'Finding Leaders Who Make A Difference',
              'Leadership appointments have a significant impact on business performance. We assist organisations in identifying experienced professionals for management and executive positions.',
              [
                'Executive Search',
                'Leadership Recruitment',
                'Senior Management Placements',
                'Confidential Recruitment',
              ],
              [
                'High-quality candidates',
                'Professional recruitment process',
                'Confidential service',
                'Strong leadership appointments',
              ],
            )}

            {subsection(
              'Candidate Screening',
              'Selecting The Best Candidates',
              'Recruitment is more than receiving applications. Our candidate screening process helps identify individuals who meet your business requirements before interviews begin.',
              [
                'CV Screening',
                'Qualification Reviews',
                'Skills Assessment Coordination',
                'Candidate Evaluation',
                'Shortlisting',
              ],
              [
                'Better quality candidates',
                'Faster recruitment',
                'Reduced hiring risks',
                'Improved recruitment decisions',
              ],
            )}

            {subsection(
              'Interview Coordination',
              'Professional Interview Support',
              'A structured interview process leads to better hiring decisions. We assist businesses with planning and coordinating interviews to ensure an efficient recruitment experience.',
              [
                'Interview Scheduling',
                'Candidate Communication',
                'Interview Documentation',
                'Interview Panel Support',
                'Feedback Coordination',
              ],
              [
                'Professional recruitment process',
                'Improved candidate experience',
                'Better organisation',
                'Time savings',
              ],
            )}

            {subsection(
              'Background & Reference Checks',
              'Recruit With Confidence',
              'Verifying candidate information helps reduce recruitment risks and ensures informed hiring decisions.',
              [
                'Employment Reference Checks',
                'Qualification Verification Coordination',
                'Identity Verification Guidance',
                'Criminal Record Check Coordination (Where Applicable And Legally Compliant)',
              ],
              [
                'Reduced hiring risk',
                'Better recruitment decisions',
                'Greater confidence',
                'Improved organisational protection',
              ],
            )}

            {subsection(
              'Onboarding Support',
              'Helping New Employees Succeed',
              'The first few weeks of employment play an important role in employee success. We assist organisations in creating structured onboarding processes that help new employees integrate quickly and effectively.',
              [
                'Onboarding Checklists',
                'New Employee Documentation',
                'Orientation Planning',
                'Induction Programme Development',
                'Probation Support',
              ],
              [
                'Faster employee integration',
                'Better employee experience',
                'Increased productivity',
                'Improved employee retention',
              ],
            )}

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Why Choose Devhulon For Recruitment?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We understand every organisation is different. Our recruitment approach focuses on finding people who meet the job requirements and fit your culture and long-term objectives.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {[
                  'Professional recruitment support',
                  'Tailored hiring solutions',
                  'Efficient recruitment processes',
                  'Quality-focused approach',
                  'Reliable communication',
                  'Long-term business partnerships',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border bg-secondary p-8 text-sm text-foreground/90 shadow-sm">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Looking For The Right People?</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Partner with Devhulon Business & People Solutions and let us help you find the right people for your organisation.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Build A Stronger Team</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We match your business with talented professionals who support productivity, culture, and long-term success.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={recruitmentFAQs} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-secondary p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Ready to Find Your Next Great Team Member?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's discuss your recruitment needs and find the right people for your business.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
              >
                Start Your Recruitment
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
