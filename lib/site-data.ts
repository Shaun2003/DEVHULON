import testimonialsData from '@/data/testimonials.json'
import blogPostsData from '@/data/blog-posts.json'

export type Service = {
  slug: string
  icon: string
  title: string
  tagline: string
  description: string
  items: string[]
}

export type Testimonial = {
  quote: string
  author: string
  title: string
  company: string
  rating?: number
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

export const businessConsultingFAQs = [
  {
    question: 'How can business consulting help my organisation?',
    answer:
      'Our business consulting services help you develop clear strategies, improve operations, and identify growth opportunities. We work with you to streamline processes, enhance efficiency, and build a sustainable competitive advantage.',
  },
  {
    question: 'What is your typical engagement process?',
    answer:
      'We follow a structured approach: Discovery (understanding your business), Evaluation (assessing your position), Design (creating solutions), Implementation (executing plans), Support (ongoing guidance), and Improvement (measuring and refining results).',
  },
  {
    question: 'How long does a consulting engagement typically take?',
    answer:
      'Engagement duration depends on the scope of work and complexity of your challenges. Some projects take 3-6 months, while others may extend longer. We discuss timelines and milestones during the initial consultation.',
  },
  {
    question: 'Can you help with business planning and financial projections?',
    answer:
      'Yes. We develop comprehensive business plans, financial models, and growth strategies tailored to your industry and goals. Our plans are investor-ready and operationally sound.',
  },
  {
    question: 'Do you work with SMEs or only large corporations?',
    answer:
      'We work with businesses of all sizes—from small enterprises to large corporations. We tailor our approach and pricing to suit your organisational scale and budget.',
  },
]

export const humanCapitalFAQs = [
  {
    question: 'What HR services do you offer?',
    answer:
      'We provide comprehensive HR consulting, including HR policy development, performance management systems, employment relations support, compliance audits, and organisational development initiatives.',
  },
  {
    question: 'How can HR consulting improve our employee retention?',
    answer:
      'By developing clear HR strategies, competitive compensation structures, career development paths, and positive workplace cultures. We help you create an environment where people want to stay and grow.',
  },
  {
    question: 'Are your HR policies compliant with South African labour law?',
    answer:
      'Yes. All our HR policies and procedures are developed in compliance with South African labour legislation, including the Labour Relations Act, Employment Equity Act, and Basic Conditions of Employment Act.',
  },
  {
    question: 'Can you help with employee performance management?',
    answer:
      'Absolutely. We design customised performance management systems, train managers on effective feedback, and help establish clear KPIs and development plans for employees.',
  },
  {
    question: 'Do you offer organisational development services?',
    answer:
      'Yes. We help organisations transform through change management, culture development, team building, and alignment of strategy with people practices.',
  },
]

export const recruitmentFAQs = [
  {
    question: 'How do you ensure you find the right candidates for our roles?',
    answer:
      'We conduct thorough needs analysis, develop detailed candidate profiles, use multiple sourcing channels, perform rigorous screening, and conduct structured interviews. This ensures candidates match both role requirements and company culture.',
  },
  {
    question: 'What is your average time to fill a position?',
    answer:
      'Most positions are filled within 2-4 weeks depending on role level and availability of candidates. Executive search roles may take longer but prioritise finding the right fit.',
  },
  {
    question: 'Do you offer temporary or contract recruitment services?',
    answer:
      'Yes. We provide both permanent and temporary recruitment solutions, as well as contract and executive search services tailored to your business needs.',
  },
  {
    question: 'Can you help with interview preparation and support?',
    answer:
      'Absolutely. We provide interview skills training for hiring teams, conduct structured interviews, assess candidates thoroughly, and provide objective recommendations.',
  },
  {
    question: 'What is included in your reference check process?',
    answer:
      'We conduct comprehensive reference checks including employment verification, performance assessments, and background checks to ensure candidate credibility and suitability.',
  },
]

export const trainingFAQs = [
  {
    question: 'What types of training programmes do you offer?',
    answer:
      'We offer skills development, leadership training, compliance training, workplace skills programmes, and customised training solutions tailored to your organisational needs.',
  },
  {
    question: 'Are your training programmes accredited?',
    answer:
      'Many of our programmes follow accredited frameworks and standards. We discuss accreditation requirements during the training needs analysis and can accommodate specific certification needs.',
  },
  {
    question: 'Can training be conducted on-site or online?',
    answer:
      'Yes. We deliver training through multiple formats including on-site workshops, online sessions, blended learning, and self-paced modules to suit your preference and operational needs.',
  },
  {
    question: 'How do you measure the impact of training?',
    answer:
      'We use multiple evaluation methods including post-training assessments, feedback surveys, skills tests, and long-term performance tracking to measure training effectiveness and ROI.',
  },
  {
    question: 'Do you provide train-the-trainer services?',
    answer:
      'Yes. We can train internal trainers to deliver programmes independently, building capability within your organisation and ensuring sustainability of training initiatives.',
  },
]

export const payrollFAQs = [
  {
    question: 'What payroll compliance issues should I be aware of?',
    answer:
      'Key compliance areas include PAYE deductions, UIF, Workmen\'s Compensation, tax reconciliation, and accurate record keeping. We ensure your payroll meets all statutory requirements.',
  },
  {
    question: 'How do you handle leave management and accruals?',
    answer:
      'We manage leave calculations, accruals, tracking, and ensure compliance with minimum leave requirements. We also advise on leave policies aligned with your industry.',
  },
  {
    question: 'Can you help with payroll audits and compliance reviews?',
    answer:
      'Yes. We conduct comprehensive payroll audits, identify compliance gaps, and implement corrective measures to ensure your payroll processes meet all statutory requirements.',
  },
  {
    question: 'Do you provide payroll reports and analytics?',
    answer:
      'Absolutely. We provide detailed payroll reports, cost analysis, staffing insights, and dashboards that help you make informed decisions about compensation.',
  },
  {
    question: 'How do you ensure data security for payroll information?',
    answer:
      'We implement strict data security protocols, secure storage systems, limited access controls, and compliance with POPIA regulations to protect sensitive employee and financial data.',
  },
]

export const digitalSolutionsFAQs = [
  {
    question: 'What digital services does Devhulon provide?',
    answer:
      'We offer website development, logo design and branding, business email setup, Google Business Profile optimization, and social media setup to strengthen your digital presence.',
  },
  {
    question: 'How long does website development take?',
    answer:
      'Typically 4-8 weeks depending on complexity, features, and number of pages. We provide regular updates and involve you throughout the development process.',
  },
  {
    question: 'Is your website design mobile-friendly?',
    answer:
      'Yes. All our websites are fully responsive and optimised for desktop, tablet, and mobile devices. We test thoroughly to ensure excellent user experience across all platforms.',
  },
  {
    question: 'Do you offer SEO services with website development?',
    answer:
      'We build SEO best practices into every website including proper structure, meta tags, performance optimization, and mobile responsiveness. We can also discuss extended SEO and content marketing services.',
  },
  {
    question: 'Can you help with Google Business Profile and social media setup?',
    answer:
      'Yes. We help you create and optimise your Google Business Profile, set up social media accounts, and provide guidance on maintaining an active social media presence.',
  },
]

export const testimonials: Testimonial[] = testimonialsData

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  date: string
  image?: string
}

export const blogPosts: BlogPost[] = blogPostsData
