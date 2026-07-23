import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative w-full bg-[#031529] text-white">
      {/* Background Image of Professionals - Fixed to right side with fade */}
      <div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031529] via-[#031529]/80 to-transparent z-10" />
        <Image
          src="/hero-professionals.png"
          alt="Devhulon business professionals"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 66vw"
          quality={80}
          className="object-cover object-right-top opacity-90"
          priority
          fetchPriority="high"
        />
      </div>

      {/* Decorative Green Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top left and stretching green swoosh */}
        <svg
          className="absolute -top-10 left-0 w-full h-full object-cover opacity-80"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#greenGrad)"
            d="M0,0 Q600,100 800,800 L0,800 Z"
          />
          <defs>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3CB54A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0B301A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top White Curve Divider spanning from Header */}
        <svg
          className="absolute top-0 left-0 w-full h-[60px] md:h-[100px] z-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d="M0,0 L1440,0 L1440,20 Q700,100 0,60 Z" />
        </svg>

        {/* Bottom clean white curve that transitions to the next section */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[80px] md:h-[140px] z-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d="M0,140 L1440,140 L1440,80 Q720,0 0,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-20 sm:pt-28 sm:px-6 lg:pt-36 lg:pb-40 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            Building Businesses.
            <br />
            <span className="text-[#3CB54A]">Developing People.</span>
            <br />
            Driving Performance.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[500px] text-pretty text-sm sm:text-base leading-relaxed text-white/95 font-medium drop-shadow-md">
            Devhulon Business &amp; People Solutions is a trusted consulting firm dedicated to
            helping businesses achieve sustainable growth through innovative solutions, people
            development, strategic consulting, digital transformation, and professional support
            services.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row font-semibold">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3CB54A] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-[13px] tracking-wide text-white transition-colors hover:bg-[#329E40] hover:shadow-lg uppercase shadow-md"
            >
              BOOK A CONSULTATION {'>'}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-white/60 bg-transparent px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-[13px] tracking-wide text-white transition-colors hover:bg-white/10 uppercase"
            >
              EXPLORE OUR SERVICES {'>'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
