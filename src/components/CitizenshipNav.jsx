import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';

const CitizenshipNav = ({ sections }) => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [navHeight, setNavHeight] = useState(0);

  // Single source of truth — always reads live DOM values
  const getLiveOffset = () => {
    const headerH = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--site-header-height')
    ) || 88;
    const navH = navRef.current?.offsetHeight || 0;
    return headerH + navH + 8;
  };

  const handleNavClick = (id) => {
    // Immediately highlight the clicked section
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = getLiveOffset();
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const offset = getLiveOffset();
      let current = sections[0].id;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          // Section is active once its top has scrolled up past the sticky bars
          if (top <= offset + 4) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    // Keep scrollMarginTop in sync so CSS scroll-margin works too
    const syncMargins = () => {
      const offset = getLiveOffset();
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) el.style.scrollMarginTop = `${offset}px`;
      });
    };

    syncMargins();
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();

    return () => window.removeEventListener('scroll', updateActive);
  }, [sections]);

  return (
    <div
      ref={navRef}
      className="sticky z-40 w-full bg-white/92 backdrop-blur-md md:px-8 py-2 md:py-4 border-b border-gray-100 shadow-sm overflow-x-auto no-scrollbar transition-all duration-300 ease-in-out"
      style={{
        top: 'var(--site-header-height, 88px)'
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-0 flex flex-row items-center gap-3 md:gap-8 justify-start md:justify-center min-w-max">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`flex items-center justify-center min-w-[110px] md:min-w-[150px] h-[36px] md:h-[54px] px-4 md:px-6 rounded-full text-[11px] md:text-[15px] font-bold transition-all duration-300 whitespace-nowrap border ${activeSection === id
              ? 'bg-[#002668] text-white border-[#002668] shadow-lg scale-105'
              : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default CitizenshipNav;

