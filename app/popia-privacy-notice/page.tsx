import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'POPIA Privacy Notice | Devhulon Business & People Solutions',
  description:
    'Learn how Devhulon complies with South Africa’s Protection of Personal Information Act (POPIA).',
}

const sections = [
  {
    heading: 'Our commitment under POPIA',
    body: [
      'Devhulon respects the rights of individuals under the Protection of Personal Information Act, 2013 (POPIA) and strives to process personal information lawfully, fairly, and transparently.',
      'We collect personal information only for legitimate business purposes connected to our consulting, recruitment, training, payroll, and digital services.',
    ],
  },
  {
    heading: 'What we process',
    body: [
      'Depending on your interaction with us, we may process information such as your name, contact details, job title, company name, and communications with our team.',
      'We may also process information provided in the course of a project, service request, or recruitment engagement where that information is necessary for the relevant engagement.',
    ],
  },
  {
    heading: 'Lawful basis and security',
    body: [
      'We rely on lawful grounds for processing personal information, including consent, contract performance, and legitimate business interests where appropriate and permitted by law.',
      'Appropriate safeguards are in place to protect personal information from unlawful access, loss, or misuse.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You have the right to request access to your personal information, request correction of inaccurate information, object to certain processing, and ask for the deletion or restriction of information where applicable.',
      'If you would like to exercise your rights or have concerns about our compliance, please contact us directly.',
    ],
  },
]

export default function PopiaPage() {
  return (
    <LegalPage
      eyebrow="POPIA"
      title="POPIA Privacy Notice"
      subtitle="A clear overview of how Devhulon handles personal information in line with POPIA."
      intro="This notice explains the way Devhulon processes personal information and the rights available to individuals under South Africa’s POPIA framework."
      lastUpdated="July 2026"
      sections={sections}
    />
  )
}
