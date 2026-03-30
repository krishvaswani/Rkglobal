import React from 'react';
import legalBg from '../assets/legal basis.png';

const LegalBasis = ({ program }) => {
  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-8 bg-white flex justify-center font-sans">
      <div
        className="max-w-[1400px] w-full rounded-[1.5rem] md:rounded-[2.5rem] bg-cover bg-center overflow-hidden min-h-[240px] md:min-h-[360px] flex items-center p-4 md:p-12 lg:p-14 relative"
        style={{ backgroundImage: `url('${legalBg}')` }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0345409) 5.01%, rgba(0, 0, 0, 0.261689) 37.95%, rgba(9, 37, 100, 0.6) 55.47%)' }}
        ></div>

        <div className="relative z-10 max-w-2xl w-full">
          <h2 className="text-[24px] md:text-[44px] font-extrabold text-white uppercase tracking-tight mb-3 md:mb-6">
            LEGAL BASIS
          </h2>
          <p className="text-white text-[12px] md:text-[18px] leading-[1.75] font-medium opacity-90">
            {program.legalBasis}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalBasis;
