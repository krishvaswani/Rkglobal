import React from 'react';
import donationIcon from '../assets/Minimum Investment by Donation.svg';
import realEstateIcon from '../assets/Minimum Investment in Real Estate.svg';
import timeIcon from '../assets/Time to Citizenship.svg';
import visaIcon from '../assets/Visa - Free Access.svg';

const statIcons = [donationIcon, realEstateIcon, timeIcon, visaIcon];

const ProgramStats = ({ stats }) => {
  return (
    <section className="w-full pb-10 md:pb-20 px-4 md:px-8 bg-transparent flex justify-center font-sans">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 md:gap-[30px]">
        {stats.map((stat, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#0c3185] min-h-[160px] w-full rounded-[16px] px-3 py-4 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300 md:w-[313px] md:h-[364px] md:min-h-[364px] md:rounded-[20px] md:px-6 md:py-8"
            >
              <div className="w-[52px] h-[52px] md:w-[110px] md:h-[110px] rounded-full bg-white/10 flex items-center justify-center mb-3 md:mb-8 border border-white/5 shrink-0">
                <img
                  src={stat.icon || statIcons[idx] || donationIcon}
                  alt={stat.label.replace('\n', ' ')} 
                  className="w-[24px] h-[24px] md:w-[50px] md:h-[50px] object-contain"
                />
              </div>

              <h4 className={`text-[17px] md:text-[26px] font-bold mb-1.5 md:mb-3 tracking-wide leading-tight ${idx === 0 ? 'text-[#ffd23e]' : 'text-white'}`}>
                {stat.value}
              </h4>

              <p className="text-white text-[10px] md:text-[17px] leading-[1.35] whitespace-pre-line font-medium opacity-90">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramStats;
