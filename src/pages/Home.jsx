import React from 'react';
import Hero from '../Home-Sections/Hero';
import AboutUs from '../Home-Sections/AboutUs';
import CitizenshipPrograms from '../Home-Sections/CitizenshipPrograms';
import ResidencePrograms from '../Home-Sections/ResidencePrograms';
import StatsSection from '../Home-Sections/StatsSection';
import WhyChooseUs from '../Home-Sections/WhyChooseUs';
import FAQ from '../Home-Sections/FAQ';
import UnlockGlobalMobility from '../Home-Sections/UnlockGlobalMobility';

const Home = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-gray-50">
      <Hero />
      <AboutUs />
      <CitizenshipPrograms />
      <ResidencePrograms />
      <StatsSection />
      <WhyChooseUs />
      <FAQ />
      <UnlockGlobalMobility />
    </div>
  );
};

export default Home;
