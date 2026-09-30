import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'wazayefksa',
    title: 'Wazayefksa Job Board',
    description: 'AI-powered recruitment platform designed for the Saudi job market with automated job collection, GPT rewriting, and multi-role dashboards.',
    thumbnail: '/projects/wazayefksa/Screenshot 2026-07-19 020501.webp',
  },
  {
    id: 'binaqar',
    title: 'Binaqar Platform',
    description: 'Full-scale Saudi real estate marketplace featuring Telr payment integration, custom CRM, and affiliate marketing architecture.',
    thumbnail: '/projects/binaqar/homepage.webp',
  },
  {
    id: 'algerietelecom',
    title: 'Algérie Télécom Platform',
    description: 'Centralized software deployment and automated distribution platform engineered for Algérie Télécom workstations.',
    thumbnail: '/projects/algerietelecom/photo_2026-05-05_00-41-20.webp',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pt-24 pb-14 bg-[#fefae0] dark:bg-[#151c11] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-[#283618] dark:text-[#fefae0] transition-colors" style={{ fontFamily: "'Caveat', cursive" }}>
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1c2617] rounded-3xl overflow-hidden shadow-xl border border-[#283618]/10 dark:border-[#dda15e]/15 group hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <Link to={`/project/${project.id}`} className="block relative w-full h-64 overflow-hidden bg-gray-100 dark:bg-black/30 group">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} — ${project.description}`}
                    title={`${project.title} — Full-Stack Web Architecture Case Study by Rayan Meziti`}
                    width="600"
                    height="338"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#283618]/5 p-6 text-center group-hover:bg-[#283618]/10 transition-colors">
                    <span className="text-[#283618]/60 font-bold text-lg mb-1">{project.title}</span>
                    <span className="text-[#606c38] text-xs uppercase tracking-wider">Click to view details</span>
                  </div>
                )}
              </Link>

              {/* Project Details */}
              <div className="p-8 flex flex-col flex-grow">
                <Link to={`/project/${project.id}`}>
                  <h3 className="text-3xl font-bold text-[#283618] dark:text-[#fefae0] mb-4 group-hover:text-[#dda15e] transition-colors">
                    {project.title}
                  </h3>
                </Link>
                
                <p className="text-[#606c38] dark:text-[#a3b18a] mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-[#283618] dark:text-[#fefae0] font-black hover:text-[#dda15e] dark:hover:text-[#dda15e] transition-colors uppercase tracking-wider text-sm"
                  >
                    View Project <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
