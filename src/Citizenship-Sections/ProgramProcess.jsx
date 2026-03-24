import React from 'react';
import { Handshake } from 'lucide-react';
import rightImage from '../assets/citizen-by-investmenty.jpg';

const steps = [
  { 
    title: 'Assessment & Onboarding', 
    desc: 'Lorem ipsum dolor sit amet\nconsectetur.' 
  },
  { 
    title: 'Application Submission', 
    desc: 'Lorem ipsum dolor sit amet\nconsectetur.' 
  },
  { 
    title: 'Application Processing', 
    desc: 'Lorem ipsum dolor sit amet\nconsectetur.' 
  },
  { 
    title: 'Passport Handover', 
    desc: 'Lorem ipsum dolor sit amet\nconsectetur.' 
  },
];

const ProgramProcess = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-8 md:mb-10">
        <h2 className="text-3xl md:text-[32px] lg:text-[38px] font-extrabold text-[#111] uppercase tracking-tight leading-tight mb-3 max-w-4xl mx-auto">
          STEP-BY-STEP PROCESS FOR GRENADA PASSPORT & CITIZENSHIP BY INVESTMENT
        </h2>
        <p className="text-gray-500 text-base md:text-[18px] font-medium max-w-3xl mx-auto">
          The Grenada citizenship application process is divided into the following stages:
        </p>
      </div>

      {/* Graphics and Overlapping Cards Area */}
      <div className="w-full relative mt-4">
        
        {/* Full-width blue background band for images */}
        <div className="w-full bg-gradient-to-b from-[#f8fafd] to-[#eaf2fb] pt-8 lg:pt-12 pb-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-end justify-center gap-6 lg:gap-8">
            
            {/* Left Image Placeholder (Man with tablet) */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] lg:max-w-[360px]">
                {/* Temporary solid placement mimicking the exact shape provided */}
                <img 
                  src="https://placehold.co/400x500/0c40e8/white?text=Man+With+Tablet" 
                  alt="Onboarding" 
                  className="w-full h-auto rounded-t-full rounded-b-xl shadow-sm object-cover"
                  style={{ minHeight: '320px' }}
                />
              </div>
            </div>

            {/* Right Image Asset (Couple with passports) */}
            <div className="flex-[1.5] w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[550px] lg:max-w-[650px]">
                <img 
                  src={rightImage} 
                  alt="Passport Handover" 
                  className="w-full h-auto rounded-3xl shadow-sm object-cover"
                  style={{ minHeight: '320px' }}
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* 4 Overlapping Step Cards */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-[45%] md:translate-y-[50%] z-10 w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[1.5rem] p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100/50"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#002668] flex items-center justify-center mb-4 shadow-md">
                  <Handshake color="white" size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-[17px] lg:text-[18px] font-bold text-black leading-tight mb-2 tracking-wide">
                  {step.title}
                </h4>
                <p className="text-[#8e9aaf] text-[13px] lg:text-[14px] leading-relaxed whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            ))}
            
          </div>
        </div>

      </div>

    </section>
  );
};

export default ProgramProcess;
