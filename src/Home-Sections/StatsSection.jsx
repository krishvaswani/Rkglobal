import React from 'react';
import statsLeftImage from '../assets/statsleft.png';
import bagIcon from '../assets/bag.svg';
import fdiImage from '../assets/500M.png';

const StatsSection = () => {
  return (
    <div className="w-full bg-gray-50">
      <section 
        className="w-full py-10 md:py-24 bg-white overflow-hidden shadow-sm"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >
        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:grid-rows-[260px_260px] gap-3 sm:gap-4 md:gap-6 px-4 md:px-8">
          
          {/* Card 1: 22+ Programmes (Tall) */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden col-span-5 sm:col-span-1 lg:col-span-1 row-span-2 sm:row-span-1 lg:row-span-2 shadow-sm border border-gray-100 group flex flex-col justify-end p-6 md:p-6">
            <img 
              src={statsLeftImage} 
              alt="Investment" 
              className="absolute inset-x-0 bottom-0 md:inset-0 w-full h-[100%] md:h-full object-cover md:object-[center_right] transition-transform duration-700 group-hover:scale-105"
              style={{objectPosition: "top"}}
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-2/3 bg-gradient-to-t from-white/90 via-white/70 to-transparent"></div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-[2.5rem] sm:text-6xl md:text-[4.5rem] font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">22+</h3>
              <p className="text-gray-900 font-medium text-[15px] sm:text-lg md:text-xl leading-[1.2] sm:leading-snug">
                Investment Migration<br />Programmes
              </p>
            </div>
          </div>

          {/* Card 2: 10 Global Office */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-[#F2F5FF] p-4 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-3 sm:mb-6">
              <img src={bagIcon} alt="Bag" className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px]" />
            </div>
            <h3 className="text-[2.5rem] sm:text-6xl md:text-[4rem] font-bold text-gray-900 tracking-tight mb-1">10+</h3>
            <p className="text-gray-900 font-medium text-[13px] sm:text-lg md:text-2xl">Global Offices</p>
          </div>

          {/* Card 3: $500M FDI Raised (Wide) */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden col-span-3 sm:col-span-1 lg:col-span-2 lg:row-span-1 shadow-sm group">
            <img 
              src={fdiImage} 
              alt="Money bundles" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="absolute inset-0 flex items-center p-2 sm:p-4 md:p-4">
              <div className="backdrop-blur-xl bg-white/30 sm:bg-white/20 border border-white/40 rounded-[1.2rem] sm:rounded-[2rem] p-4 sm:p-6 w-full max-w-[8rem] sm:max-w-[15rem] flex flex-col justify-center sm:justify-end items-start sm:items-center h-full shadow-2xl">
                <h3 className="text-[1rem] sm:text-4xl md:text-6xl leading-none font-bold text-white tracking-tight mb-1 sm:mb-2">$500M</h3>
                <p className="text-black/90 font-medium text-[13px] sm:text-lg">FDI Raised</p>
              </div>
            </div>
          </div>

          {/* Card 4: 100+ Employees (Wide Gradient) */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-tr from-[#8BAEFC] via-[#D1E0FF] to-[#F4F7FF] p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-around text-center sm:text-left gap-2 sm:gap-8 md:gap-14 col-span-3 sm:col-span-1 lg:col-span-2 lg:row-span-1 shadow-sm">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] flex-shrink-0">
              <img src={bagIcon} alt="Bag" className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px]" />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <h3 className="text-[3rem] sm:text-6xl md:text-[5rem] leading-none font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">100+</h3>
              <p className="text-gray-900 font-medium text-[13px] sm:text-lg md:text-xl">Team Members</p>
            </div>
          </div>

          {/* Card 5: 3000+ Families advised */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-[#cfdfff] to-[#AFC8FC] p-4 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-3 sm:mb-6">
              <img src={bagIcon} alt="Bag" className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px]" />
            </div>
            <h3 className="text-[2rem] sm:text-5xl md:text-[4.5rem] leading-none font-bold text-black sm:text-white tracking-tight mb-1 sm:mb-2 sm:drop-shadow-sm">3000+</h3>
            <p className="text-gray-900 font-medium text-[13px] sm:text-lg md:text-xl leading-snug">Families advices</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StatsSection;
