import React, { useState } from 'react';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProgramFaq = ({ program }) => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="w-full py-16 md:py-20 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-[88px] items-start">
          <div className="w-full lg:max-w-[470px] flex flex-col">
            <h2 className="text-[30px] md:text-[44px] lg:text-[44px] font-extrabold text-black uppercase tracking-[-0.04em] leading-[1.08] mb-8 text-center md:text-left">
              {program.name} Passport &
              <br />
              Citizenship By
              <br />
              Investment FAQ&apos;S
            </h2>

            <div className="w-full max-w-[520px] mx-auto md:mx-0 flex flex-col gap-1.5">
              <img
                src={part1}
                alt={`${program.name} passport support`}
                className="w-full h-[330px] md:h-[360px] object-cover rounded-[10px] block"
              />
              <img
                src={part2}
                alt={`${program.name} document support`}
                className="w-full h-[120px] md:h-[135px] object-cover rounded-[10px] block"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 mt-12 lg:mt-0 w-full">
            {program.faqs.map((item, index) => {
              const id = index + 1;
              const isOpen = openId === id;
              const Icon = isOpen ? ChevronUp : ChevronDown;

              return (
                <div
                  key={item.question}
                  className="border border-[#e7e7e7] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : id)}
                    className="w-full flex items-start justify-between gap-5 px-5 py-6 md:px-6 md:py-7 text-left cursor-pointer"
                  >
                    <span className="font-bold text-[18px] md:text-[20px] leading-[1.35] text-[#111] pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0 text-[#111] pt-0.5">
                      <Icon size={26} strokeWidth={2.2} />
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-[#efefef] px-5 py-6 md:px-6 md:py-7 text-[#7a7a7a] text-[16px] md:text-[18px] leading-[2.1] font-semibold">
                      <div className="max-w-[92%]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFaq;
