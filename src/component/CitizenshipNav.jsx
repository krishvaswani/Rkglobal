import React, { useState, useEffect, useRef } from 'react';

const CitizenshipNav = ({ sections }) => {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const getHeaderHeight = () => {
    const headerHeight = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--site-header-height')
    );

    return Number.isNaN(headerHeight) ? 88 : headerHeight;
  };

  const getStickyTop = () => getHeaderHeight() + 8;

  const getScrollOffset = () => {
    const navHeight = navRef.current?.offsetHeight ?? 0;
    return getStickyTop() + navHeight + 24;
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = getScrollOffset();
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: `-${getScrollOffset()}px 0px -45% 0px`,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = `${getScrollOffset()}px`;
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      ref={navRef}
      className="sticky z-40 w-full bg-white/92 backdrop-blur-md py-6 md:py-8 border-b border-gray-100 shadow-sm overflow-x-auto no-scrollbar"
      style={{ top: 'calc(var(--site-header-height, 88px) + 8px)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-0 flex flex-row items-center gap-4 md:gap-8 justify-start md:justify-center min-w-max">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            style={{ width: '177px', height: '80px', borderRadius: '55px' }}
            className={`flex items-center justify-center text-sm md:text-[18px] font-bold transition-all duration-300 whitespace-nowrap border ${
              activeSection === id
                ? 'bg-[#002668] text-white border-[#002668] shadow-lg scale-105'
                : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default CitizenshipNav;
