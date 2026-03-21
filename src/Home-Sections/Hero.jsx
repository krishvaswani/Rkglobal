import React from 'react';
import heroVideo from '../assets/hero-video.mp4';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 p-2 md:p-[10px]">
      <section
        className="relative w-full h-[95svh] md:h-auto md:min-h-[785px] flex flex-col justify-end md:flex-row md:items-center md:justify-start py-0 md:py-8 px-0 md:px-20 rounded-[28px] overflow-hidden shadow-2xl"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >

        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          
          {/* Mobile Overlay: bottom-heavy gradient so text is readable at bottom */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          {/* Desktop Overlay: Left-side gradient for text visibility */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          
          {/* Subtle Global Darkener for extra contrast */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-0 pb-8 md:pb-0">

          {/* Inner content block */}
          <div className="flex flex-col gap-5 md:gap-8 text-left md:text-left md:max-w-[55%]">

            <div className="flex flex-col gap-3 md:gap-5">
              <h1
                className="font-bold uppercase tracking-normal text-white drop-shadow-md text-[24px] leading-[120%] md:text-[40px] md:leading-[120%]"
              >
                Leading Global Consultancy<br className="hidden md:block" />
                {' '}For Residence And<br className="hidden md:block" />
                {' '}Citizenship By Investment.
              </h1>

              <p
                className="text-white/90 font-bold drop-shadow-sm text-[12px] leading-[145%] tracking-normal md:text-[18px] md:leading-relaxed opacity-90 md:opacity-50 max-w-lg"
              >
                Join global investors securing valuable second residencies and passports.
                As a trusted citizenship and residence by investment consultancy, we
                make international mobility simple, strategic, and achievable.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row items-stretch gap-3 md:gap-4 w-full md:w-auto">
              <button
                className="flex-1 md:flex-none md:w-[217px] h-[55px] md:h-[61px] rounded-[9px] bg-[#C9A84C] hover:bg-[#b5933c] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.4)] active:scale-95 text-white transition-all duration-300 ease-out shadow-[0_10px_20px_rgba(201,168,76,0.3)] flex items-center justify-center font-sans font-normal text-sm md:text-[20px] uppercase tracking-wider"
              >
                Get In Touch
              </button>
              <button
                className="flex-1 md:flex-none md:w-[217px] h-[55px] md:h-[61px] rounded-[9px] bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-gray-900 transition-all duration-300 ease-out shadow-lg flex items-center justify-center font-sans font-normal text-sm md:text-[20px] uppercase tracking-wider"
              >
                Know More
              </button>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Hero;
