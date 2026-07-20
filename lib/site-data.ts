export type Service = {
  slug: string
  icon: string
  title: string
  tagline: string
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    slug: 'business-consulting',
    icon: 'https://img.icons8.com/ios-filled/50/40C057/business-goal.png',
    title: 'Business Consulting',
    tagline: 'Strategic guidance to improve performance and drive sustainable growth.',
    description:
      'We help organisations sharpen strategy, streamline operations, and build a foundation for long-term, sustainable growth.',
    items: [
      'Business Strategy',
      'Business Plans',
      'Company Profiles',
      'Process Improvement',
      'Strategic Planning',
      'Business Advisory',
    ],
  },
  {
    slug: 'human-capital-solutions',
    icon: 'https://img.icons8.com/glyph-neue/64/40C057/groups.png',
    title: 'Human Capital Solutions',
    tagline: 'Building strong teams through HR consulting, policies and organisational development.',
    description:
      'From HR frameworks to performance systems, we help you attract, develop, and retain high-performing people.',
    items: [
      'HR Consulting',
      'HR Policies and Procedures',
      'Employment Contracts',
      'Performance Management',
      'Employee Relations',
      'HR Compliance and Audits',
      'Organisational Development',
    ],
  },
  {
    slug: 'recruitment-talent-acquisition',
    icon: 'https://img.icons8.com/ios-filled/50/40C057/find-matching-job.png',
    title: 'Recruitment & Talent Acquisition',
    tagline: 'Connecting businesses with the right talent for long-term success.',
    description:
      'End-to-end recruitment services that match the right people to the right roles, quickly and reliably.',
    items: [
      'Permanent Recruitment',
      'Temporary Recruitment',
      'Executive Search',
      'Interview Support',
      'Candidate Screening',
      'Reference Checks',
    ],
  },
  {
    slug: 'training-development',
    icon: 'https://img.icons8.com/ios-filled/50/40C057/training.png',
    title: 'Training & Development',
    tagline: 'Equipping individuals with skills to perform and grow.',
    description:
      'Practical, accredited-style training programmes that build capability across every level of your organisation.',
    items: [
      'Skills Development',
      'Leadership Development',
      'Workplace Skills Plans',
      'Training Needs Analysis',
      'Compliance Training',
      'Employee Development',
    ],
  },
  {
    slug: 'payroll-hr-compliance',
    icon: 'https://img.icons8.com/ios-filled/50/40C057/human-resources.png',
    title: 'Payroll & HR Compliance',
    tagline: 'Accurate payroll and compliance solutions for peace of mind.',
    description:
      'Reliable payroll administration and statutory compliance so you stay compliant and your people are paid on time.',
    items: [
      'Payroll Processing',
      'Leave Management',
      'Statutory Compliance',
      'Payroll Reports',
      'Employee Records Management',
    ],
  },
  {
    slug: 'digital-solutions',
    icon: 'https://img.icons8.com/pastel-glyph/64/40C057/laptop-coding--v2.png',
    title: 'Digital Solutions',
    tagline: 'Modern digital solutions that strengthen your online presence.',
    description:
      'Build a professional digital footprint with websites, branding, and business tools that help you grow.',
    items: [
      'Website Development',
      'Logo Design and Branding',
      'Business Email Setup',
      'Google Business Profile',
      'Social Media Setup',
    ],
  },
]

export const industries: string[] = [
  'Manufacturing',
  'Mining',
  'Engineering',
  'Construction',
  'Government',
  'Municipalities',
  'Education',
  'Healthcare',
  'Retail',
  'Hospitality',
  'Professional Services',
  'SMEs',
  'NGOs',
]

export const whyChoose: string[] = [
  'Professional and personalised service',
  'Practical solutions tailored to your business',
  'Experienced business and HR professionals',
  'Commitment to quality and integrity',
  'Long-term partnerships built on trust',
  'Results-driven approach',
]

export const coreValues: string[] = [
  'Integrity',
  'Excellence',
  'Innovation',
  'Collaboration',
  'Accountability',
  'Customer Focus',
  'Continuous Improvement',
]

export const approach = [
  { step: '01', title: 'Discover', text: 'We take time to understand your business, goals, and challenges.' },
  { step: '02', title: 'Evaluate', text: 'We assess your current position and identify opportunities.' },
  { step: '03', title: 'Design', text: 'We craft tailored strategies and practical solutions.' },
  { step: '04', title: 'Implement', text: 'We put plans into action alongside your team.' },
  { step: '05', title: 'Support', text: 'We provide ongoing support to ensure success.' },
  { step: '06', title: 'Improve', text: 'We measure results and continuously refine for growth.' },
]
