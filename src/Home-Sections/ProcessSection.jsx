import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

const processSteps = [
  {
    num: '01',
    title: 'Initial Assessment',
    description: 'We evaluate your unique situation and provide tailored advice on the best programs suitable for you and your family.'
  },
  {
    num: '02',
    title: 'Pre-Approval & Due Diligence',
    description: 'Our team conducts initial background checks to ensure a smooth application process before any investment is made.'
  },
  {
    num: '03',
    title: 'Application Preparation',
    description: 'Our dedicated processing team assists you in gathering the required documents and prepares the full application package. All paperwork is carefully reviewed and submitted to the relevant government authorities.'
  },
  {
    num: '04',
    title: 'Government Processing',
    description: 'The respective government unit processes the application. We handle all communications and provide regular updates on your status.'
  },
  {
    num: '05',
    title: 'Approval & Handover',
    description: 'Once approved, we coordinate the final investment step and facilitate the handover of your new citizenship or residency documents.'
  },
  {
    num: '06',
    title: 'Ongoing Support & Renewals',
    description: 'Our relationship does not end at approval. We provide continuous support for passport renewals, adding dependents, and other post-program services.'
  }
];

const NumberItem = ({ index, num, activeIndex }) => {
  // Vertical translation relative to active index
  // When activeIndex === index, yBase = 0
  const yBase = useTransform(activeIndex, (val) => (index - val) * 160);

  // Horizontal translation to follow an arc (circle edge)
  const xBase = useTransform(yBase, (y) => {
    const radius = 600;
    const dy = Math.abs(y);
    if (dy >= radius) return -radius;
    return Math.sqrt(radius * radius - dy * dy) - radius;
  });

  const scale = useTransform(yBase, [-320, 0, 320], [0.6, 1.4, 0.6]);
  const opacity = useTransform(yBase, [-320, 0, 320], [0.2, 1, 0.2]);
  const color = useTransform(yBase, [-10, 0, 10], ["#9ca3af", "#0a2540", "#9ca3af"]);

  // Make the active font distinct (e.g., extra bold)
  const isCurrentlyActive = useTransform(activeIndex, (val) => Math.abs(index - val) < 0.5);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(isCurrentlyActive, "change", (latest) => {
    setIsActive(latest);
  });

  return (
    <motion.div
      className="absolute right-12 top-1/2 -mt-[28px] font-sans flex items-center shadow-none text-gray-400 select-none"
      style={{
        y: yBase,
        x: xBase,
        scale,
        opacity,
        color
      }}
    >
      <span className={`text-6xl ${isActive ? 'font-black tracking-tighter' : 'font-bold tracking-tight'}`}>{num}</span>
    </motion.div>
  );
};

const ProcessSection = () => {
  const containerRef = useRef(null);

  // Total height depends on length of items, say 100vh per item length so that scroll takes time.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to discrete steps (0 to 5)
  const rawActiveIndex = useTransform(scrollYProgress, [0, 1], [0, processSteps.length - 1]);
  // Use a spring to smooth out the movement!
  const activeIndex = useSpring(rawActiveIndex, { stiffness: 300, damping: 90 });

  const [currentStep, setCurrentStep] = useState(0);

  // Update local state when the integer step changes (for right side accordions)
  useMotionValueEvent(activeIndex, "change", (latest) => {
    setCurrentStep(Math.round(latest));
  });

  const handleScrollToStep = (index) => {
    // We could implement click-to-scroll here if desired
    // For now it just updates the visual accordion without scrolling (though they will desync until scrolled)
    // Actually, skipping for simplicity to rely only on scroll.
  };

  return (
    <section ref={containerRef} className="relative bg-white" style={{ height: `${processSteps.length * 80}vh` }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full flex flex-col md:flex-row h-full">

          {/* Left Column - Circular Scroll */}
          <div className="hidden md:flex relative w-1/2 h-full items-center justify-end pr-16 lg:pr-32">

            {/* The wireframe circle */}
            {/* This circle has a 600px radius (1200px width), positioned so its right edge touches right-10 */}
            <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[1px] border-gray-300 rounded-full z-0 opacity-80" />

            <div className="relative w-full h-full z-10">
              {processSteps.map((step, index) => (
                <NumberItem
                  key={index}
                  index={index}
                  num={step.num}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Content & Accordions */}
          <div className="w-full md:w-1/2 flex flex-col justify-center py-12 md:pl-8 lg:pl-16 h-full z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2540] mb-4 uppercase tracking-tight">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-md">
              We simplify the journey to residency and citizenship by investment through a clear, structured process supported by our experienced advisors at every step.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-lg">
              {processSteps.map((step, idx) => {
                const isActive = currentStep === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${isActive
                        ? 'bg-white shadow-xl shadow-gray-200/50 border-white relative z-20'
                        : 'bg-gray-50/50 border-gray-100 opacity-70'
                      }`}
                  >
                    <div className="px-6 py-5">
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#092244]' : 'text-gray-700'
                          }`}
                      >
                        {step.title}
                      </h3>

                      {/* Accordion Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0
                        }}
                        className="overflow-hidden"
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <p className="text-gray-600 leading-relaxed pr-4 text-sm md:text-base">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Visual gradient at top and bottom to blend when scrolling past this section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default ProcessSection;
