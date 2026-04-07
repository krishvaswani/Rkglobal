import React from 'react';
import realEstateImg from '../../assets/images/real-estate-investment.jpg';

const StatCard = ({ value, label, emphasize }) => {
  return (
    <div
      className={`flex-1 w-full bg-white rounded-[18px] md:rounded-[20px] lg:rounded-[22px] border border-gray-200/80 px-8 py-8 md:px-6 md:py-6 lg:px-10 lg:py-10 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] ${
        emphasize ? 'lg:-mt-4 shadow-[0_18px_45px_rgba(0,0,0,0.10)] border-gray-200' : ''
      }`}
    >
      <div className="text-[44px] md:text-[26px] lg:text-[56px] font-semibold text-[#0c2b6b] leading-none tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-[12px] md:text-[13px] text-gray-500 leading-tight">
        {label}
      </div>
    </div>
  );
};

const RealEstateOptions = ({ program }) => {
  return (
    <section id="investment-options" className="w-full py-8 md:py-12 bg-white font-sans px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-[24px] md:text-[34px] lg:text-[38px] font-extrabold text-[#111] uppercase tracking-tight leading-[1.15] mb-3">
            {program.investment.title}
          </h2>
          <p className="text-gray-500 text-[12px] md:text-base font-medium max-w-3xl mx-auto leading-[1.75] px-0 md:px-4">
            {program.investment.description}
          </p>
        </div>

        <div className="w-full relative mb-6 md:mb-12">
          <img
            src={realEstateImg}
            alt={program.investment.title}
            className="w-full h-[210px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover object-top rounded-[16px] md:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-6 items-stretch">
          {program.investment.stats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              emphasize={idx === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateOptions;
