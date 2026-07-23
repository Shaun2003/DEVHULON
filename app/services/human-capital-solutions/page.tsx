import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { ContactDetails } from '@/components/contact-details'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, siteUrl } from '@/lib/seo'
import { humanCapitalFAQs, services, testimonials } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Human Capital Solutions | HR Consulting & Labour Relations | Devhulon',
  description:
    'Expert human capital and HR solutions including HR consulting, labour relations, compliance, and organisational development. Build fair, productive workplaces.',
  keywords: [
    'human capital solutions',
    'HR consulting',
    'labour relations',
    'HR compliance',
    'organisational development',
    'performance management',
    'employment contracts',
    'South Africa',
  ],
}

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

export default function HumanCapitalSolutionsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchema(
              services.find((service) => service.slug === 'human-capital-solutions')!,
              `${siteUrl}/services/human-capital-solutions`
            ),
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Services', url: `${siteUrl}/services` },
              { name: 'Human Capital Solutions', url: `${siteUrl}/services/human-capital-solutions` },
            ]),
          ],
        }}
        id="service-human-capital-solutions-jsonld"
      />
      <PageHero
        eyebrow="Human Capital Solutions"
        title="Building Fair, Compliant, And Productive Workplaces"
        subtitle="Managing workplace relationships effectively is essential for organisational success. We help employers navigate workplace challenges while ensuring compliance with South African labour legislation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                From disciplinary matters to grievance management and workplace investigations, we provide practical advice and professional support that promotes fairness, consistency, and sound decision-making.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy">Our Labour Relations Services</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-foreground/90">
                  {[
                    'Disciplinary Hearings',
                    'Grievance Management',
                    'Workplace Investigations',
                    'Incapacity Management',
                    'Retrenchment Support',
                    'Labour Law Advisory',
                    'Workplace Conflict Resolution',
                  ].map((item) => (
                    <li key={item} className="rounded-2xl bg-[#F6FFF4] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {subsection(
              'Disciplinary Hearings',
              'Fair And Professional Disciplinary Processes',
              'Disciplinary action should always be fair, consistent, and legally compliant. We assist employers in managing disciplinary processes professionally while protecting the rights of both the employer and the employee.',
              [
                'Guidance On Disciplinary Procedures',
                'Drafting Notices To Attend Hearings',
                'Preparing Disciplinary Documentation',
                'Chairperson Support',
                'Outcome Documentation',
                'Advice On Sanctions',
              ],
              [
                'Fair disciplinary processes',
                'Reduced legal risks',
                'Consistent decision-making',
                'Compliance with labour legislation',
              ],
            )}

            {subsection(
              'Grievance Management',
              'Resolving Workplace Concerns Professionally',
              'Unresolved workplace grievances can affect morale and productivity. We help organisations manage grievances fairly and confidentially while promoting positive working relationships.',
              [
                'Grievance Procedure Guidance',
                'Investigation Support',
                'Mediation Assistance',
                'Documentation',
                'Resolution Recommendations',
              ],
              [
                'Improved workplace relationships',
                'Reduced conflict',
                'Better communication',
                'Fair and transparent processes',
              ],
            )}

            {subsection(
              'Workplace Investigations',
              'Objective Workplace Investigations',
              'When allegations of misconduct or policy breaches arise, it is important to establish the facts before making decisions. We conduct fair and confidential workplace investigations to support informed decision-making.',
              [
                'Fact-Finding Investigations',
                'Interview Coordination',
                'Evidence Review',
                'Investigation Reports',
                'Recommendations',
              ],
              [
                'Objective investigations',
                'Reduced legal risk',
                'Better decision-making',
                'Professional documentation',
              ],
            )}

            {subsection(
              'Incapacity Management',
              'Managing Poor Performance And Ill Health Fairly',
              'We help employers manage incapacity cases involving poor work performance or ill health in a fair, structured, and legally compliant manner.',
              [
                'Incapacity Process Guidance',
                'Performance Counselling Support',
                'Performance Improvement Plans (PIPs)',
                'Documentation',
                'Advice On Appropriate Action',
              ],
              [
                'Fair treatment of employees',
                'Improved performance management',
                'Compliance with labour legislation',
                'Reduced disputes',
              ],
            )}

            {subsection(
              'Retrenchment Support',
              'Supporting Organisational Change Responsibly',
              'Business circumstances sometimes require organisational restructuring. We assist employers in managing retrenchment processes in accordance with the Labour Relations Act.',
              [
                'Retrenchment Planning',
                'Consultation Process Guidance',
                'Documentation Preparation',
                'Employee Communication',
                'Legal Compliance Support',
              ],
              [
                'Legally compliant processes',
                'Reduced organisational risk',
                'Professional employee communication',
                'Structured implementation',
              ],
            )}

            {subsection(
              'Labour Law Advisory',
              'Practical Labour Law Guidance',
              'South African labour legislation can be complex. We provide practical advice to help employers make informed decisions while remaining compliant with applicable labour laws.',
              [
                'Labour Law Advice',
                'HR Compliance Guidance',
                'Workplace Policy Interpretation',
                'Employer Obligations',
                'Best Practice Recommendations',
              ],
              [
                'Reduced legal exposure',
                'Improved compliance',
                'Better workplace decision-making',
                'Peace of mind',
              ],
            )}

            {subsection(
              'Workplace Conflict Resolution',
              'Promoting Healthy Working Relationships',
              'Workplace conflict, when left unresolved, can affect productivity and employee morale. We assist organisations in resolving disputes constructively and professionally.',
              [
                'Conflict Resolution',
                'Workplace Mediation',
                'Communication Support',
                'Relationship Rebuilding',
                'Management Guidance',
              ],
              [
                'Improved teamwork',
                'Better communication',
                'Reduced workplace tension',
                'Stronger organisational culture',
              ],
            )}

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Why Choose Devhulon for Labour Relations?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Labour relations is about more than resolving disputes. It is about creating fair workplaces, supporting managers, protecting businesses, and ensuring employees are treated with dignity and respect.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {[
                  'Practical labour relations support',
                  'Fair and professional approach',
                  'Tailored workplace solutions',
                  'Compliance-focused guidance',
                  'Reliable HR expertise',
                  'Confidential service',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Protect your business while building a positive workplace.
              </p>
            </section>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border bg-secondary p-8 text-sm text-foreground/90 shadow-sm">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Need Professional Labour Relations Support?</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Contact us today to get practical HR and labour relations support that helps your business remain compliant, productive, and people-focused.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Trusted Workplace Advice</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our team provides practical counsel that supports fair and consistent decision-making, reduces risk, and promotes respectful workplace relationships.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={humanCapitalFAQs} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-secondary p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Need HR and Labour Relations Support?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's build a fair, compliant, and productive workplace together.
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
