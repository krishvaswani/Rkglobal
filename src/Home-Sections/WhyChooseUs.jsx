import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import bgImage from '../assets/why-choose-us.png';

const accordionData = [
  {
    id: 1,
    title: 'Trusted Since 2018',
    icon: '🛡️',
    content: 'We have been providing reliable and secure investment migration services for years, earning the trust of thousands of clients globally.'
  },
  {
    id: 2,
    title: 'Global Expertise',
    icon: '🌍',
    content: 'Our international team of experts possesses deep knowledge of global immigration laws and investment opportunities.'
  },
  {
    id: 3,
    title: 'Transparent Process',
    icon: '🔍',
    content: 'We ensure complete transparency throughout your journey, with no hidden fees and clear communication at every step.'
  },
  {
    id: 4,
    title: 'End-to-End Support',
    icon: '🎧',
    content: 'From initial consultation to acquiring your passport or residency, our dedicated team is there to assist you.'
  },
  {
    id: 5,
    title: 'Fast & Efficient Processing',
    icon: '⚡',
    content: 'Our team specializes in residence and citizenship by investment programs across multiple countries, providing expert guidance for international mobility.'
  },
  {
    id: 6,
    title: 'Tailored Immigration Solutions',
    icon: '💡',
    content: 'We understand that every individual is unique. We provide customized solutions tailored to your specific goals and needs.'
  }
];

const WhyChooseUs = () => {
  const [openId, setOpenId] = useState(5); // Default open is 'Fast & Efficient Processing'

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      className="w-full py-10 md:py-16 bg-[#fafafc] overflow-hidden flex flex-col items-center font-sans"
    >
      
      {/* Background Header */}
      <div className="w-full text-center px-4 z-20 mb-10 md:mb-16">
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-black uppercase tracking-tight mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-500 text-lg md:text-lg  mx-auto font-medium">
          Invest in a second passport and expand your global mobility with visa-free entry to over 180 countries.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center">
        
        {/* Center Globe Background Elements */}
        <div className="absolute inset-0 flex  justify-center z-0 pointer-events-none">
          <img src={bgImage} alt="Why Choose Us" className="w-[300px] md:w-[500px] lg:w-[600px] h-auto object-contain" />
        </div>

        {/* Floating Accordion Cards Container */}
        <div className="relative w-full h-full max-w-[1200px] z-20 pointer-events-none">
          {/* Card Placements using Absolute Positioning for desktop, flow for mobile */}
          
          <div className="hidden md:block">
            {/* Top Left */}
            <div className="absolute top-[5%] -left-8 pointer-events-auto">
              <AccordionCard item={accordionData[0]} isOpen={openId === 1} onToggle={() => toggleAccordion(1)} />
            </div>

            {/* Top Right */}
            <div className="absolute top-[5%] -right-8 pointer-events-auto">
              <AccordionCard item={accordionData[1]} isOpen={openId === 2} onToggle={() => toggleAccordion(2)} />
            </div>

            {/* Middle Left */}
            <div className="absolute top-[42%] left-6 pointer-events-auto z-10">
              <AccordionCard item={accordionData[2]} isOpen={openId === 3} onToggle={() => toggleAccordion(3)} />
            </div>

            {/* Middle Right */}
            <div className="absolute top-[42%] right-6 pointer-events-auto z-10">
              <AccordionCard item={accordionData[3]} isOpen={openId === 4} onToggle={() => toggleAccordion(4)} />
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[2%] left-14 pointer-events-auto z-20">
              <AccordionCard item={accordionData[4]} isOpen={openId === 5} onToggle={() => toggleAccordion(5)} />
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[2%] right-14 pointer-events-auto z-20">
              <AccordionCard item={accordionData[5]} isOpen={openId === 6} onToggle={() => toggleAccordion(6)} />
            </div>
          </div>

          {/* Mobile Layout (flow column instead of floating) */}
          <div className="md:hidden flex flex-col gap-4 mt-80 px-4 pointer-events-auto pb-20">
             {accordionData.map((item) => (
               <AccordionCard 
                 key={item.id} 
                 item={item} 
                 isOpen={openId === item.id} 
                 onToggle={() => toggleAccordion(item.id)} 
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual Accordion Cards
const AccordionCard = ({ item, isOpen, onToggle }) => {
  return (
    <div 
      className={`bg-white rounded-[35px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 
                  transition-all duration-300 ease-in-out cursor-pointer overflow-hidden backdrop-blur-sm
                  ${isOpen ? 'w-full md:w-[380px] z-50 shadow-[0_20px_40px_rgb(0,0,0,0.08)] scale-105' : 'w-full md:w-[350px] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)]'}`}
      onClick={onToggle}
    >
      {/* Header Button */}
      <div className={`flex items-center justify-between p-4 md:p-5 ${isOpen ? 'pb-2 md:pb-2' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="text-xl">{item.icon}</span>
          <span className="font-bold text-gray-900 text-[15px] md:text-base tracking-tight whitespace-nowrap">
            {item.title}
          </span>
        </div>
        <div className="ml-4 md:ml-8 text-[#0a2f8c] flex-shrink-0">
          {isOpen ? <X size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-48 opacity-100 p-4 md:p-5 pt-0 md:pt-0' : 'max-h-0 opacity-0 p-0 m-0'}`}
      >
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
