import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, Briefcase, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-8 bg-[#283618] text-[#fefae0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-6xl font-bold mb-6 text-[#dda15e]" style={{ fontFamily: "'Caveat', cursive" }}>
            Let's Work Together
          </h2>
          <p className="text-xl text-[#fefae0] max-w-2xl mx-auto font-light leading-relaxed">
            I am currently looking to join a professional engineering team to improve my practice and contribute my expertise.{' '}
            <span className="relative inline-block text-[#dda15e] font-semibold border-b-2 border-[#dda15e] pb-0.5">
              Also available for freelance opportunities.
              {/* Hand-drawn curved arrow pointing to Khamsat card */}
              <motion.svg
                className="hidden lg:block absolute top-[95%] -right-4 pointer-events-none text-[#dda15e] overflow-visible z-10"
                width="160"
                height="72"
                viewBox="0 0 160 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M140 2 C 175 12, 160 42, 100 52 C 65 58, 40 63, 24 67"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.path
                  d="M37 56 L 22 68 L 38 75"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                />
              </motion.svg>
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.a
            href="mailto:rayan.meziti.bba@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center p-8 bg-[#606c38]/40 rounded-3xl hover:bg-[#606c38] transition-colors border border-[#606c38]/60 group shadow-lg"
          >
            <Mail size={40} className="mb-4 text-[#fefae0] group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <span className="text-sm text-[#fefae0]/80 text-center break-all">rayan.meziti.bba@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rayan-meziti-7029a0260/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center p-8 bg-[#606c38]/40 rounded-3xl hover:bg-[#606c38] transition-colors border border-[#606c38]/60 group shadow-lg"
          >
            <LinkIcon size={40} className="mb-4 text-[#fefae0] group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <span className="text-sm text-[#fefae0]/80 text-center">Connect with me</span>
          </motion.a>

          <motion.a
            href="https://khamsat.com/user/lp11"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center p-8 bg-[#606c38]/40 rounded-3xl hover:bg-[#606c38] transition-colors border border-[#606c38]/60 hover:border-[#dda15e]/70 group shadow-lg"
          >
            <Briefcase size={40} className="mb-4 text-[#dda15e] group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Khamsat</h3>
            <span className="text-sm text-[#fefae0]/80 text-center">SEO & Freelance Profile</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center p-8 bg-[#606c38]/40 rounded-3xl hover:bg-[#606c38] transition-colors border border-[#606c38]/60 group shadow-lg cursor-pointer"
            onClick={() => {navigator.clipboard.writeText('expiargz'); alert('Discord username copied to clipboard!');}}
          >
            <MessageSquare size={40} className="mb-4 text-[#fefae0] group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Discord</h3>
            <span className="text-sm text-[#fefae0]/80 text-center">expiargz</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
