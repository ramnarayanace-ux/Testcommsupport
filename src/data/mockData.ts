export interface Expert {
  id: string;
  name: string;
  initials: string;
  specialty: string;
  category: 'relays' | 'gis' | 'scada' | 'transformers';
  experienceYears: number;
  tags: string[];
  rateINR: number;
  rateUSD: number;
  rating: number;
  reviewsCount: number;
  avatarGradient: string;
  isOnline: boolean;
  activeSite: string;
}

export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  mode: string;
  priceINR: number;
  priceUSD: number;
  description: string;
  modulesCount: number;
  labAccess: string;
  accentAccentColor: string;
}

export interface LiveConsultation {
  id: string;
  expertName: string;
  initials: string;
  specialty: string;
  timeLabel: string;
  statusType: 'live' | 'today' | 'tomorrow';
  gradient: string;
}

export const UPCOMING_CONSULTATIONS: LiveConsultation[] = [
  {
    id: 'c-1',
    expertName: 'Ram Narayan Gupta',
    initials: 'RG',
    specialty: 'Protection Relay Tripping (IEC 61850)',
    timeLabel: 'Live now',
    statusType: 'live',
    gradient: 'from-[#FF6B35] to-[#D94E1B]',
  },
  {
    id: 'c-2',
    expertName: 'Md Faisal',
    initials: 'MF',
    specialty: 'GIS Substation SF6 Gas Interlock',
    timeLabel: 'Today 3:00 PM',
    statusType: 'today',
    gradient: 'from-[#1E3A8A] to-[#2563EB]',
  },
  {
    id: 'c-3',
    expertName: 'Elena Rostova',
    initials: 'ER',
    specialty: 'Gas Turbine Woodward Governor T&C',
    timeLabel: 'Tomorrow 10 AM',
    statusType: 'tomorrow',
    gradient: 'from-[#065F46] to-[#059669]',
  },
];

export const TRUSTED_COMPANIES = [
  { name: 'SIEMENS', note: 'Energy & Automation' },
  { name: 'ABB', note: 'Electrification & Motion' },
  { name: 'SCHNEIDER', note: 'Power Systems' },
  { name: 'GE VERNOVA', note: 'Grid Solutions' },
  { name: 'HITACHI', note: 'Energy T&D' },
];

export const EXPERTS: Expert[] = [
  {
    id: 'exp-1',
    name: 'Ram Narayan Gupta, SLPL',
    initials: 'RG',
    specialty: 'Testing Manager',
    category: 'relays',
    experienceYears: 16,
    tags: ['Siemens SIPROTEC', 'IEC 61850 GOOSE', 'OMICRON CMC'],
    rateINR: 2500,
    rateUSD: 140,
    rating: 4.98,
    reviewsCount: 142,
    avatarGradient: 'from-[#FF6B35] to-[#E85D04]',
    isOnline: true,
    activeSite: '415V, 11KV, 33KV, 66KV, 132KV, 220KV, 400KV, 765KV',
  },
  {
    id: 'exp-2',
    name: 'Md Faisal, SLPL',
    initials: 'MF',
    specialty: 'High-Voltage GIS & Breaker Interlocks',
    category: 'gis',
    experienceYears: 14,
    tags: ['ABB ELK-04', 'SF6 Gas Handling', 'Timing Analysis'],
    rateINR: 2800,
    rateUSD: 160,
    rating: 4.95,
    reviewsCount: 118,
    avatarGradient: 'from-[#0F172A] to-[#334155]',
    isOnline: true,
    activeSite: 'Industrial Petrochem Substation',
  },
  {
    id: 'exp-3',
    name: 'Elena Rostova',
    initials: 'ER',
    specialty: 'Turbine Control & Heavy Drives T&C',
    category: 'scada',
    experienceYears: 18,
    tags: ['Woodward Peak150', 'GE Mark VIe', 'Excitation Systems'],
    rateINR: 3200,
    rateUSD: 185,
    rating: 5.0,
    reviewsCount: 96,
    avatarGradient: 'from-[#1E3A8A] to-[#1D4ED8]',
    isOnline: true,
    activeSite: 'Combined Cycle Power Plant',
  },
  {
    id: 'exp-4',
    name: 'Devanathan Iyer',
    initials: 'DI',
    specialty: 'SCADA, RTU & Substation Telemetry',
    category: 'scada',
    experienceYears: 13,
    tags: ['DNP3 / Modbus', 'SEL-3530 RTAC', 'Survalent SCADA'],
    rateINR: 2400,
    rateUSD: 135,
    rating: 4.92,
    reviewsCount: 84,
    avatarGradient: 'from-[#047857] to-[#10B981]',
    isOnline: true,
    activeSite: 'Metro Rail Traction SCADA',
  },
  {
    id: 'exp-5',
    name: 'Sarah Lindqvist',
    initials: 'SL',
    specialty: 'Power Transformer Vector & Tan-Delta',
    category: 'transformers',
    experienceYears: 15,
    tags: ['Megger FRAX', 'DGA Analysis', 'Buchholz Relays'],
    rateINR: 2900,
    rateUSD: 165,
    rating: 4.97,
    reviewsCount: 104,
    avatarGradient: 'from-[#7C3AED] to-[#A855F7]',
    isOnline: true,
    activeSite: 'Renewable Solar Farm Substation',
  },
  {
    id: 'exp-6',
    name: 'Tariq Al-Mansoor',
    initials: 'TM',
    specialty: 'SEL Feeder & Differential Protection',
    category: 'relays',
    experienceYears: 12,
    tags: ['SEL-751 / 487E', 'AcSELerator QuickSet', 'Arc Flash Sensing'],
    rateINR: 2300,
    rateUSD: 130,
    rating: 4.94,
    reviewsCount: 79,
    avatarGradient: 'from-[#D97706] to-[#F59E0B]',
    isOnline: true,
    activeSite: 'Mining HV Distribution Plant',
  },
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'IEC 61850 Substation Protection & GOOSE Engineering',
    level: 'Advanced',
    duration: '24 Hours',
    mode: 'Live Virtual Labs + Relay Sim',
    priceINR: 12499,
    priceUSD: 499,
    description: 'Master SCL, SCD file configuration, GOOSE message interlock testing, and Wireshark MMS packet diagnostics for modern digital substations.',
    modulesCount: 8,
    labAccess: '30-day cloud OMICRON IED simulation container',
    accentAccentColor: '#FF6B35',
  },
  {
    id: 'course-2',
    title: 'Practical Secondary Injection & Differential Relay T&C',
    level: 'Intermediate',
    duration: '18 Hours',
    mode: 'Interactive Schematic Workshops',
    priceINR: 9999,
    priceUSD: 399,
    description: 'Calculate fault impedance, plot 87T slope characteristics, verify CT polarity under load, and troubleshoot nuisance trips on energized feeders.',
    modulesCount: 6,
    labAccess: 'Real-world SEL & Siemens parameter files included',
    accentAccentColor: '#2563EB',
  },
  {
    id: 'course-3',
    title: 'GIS Switchgear Pre-Commissioning & SF6 Diagnostics',
    level: 'Beginner',
    duration: '14 Hours',
    mode: 'Step-by-Step Site Procedures',
    priceINR: 7499,
    priceUSD: 299,
    description: 'Standard operating procedures for SF6 gas dew point testing, vacuum breaker timing analysis, dynamic contact resistance, and interlock walkdowns.',
    modulesCount: 5,
    labAccess: 'Downloadable commissioning checklist templates (Excel/PDF)',
    accentAccentColor: '#059669',
  },
];

export const FAQS = [
  {
    q: 'How quickly can I connect to an expert when I am stuck on-site?',
    a: 'For live emergency support, active experts respond within 5 to 15 minutes. Once booked, an instant secure video/audio bridge is generated with camera switching for control cabinets.',
  },
  {
    q: 'What equipment and brand ecosystems do your consultants cover?',
    a: 'Our network covers all Tier-1 power and automation manufacturers including Siemens (SIPROTEC, SICAM), ABB/Hitachi (Relion, MicroSCADA), Schneider (MiCOM, Easergy), SEL (Schweitzer Engineering Laboratories), Woodward, and GE Vernova.',
  },
  {
    q: 'Can our company book block hours or enterprise service agreements?',
    a: 'Yes. Engineering contractors and commissioning teams can subscribe to block hour retainers with guaranteed SLA response times and dedicated corporate invoicing.',
  },
  {
    q: 'Are the training certificates recognized for continuing professional development (CPD)?',
    a: 'Yes, each course includes a verified certificate with credential hash, listing hands-on simulator hours, curriculum modules, and instructor accreditation.',
  },
];
