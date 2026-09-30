import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fefae0] text-[#283618] flex flex-col items-center justify-center relative overflow-hidden font-mono">
      <motion.div
        key="content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 
          className="text-7xl md:text-9xl font-bold text-[#606c38] mb-6"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Blog
        </h1>
        <div className="inline-block bg-[#283618] text-[#fefae0] px-8 py-4 rounded-full text-2xl font-bold mb-10 shadow-2xl transform -rotate-2">
          Coming Soon
        </div>
        <p className="text-xl mb-12 max-w-lg mx-auto text-gray-600">
          I'm working on some exciting content about web development, SEO strategies, and backend infrastructure. Stay tuned!
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 border-2 border-[#283618] text-[#283618] font-bold rounded-lg hover:bg-[#283618] hover:text-[#fefae0] transition-colors duration-300"
        >
          &larr; Back to Home
        </Link>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#606c38] rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#dda15e] rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
