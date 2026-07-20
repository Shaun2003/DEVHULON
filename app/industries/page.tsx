import type { Metadata } from 'next'
import {
  Factory,
  Pickaxe,
  Wrench,
  HardHat,
  Landmark,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
  Store,
  HandHeart,
  type LucideIcon,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Industries We Serve | Devhulon Business & People Solutions',
  description:
    'Devhulon delivers business and people solutions across manufacturing, mining, engineering, construction, government, education, healthcare, retail and more.',
}

const industryList: { name: string; icon: LucideIcon; text: string }[] = [
  { name: 'Manufacturing', icon: Factory, text: 'Optimising operations and workforce productivity.' },
  { name: 'Mining', icon: Pickaxe, text: 'Compliance, safety and skilled talent support.' },
  { name: 'Engineering', icon: Wrench, text: 'Technical recruitment and project capability.' },
  { name: 'Construction', icon: HardHat, text: 'Workforce planning and HR compliance.' },
  { name: 'Government', icon: Landmark, text: 'Advisory and capacity-building solutions.' },
  { name: 'Municipalities', icon: Building2, text: 'Service delivery and people development.' },
  { name: 'Education', icon: GraduationCap, text: 'Training, development and skills planning.' },
  { name: 'Healthcare', icon: HeartPulse, text: 'Talent acquisition and HR support.' },
  { name: 'Retail', icon: ShoppingBag, text: 'Recruitment and performance management.' },
  { name: 'Hospitality', icon: UtensilsCrossed, text: 'Staffing and customer-focused training.' },
  { name: 'Professional Services', icon: Briefcase, text: 'Strategy, HR and digital solutions.' },
  { name: 'SMEs', icon: Store, text: 'Practical, affordable growth solutions.' },
  { name: 'NGOs', icon: HandHeart, text: 'Governance, HR and capacity building.' },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        subtitle="We partner with organisations across a wide range of sectors, delivering tailored business and people solutions that drive real results."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryList.map((industry) => (
            <div
              key={industry.name}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green/10 text-green">
                <industry.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-navy">{industry.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {industry.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
