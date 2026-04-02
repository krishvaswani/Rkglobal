import React from 'react';
import { useParams } from 'react-router-dom';
import CitizenshipNav from '../components/CitizenshipNav';
import CountryInfo from '../sections/citizenship/CountryInfo';
import ProgramStats from '../sections/citizenship/ProgramStats';
import ProgramBenefits from '../sections/citizenship/ProgramBenefits';
import ProgramProcess from '../sections/citizenship/ProgramProcess';
import ProgramRequirements from '../sections/citizenship/ProgramRequirements';
import RealEstateOptions from '../sections/citizenship/RealEstateOptions';
import LegalBasis from '../sections/citizenship/LegalBasis';
import ContactCTA from '../components/ContactCTA';
import ProgramHero from '../sections/citizenship/ProgramHero';
import ProgramFaq from '../sections/citizenship/ProgramFaq';
import ComingSoon from '../components/ComingSoon';
import { residenceProgramMap } from '../data/residencePrograms';

const sections = [
  { id: 'country-info', label: 'Country Info' },
  { id: 'benefit', label: 'Benefits' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'process', label: 'Process' },
  { id: 'investment-options', label: 'Investment' },
  { id: 'faq', label: "FAQ's" },
];

const Residence = () => {
  const { slug } = useParams();
  const program = residenceProgramMap[slug];

  if (!program) {
    return <ComingSoon title="Residence Programme Not Found" />;
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <ProgramHero program={program} />
      <CitizenshipNav sections={sections} />

      <div className="flex flex-col w-full gap-5 md:gap-8">
        <CountryInfo program={program} />

        <section id="benefit" className="w-full py-10 md:py-20 bg-[#f5f7fa]">
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

export default Residence;
