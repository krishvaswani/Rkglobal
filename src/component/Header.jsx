import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import logoUrl from '../assets/logo.svg';
import footerLogoUrl from '../assets/footer-logo.svg';
import citizenshipPrograms, { defaultCitizenshipSlug } from '../data/citizenshipPrograms';
import residencePrograms, { defaultResidenceSlug } from '../data/residencePrograms';

const Header = () => {
  const headerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const citizenshipCloseTimerRef = useRef(null);
  const residenceCloseTimerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [citizenshipMenuOpen, setCitizenshipMenuOpen] = useState(false);
  const [residenceMenuOpen, setResidenceMenuOpen] = useState(false);
  const location = useLocation();
  const isCitizenshipRoute = location.pathname.startsWith('/citizenship');
  const isResidenceRoute = location.pathname.startsWith('/residence');
  const isTransparentPage = location.pathname === '/' || isCitizenshipRoute || isResidenceRoute;


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastY = lastScrollYRef.current;

      setIsScrolled(currentScrollY > 50);

      // Hide on scroll-down, show on scroll-up
      if (currentScrollY > lastY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastY || currentScrollY <= 100) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;

      document.documentElement.style.setProperty(
        '--site-header-height',
        `${headerRef.current.offsetHeight}px`
      );
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [isScrolled, isVisible, menuOpen, location.pathname]);

  // Close menu on route change / outside scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    clearCloseTimer(citizenshipCloseTimerRef);
    clearCloseTimer(residenceCloseTimerRef);
    setCitizenshipMenuOpen(false);
    setResidenceMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      clearCloseTimer(citizenshipCloseTimerRef);
      clearCloseTimer(residenceCloseTimerRef);
    };
  }, []);

  const shouldShowBg = isScrolled || menuOpen || !isTransparentPage;
  const headerBgClass = shouldShowBg ? 'bg-white/95 shadow-md backdrop-blur-lg' : 'bg-transparent';
  const textColorClass = shouldShowBg ? 'text-gray-900' : 'text-white';
  const currentLogo = shouldShowBg ? footerLogoUrl : logoUrl;
  const logoSizeClass = shouldShowBg
    ? 'w-[120px] sm:w-[145px] md:w-[165px]'
    : 'w-[132px] sm:w-[165px] md:w-[190px]';
  const hamburgerColor = shouldShowBg ? '#111' : '#fff';
  const citizenshipBasePath = `/citizenship/${defaultCitizenshipSlug}`;
  const residenceBasePath = `/residence/${defaultResidenceSlug}`;
  const navLinks = [
    { to: '/', label: 'HOME', end: true },
    { type: 'citizenship' },
    { type: 'residence' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT US' },
  ];

  const renderMegaMenuLink = (program, basePath) => (
    <NavLink
      key={program.slug}
      to={`${basePath}/${program.slug}`}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-2xl border px-3 py-3 text-xs tracking-[0.08em] transition-all ${
          isActive
            ? 'border-[#002668] bg-[#002668] text-white shadow-lg'
            : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50'
        }`
      }
    >
      <img
        src={program.flag}
        alt={`${program.name} flag`}
        className="h-10 w-14 rounded object-cover border border-gray-200 bg-gray-100 shrink-0 md:h-11 md:w-16"
      />
      <span className="leading-tight">{program.menuLabel}</span>
    </NavLink>
  );

  const clearCloseTimer = (timerRef) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openCitizenshipMenu = () => {
    clearCloseTimer(citizenshipCloseTimerRef);
    setCitizenshipMenuOpen(true);
  };

  const openResidenceMenu = () => {
    clearCloseTimer(residenceCloseTimerRef);
    setResidenceMenuOpen(true);
  };

  const closeCitizenshipMenuWithDelay = () => {
    clearCloseTimer(citizenshipCloseTimerRef);
    citizenshipCloseTimerRef.current = setTimeout(() => {
      setCitizenshipMenuOpen(false);
    }, 180);
  };

  const closeResidenceMenuWithDelay = () => {
    clearCloseTimer(residenceCloseTimerRef);
    residenceCloseTimerRef.current = setTimeout(() => {
      setResidenceMenuOpen(false);
    }, 180);
  };

  return (
    <header
      ref={headerRef}
      className={`p-[10px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerBgClass} ${isVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[1400px] mx-auto w-full p-[10px]">
        <div className="flex items-center justify-between  py-2 pointer-events-auto">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group" onClick={() => setMenuOpen(false)}>
            <img
              src={currentLogo}
              alt="RK Global Immigration Logo"
              className={`${logoSizeClass} h-auto object-contain transition-all duration-300`}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-14 text-[0.8rem] font-bold tracking-[0.2em] ${textColorClass}`}>
            {navLinks.map((item) => {
              if (item.type === 'citizenship') {
                return (
                  <div
                    key="citizenship"
                    className="relative"
                    onMouseEnter={openCitizenshipMenu}
                    onMouseLeave={closeCitizenshipMenuWithDelay}
                  >
                    <NavLink
                      to={citizenshipBasePath}
                      className={`transition-all hover:opacity-70 ${isCitizenshipRoute ? 'border-b-2 border-current pb-1' : 'opacity-90'}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        CITIZENSHIP
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${citizenshipMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </span>
                    </NavLink>

                    <div
                      onMouseEnter={openCitizenshipMenu}
                      onMouseLeave={closeCitizenshipMenuWithDelay}
                      className={`fixed left-1/2 top-[calc(var(--site-header-height,88px)+8px)] z-50 w-screen -translate-x-1/2 px-4 md:px-6 transition-all duration-200 ${
                      citizenshipMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                    }`}
                    >
                      <div className="mx-auto max-w-[1400px] rounded-3xl border border-gray-100 bg-white p-5 text-gray-900 shadow-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {citizenshipPrograms.map((program) => renderMegaMenuLink(program, '/citizenship'))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.type === 'residence') {
                return (
                  <div
                    key="residence"
                    className="relative"
                    onMouseEnter={openResidenceMenu}
                    onMouseLeave={closeResidenceMenuWithDelay}
                  >
                    <NavLink
                      to={residenceBasePath}
                      className={`transition-all hover:opacity-70 ${isResidenceRoute ? 'border-b-2 border-current pb-1' : 'opacity-90'}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        RESIDENCE
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${residenceMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </span>
                    </NavLink>

                    <div
                      onMouseEnter={openResidenceMenu}
                      onMouseLeave={closeResidenceMenuWithDelay}
                      className={`fixed left-1/2 top-[calc(var(--site-header-height,88px)+8px)] z-50 w-screen -translate-x-1/2 px-4 md:px-6 transition-all duration-200 ${
                      residenceMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                    }`}
                    >
                      <div className="mx-auto max-w-[1400px] rounded-3xl border border-gray-100 bg-white p-5 text-gray-900 shadow-2xl">
                        <div className="grid grid-cols-4 gap-3">
                          {residencePrograms.map((program) =>
                            renderMegaMenuLink(program, '/residence')
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              const { to, label, end } = item;

              return (
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
              );
            })}
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
          {navLinks.map((item) => {
            if (item.type === 'citizenship') {
              return (
                <div key="citizenship-mobile" className="w-full">
                  <button
                    onClick={() => setCitizenshipMenuOpen((prev) => !prev)}
                    className={`w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-left transition-all hover:text-[#C9A84C] ${
                      isCitizenshipRoute ? 'text-[#C9A84C]' : 'text-gray-900'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>CITIZENSHIP</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${citizenshipMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </span>
                  </button>

                  <div className={`w-full overflow-hidden transition-all duration-300 ${citizenshipMenuOpen ? 'max-h-[700px]' : 'max-h-0'}`}>
                    {citizenshipPrograms.map((program) => (
                      <NavLink
                        key={program.slug}
                        to={`/citizenship/${program.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block w-full py-3 pl-4 border-b border-gray-100 text-xs font-bold tracking-[0.12em] transition-all ${
                            isActive ? 'text-[#C9A84C]' : 'text-gray-700 hover:text-[#C9A84C]'
                          }`
                        }
                      >
                        {program.menuLabel}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            if (item.type === 'residence') {
              return (
                <div key="residence-mobile" className="w-full">
                  <button
                    onClick={() => setResidenceMenuOpen((prev) => !prev)}
                    className={`w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-left transition-all hover:text-[#C9A84C] ${
                      isResidenceRoute ? 'text-[#C9A84C]' : 'text-gray-900'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>RESIDENCE</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${residenceMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </span>
                  </button>

                  <div className={`w-full overflow-hidden transition-all duration-300 ${residenceMenuOpen ? 'max-h-[900px]' : 'max-h-0'}`}>
                    {residencePrograms.map((program) => (
                      <NavLink
                        key={program.slug}
                        to={`/residence/${program.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block w-full py-3 pl-4 border-b border-gray-100 text-xs font-bold tracking-[0.12em] transition-all ${
                            isActive ? 'text-[#C9A84C]' : 'text-gray-700 hover:text-[#C9A84C]'
                          }`
                        }
                      >
                        {program.menuLabel}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            const { to, label, end } = item;

            return (
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
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
