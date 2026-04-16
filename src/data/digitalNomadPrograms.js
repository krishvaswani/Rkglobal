import greeceFlag from '../assets/flags/greece-flag.webp';
import maltaFlag from '../assets/flags/malta-flag.webp';
import portugalFlag from '../assets/flags/portugal-flag.webp';
import spainFlag from '../assets/flags/spain-flag.svg';

import greeceCountryImg from '../assets/country/greece.png';
import maltaCountryImg from '../assets/country/malta.png';
import portugalCountryImg from '../assets/country/_PORTUGAL.png';

import greeceContactImg from '../assets/get-in-touch/GREECE-.png';
import maltaContactImg from '../assets/get-in-touch/MALTA.jpg.jpeg';
import portugalContactImg from '../assets/get-in-touch/_PORTUGAL.png';

const buildProgram = ({
  slug,
  name,
  menuLabel,
  flag,
  heroImage,
  contactImage,
  heroTitle,
  heroDescription,
  stats,
  about,
  benefitsIntro,
  benefits,
  processIntro,
  processSteps,
  requirementsSummary,
  requirementsChecklist,
  qualificationDescription,
  qualificationOptions,
  qualificationOptionsTitle = 'Eligible Dependents',
  investment,
  legalBasis,
  faqs,
}) => ({
  slug,
  name,
  menuLabel,
  flag,
  heroImage,
  contactImage,
  categoryLabel: 'Digital Nomad',
  heroTitle,
  heroDescription,
  stats,
  about,
  benefitsIntro,
  benefits,
  processIntro,
  processSteps,
  requirementsSummary,
  requirementsChecklist,
  qualificationDescription,
  qualificationOptionsTitle,
  qualificationOptions,
  investment,
  legalBasis,
  faqs,
});

const digitalNomadPrograms = [
  buildProgram({
    slug: 'greece-fip-visa',
    name: 'Greece FIP Visa',
    menuLabel: 'Greece FIP Visa',
    flag: greeceFlag,
    heroImage: greeceCountryImg,
    contactImage: greeceContactImg,
    heroTitle: 'GREECE FINANCIALLY INDEPENDENT PERSON VISA',
    heroDescription:
      'A residency pathway for non-EU applicants with stable passive income, with no property purchase requirement and Schengen access.',
    stats: [
      { value: 'EUR 3,500', label: 'Minimum Monthly\nIncome' },
      { value: '4-6 Months', label: 'Time to\nProcess' },
      { value: 'EU Resident', label: 'Residency\nStatus' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Greece',
      subtitle: 'Where History Meets the Modern European Lifestyle',
      description:
        'Greece combines a Mediterranean lifestyle with a legal long-stay route for financially independent applicants.',
      secondaryDescription:
        'As an EU and Schengen member, Greece gives residents practical mobility across Europe.',
      highlights: [
        'No mandatory property purchase',
        'Structured passive-income route',
        'Schengen mobility benefits',
        'Renewable residence permit format',
      ],
    },
    benefitsIntro:
      'The Greece FIP route offers long-term European residency through income-based eligibility.',
    benefits: [
      { title: 'Schengen Access', description: 'Travel across all Schengen member countries for short stays.' },
      { title: 'No Investment Requirement', description: 'Qualification is based on passive income rather than capital investment.' },
      { title: 'Family Inclusion', description: 'Spouse and dependent children can be included.' },
      { title: 'Renewable Permit', description: 'Initial three-year permit with renewal options under continued eligibility.' },
      { title: 'Path to Permanent Residence', description: 'Can progress toward permanent status after qualifying residence period.' },
      { title: 'Citizenship Potential', description: 'Long-term legal residence can support later citizenship eligibility.' },
    ],
    processIntro: 'End-to-end support from eligibility review to residence card issuance.',
    processSteps: [
      'Eligibility Assessment',
      'Document Preparation',
      'National D Visa Filing',
      'D Visa Approval and Entry',
      'Residence Permit Appointment',
      'Residence Card Issuance',
    ],
    requirementsSummary:
      'For non-EU applicants with legally sourced passive income and no local employment activity in Greece.',
    requirementsChecklist: [
      '18 years of age or older',
      'Valid passport',
      'No criminal record',
      'Minimum passive income of EUR 3,500 per month',
      'Private health insurance valid in Greece',
      'Proof of accommodation in Greece',
    ],
    qualificationDescription: 'Eligible dependents:',
    qualificationOptions: [
      'Spouse of main applicant',
      'Biological or adopted children under 18 years of age',
    ],
    investment: {
      title: 'Financial Details for the Greece FIP Visa',
      description: 'Core monthly income and permit timeline benchmarks.',
      stats: [
        { value: 'EUR 3,500', label: 'Minimum Monthly\nIncome' },
        { value: '3 Years', label: 'Initial Permit\nValidity' },
        { value: '5 Years', label: 'To Permanent\nResidence' },
      ],
    },
    legalBasis:
      'The Greece FIP route is administered under Greek immigration provisions for financially independent third-country nationals.',
    faqs: [
      { question: 'Who can apply for Greece FIP?', answer: 'Non-EU nationals with stable passive income that meets minimum thresholds.' },
      { question: 'Is property purchase required?', answer: 'No, the route is income based and does not require real estate purchase.' },
      { question: 'Can family be included?', answer: 'Yes, eligible dependents can be included in the process.' },
      { question: 'Can I work locally in Greece on this permit?', answer: 'The route is designed for financially independent applicants, not local employment.' },
      { question: 'Does this lead to permanent residence?', answer: 'It can support permanent residence after qualifying legal stay.' },
    ],
  }),
  buildProgram({
    slug: 'spain-digital-nomad-visa',
    name: 'Spain Digital Nomad Visa',
    menuLabel: 'Spain Digital Nomad Visa',
    flag: spainFlag,
    heroImage: portugalCountryImg,
    contactImage: portugalContactImg,
    heroTitle: 'SPAIN DIGITAL NOMAD VISA',
    heroDescription:
      'A modern residency route for remote workers and freelancers under Spain startup-era framework with Schengen mobility.',
    stats: [
      { value: 'EUR 2,849', label: 'Minimum Monthly\nIncome' },
      { value: '1-4 Months', label: 'Time to\nProcess' },
      { value: 'EU Resident', label: 'Residency\nStatus' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Spain',
      subtitle: 'A Dynamic Destination for Remote Workers',
      description:
        'Spain combines quality of life, climate diversity, and a clear legal framework for location-independent professionals.',
      secondaryDescription:
        'The Digital Nomad Visa supports non-EU applicants working primarily for clients or employers outside Spain.',
      highlights: [
        'Fast process in many cases',
        'Potential tax optimization framework',
        'Family application support',
        'Long-term residency pathway',
      ],
    },
    benefitsIntro:
      'Spain offers a balanced package of mobility, lifestyle, and legal residency structure for remote workers.',
    benefits: [
      { title: 'Schengen Access', description: 'Visa-free movement across Schengen countries for short stays.' },
      { title: 'Fast Processing Potential', description: 'Application timelines can be efficient with complete documentation.' },
      { title: 'Tax Regime Opportunity', description: 'Eligible applicants may access special taxation framework.' },
      { title: 'Permanent Residence Pathway', description: 'Can progress to permanent residence after qualifying legal stay.' },
      { title: 'Family Residency', description: 'Partner, children, and eligible parents may be included.' },
      { title: 'Citizenship Potential', description: 'Long-term legal residence can support citizenship eligibility rules.' },
    ],
    processIntro: 'Guided process from screening to Spanish residence card stage.',
    processSteps: [
      'Initial Screening',
      'Document Preparation',
      'NIE and Bank Setup',
      'Consulate Application',
      'Visa Approval and Entry',
      'Residence Card Collection',
    ],
    requirementsSummary:
      'For non-EU remote professionals with provable income, remote work evidence, and health insurance coverage.',
    requirementsChecklist: [
      '18 years of age or older',
      'No criminal record',
      'Valid health insurance covering Spain',
      'Proof of remote work arrangement',
      'Educational or professional qualification evidence',
      'Minimum monthly income of EUR 2,849',
    ],
    qualificationDescription: 'Eligible dependents:',
    qualificationOptions: [
      'Spouse or partner',
      'Dependent children',
      'Dependent parents or grandparents where eligible',
    ],
    investment: {
      title: 'Financial Details for the Spain Digital Nomad Visa',
      description: 'Income and timeline indicators aligned with the route.',
      stats: [
        { value: 'EUR 2,849', label: 'Minimum Monthly\nIncome' },
        { value: '1-4 Months', label: 'Processing\nTimeline' },
        { value: '5 Years', label: 'To Permanent\nResidence' },
      ],
    },
    legalBasis:
      'This route is processed under Spain digital nomad legal framework introduced through startup-era immigration reforms.',
    faqs: [
      { question: 'Who is this visa intended for?', answer: 'Remote workers and freelancers earning mainly from outside Spain.' },
      { question: 'Can family apply together?', answer: 'Yes, eligible dependents can typically be included.' },
      { question: 'How fast can approval happen?', answer: 'Processing varies by office and file quality, often within one to four months.' },
      { question: 'Is a minimum income required?', answer: 'Yes, applicants must show income at or above route thresholds.' },
      { question: 'Can it lead to long-term status?', answer: 'Yes, this route can support permanent residence planning.' },
    ],
  }),
  buildProgram({
    slug: 'malta-nomad-residence-permit',
    name: 'Malta Nomad Residence Permit',
    menuLabel: 'Malta Nomad Permit',
    flag: maltaFlag,
    heroImage: maltaCountryImg,
    contactImage: maltaContactImg,
    heroTitle: 'MALTA DIGITAL NOMAD VISA (NOMAD RESIDENCE PERMIT)',
    heroDescription:
      'A practical EU residence option for remote professionals with strong connectivity, English-speaking environment, and renewable permit structure.',
    stats: [
      { value: 'EUR 3,500', label: 'Minimum Monthly\nIncome' },
      { value: '2+ Months', label: 'Time to\nProcess' },
      { value: '1 Year', label: 'Initial Permit\nValidity' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Malta',
      subtitle: 'A Connected Mediterranean Hub',
      description:
        'Malta is a compact EU island jurisdiction with strong digital infrastructure and straightforward nomad permit setup.',
      secondaryDescription:
        'English language usage and practical residency administration make Malta attractive for global remote workers.',
      highlights: [
        'Schengen mobility access',
        'Efficient processing model',
        'Renewable annual permit',
        'Competitive nomad tax treatment',
      ],
    },
    benefitsIntro:
      'Malta creates a clear legal base for remote workers who want Mediterranean lifestyle with EU access.',
    benefits: [
      { title: 'Schengen Access', description: 'Travel flexibility across Schengen countries for short stays.' },
      { title: 'Fast Processing', description: 'Approvals are often efficient with complete and compliant filings.' },
      { title: 'Renewable Permit', description: 'Initial one-year validity with renewal options.' },
      { title: 'Tax Advantage Potential', description: 'Nomad income can benefit from favorable treatment conditions.' },
      { title: 'Healthcare Access', description: 'Strong healthcare standards and practical private/public access model.' },
      { title: 'Family Inclusion', description: 'Spouse and unmarried dependent children can be included.' },
    ],
    processIntro: 'From screening to permit collection with guided compliance support.',
    processSteps: [
      'Initial Screening',
      'Document Preparation',
      'Application Submission',
      'Approval in Principle',
      'Travel and Biometrics',
      'Permit Issuance',
    ],
    requirementsSummary:
      'For non-EU remote workers and freelancers with provable income, accommodation, and valid health insurance.',
    requirementsChecklist: [
      '18 years of age or older',
      'No criminal record',
      'Proof of remote work arrangement',
      'Monthly income of at least EUR 3,500',
      'Health insurance coverage of at least EUR 30,000',
      'Confirmed accommodation in Malta',
    ],
    qualificationDescription: 'Eligible dependents:',
    qualificationOptions: [
      'Spouse of main applicant',
      'Unmarried biological or adopted dependent children',
    ],
    investment: {
      title: 'Financial Details for the Malta Nomad Residence Permit',
      description: 'Monthly income benchmark and permit validity indicators.',
      stats: [
        { value: 'EUR 3,500', label: 'Minimum Monthly\nIncome' },
        { value: '1 Year', label: 'Initial Permit\nValidity' },
        { value: '4 Years', label: 'Typical Max\nRenewal Span' },
      ],
    },
    legalBasis:
      'The Malta Nomad Residence Permit is administered under Malta residency provisions for remote professionals.',
    faqs: [
      { question: 'Who can use this route?', answer: 'Remote employees, freelancers, and location-independent professionals outside EU/EEA.' },
      { question: 'How long is the first permit valid?', answer: 'The first permit is generally granted for one year.' },
      { question: 'Can it be renewed?', answer: 'Yes, renewals are available under ongoing compliance.' },
      { question: 'Can family be included?', answer: 'Yes, spouse and eligible dependent children may be included.' },
      { question: 'What income level is required?', answer: 'Applicants must show at least EUR 3,500 per month.' },
    ],
  }),
  buildProgram({
    slug: 'portugal-digital-nomad-visa',
    name: 'Portugal Digital Nomad Visa',
    menuLabel: 'Portugal Digital Nomad',
    flag: portugalFlag,
    heroImage: portugalCountryImg,
    contactImage: portugalContactImg,
    heroTitle: 'PORTUGAL DIGITAL NOMAD VISA',
    heroDescription:
      'A government-backed residency route for non-EU remote workers in one of the most popular digital nomad destinations in Europe.',
    stats: [
      { value: 'EUR 3,680', label: 'Minimum Monthly\nIncome' },
      { value: '6-8 Months', label: 'Time to\nProcess' },
      { value: 'EU Resident', label: 'Residency\nStatus' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Portugal',
      subtitle: 'A Top Destination for the Remote Workforce',
      description:
        'Portugal offers a high quality lifestyle, strong nomad ecosystem, and structured legal path for long-term residence.',
      secondaryDescription:
        'With Schengen mobility and citizenship pathway potential, it remains one of the strongest options for remote professionals.',
      highlights: [
        'Clear route to citizenship after qualifying stay',
        'Dual citizenship friendly framework',
        'Strong healthcare and education access',
        'Popular digital nomad ecosystem',
      ],
    },
    benefitsIntro:
      'Portugal combines mobility, public service quality, and practical long-term immigration planning.',
    benefits: [
      { title: 'Schengen Access', description: 'Live in Portugal and travel across Schengen member countries.' },
      { title: 'Healthcare and Education', description: 'Access strong national healthcare and education systems.' },
      { title: 'Structured Process', description: 'Step-by-step legal process with clear filing stages.' },
      { title: 'Citizenship Pathway', description: 'Potential route toward Portuguese citizenship after qualifying residency period.' },
      { title: 'Dual Citizenship Permitted', description: 'Applicants can often retain existing nationality under dual-friendly framework.' },
      { title: 'Strong Passport Outcome', description: 'Portuguese citizenship supports excellent global mobility options.' },
    ],
    processIntro: 'Guidance from initial screening and NIF setup through residence card issuance.',
    processSteps: [
      'Initial Screening',
      'Engagement Agreement',
      'NIF and Bank Account Setup',
      'Application Submission',
      'Travel and AIMA Appointment',
      'Residence Card Issuance',
    ],
    requirementsSummary:
      'For non-EU remote workers employed by or freelancing for clients outside Portugal with required income proof.',
    requirementsChecklist: [
      '18 years of age or older',
      'No criminal record',
      'Portuguese NIF and Portuguese bank account',
      'Proof of long-term accommodation in Portugal',
      'Employment contract or freelance client evidence outside Portugal',
      'Monthly income of at least EUR 3,680',
    ],
    qualificationDescription: 'Eligible dependents:',
    qualificationOptions: [
      'Spouse or partner',
      'Dependent children under 27 years of age',
      'Dependent parents over 55 years of age',
    ],
    investment: {
      title: 'Financial Details for the Portugal Digital Nomad Visa',
      description: 'Monthly income threshold and long-term progression markers.',
      stats: [
        { value: 'EUR 3,680', label: 'Minimum Monthly\nIncome' },
        { value: 'EUR 189', label: 'Residence Permit\nFee' },
        { value: '5 Years', label: 'To\nCitizenship' },
      ],
    },
    legalBasis:
      'The Portugal Digital Nomad route is administered under Portuguese immigration law for remote workers and external-income applicants.',
    faqs: [
      { question: 'Who is eligible for this route?', answer: 'Non-EU remote workers with qualifying foreign income and complete supporting documentation.' },
      { question: 'Is NIF mandatory?', answer: 'Yes, a Portuguese tax number and local bank account are core setup steps.' },
      { question: 'Can family be included?', answer: 'Yes, eligible spouse, children, and parents can be included in many cases.' },
      { question: 'What is the minimum monthly income?', answer: 'Applicants should evidence at least EUR 3,680 per month.' },
      { question: 'Can this lead to citizenship?', answer: 'Yes, after qualifying legal residence period and language/integration requirements.' },
    ],
  }),
];

export const digitalNomadProgramMap = Object.fromEntries(
  digitalNomadPrograms.map((program) => [program.slug, program])
);

export const defaultDigitalNomadSlug =
  digitalNomadPrograms[0]?.slug || 'greece-fip-visa';

export default digitalNomadPrograms;
