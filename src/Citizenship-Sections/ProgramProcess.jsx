import React from 'react';
import { Handshake } from 'lucide-react';
import rightImage from '../assets/citizen-by-investmenty.jpg';
import leftImage from '../assets/left-small.png';

const ProgramProcess = ({ program }) => {
  const steps = program.processSteps.map((title, index) => ({
    title,
    desc: `Step ${index + 1}`,
  }));

  return (
    <section className="w-full bg-white py-10 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center mb-8 md:mb-10">
        <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#111] uppercase tracking-tight leading-tight mb-3 mx-auto">
          {`Step-by-Step Process for ${program.name} Citizenship by Investment`}
        </h2>
        <p className="text-gray-500 text-base md:text-[18px] font-medium max-w-3xl mx-auto">
          {program.processIntro}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="w-full bg-[#E9F1FC] p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-4 md:gap-6 items-end">
            <div className="w-full">
              <img
                src={leftImage}
                alt={`${program.name} consultation`}
                className="w-full max-w-[320px] md:max-w-[410px] h-[300px] md:h-[380px] object-cover rounded-[16px] mx-auto lg:mx-0"
              />
            </div>
            <div className="w-full">
              <img
                src={rightImage}
                alt={`${program.name} process`}
                className="w-full h-[300px] md:h-[380px] object-cover rounded-[16px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] p-4 md:p-5 flex flex-col items-center text-center border border-gray-200/70"
              >
                <div className="w-[44px] h-[44px] rounded-full bg-[#002668] flex items-center justify-center mb-3">
                  <Handshake color="white" size={20} strokeWidth={1.8} />
                </div>
                <h4 className="text-[18px] md:text-[21px] font-semibold text-[#111] leading-tight mb-1">
                  {step.title}
                </h4>
                <p className="text-[#8e9aaf] text-[13px] md:text-[14px] leading-snug whitespace-pre-line">
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
