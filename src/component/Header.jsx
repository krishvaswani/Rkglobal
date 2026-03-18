import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logoUrl from '../assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const inProcessSection = useRef(false);

  // Watch the Process section — hide header whenever it is on screen
  useEffect(() => {
    const processSection = document.querySelector('[data-section="process"]');
    if (!processSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inProcessSection.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(processSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // While inside the process section — always keep header hidden
      if (inProcessSection.current) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Normal hide-on-down / show-on-up behaviour
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu on route change / outside scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const headerBgClass = isScrolled || menuOpen ? 'bg-white/95 shadow-md backdrop-blur-lg' : 'bg-transparent';
  const textColorClass = isScrolled || menuOpen ? 'text-gray-900' : 'text-white';
  const logoFilter = isScrolled || menuOpen ? 'brightness-0' : 'brightness-0 invert';
  const hamburgerColor = isScrolled || menuOpen ? '#111' : '#fff';

  const navLinks = [
    { to: '/', label: 'HOME', end: true },
    { to: '/citizenship', label: 'CITIZENSHIP' },
    { to: '/residence', label: 'RESIDENCE' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerBgClass} ${isVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[100vw] mx-auto p-[10px]">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-2 pointer-events-auto">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group" onClick={() => setMenuOpen(false)}>
            <img
              src={logoUrl}
              alt="RK Global Immigration Logo"
              className={`w-[180px] sm:w-[220px] md:w-[263px] h-auto object-contain transition-all duration-300 ${logoFilter}`}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-14 text-[0.8rem] font-bold tracking-[0.2em] ${textColorClass}`}>
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `transition-all hover:opacity-70 ${isActive ? 'border-b-2 border-current pb-1' : 'opacity-90'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Button — mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none z-50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: hamburgerColor,
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: hamburgerColor,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: hamburgerColor,
                transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col items-start gap-0 px-8 pb-6 pt-2 bg-white/95 backdrop-blur-lg">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-gray-900 transition-all hover:text-[#C9A84C] ${isActive ? 'text-[#C9A84C]' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
