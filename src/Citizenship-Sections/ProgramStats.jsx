import React from 'react';
import donationIcon from '../assets/Minimum Investment by Donation.svg';
import realEstateIcon from '../assets/Minimum Investment in Real Estate.svg';
import timeIcon from '../assets/Time to Citizenship.svg';
import visaIcon from '../assets/Visa - Free Access.svg';

const statIcons = [donationIcon, realEstateIcon, timeIcon, visaIcon];

const ProgramStats = ({ stats }) => {
  return (
    <section className="w-full pb-12 md:pb-20 px-4 md:px-8 bg-transparent flex justify-center font-sans">
      <div className="max-w-[1400px] mx-auto w-full flex flex-wrap justify-center gap-[20px] md:gap-[30px]">
        {stats.map((stat, idx) => {
          return (
            <div
              key={idx}
              style={{ width: '313px', height: '364px', borderRadius: '20px' }}
              className="bg-[#0c3185] flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300 shrink-0"
            >
              <div className="w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/5 shrink-0">
                <img
                  src={stat.icon || statIcons[idx] || donationIcon}
                  alt={stat.label.replace('\n', ' ')} 
                  className="w-[50px] h-[50px] object-contain"
                />
              </div>

              <h4 className={`text-[1.35rem] md:text-[26px] font-bold mb-3 tracking-wide ${idx === 0 ? 'text-[#ffd23e]' : 'text-white'}`}>
                {stat.value}
              </h4>

              <p className="text-white text-[16px] md:text-[17px] leading-[1.4] whitespace-pre-line font-medium opacity-90">
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
