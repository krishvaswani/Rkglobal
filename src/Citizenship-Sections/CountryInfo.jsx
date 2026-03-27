import React from 'react';
import citizenAboutImg from '../assets/citizen-about.png';

const CountryInfo = () => {
  return (
    <section id="country-info" className="w-full py-16 md:py-20 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-[2.6rem] font-extrabold text-[#111] uppercase tracking-tight mb-3">
            About Grenada
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Enim id elementum sodales arcu.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 w-full items-stretch">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <h3 className="text-3xl md:text-[32px] font-bold text-[#002668] leading-tight mb-1">
              The Beauty of Grenada
         </h3>
            
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed text-justify">
              Grenada is an island nation located in the southeastern Caribbean that sits 160km north of Venezuela. Famed for its natural beauty, Grenada is comprised of the island of Grenada itself, two smaller islands named 'Carriacou' and 'Petite Martinique', and then a cluster of smaller islands lying just offshore. Grenada is known for its tropical rainforests, beautiful white-sand beaches, and spice production, earning its nickname 'The Island of Spice' due to its strong production of Nutmeg and Mace.
            </p>

            <div className="bg-[#f7f7f7] rounded-[1.2rem] p-5 md:p-6 flex flex-col gap-4 mt-2 border border-gray-100 flex-1 justify-center">
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed text-justify">
                In addition to its famed beauty and economic stability, Grenada is also known for its spirited culture; with strong African roots and French influence, the music, cuisine, and culture of the island is rich and varied. The country is ideal for those seeking a secondary passport in a beautiful nation; offering a quick and efficient <span className="text-[#c9a84c] font-medium">Citizenship by Investment Programme</span>.
              </p>

              <ul className="text-gray-600 text-[15px] md:text-base flex flex-col gap-1.5 pl-3 mt-1">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                  <span>The capital of the country is St. George's</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                  <span>The currency is the Eastern Caribbean Dollar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                  <span>Current population as of 2025: 117,276</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Image & Button */}
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* The white card container with padding and shadow */}
            <div className="bg-white p-3 pb-8 md:p-4 md:pb-10 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative w-full h-full lg:max-w-xl flex flex-col items-stretch">
              <img 
                src={citizenAboutImg} 
                alt="About Grenada" 
                className="w-full h-full min-h-[360px] object-cover rounded-[1.2rem] flex-1"
              />
              
              {/* Button over the image */}
              <button className="absolute bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-[#002668] hover:bg-[#001c4d] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(0,38,104,0.3)] transition-all duration-300 hover:-translate-y-1 active:scale-95 text-[13px] md:text-[14px] tracking-wide w-[75%] max-w-[280px]">
                GET IN TOUCH WITH US
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountryInfo;
