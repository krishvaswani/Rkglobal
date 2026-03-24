import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProgramRequirements = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white font-sans px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Header Pair */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-[36px] lg:text-[40px] font-extrabold text-[#111] uppercase tracking-tight leading-loose">
              REQUIREMENTS FOR GRENADA <br className="hidden lg:block" /> CITIZENSHIP BY INVESTMENT
            </h2>
          </div>
          <div className="flex-1 md:text-right">
            <p className="text-gray-400 text-sm md:text-base max-w-sm md:ml-auto leading-relaxed">
              Ensure a seamless application process by meeting the core eligibility criteria defined by the Grenada government.
            </p>
          </div>
        </div>

        {/* Hero Banner with Overlapping Card */}
        <div className="relative mb-12 md:mb-16">
          <div className="w-full h-[350px] md:h-[400px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative">
            {/* Background Blue with stylized image overlay */}
            <div className="absolute inset-0 bg-[#0c2b6b] z-0">
               <img 
                 src="https://placehold.co/1200x500/0c2b6b/ffffff?text=Financial+Documents+Background" 
                 alt="Requirements Background" 
                 className="w-full h-full object-cover opacity-30 mix-blend-overlay"
               />
            </div>
            
            {/* Left Content on blue */}
            <div className="absolute inset-0 flex items-center p-8 md:p-14 z-10">
              <div className="w-full md:w-3/5">
                <p className="text-white text-xl md:text-2xl lg:text-[28px] leading-tight md:leading-snug font-medium">
                  To acquire Grenada citizenship applicant must be <br /> over <span className="font-bold">18 years of age and must meet the below mentions requirements.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Overlapping White Card (Visible on Desktop/Tablet) */}
          <div className="mt-8 md:mt-0 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 shadow-xl shadow-blue-900/10 w-full md:w-[450px] lg:w-[550px] z-20 border border-gray-50">
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 color="#0c40e8" size={24} className="mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg md:text-xl font-medium">Applicant must have no criminal record.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 color="#0c40e8" size={24} className="mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg md:text-xl font-medium">Applicants must successfully pass due diligence checks.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 color="#0c40e8" size={24} className="mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg md:text-xl font-medium">Applicants must be in good health.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-[22px] md:text-[26px] font-bold text-[#0c2b6b] mb-6 leading-tight">
              How to Get Grenada Citizenship by Investment ?
            </h4>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              To get Grenada citizenship by investment, applicants can either make a minimum donation of USD 235,000 to the National Transformation Fund or invest a minimum of USD 270,000 in an approved real estate project. The required investment amount for the NTF will increase with the number of dependents during the time of application. The applicant is free to sell the acquired property after five years.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-[22px] md:text-[26px] font-bold text-[#0c2b6b] mb-6 leading-tight">
              To qualify for economic Grenada Citizenship by Investment, applicants may choose from one of the two options:
            </h4>
            <ul className="flex flex-col gap-4 list-disc pl-5">
              <li className="text-gray-500 text-base md:text-lg leading-relaxed">
                Applicants must spend a non-refundable contribution to the National Transformation Fund of USD 235,000
              </li>
              <li className="text-gray-500 text-base md:text-lg leading-relaxed">
                An investment in an approved real estate development with a minimum value of USD 270,000
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgramRequirements;
