import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ComingSoon = ({ title }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-32">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#1a3a8a] blur-[120px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#d4af37] blur-[120px]"
        ></motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-gray-500 mb-4 tracking-widest uppercase"
          >
            {title}
          </motion.h2>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold text-[#1a3a8a] mb-8 leading-tight"
        >
          Coming <span className="text-[#d4af37]">Soon</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We are working hard to bring you something extraordinary. Our team is putting the final touches on this page to ensure excellence in every detail.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/" 
            className="group relative px-8 py-4 bg-[#1a3a8a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a3a8a]/40 overflow-hidden"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 bg-white/10 group-hover:scale-x-100 scale-x-0 transition-transform duration-300 origin-left"></div>
          </Link>
          
          <Link 
            to="/contact" 
            className="px-8 py-4 border-2 border-[#1a3a8a] text-[#1a3a8a] rounded-full font-semibold transition-all duration-300 hover:bg-[#1a3a8a] hover:text-white"
          >
            Contact Inquiry
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 flex gap-4"
      >
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="w-3 h-3 rounded-full bg-[#d4af37]/40 animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};

export default ComingSoon;

