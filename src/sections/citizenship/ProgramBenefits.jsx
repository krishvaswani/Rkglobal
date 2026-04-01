import React from 'react';
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Clock3,
  Gem,
  Globe,
  HandCoins,
  HeartHandshake,
  Home,
  Landmark,
  ShieldCheck,
  Sprout,
  Users,
} from 'lucide-react';

const benefitIconMap = [
  {
    match: ['visa', 'passport', 'commonwealth', 'network', 'countries', 'uk access'],
    Icon: Globe,
    color: '#C9A84C',
  },
  {
    match: ['dual citizenship', 'hereditary', 'lifetime citizenship'],
    Icon: Gem,
    color: '#2563EB',
  },
  {
    match: ['tax', 'income tax', 'low tax', 'zero foreign income tax'],
    Icon: BadgeDollarSign,
    color: '#C9A84C',
  },
  {
    match: ['application time', 'processing', 'fast track', 'processing time'],
    Icon: Clock3,
    color: '#2563EB',
  },
  {
    match: ['family', 'spouse', 'children', 'coverage', 'included'],
    Icon: Users,
    color: '#C9A84C',
  },
  {
    match: ['residency', 'remote'],
    Icon: Home,
    color: '#2563EB',
  },
  {
    match: ['e-2', 'treaty', 'compliance', 'legal'],
    Icon: ShieldCheck,
    color: '#C9A84C',
  },
  {
    match: ['property', 'real estate', 'market'],
    Icon: Landmark,
    color: '#2563EB',
  },
  {
    match: ['business'],
    Icon: BriefcaseBusiness,
    color: '#2563EB',
  },
  {
    match: ['climate', 'impact', 'development'],
    Icon: Sprout,
    color: '#C9A84C',
  },
  {
    match: ['affordable', 'entry', 'value'],
    Icon: HandCoins,
    color: '#C9A84C',
  },
];

const getBenefitIcon = (benefit) => {
  const haystack = `${benefit.title} ${benefit.description}`.toLowerCase();
  const matched = benefitIconMap.find(({ match }) =>
    match.some((keyword) => haystack.includes(keyword))
  );

  return matched || { Icon: HeartHandshake, color: '#2563EB' };
};

const ProgramBenefits = ({ program }) => {
  const items = program.benefits.map((benefit, index) => ({
    ...benefit,
    ...getBenefitIcon(benefit),
  }));

  const renderCard = (item, className = '') => {
    const Icon = item.Icon;

    return (
      <div
        className={`bg-[#dbe8f7] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-3 md:gap-5 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02] min-h-[150px] md:min-h-[210px] lg:min-h-[180px] ${className}`}
      >
        <div className="w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-[1rem] md:rounded-[1.25rem] bg-white flex items-center justify-center shadow-lg mb-1 md:mb-2 p-3">
          <Icon size={24} strokeWidth={2.2} color={item.color} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[18px] md:text-[18px] font-extrabold text-[#111] leading-tight">{item.title}</h4>
          <p className="text-gray-600 text-[13px] md:text-[13px] leading-[1.4] md:leading-[1.55] font-medium">{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-10 md:py-16 px-4 md:px-8 bg-white font-sans mt-8 md:mt-12 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8 md:mb-16 text-center">
          <h2 className="text-[24px] md:text-[34px] lg:text-[38px] font-bold text-black uppercase tracking-tight leading-[1.2] mb-3 md:mb-4 w-full">
            {`Benefits of ${program.name} ${program.categoryLabel || 'Citizenship by Investment'} Program`}
          </h2>
          <p className="text-gray-500 text-[13px] md:text-[18px] lg:text-[20px] leading-[1.75] font-medium w-full">
            {program.benefitsIntro}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 w-full lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
            <div className="md:col-span-7">{renderCard(items[0], 'h-full')}</div>
            <div className="md:col-span-5">{renderCard(items[1], 'h-full')}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
            <div className="md:col-span-5">{renderCard(items[2], 'h-full')}</div>
            <div className="md:col-span-7">{renderCard(items[3], 'h-full')}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
            <div className="md:col-span-7">{renderCard(items[4], 'h-full')}</div>
            <div className="md:col-span-5">{renderCard(items[5], 'h-full')}</div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-col gap-5 w-full">
          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-5">{renderCard(items[0], 'h-full')}</div>
            <div className="lg:col-span-3">{renderCard(items[1], 'h-full')}</div>
            <div className="lg:col-span-4">{renderCard(items[2], 'h-full')}</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-3">{renderCard(items[3], 'h-full')}</div>
            <div className="lg:col-span-3">{renderCard(items[4], 'h-full')}</div>
            <div className="lg:col-span-6">{renderCard(items[5], 'h-full')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramBenefits;
