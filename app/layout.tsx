import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { organizationSchema, websiteSchema } from '@/lib/seo'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL('https://devhulon.co.za'),
  title: 'Devhulon | Business & People Solutions | South African Consulting Firm',
  description:
    'Devhulon Business & People Solutions is a trusted South African consulting firm helping businesses achieve sustainable growth through innovative solutions, people development, strategic consulting, digital transformation, and professional support services.',
  keywords: [
    'business consulting South Africa',
    'HR solutions',
    'recruitment services',
    'training and development',
    'payroll compliance',
    'digital solutions',
    'talent acquisition',
    'business strategy',
    'organizational development',
    'Limpopo consulting',
    'Gauteng consulting',
  ],
  alternates: {
    canonical: 'https://devhulon.co.za',
  },
  authors: [{ name: 'Devhulon' }],
  creator: 'Devhulon',
  publisher: 'Devhulon',
  icons: {
    icon: '/devhulon-logo-full.jpeg',
    shortcut: '/devhulon-logo-full.jpeg',
    apple: '/devhulon-logo-full.jpeg',
  },
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://devhulon.co.za',
    title: 'Devhulon | Business & People Solutions',
    description:
      'Trusted South African consulting firm providing business consulting, HR solutions, recruitment, training, payroll compliance, and digital solutions.',
    siteName: 'Devhulon',
    images: [
      {
        url: 'https://devhulon.co.za/devhulon-logo-full.jpeg',
        width: 1200,
        height: 630,
        alt: 'Devhulon Business & People Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devhulon | Business & People Solutions',
    description:
      'Trusted South African consulting firm providing business consulting, HR solutions, recruitment, training, payroll compliance, and digital solutions.',
    creator: '@devhulon',
    images: ['https://devhulon.co.za/devhulon-logo-full.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#16294d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-background`}>
      <head>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [organizationSchema, websiteSchema],
          }}
          id="devhulon-organization-website"
        />
      </head>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
