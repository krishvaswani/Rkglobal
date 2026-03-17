import React from 'react';

const UnlockGlobalMobility = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white flex justify-center mt-8">
      <div className="w-full max-w-7xl bg-[#082269] rounded-[2rem] overflow-hidden relative shadow-xl flex flex-col md:flex-row items-center border border-blue-900/50 min-h-[400px]">
        
        {/* Background Grid and Map Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(43, 127, 255, 0.4) 0%, transparent 60%)'
             }}>
          {/* Faint Dotted World Map overlay */}
          <div className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 500\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%23ffffff\' d=\'M200,100 Q300,50 400,100 T600,100 T800,100\' stroke=\'%23ffffff\' stroke-width=\'2\' fill-opacity=\'0.1\' stroke-dasharray=\'4 4\'/%3E%3Ccircle cx=\'500\' cy=\'250\' r=\'200\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\' stroke-dasharray=\'2 4\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}>
          </div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full md:w-[60%] p-6 md:p-16 lg:p-20 flex flex-col items-start text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight uppercase font-sans">
            Unlock Global Mobility
          </h2>
          <p className="text-blue-100 text-base md:text-xl font-medium max-w-xl mb-8 md:mb-10 leading-relaxed">
            Fill out the form and our advisors will guide you through the best residency and citizenship investment options.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#D4B54D] hover:bg-[#c2a33c] text-white font-medium px-8 py-3.5 rounded-full transition-colors text-[15px] shadow-lg">
              Book a Consultation
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#D4B54D] font-medium px-8 py-3.5 rounded-full transition-colors text-[15px] shadow-lg">
              Explore Programs
            </button>
          </div>
        </div>

        {/* Right Portrait Image */}
        <div className="relative z-10 w-full md:w-[40%] h-[300px] md:h-full min-h-[400px] flex items-end justify-end overflow-hidden">
          
          {/* 
            Using a generic Unsplash placeholder since we don't have the exact asset.
            Applying a blending gradient to make it seamless with the blue background.
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#082269] via-transparent to-transparent z-10 hidden md:block w-32 left-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#082269] via-transparent to-transparent z-10 block md:hidden h-32 bottom-0"></div>

          <img 
            src="src/assets/banner.png" 
            alt="Business Executive" 
            className="absolute bottom-0 right-0 w-full h-[120%] object-cover object-top mix-blend-luminosity opacity-90 md:opacity-100 md:mix-blend-normal"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)'
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default UnlockGlobalMobility;
