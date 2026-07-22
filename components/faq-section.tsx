'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
}

export function FAQSection({ title = 'Frequently Asked Questions', subtitle, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-balance text-2xl sm:text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 sm:mt-4 text-pretty text-sm sm:text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-4 sm:space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all hover:border-green/50"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left hover:bg-gray-50/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <h3 className="text-sm sm:text-base font-semibold text-navy pr-2">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-green transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="border-t border-border bg-gray-50/30 px-4 sm:px-6 py-4 sm:py-5">
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
