import React, { useState } from 'react';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'How do I choose a good investment migration advisory firm?',
    answer: 'The top priority while shortlisting the best Investment Migration Advisory Firm is ensuring they are properly licensed. Another key consideration is ensuring that they have a proven track record of successful applications and transparent fee structures.'
  },
  {
    id: 2,
    question: 'What immigration services does Passport Legacy offer?',
    answer: 'We provide end-to-end services for citizenship and residency by investment programs, including initial consultation, document preparation, legal review, and post-citizenship support.'
  },
  {
    id: 3,
    question: 'Can an investment migration advisory firm help me renew or extend my residence?',
    answer: 'Yes, specialized advisory firms can assist with the renewal processes, ensuring all current requirements and continuous residency obligations are met.'
  },
  {
    id: 4,
    question: 'What is the role of an investment migration advisory firm in the investment immigration process?',
    answer: 'Advisory firms act as your guide and representative. They help select the right program, navigate complex legal requirements, liaise with government authorities, and optimize your application for approval.'
  },
  {
    id: 5,
    question: 'How to choose the right immigration programme?',
    answer: 'Choosing the right program depends on your goals (e.g., visa-free travel, tax optimization, relocation), budget, timeline, and family structure. A consultation is highly recommended to tailor the choice.'
  },
  {
    id: 6,
    question: 'What kind of investments are accepted for citizenship or residency programmes?',
    answer: 'Common investment types include real estate purchase, government bonds or national funds contribution, business investment/job creation, and bank deposits.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState();

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column: Heading and Images */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-black uppercase tracking-tight leading-[1.1] mb-8 md:mb-8">
              FREQUENTLY<br />ASKED QUESTIONS
            </h2>

            <div className="flex flex-col gap-2 w-full max-w-[500px]">
              <img
                src={part1}
                alt="Passport and Plane"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={part2}
                alt="Passport on desk"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex-1 flex flex-col gap-4 mt-8 lg:mt-0">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-md overflow-hidden bg-white transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-base md:text-lg pr-4">
                      {item.question}
                    </span>
                    <div className="text-gray-900 flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp size={24} strokeWidth={2.5} />
                      ) : (
                        <ChevronDown size={24} strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="p-5 md:p-6 pt-0 text-gray-500 text-sm md:text-base leading-relaxed font-medium font-sans border-t border-transparent">
                      {item.answer}
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

export default FAQ;
