import React from 'react';
import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import LampToggle from './LampToggle';

const skills = [
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'React', icon: 'react' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Bash', icon: 'bash' },
  { name: 'Express', icon: 'expressjs' },
];

export default function About() {
  const doubledSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="about" className="py-24 bg-[#fefae0] dark:bg-[#151c11] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Lamp Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 mb-16">
          
          {/* Left Side: About Me text + Profile Picture on same row */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#dda15e] mb-3 block font-mono">
              Background & Skills
            </span>

            {/* Same Row: 'About Me' on left, Profile Picture positioned just above the end of the description */}
            <div className="flex items-center justify-between max-w-2xl mx-auto lg:mx-0 mb-5">
              <h2 className="text-6xl sm:text-7xl font-bold text-[#283618] dark:text-[#fefae0] transition-colors leading-none" style={{ fontFamily: "'Caveat', cursive" }}>
                About Me
              </h2>

              {/* Tilted Profile Picture sitting just above the end of the description with glow underneath */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.08 }}
                className="relative shrink-0 pr-1 sm:pr-2"
              >
                {/* Ambient glow halo directly underneath */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-8 bg-[#dda15e] opacity-80 blur-xl rounded-full pointer-events-none -z-10 animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-[#dda15e]/40 blur-md -z-10" />

                <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-[#bc6c25] to-[#dda15e] shadow-[0_12px_28px_rgba(221,161,94,0.45)] transform rotate-[6deg] transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#1c2617] ring-2 ring-[#dda15e]/80">
                    <img
                      src="https://avatars.hsoubcdn.com/6a9a01cf4dc83fe69d01fbb445c9d30f?s=256"
                      alt="Rayan Meziti"
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-lg text-[#606c38] dark:text-[#a3b18a] max-w-2xl mx-auto lg:mx-0 transition-colors leading-relaxed">
              I am a passionate software engineer focused on building robust, scalable, and beautiful web applications. 
              I thrive in translating complex requirements into simple, elegant, and effective technical solutions.
            </p>
          </motion.div>

          {/* Right Side: The Lamp with neon handwritten prompt (Rigidly locked width so no layout shift) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-60 sm:w-64 shrink-0 flex flex-col items-center justify-center pt-2"
          >
            <LampToggle showPrompt={true} />
          </motion.div>

        </div>

        {/* Skills Defiler (Marquee) */}
        <div className="mt-8 overflow-hidden relative w-full h-36 glass dark:border-white/10 rounded-3xl flex items-center shadow-lg">
          <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-[#fefae0] dark:from-[#151c11] to-transparent z-10 pointer-events-none transition-colors duration-500" />
          <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-[#fefae0] dark:from-[#151c11] to-transparent z-10 pointer-events-none transition-colors duration-500" />
          
          <div className="animate-marquee gap-16 px-8 items-center">
            {doubledSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center min-w-[120px] group"
              >
                <div 
                  className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white dark:bg-[#1c2617] border border-black/5 dark:border-white/10 shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-2 mb-3 p-4"
                >
                  <StackIcon name={skill.icon} />
                </div>
                <span className="font-semibold text-sm text-[#283618] dark:text-[#e9edc9] group-hover:text-[#dda15e] transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
