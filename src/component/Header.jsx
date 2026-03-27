import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logoUrl from '../assets/logo.svg';
import footerLogoUrl from '../assets/footer-logo.svg';
import citizenshipPrograms, { defaultCitizenshipSlug } from '../data/citizenshipPrograms';

const Header = () => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [citizenshipMenuOpen, setCitizenshipMenuOpen] = useState(false);
  const location = useLocation();
  const isCitizenshipRoute = location.pathname.startsWith('/citizenship');
  const isTransparentPage = location.pathname === '/' || isCitizenshipRoute;


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
    handleScroll(); // Trigger once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    setCitizenshipMenuOpen(false);
  }, [location.pathname]);

  const shouldShowBg = isScrolled || menuOpen || !isTransparentPage;
  const headerBgClass = shouldShowBg ? 'bg-white/95 shadow-md backdrop-blur-lg' : 'bg-transparent';
  const textColorClass = shouldShowBg ? 'text-gray-900' : 'text-white';
  const currentLogo = shouldShowBg ? footerLogoUrl : logoUrl;
  // iOS/mobile browsers can appear blurry when applying `brightness/invert` filters to SVGs.
  // Applying the filter only from `sm` upwards avoids the blur on small screens.
  const logoFilter = shouldShowBg ? '' : 'sm:brightness-0 sm:invert';
  const logoSizeClass = shouldShowBg ? 'w-[140px] sm:w-[170px] md:w-[200px]' : 'w-[180px] sm:w-[220px] md:w-[263px]';
  const hamburgerColor = shouldShowBg ? '#111' : '#fff';
  const citizenshipBasePath = `/citizenship/${defaultCitizenshipSlug}`;
  const navLinks = [
    { to: '/', label: 'HOME', end: true },
    { type: 'citizenship' },
    { to: '/residence', label: 'RESIDENCE' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerBgClass} ${isVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[1400px] mx-auto w-full p-[10px]">
        <div className="flex items-center justify-between  py-2 pointer-events-auto">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group" onClick={() => setMenuOpen(false)}>
            <img
              src={currentLogo}
              alt="RK Global Immigration Logo"
              className={`${logoSizeClass} h-auto object-contain transition-all duration-300 transform-gpu ${logoFilter}`}
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
                    onMouseEnter={() => setCitizenshipMenuOpen(true)}
                    onMouseLeave={() => setCitizenshipMenuOpen(false)}
                  >
                    <NavLink
                      to={citizenshipBasePath}
                      className={`transition-all hover:opacity-70 ${isCitizenshipRoute ? 'border-b-2 border-current pb-1' : 'opacity-90'}`}
                    >
                      CITIZENSHIP
                    </NavLink>

                    <div className={`absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-5 transition-all duration-200 ${
                      citizenshipMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                    }`}>
                      <div className="rounded-3xl border border-gray-100 bg-white p-4 text-gray-900 shadow-2xl">
                        <div className="grid gap-2">
                          {citizenshipPrograms.map((program) => (
                            <NavLink
                              key={program.slug}
                              to={`/citizenship/${program.slug}`}
                              className={({ isActive }) =>
                                `rounded-2xl px-4 py-3 text-xs tracking-[0.12em] transition-colors ${
                                  isActive ? 'bg-[#002668] text-white' : 'text-gray-800 hover:bg-gray-50'
                                }`
                              }
                            >
                              {program.menuLabel}
                            </NavLink>
                          ))}
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
                    CITIZENSHIP
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
