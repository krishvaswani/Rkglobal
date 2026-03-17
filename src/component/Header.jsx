import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoUrl from '../assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past top
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Determine styles based on scroll state
  const headerBgClass = isScrolled ? 'bg-white/90 shadow-md backdrop-blur-lg' : 'bg-transparent';
  const textColorClass = isScrolled ? 'text-gray-900' : 'text-white';
  const logoFilter = isScrolled ? 'brightness-0' : 'brightness-0 invert';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300 ease-in-out ${headerBgClass} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[100vw] mx-auto p-[10px]">
        {/* The header content should appear inside the Hero's padded area */}
        <div className="flex items-center justify-between px-8 md:px-16 py-2 pointer-events-auto">

          {/* Logo Area */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <img
                  src={logoUrl}
                  alt="RK Global Immigration Logo"
                  className={`w-[263px] h-[83px] object-contain transition-all duration-300 ${logoFilter}`}
                />
              </div>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className={`hidden lg:flex items-center gap-14 text-[0.8rem] font-bold tracking-[0.2em] ${textColorClass}`}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-all hover:opacity-70 ${isActive ? 'border-b-2 border-current pb-1' : 'opacity-90'}`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/citizenship"
              className={({ isActive }) =>
                `transition-all hover:opacity-70 ${isActive ? 'border-b-2 border-current pb-1' : 'opacity-90'}`
              }
            >
              CITIZENSHIP
            </NavLink>
            <NavLink
              to="/residence"
              className={({ isActive }) =>
                `transition-all hover:opacity-70 ${isActive ? 'border-b-2 border-current pb-1' : 'opacity-90'}`
              }
            >
              RESIDENCE
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all hover:opacity-70 ${isActive ? 'border-b-2 border-current pb-1' : 'opacity-90'}`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all hover:opacity-70 ${isActive ? 'border-b-2 border-current pb-1' : 'opacity-90'}`
              }
            >
              CONTACT US
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
