import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fefae0] dark:bg-[#151c11] text-[#283618] dark:text-[#fefae0] flex flex-col items-center justify-center relative overflow-hidden font-mono px-4 transition-colors duration-500">
      
      <motion.div
        key="content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-lg"
      >
        <h1 
          className="text-7xl md:text-9xl font-bold text-[#606c38] dark:text-[#dda15e] mb-6"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Blog
        </h1>
        
        <h2 className="inline-block bg-[#283618] dark:bg-[#dda15e] text-[#fefae0] dark:text-[#151c11] px-8 py-3.5 rounded-full text-2xl font-bold mb-8 shadow-2xl transform -rotate-2">
          Coming Soon
        </h2>

        <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-[#ccd5ae] leading-relaxed font-sans">
          Currently building an automated SaaS platform. Stay tuned for the launch and engineering breakdowns!
        </p>

        <Link 
          to="/" 
          className="inline-block px-8 py-3 border-2 border-[#283618] dark:border-[#dda15e] text-[#283618] dark:text-[#dda15e] font-bold rounded-xl hover:bg-[#283618] hover:text-[#fefae0] dark:hover:bg-[#dda15e] dark:hover:text-[#151c11] transition-colors duration-300"
        >
          &larr; Back to Home
        </Link>
      </motion.div>

      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#606c38] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#dda15e] rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
