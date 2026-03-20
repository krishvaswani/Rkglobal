import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Home-Sections/Hero';
import AboutUs from '../Home-Sections/AboutUs';
import CitizenshipPrograms from '../Home-Sections/CitizenshipPrograms';
import ResidencePrograms from '../Home-Sections/ResidencePrograms';
import StatsSection from '../Home-Sections/StatsSection';
import WhyChooseUs from '../Home-Sections/WhyChooseUs';
import ProcessSection from '../Home-Sections/ProcessSection';
import TestimonialsSection from '../Home-Sections/TestimonialsSection';
import FAQ from '../Home-Sections/FAQ';
import UnlockGlobalMobility from '../Home-Sections/UnlockGlobalMobility';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Home = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-gray-50 overflow-x-hidden">
      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div {...fadeInUp}>
        <AboutUs />
      </motion.div>
      <motion.div {...fadeInUp}>
        <CitizenshipPrograms />
      </motion.div>
      <motion.div {...fadeInUp}>
        <ResidencePrograms />
      </motion.div>
      <motion.div {...fadeInUp}>
        <StatsSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <WhyChooseUs />
      </motion.div>
      <motion.div {...fadeInUp}>
        <ProcessSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <TestimonialsSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <UnlockGlobalMobility />
      </motion.div>
      <motion.div {...fadeInUp}>
        <FAQ />
      </motion.div>
    </div>
  );
};

export default Home;

