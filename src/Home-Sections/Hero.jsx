import React from 'react';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 p-[10px]">
      <section 
        className="relative w-full h-[600px] md:h-[785px] flex items-center px-8 md:px-20 rounded-[28px] overflow-hidden shadow-2xl"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/Hero-banner.png"
            alt="Family with RK Global Immigration"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Flex Container for Left Content and Right Form */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content Area */}
          <div className="w-full md:w-[60%] flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h1 
                className="font-bold uppercase tracking-normal text-white drop-shadow-md"
                style={{ 
                  fontSize: '40px', 
                  lineHeight: '120%',
                  fontWeight: 700
                }}
              >
                Leading Global Consultancy<br />
                For Residence And<br />
                Citizenship By Investment.
              </h1>
              
              <p 
                className="text-white/90 max-w-2xl font-bold drop-shadow-sm"
                style={{
                  fontSize: '18px',
                  opacity: '50%',
                  lineHeight: '145%',
                  fontWeight: 700
                }}
              >
                Join global investors securing valuable second residencies and passports.
                As a trusted citizenship and residence by investment consultancy, we
                make international mobility simple, strategic, and achievable.
              </p>
            </div>

            <div className="flex flex-wrap items-center mt-4" style={{ gap: '10px' }}>
              <button
                style={{
                  width: '217px',
                  height: '61px',
                  borderRadius: '9px',
                  paddingTop: '16px',
                  paddingBottom: '16px',
                  paddingLeft: '37px',
                  paddingRight: '37px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '145%',
                  letterSpacing: '0%',
                  textTransform: 'uppercase',
                }}
                className="bg-[#C9A84C] hover:bg-[#b5933c] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.4)] active:scale-95 text-white transition-all duration-300 ease-out shadow-[0_10px_20px_rgba(201,168,76,0.3)] whitespace-nowrap flex items-center justify-center"
              >
                Get In Touch
              </button>
              <button
                style={{
                  width: '217px',
                  height: '61px',
                  borderRadius: '9px',
                  paddingTop: '16px',
                  paddingBottom: '16px',
                  paddingLeft: '37px',
                  paddingRight: '37px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '145%',
                  letterSpacing: '0%',
                  textTransform: 'uppercase',
                }}
                className="bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-gray-900 transition-all duration-300 ease-out shadow-lg whitespace-nowrap flex items-center justify-center"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Form Area */}
          <div 
            className="hidden md:flex flex-col bg-white p-6 shadow-2xl"
            style={{
              width: '458px',
              height: '447.33px',
              borderRadius: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* Small Inputs Row 1 */}
            <div className="flex gap-[11px] w-full justify-center">
              <input 
                type="text" 
                placeholder="First Name" 
                className="bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold"
                style={{
                  width: '207px',
                  height: '49px',
                  borderRadius: '10px',
                  padding: '12px 10.77px',
                  fontFamily: 'Helvetica Now Display, sans-serif',
                  fontSize: '16px',
                  lineHeight: '159%'
                }}
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold"
                style={{
                  width: '207px',
                  height: '49px',
                  borderRadius: '10px',
                  padding: '12px 10.77px',
                  fontFamily: 'Helvetica Now Display, sans-serif',
                  fontSize: '16px',
                  lineHeight: '159%'
                }}
              />
            </div>

            {/* Small Inputs Row 2 */}
            <div className="flex gap-[11px] w-full justify-center">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold"
                style={{
                  width: '207px',
                  height: '49px',
                  borderRadius: '10px',
                  padding: '12px 10.77px',
                  fontFamily: 'Helvetica Now Display, sans-serif',
                  fontSize: '16px',
                  lineHeight: '159%'
                }}
              />
              <input 
                type="tel" 
                placeholder="Phone No." 
                className="bg-[#F0F0F0] border-none outline-none text-[#333] placeholder:text-gray-500 font-bold"
                style={{
                  width: '207px',
                  height: '49px',
                  borderRadius: '10px',
                  padding: '12px 10.77px',
                  fontFamily: 'Helvetica Now Display, sans-serif',
                  fontSize: '16px',
                  lineHeight: '159%'
                }}
              />
            </div>

            {/* Dropdowns */}
            <select 
              className="bg-[#F0F0F0] border-none outline-none text-[#333] font-bold appearance-none cursor-pointer"
              style={{
                width: '425px',
                height: '49px',
                borderRadius: '10px',
                padding: '0 10px',
                fontFamily: 'Helvetica Now Display, sans-serif',
                fontSize: '16px',
                lineHeight: '159%',
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 15px center'
              }}
            >
              <option value="">Nationality</option>
            </select>

            <select 
              className="bg-[#F0F0F0] border-none outline-none text-[#333] font-bold appearance-none cursor-pointer"
              style={{
                width: '425px',
                height: '49px',
                borderRadius: '10px',
                padding: '0 10px',
                fontFamily: 'Helvetica Now Display, sans-serif',
                fontSize: '16px',
                lineHeight: '159%',
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 15px center'
              }}
            >
              <option value="">Country of Residence</option>
            </select>

            <select 
              className="bg-[#F0F0F0] border-none outline-none text-[#333] font-bold appearance-none cursor-pointer"
              style={{
                width: '425px',
                height: '49px',
                borderRadius: '10px',
                padding: '0 10px',
                fontFamily: 'Helvetica Now Display, sans-serif',
                fontSize: '16px',
                lineHeight: '159%',
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 15px center'
              }}
            >
              <option value="">Program Interested</option>
            </select>

            {/* Submit Button */}
            <button
              style={{
                width: '425px',
                height: '62px',
                borderRadius: '10.77px',
                background: 'linear-gradient(90deg, #092564 0%, #0A39A3 100%)',
                color: 'white',
                fontWeight: 400,
                fontSize: '19.38px',
                lineHeight: '159%',
                letterSpacing: '-1%',
                textTransform: 'uppercase',
                border: '1.08px solid rgba(255,255,255,0.1)',
                marginTop: '5px'
              }}
              className="hover:opacity-90 active:scale-95 transition-all shadow-xl font-sans"
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
