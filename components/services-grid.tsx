import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/site-data'
import { Check } from 'lucide-react'

export function ServicesGrid({ showItems = true }: { showItems?: boolean }) {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.slug}
          className="flex flex-col rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-green/10 text-green">
            {service.icon.startsWith('http') ? (
              <img src={service.icon} alt={service.title} width={40} height={40} className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="h-6 w-6 sm:h-7 sm:w-7"
                priority
              />
            )}
          </div>
          <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold uppercase tracking-wide text-navy">
            {service.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
          {showItems && (
            <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5 border-t border-border pt-4 sm:pt-5">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {['business-consulting', 'training-development', 'recruitment-talent-acquisition', 'human-capital-solutions', 'payroll-hr-compliance', 'digital-solutions'].includes(service.slug) && (
            <div className="mt-4 sm:mt-5">
              <Link
                href={`/services/${service.slug}`}
                aria-label={`Read more about ${service.title}`}
                className="inline-flex items-center justify-center rounded-full border border-green bg-green px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-green/90 hover:border-green/90"
              >
                Read More
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
