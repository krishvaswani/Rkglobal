import React from 'react';
import realEstateImg from '../assets/Real Estate Investment .jpg';

const RealEstateOptions = () => {
  return (
    <section id="real-estate" className="w-full py-16 md:py-20 bg-white font-sans px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        
        {/* Header Content */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-[34px] lg:text-[38px] font-extrabold text-[#111] uppercase tracking-tight leading-tight mb-3">
            REAL ESTATE INVESTMENT OPTIONS FOR GRENADA CITIZENSHIP PROGRAM
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Discover everything you need to know about purchasing premium real estate in Grenada. Please see our government-approved listings that qualify you for the Grenada Citizenship By Investment Programme.
          </p>
        </div>

        {/* Hero Image - Reduced Dimensions */}
        <div className="w-full relative mb-10 md:mb-14">
          <img 
            src={realEstateImg} 
            alt="Real Estate Investment" 
            className="w-full h-[280px] md:h-[380px] object-cover object-top rounded-[1.5rem] md:rounded-[2.2rem] shadow-sm"
          />
        </div>

        {/* Refined 3-Column Stats Row */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 lg:gap-0 mt-2">
          
          {/* Left Stat */}
          <div className="flex-1 w-full lg:w-auto flex flex-col items-center justify-center py-10 px-6 border-y border-l border-slate-100 rounded-l-[2.5rem] bg-white">
            <h3 className="text-[44px] md:text-[52px] lg:text-[58px] font-bold text-[#0c2b6b] mb-1 leading-none tracking-tight">
              220k
            </h3>
            <p className="text-gray-400 text-[12px] md:text-[14px] font-medium max-w-[180px] text-center leading-tight uppercase tracking-wide">
              Minimum Real Estate <br /> Investment (in $USD)
            </p>
          </div>

          {/* Center Stat (Stands out) */}
          <div className="flex-1 w-full lg:w-auto flex flex-col items-center justify-center py-12 px-10 border border-slate-200 rounded-[2.5rem] bg-white shadow-[0_12px_30px_rgba(0,38,104,0.04)] relative z-20 scale-105">
            <h3 className="text-[44px] md:text-[52px] lg:text-[58px] font-bold text-[#0c2b6b] mb-1 leading-none tracking-tight">
              2-4%
            </h3>
            <p className="text-gray-400 text-[12px] md:text-[14px] font-medium max-w-[180px] text-center leading-tight uppercase tracking-wide">
              ROI or Rental Income <br /> Opportunity
            </p>
          </div>

          {/* Right Stat */}
          <div className="flex-1 w-full lg:w-auto flex flex-col items-center justify-center py-10 px-6 border-y border-r border-slate-100 rounded-r-[2.5rem] bg-white">
            <h3 className="text-[44px] md:text-[52px] lg:text-[58px] font-bold text-[#0c2b6b] mb-1 leading-none tracking-tight">
              5 Years
            </h3>
            <p className="text-gray-400 text-[12px] md:text-[14px] font-medium max-w-[180px] text-center leading-tight uppercase tracking-wide">
              Minimum Real Estate <br /> Holding Period
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RealEstateOptions;
