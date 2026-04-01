import React from 'react';
import unlockBanner from '../../assets/images/unlock-banner.png';
import unlockMobileBanner from '../../assets/images/unlock-global-mobile.png';

const UnlockGlobalMobility = () => {
  return (
    <section className="w-full py-10 px-4 md:px-8 flex justify-center mt-4">
      <div className="w-full max-w-screen-xl rounded-[24px] overflow-hidden relative shadow-sm min-h-[680px] md:min-h-[420px] flex items-start md:items-center bg-[#092257] md:bg-transparent">
        
        {/* Mobile Background Image */}
        <img 
          src={unlockMobileBanner} 
          alt="Unlock Global Mobility Background" 
          className="md:hidden absolute inset-x-0 bottom-0 w-full h-[55%] object-cover object-top"
        />

        {/* Desktop Background Image */}
        <img 
          src={unlockBanner} 
          alt="Unlock Global Mobility Background" 
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-[center_right]"
        />

        {/* Mobile Gradient to perfectly blend the image's top edge into the solid background */}
        <div className="absolute inset-x-0 bottom-[25%] h-[30%] bg-gradient-to-b from-[#092257] via-[#092257]/40 to-transparent md:hidden"></div>

        {/* Desktop Blue Gradient Overlay */}
        <div className="hidden md:block backdrop-blur-xl/40 absolute inset-0 bg-gradient-to-r from-[#143E82] via-[#143E82]/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full md:w-[65%] p-6 pt-8 sm:p-8 md:p-14 lg:p-16 flex flex-col items-start text-white text-left">
          <h2 className="text-[32px] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight mb-2 leading-[1.2] md:leading-none text-white pr-4 md:pr-0">
            UNLOCK GLOBAL<br className="md:hidden" /> MOBILITY
          </h2>
          <p className="text-white font-medium text-[15px] md:text-xl max-w-xl mb-2 leading-[1.6] md:leading-snug tracking-tight">
            Fill out the form and our advisors will guide you through the best residency and citizenship investment options.
          </p>
          
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <button className="w-full md:w-auto bg-[#C6A03E] hover:bg-[#b08e37] text-white font-semibold px-8 py-4 md:py-3.5 rounded-[2rem] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 text-[16px] md:text-lg shadow-md">
              Book a Consultation
            </button>
            <button className="w-full md:w-auto bg-white hover:bg-gray-50 text-[#C6A03E] font-semibold px-8 py-4 md:py-3.5 rounded-[2rem] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 text-[16px] md:text-lg shadow-md border border-transparent">
              Explore Programs
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UnlockGlobalMobility;
