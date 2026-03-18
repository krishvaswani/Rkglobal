import React from 'react';
import unlockBanner from '../assets/Unlock-banner.png';

const UnlockGlobalMobility = () => {
  return (
    <section className="w-full py-10 px-4 md:px-8 flex justify-center mt-4">
      <div className="w-full max-w-screen-xl rounded-[24px] overflow-hidden relative shadow-sm min-h-[350px] md:min-h-[420px] flex items-center">
        
        {/* Full Background Image */}
        <img 
          src={unlockBanner} 
          alt="Unlock Global Mobility Background" 
          className="absolute inset-0 w-full h-full object-cover object-[center_right]"
        />

        {/* Blue Gradient Overlay */}
        <div className="backdrop-blur-xl/40 absolute inset-0 bg-gradient-to-r from-[#143E82] via-[#143E82]/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full md:w-[65%] p-8 md:p-14 lg:p-16 flex flex-col items-start text-white text-left">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight mb-4 leading-none text-white">
            UNLOCK GLOBAL MOBILITY
          </h2>
          <p className="text-white font-medium text-lg md:text-xl max-w-xl mb-8 leading-snug tracking-tight">
            Fill out the form and our advisors will guide you through the best residency and citizenship investment options.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-[#C6A03E] hover:bg-[#b08e37] text-white font-semibold px-8 py-3.5 rounded-[2rem] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 text-lg shadow-md">
              Book a Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#C6A03E] font-semibold px-8 py-3.5 rounded-[2rem] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 text-lg shadow-md border border-transparent">
              Explore Programs
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UnlockGlobalMobility;
