import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import requirementsBg from '../assets/500M.png';

const ProgramRequirements = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#012BFF0A] font-sans px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        {/* Top Header Pair */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-10 md:mb-12">
          <div className="flex-1">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold text-[#111] uppercase tracking-tight leading-[1.1]">
              REQUIREMENTS FOR GRENADA
              <br />
              CITIZENSHIP BY INVESTMENT
            </h2>
          </div>
          <div className="flex-1 lg:text-right">
            <p className="text-[12px] md:text-sm lg:text-base text-gray-600 max-w-[420px] ml-auto leading-relaxed">
              Save on maintenance costs, extend hardware lifespan, and receive engineer-first support with flexible contracts and no vendor lock-ins. Get the most out of your assets with TPM coverage for key platforms.
            </p>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative w-full rounded-[10px] md:rounded-[10px] overflow-hidden bg-[#0c2b6b]">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={requirementsBg}
              alt="Requirements background"
              className="w-full h-full object-cover object-bottom opacity-100 scale-105"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-[#0c2b6b]/50" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            {/* Left Content */}
            <div className="flex-1">
              <p className="text-white text-[18px] md:text-[22px] leading-[1.35] font-medium">
                To acquire Grenada citizenship applicant must be
                <br />
                over <span className="font-bold">18 years of age</span> and must
                <br />
                meet the below mentions requirements.
              </p>
            </div>

            {/* Right checklist card */}
            <div className="w-full md:w-[420px] bg-white rounded-[8px] md:rounded-[8px] p-4 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)] border border-white/50">
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 color="#0c40e8" size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-[13px] md:text-[14px] font-medium leading-relaxed">
                    Applicant must have no criminal record
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 color="#0c40e8" size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-[13px] md:text-[14px] font-medium leading-relaxed">
                    Applicants must successfully pass due diligence checks
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 color="#0c40e8" size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-[13px] md:text-[14px] font-medium leading-relaxed">
                    Applicants must be in good health
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-[10px] md:rounded-[10px] p-6 md:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h4 className="text-[18px] md:text-[22px] font-bold text-[#0c2b6b] mb-4 md:mb-6 leading-tight">
              How to Get Grenada Citizenship by Investment ?
            </h4>
            <p className="text-gray-500 text-[13px] md:text-base leading-relaxed">
              To get Grenada citizenship by investment, applicants can either make a minimum donation of USD 235,000 to the National Transformation Fund or invest a minimum of USD 270,000 in an approved real estate project. The required investment amount for the NTF will increase with the number of dependents during the time of application. The applicant is free to sell the acquired property after five years.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[10px] md:rounded-[10px] p-6 md:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h4 className="text-[18px] md:text-[22px] font-bold text-[#0c2b6b] mb-4 md:mb-6 leading-tight">
              To qualify for economic Grenada Citizenship by Investment, applicants may choose from one of the two options:
            </h4>
            <ul className="flex flex-col gap-3 md:gap-4 list-disc pl-5">
              <li className="text-gray-500 text-[13px] md:text-base leading-relaxed">
                Applicants must spend a non-refundable contribution to the National Transformation Fund of USD 235,000
              </li>
              <li className="text-gray-500 text-[13px] md:text-base leading-relaxed">
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
