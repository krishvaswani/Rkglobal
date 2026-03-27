import React from 'react';
import { useParams } from 'react-router-dom';
import CitizenshipNav from '../component/CitizenshipNav';
import CountryInfo from '../Citizenship-Sections/CountryInfo';
import ProgramStats from '../Citizenship-Sections/ProgramStats';
import ProgramBenefits from '../Citizenship-Sections/ProgramBenefits';
import ProgramProcess from '../Citizenship-Sections/ProgramProcess';
import ProgramRequirements from '../Citizenship-Sections/ProgramRequirements';
import RealEstateOptions from '../Citizenship-Sections/RealEstateOptions';
import LegalBasis from '../Citizenship-Sections/LegalBasis';
import ContactCTA from '../component/ContactCTA';
import ProgramHero from '../Citizenship-Sections/ProgramHero';
import ProgramFaq from '../Citizenship-Sections/ProgramFaq';
import ComingSoon from '../component/ComingSoon';
import { citizenshipProgramMap } from '../data/citizenshipPrograms';

const sections = [
  { id: 'country-info', label: 'Country Info' },
  { id: 'benefit', label: 'Benefits' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'process', label: 'Process' },
  { id: 'investment-options', label: 'Investment' },
  { id: 'faq', label: "FAQ's" },
];

const Citizenship = () => {
  const { slug } = useParams();
  const program = citizenshipProgramMap[slug];

  if (!program) {
    return <ComingSoon title="Citizenship Programme Not Found" />;
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <ProgramHero program={program} />
      <CitizenshipNav sections={sections} />

      <div className="flex flex-col w-full">
        <CountryInfo program={program} />

        <section id="benefit" className="w-full py-16 md:py-20 bg-[#f5f7fa]">
          <ProgramStats stats={program.stats} />
          <ProgramBenefits program={program} />
        </section>

        <div id="requirements">
          <ProgramRequirements program={program} />
        </div>

        <div id="process">
          <ProgramProcess program={program} />
        </div>

        <RealEstateOptions program={program} />

        <LegalBasis program={program} />

        <div id="faq">
          <ProgramFaq program={program} />
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default Citizenship;
