import React from 'react';
import { Handshake } from 'lucide-react';
import rightImage from '../assets/rightimgprocess.png';
// import rightImage from '../assets/citizen-by-investmenty.jpg';
import leftImage from '../assets/left-small.png';

const ProgramProcess = ({ program }) => {
  const steps = program.processSteps.map((title, index) => ({
    title,
    desc: `Step ${index + 1}`,
  }));

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center mb-6 md:mb-10">
        <h2 className="text-[24px] md:text-[40px] font-extrabold text-[#111] uppercase tracking-tight leading-[1.15] mb-3 mx-auto">
          {`Step-by-Step Process for ${program.name} Citizenship by Investment`}
        </h2>
        <p className="text-gray-500 text-[13px] md:text-[18px] leading-[1.75] font-medium max-w-3xl mx-auto">
          {program.processIntro}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="w-full bg-[#E9F1FC] p-3 md:p-8 rounded-[18px] md:rounded-none">
          <div className="grid grid-cols-1 gap-4 md:gap-6 items-end">
            {/* <div className="w-full">
              <img
                src={leftImage}
                alt={`${program.name} consultation`}
                className="w-full max-w-full md:max-w-[410px] h-[190px] md:h-[380px] object-cover rounded-[14px] md:rounded-[16px] mx-auto lg:mx-0"
              />
            </div> */}
            <div className="w-full">
              <img
                src={rightImage}
                alt={`${program.name} process`}
                className="w-full h-[190px] md:h-[560px] object-cover object-right md:object-center rounded-[14px] md:rounded-[16px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] p-4 md:p-5 flex flex-col items-center text-center border border-gray-200/70"
              >
                <div className="w-[38px] h-[38px] md:w-[44px] md:h-[44px] rounded-full bg-[#002668] flex items-center justify-center mb-2.5 md:mb-3">
                  <Handshake color="white" size={18} strokeWidth={1.8} />
                </div>
                <h4 className="text-[16px] md:text-[21px] font-semibold text-[#111] leading-tight mb-1">
                  {step.title}
                </h4>
                <p className="text-[#8e9aaf] text-[12px] md:text-[14px] leading-snug whitespace-pre-line">
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
