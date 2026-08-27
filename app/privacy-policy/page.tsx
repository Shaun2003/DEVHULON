import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | Devhulon Business & People Solutions',
  description:
    'Read how Devhulon collects, uses, and protects personal information on this website in line with South African privacy expectations.',
}

const sections = [
  {
    heading: 'What information we collect',
    body: [
      'Devhulon collects personal information you provide when you contact us, request a consultation, subscribe to updates, or submit an enquiry through our website.',
      'This may include your name, email address, phone number, company name, and the content of your message.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'We use the information we collect to respond to your enquiries, provide requested services, improve our website experience, and communicate with you about relevant opportunities or updates.',
      'We do not sell or rent your personal information to third parties for marketing purposes.',
    ],
  },
  {
    heading: 'Data protection and storage',
    body: [
      'We take reasonable technical and organisational measures to protect your personal information from unauthorised access, use, disclosure, or loss.',
      'Information may be stored in secure systems and retained only for as long as necessary to fulfil the purpose for which it was collected.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You may request access to, correction of, or deletion of your personal information where appropriate, subject to applicable law and legitimate business requirements.',
      'If you would like to exercise any privacy right or have a concern about how your information is handled, please contact us using the details below.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="How Devhulon handles personal information collected through this website and our communication channels."
      intro="This Privacy Policy explains how Devhulon Business & People Solutions collects, uses, stores, and protects personal information when you visit our website or engage with our team."
      lastUpdated="July 2026"
      sections={sections}
    />
  )
}
