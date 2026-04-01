import canadaFlag from '../assets/flags/canada-flag.webp';
import canadaResidencyImage from '../assets/images/canada_residency.png';
import cyprusResidencyImage from '../assets/images/cyprus_residency.png';
import greeceResidencyImage from '../assets/images/greece_residency.png';
import portugalResidencyImage from '../assets/images/portugal_residency.png';
import uaeResidencyImage from '../assets/images/uae_residency.png';
import usaResidencyImage from '../assets/images/usa_residency.png';
import cyprusFlag from '../assets/flags/cyprus-flag.jpg';
import greeceFlag from '../assets/flags/greece-flag.webp';
import hungaryFlag from '../assets/flags/hungary-flag.png';
import latviaFlag from '../assets/flags/latvia-flag.webp';
import maltaFlag from '../assets/flags/malta-flag.webp';
import panamaFlag from '../assets/flags/panama-flag.webp';
import portugalFlag from '../assets/flags/portugal-flag.webp';
import switzerlandFlag from '../assets/flags/switzerland-flag.webp';
import thailandFlag from '../assets/flags/thailand-flag.webp';
import uaeFlag from '../assets/flags/uae-flag.webp';
import unitedKingdomFlag from '../assets/flags/united-kingdom-flag.webp';
import usaFlag from '../assets/flags/usa-flag.jpg';

const makeFaqs = (questions, defaultAnswer) =>
  questions.map((question) => ({
    question,
    answer: defaultAnswer,
  }));

const residencePrograms = [
  {
    slug: 'canada',
    name: 'Canada',
    menuLabel: 'Canada',
    flag: canadaFlag,
    heroImage: canadaResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'CANADA RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      "Build your future in one of the world's most respected and stable nations through the Start-Up Visa Programme.",
    stats: [
      { value: 'CAD 75,000', label: 'Min.\nInvestment' },
      { value: '12-16 Months', label: 'Processing\nTime' },
      { value: 'PR Status', label: 'Pathway\nOutcome' },
      { value: 'G7 Nation', label: 'Country\nStatus' },
    ],
    about: {
      title: 'About Canada',
      subtitle: 'The Land of Opportunity',
      description:
        "Canada is a G7 nation celebrated for quality of life, political stability, and inclusive immigration policies. With world-ranked universities, universal healthcare, and strong liveability rankings, it remains a top destination for entrepreneurs and families.",
      secondaryDescription:
        "Canada's Start-Up Visa Programme is designed for innovative founders who secure support from a designated venture capital fund, angel investor group, or business incubator.",
      highlights: [
        'G7 nation with world-ranked institutions',
        'Universal healthcare and strong social infrastructure',
        'Pathway to permanent residency and citizenship',
        'Welcoming multicultural society',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Permanent Residency Pathway',
        description:
          'The Start-Up Visa provides a direct route to Canadian permanent residency for qualifying entrepreneurs and families.',
      },
      {
        title: 'World-Class Education',
        description:
          'Canada offers globally ranked universities and public schools with exceptional educational opportunities.',
      },
      {
        title: 'Universal Healthcare',
        description:
          "Permanent residents can access Canada's publicly funded healthcare system.",
      },
      {
        title: 'Pathway to Citizenship',
        description:
          'After three years of physical presence as a permanent resident, applicants may apply for citizenship.',
      },
      {
        title: 'Family Inclusion',
        description:
          'A spouse and dependent children are included in the permanent residency application.',
      },
      {
        title: 'Global Mobility',
        description:
          'Canadian citizenship later enables one of the strongest passports globally for international travel.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Canada's Start-Up Visa residency application journey.",
    processSteps: [
      'Initial Consultation',
      'Business Plan Preparation',
      'Designated Organisation Commitment',
      'Application Submission',
      'PR Approval',
      'Landing in Canada',
    ],
    requirementsSummary:
      'Applicants must meet English or French language requirements, present an innovative business concept, and secure a commitment from a designated Canadian organisation.',
    requirementsChecklist: [
      'Language proficiency (CLB 5 minimum)',
      'Designated organisation commitment letter',
      'Proof of sufficient settlement funds',
    ],
    qualificationDescription:
      'To qualify for the Canada Start-Up Visa, applicants must secure support from one of three designated organisation types.',
    qualificationOptions: [
      'Designated venture capital fund (CAD 200,000+)',
      'Designated angel investor group (CAD 75,000+)',
      'Designated business incubator (no investment required)',
    ],
    investment: {
      title: 'Investment Options for Canada Residency',
      description:
        'Canada requires a commitment from a designated organisation rather than a direct government investment.',
      stats: [
        { value: '75k', label: 'Angel Investor\nMin.' },
        { value: '200k', label: 'VC Fund\nMin.' },
        { value: '3 Years', label: 'PR to\nCitizenship' },
      ],
    },
    legalBasis:
      "Canada's Start-Up Visa Programme is governed by the Immigration and Refugee Protection Act and administered by IRCC.",
    faqs: makeFaqs(
      [
        'What is the Canada Start-Up Visa Programme?',
        'How long does the Canadian PR process take?',
        'Can my family be included in the application?',
        'What language requirements apply?',
        'Can I apply for citizenship after permanent residency?',
        'What types of businesses qualify for the Start-Up Visa?',
      ],
      'The Canada Start-Up Visa supports innovative businesses with designated organisation backing; eligibility, timeline, and documentation are confirmed during our advisory assessment.'
    ),
  },
  {
    slug: 'cyprus',
    name: 'Cyprus',
    menuLabel: 'Cyprus',
    flag: cyprusFlag,
    heroImage: cyprusResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'CYPRUS RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      "An EU permanent residency permit from EUR 300,000, with one of the fastest processing timelines in Europe.",
    stats: [
      { value: 'EUR 300,000', label: 'Min.\nInvestment' },
      { value: '2 Months', label: 'Processing\nTime' },
      { value: 'EU Residency', label: 'Permit\nType' },
      { value: 'Lifetime PR', label: 'Permit\nDuration' },
    ],
    about: {
      title: 'About Cyprus',
      subtitle: "Europe's Eastern Mediterranean Gem",
      description:
        'Cyprus is an EU member state with strong legal certainty, strategic location, and a business-friendly environment. It offers a practical and efficient route for investors seeking a European base.',
      secondaryDescription:
        'Permanent residency is granted for life with no minimum stay requirement, with a visit required once every two years to maintain status.',
      highlights: [
        'EU member state with 12.5% corporate tax',
        'Permanent residency granted for life',
        'No minimum stay requirement',
        'English widely spoken, British legal system',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Fast EU Processing', description: 'Applications are generally processed in around two months.' },
      { title: 'Lifetime Permit', description: 'Permanent residency is granted for life, subject to maintaining investment conditions.' },
      { title: 'EU Access Benefits', description: 'Residency in an EU member state supports long-term legal and economic stability.' },
      { title: 'Favourable Tax Regime', description: 'Cyprus offers competitive tax planning advantages for international investors.' },
      { title: 'No Residency Obligation', description: 'No ongoing minimum stay requirement, with periodic visit obligations only.' },
      { title: 'Family Coverage', description: 'Spouse, children, and qualifying parents can be included in one file.' },
    ],
    processIntro: "This step-by-step process illustrates Cyprus's residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Property Selection',
      'Investment Completion',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, with clean record and sufficient financial means.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Proof of investment funds',
      'Annual income of EUR 30,000+ from abroad',
    ],
    qualificationDescription:
      'Investors may qualify through approved real estate investment routes in Cyprus.',
    qualificationOptions: [
      'Purchase of new residential property EUR 300,000+',
      'Property purchased from developer (VAT-exclusive)',
      'Investment maintained for duration of residency',
    ],
    investment: {
      title: 'Real Estate Investment Options for Cyprus Residency',
      description:
        'Cyprus residency is secured through approved new developments with strong long-term permit fundamentals.',
      stats: [
        { value: '300k', label: 'Min.\nInvestment' },
        { value: '5%+', label: 'Rental\nYield' },
        { value: 'Lifetime', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      "Cyprus's programme is governed by Regulation 6(2) of the Aliens and Immigration Law and administered by the Civil Registry and Migration Department.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for Cyprus residency?',
        'How long does the Cyprus PR process take?',
        'Is there a minimum stay requirement in Cyprus?',
        'Can family members be included?',
        'What are the tax benefits of Cyprus residency?',
        'Can Cyprus residency lead to citizenship?',
      ],
      'Cyprus offers one of the fastest EU permanent residency pathways; exact eligibility, family inclusion, and long-term planning are confirmed during case assessment.'
    ),
  },
  {
    slug: 'greece',
    name: 'Greece',
    menuLabel: 'Greece',
    flag: greeceFlag,
    heroImage: greeceResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'GREECE GOLDEN VISA PROGRAM',
    heroDescription:
      "Europe's most popular Golden Visa, from EUR 250,000, granting Schengen Area residency and visa-free travel.",
    stats: [
      { value: 'EUR 250,000', label: 'Min.\nInvestment' },
      { value: '2-3 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: '5 Years', label: 'Renewable\nPermit' },
    ],
    about: {
      title: 'About Greece',
      subtitle: 'The Cradle of Civilisation',
      description:
        'Greece is an EU and Schengen member with strong cultural appeal, strategic mobility, and an active real estate market attractive to international investors.',
      secondaryDescription:
        'The Golden Visa provides Schengen mobility and a long-term path toward EU citizenship for qualifying residents.',
      highlights: [
        'Full Schengen Area access for residents',
        'No minimum stay requirement',
        'Path to EU citizenship after 7 years',
        'Real estate market with strong yields',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Schengen Area Access', description: 'Travel flexibility across Schengen countries with a Greek residency permit.' },
      { title: 'Low EU Entry Point', description: 'Competitive investment threshold for a Schengen residency programme.' },
      { title: 'No Minimum Stay', description: 'Maintain permit status without mandatory annual stay requirements.' },
      { title: '5-Year Renewable Permit', description: 'Permit renews indefinitely while investment conditions are met.' },
      { title: 'Family Inclusion', description: 'Spouse, children, and qualifying parents can be included.' },
      { title: 'Path to EU Citizenship', description: 'Eligible residents may apply for citizenship after statutory residence period.' },
    ],
    processIntro: "This step-by-step process illustrates Greece's Golden Visa application journey.",
    processSteps: [
      'Advisory Consultation',
      'Property Selection',
      'Investment Completion',
      'Application Submission',
      'Biometrics Appointment',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18+, with clean criminal record and qualifying investment.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance in Greece',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      "Investors may qualify through Greece's approved Golden Visa investment routes.",
    qualificationOptions: [
      'Real estate investment of EUR 250,000+ (selected zones)',
      'Real estate investment of EUR 800,000 (premium zones)',
      'Government bonds or business investment alternatives',
    ],
    investment: {
      title: 'Real Estate Investment Options for Greece Golden Visa',
      description: 'Greece offers competitive values and strong rental demand in key locations.',
      stats: [
        { value: '250k', label: 'Min.\nInvestment' },
        { value: '4-7%', label: 'Rental\nYield' },
        { value: '5 Years', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      "Greece's Golden Visa Programme is governed by Law 4251/2014 and subsequent amendments.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for the Greece Golden Visa?',
        'Does the Greece Golden Visa allow Schengen travel?',
        'Is there a minimum stay requirement in Greece?',
        'Which family members can be included?',
        'Can Greek residency lead to EU citizenship?',
        'What are the new higher investment thresholds?',
      ],
      'Greece Golden Visa criteria depend on location, investment route, and family profile; we confirm current thresholds and filing strategy case-by-case.'
    ),
  },
  {
    slug: 'hungary',
    name: 'Hungary',
    menuLabel: 'Hungary',
    flag: hungaryFlag,
    heroImage: greeceResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'HUNGARY GUEST INVESTOR VISA PROGRAM',
    heroDescription:
      'A new EU residency pathway from EUR 250,000, offering 10-year renewable residence in the heart of Europe.',
    stats: [
      { value: 'EUR 250,000', label: 'Min.\nInvestment' },
      { value: '3-4 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: '10 Years', label: 'Renewable\nPermit' },
    ],
    about: {
      title: 'About Hungary',
      subtitle: "Central Europe's Rising Investment Destination",
      description:
        'Hungary is an EU and Schengen member offering a strategic location, competitive cost base, and an increasingly attractive framework for international investors.',
      secondaryDescription:
        'The Guest Investor Visa launched in 2024 and offers one of Europe\'s longest initial permit durations.',
      highlights: [
        'EU and Schengen member state',
        '10-year renewable residency permit',
        'Low cost of living vs Western Europe',
        'Central European business hub',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: '10-Year Permit', description: 'One of the longest initial residency terms in Europe.' },
      { title: 'Schengen Access', description: 'Travel flexibility across Schengen member states.' },
      { title: 'Low Cost of Living', description: 'Attractive lifestyle and operating costs compared with many EU capitals.' },
      { title: 'Fund-Based Investment', description: 'Approved fund route offers simplified management for investors.' },
      { title: 'Family Inclusion', description: 'Spouse and dependent children can be included in one application.' },
      { title: 'Long-Term Pathway', description: 'May lead to permanent residency and eventual citizenship subject to legal criteria.' },
    ],
    processIntro: "This step-by-step process illustrates Hungary's Guest Investor Visa journey.",
    processSteps: [
      'Advisory Consultation',
      'Fund Selection',
      'Investment Completion',
      'Visa Application',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18+, with clean criminal record and qualifying investment.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance coverage',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      "Investors qualify through Hungary's approved Guest Investor Visa routes.",
    qualificationOptions: [
      'Real estate fund contribution of EUR 250,000+',
      'Residential property purchase of EUR 500,000+',
      'Donation to higher education institution EUR 1,000,000+',
    ],
    investment: {
      title: 'Investment Options for Hungary Guest Investor Visa',
      description: 'Fund-based and alternative routes are available depending on strategy and risk profile.',
      stats: [
        { value: '250k', label: 'Min. Fund\nInvestment' },
        { value: '10 Years', label: 'Initial\nPermit' },
        { value: '500k', label: 'Direct Property\nMin.' },
      ],
    },
    legalBasis:
      "Hungary's Guest Investor Visa is governed by Act XC of 2023 on the Entry and Residence of Third-Country Nationals.",
    faqs: makeFaqs(
      [
        "When was Hungary's Guest Investor Visa launched?",
        'What is the minimum investment for Hungary residency?',
        'How long is the Hungarian residency permit valid?',
        'Does the Hungary visa give Schengen access?',
        'Can family members be included?',
        'Can Hungary residency lead to EU citizenship?',
      ],
      'Hungary offers multiple qualifying routes with different thresholds and outcomes; final structure depends on your selected pathway and profile.'
    ),
  },
  {
    slug: 'latvia',
    name: 'Latvia',
    menuLabel: 'Latvia',
    flag: latviaFlag,
    heroImage: greeceResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'LATVIA RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'An affordable EU and Schengen residency from EUR 50,000, one of the lowest entry points in Europe.',
    stats: [
      { value: 'EUR 50,000', label: 'Min.\nInvestment' },
      { value: '1-3 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: 'EU Member', label: 'Country\nStatus' },
    ],
    about: {
      title: 'About Latvia',
      subtitle: 'The Baltic Gateway to Europe',
      description:
        'Latvia is an EU and Schengen member with a growing digital economy and one of Europe\'s most accessible residency entry points for investors.',
      secondaryDescription:
        'Its programme provides affordable access to Schengen mobility and a renewable long-term residency option.',
      highlights: [
        'EU and Schengen member since 2004',
        "One of Europe's lowest RBI entry points",
        'Growing digital and tech economy',
        'Freedom of movement across Schengen Area',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Low Entry Threshold', description: 'Competitive investment floor compared with other EU residency pathways.' },
      { title: 'Schengen Access', description: 'Freedom of movement across Schengen countries for permit holders.' },
      { title: 'Fast Processing', description: 'Applications are commonly processed in one to three months.' },
      { title: 'EU Member Stability', description: 'Residency in a full EU state supports legal certainty and market access.' },
      { title: 'Affordable Living', description: 'Lower cost of living than many Western European jurisdictions.' },
      { title: 'Renewable Permit', description: 'Permit can be renewed for long-term residency continuity.' },
    ],
    processIntro: "This step-by-step process illustrates Latvia's residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Investment Selection',
      'Investment Completion',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18+, with clean record and qualifying investment.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance coverage',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      'Investors may qualify through approved Latvian investment categories.',
    qualificationOptions: [
      'Subordinated capital contribution EUR 50,000+',
      'Real estate investment in eligible regions',
      'Company capital investment with job creation',
    ],
    investment: {
      title: 'Investment Options for Latvia Residency',
      description: 'Latvia offers multiple affordable routes to EU/Schengen residency.',
      stats: [
        { value: '50k', label: 'Min.\nInvestment' },
        { value: '1-3', label: 'Months\nProcessing' },
        { value: 'EU', label: 'Schengen\nAccess' },
      ],
    },
    legalBasis:
      "Latvia's residency programme is governed by the Immigration Law of Latvia and administered by the Office of Citizenship and Migration Affairs.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for Latvia residency?',
        'How quickly is Latvia residency processed?',
        'Does Latvia residency grant Schengen Area access?',
        'What investment routes are available?',
        'Is there a minimum stay requirement in Latvia?',
        'Can family members be included in the application?',
      ],
      'Latvia provides a cost-efficient route to EU and Schengen residency through multiple approved investment structures, subject to eligibility checks.'
    ),
  },
  {
    slug: 'malta',
    name: 'Malta',
    menuLabel: 'Malta',
    flag: maltaFlag,
    heroImage: portugalResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'MALTA PERMANENT RESIDENCY PROGRAM',
    heroDescription:
      'An EU permanent residency permit from EUR 150,000, offering lifetime status and Schengen Area access.',
    stats: [
      { value: 'EUR 150,000', label: 'Min.\nInvestment' },
      { value: '4-6 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: 'Lifetime PR', label: 'Permit\nDuration' },
    ],
    about: {
      title: 'About Malta',
      subtitle: "Europe's Mediterranean Island Nation",
      description:
        'Malta is an EU and Schengen state with English-speaking business culture, political stability, and strong quality-of-life fundamentals.',
      secondaryDescription:
        'The Malta Permanent Residence Programme offers lifetime status when qualifying requirements are maintained.',
      highlights: [
        'EU and Schengen member state',
        'English-speaking business environment',
        'Lifetime PR with no renewal required',
        'Strategic Mediterranean location',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Lifetime PR Status', description: 'Permanent residency is issued for life under programme conditions.' },
      { title: 'Schengen Area Access', description: 'Freedom of movement across Schengen countries for permit holders.' },
      { title: 'English-Speaking EU Nation', description: 'Simple integration for international business and families.' },
      { title: 'Tax Planning Benefits', description: 'Malta offers a recognised framework for internationally mobile residents.' },
      { title: 'Broad Family Coverage', description: 'Spouse, children, parents, and grandparents may be included.' },
      { title: 'Professional Processing', description: 'Applications are handled through a structured due diligence framework.' },
    ],
    processIntro: "This step-by-step process illustrates Malta's permanent residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Eligibility Assessment',
      'Investment Completion',
      'Application Submission',
      'Due Diligence Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18+ with clean record and complete contribution, property, and insurance obligations.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Health insurance covering EUR 30,000',
      'Minimum annual income of EUR 30,000 from abroad',
    ],
    qualificationDescription:
      'Malta requires a structured combination of contribution, property commitment, and donation.',
    qualificationOptions: [
      'Government contribution of EUR 58,000 (renting) or EUR 28,000 (buying)',
      'Property lease EUR 10,000/yr or purchase EUR 300,000+',
      'Donation of EUR 2,000 to a Malta-registered NGO',
    ],
    investment: {
      title: 'Investment Structure for Malta Permanent Residency',
      description:
        'The programme combines government and property elements with a total outlay near EUR 150,000 depending on route.',
      stats: [
        { value: '150k', label: 'Min. Total\nOutlay' },
        { value: '4-6', label: 'Months\nProcessing' },
        { value: 'Lifetime', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      'The Malta Permanent Residence Programme is governed by LN 121 of 2021 and administered by the Residency Malta Agency.',
    faqs: makeFaqs(
      [
        'What is the minimum investment for Malta permanent residency?',
        'How long is the Malta PR permit valid?',
        'Does Malta PR include Schengen Area access?',
        'Which family members can be included?',
        'What is the difference between renting and buying for Malta MPRP?',
        'Can Malta permanent residency lead to citizenship?',
      ],
      'Malta MPRP has a structured investment framework with renting and buying routes; we advise on the most suitable path based on your profile.'
    ),
  },
  {
    slug: 'panama',
    name: 'Panama',
    menuLabel: 'Panama',
    flag: panamaFlag,
    heroImage: portugalResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'PANAMA RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'A highly accessible residency pathway from USD 300,000, with no minimum stay and a Pensionado programme.',
    stats: [
      { value: 'USD 300,000', label: 'Min.\nInvestment' },
      { value: '3-6 Months', label: 'Processing\nTime' },
      { value: 'Territorial Tax', label: 'Tax\nRegime' },
      { value: 'USD Economy', label: 'Currency' },
    ],
    about: {
      title: 'About Panama',
      subtitle: 'The Crossroads of the Americas',
      description:
        'Panama combines a US dollar economy, territorial taxation, and strategic positioning in the Americas, making it a practical residency destination for investors and retirees.',
      secondaryDescription:
        'The Pensionado framework is one of the most recognised retiree-focused residency offerings globally.',
      highlights: [
        'US dollar-based economy',
        'Territorial tax with no tax on foreign income',
        'Recognised Pensionado retiree programme',
        'No minimum stay requirement',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Territorial Tax System', description: 'Foreign-sourced income is outside local taxation in Panama.' },
      { title: 'USD Economy', description: 'Currency stability for international investors and retirees.' },
      { title: 'No Minimum Stay', description: 'Programmes support flexible physical presence requirements.' },
      { title: 'Pensionado Benefits', description: 'Attractive retiree discounts across services and lifestyle spending.' },
      { title: 'Real Estate Opportunity', description: 'Diverse property market across Panama City and resort locations.' },
      { title: 'Path to Citizenship', description: 'Eligible residents may apply for citizenship after statutory duration.' },
    ],
    processIntro: "This step-by-step process illustrates Panama's residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Investment Selection',
      'Property Purchase',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be aged 18+, hold clean criminal record, and complete qualifying investment route requirements.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Proof of qualifying investment funds',
      'Valid passport from country of citizenship',
    ],
    qualificationDescription:
      'Investors may qualify through multiple approved Panamanian residency pathways.',
    qualificationOptions: [
      'Qualifying real estate investment USD 300,000+',
      'Reforestation investment USD 100,000+',
      'Qualified Investor Visa USD 160,000 in securities',
    ],
    investment: {
      title: 'Real Estate Investment Options for Panama Residency',
      description: 'Panama offers lifestyle and yield-oriented options in key residential and coastal zones.',
      stats: [
        { value: '300k', label: 'Min. RE\nInvestment' },
        { value: '4-6%', label: 'Rental\nYield' },
        { value: '5 Years', label: 'Path to\nCitizenship' },
      ],
    },
    legalBasis:
      "Panama's programmes are governed by Executive Decree 320 of 2008 and subsequent amendments.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for Panama residency?',
        'What is the Pensionado programme?',
        'Is there a minimum stay requirement in Panama?',
        'What tax advantages does Panama offer?',
        'How long does the Panama RBI process take?',
        'Can Panama residency lead to citizenship?',
      ],
      'Panama provides flexible residency routes with tax and lifestyle advantages; programme fit depends on your objectives and eligibility profile.'
    ),
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    menuLabel: 'Portugal',
    flag: portugalFlag,
    heroImage: portugalResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'PORTUGAL GOLDEN VISA PROGRAM',
    heroDescription:
      'Offering permanent residency and a pathway to EU citizenship from EUR 250,000 with high flexibility.',
    stats: [
      { value: 'EUR 250,000', label: 'Min.\nInvestment' },
      { value: '6-8 Months', label: 'Processing\nTime' },
      { value: '7 Days/Year', label: 'Min.\nStay' },
      { value: '5 Years', label: 'Path to\nCitizenship' },
    ],
    about: {
      title: 'About Portugal',
      subtitle: "Europe's Atlantic Gateway",
      description:
        'Portugal combines quality of life, Schengen access, and one of the most respected residency pathways in Europe for globally mobile families and investors.',
      secondaryDescription:
        'Its Golden Visa remains attractive for long-term planning due to low stay requirements and a clear citizenship pathway.',
      highlights: [
        'EU member with path to citizenship in 5 years',
        'Only 7 days minimum stay per year',
        'NHR tax framework (subject to eligibility)',
        'Schengen Area access',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'EU Citizenship Pathway', description: 'Eligible residents may apply for Portuguese and EU citizenship after five years.' },
      { title: 'Minimal Stay Requirement', description: 'Only seven days per year is typically required to maintain permit status.' },
      { title: 'Schengen Access', description: 'Travel flexibility across Schengen countries for holders and qualifying family.' },
      { title: 'Tax Planning Potential', description: 'Portugal has historically offered attractive resident tax frameworks.' },
      { title: 'Family Inclusion', description: 'Spouse, children, and qualifying dependents can be included.' },
      { title: 'Stable Long-Term Route', description: 'A structured legal path to long-term European status.' },
    ],
    processIntro: "This step-by-step process illustrates Portugal's Golden Visa application journey.",
    processSteps: [
      'Advisory Consultation',
      'Investment Selection',
      'Investment Completion',
      'AIMA Application',
      'Biometrics Appointment',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18+, with clean record and qualifying investment route.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid NIF (Portuguese tax number)',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      "Investors may qualify through Portugal's approved Golden Visa categories.",
    qualificationOptions: [
      'Investment fund contribution EUR 500,000+',
      'Job creation (10+ full-time jobs)',
      'Capital transfer EUR 1,500,000+',
    ],
    investment: {
      title: 'Investment Options for Portugal Golden Visa',
      description:
        'Current eligible routes focus on funds, capital transfer, and job-creation structures.',
      stats: [
        { value: '500k', label: 'Min. Fund\nInvestment' },
        { value: '7 Days', label: 'Min. Annual\nStay' },
        { value: '5 Years', label: 'Path to\nCitizenship' },
      ],
    },
    legalBasis:
      "Portugal's Golden Visa is governed by Law 23/2007 and administered by AIMA.",
    faqs: makeFaqs(
      [
        "What investment routes are available for Portugal's Golden Visa?",
        'How long do I need to stay in Portugal each year?',
        'When can I apply for Portuguese citizenship?',
        'Can my family be included in the application?',
        "What is Portugal's NHR tax regime?",
        "Has Portugal's Golden Visa programme changed recently?",
      ],
      'Portugal route eligibility depends on latest legal framework and applicant profile; we advise on the current compliant path for each case.'
    ),
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    menuLabel: 'Switzerland',
    flag: switzerlandFlag,
    heroImage: portugalResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'SWITZERLAND RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'A prestigious Swiss residency permit through lump-sum taxation, available from CHF 250,000 annually.',
    stats: [
      { value: 'CHF 250,000', label: 'Min. Annual\nTax' },
      { value: '3-6 Months', label: 'Processing\nTime' },
      { value: 'Lump-Sum Tax', label: 'Tax\nRegime' },
      { value: 'B Permit', label: 'Residency\nType' },
    ],
    about: {
      title: 'About Switzerland',
      subtitle: 'Prestige, Privacy, and Stability',
      description:
        'Switzerland is known for neutrality, legal certainty, privacy, and exceptional quality of life, making it a premium long-term residency destination.',
      secondaryDescription:
        'Its lump-sum taxation model is structured around annual tax commitments rather than one-time investment.',
      highlights: [
        'Highly stable political and financial system',
        'Lump-sum taxation for qualifying foreign residents',
        'Schengen mobility via bilateral agreements',
        'Top-ranked healthcare and education',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Lump-Sum Taxation', description: 'Fixed annual tax arrangement based on living expense framework.' },
      { title: 'Privacy and Asset Protection', description: 'Strong legal and financial privacy tradition.' },
      { title: 'European Mobility', description: 'Extensive travel access through Swiss bilateral structures.' },
      { title: 'Political Neutrality', description: 'Long-term institutional and governance stability.' },
      { title: 'Elite Education', description: 'Access to globally respected academic institutions.' },
      { title: 'Healthcare Excellence', description: 'One of the strongest healthcare systems worldwide.' },
    ],
    processIntro: "This step-by-step process illustrates Switzerland's lump-sum residency journey.",
    processSteps: [
      'Advisory Consultation',
      'Canton Selection',
      'Tax Negotiation',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-Swiss non-EU nationals, non-gainfully employed in Switzerland, and agree to cantonal lump-sum tax terms.',
    requirementsChecklist: [
      'No employment in Switzerland permitted',
      'Minimum annual lump-sum tax with canton',
      'Proof of financial means to support residency',
    ],
    qualificationDescription:
      'Qualification depends on negotiated annual tax agreement with the selected canton.',
    qualificationOptions: [
      'Annual lump-sum tax of CHF 250,000+ (federal minimum)',
      'Cantonal thresholds vary and may be higher',
      'No Swiss employment or business income permitted',
    ],
    investment: {
      title: 'Swiss Lump-Sum Tax Residency Structure',
      description: 'Swiss residency is based on recurring tax commitment rather than one-time capital placement.',
      stats: [
        { value: '250k', label: 'Min. Annual\nTax (CHF)' },
        { value: '3-6', label: 'Months\nProcessing' },
        { value: 'B Permit', label: 'Residency\nType' },
      ],
    },
    legalBasis:
      "Switzerland's lump-sum taxation residency is governed by federal tax harmonisation rules and cantonal tax laws.",
    faqs: makeFaqs(
      [
        "What is Switzerland's lump-sum taxation regime?",
        'What is the minimum annual tax for Swiss residency?',
        'Can I work in Switzerland on a lump-sum residency?',
        'Which Swiss cantons offer lump-sum taxation?',
        'Does Swiss residency include Schengen access?',
        'Can family members be included in the application?',
      ],
      'Swiss lump-sum residency is a premium route with canton-specific terms; eligibility and annual tax obligations are assessed individually.'
    ),
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    menuLabel: 'Thailand',
    flag: thailandFlag,
    heroImage: uaeResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'THAILAND LONG-TERM RESIDENT VISA PROGRAM',
    heroDescription:
      "A 10-year renewable residency permit in Southeast Asia's most vibrant destination, from USD 250,000.",
    stats: [
      { value: 'USD 250,000', label: 'Min.\nInvestment' },
      { value: '1-3 Months', label: 'Processing\nTime' },
      { value: '10 Years', label: 'Renewable\nPermit' },
      { value: 'Tax Incentives', label: 'Key\nBenefit' },
    ],
    about: {
      title: 'About Thailand',
      subtitle: 'The Land of Smiles',
      description:
        'Thailand is a major Southeast Asian destination known for lifestyle quality, healthcare standards, and cost efficiency for globally mobile residents.',
      secondaryDescription:
        'The LTR Visa was launched to attract investors, remote workers, and retirees through long-term stability and incentives.',
      highlights: [
        '10-year renewable residency permit',
        'Tax exemption on qualifying foreign-sourced income',
        'Strong medical and wellness infrastructure',
        'Low cost of living with high lifestyle quality',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: '10-Year Permit', description: 'Long-duration permit with renewal framework for qualified applicants.' },
      { title: 'Tax Incentive Structure', description: 'Potential exemption treatment on eligible foreign-sourced income.' },
      { title: 'Healthcare Quality', description: 'Internationally recognised private healthcare network.' },
      { title: 'Cost Efficiency', description: 'High lifestyle value relative to many global cities.' },
      { title: 'Family Inclusion', description: 'Spouse and qualifying dependents can be included.' },
      { title: 'Fast Processing', description: 'LTR applications are generally processed quickly through BOI channels.' },
    ],
    processIntro: "This step-by-step process illustrates Thailand's LTR Visa application journey.",
    processSteps: [
      'Advisory Consultation',
      'Eligibility Review',
      'Investment Completion',
      'BOI Application',
      'Government Review',
      'Visa Issuance',
    ],
    requirementsSummary:
      'Applicants must meet income, asset, or investment thresholds depending on selected LTR category.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance (USD 40,000 coverage min.)',
      'Proof of qualifying income or investment',
    ],
    qualificationDescription:
      'Thailand offers four LTR categories with separate eligibility thresholds.',
    qualificationOptions: [
      'Wealthy Global Citizen route',
      'Wealthy Pensioner route',
      'Remote Worker and Specialist routes',
    ],
    investment: {
      title: 'Investment Options for Thailand LTR Visa',
      description:
        'Qualifying investment may include government bonds, BOI-promoted companies, or eligible real estate.',
      stats: [
        { value: '250k', label: 'Min.\nInvestment' },
        { value: '10 Years', label: 'Permit\nDuration' },
        { value: '80k', label: 'Min. Annual\nIncome' },
      ],
    },
    legalBasis:
      "Thailand's LTR Visa is governed by the Royal Decree on Long-Term Resident Visa (2022) and administered by the BOI.",
    faqs: makeFaqs(
      [
        "What is Thailand's Long-Term Resident Visa?",
        'What is the minimum investment for the LTR Visa?',
        'What are the tax benefits of the Thailand LTR Visa?',
        'How long is the Thailand LTR Visa valid?',
        'Can family members be included?',
        'What are the different LTR Visa categories?',
      ],
      'Thailand LTR eligibility depends on category-specific income, asset, and investment criteria; we structure the right route based on your profile.'
    ),
  },
  {
    slug: 'uae',
    name: 'UAE',
    menuLabel: 'UAE Golden Visa',
    flag: uaeFlag,
    heroImage: uaeResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'UAE GOLDEN VISA PROGRAM',
    heroDescription:
      "A 10-year renewable residency permit in the world's most dynamic business and lifestyle hub, from AED 2,000,000.",
    stats: [
      { value: 'AED 2,000,000', label: 'Min. Property\nValue' },
      { value: '2-4 Weeks', label: 'Processing\nTime' },
      { value: '10 Years', label: 'Renewable\nPermit' },
      { value: '0% Income Tax', label: 'Tax\nRegime' },
    ],
    about: {
      title: 'About the UAE',
      subtitle: "The World's Premier Business Hub",
      description:
        'The UAE is a globally connected, tax-efficient jurisdiction with world-class infrastructure and strong appeal for investors and entrepreneurs.',
      secondaryDescription:
        'As a Dubai-based advisory, RK Global offers direct local expertise across Golden Visa categories and emirates.',
      highlights: [
        'Zero personal income tax',
        '10-year renewable residency permit',
        'World-class infrastructure and connectivity',
        'Strategic hub between Europe, Asia, and Africa',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: '10-Year Permit', description: 'Long-term renewable residency with high planning stability.' },
      { title: 'Zero Income Tax', description: 'No personal income tax, capital gains tax, or wealth tax.' },
      { title: 'Global Connectivity', description: 'Top-tier international aviation connectivity via UAE hubs.' },
      { title: 'Business Access', description: 'Free zones and business-friendly regulation for international operators.' },
      { title: 'Family Coverage', description: 'Spouse, children, and domestic staff sponsorship pathways available.' },
      { title: 'Local Advisory Strength', description: 'On-ground UAE processing expertise from RK Global team.' },
    ],
    processIntro: "This step-by-step process illustrates the UAE Golden Visa journey.",
    processSteps: [
      'Initial Consultation',
      'Eligibility Assessment',
      'Document Preparation',
      'Application Submission',
      'Emirates ID Issuance',
      'Visa Stamping',
    ],
    requirementsSummary:
      'Applicants must qualify through approved property, business, or professional categories under Golden Visa regulations.',
    requirementsChecklist: [
      'Property valued at AED 2,000,000+ (or mortgage equivalent)',
      'Clean criminal record and medical fitness',
      'Valid passport and proof of qualifying status',
    ],
    qualificationDescription:
      'The UAE Golden Visa is available through multiple investor and professional pathways.',
    qualificationOptions: [
      'Real estate ownership AED 2,000,000+',
      'Business investor or entrepreneur route',
      'Outstanding talent or specialist professional',
    ],
    investment: {
      title: 'Real Estate and Investment Options for UAE Golden Visa',
      description:
        'Dubai and Abu Dhabi offer broad qualifying property options with strong rental fundamentals.',
      stats: [
        { value: '2M AED', label: 'Min. Property\nValue' },
        { value: '5-8%', label: 'Rental\nYield' },
        { value: '10 Years', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      'The UAE Golden Visa is governed by Federal Decree-Law No. 6 of 2018 and administered by ICP.',
    faqs: makeFaqs(
      [
        'What is the minimum investment for the UAE Golden Visa?',
        'How long does UAE Golden Visa processing take?',
        'Can family members be included in the UAE Golden Visa?',
        'What are the tax advantages of the UAE Golden Visa?',
        'What property types qualify for the UAE Golden Visa?',
        'Can I hold a business and a UAE Golden Visa simultaneously?',
      ],
      'UAE Golden Visa eligibility depends on category and supporting documentation; our team confirms the fastest compliant route for your case.'
    ),
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    menuLabel: 'United Kingdom',
    flag: unitedKingdomFlag,
    heroImage: usaResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'UNITED KINGDOM INNOVATOR FOUNDER VISA PROGRAM',
    heroDescription:
      "Build an innovative UK business and secure residency in one of the world's most influential economies.",
    stats: [
      { value: 'No Min.', label: 'Investment\nThreshold' },
      { value: '3-6 Months', label: 'Processing\nTime' },
      { value: '3 Years', label: 'Path to\nILR' },
      { value: 'Top 5 Economy', label: 'Country\nStatus' },
    ],
    about: {
      title: 'About the United Kingdom',
      subtitle: 'Global Finance, Law, and Culture',
      description:
        'The UK remains a major global economy and centre for finance, education, and legal infrastructure, offering strong business and family outcomes for founders.',
      secondaryDescription:
        'The Innovator Founder Visa supports entrepreneurs with endorsed innovative business models and a path to long-term settlement.',
      highlights: [
        'Top 5 global economy',
        'Path to ILR and citizenship',
        'World-ranked universities and schools',
        'Global financial and legal hub',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'No Minimum Investment', description: 'No fixed capital threshold; business quality is key.' },
      { title: '3-Year Path to ILR', description: 'Eligible founders may apply for ILR after three years.' },
      { title: 'Education Access', description: 'Strong academic ecosystem for residents and dependents.' },
      { title: 'Global Business Hub', description: 'Access to UK and international markets from a mature ecosystem.' },
      { title: 'Family Inclusion', description: 'Spouse and dependent children can be included.' },
      { title: 'Path to Citizenship', description: 'Potential route to British citizenship subject to legal conditions.' },
    ],
    processIntro: "This step-by-step process illustrates the UK's Innovator Founder Visa journey.",
    processSteps: [
      'Advisory Consultation',
      'Business Plan Development',
      'Endorsing Body Application',
      'Home Office Application',
      'Biometrics',
      'Visa Issuance',
    ],
    requirementsSummary:
      'Applicants need an endorsed innovative, viable, and scalable business concept with supporting financial and language requirements.',
    requirementsChecklist: [
      'Endorsing body approval required',
      'GBP 945 maintenance funds minimum',
      'English language proficiency (B2 level)',
    ],
    qualificationDescription:
      'To qualify, applicants must satisfy endorsement, innovation, and language criteria.',
    qualificationOptions: [
      'Approval from a Home Office-endorsed body',
      'Innovative, viable, and scalable business concept',
      'English language at B2 level or above',
    ],
    investment: {
      title: 'Investment and Business Options for UK Residency',
      description:
        'The visa focuses on business quality and endorsement rather than a fixed capital investment minimum.',
      stats: [
        { value: 'No Min.', label: 'Investment\nRequired' },
        { value: '3 Years', label: 'Path to\nILR' },
        { value: '186+', label: 'Visa-Free\nCountries' },
      ],
    },
    legalBasis:
      'The UK Innovator Founder Visa is governed by Immigration Rules Part 5 and administered by the UK Home Office.',
    faqs: makeFaqs(
      [
        'What is the UK Innovator Founder Visa?',
        'Is there a minimum investment requirement for the UK visa?',
        'What is Indefinite Leave to Remain?',
        'How do I get an endorsing body approval?',
        'Can my family be included in the UK application?',
        'How long until I can apply for British citizenship?',
      ],
      'UK founder residency is endorsement-led and business-quality focused; we support strategy, endorsing body preparation, and full filing workflow.'
    ),
  },
  {
    slug: 'usa',
    name: 'USA',
    menuLabel: 'USA EB-5',
    flag: usaFlag,
    heroImage: usaResidencyImage,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'USA EB-5 INVESTOR VISA PROGRAM',
    heroDescription:
      'A direct path to US permanent residency through a job-creating investment from USD 800,000.',
    stats: [
      { value: 'USD 800,000', label: 'Min. TEA\nInvestment' },
      { value: 'USD 1,050,000', label: 'Standard\nInvestment' },
      { value: '18-24 Months', label: 'Processing\nTime' },
      { value: 'Green Card', label: 'Outcome' },
    ],
    about: {
      title: 'About the United States of America',
      subtitle: "The World's Largest Economy",
      description:
        'The United States offers one of the most valuable permanent residency outcomes globally through its Green Card framework.',
      secondaryDescription:
        'EB-5 is administered by USCIS and remains a key investment-based immigration route for global investors.',
      highlights: [
        "World's largest economy",
        'Green Card allows work anywhere in the US',
        'Pathway to US citizenship after 5 years',
        'Access to top universities and schools',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      { title: 'Permanent Green Card', description: 'US permanent residency with rights to live, work, and study nationwide.' },
      { title: 'Path to US Citizenship', description: 'Eligible residents may apply for citizenship after statutory period.' },
      { title: 'Education Access', description: 'Strong US education opportunities for families.' },
      { title: 'Family Coverage', description: 'Spouse and unmarried children under 21 may be included.' },
      { title: 'Regional Centre Route', description: 'Passive investment route available in approved projects.' },
      { title: 'Long-Term Mobility', description: 'US citizenship later provides a highly ranked global passport.' },
    ],
    processIntro: 'This step-by-step process illustrates the US EB-5 investor visa journey.',
    processSteps: [
      'Advisory Consultation',
      'Project Selection',
      'Capital Investment',
      'I-526 Petition Filing',
      'Consular Processing',
      'Green Card Issuance',
    ],
    requirementsSummary:
      'EB-5 applicants must make qualifying investment, prove lawful source of funds, and support required US job creation.',
    requirementsChecklist: [
      'Minimum USD 800,000 (TEA) or USD 1,050,000 investment',
      'Documented lawful source of funds required',
      'Creation of 10 full-time US jobs per investor',
    ],
    qualificationDescription:
      'Investors may qualify through Regional Centre or direct enterprise routes.',
    qualificationOptions: [
      'Regional Centre Programme (passive route)',
      'Direct investment in new commercial enterprise',
      'TEA designation may reduce minimum to USD 800,000',
    ],
    investment: {
      title: 'Investment Options for US EB-5 Green Card',
      description:
        'The Regional Centre model enables passive investment while meeting job creation requirements.',
      stats: [
        { value: '800k', label: 'Min. TEA\nInvestment' },
        { value: '10 Jobs', label: 'Required Job\nCreation' },
        { value: '5 Years', label: 'Path to\nCitizenship' },
      ],
    },
    legalBasis:
      'EB-5 is governed by INA Section 203(b)(5), administered by USCIS, and updated by the EB-5 Reform and Integrity Act of 2022.',
    faqs: makeFaqs(
      [
        'What is the minimum investment for the US EB-5 visa?',
        'What is the difference between a TEA and non-TEA investment?',
        'How long does the EB-5 Green Card process take?',
        'Can my family be included in the EB-5 petition?',
        'What is a Regional Centre and how does it work?',
        'When can I apply for US citizenship after receiving a Green Card?',
      ],
      'EB-5 strategy depends on project type, TEA status, source-of-funds profile, and family goals; we provide end-to-end structuring and filing guidance.'
    ),
  },
];

export const residenceProgramMap = Object.fromEntries(
  residencePrograms.map((program) => [program.slug, program])
);

export const defaultResidenceSlug = residencePrograms[0]?.slug || 'canada';

export default residencePrograms;
