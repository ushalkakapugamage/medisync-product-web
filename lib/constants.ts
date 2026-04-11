export type NavLink = { label: string; href: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Family', href: '#family' },
  { label: 'Download', href: '#download' },
]

export type Feature = { icon: string; title: string; description: string }

export const FEATURES: Feature[] = [
  {
    icon: 'ClipboardList',
    title: 'Smart Medication Plans',
    description: 'Group medicines by condition, just like your doctor prescribes.',
  },
  {
    icon: 'Bell',
    title: 'Multi-Stage Reminders',
    description: 'Alerts 15 minutes before, on time, and again if unconfirmed.',
  },
  {
    icon: 'Zap',
    title: 'Real-Time Fall Detection',
    description:
      'Wearable ESP32 sensor detects falls instantly and alerts your family.',
  },
  {
    icon: 'Users',
    title: 'Family Sharing Groups',
    description:
      'Invite caregivers to monitor adherence and receive live fall alerts.',
  },
  {
    icon: 'FileText',
    title: 'Prescription Uploads',
    description:
      'Photograph or upload prescriptions directly linked to each plan.',
  },
  {
    icon: 'BarChart2',
    title: 'Health Dashboard',
    description:
      'Track adherence history, missed doses, and fall events in one place.',
  },
]

export type Plan = {
  name: string
  description: string
  monthlyPrice: number
  features: string[]
  notIncluded: string[]
  cta: string
  highlighted: boolean
}

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    description: 'For individuals getting started',
    monthlyPrice: 0,
    features: ['Up to 3 medications', 'Basic reminders', 'Adherence tracking'],
    notIncluded: ['Family sharing', 'Fall detection', 'Wearable pairing'],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Personal',
    description: 'For complete health management',
    monthlyPrice: 6,
    features: [
      'Unlimited medications',
      'Multi-stage reminders',
      'Prescription uploads',
      'Fall detection alerts',
      '1 wearable device',
    ],
    notIncluded: ['Family group sharing'],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Family',
    description: 'For the whole family',
    monthlyPrice: 12,
    features: [
      'Everything in Personal',
      'Up to 6 family members',
      'Shared family dashboard',
      'Caregiver notifications',
      '3 wearable devices',
      'Priority support',
    ],
    notIncluded: [],
    cta: 'Start free trial',
    highlighted: false,
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'MediSync saved my father from missing his heart medication three times last week. The family alerts are a game changer.',
    name: 'Amara S.',
    role: 'Daughter & Caregiver',
    initials: 'AS',
  },
  {
    quote:
      'The fall detection gave our whole family peace of mind. Setup took less than 10 minutes.',
    name: 'Rohan P.',
    role: 'Family Plan user',
    initials: 'RP',
  },
  {
    quote:
      'Finally an app that treats medication management the way doctors actually think about it.',
    name: 'Dr. Nilufar K.',
    role: 'General Practitioner',
    initials: 'NK',
  },
]

export type TrustStat = { value: string; label: string }

export const TRUST_STATS: TrustStat[] = [
  { value: '50,000+', label: 'doses tracked' },
  { value: '99.2%', label: 'reminder delivery' },
  { value: '4.8★', label: 'App Store rating' },
]

export type HowItWorksStep = {
  step: number
  title: string
  description: string
}

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Create your profile',
    description:
      'Sign up in seconds, add your health information and personal preferences.',
  },
  {
    step: 2,
    title: 'Build your medication plans',
    description:
      'Add prescriptions, set schedules, and configure your reminders.',
  },
  {
    step: 3,
    title: 'Stay connected',
    description:
      'Share with family, pair your wearable device, and track everything in real time.',
  },
]
