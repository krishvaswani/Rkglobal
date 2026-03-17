import React from 'react';
import { Briefcase } from 'lucide-react';

const StatsSection = () => {
  return (
    <div className="w-full bg-gray-50 p-[10px]">
      <section 
        className="w-full py-10 md:py-24 bg-white rounded-[28px] overflow-hidden shadow-sm"
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] lg:grid-rows-[260px_260px] gap-4 md:gap-6 px-4 md:px-8">
          
          {/* Card 1: 22+ Programmes (Tall) */}
          <div className="relative rounded-[2rem] overflow-hidden lg:col-span-1 lg:row-span-2 shadow-sm border border-gray-100 group flex flex-col justify-end p-8">
            <img 
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" 
              alt="Investment" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-2">22+</h3>
              <p className="text-gray-800 font-bold text-lg leading-snug">
                Investment Migration<br />Programmes
              </p>
            </div>
          </div>

          {/* Card 2: 10 Global Office */}
          <div className="rounded-[2rem] bg-[#f0f4ff] p-8 flex flex-col items-center justify-center text-center shadow-sm lg:col-span-1 lg:row-span-1">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-[#2b7fff]">
              <Briefcase size={28} />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 tracking-tight mb-2">10</h3>
            <p className="text-gray-700 font-bold text-lg">Global Office</p>
          </div>

          {/* Card 3: $500M FDI Raised (Wide) */}
          <div className="relative rounded-[2rem] overflow-hidden lg:col-span-2 lg:row-span-1 shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" 
              alt="Money bundles" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="absolute inset-0 flex items-center p-6 md:p-8">
              <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-[2rem] p-8 max-w-sm w-full shadow-2xl">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">$500M</h3>
                <p className="text-white/90 font-bold text-lg">FDI Raised</p>
              </div>
            </div>
          </div>

          {/* Card 4: 100+ Employees (Wide Gradient) */}
          <div className="rounded-[2rem] bg-gradient-to-br from-[#dce5ff] via-[#e8eeff] to-[#f4f7ff] p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 lg:col-span-2 lg:row-span-1 shadow-sm">
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#2b7fff] ml-0 sm:ml-8">
              <Briefcase size={32} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-2">100+</h3>
              <p className="text-gray-700 font-bold text-lg">Employees</p>
            </div>
          </div>

          {/* Card 5: 3000+ Families advised */}
          <div className="rounded-[2rem] bg-[#cce0ff] p-8 flex flex-col items-center justify-center text-center shadow-sm lg:col-span-1 lg:row-span-1">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-[#2b7fff]">
              <Briefcase size={28} />
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 drop-shadow-sm">3000+</h3>
            <p className="text-gray-800 font-bold text-lg">Families advised</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StatsSection;
