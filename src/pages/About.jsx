import React, { useId, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BadgeCheck, Eye, Scale, ShieldCheck, Target, Users } from 'lucide-react';

import heroImage from '../assets/images/hero-banner.png';
import imageA from '../assets/images/lefttop.png';
import imageB from '../assets/images/part1.png';
import imageC from '../assets/images/bottom.png';
import ctaBg from '../assets/images/unlock-banner.png';

import citizenshipPrograms from '../data/citizenshipPrograms';
import residencePrograms from '../data/residencePrograms';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-2">
    <span className="inline-block w-8 h-[3px] rounded-full bg-[#C9A84C]" />
    <span className="text-[#C9A84C] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em]">
      {children}
    </span>
  </div>
);

const HeroGetInTouchBadge = ({ className = '' }) => {
  const ringPathId = `ring-path-${useId().replace(/:/g, '')}`;

  return (
    <NavLink
      to="/contact"
      className={`group rounded-full border-4 border-white bg-[#111827] text-white shadow-[0_24px_44px_rgba(17,24,39,0.32)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
      aria-label="Get in touch"
    >
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <svg className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite]" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <path id={ringPathId} d="M 50 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
          </defs>
          <text className="fill-white/90 text-[8px] font-black tracking-[2px]" textLength="214">
            <textPath href={`#${ringPathId}`} startOffset="0%">
              GET IN TOUCH • GET IN TOUCH • GET IN TOUCH •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <ArrowDown size={22} className="text-white group-hover:translate-y-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </NavLink>
  );
};

const About = () => {
  const content = useMemo(
    () => ({
      aboutTitle: 'About Us',
      aboutHeadline: 'Structured global mobility, built on compliance and clarity.',
      aboutParagraphs: [
        'RK Global Immigration operates as a dedicated advisory platform for individuals, families, and investors seeking structured global mobility solutions.',
        'The firm provides access to carefully evaluated residency and citizenship programmes across multiple jurisdictions, enabling clients to establish international presence through legally compliant and strategically aligned pathways.',
        'With a strong emphasis on regulatory adherence, discretion, and precision, RK Global Immigration supports clients in navigating complex cross-border environments with clarity and confidence.',
        'Backed by over a decade of experience in investment migration and residency frameworks, the firm maintains a disciplined and transparent approach to every engagement.',
      ],
      mission:
        'To deliver structured, transparent, and personalized global mobility solutions that enable clients to establish secure and sustainable futures across stable international jurisdictions.',
      vision:
        'To be recognized as a trusted and distinguished advisory firm in investment migration and global mobility, setting benchmarks for compliance, reliability, and professional excellence.',
      coreValuesIntro: {
        title: 'CORE VALUES',
        subtitle: 'Our Core Principles',
      },
      coreValues: [
        {
          title: 'Integrity & Professional Ethics',
          description:
            'We uphold the highest standards of honesty, transparency, and discretion in every client engagement.',
          Icon: ShieldCheck,
        },
        {
          title: 'Client-Centric Responsibility',
          description:
            'We take full ownership of our advisory, ensuring each solution is aligned with the client’s objectives and long-term interests.',
          Icon: Users,
        },
        {
          title: 'Compliance & Fair Practice',
          description:
            'We operate strictly within regulatory frameworks, ensuring lawful and ethical access to global mobility programmes.',
          Icon: Scale,
        },
        {
          title: 'Knowledge-Driven Advisory',
          description:
            'We emphasize clarity and informed decision-making, enabling clients to navigate complex processes with confidence.',
          Icon: BadgeCheck,
        },
      ],
      reachTitle: 'Our Global Reach',
      reachSubtitle: '',
      cta: {
        heading: 'Secure Your Global Future with Confidence',
        subtext:
          'Engage with a structured advisory approach designed to support your long-term mobility, security, and global positioning.',
        button: 'Get in Touch',
      },
    }),
    []
  );

  const allFlags = useMemo(() => {
    const programs = [...citizenshipPrograms, ...residencePrograms].filter(
      (program) => program?.flag && program?.name
    );
    const unique = [];
    const seen = new Set();
    for (const program of programs) {
      const key = `${program.flag}-${program.name}`;
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push({ src: program.flag, name: program.name });
    }
    return unique;
  }, []);

  const marqueeItems = useMemo(() => [...allFlags, ...allFlags], [allFlags]);

  return (
    <main className="w-full bg-[#f4f6f8] pt-[calc(var(--site-header-height,88px)+14px)] pb-12 md:pb-16 font-sans overflow-x-hidden">
      {/* ── Hero (near full width) ───────────────── */}
      <div className="px-2 md:px-4 lg:px-6">
        <div className="relative">
          <section className="relative overflow-hidden rounded-[20px] md:rounded-[30px] min-h-[300px] md:min-h-[510px] flex items-end px-5 md:px-10 py-7 md:py-11 bg-cover bg-center shadow-[0_24px_60px_rgba(10,39,105,0.22)]">
            <img
              src={heroImage}
              alt="RK Global Immigration advisory team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2769]/92 via-[#0a2769]/65 to-[#0a2769]/25" />
            <div className="absolute inset-0 bg-[#C9A84C]/10 mix-blend-soft-light" />

            <div className="relative z-10 w-full flex flex-col gap-4 md:gap-5 max-w-3xl pb-0 md:pb-8">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold text-white tracking-wide">
                  Trusted Advisory
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold text-white tracking-wide">
                  Global Mobility
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold text-white tracking-wide">
                  Compliance-First
                </span>
              </div>

              <h1 className="text-white text-[34px] md:text-[62px] font-extrabold tracking-tight leading-[1.02]">
                {content.aboutTitle}
              </h1>
              <p className="text-white/80 text-[13px] md:text-[18px] font-medium leading-[1.6] max-w-2xl">
                {content.aboutHeadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <NavLink
                  to="/contact"
                  className="h-[46px] md:h-[54px] px-5 md:px-7 rounded-[12px] bg-[#C9A84C] hover:bg-[#b5933c] active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(201,168,76,0.22)] text-white font-bold uppercase tracking-[0.12em] text-[11px] md:text-[12px] inline-flex items-center justify-center"
                >
                  Get in Touch
                </NavLink>
                <NavLink
                  to="/citizenship"
                  className="h-[46px] md:h-[54px] px-5 md:px-7 rounded-[12px] bg-white/95 hover:bg-white active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(0,0,0,0.16)] text-[#0a2769] font-extrabold uppercase tracking-[0.12em] text-[11px] md:text-[12px] inline-flex items-center justify-center"
                >
                  Explore Programmes
                </NavLink>
              </div>

              <div className="md:hidden pt-1">
                <HeroGetInTouchBadge className="w-[120px] h-[120px] flex" />
              </div>
            </div>
          </section>

          <HeroGetInTouchBadge className="hidden md:flex w-[146px] h-[146px] lg:w-[158px] lg:h-[158px] absolute bottom-4 md:bottom-5 right-4 md:right-7 lg:right-10 md:-translate-x-5 lg:-translate-x-7 z-20" />
        </div>
      </div>

      {/* ── Constrained Content (max 1400px) ───── */}
      <div className="max-w-[1400px] mx-auto px-3 md:px-6 mt-5 md:mt-8 flex flex-col gap-5 md:gap-8">
        {/* ── About Narrative ───────────────────── */}
        <motion.section
          {...fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch"
        >
          <div className="lg:col-span-7 bg-white rounded-[18px] md:rounded-[24px] p-5 md:p-8 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)]">
            <SectionLabel>About RK Global</SectionLabel>
            <h2 className="text-[#0a2769] text-[26px] md:text-[44px] leading-[1.06] font-extrabold tracking-tight mt-2">
              A disciplined, transparent approach to every engagement.
            </h2>
            <div className="mt-4 md:mt-5 flex flex-col gap-3 text-[#6a7a88] text-[13px] md:text-[15px] leading-[1.75]">
              {content.aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-[18px] md:rounded-[24px] p-5 md:p-6 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)] overflow-hidden">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-2 aspect-[16/7] md:aspect-[16/8] overflow-hidden rounded-[16px] md:rounded-[20px] relative group">
                <img
                  src={imageA}
                  alt="Global mobility planning"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-4 bottom-4 flex flex-col gap-1">
                  <p className="text-white font-extrabold tracking-tight text-[16px] md:text-[18px] leading-tight">
                    Advisory you can trust
                  </p>
                  <p className="text-white/80 text-[11px] md:text-[12px] font-medium">
                    Built on discretion & compliance
                  </p>
                </div>
              </div>

              <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[16px] md:rounded-[20px] relative group">
                <img
                  src={imageB}
                  alt="Investment planning"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[16px] md:rounded-[20px] relative group">
                <img
                  src={imageC}
                  alt="Decision-making process"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Mission / Vision ───────────────────── */}
        <motion.section {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white rounded-[18px] md:rounded-[24px] p-5 md:p-8 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)] relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#C9A84C]/10 blur-2xl" />
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-[14px] bg-[#0a2769]/10 text-[#0a2769] flex items-center justify-center shrink-0">
                <Target size={22} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0a2769] text-[20px] md:text-[26px] font-extrabold tracking-tight">
                  Mission
                </h3>
                <p className="text-[#6a7a88] text-[13px] md:text-[15px] leading-[1.75]">
                  {content.mission}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[18px] md:rounded-[24px] p-5 md:p-8 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)] relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#0a2769]/10 blur-2xl" />
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-[14px] bg-[#C9A84C]/15 text-[#0a2769] flex items-center justify-center shrink-0">
                <Eye size={22} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0a2769] text-[20px] md:text-[26px] font-extrabold tracking-tight">
                  Vision
                </h3>
                <p className="text-[#6a7a88] text-[13px] md:text-[15px] leading-[1.75]">
                  {content.vision}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Core Values ───────────────────────── */}
        <motion.section {...fadeInUp} className="p-2 md:p-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div className="flex flex-col gap-2">
              <SectionLabel>{content.coreValuesIntro.title}</SectionLabel>
              <h2 className="text-[#0a2769] text-[26px] md:text-[44px] leading-[1.06] font-extrabold tracking-tight">
                {content.coreValuesIntro.subtitle}
              </h2>
            </div>
            <p className="text-[#6a7a88] text-[12px] md:text-[14px] leading-[1.6] max-w-xl">
              A strong foundation of ethics, accountability, and clarity guides how we advise, communicate, and deliver.
            </p>
          </div>

          <div className="mt-5 md:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {content.coreValues.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group rounded-[18px] bg-[#f8fafc] border border-[#edf1f6] p-5 md:p-6 shadow-[0_6px_24px_rgba(10,39,105,0.06)] transition-all duration-300 hover:bg-[#0a2769] hover:border-[#0a2769] hover:shadow-[0_14px_32px_rgba(10,39,105,0.30)]"
              >
                <div className="w-11 h-11 rounded-[14px] bg-white shadow-[0_8px_18px_rgba(10,39,105,0.08)] border border-[#eef2f7] flex items-center justify-center text-[#0a2769] transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/25 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-3 text-[#0a2769] font-extrabold tracking-tight text-[16px] md:text-[18px] leading-tight transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[#6a7a88] text-[12px] md:text-[13px] leading-[1.7] transition-colors duration-300 group-hover:text-white/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Global Reach ──────────────────────── */}
        <motion.section {...fadeInUp} className="p-2 md:p-0 overflow-hidden">
          <SectionLabel>Global Reach</SectionLabel>
          <h2 className="text-[#0a2769] text-[26px] md:text-[44px] leading-[1.06] font-extrabold tracking-tight mt-2">
            {content.reachTitle}
          </h2>
          <p className="text-[#6a7a88] text-[13px] md:text-[15px] leading-[1.7] mt-3 max-w-3xl">
            {content.reachSubtitle}
          </p>

          <div
            className="mt-5 md:mt-7 overflow-hidden"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="flex w-max gap-3 md:gap-5 py-5 md:py-6 px-4 md:px-6 animate-[rk-marquee_30s_linear_infinite]">
              {marqueeItems.map((flag, idx) => (
                <div
                  key={`${flag.src}-${flag.name}-${idx}`}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="h-[44px] w-[68px] md:h-[56px] md:w-[88px] rounded-[12px] bg-white shadow-[0_10px_24px_rgba(10,39,105,0.06)] border border-[#eef2f7] overflow-hidden flex items-center justify-center">
                    <img src={flag.src} alt={`${flag.name} flag`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.06em] uppercase text-[#4a5a78] whitespace-nowrap">
                    {flag.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── CTA Banner ───────────────────────── */}
        <motion.section
          {...fadeInUp}
          className="relative overflow-hidden rounded-[20px] md:rounded-[30px] min-h-[250px] md:min-h-[340px] flex items-center px-5 md:px-8 lg:px-10 py-7 md:py-10 bg-cover bg-center shadow-[0_20px_60px_rgba(10,39,105,0.2)]"
        >
          <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a2769]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2769]/92 via-[#153787]/78 to-[#0a2769]/55" />

          <div className="relative z-10 w-full grid grid-cols-1 xl:grid-cols-[1fr_auto] items-center gap-6 xl:gap-8">
            <div className="flex flex-col gap-2 max-w-3xl">
              <SectionLabel>Let&apos;s Talk</SectionLabel>
              <h2 className="text-white text-[28px] sm:text-[34px] md:text-[46px] leading-[1.06] font-extrabold tracking-tight">
                {content.cta.heading}
              </h2>
              <p className="text-white/80 text-[14px] md:text-[16px] leading-[1.7] max-w-2xl">
                {content.cta.subtext}
              </p>
            </div>
            <div className="flex items-center xl:justify-end">
              <NavLink
                to="/contact"
                className="group h-[52px] md:h-[64px] px-7 md:px-10 rounded-[14px] bg-[#C9A84C] hover:bg-[#b5933c] active:scale-[0.98] transition-all shadow-[0_14px_36px_rgba(201,168,76,0.3)] text-white font-extrabold uppercase tracking-[0.14em] text-[11px] md:text-[13px] inline-flex items-center justify-center w-full sm:w-auto gap-2"
              >
                {content.cta.button}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </NavLink>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
