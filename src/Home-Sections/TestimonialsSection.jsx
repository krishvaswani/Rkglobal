import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Mrs. Gayatri',
    location: 'Chennai, TN',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'
  },
  {
    id: 2,
    name: 'Mr. Karan',
    location: 'Kanpur, UP',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 3,
    name: 'Mr. Usman',
    location: 'New Delhi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
  },
  {
    id: 4,
    name: 'Ms. Sarah',
    location: 'Mumbai, MH',
    text: 'Exceptional service and deep understanding of the global mobility landscape. Highly recommended for complicated cases.',
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 5,
    name: 'Mr. David',
    location: 'Bangalore, KA',
    text: 'The process was entirely seamless. Their team handled everything from document collection to final submission flawlessly.',
    image: 'https://i.pravatar.cc/150?img=11'
  }
];

// Reusable orbiting image component
const OrbitingImage = ({ image, radius, duration, initialAngle, size = 'w-16 h-16', delay = 0 }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full z-0"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        marginLeft: `-${radius}px`,
        marginTop: `-${radius}px`,
      }}
      animate={{ rotate: 360 }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "linear",
        delay: delay
      }}
      initial={{ rotate: initialAngle }}
    >
      <motion.div
        className={`absolute rounded-full overflow-hidden border-[3px] border-[#0d2350] shadow-xl ${size}`}
        style={{
          top: 0,
          left: '50%',
          x: '-50%',
          y: '-50%' // Precisely centers the image exactly on the line border
        }}
        animate={{ rotate: -360 }} // Counter-rotate to stay upright
        transition={{ 
          duration: duration, 
          repeat: Infinity, 
          ease: "linear",
          delay: delay
        }}
        initial={{ rotate: -initialAngle }}
      >
        <img src={image} alt="Client" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
        // wrap around logic
      cards.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return cards;
  };

  return (
    <section className="relative bg-[#0d2350] w-full min-h-screen overflow-hidden flex flex-col items-center justify-between pb-12 pt-16">
      
      {/* 
        Background Concentric Lines
        Made them white (opacity adjusted for aesthetics) and positioned carefully 
        so the arc forms out from the bottom center roughly.
      */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1800px] h-full pointer-events-none z-0">
         {/* Inner Circle */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border-[1px] border-white/30" />
         {/* Middle Circle */}
        <div className="absolute bottom-[-225px] left-1/2 -translate-x-1/2 w-[1300px] h-[1300px] rounded-full border-[1px] border-white/20" />
         {/* Outer Circle */}
        <div className="absolute bottom-[-350px] left-1/2 -translate-x-1/2 w-[1800px] h-[1800px] rounded-full border-[1px] border-white/10" />
      </div>

      {/* 
        Orbiting Images. 
        Positioned relative to the exact center of the circles defined above 
      */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 pointer-events-none w-0 h-0 z-0">
        {/* Inner orbit on 800px circle (radius = 400) */}
        <OrbitingImage image={testimonials[0].image} radius={400} duration={60} initialAngle={-45} />
        <OrbitingImage image={testimonials[4].image} radius={400} duration={60} initialAngle={45} size="w-12 h-12" />

        {/* Middle orbit on 1300px circle (radius = 650) */}
        <OrbitingImage image={testimonials[1].image} radius={650} duration={85} initialAngle={-20} size="w-20 h-20" />
        <OrbitingImage image={testimonials[3].image} radius={650} duration={85} initialAngle={160} />
        
        {/* Outer orbit on 1800px circle (radius = 900) */}
        <OrbitingImage image={testimonials[2].image} radius={900} duration={110} initialAngle={35} size="w-14 h-14" />
      </div>

      {/* Header Content pushed towards the top/middle */}
      <div className="relative z-10 text-center w-full mt-10 md:mt-[15vh]">
        <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold mb-3 tracking-wide text-sm md:text-base">
          <FaQuoteLeft /> Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase">
          What are our clients saying
        </h2>
      </div>

      {/* Spacer to push carousel strictly to the end */}
      <div className="flex-grow z-0"></div>

      {/* Carousel Container pinned at the bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center mt-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop View (3 cards) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`} // Force re-render on index change
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-2xl p-8 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.12)] min-h-[280px]"
              >
                 <div className="mb-6">
                    <div className="w-10 h-10 rounded-full border border-yellow-500/80 flex items-center justify-center">
                        <FaQuoteLeft className="text-yellow-500 text-sm" />
                    </div>
                </div>
                
                <p className="text-white/90 text-[15px] leading-relaxed mb-8 flex-grow font-light">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(255,255,255,0.2)]"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <span className="text-white/60 text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile/Tablet View (1 card) */}
        <div className="lg:hidden w-full max-w-md mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
             <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-2xl p-6 sm:p-8 flex flex-col shadow-xl"
              >
                <div className="mb-6">
                    <div className="w-10 h-10 rounded-full border border-yellow-500/80 flex items-center justify-center">
                        <FaQuoteLeft className="text-yellow-500 text-sm" />
                    </div>
                </div>
                
                <p className="text-white/90 text-[15px] sm:text-base leading-relaxed mb-8 flex-grow font-light">
                  {testimonials[currentIndex].text}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(255,255,255,0.2)]"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <span className="text-white/60 text-sm">{testimonials[currentIndex].location}</span>
                  </div>
                </div>
              </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 mt-12 mb-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-10 bg-yellow-500' : 'w-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
