import React from 'react';
import legalBg from '../../assets/images/legal-basis.png';

const LegalBasis = ({ program }) => {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-8 bg-white flex justify-center font-sans">
      <div
        className="max-w-[1400px] w-full rounded-[24px] md:rounded-[40px] bg-cover bg-right md:bg-center overflow-hidden min-h-[300px] md:min-h-[340px] flex items-end md:items-center p-5 md:p-10 relative"
        style={{ backgroundImage: `url('${legalBg}')` }}
      >
        <div
          className="absolute inset-0 z-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        ></div>

        <div className="relative z-10 max-w-[85%] md:max-w-2xl w-full mb-2 md:mb-0">
          <h2 className="text-[30px] md:text-[42px] font-extrabold text-white uppercase tracking-tight mb-3 md:mb-4 leading-tight">
            LEGAL BASIS
          </h2>
          <p className="text-white text-[14px] md:text-[17px] leading-[1.6] md:leading-[1.7] font-medium opacity-95">
            {program.legalBasis}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalBasis;
