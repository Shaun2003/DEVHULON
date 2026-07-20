'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/342ecdd9-c814-4f9c-a7a0-47ce12de4fc7.jpeg"
            alt="Devhulon Business & People Solutions"
            width={240}
            height={60}
            className="h-12 sm:h-16 w-auto mix-blend-multiply object-contain"
            priority
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
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-3 py-3 sm:px-6 sm:py-4">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wide',
                    active ? 'bg-accent text-green' : 'text-navy',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-green px-5 py-3 text-center text-sm font-semibold text-green-foreground"
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
