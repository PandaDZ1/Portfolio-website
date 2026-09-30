import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import BackgroundGradient from './BackgroundGradient';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGradient />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col items-center"
        >
          <p className="text-sm md:text-lg font-semibold text-[#bc6c25] mb-4 tracking-[0.25em] uppercase">
            Hello, I am
          </p>
          <div className="grid grid-cols-1 grid-rows-1 items-start justify-items-center mb-6 w-full">
            {/* Reserved layout space so the typewriter never shifts or juggles the content below */}
            <div
              aria-hidden="true"
              className="col-start-1 row-start-1 invisible select-none pointer-events-none text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-center"
            >
              Meziti Rayane Aymane_
            </div>
            <h1 className="col-start-1 row-start-1 text-5xl md:text-7xl lg:text-8xl font-black text-[#1b2812] tracking-tight leading-tight text-center">
              <Typewriter
                words={['Meziti Rayane Aymane']}
                loop={1}
                cursor
                cursorStyle='_'
                cursorColor="#bc6c25"
                typeSpeed={100}
                delaySpeed={1000}
              />
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl text-[#2e3f20] font-medium mb-8 max-w-2xl mx-auto">
            Full-Stack Web Developer based in Algeria. Building backends, databases, and modern web interfaces.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#1b2812] text-[#fefae0] rounded-full font-medium hover:bg-[#344424] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-[#1b2812] text-[#1b2812] rounded-full font-medium hover:bg-[#1b2812] hover:text-[#fefae0] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-[#1b2812] flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-[#1b2812] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
