import React from 'react';
import Hero from '../Home-Sections/Hero';
import CitizenshipNav from '../component/CitizenshipNav';
import FAQ from '../Home-Sections/FAQ';
import CountryInfo from '../Citizenship-Sections/CountryInfo';
import ProgramStats from '../Citizenship-Sections/ProgramStats';
import ProgramBenefits from '../Citizenship-Sections/ProgramBenefits';
import ProgramProcess from '../Citizenship-Sections/ProgramProcess';
import ProgramRequirements from '../Citizenship-Sections/ProgramRequirements';
import RealEstateOptions from '../Citizenship-Sections/RealEstateOptions';
import LegalBasis from '../Citizenship-Sections/LegalBasis';
import ContactCTA from '../component/ContactCTA';

const sections = [
  { id: 'country-info', label: 'Country Info' },
  { id: 'benefit', label: 'Benefit' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'process', label: 'Process' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'faq', label: "FAQ's" },
];

const Citizenship = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <Hero page="citizenship" />
      
      {/* Scrollable Navigation Index */}
      <CitizenshipNav sections={sections} />

      {/* Main Content Sections */}
      <div className="flex flex-col w-full">
        
        {/* Country Info Section */}
        <CountryInfo />

        {/* Benefits Section using Program Stats */}
        <section id="benefit" className="w-full py-16 md:py-20 bg-[#f5f7fa]">
          <ProgramStats />
          
          {/* Detailed Benefits Grid Section */}
          <ProgramBenefits />
        </section>

        {/* Requirements Section using the new layout */}
        <div id="requirements">
           <ProgramRequirements />
        </div>

        {/* Process Section using the graphical layout */}
        <div id="process">
           <ProgramProcess />
        </div>

        {/* Real Estate Section */}
        <RealEstateOptions />

        {/* Legal Basis Section */}
        <LegalBasis />

        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Final CTA Section */}
        <ContactCTA />

      </div>
    </div>
  );
};

export default Citizenship;

