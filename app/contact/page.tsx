import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | Devhulon Business & People Solutions',
  description:
    "Get in touch with Devhulon. Let's build a stronger tomorrow together. Call 065 575 4118 or email info@devhulon.co.za.",
}

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: '065 575 4118',
    href: 'tel:+27655754118',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@devhulon.co.za',
    href: 'mailto:info@devhulon.co.za',
  },
  {
    icon: MapPin,
    label: 'Locations',
    value: 'Thohoyandou, Limpopo & Gauteng',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build a Stronger Tomorrow Together"
        subtitle="We're here to help your business grow and your people succeed. Get in touch with our team today."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Get In Touch</h2>
            <p className="mt-3 text-muted-foreground">
              Reach out through any of the channels below, or send us a message and we&apos;ll
              respond as soon as possible.
            </p>
            <ul className="mt-8 space-y-6">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green/10 text-green">
                    <item.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-navy">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground transition-colors hover:text-green"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-secondary p-6">
              <div className="flex items-center gap-6">
                <Image
                  src="/south-africa-map.png"
                  alt="Map of South Africa showing Devhulon service areas"
                  width={160}
                  height={160}
                  className="h-32 w-32 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold text-navy">Serving Businesses</h3>
                  <p className="text-lg font-bold text-green">Across South Africa</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    From Limpopo to Gauteng and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
