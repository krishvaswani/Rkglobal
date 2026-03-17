import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-full py-16 md:py-24 px-8 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-[4rem]">

        {/* ── Left Content ── */}
        <div className="w-full md:w-[60%] flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
            About Us
          </h2>

          <div className="flex flex-col gap-4 text-gray-500 text-base md:text-[22px] leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;
              sit amet, conse
            </p>
          </div>

          <button className="mt-2 bg-[#0a2f8c] hover:bg-[#082269] active:scale-95 text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm tracking-widest uppercase shadow-md">
            Know More
          </button>
        </div>

        {/* ── Right Images ── */}
        <div className="w-full md:w-[40%] flex flex-col gap-3 relative">

          {/* Top Row */}
          <div className="flex gap-3">
            {/* Passport image – wider */}
            <div className="w-[62%] h-[230px] md:h-[260px] overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/src/assets/lefttop.png"
                alt="Passport concept"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Building handshake image – narrower */}
            <div className="w-[38%] h-[230px] md:h-[260px] overflow-hidden rounded-2xl shadow-sm relative">
              <img
                src="/src/assets/righttop.png"
                alt="Business handshake over building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Row – full width */}
          <div className="w-full h-[230px] md:h-[240px] overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/src/assets/bottom.png"
              alt="Professional handshake in office"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
