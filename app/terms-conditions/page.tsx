import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Devhulon Business & People Solutions',
  description:
    'Review the website terms and conditions for using the Devhulon website and its services.',
}

const sections = [
  {
    heading: 'Acceptance of terms',
    body: [
      'By accessing and using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not continue to use the site.',
    ],
  },
  {
    heading: 'Use of the website',
    body: [
      'You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.',
      'You may not use the website to send unsolicited communications, distribute harmful content, or attempt to access systems or data without permission.',
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      'All content published on this site, including text, branding, graphics, logos, and images, remains the property of Devhulon unless otherwise stated.',
      'You may not copy, reproduce, or republish site content without prior written consent.',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'Devhulon makes every reasonable effort to ensure that website information is accurate and up to date, but we do not guarantee that the site will be error-free, available at all times, or fit for every purpose.',
      'Our liability for any loss or damage arising from the use of this website is limited to the greatest extent permitted by law.',
    ],
  },
]

export default function TermsConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms & Conditions"
      subtitle="The rules and responsibilities that apply when using the Devhulon website."
      intro="These Terms & Conditions govern your access to and use of the Devhulon website and associated digital services."
      lastUpdated="July 2026"
      sections={sections}
    />
  )
}
