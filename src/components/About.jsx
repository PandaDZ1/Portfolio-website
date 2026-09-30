import React from 'react';
import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';

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
  // Duplicate skills to ensure seamless scroll
  const doubledSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="about" className="py-24 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-[#283618] mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
            About Me
          </h2>
          <p className="text-lg text-[#606c38] max-w-3xl mx-auto">
            I am a passionate software engineer focused on building robust, scalable, and beautiful web applications. 
            I thrive in translating complex requirements into simple, elegant, and effective technical solutions.
          </p>
        </motion.div>

        {/* Skills Defiler (Marquee) using pure CSS */}
        <div className="mt-20 overflow-hidden relative w-full h-32 glass rounded-2xl flex items-center">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#fefae0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#fefae0] to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee gap-16 px-8">
            {doubledSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center min-w-[120px] group"
              >
                <div 
                  className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-2 mb-3 p-4"
                >
                  <StackIcon name={skill.icon} />
                </div>
                <span className="font-medium text-[#283618] group-hover:text-[#606c38] transition-colors">
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
