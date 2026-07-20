import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Training & Development | Devhulon Business & People Solutions',
  description:
    'Training & Development services from Devhulon help businesses identify skills gaps, develop employee capabilities, and implement practical development strategies for improved performance.',
}

const services = [
  'Training Needs Analysis',
  'Skills Development Planning',
  'Workplace Skills Plans (WSP)',
  'Annual Training Reports (ATR)',
  'Leadership Development',
  'Management Development',
  'Employee Development',
  'Compliance Training Coordination',
  'Skills Audits',
  'Career Development Planning',
  'Succession Planning',
]

const subsection = (title: string, subtitle: string, description: string, list: string[], benefits: string[]) => (
  <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-navy">Our Services Include</h3>
        <ul className="mt-4 space-y-3 text-sm text-foreground/80">
          {list.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-navy">Benefits</h3>
        <ul className="mt-4 space-y-3 text-sm text-foreground/80">
          {benefits.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default function TrainingDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Development"
        title="Developing People. Strengthening Businesses."
        subtitle="A skilled workforce is one of the greatest assets any organisation can have. We help businesses identify skills gaps, develop employee capabilities, and implement practical development strategies that improve performance."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We believe that investing in people leads to increased productivity, stronger leadership, improved employee engagement, and sustainable business growth.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy">Our Training & Development Services</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-foreground/90">
                  {services.map((item) => (
                    <li key={item} className="rounded-2xl bg-[#F6FFF4] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {subsection(
              'Training Needs Analysis',
              'Identify The Right Training For Your Workforce',
              'Training should always address a real business need. A Training Needs Analysis helps organisations identify skills gaps and determine where employee development will have the greatest impact.',
              [
                'Skills Gap Analysis',
                'Departmental Assessments',
                'Individual Development Needs',
                'Training Recommendations',
                'Skills Prioritisation',
                'Workforce Development Planning',
              ],
              [
                'Better training investment',
                'Improved employee performance',
                'Increased productivity',
                'Focused development plans',
              ],
            )}

            {subsection(
              'Skills Development Planning',
              'Build A Workforce Ready For The Future',
              'Effective skills development ensures employees have the knowledge and capabilities needed to achieve organisational goals. We help businesses develop structured skills development plans that support employee growth and business performance.',
              [
                'Skills Development Strategies',
                'Annual Development Plans',
                'Learning Priorities',
                'Employee Growth Plans',
                'Workforce Capability Planning',
              ],
              [
                'Improved workforce capability',
                'Better employee engagement',
                'Increased productivity',
                'Long-term organisational growth',
              ],
            )}

            {subsection(
              'Workplace Skills Plans (WSP)',
              'Plan Your Organisation’s Training Effectively',
              'A Workplace Skills Plan helps organisations identify training priorities and align employee development with business objectives. We assist businesses in preparing professional plans that support workforce planning and growth.',
              [
                'WSP Preparation',
                'Skills Planning',
                'Training Prioritisation',
                'Workforce Development Advice',
                'WSP Reviews',
              ],
              [
                'Structured training plans',
                'Better workforce planning',
                'Organised employee development',
                'Compliance support',
              ],
            )}

            {subsection(
              'Annual Training Reports (ATR)',
              'Measure And Report Your Training Activities',
              'Annual Training Reports help organisations monitor employee development and evaluate training completed during the reporting period. We assist businesses in preparing accurate and professional reports.',
              [
                'ATR Preparation',
                'Training Record Reviews',
                'Employee Training Analysis',
                'Reporting Support',
              ],
              [
                'Accurate reporting',
                'Better training records',
                'Improved workforce planning',
                'Organised documentation',
              ],
            )}

            {subsection(
              'Developing Confident And Effective Leaders',
              'Strong Leadership Drives Organisational Success',
              'Our leadership development programmes help managers and supervisors strengthen their skills, improve communication, and lead high-performing teams.',
              [
                'Leadership Assessments',
                'Leadership Coaching',
                'Communication Skills',
                'Decision-Making Skills',
                'Team Leadership',
                'Workplace Leadership Development',
              ],
              [
                'Stronger leadership',
                'Improved employee engagement',
                'Better decision-making',
                'Increased team performance',
              ],
            )}

            {subsection(
              'Management Development',
              'Strengthening Management Capability',
              'Effective managers contribute to improved productivity, stronger teams, and better organisational performance. We support businesses by developing managers with the skills required to lead confidently.',
              [
                'Management Skills Development',
                'People Management',
                'Performance Coaching',
                'Team Management',
                'Conflict Resolution',
                'Workplace Communication',
              ],
              [
                'Better management practices',
                'Improved team performance',
                'Increased productivity',
                'Stronger leadership capability',
              ],
            )}

            {subsection(
              'Employee Development',
              'Supporting Continuous Employee Growth',
              'Employee development creates motivated, productive, and engaged teams. We help organisations create structured development opportunities that support career growth and organisational success.',
              [
                'Individual Development Plans',
                'Career Growth Planning',
                'Workplace Coaching',
                'Professional Development Advice',
                'Employee Growth Strategies',
              ],
              [
                'Higher employee engagement',
                'Better retention',
                'Improved performance',
                'Career progression',
              ],
            )}

            {subsection(
              'Compliance Training Coordination',
              'Supporting Workplace Compliance Through Training',
              'Compliance training helps organisations create safe, ethical, and legally compliant workplaces. We assist businesses in planning and coordinating programmes that address workplace compliance requirements.',
              [
                'Compliance Training Planning',
                'Legislative Awareness Training',
                'Workplace Policy Awareness',
                'Training Coordination',
                'Compliance Record Management',
              ],
              [
                'Improved compliance',
                'Reduced organisational risk',
                'Better employee awareness',
                'Stronger workplace culture',
              ],
            )}

            {subsection(
              'Skills Audits',
              'Understand The Skills Within Your Organisation',
              'A skills audit provides valuable insight into your workforce’s existing capabilities and identifies areas for development.',
              [
                'Employee Skills Assessments',
                'Competency Reviews',
                'Skills Gap Identification',
                'Workforce Capability Reports',
                'Development Recommendations',
              ],
              [
                'Better workforce planning',
                'Improved succession planning',
                'Targeted employee development',
                'Stronger organisational performance',
              ],
            )}

            {subsection(
              'Career Development Planning',
              'Helping Employees Build Successful Careers',
              'Career development supports employee motivation, engagement, and retention. We work with organisations to create career development pathways that align aspirations with business needs.',
              [
                'Career Planning',
                'Development Discussions',
                'Career Path Design',
                'Growth Opportunities',
                'Employee Development Planning',
              ],
              [
                'Increased employee satisfaction',
                'Improved retention',
                'Better succession planning',
                'Stronger organisational commitment',
              ],
            )}

            {subsection(
              'Succession Planning',
              'Preparing Tomorrow’s Leaders Today',
              'Succession planning ensures business continuity by identifying and preparing future leaders within the organisation.',
              [
                'Talent Identification',
                'Leadership Pipeline Development',
                'Critical Role Planning',
                'Successor Development',
                'Workforce Continuity Planning',
              ],
              [
                'Business continuity',
                'Reduced leadership gaps',
                'Stronger organisational resilience',
                'Better talent retention',
              ],
            )}

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Why Choose Devhulon For Training & Development?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                At Devhulon, we believe employee development is an investment, not an expense. Our solutions are designed to strengthen organisations by developing capable, confident, and high-performing employees.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {[
                  'Tailored development strategies',
                  'Experienced HR and business professionals',
                  'Practical workplace solutions',
                  'Focus on measurable results',
                  'Professional and reliable service',
                  'Long-term business partnerships',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border bg-secondary p-8 text-sm text-foreground/90 shadow-sm">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Invest In Your People</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Invest in your people and unlock your organisation's full potential. Our practical development programmes build skilled employees, stronger leaders, and a high-performing workplace.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Ready To Develop Your Workforce?</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Partner with Devhulon Business & People Solutions to build skilled employees, stronger leaders, and a resilient organisation.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
