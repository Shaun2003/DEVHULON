'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Info, Briefcase, Building, BookOpen, Mail } from 'lucide-react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Services', href: '/services', icon: Briefcase },
  { label: 'Industries', href: '/industries', icon: Building },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
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

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/342ecdd9-c814-4f9c-a7a0-47ce12de4fc7.jpeg"
            alt="Devhulon Business & People Solutions"
            width={240}
            height={60}
            sizes="(max-width: 640px) 180px, 240px"
            quality={85}
            className="h-12 sm:h-16 w-auto mix-blend-multiply object-contain"
            priority
            fetchPriority="high"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-wide transition-colors hover:text-green',
                  active ? 'text-green' : 'text-navy',
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="rounded-md bg-green px-5 py-2.5 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
          >
            Book a Consultation
          </Link>
          <div className="hidden items-center gap-3 lg:flex">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy transition-colors hover:bg-green hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </nav>

        <button
          type="button"
          className="text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex bg-navy/90 lg:hidden overflow-hidden">
          <aside className="w-72 border-r border-border bg-background overflow-y-auto overflow-x-hidden shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-6 flex-shrink-0">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">Menu</p>
                <p className="mt-2 text-sm text-navy-foreground">Navigate the site</p>
              </div>
              <button
                type="button"
                className="text-navy"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-2 px-4 flex-grow overflow-y-auto">
              {navItems.map((item) => {
                const active = pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
                      active ? 'bg-green/10 text-[#1c5c23]' : 'text-navy hover:bg-slate-100/70',
                    )}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-green/10 text-[#1c5c23]">
                      <Icon className="h-5 w-5" />
                    </span>
                    {item.label}
                  </Link>
                )
              })}
            </div>
            <div className="mt-6 border-t border-border pt-6 px-4 flex-shrink-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy/60 mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green/10 text-[#1c5c23] transition-colors hover:bg-green hover:text-green-foreground"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="mt-4 px-4 pb-6 flex-shrink-0">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-green px-4 py-3 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
              >
                Book a Consultation
              </Link>
            </div>
          </aside>
          <button
            type="button"
            className="flex-1"
            onClick={() => setOpen(false)}
            aria-label="Close overlay"
          />
        </div>
      )}
    </header>
  )
}
