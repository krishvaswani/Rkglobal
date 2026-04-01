import React, { useState, useRef, useEffect } from 'react';
import portugalImg from '../assets/portugal_residency.png';
import greeceImg from '../assets/greece_residency.png';
import uaeImg from '../assets/uae_residency.png';
import canadaImg from '../assets/canada_residency.png';
import usaImg from '../assets/usa_residency.png';
import cyprusImg from '../assets/cyprus_residency.png';

const programs = [
  {
    id: 1,
    name: 'Portugal',
    image: portugalImg,
    subtitle: 'Schengen Visa-Free Access',
    price: 'Investment from €200,000',
    time: '8–9 Months'
  },
  {
    id: 2,
    name: 'Greece',
    image: greeceImg,
    subtitle: 'Schengen Visa-Free Access',
    price: 'Investment from €250,000',
    time: '2–3 Months'
  },
  {
    id: 3,
    name: 'UAE',
    image: uaeImg,
    subtitle: 'Visa-Free Entry to Armenia, Georgia & Montenegro',
    price: 'Investment from USD 204,500',
    time: '1–4 Weeks'
  },
  {
    id: 4,
    name: 'Canada',
    image: canadaImg,
    subtitle: 'Live, Work & Study in Canada',
    price: 'Investment from USD 150,000',
    time: '18–24 Months'
  },
  {
    id: 5,
    name: 'United States',
    image: usaImg,
    subtitle: 'Live, Work & Study in the USA',
    price: 'Investment from USD 800,000',
    time: '18–24 Months'
  },
  {
    id: 6,
    name: 'Cyprus',
    image: cyprusImg,
    subtitle: 'Visa-Free Entry to Cyprus',
    price: 'Investment from €300,000',
    time: '2–3 Months'
  }
];

const ResidencePrograms = () => {
  const [activeCard, setActiveCard] = useState(1);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll('.program-card-residence');
      let closestId = activeCard;
      let minDistance = Infinity;
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = parseInt(card.dataset.id);
        }
      });
      
      if (closestId !== activeCard) {
        setActiveCard(closestId);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeCard]);

  return (
    <div className="w-full bg-gray-50">
      <section 
        className="w-full py-16 md:py-24 bg-white overflow-hidden shadow-sm"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-2 md:mb-16">
            <h2
              className="font-bold text-gray-900 uppercase mb-4 text-[30px] leading-[141%] md:text-[40px] md:leading-normal"
            >
              Residence By Investment Programmes
            </h2>
            <p
              className="text-[#8c8c8c] max-w-6xl mx-auto font-bold text-[14px] leading-[145%] md:text-[18px] md:leading-[145%]"
            >
              Secure long-term residency in top global destinations and enjoy the benefits of international mobility.
            </p>
          </div>

          {/* Carousel / Card Grid */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-nowrap overflow-x-auto w-full gap-4 md:gap-6 lg:gap-8 pb-12 pt-4 px-4 md:px-8 lg:px-0 snap-x snap-mandatory hide-scrollbar justify-start" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            {programs.map((program) => {
              const isActive = activeCard === program.id;
              
              return (
                <div 
                  key={program.id}
                  id={`residence-card-${program.id}`}
                  data-id={program.id}
                  onMouseEnter={() => setActiveCard(program.id)}
                  onClick={() => setActiveCard(program.id)}
                  className={`program-card-residence relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shrink-0 snap-center
                    ${isActive ? 'w-[75vw] sm:w-[320px] md:w-[380px] lg:w-[380px] h-[480px] md:h-[490px] shadow-2xl z-10' : 'w-[75vw] sm:w-[240px] md:w-[280px] lg:w-[320px] h-[440px] md:h-[480px] shadow-lg opacity-90'}
                  `}
                >
                  {/* Background Image */}
                  <img 
                    src={program.image}
                    alt={program.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 
                    ${isActive 
                      ? 'bg-gradient-to-t from-black/95 via-black/50 to-transparent' 
                      : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'}
                  `}></div>

                  {/* Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-4 md:p-4 transition-all duration-500 ${isActive ? 'items-start' : 'items-center pb-12'}`}>
                    <h3 className={`text-white font-bold tracking-wide transition-all duration-500 uppercase
                      ${isActive ? 'text-2xl md:text-[1.7rem] mb-2 leading-tight' : 'text-xl md:text-2xl text-center w-full'}
                    `}>
                      {program.name}
                    </h3>

                    {/* Expanded Details */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full
                      ${isActive ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0 m-0'}
                    `}>
                      <p className="text-white/90 text-sm md:text-base font-medium mb-5 leading-snug">
                        {program.subtitle}
                      </p>
                      
                      <div className="flex items-center gap-3 mb-6">
                        <span className="bg-white/20 text-white backdrop-blur-md text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                          {program.price}
                        </span>
                        <span className="bg-white/20 text-white backdrop-blur-md text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                          {program.time}
                        </span>
                      </div>

                      <button
                        style={{
                          borderRadius: '30px',
                          fontWeight: 900,
                          padding: '18px',
                          background: 'linear-gradient(90deg, #002668 0%, #0A38A0 100%)',
                          color: 'white',
                          fontSize: '16px',
                          lineHeight: '158%',
                        }}
                      className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 transition-all duration-300 shadow-xl mt-auto active:scale-95"
                      >
                      Know More
                    </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex items-center justify-center gap-2 mt-12 w-full">
            {programs.map((prog) => (
              <div 
                key={prog.id}
                onClick={() => {
                  setActiveCard(prog.id);
                  document.getElementById(`residence-card-${prog.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer 
                  ${activeCard === prog.id ? 'w-16 bg-[#C9A84C]' : 'w-6 bg-[#C9A84C]/30'}`}
              ></div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ResidencePrograms;
