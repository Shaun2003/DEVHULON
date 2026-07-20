import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Payroll & HR Compliance | Devhulon Business & People Solutions',
  description:
    'Devhulon Payroll & HR Compliance delivers accurate payroll processing, statutory compliance, and payroll advisory services for South African businesses.',
}

const subsection = (
  title: string,
  subtitle: string,
  description: string,
  list: string[],
  benefits: string[],
) => (
  <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-navy">Our Service Includes</h3>
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

export default function PayrollHrCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Payroll & HR Compliance"
        title="Reliable Payroll Solutions For Your Business"
        subtitle="Managing payroll can be time-consuming and complex. We provide accurate, confidential, and reliable payroll services that keep your employees paid correctly while ensuring compliance with South African payroll legislation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you employ five people or five hundred, we tailor our payroll services to suit your business. Our approach is built on accuracy, confidentiality and compliance.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy">Our Payroll Services Include</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-foreground/90">
                  {[
                    'Monthly Payroll Processing',
                    'Payroll Setup & Maintenance',
                    'Employee Onboarding & Terminations',
                    'Leave Administration',
                    'Payroll Reports',
                    'Statutory Payroll Compliance',
                    'Payroll Audits',
                    'Payroll Consulting',
                  ].map((item) => (
                    <li key={item} className="rounded-2xl bg-[#F6FFF4] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {subsection(
              'Monthly Payroll Processing',
              'Accurate Payroll, Every Pay Day',
              'We process your payroll accurately and on time, ensuring employees receive the correct salaries, wages, deductions, and allowances.',
              [
                'Salary And Wage Processing',
                'Overtime Calculations',
                'Bonuses And Commissions',
                'Allowances And Deductions',
                'Electronic Payslips',
                'Payroll Record Management',
              ],
              [
                'Accurate salary payments',
                'Reduced payroll errors',
                'Confidential payroll management',
                'Timely payroll processing',
              ],
            )}

            {subsection(
              'Payroll Setup & Maintenance',
              'Building A Payroll System That Works',
              "Whether you're starting a new business or changing payroll providers, we help establish and maintain an organised payroll system.",
              [
                'Employee Payroll Setup',
                'Payroll Information Updates',
                'Salary Structure Updates',
                'Employee Record Maintenance',
                'Payroll System Reviews',
              ],
              [
                'Organised payroll records',
                'Accurate employee information',
                'Efficient payroll administration',
              ],
            )}

            {subsection(
              'Employee Onboarding & Terminations',
              'Managing Payroll Throughout The Employee Lifecycle',
              'We assist with payroll administration when employees join or leave your organisation.',
              [
                'Adding New Employees To Payroll',
                'Final Salary Calculations',
                'Leave Pay Calculations',
                'Payroll Exits',
                'Payroll Documentation',
              ],
              [
                'Smooth employee transitions',
                'Accurate final payments',
                'Well-managed payroll records',
              ],
            )}

            {subsection(
              'Leave Administration',
              'Simple And Accurate Leave Management',
              'We help businesses maintain accurate leave records and ensure leave balances are correctly reflected in payroll.',
              [
                'Annual Leave',
                'Sick Leave',
                'Family Responsibility Leave',
                'Maternity Leave Tracking',
                'Leave Reporting',
              ],
              [
                'Accurate leave balances',
                'Better workforce planning',
                'Reduced administrative workload',
              ],
            )}

            {subsection(
              'Payroll Reports',
              'Payroll Information That Supports Better Decisions',
              'Access meaningful payroll reports that help you monitor employee costs and improve business planning.',
              [
                'Monthly Payroll Summaries',
                'Salary Reports',
                'Leave Reports',
                'Employee Cost Reports',
                'Payroll Analysis',
              ],
              [
                'Better financial planning',
                'Improved payroll visibility',
                'Informed business decisions',
              ],
            )}

            {subsection(
              'Statutory Payroll Compliance',
              'Helping Your Business Meet Payroll Requirements',
              'We assist businesses in maintaining payroll records and calculations that support compliance with statutory obligations.',
              [
                'PAYE',
                'UIF',
                'Skills Development Levy (SDL)',
                'Employee Tax Certificates (IRP5)',
                'Payroll Record Keeping',
              ],
              [
                'Improved compliance',
                'Accurate statutory calculations',
                'Reduced payroll risks',
              ],
            )}

            {subsection(
              'Payroll Audits',
              'Review Your Payroll With Confidence',
              'A payroll audit helps identify errors, improve accuracy, and strengthen payroll controls.',
              [
                'Payroll Record Review',
                'Compliance Assessment',
                'Payroll Error Identification',
                'Payroll Improvement Recommendations',
              ],
              [
                'Improved accuracy',
                'Reduced payroll risk',
                'Better payroll controls',
              ],
            )}

            {subsection(
              'Payroll Consulting',
              'Professional Payroll Advice',
              'Need guidance on payroll processes or legislation? We provide practical payroll advice to help your business make informed decisions.',
              [
                'Payroll Process Reviews',
                'Payroll Best Practices',
                'Payroll Compliance Guidance',
                'Payroll Administration Advice',
              ],
              [
                'Expert payroll support',
                'Practical solutions',
                'Professional guidance',
              ],
            )}

            <section className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Why Choose Devhulon?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                At Devhulon, we understand that payroll is more than paying salaries. It is about accuracy, confidentiality, compliance, and giving business owners peace of mind.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {[
                  'Accurate payroll processing',
                  'Professional payroll support',
                  'Confidential service',
                  'Tailored payroll solutions',
                  'Reliable reporting',
                  'Ongoing payroll guidance',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let us manage your payroll so you can focus on growing your business.
              </p>
            </section>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border bg-secondary p-8 text-sm text-foreground/90 shadow-sm">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Reliable Payroll Support</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our team delivers payroll services that are accurate, compliant and tailored to your business. We help reduce risk and improve payroll confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">Payroll Compliance You Can Trust</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We support statutory payroll obligations and provide clear payroll guidance so your business stays compliant with South African requirements.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
