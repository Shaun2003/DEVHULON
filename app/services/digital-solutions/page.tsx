import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { ContactDetails } from '@/components/contact-details'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, siteUrl } from '@/lib/seo'
import { digitalSolutionsFAQs, services, testimonials } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Digital Solutions Services | Devhulon | Web Design & Branding',
  description:
    'Digital solutions including website development, logo design, branding, Google Business Profile, and social media setup. Build your online presence.',
  keywords: [
    'digital solutions',
    'website development',
    'logo design',
    'branding',
    'Google Business Profile',
    'social media setup',
    'web design',
    'online presence',
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

export default function DigitalSolutionsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchema(
              services.find((service) => service.slug === 'digital-solutions')!,
              `${siteUrl}/services/digital-solutions`
            ),
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Services', url: `${siteUrl}/services` },
              { name: 'Digital Solutions', url: `${siteUrl}/services/digital-solutions` },
            ]),
          ],
        }}
        id="service-digital-solutions-jsonld"
      />
      <PageHero
        eyebrow="Digital Solutions"
        title="Empowering Businesses Through Technology"
        subtitle="We provide practical digital solutions designed to help organisations build credibility, strengthen their brand, improve customer engagement, and operate more efficiently."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Technology has become an essential part of running a successful business. Whether you are starting a new business or modernising an existing one, our team helps you leverage technology to achieve your business goals.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy">Our Digital Solutions</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-foreground/90">
                  {[
                    'Website Design & Development',
                    'Business Email Setup',
                    'Domain Registration',
                    'Company Profile Design',
                    'Corporate Branding',
                    'Logo Design',
                    'Google Business Profile',
                    'Social Media Business Setup',
                    'Business Documentation Design',
                    'Digital Business Advisory',
                  ].map((item) => (
                    <li key={item} className="rounded-2xl bg-[#F6FFF4] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Why Digital Solutions Matter</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Today’s customers search online before making purchasing decisions. A strong digital presence helps your business build credibility, reach more customers, and generate business opportunities.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm text-foreground/80">
                {[
                  'Build credibility',
                  'Reach more customers',
                  'Improve brand visibility',
                  'Increase customer confidence',
                  'Generate business opportunities',
                  'Support long-term growth',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Our Approach</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We take time to understand your business, your customers, and your objectives before recommending digital solutions. Every solution is designed to strengthen your brand while remaining practical, affordable, and scalable.
              </p>
            </section>

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Why Choose Devhulon?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Technology should simplify business—not complicate it. We combine business consulting expertise with modern digital solutions to help organisations establish a professional image that supports growth.
              </p>
            </section>

            {subsection(
              'Website Design & Development',
              'Professional Websites That Help Your Business Grow',
              'A professionally designed website builds trust, showcases your services, and helps convert visitors into clients. We create modern, responsive, and user-friendly websites that reflect your brand and support your business goals.',
              [
                'Business Websites',
                'Corporate Websites',
                'Portfolio Websites',
                'Service-Based Websites',
                'Landing Pages',
                'Website Content Development',
                'Mobile-Friendly Design',
                'Search Engine Optimisation (SEO) Foundations',
                'Website Maintenance & Updates',
              ],
              [
                'Professional online presence',
                'Improved credibility',
                'Better customer experience',
                'Increased visibility on search engines',
                'Mobile-responsive design',
                'Scalable for future growth',
              ],
            )}

            {subsection(
              'Business Email & Domain Solutions',
              'Professional Communication Starts With A Professional Email',
              'A business email address reinforces credibility and strengthens your brand. We help businesses establish secure, professional email solutions linked to their own domain name.',
              [
                'Domain Registration',
                'Business Email Setup',
                'Email Configuration',
                'Domain Renewal Support',
                'DNS Management Guidance',
              ],
              [
                'Professional communication',
                'Stronger brand identity',
                'Improved customer confidence',
                'Reliable email services',
              ],
            )}

            {subsection(
              'Corporate Branding',
              'Building Brands That Leave A Lasting Impression',
              'A strong brand helps your business stand out in a competitive marketplace. We develop professional branding that reflects your organisation’s identity and values.',
              [
                'Logo Design',
                'Brand Identity Development',
                'Colour Palette Selection',
                'Typography Guidance',
                'Brand Guidelines',
                'Stationery Design',
                'Business Card Design',
                'Letterhead Design',
                'Email Signature Design',
              ],
              [
                'Consistent brand identity',
                'Professional image',
                'Increased brand recognition',
                'Stronger market presence',
              ],
            )}

            {subsection(
              'Company Profile Development',
              'Present Your Business With Confidence',
              'A professionally designed company profile tells your story, showcases your services, and builds trust with potential clients, investors, and partners.',
              [
                'Company Profile Writing',
                'Company Profile Design',
                'Capability Statements',
                'Service Brochures',
                'Corporate Presentations',
                'Business Portfolios',
              ],
              [
                'Professional business presentation',
                'Stronger marketing materials',
                'Improved credibility',
                'Better client engagement',
              ],
            )}

            {subsection(
              'Google Business Profile',
              'Increase Your Local Visibility',
              'A Google Business Profile helps customers find your business online, view your location, read reviews, and contact you easily.',
              [
                'Google Business Profile Setup',
                'Business Verification Guidance',
                'Profile Optimisation',
                'Business Information Updates',
                'Photo Upload Assistance',
                'Local SEO Recommendations',
              ],
              [
                'Better local visibility',
                'Increased customer trust',
                'More enquiries',
                'Improved online presence',
              ],
            )}

            {subsection(
              'Social Media Business Setup',
              'Build A Professional Presence Across Social Platforms',
              'We help organisations establish professional business profiles that reflect your brand and attract your target audience.',
              [
                'Facebook Business Page Setup',
                'LinkedIn Company Page Setup',
                'Instagram Business Account Setup',
                'Business Profile Optimisation',
                'Branding Consistency',
                'Basic Content Planning',
              ],
              [
                'Professional online presence',
                'Consistent branding',
                'Improved customer engagement',
                'Greater brand awareness',
              ],
            )}

            {subsection(
              'Digital Business Advisory',
              'Helping Your Business Succeed In The Digital Economy',
              'We help businesses make informed decisions about digital tools and strategies that support growth, efficiency, and competitiveness.',
              [
                'Digital Strategy Consultation',
                'Technology Recommendations',
                'Online Presence Reviews',
                'Digital Growth Planning',
                'Business Technology Advisory',
              ],
              [
                'Better technology decisions',
                'Improved operational efficiency',
                'Sustainable digital growth',
                'Stronger competitive advantage',
              ],
            )}
          </div>

          <aside className="space-y-6 rounded-3xl border border-border bg-secondary p-8 text-sm text-foreground/90 shadow-sm">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Transform Your Business Digitally</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Modern businesses need modern solutions. Partner with Devhulon to establish a professional digital presence that supports long-term success.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Practical Digital Support</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We deliver technology solutions that are practical, affordable, and scalable for your business. Get the support you need to grow online.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={digitalSolutionsFAQs} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-secondary p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Ready to Strengthen Your Digital Presence?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's build digital solutions that help your business grow online.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
              >
                Start Your Digital Project
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
