import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView, animate } from 'framer-motion';
import { Award, Clock, Globe, TrendingUp } from 'lucide-react';
import statsLeftImage from '../../assets/images/statsleft.png';
import bagIcon from '../../assets/icons/bag.svg';
import fdiImage from '../../assets/images/500M.png';

const Counter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div className="w-full bg-gray-50">
      <section 
        className="w-full py-10 md:py-20 bg-white overflow-hidden shadow-sm"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >
        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:grid-rows-[260px_260px] gap-3 sm:gap-4 md:gap-6 px-4 md:px-8">
          
          {/* Card 1: 22+ Programmes (Tall) */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden col-span-5 sm:col-span-1 lg:col-span-1 row-span-2 sm:row-span-1 lg:row-span-2 shadow-sm border border-gray-100 group flex flex-col justify-end p-6 md:p-6">
            <img 
              src={statsLeftImage} 
              alt="Investment" 
              className="absolute inset-x-0 bottom-0 md:inset-0 w-full h-[100%] md:h-full object-cover md:object-[center_right] transition-transform duration-700 group-hover:scale-105"
              style={{objectPosition: "top"}}
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-2/3 bg-gradient-to-t from-white/90 via-white/70 to-transparent"></div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-[2.5rem] sm:text-6xl md:text-[4.5rem] font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">
                <Counter value={22} suffix="+" />
              </h3>
              <p className="text-gray-900 font-medium text-[15px] sm:text-lg md:text-xl leading-[1.2] sm:leading-snug">
                Investment Migration<br />Programmes
              </p>
            </div>
          </div>

          {/* Card 2: 10+ Years Experience */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-[#F2F5FF] p-4 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-3 sm:mb-6">
              <Award className="text-blue-600 w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Experience</p>
            <h3 className="text-[2.2rem] sm:text-5xl md:text-[3.5rem] font-bold text-gray-900 tracking-tight mb-1">
              <Counter value={10} suffix="+" />
            </h3>
            <p className="text-gray-900 font-bold text-[11px] sm:text-sm md:text-base leading-snug">Years in Investment Migration<br/>& RCBI Programmes</p>
          </div>

          {/* Card 3: 24/7 Support */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden col-span-3 sm:col-span-1 lg:col-span-2 lg:row-span-1 shadow-sm group bg-[#0c2b6b]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c2b6b] to-[#1a4599]"></div>
            <div className="absolute inset-0 flex items-center p-2 sm:p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Clock size={40} className="text-white animate-pulse" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">24/7</h3>
                  <p className="text-white/80 font-medium text-sm sm:text-xl">Dedicated Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Global Client Base (Continents) */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-tr from-[#8BAEFC] via-[#D1E0FF] to-[#F4F7FF] p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-around text-center sm:text-left gap-2 sm:gap-8 md:gap-14 col-span-3 sm:col-span-1 lg:col-span-2 lg:row-span-1 shadow-sm overflow-hidden relative">
             <div className="absolute top-4 right-4 flex gap-1 opacity-40">
                <span className="text-xl">🇺🇸</span><span className="text-xl">🇬🇧</span><span className="text-xl">🇦🇪</span><span className="text-xl">🇨🇦</span>
             </div>
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] flex-shrink-0">
              <Globe className="text-blue-600 w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <h3 className="text-[2.5rem] sm:text-5xl md:text-[4rem] leading-none font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">
                Across <Counter value={4} />
              </h3>
              <p className="text-gray-900 font-bold text-[13px] sm:text-lg md:text-xl">Continents Global Client Base</p>
            </div>
          </div>

          {/* Card 5: Success Driven Approach */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-[#cfdfff] to-[#AFC8FC] p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-sm col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1 border border-blue-200/50">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-4">
              <TrendingUp className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-blue-900 leading-tight mb-2">
              Success-Driven<br/>Approach
            </h4>
            <p className="text-gray-700 text-[11px] sm:text-[13px] md:text-sm font-medium leading-snug">
              with Transparent<br/>Outcomes
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StatsSection;
