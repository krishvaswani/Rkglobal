import React, { useEffect, useMemo, useRef, useState } from 'react';
import realEstateImg from '../assets/Real Estate Investment .jpg';

function useInViewOnce(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

function useCountUp({ active, from = 0, to, durationMs = 900 }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!active) return;
    let rafId = 0;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const next = Math.round(from + (to - from) * eased);
      setValue(next);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, durationMs, from, to]);

  return value;
}

const StatCard = ({ value, label, emphasize }) => {
  return (
    <div
      className={`flex-1 w-full bg-white rounded-[18px] md:rounded-[22px] border border-gray-200/80 px-8 py-8 md:px-10 md:py-10 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] ${
        emphasize ? 'md:-mt-4 shadow-[0_18px_45px_rgba(0,0,0,0.10)] border-gray-200' : ''
      }`}
    >
      <div className="text-[44px] md:text-[56px] font-semibold text-[#0c2b6b] leading-none tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-[12px] md:text-[13px] text-gray-500 leading-tight">
        {label}
      </div>
    </div>
  );
};

const RealEstateOptions = () => {
  const { ref: statsRef, inView } = useInViewOnce({ threshold: 0.35 });

  const minInvestment = useCountUp({ active: inView, to: 220 });
  const roiMax = useCountUp({ active: inView, to: 4 });
  const holdingYears = useCountUp({ active: inView, to: 5 });

  const stats = useMemo(
    () => [
      {
        emphasize: false,
        value: `${minInvestment}k`,
        label: (
          <>
            Minimum Real Estate
            <br />
            Investment (in $USD)
          </>
        ),
      },
      {
        emphasize: true,
        value: `2-${roiMax}%`,
        label: (
          <>
            ROI or Rental Income
            <br />
            Opportunity
          </>
        ),
      },
      {
        emphasize: false,
        value: `${holdingYears} Years`,
        label: (
          <>
            Minimum Real Estate
            <br />
            Holding Period
          </>
        ),
      },
    ],
    [holdingYears, minInvestment, roiMax]
  );

  return (
    <section id="real-estate" className="w-full py-16 md:py-20 bg-white font-sans px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Header Content */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-[34px] lg:text-[38px] font-extrabold text-[#111] uppercase tracking-tight leading-tight mb-3">
            REAL ESTATE INVESTMENT OPTIONS FOR GRENADA CITIZENSHIP PROGRAM
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Discover everything you need to know about purchasing premium real estate in Grenada. Please see our government-approved listings that qualify you for the Grenada Citizenship By Investment Programme.
          </p>
        </div>

        {/* Hero Image - Reduced Dimensions */}
        <div className="w-full relative mb-10 md:mb-12">
          <img 
            src={realEstateImg} 
            alt="Real Estate Investment" 
            className="w-full h-[280px] md:h-[380px] object-cover object-top rounded-[18px] md:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* 3-Column Stats Row (with counting effect) */}
        <div ref={statsRef} className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {stats.map((s, idx) => (
            <StatCard key={idx} value={s.value} label={s.label} emphasize={s.emphasize} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealEstateOptions;
