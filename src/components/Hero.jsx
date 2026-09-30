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
          <p className="text-sm md:text-lg font-semibold text-[#bc6c25] dark:text-[#dda15e] mb-4 tracking-[0.25em] uppercase">
            Hello, I am
          </p>
          <div className="grid grid-cols-1 grid-rows-1 items-start justify-items-center mb-6 w-full">
            {/* Reserved layout space so typewriter doesn't shift */}
            <div
              aria-hidden="true"
              className="col-start-1 row-start-1 invisible select-none pointer-events-none text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-center"
            >
              Meziti Rayane Aymane_
            </div>
            <h1 className="col-start-1 row-start-1 text-5xl md:text-7xl lg:text-8xl font-black text-[#1b2812] dark:text-[#fefae0] tracking-tight leading-tight text-center transition-colors">
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
          <h2 className="text-xl md:text-2xl text-[#2e3f20] dark:text-[#ccd5ae] font-medium mb-8 max-w-2xl mx-auto transition-colors">
            Full-Stack Web Developer based in Algeria. Building backends, databases, and modern web interfaces.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#1b2812] dark:bg-[#dda15e] text-[#fefae0] dark:text-[#1b2516] rounded-full font-bold hover:bg-[#344424] dark:hover:bg-[#bc6c25] dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-[#1b2812] dark:border-[#dda15e] text-[#1b2812] dark:text-[#dda15e] rounded-full font-bold hover:bg-[#1b2812] dark:hover:bg-[#dda15e] hover:text-[#fefae0] dark:hover:text-[#1b2516] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-[#1b2812] dark:border-[#dda15e] flex justify-center p-2 transition-colors">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-[#1b2812] dark:bg-[#dda15e] rounded-full"
          />
        </div>
      </motion.div>

      {/* Barely Noticeable Gentle Wavy Divider (Moves softly with the gradient) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <motion.div
          animate={{
            x: [0, -45, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="w-[115%] -ml-[7%]"
        >
          <svg
            viewBox="0 0 1600 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 md:h-16 text-[#fefae0] dark:text-[#151c11] transition-colors duration-500 block"
            preserveAspectRatio="none"
          >
            {/* Subtle soft ambient wave underlayer */}
            <path
              d="M0,35 C320,55 540,15 800,32 C1060,50 1280,18 1600,35 L1600,70 L0,70 Z"
              fill="currentColor"
              opacity="0.35"
            />
            {/* Main soft wavy boundary into About section */}
            <path
              d="M0,48 C280,26 560,56 840,38 C1120,22 1380,50 1600,42 L1600,70 L0,70 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
