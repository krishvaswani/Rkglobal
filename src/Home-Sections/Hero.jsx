import React from 'react';
import heroBanner from '../assets/Hero-banner.png';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 p-2 md:p-[10px]">
      <section 
        className="relative w-full min-h-[600px] md:h-auto md:min-h-[785px] flex items-center py-16 md:py-8 px-4 sm:px-8 md:px-20 rounded-[28px] overflow-hidden shadow-2xl"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Family with RK Global Immigration"
            className="w-full h-full object-cover object-center md:scale-105"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
        </div>

        {/* Flex Container for Left Content and Right Form */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 md:mt-0">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-4 md:gap-5">
              <h1 
                className="font-bold uppercase tracking-normal text-white drop-shadow-md text-3xl sm:text-4xl md:text-[40px] leading-tight md:leading-[120%]"
              >
                Leading Global Consultancy<br className="hidden sm:block" />
                For Residence And<br className="hidden sm:block" />
                Citizenship By Investment.
              </h1>
              
              <p 
                className="text-white/90 max-w-2xl font-bold drop-shadow-sm text-base md:text-[18px] leading-relaxed opacity-80 md:opacity-50"
              >
                Join global investors securing valuable second residencies and passports.
                As a trusted citizenship and residence by investment consultancy, we
                make international mobility simple, strategic, and achievable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2 md:mt-4 w-full sm:w-auto">
              <button
                className="w-full sm:w-[217px] h-[55px] md:h-[61px] rounded-[9px] bg-[#C9A84C] hover:bg-[#b5933c] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.4)] active:scale-95 text-white transition-all duration-300 ease-out shadow-[0_10px_20px_rgba(201,168,76,0.3)] flex items-center justify-center font-sans font-normal text-lg md:text-[20px] uppercase"
              >
                Get In Touch
              </button>
              <button
                className="w-full sm:w-[217px] h-[55px] md:h-[61px] rounded-[9px] bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-gray-900 transition-all duration-300 ease-out shadow-lg flex items-center justify-center font-sans font-normal text-lg md:text-[20px] uppercase"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Form Area */}
          <div 
            className="w-full sm:max-w-[458px] flex flex-col bg-white p-5 md:p-6 shadow-2xl rounded-[12px] gap-3"
          >
            {/* Small Inputs Row 1 */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold h-[49px] rounded-[10px] px-3 md:px-[10.77px] font-sans text-base"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold h-[49px] rounded-[10px] px-3 md:px-[10.77px] font-sans text-base"
              />
            </div>

            {/* Small Inputs Row 2 */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold h-[49px] rounded-[10px] px-3 md:px-[10.77px] font-sans text-base"
              />
              <input 
                type="tel" 
                placeholder="Phone No." 
                className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold h-[49px] rounded-[10px] px-3 md:px-[10.77px] font-sans text-base"
              />
            </div>

            {/* Dropdowns */}
            <select 
              className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] font-bold appearance-none cursor-pointer h-[49px] rounded-[10px] px-3 md:px-[10px] font-sans text-base bg-no-repeat bg-[center_right_15px]"
              style={{
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
              }}
            >
              <option value="">Nationality</option>
            </select>

            <select 
              className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] font-bold appearance-none cursor-pointer h-[49px] rounded-[10px] px-3 md:px-[10px] font-sans text-base bg-no-repeat bg-[center_right_15px]"
              style={{
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
              }}
            >
              <option value="">Country of Residence</option>
            </select>

            <select 
              className="w-full bg-[#F0F0F0] border-none outline-none text-[#333] font-bold appearance-none cursor-pointer h-[49px] rounded-[10px] px-3 md:px-[10px] font-sans text-base bg-no-repeat bg-[center_right_15px]"
              style={{
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
              }}
            >
              <option value="">Program Interested</option>
            </select>

            {/* Submit Button */}
            <button
              className="w-full h-[55px] md:h-[62px] rounded-[10.77px] bg-gradient-to-r from-[#092564] to-[#0A39A3] text-white font-normal text-lg md:text-[19.38px] uppercase border-[1.08px] border-white/10 mt-2 hover:opacity-90 active:scale-95 transition-all shadow-xl font-sans tracking-tight focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Hero;
