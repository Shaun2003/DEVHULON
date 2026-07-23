import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'POPIA Privacy Notice', href: '/popia-privacy-notice' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/92842789/',
    icon: FaLinkedin,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Devhulon',
    icon: FaFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/devhulon/',
    icon: FaInstagram,
  },
]

const services = [
  'Business Consulting',
  'Human Capital Solutions',
  'Recruitment & Talent Acquisition',
  'Training & Development',
  'Payroll & HR Compliance',
  'Digital Solutions',
]

export function SiteFooter() {
  return (
    <>
      {/* Global Sweeping Wave Transition into Footer */}
      <div className="w-full relative -mb-1 z-0 pointer-events-none" style={{ minHeight: '60px' }}>
        <svg
          className="h-15 w-full md:h-30"
          preserveAspectRatio="none"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green back-wave */}
          <path
            fill="#3CB54A"
            d="M0,80 Q200,200 700,80 T1440,0 L1440,200 L0,200 Z"
            opacity="0.9"
          />
          {/* Navy front-wave that connects exactly to the footer */}
          <path
            fill="#031529"
            d="M0,150 Q400,0 900,120 T1440,80 L1440,200 L0,200 Z"
          />
        </svg>
      </div>

      <footer className="bg-[#031529] text-white relative z-10 pt-3 sm:pt-4">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 py-6 sm:py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/d1d9e351-cc80-4778-ba16-dc352f4974be.jpeg"
              alt="Devhulon logo"
              width={44}
              height={44}
              sizes="44px"
              quality={90}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded bg-white object-contain p-0.5"
            />
            <span className="flex flex-col leading-none">
              <span className="text-base sm:text-lg font-extrabold tracking-tight">DEVHULON</span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-primary">
                Business &amp; People Solutions
              </span>
            </span>
          </div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-white/70">
            A trusted South African consulting firm dedicated to building stronger businesses and
            developing greater futures through practical, results-driven solutions.
          </p>
        </div>

        <div>
          <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((item) => (
              <li key={item}>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
            Legal
          </h3>
          <ul className="space-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
            Get In Touch
          </h3>
          <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-white/70">
            <li className="flex items-start gap-2 sm:gap-3">
              <Phone className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" />
              <a href="tel:+27655754118" className="transition-colors hover:text-white">
                065 575 4118
              </a>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <Mail className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" />
              <a href="mailto:info@devhulon.co.za" className="transition-colors hover:text-white">
                info@devhulon.co.za
              </a>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <MapPin className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" />
              <span>Thohoyandou, Limpopo &amp; Gauteng, South Africa</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center gap-2 text-xs text-white/60 sm:items-start">
              <p>&copy; {new Date().getFullYear()} Devhulon Business &amp; People Solutions. All rights reserved.</p>
              <p>Building Businesses. Developing People. Driving Performance.</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
