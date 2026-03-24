import React from 'react';
import legalBg from '../assets/legal basis.png';

const LegalBasis = () => {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-white flex justify-center font-sans">
      <div 
        className="max-w-7xl w-full rounded-[2.5rem] bg-cover bg-center overflow-hidden min-h-[280px] md:min-h-[360px] flex items-center p-6 md:p-12 lg:p-14 relative"
        style={{ backgroundImage: `url('${legalBg}')` }}
      >
        {/* User-specified Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0345409) 5.01%, rgba(0, 0, 0, 0.261689) 37.95%, rgba(9, 37, 100, 0.6) 55.47%)' }}
        ></div>

        <div className="relative z-10 max-w-2xl w-full">
          <h2 className="text-3xl md:text-[44px] font-extrabold text-white uppercase tracking-tight mb-6">
            LEGAL BASIS
          </h2>
          <p className="text-white text-base md:text-[18px] leading-relaxed font-medium opacity-90">
            The Citizenship by Investment (CBI) Programme is regulated by Grenada's Citizenship by Investment Act 15, 2013. This law has been effectively documented and published. It is part of the Grenada legal system and approved by the national parliament. Any individual may apply for naturalisation and be eligible for Citizenship if the Government is satisfied that such a person has invested significantly in Grenada and passed Due Diligence successfully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalBasis;
