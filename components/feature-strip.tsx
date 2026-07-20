import { TrendingUp, Users, Target, LineChart } from 'lucide-react'

const features = [
  { icon: TrendingUp, title: 'Stronger Businesses', text: 'Smarter strategy and stronger foundations.' },
  { icon: Users, title: 'Empowered People', text: 'Skilled, motivated, high-performing teams.' },
  { icon: Target, title: 'Better Performance', text: 'Measurable results that move you forward.' },
  { icon: LineChart, title: 'Sustainable Growth', text: 'Long-term value built to last.' },
]

export function FeatureStrip() {
  return (
    <section className="bg-white pb-8 sm:pb-12 pt-2 sm:pt-4 relative z-20 -mt-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {features.map((f) => (
          <div key={f.title} className="flex flex-1 min-w-[160px] sm:min-w-[200px] items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg text-[#3CB54A]">
              <f.icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0A192F] leading-tight">
                {f.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
