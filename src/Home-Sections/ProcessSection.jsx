import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, AnimatePresence } from 'framer-motion';

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

// Radius of the visual circle — tuned so the full arc fits screen height at 6 steps
const CIRCLE_RADIUS = 480;
// Total steps
const TOTAL = processSteps.length;
/**
 * Returns arc x, y offset and the angle in degrees at each position.
 * Numbers are spread from startAngle to endAngle along the RIGHT side of the circle.
 */
function getArcPosition(index, total, radius) {
  // Keep between -90 and 90 so x is never negative, meaning it will never chop off the left side
  const startAngle = -35;
  const endAngle = 35;
  const angle = startAngle + (index / (total - 1)) * (endAngle - startAngle);
  const rad = (angle * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),  // rightward from center
    y: radius * Math.sin(rad),  // up/down from center
    angle                        // degrees — used for tangential rotation
  };
}

const ProcessSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const rawActiveIndex = useTransform(scrollYProgress, [0, 1], [0, processSteps.length - 1]);
  const activeIndex = useSpring(rawActiveIndex, { stiffness: 300, damping: 90 });

  const [currentStep, setCurrentStep] = useState(0);

  useMotionValueEvent(activeIndex, 'change', (latest) => {
    setCurrentStep(Math.round(latest));
  });

  // Use a dynamic CSS variable for the circle radius so it fits all screens
  // 45vh ensures the diameter (90vh) almost fills the screen height, spreading numbers wide
  const circleRadiusCSS = '480px';

  return (
    <section
      ref={containerRef}
      data-section="process"
      className="relative bg-white w-full"
      style={{ height: `${processSteps.length * 1200}px` }}
    >
      {/* Sticky full-screen panel */}
      <div className="sticky top-0 w-full h-[100dvh] md:h-[900px] overflow-hidden flex">

        {/* LEFT COLUMN — full height, half width */}
        <div className="relative hidden md:flex w-1/2 h-full items-center overflow-hidden">

          {/* Circle: center at left edge, dynamic responsive sizing */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `calc(2 * ${circleRadiusCSS})`,
              height: `calc(2 * ${circleRadiusCSS})`,
              border: '2px solid #cbd5e1',
              left: '0px',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />

          {/* Numbers — fixed on arc, rotated tangentially along the arc */}
          <div className="relative">
            {processSteps.map((step, idx) => {
              // We pass 1 as radius because we'll multiply by our CSS variable
              const pos = getArcPosition(idx, TOTAL, 1);
              const isActive = currentStep === idx;

              return (
                <div
                  key={idx}
                  className="absolute select-none font-sans"
                  style={{
                    // Position along the dynamic radius
                    left: `calc(${pos.x} * ${circleRadiusCSS})`,
                    top: '50%',
                    // 1. Shift vertically to the exact y position
                    // 2. Rotate by the calculated tangent angle
                    // 3. Offset to vertically center the text on the line
                    transform: `translateY(calc(-50% + ${pos.y} * ${circleRadiusCSS})) rotate(${pos.angle}deg)`,
                    transformOrigin: 'left center',
                    color: isActive ? '#0a2540' : '#c0c8d4',
                    fontSize: isActive ? '4.5rem' : '3.2rem',
                    fontWeight: isActive ? '900' : '700',
                    lineHeight: 1,
                    opacity: isActive ? 1 : 0.75,
                    zIndex: isActive ? 10 : 1,
                    transition: 'color 0.4s ease, font-size 0.4s ease, opacity 0.4s ease',
                    paddingLeft: '32px'
                  }}
                >
                  {step.num}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VIEW — visible only on mobile */}
        <div className="flex md:hidden flex-col w-full h-full relative overflow-hidden pt-[10dvh] items-center">
          {/* Mobile Headers */}
          <div className="z-10 text-center px-6 max-w-[350px]">
            <h2 className="text-3xl font-extrabold text-[#0a2540] mb-4 uppercase tracking-wider">Our Process</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We simplify the journey to residency and citizenship by investment through a clear, structured process supported by our experienced advisors at every step.
            </p>
          </div>

          {/* Mobile Arc & Numbers */}
          <motion.div
            className="absolute rounded-full border border-gray-400 pointer-events-none"
            style={{
              width: '700px',
              height: '700px',
              top: '-450px',
              left: '50%',
              x: '-50%',
              rotate: useTransform(activeIndex, (val) => val * 33)
            }}
          >
            {processSteps.map((step, idx) => {
              const isActive = currentStep === idx;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-[50%]"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${-idx * 33}deg) translateY(350px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#0a2540] w-3 h-3' : 'bg-[#cbd5e1] w-2 h-2'}`} />
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 flex justify-center">
                    <div
                      className={`font-sans font-black transition-all duration-300 ${isActive ? 'text-[#0a2540] text-7xl mt-4 tracking-tighter' : 'text-[#c0c8d4] text-5xl mt-3 tracking-tight opacity-60'}`}
                    >
                      {step.num}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile Content Card */}
          <div className="mt-auto w-full px-5 pb-10 z-20 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 w-full max-w-sm border border-gray-100 min-h-[190px] flex flex-col justify-center"
              >
                <h3 className="text-[#0a2540] text-xl font-bold tracking-tight mb-3">{processSteps[currentStep].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {processSteps[currentStep].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mt-8 justify-center">
              {processSteps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-10 bg-[#cfb53b]' : 'w-4 bg-[#e5dfc5]'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — flex on desktop only */}
        <div className="hidden md:flex w-1/2 flex-col justify-center h-full px-10 lg:px-20 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2540] mb-4 uppercase tracking-tight">
            Our Process
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            We simplify the journey to residency and citizenship by investment through a clear, structured process supported by our experienced advisors at every step.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-lg">
            {processSteps.map((step, idx) => {
              const isActive = currentStep === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden ${isActive
                    ? 'bg-white shadow-xl shadow-gray-200/50 border-white'
                    : 'bg-gray-50/50 border-gray-100 opacity-60'
                    }`}
                >
                  <div className="px-6 py-5">
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#092244]' : 'text-gray-600'
                        }`}
                    >
                      {step.title}
                    </h3>

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

      {/* Fade gradients top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default ProcessSection;
