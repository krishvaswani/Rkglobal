import React from 'react';

// Import Custom SVGs for Benefits
import visaIcon from '../assets/Visa - Free Access.svg';
import globalIcon from '../assets/global.svg';
import bagIcon from '../assets/bag.svg';
import timeIcon from '../assets/Time to Citizenship.svg';
import transparentIcon from '../assets/transparent.svg';
import shieldIcon from '../assets/shield.svg';

const benefits = [
  {
    title: 'Visa-Free Access',
    description: 'Grenadian citizens can travel visa-free and visa-on-arrival to a total of 143 countries.',
    icon: visaIcon,
  },
  {
    title: 'Dual Citizenship',
    description: 'Grenada passport holders can hold dual citizenship.',
    icon: globalIcon,
  },
  {
    title: 'Low Tax Rate',
    description: 'Grenada passport holders can hold dual citizenship.',
    icon: bagIcon,
  },
  {
    title: 'Application Time',
    description: 'Grenada passport holders can hold dual citizenship.',
    icon: timeIcon,
  },
  {
    title: 'For Family',
    description: 'Grenada passport holders can hold dual citizenship.',
    icon: transparentIcon,
  },
  {
    title: 'US E-2 Treaty Visa',
    description: 'A gateway to acquire a US E-2 Treaty Visa – The only Caribbean Citizenship program that offers it',
    icon: shieldIcon,
  }
];

const ProgramBenefits = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 bg-white font-sans mt-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-[34px] lg:text-[38px] font-bold text-black uppercase tracking-tight leading-loose mb-4 w-full">
            BENEFITS OF GRENADA CITIZENSHIP BY INVESTMENT PROGRAM
          </h2>
          <p className="text-gray-500 text-base md:text-[18px] lg:text-[20px] font-medium w-full">
            Invest in a second passport and expand your global mobility with visa-free entry to over 180 countries.
          </p>
        </div>

        {/* Asymmetrical Flex Layout */}
        <div className="flex flex-col gap-6 w-full">
          
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
            {/* Card 1: Large */}
            <div className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]" style={{ flex: 1.6 }}>
              <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
                <img src={benefits[0].icon} alt={benefits[0].title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{benefits[0].title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{benefits[0].description}</p>
              </div>
            </div>

            {/* Card 2: Medium */}
            <div className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]" style={{ flex: 1 }}>
              <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
                <img src={benefits[1].icon} alt={benefits[1].title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{benefits[1].title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{benefits[1].description}</p>
              </div>
            </div>

            {/* Card 3: Medium */}
            <div className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]" style={{ flex: 1 }}>
              <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
                <img src={benefits[2].icon} alt={benefits[2].title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{benefits[2].title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{benefits[2].description}</p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
            {/* Card 4: Medium */}
            <div className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]" style={{ flex: 1 }}>
              <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
                <img src={benefits[3].icon} alt={benefits[3].title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{benefits[3].title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{benefits[3].description}</p>
              </div>
            </div>

            {/* Card 5: Medium */}
            <div className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]" style={{ flex: 1 }}>
              <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
                <img src={benefits[4].icon} alt={benefits[4].title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{benefits[4].title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{benefits[4].description}</p>
              </div>
            </div>

            {/* Card 6: Large */}
            <div className="bg-[#dbe8f7] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-start transition-transform duration-300 hover:scale-[1.02]" style={{ flex: 1.6 }}>
              <div className="w-[75px] h-[75px] rounded-[1.5rem] bg-white flex items-center justify-center shadow-lg mb-2 p-4">
                <img src={benefits[5].icon} alt={benefits[5].title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-extrabold text-[#111] leading-tight">{benefits[5].title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{benefits[5].description}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProgramBenefits;
