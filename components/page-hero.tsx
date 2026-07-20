export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative w-full bg-[#031529] text-white">
      {/* Background SVG Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top left and stretching green swoosh */}
        <svg
          className="absolute -top-10 left-0 w-full h-full object-cover opacity-80"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#greenGradHero)"
            d="M0,0 Q600,100 800,800 L0,800 Z"
          />
          <defs>
            <linearGradient id="greenGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
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

        {/* Bottom clean white curve that transitions out of the hero */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[50px] md:h-[90px] z-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d="M0,140 L1440,140 L1440,80 Q720,0 0,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3CB54A]">
            {eyebrow}
          </p>
        )}
        <h1 className="text-balance text-2xl sm:text-3xl font-extrabold tracking-tight md:text-4xl lg:text-6xl drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-white/95 font-medium drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
