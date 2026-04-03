import React from 'react';
import { Link } from 'react-router-dom';
import citizenshipBg from '../../assets/images/citizenship.png';

const ProgramHero = ({ program }) => {
  const heroImage = program.heroImage || citizenshipBg;
  const category = program.categoryLabel || 'citizenship by investment';

  return (
    <div className="w-full bg-gray-50 p-2 md:p-[10px]">
      <section
        className="relative isolate w-full min-h-[calc(100svh-var(--site-header-height,88px)-16px)] md:min-h-[clamp(680px,78svh,820px)] flex flex-col justify-end md:flex-row md:items-end md:justify-start py-0 md:py-8 px-0 md:px-20 rounded-[24px] md:rounded-[28px] overflow-hidden shadow-2xl "
        style={{ fontFamily: "'Outfit', 'Inter', system-ui, sans-serif" }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroImage}
            alt={`${program.name} ${category}`}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 hidden md:block bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-0 pb-5 md:pb-0">
          <div className="flex flex-col text-left md:max-w-[70%] gap-3 md:gap-3 max-w-[680px] mb-6">
            <div className="flex flex-col gap-2.5 md:gap-4">
              <h1 className="font-bold uppercase tracking-normal text-white drop-shadow-lg whitespace-pre-line text-[22px] leading-[112%] md:text-[42px] md:leading-[110%]">
                {program.heroTitle}
              </h1>

              <p className="text-white font-bold drop-shadow-md tracking-normal max-w-2xl opacity-95 text-[11px] leading-[150%] md:text-[15px] md:leading-[155%]">
                {program.heroDescription}
              </p>
            </div>

            <div className="flex flex-row sm:flex-row items-stretch w-full md:w-auto gap-2 md:gap-3">
              <Link to="/contact" className="w-full sm:flex-1 md:flex-none md:w-[220px] min-h-[44px] md:h-[58px] text-[11px] md:text-[18px] rounded-[10px] bg-[#C9A84C] hover:bg-[#b5933c] hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-white transition-all duration-300 ease-out shadow-xl flex items-center justify-center font-sans font-semibold md:font-normal uppercase tracking-[0.12em] md:tracking-wider px-4 text-center">
                Apply Now
              </Link>
              <Link to="/contact" className="w-full sm:flex-1 md:flex-none md:min-w-[220px] md:w-auto px-4 md:px-6 min-h-[44px] md:h-[58px] text-[11px] md:text-[18px] rounded-[10px] bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-gray-900 transition-all duration-300 ease-out shadow-xl flex items-center justify-center font-sans font-semibold md:font-normal uppercase tracking-[0.08em] md:tracking-wider text-center whitespace-normal leading-[1.25]">
                Book a Free Consultation
              </Link>
            </div>

            <div className="mt-1 md:mt-3">
              <img
                src={program.flag}
                alt={`${program.name} flag`}
                className="h-auto object-contain drop-shadow-xl w-[82px] md:w-[140px] rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramHero;
