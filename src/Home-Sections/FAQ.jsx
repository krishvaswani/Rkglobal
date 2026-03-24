import React, { useState } from 'react';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'Why should I choose RK Global Immigration?',
    answer: 'RK Global Immigration offers personalized, end-to-end immigration solutions tailored to your profile, goals, and budget. With years of industry experience and a strong track record, we focus on transparency, accurate documentation, and strategic guidance to maximize your chances of visa success. From consultation to post-landing support, our team stays with you at every step.'
  },
  {
    id: 2,
    question: 'Do you provide a free consultation?',
    answer: 'Yes, we offer an initial consultation where our experts assess your profile, understand your goals, and suggest the most suitable immigration options. This helps you get clarity before starting the process and ensures you choose the right pathway.'
  },
  {
    id: 3,
    question: 'Which countries do you specialize in?',
    answer: 'We assist with immigration to countries like Canada, Australia, Germany, Portugal, Poland, and New Zealand. Each country has different visa pathways, and we guide you based on your eligibility, career goals, and long-term plans.'
  },
  {
    id: 4,
    question: 'What types of visas do you handle?',
    answer: 'We provide complete assistance for study visas, work permits, PR (permanent residency), and business/investor visas. Our team ensures that your application is aligned with the latest immigration policies and requirements.'
  },
  {
    id: 5,
    question: 'How do I know which visa is best for me?',
    answer: 'Choosing the right visa depends on multiple factors like your education, work experience, age, financials, and future goals. Our experts conduct a detailed profile evaluation and recommend the most suitable and realistic options for your case.'
  },
  {
    id: 6,
    question: 'How long does the immigration process take?',
    answer: 'Processing time varies based on the country, visa type, and your profile. Some applications may take a few months, while others can take longer depending on government processing timelines and documentation.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState();

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col lg:flex-row  lg:gap-20">

          {/* Left Column: Heading and Images */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-[30px] leading-[141%] md:text-5xl lg:text-[50px] font-bold text-black uppercase tracking-tight md:leading-[1.1] mb-6 md:mb-8 text-center md:text-left">
              FREQUENTLY<br className="hidden md:block" /> ASKED QUESTIONS
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
