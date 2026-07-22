import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactDetails {
  showEmail?: boolean
  showPhone?: boolean
  showLocation?: boolean
  showForm?: boolean
  compact?: boolean
}

export function ContactDetails({
  showEmail = true,
  showPhone = true,
  showLocation = true,
  showForm = false,
  compact = false,
}: ContactDetails) {
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
      value: 'Thohoyandou, Limpopo & Gauteng, South Africa',
    },
  ]

  const visibleDetails = details.filter((detail) => {
    if (detail.label === 'Email') return showEmail
    if (detail.label === 'Phone') return showPhone
    if (detail.label === 'Locations') return showLocation
    return true
  })

  if (compact) {
    return (
      <div className="flex flex-wrap gap-4 sm:gap-6">
        {visibleDetails.map((detail) => (
          <div key={detail.label} className="flex items-center gap-2">
            <detail.icon className="h-4 w-4 text-green flex-shrink-0" />
            {detail.href ? (
              <a
                href={detail.href}
                className="text-sm text-muted-foreground hover:text-green transition-colors"
              >
                {detail.value}
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">{detail.value}</span>
            )}
          </div>
        ))}
        {showForm && (
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-green flex-shrink-0" />
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-green transition-colors"
            >
              Send us an enquiry
            </a>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {visibleDetails.map((detail) => (
        <div key={detail.label} className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green/10 text-green">
            <detail.icon className="h-6 w-6" strokeWidth={2} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-navy">{detail.label}</p>
            {detail.href ? (
              <a
                href={detail.href}
                className="text-muted-foreground transition-colors hover:text-green"
              >
                {detail.value}
              </a>
            ) : (
              <p className="text-muted-foreground">{detail.value}</p>
            )}
          </div>
        </div>
      ))}

      {showForm && (
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
          >
            Send us an Enquiry
          </Link>
        </div>
      )}
    </div>
  )
}
