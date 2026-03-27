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

  const renderCard = (item, flexValue) => {
    const Icon = item.Icon;

    return (
      <div
        className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]"
        style={{ flex: flexValue }}
      >
        <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
          <Icon size={34} strokeWidth={2.2} color={item.color} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{item.title}</h4>
          <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-white font-sans mt-12 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-[34px] lg:text-[38px] font-bold text-black uppercase tracking-tight leading-loose mb-4 w-full">
            {`Benefits of ${program.name} Citizenship by Investment Program`}
          </h2>
          <p className="text-gray-500 text-base md:text-[18px] lg:text-[20px] font-medium w-full">
            {program.benefitsIntro}
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
            {renderCard(items[0], 1.6)}
            {renderCard(items[1], 1)}
            {renderCard(items[2], 1)}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
            {renderCard(items[3], 1)}
            {renderCard(items[4], 1)}
            {renderCard(items[5], 1.6)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramBenefits;
