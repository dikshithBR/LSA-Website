import heroSmashImg from '../assets/images/hero_badminton_smash_1795002268334.jpg';
import coachTrainingImg from '../assets/images/indonesian_coach_training_1795002268636.jpg';
import footworkDrillsImg from '../assets/images/elite_footwork_drills_1795002269010.jpg';
import lsaLogoImg from '../assets/images/lsa_logo.png';

export type TrackCategory = 'kids' | 'adults' | 'elite';
export type BillingCycle = 'monthly' | 'quarterly' | 'half-yearly' | 'yearly';

export interface BillingCycleOption {
  id: BillingCycle;
  label: string;
  shortLabel: string;
  months: number;
  discountPercent: number;
  periodSuffix: string;
}

export interface ScheduleBatch {
  id: string;
  title: string;
  category: TrackCategory;
  categoryLabel: string;
  levelLabel: string;
  days: string;
  timeSlots: string[];
  sessionFocus: string;
}

export interface PricingPlanOption {
  id: string;
  label: string;
  sublabel: string;
  monthlyInr: number;
}

export interface PricingTier {
  id: string;
  name: string;
  audience: string;
  description: string;
  discountEligible: boolean;
  defaultOptionId: string;
  options: PricingPlanOption[];
  highlights: string[];
  featured?: boolean;
}

export interface CurriculumStage {
  step: string;
  title: string;
  summary: string;
  duration: string;
}

export interface AcademyPillar {
  index: string;
  title: string;
  description: string;
  metric: string;
}

export const WHATSAPP_NUMBER_RAW = '919108291185';
export const PHONE_DISPLAY = '+91 91082 91185';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(message)}`;
}

export const ACADEMY_MEDIA = {
  logo: {
    src: lsaLogoImg,
    alt: 'LSA — Leo Shuttlers Arena logo',
  },
  heroSmash: {
    src: heroSmashImg,
    alt: 'Badminton athlete executing an overhead jump smash inside Leo Shuttlers Arena',
  },
  indonesianCoach: {
    src: coachTrainingImg,
    alt: 'Indonesian badminton head coach demonstrating racket grip and wrist mechanics to a student',
  },
  footworkDrills: {
    src: footworkDrillsImg,
    alt: 'Player performing multi-shuttle net footwork drills on a dark synthetic badminton court',
  },
};

export const HERO_PROOF_STRIP = [
  { label: 'Coaching Team', value: 'Passionate & Hands-On' },
  { label: 'Methodology', value: '4-Stage Curriculum' },
  { label: 'Training Tracks', value: 'Kids · Adults · Elite' },
  { label: 'International Edge', value: 'Indonesian Coaches' },
];

export const ACADEMY_PILLARS: AcademyPillar[] = [
  {
    index: '01.',
    title: 'Passionate Coaches',
    description:
      'Hands-on mentors who step onto the court with you every session—correcting habits in real time and guiding every age group with genuine care and energy.',
    metric: 'Kids · Adults · Elite',
  },
  {
    index: '02.',
    title: 'Structured Curriculum',
    description:
      'Every player follows a documented progression from grip mechanics and six-corner footwork to multi-shuttle speed drills and tournament match tactics.',
    metric: '4-Stage Pathway',
  },
  {
    index: '03.',
    title: 'Indonesian Coaches',
    description:
      'Strengthened by experienced Indonesian coaches who bring sharp wrist mechanics, deceptive net play, and proven high-tempo court drills to our training floor.',
    metric: 'International Experience',
  },
];

export const SCHEDULE_BATCHES: ScheduleBatch[] = [
  {
    id: 'kids-beginners-weekday',
    title: 'Kids Beginners — Weekday',
    category: 'kids',
    categoryLabel: 'Kids',
    levelLabel: 'Beginners',
    days: 'Mon – Fri',
    timeSlots: ['04:00 PM – 05:00 PM', '05:00 PM – 06:00 PM'],
    sessionFocus: 'Basic grip, coordination, footwork rhythm, and foundational shuttle feeding',
  },
  {
    id: 'kids-beginners-weekend',
    title: 'Kids Beginners — Weekend',
    category: 'kids',
    categoryLabel: 'Kids',
    levelLabel: 'Beginners',
    days: 'Sat – Sun',
    timeSlots: ['11:00 AM – 12:00 PM'],
    sessionFocus: 'Weekend fundamentals, movement balance, serve mechanics, and guided rallies',
  },
  {
    id: 'kids-intermediate-weekday',
    title: 'Kids Intermediate — Weekday',
    category: 'kids',
    categoryLabel: 'Kids',
    levelLabel: 'Intermediate',
    days: 'Mon – Fri',
    timeSlots: ['05:00 AM – 07:00 AM', '04:00 PM – 06:00 PM', '05:00 PM – 07:00 PM'],
    sessionFocus: '2-hour structured stroke progression, multi-shuttle speed, and match play',
  },
  {
    id: 'adults-weekday',
    title: 'Adults — Weekday Batches',
    category: 'adults',
    categoryLabel: 'Adults',
    levelLabel: 'All Skill Levels',
    days: 'Mon – Fri',
    timeSlots: [
      '07:00 AM – 08:00 AM',
      '08:00 AM – 09:00 AM',
      '06:00 PM – 07:00 PM',
      '07:00 PM – 08:00 PM',
    ],
    sessionFocus: 'Morning and evening technique coaching, doubles rotation, footwork, and court fitness',
  },
  {
    id: 'adults-weekend',
    title: 'Adults — Weekend Batch',
    category: 'adults',
    categoryLabel: 'Adults',
    levelLabel: 'All Skill Levels',
    days: 'Sat – Sun',
    timeSlots: ['11:00 AM – 12:00 PM'],
    sessionFocus: 'Weekend stroke refinement, defensive drills, and coached matchplay',
  },
  {
    id: 'elite-morning',
    title: 'Elite — Morning High-Performance',
    category: 'elite',
    categoryLabel: 'Elite',
    levelLabel: 'Competitive Track',
    days: 'Mon – Sat',
    timeSlots: ['05:00 AM – 07:00 AM'],
    sessionFocus: 'High-tempo multi-shuttle speed, explosive court recovery, and conditioning',
  },
  {
    id: 'elite-midday',
    title: 'Elite — Midday Intensive',
    category: 'elite',
    categoryLabel: 'Elite',
    levelLabel: 'Competitive Track',
    days: 'Mon – Fri',
    timeSlots: ['10:00 AM – 01:00 PM'],
    sessionFocus: '3-hour tournament preparation, tactical sparring sets, deception, and match simulation',
  },
];

export const BILLING_CYCLES: BillingCycleOption[] = [
  {
    id: 'monthly',
    label: 'Monthly',
    shortLabel: 'Monthly',
    months: 1,
    discountPercent: 0,
    periodSuffix: '/ month',
  },
  {
    id: 'quarterly',
    label: 'Quarterly · 10% Off',
    shortLabel: 'Quarterly (3 Months)',
    months: 3,
    discountPercent: 10,
    periodSuffix: '/ 3 mos',
  },
  {
    id: 'half-yearly',
    label: 'Half-Yearly · 15% Off',
    shortLabel: 'Half-Yearly (6 Months)',
    months: 6,
    discountPercent: 15,
    periodSuffix: '/ 6 mos',
  },
  {
    id: 'yearly',
    label: 'Yearly · 25% Off',
    shortLabel: 'Yearly (12 Months)',
    months: 12,
    discountPercent: 25,
    periodSuffix: '/ year',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'beginners',
    name: 'Beginners',
    audience: 'Kids · Foundation Track',
    description:
      'Structured grip, footwork rhythm, and stroke fundamentals taught with patient, hands-on coaching.',
    discountEligible: true,
    defaultOptionId: 'beg-3d',
    options: [
      {
        id: 'beg-2d',
        label: '2 Days / Week',
        sublabel: 'Flexible starter frequency',
        monthlyInr: 2800,
      },
      {
        id: 'beg-3d',
        label: '3 Days / Week',
        sublabel: 'Balanced weekly progression',
        monthlyInr: 3500,
      },
      {
        id: 'beg-5d',
        label: '5 Days / Week',
        sublabel: 'Accelerated foundation building',
        monthlyInr: 4500,
      },
    ],
    highlights: [
      'Quarterly 10% · Half-Yearly 15% · Yearly 25% off',
      'Clean grip, split-step footwork, and shuttle feeding',
      'Direct coach supervision on every court',
    ],
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    audience: 'Kids · Skill Progression',
    description:
      'Higher court volume focused on multi-shuttle speed, tactical rally building, and matchplay.',
    discountEligible: true,
    defaultOptionId: 'int-3d',
    featured: true,
    options: [
      {
        id: 'int-3d',
        label: '3 Days / Week',
        sublabel: 'Structured mid-week & drill focus',
        monthlyInr: 5500,
      },
      {
        id: 'int-5d',
        label: '5 Days / Week',
        sublabel: 'Full weekday progression track',
        monthlyInr: 7000,
      },
    ],
    highlights: [
      'Quarterly 10% · Half-Yearly 15% · Yearly 25% off',
      '2-hour structured stroke & multi-shuttle speed blocks',
      'Guided matchplay and periodic skill reviews',
    ],
  },
  {
    id: 'adults',
    name: 'Adults',
    audience: 'Ages 17+ yrs · Fitness & Technique',
    description:
      'Structured morning, evening, and weekend coaching combining technique correction with serious court fitness.',
    discountEligible: false,
    defaultOptionId: 'adult-3d',
    options: [
      {
        id: 'adult-wknd',
        label: 'Weekend Batch',
        sublabel: 'Sat & Sun coached sessions',
        monthlyInr: 3000,
      },
      {
        id: 'adult-3d',
        label: '3 Days / Week',
        sublabel: 'Weekday morning or evening slots',
        monthlyInr: 4500,
      },
      {
        id: 'adult-5d',
        label: '5 Days / Week',
        sublabel: 'Full weekday coaching & conditioning',
        monthlyInr: 6000,
      },
    ],
    highlights: [
      'Standard monthly fee · Weekday & weekend slots',
      'Doubles rotation, backhand clears, and footwork drills',
      'Coached rally play and game conditioning',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    audience: 'Competitive & Tournament Athletes',
    description:
      'Full-intensity high-performance regimen engineered for state and national ranking tournaments.',
    discountEligible: false,
    defaultOptionId: 'elite-1s',
    options: [
      {
        id: 'elite-1s',
        label: 'One Session a Day',
        sublabel: 'Morning or midday high-performance court',
        monthlyInr: 14500,
      },
      {
        id: 'elite-2s',
        label: 'Both Sessions a Day',
        sublabel: 'Morning + midday full daily training',
        monthlyInr: 18500,
      },
      {
        id: 'elite-acc',
        label: 'Full Residential (Both Sessions + Stay & Food)',
        sublabel: 'Complete training, accommodation & athlete meals',
        monthlyInr: 28500,
      },
    ],
    highlights: [
      'Standard monthly fee · Multi-month discounts not applicable',
      'Daily multi-shuttle speed, deception, and sparring',
      'Dedicated tournament preparation & residential option',
    ],
  },
];

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    step: '01',
    title: 'Grip, Stance & Split-Step Rhythm',
    summary:
      'Establishing relaxed forehand and backhand grip transitions with balanced split-step timing that unlocks effortless court coverage.',
    duration: 'Weeks 1–4',
  },
  {
    step: '02',
    title: 'Six-Corner Footwork & Stroke Mechanics',
    summary:
      'Linking explosive lunges with clean overhead clears, tight spinning net shots, and repeatable defensive blocks without wasted motion.',
    duration: 'Weeks 5–10',
  },
  {
    step: '03',
    title: 'Multi-Shuttle Speed & Deception',
    summary:
      'High-volume feeding drills targeting late wrist holds, cross-court slices, and rapid transitions from defense to attack.',
    duration: 'Weeks 11–18',
  },
  {
    step: '04',
    title: 'Tactical Matchplay & Mental Composure',
    summary:
      'Reading opponent patterns, controlling rally tempo in singles and doubles, and executing under third-game scoreboard pressure.',
    duration: 'Ongoing Mastery',
  },
];

export function formatInr(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
