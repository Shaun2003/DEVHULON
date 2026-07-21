'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Info, Briefcase, Building, BookOpen, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Services', href: '/services', icon: Briefcase },
  { label: 'Industries', href: '/industries', icon: Building },
  { label: 'Resources', href: '/resources', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
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
        <div className="fixed inset-0 z-50 flex bg-navy/90 lg:hidden">
          <aside className="w-72 border-r border-border bg-background px-4 py-6 shadow-xl">
            <div className="flex items-center justify-between pb-6">
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
            <div className="space-y-2">
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
                      active ? 'bg-green/10 text-green' : 'text-navy hover:bg-slate-100/70',
                    )}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-green/10 text-green">
                      <Icon className="h-5 w-5" />
                    </span>
                    {item.label}
                  </Link>
                )
              })}
            </div>
            <div className="mt-6 border-t border-border pt-6">
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
