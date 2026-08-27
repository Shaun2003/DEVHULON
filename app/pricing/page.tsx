import { Metadata } from 'next'
import { Check, Info } from 'lucide-react'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Pricing & Plans | Devhulon Business & People Solutions',
  description: 'View our flexible pricing plans for business support, HR services, web development, and digital marketing tailor-made for South African businesses.',
}

const businessSupportPlans = [
  {
    name: 'Essential',
    price: 'R2,500',
    period: '/month',
    description: 'For small businesses that need reliable support without employing a full-time HR professional.',
    features: [
      'Monthly HR consultation',
      'General HR advice',
      'Basic HR documentation',
      'Employee-related guidance',
      'Basic HR compliance support',
      'Basic business advisory',
      'One monthly management consultation',
    ],
    bestFor: 'Start-ups, entrepreneurs and small businesses.',
    popular: false,
  },
  {
    name: 'Growth',
    price: 'R4,500',
    period: '/month',
    description: 'Our recommended plan for growing businesses.',
    features: [
      'Everything in Essential, plus:',
      'Ongoing HR support',
      'Employee relations guidance',
      'Performance management support',
      'Recruitment support',
      'HR policy development and review',
      'HR compliance monitoring',
      'Payroll administration support',
      'Training and development support',
      'Monthly HR reporting',
      'Management advisory',
    ],
    bestFor: 'Businesses with growing teams that need structured ongoing support.',
    popular: true,
  },
  {
    name: 'Premium',
    price: 'R7,500',
    period: '/month',
    description: 'A comprehensive outsourced HR and business support solution for established SMEs.',
    features: [
      'Everything in Growth, plus:',
      'Strategic HR advisory',
      'Workforce planning support',
      'Employment Equity support',
      'WSP / ATR support',
      'Advanced performance management',
      'Recruitment coordination',
      'Employee relations support',
      'HR reporting and analysis',
      'Management support',
      'Business process advisory',
      'Quarterly HR review',
      'Priority support',
    ],
    bestFor: 'Established SMEs that need a dedicated external HR and business partner.',
    popular: false,
  },
]

const digitalSupportPlan = {
  name: 'Digital Support',
  price: 'R1,000',
  period: '/month',
  description: 'Add digital support to any monthly business package.',
  features: [
    'Website maintenance',
    'Small website content updates',
    'Up to 4 social media designs per month',
    'Basic Google Business Profile updates',
    'Minor graphic design support',
    'Online business presence support',
  ],
}

const websiteSolutions = [
  {
    name: 'One-Page Website',
    price: 'R2,500',
    period: ' once-off',
    description: 'For businesses that need a simple professional online presence.',
    features: [
      'One-page website',
      'Mobile-friendly design',
      'Business information',
      'Services',
      'Contact details',
      'WhatsApp integration',
      'Basic SEO',
    ],
  },
  {
    name: 'Starter Business Website',
    price: 'R3,500',
    period: ' once-off',
    description: 'For small businesses that need a complete website without unnecessary complexity.',
    features: [
      'Up to 5 pages',
      'Mobile-friendly design',
      'Home',
      'About',
      'Services',
      'Contact',
      'WhatsApp integration',
      'Contact form',
      'Basic SEO',
    ],
  },
  {
    name: 'Professional Business Website',
    price: 'R5,500',
    period: ' once-off',
    description: 'For businesses looking for a stronger online presence.',
    features: [
      'Up to 8–10 pages',
      'Customised design',
      'Mobile optimisation',
      'Contact forms',
      'WhatsApp integration',
      'Basic SEO',
      'Google integration',
      'Additional business pages',
    ],
  },
  {
    name: 'Custom Website',
    price: 'From R9,500',
    period: '',
    description: 'For businesses requiring additional functionality or a more customised solution.',
    features: [
      'Booking systems',
      'Online catalogues',
      'Advanced forms',
      'Payment integrations',
      'Membership functionality',
      'Custom business features',
    ],
  },
]

const servicesList = [
  {
    category: 'HR & People Services',
    description: 'For businesses that do not require a monthly package, individual services are also available.',
    items: [
      { name: 'HR Consultation', price: 'From R750/hour', desc: 'Professional HR advice and practical support for workplace matters.' },
      { name: 'Employment Contracts', price: 'From R950', desc: 'Preparation, review and amendment of employment contracts.' },
      { name: 'HR Policies', price: 'From R950/policy', desc: 'Practical workplace policies developed around your business.' },
      { name: 'HR Compliance Review', price: 'From R2,500', desc: 'A practical review of your HR documentation and processes.' },
      { name: 'Performance Management', price: 'From R2,500', desc: 'KPI development, performance processes, templates and management support.' },
      { name: 'Employment Equity Support', price: 'From R3,500', desc: 'Support with Employment Equity preparation, analysis, planning and reporting.' },
      { name: 'WSP / ATR Support', price: 'From R3,500', desc: 'Support with training data, WSP/ATR preparation and submission requirements.' },
    ],
  },
  {
    category: 'Recruitment',
    description: 'Recruitment support for businesses that need help finding and selecting suitable candidates.',
    items: [
      { name: 'Recruitment Support', price: 'From R2,500 per position', desc: 'May include: Vacancy briefing, Job advertisement, Candidate sourcing, CV screening, Shortlisting, Interview coordination, Candidate recommendations, Reference checks. Complex/senior positions quoted separately.' },
    ],
  },
  {
    category: 'Payroll',
    description: 'Payroll support for small and growing businesses. Pricing depends on employee numbers and payroll complexity.',
    items: [
      { name: 'Payroll Administration', price: 'From R1,000/month', desc: 'May include: Monthly payroll processing, Payslips, Employee data updates, Leave administration, Payroll reports, PAYE/UIF/SDL administration.' },
    ],
  },
  {
    category: 'Business Solutions',
    description: '',
    items: [
      { name: 'Business Registration', price: 'From R950', desc: 'Assistance with getting your business registered and setting up basic documentation.' },
      { name: 'Business Profile', price: 'From R950', desc: 'A professional business profile that communicates your services, capabilities and value.' },
      { name: 'Business Consultation', price: 'From R750/hour', desc: 'Practical support with business planning, processes, operational challenges, growth planning.' },
    ],
  },
  {
    category: 'Graphic Design',
    description: '',
    items: [
      { name: 'Business & Social Media Design', price: 'From R250/design', desc: 'Professional designs for social media, flyers, posters, digital ads, brochures, promotional material.' },
    ],
  },
]


export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Plans"
        title="Flexible Pricing for Growing Businesses"
        subtitle="At Devhulon Business & People Solutions, we make professional business, HR and digital support accessible to small businesses and growing organisations. Choose a once-off service when you need a specific solution, or choose a monthly plan when you want Devhulon to become an ongoing support partner to your business. All prices are starting prices. Final pricing depends on the scope, size and requirements of your business."
      />

      {/* Monthly Business Support */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Monthly Business Support</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Professional support that grows with your business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessSupportPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-white shadow-xl transition-transform hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-green border-2 border-green scale-105 md:scale-110 z-10' : 'border border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 -translate-y-1/2 flex justify-center">
                    <span className="bg-green text-green-foreground py-1 px-4 rounded-full text-sm font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 pb-6 flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold text-navy">{plan.price}</span>
                    <span className="text-slate-500 ml-2 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 min-h-[60px]">{plan.description}</p>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-bold text-navy">Includes:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-700">
                          <Check className="h-5 w-5 text-green shrink-0 mr-3 mt-0.5" />
                          <span className={feature.includes('Everything in') ? 'font-semibold' : ''}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <div className="bg-slate-50 p-4 rounded-xl mb-6">
                    <p className="text-xs text-slate-600 font-medium">
                      <span className="font-bold text-navy mb-1 block">Best for:</span> 
                      {plan.bestFor}
                    </p>
                  </div>
                  <Link 
                    href="/contact" 
                    className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                      plan.popular 
                        ? 'bg-green text-white hover:bg-green/90' 
                        : 'bg-navy text-white hover:bg-navy/90'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Add Digital Support Add-on */}
          <div className="mt-12 max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Add-on Package</span>
              <h3 className="text-2xl font-bold text-navy mb-2">{digitalSupportPlan.name}</h3>
              <div className="flex items-baseline mb-3">
                <span className="text-3xl font-bold text-green">{digitalSupportPlan.price}</span>
                <span className="text-slate-500 ml-2">{digitalSupportPlan.period}</span>
              </div>
              <p className="text-slate-600 mb-4">{digitalSupportPlan.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {digitalSupportPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-auto">
               <Link 
                  href="/contact" 
                  className="block w-full md:w-auto text-center py-3 px-8 rounded-lg font-bold bg-navy text-white hover:bg-navy/90 transition-colors whitespace-nowrap"
                >
                  Add Digital Support
                </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center max-w-4xl mx-auto text-sm text-slate-500 flex items-start justify-center gap-2">
            <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p>Premium services such as extensive recruitment, formal hearings, complex investigations, large-scale policy projects and major compliance projects may be quoted separately where they fall outside the agreed monthly scope.</p>
          </div>
        </div>
      </section>

      {/* Website Solutions */}
      <section className="py-20 bg-white">
         <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Website Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Get your business online with our professional web design packages.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {websiteSolutions.map((solution) => (
              <div key={solution.name} className="border border-slate-200 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy mb-2">{solution.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green">{solution.price}</span>
                  <span className="text-sm text-slate-500 font-medium">{solution.period}</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 h-10">{solution.description}</p>
                <div className="space-y-3 flex-1 mb-8">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/contact" 
                  className="block w-full text-center py-2.5 px-4 rounded-lg font-semibold bg-slate-100 text-navy hover:bg-slate-200 transition-colors"
                >
                  {solution.name === 'Custom Website' ? 'Request a Quote' : 'Get Your Website'}
                </Link>
              </div>
            ))}
          </div>

          {/* Website Care banner */}
          <div className="mt-12 max-w-4xl mx-auto bg-green/5 border border-green/20 rounded-2xl p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left flex-1">
              <h3 className="text-xl font-bold text-navy mb-1">Website Care <span className="text-green ml-2">From R500/month</span></h3>
              <p className="text-slate-600 text-sm">Keep your website updated and supported after launch. Includes website maintenance, content updates, image changes, technical support, and basic security.</p>
            </div>
            <Link 
              href="/contact" 
              className="py-2.5 px-6 rounded-lg font-semibold bg-green text-white hover:bg-green/90 transition-colors whitespace-nowrap"
            >
              Request Website Care
            </Link>
          </div>
         </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Individual Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">For businesses that do not require a monthly package, flexible once-off services are to meet your immediate needs.</p>
          </div>

          <div className="space-y-12">
            {servicesList.map((serviceCat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6 border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-bold text-navy">{serviceCat.category}</h3>
                  {serviceCat.description && (
                    <p className="text-slate-600 mt-2">{serviceCat.description}</p>
                  )}
                </div>
                <div className="space-y-6">
                  {serviceCat.items.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-navy">{item.name}</h4>
                        <p className="text-sm text-slate-600 mt-1 pr-4">{item.desc}</p>
                      </div>
                      <div className="shrink-0 text-left sm:text-right">
                        <span className="inline-block bg-green/10 text-[#1c5c23] font-bold px-4 py-2 rounded-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Build Your Own Package CTA */}
          <div className="mt-16 bg-navy text-white rounded-2xl p-10 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-3">Build Your Own Package</h3>
               <p className="text-white/80 mb-6 max-w-xl mx-auto">Need a combination of services? Let us know what you need and we will create a custom package tailored to your business.</p>
               <Link 
                  href="/contact" 
                  className="inline-block py-3 px-8 rounded-lg font-bold bg-green text-white hover:bg-green/90 transition-colors"
                >
                  Contact Us for a Custom Quote
                </Link>
             </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
