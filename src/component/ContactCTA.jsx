import React from 'react';
import bgImage from '../assets/got any question.png';

const ContactCTA = () => {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-white flex justify-center font-sans">
      <div 
        className="max-w-[1400px] w-full rounded-[2.5rem] bg-center overflow-hidden min-h-[350px] md:min-h-[450px] flex items-center justify-center p-8 md:p-16 relative bg-[#02050a]"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Overlay to ensure readability if needed (though the asset looks dark enough) */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[48px] font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
            GOT ANY QUESTIONS?
          </h2>
          
          <p className="text-[#cbd5e1] text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-5xl">
            Invest in your future with Passport Legacy and unlock a world of possibilities. Connect with one of our client advisors today to book a private consultation and discover bespoke residence and citizenship by investment solutions that cater to your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#cca347] hover:bg-[#b08b39] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors duration-300 min-w-[220px]">
              Get In Touch
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#111] px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors duration-300 min-w-[220px]">
              Know More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
