import React from 'react';
import heroData from '../../data/hero-sections.json';

// Import assets
import homeVideo from '../../assets/video/hero-video.mp4';
import citizenshipBg from '../../assets/images/citizenship.png';
import flagAsset from '../../assets/flags/grenada-flag.png';

const assetMap = {
  homeVideo,
  citizenshipBg,
  flagAsset,
};

const Hero = ({ page = 'home' }) => {
  const content = heroData[page];
  const isCitizenshipPage = page === 'citizenship';
  const heroContentMaxWidthClass = 'max-w-[1400px]';

  if (!content) return null;

  const {
    title,
    description,
    primaryButton,
    secondaryButton,
    background,
    flag,
    showBlueEffect,
  } = content;

  return (
    <div className="w-full bg-gray-50 p-2 md:p-[10px]">
      <section
        className={`relative w-full h-[95svh] md:h-auto md:min-h-[820px] flex flex-col justify-end md:flex-row ${isCitizenshipPage ? 'md:items-end md:justify-start' : 'md:items-center md:justify-start'} py-0 md:py-8 px-0 md:px-20 rounded-[28px] overflow-hidden shadow-2xl`}
        style={{ fontFamily: "'Helvetica Now Display', 'Inter', sans-serif" }}
      >
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {background.type === 'video' ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center scale-105"
            >
              <source src={assetMap[background.src]} type="video/mp4" />
            </video>
          ) : (
            <img
              src={assetMap[background.src]}
              alt="Hero Background"
              className="w-full h-full object-cover object-center"
            />
          )}

          {/* Desktop Overlay: Left-side gradient for text visibility */}
          <div
            className={`absolute inset-0 hidden md:block ${isCitizenshipPage ? 'bg-gradient-to-l from-black/60 via-black/20 to-transparent' : 'bg-gradient-to-r from-black/60 via-black/20 to-transparent'}`}
          />
          
          {/* Mobile Overlay: bottom-heavy gradient so text is readable at bottom */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Blue effect for content background if specified */}
          {showBlueEffect && (
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-soft-light" />
          )}

          {/* Subtle Global Darkener for extra contrast */}
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Content */}
        <div className={`relative z-10 w-full ${heroContentMaxWidthClass} mx-auto px-6 md:px-0 pb-12 md:pb-0`}>
          {/* Inner content block */}
          <div
            className={`flex flex-col text-left md:max-w-[70%] ${isCitizenshipPage ? 'gap-4 md:gap-3' : 'gap-6 md:gap-4'}`}
          >
            <div className={`flex flex-col ${isCitizenshipPage ? 'gap-3 md:gap-4' : 'gap-4 md:gap-6'}`}>
              <h1
                className={`font-bold uppercase tracking-normal text-white drop-shadow-lg whitespace-pre-line ${
                  isCitizenshipPage
                    ? 'text-[24px] leading-[115%] md:text-[42px] md:leading-[110%]'
                    : 'text-[28px] leading-[115%] md:text-[50px] md:leading-[110%]'
                }`}
              >
                {title}
              </h1>

              <p
                className={`text-white font-bold  tracking-normal max-w-2xl opacity-95 ${
                  isCitizenshipPage
                    ? 'text-[12px] leading-[145%] md:text-[15px] md:leading-[155%]'
                    : 'text-[14px] leading-[150%] md:text-[18px] md:leading-relaxed'
                }`}
              >
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-row items-stretch w-full md:w-auto ${
                isCitizenshipPage ? 'gap-2 md:gap-3' : 'gap-3 md:gap-5'
              }`}
            >
              <button
                className={`flex-1 rounded-[10px] bg-[#C9A84C] hover:bg-[#b5933c] hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-white transition-all duration-300 ease-out shadow-xl flex items-center justify-center font-sans font-normal uppercase tracking-wider ${
                  isCitizenshipPage
                    ? 'md:flex-none md:w-[220px] h-[48px] md:h-[58px] text-[14px] md:text-[18px]'
                    : 'md:flex-none md:w-[200px] h-[58px] md:h-[60px] text-sm md:text-[18px]'
                }`}
              >
                {primaryButton}
              </button>
              <button
                className={`flex-1 rounded-[10px] bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-gray-900 transition-all duration-300 ease-out shadow-xl flex items-center justify-center font-sans font-normal uppercase tracking-wider ${
                  isCitizenshipPage
                    ? 'md:flex-none md:min-w-[220px] md:w-auto px-6 h-[48px] md:h-[58px] text-[14px] md:text-[18px]'
                    : 'md:flex-none md:min-w-[200px] md:w-auto px-8 h-[58px] md:h-[60px] text-sm md:text-[18px]'
                }`}
              >
                {secondaryButton}
              </button>
            </div>

            {/* Flag if provided */}
            {flag && (
              <div className={`${isCitizenshipPage ? 'mt-1 md:mt-3' : 'mt-2 md:mt-6'}`}>
                <img
                  src={assetMap[flag]}
                  alt="Flag"
                  className={`h-auto object-contain drop-shadow-xl ${isCitizenshipPage ? 'w-[100px] md:w-[140px]' : 'w-[120px] md:w-[180px]'}`}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
