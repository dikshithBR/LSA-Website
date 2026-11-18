import heroSmashImg from '../assets/images/hero_badminton_smash_1795002268334.jpg';
import coachTrainingImg from '../assets/images/indonesian_coach_training_1795002268636.jpg';
import footworkDrillsImg from '../assets/images/elite_footwork_drills_1795002269010.jpg';

export type TrackCategory = 'kids' | 'adults' | 'elite';
export type BillingCycle = 'monthly' | 'quarterly';

export interface ScheduleBatch {
  id: string;
  title: string;
  category: TrackCategory;
  categoryLabel: string;
  ageGroup: string;
  days: string;
  timeSlot: string;
  sessionFocus: string;
  coachRatio: string;
}

export interface PricingTier {
  id: string;
  name: string;
  category: TrackCategory;
  audience: string;
  monthlyInr: number;
  quarterlyInr: number;
  sessionsPerWeek: string;
  description: string;
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
  { label: 'Coaching Lineage', value: 'Indonesian Head Coaches' },
  { label: 'Training Tracks', value: 'Kids · Adults · Elite' },
  { label: 'Methodology', value: '4-Stage Curriculum' },
  { label: 'Court Schedule', value: 'Morning & Evening' },
];

export const ACADEMY_PILLARS: AcademyPillar[] = [
  {
    index: '01.',
    title: 'Indonesian Coaching Lineage',
    description:
      'Train under coaches steeped in Indonesia’s high-tempo badminton tradition—emphasizing deceptive wrist work, fluid court recovery, and fearless net control.',
    metric: 'Max 6 Players / Court',
  },
  {
    index: '02.',
    title: 'Structured Curriculum',
    description:
      'Every player follows a documented progression from grip mechanics and six-corner footwork to multi-shuttle speed drills and tournament match tactics.',
    metric: '12-Week Skill Audits',
  },
  {
    index: '03.',
    title: 'Passionate Coaches',
    description:
      'Hands-on mentors who step onto the court with you every session—correcting micro-habits in real time and pushing every age group with genuine care.',
    metric: 'Kids · Adults · Elite',
  },
];

export const SCHEDULE_BATCHES: ScheduleBatch[] = [
  {
    id: 'kids-foundation-eve',
    title: 'Junior Foundation Batch',
    category: 'kids',
    categoryLabel: 'Kids',
    ageGroup: 'Ages 6–11 yrs',
    days: 'Mon · Wed · Fri',
    timeSlot: '04:30 PM – 05:45 PM',
    sessionFocus: 'Basic grip, coordination, footwork rhythm, and shuttle feeding',
    coachRatio: '1:6 Coach Ratio',
  },
  {
    id: 'kids-development-wknd',
    title: 'Junior Development & Weekend',
    category: 'kids',
    categoryLabel: 'Kids',
    ageGroup: 'Ages 10–15 yrs',
    days: 'Tue · Thu · Sat · Sun',
    timeSlot: '05:45 PM – 07:00 PM',
    sessionFocus: 'Stroke mechanics, net tumbling, clears, and structured match play',
    coachRatio: '1:6 Coach Ratio',
  },
  {
    id: 'adults-morning-fitness',
    title: 'Adult Morning Power Batch',
    category: 'adults',
    categoryLabel: 'Adults',
    ageGroup: 'Ages 17+ yrs',
    days: 'Mon to Fri',
    timeSlot: '06:30 AM – 07:45 AM',
    sessionFocus: 'High-calorie footwork, doubles rotation, defensive lifts, and conditioning',
    coachRatio: '1:6 Coach Ratio',
  },
  {
    id: 'adults-evening-technique',
    title: 'Adult Evening Technique & Sparring',
    category: 'adults',
    categoryLabel: 'Adults',
    ageGroup: 'Ages 17+ yrs',
    days: 'Mon · Wed · Fri',
    timeSlot: '07:30 PM – 08:45 PM',
    sessionFocus: 'Smash angles, drop consistency, serve-return patterns, and live games',
    coachRatio: '1:6 Coach Ratio',
  },
  {
    id: 'adults-weekend-club',
    title: 'Adult Weekend Tactical Sessions',
    category: 'adults',
    categoryLabel: 'Adults',
    ageGroup: 'Ages 17+ yrs',
    days: 'Sat & Sun',
    timeSlot: '07:30 AM – 09:00 AM',
    sessionFocus: 'Doubles partnership strategy, multi-shuttle defense, and coached sets',
    coachRatio: '1:6 Coach Ratio',
  },
  {
    id: 'elite-morning-hp',
    title: 'Elite Morning High-Performance',
    category: 'elite',
    categoryLabel: 'Elite',
    ageGroup: 'State & National Track',
    days: 'Mon to Sat',
    timeSlot: '05:30 AM – 07:30 AM',
    sessionFocus: 'Indonesian multi-shuttle speed, jump smash timing, and explosive recovery',
    coachRatio: '1:4 Coach Ratio',
  },
  {
    id: 'elite-evening-matchplay',
    title: 'Elite Evening Match & Conditioning',
    category: 'elite',
    categoryLabel: 'Elite',
    ageGroup: 'Tournament Players',
    days: 'Mon to Sat',
    timeSlot: '04:00 PM – 06:30 PM',
    sessionFocus: 'Pressure match simulation, video stroke review, and tournament tapering',
    coachRatio: '1:4 Coach Ratio',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'kids-tier',
    name: 'Kids Foundation',
    category: 'kids',
    audience: 'Ages 6–15 yrs · Beginner to Intermediate',
    monthlyInr: 3500,
    quarterlyInr: 9200,
    sessionsPerWeek: '3 Sessions / Week',
    description:
      'Built to instill clean Indonesian grip habits, balance, and court discipline from day one.',
    highlights: [
      'Structured 4-stage youth skill progression',
      '6:1 maximum student-to-coach court ratio',
      'Quarterly footwork & stroke assessment report',
      'Feather & synthetic shuttle drills included',
    ],
  },
  {
    id: 'adults-tier',
    name: 'Adults Coaching & Fitness',
    category: 'adults',
    audience: 'Ages 17+ yrs · All Skill Levels',
    monthlyInr: 4500,
    quarterlyInr: 11800,
    sessionsPerWeek: '4 Sessions / Week',
    description:
      'Structured coaching that blends sharp technique correction with serious badminton conditioning.',
    highlights: [
      'Morning or evening flexible batch access',
      'Doubles rotation, net kills, and backhand clears',
      'High-intensity court agility & endurance blocks',
      'Coached matchplay every Friday & weekend',
    ],
    featured: true,
  },
  {
    id: 'elite-tier',
    name: 'Elite High-Performance',
    category: 'elite',
    audience: 'Competitive & Tournament Athletes',
    monthlyInr: 8500,
    quarterlyInr: 22500,
    sessionsPerWeek: '6 Sessions / Week',
    description:
      'Full-intensity Indonesian academy regimen engineered for ranking tournaments and peak match stamina.',
    highlights: [
      '4:1 maximum elite athlete-to-coach ratio',
      'Daily multi-shuttle speed & deception drills',
      'Dedicated sparring sets & tactical match plans',
      'Bi-weekly physical & tactical benchmark reviews',
    ],
  },
];

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    step: '01',
    title: 'Grip, Stance & Split-Step Rhythm',
    summary:
      'Establishing relaxed forehand/backhand grip transitions and the Indonesian split-step timing that unlocks effortless court coverage.',
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
      'High-volume Indonesian feeding drills targeting late wrist holds, cross-court slices, and rapid transitions from defense to attack.',
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
