import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Cookie Policy | Devhulon Business & People Solutions',
  description:
    'Learn about the cookies used on the Devhulon website and how they support your browsing experience.',
}

const sections = [
  {
    heading: 'What cookies are',
    body: [
      'Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve the performance of the experience.',
    ],
  },
  {
    heading: 'Cookies we use',
    body: [
      'Our website may use essential cookies that allow core features to function, as well as analytics cookies that help us understand how visitors use the site and improve its content and structure.',
      'We do not use cookies to collect sensitive personal information without your consent.',
    ],
  },
  {
    heading: 'Managing cookies',
    body: [
      'You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of some parts of the site.',
    ],
  },
  {
    heading: 'Updates to this policy',
    body: [
      'We may update this Cookie Policy from time to time to reflect changes in our website tools, services, or legal requirements.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      subtitle="How Devhulon uses cookies to support website performance and user experience."
      intro="This Cookie Policy explains the types of cookies used on the Devhulon website and how they affect your browsing experience."
      lastUpdated="July 2026"
      sections={sections}
    />
  )
}
