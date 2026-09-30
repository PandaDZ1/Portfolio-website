import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-24 bg-[#283618] dark:bg-[#0f150c] text-[#fefae0] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-16 relative"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#dda15e] mb-2 block font-mono">
            Get In Touch
          </span>
          <h2 className="text-6xl font-bold mb-6 text-[#dda15e]" style={{ fontFamily: "'Caveat', cursive" }}>
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-[#fefae0] max-w-2xl mx-auto font-light leading-relaxed">
            I am currently looking to join a professional engineering team to improve my practice and contribute my expertise.{' '}
            <span className="relative inline-block text-[#dda15e] font-bold border-b-2 border-[#dda15e] pb-0.5">
              Also available for freelance opportunities.
            </span>
          </p>
        </motion.div>

        {/* Contact Cards: Khamsat is FIRST in DOM (1st in phone column just under text), Email is 1st on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5 pt-8">
          
          {/* 1. KHAMSAT (1st on phone, centered on tablet, 5th on desktop) */}
          <motion.a
            href="https://khamsat.com/user/lp11"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 sm:order-5 sm:col-span-2 sm:max-w-sm sm:mx-auto lg:max-w-none lg:col-span-1 relative flex flex-col items-center p-6 bg-[#606c38]/40 dark:bg-[#1a2515] rounded-3xl hover:bg-[#606c38] dark:hover:bg-[#25351e] transition-all duration-300 border-2 border-[#dda15e] hover:border-[#f4a261] group shadow-xl hover:-translate-y-1.5 w-full text-center"
          >
            {/* 1. PHONE VIEW ARROW: Clean minimal vertical chevron pointer */}
            <div className="sm:hidden absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none text-[#dda15e] z-10">
              <motion.svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="drop-shadow-[0_2px_8px_rgba(221,161,94,0.45)]"
              >
                <path
                  d="M 14 3 L 14 21"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 8 15 L 14 22 L 20 15"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* 2. TABLET VIEW ARROW: Chic angled curved arc */}
            <div className="hidden sm:block lg:hidden absolute -top-12 left-1/2 -translate-x-1/2 w-[140px] h-[48px] pointer-events-none text-[#dda15e] z-20">
              <motion.svg
                viewBox="0 0 140 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible drop-shadow-[0_2px_10px_rgba(221,161,94,0.35)]"
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <circle cx="16" cy="10" r="2.5" fill="currentColor" opacity="0.9" />
                <path
                  d="M 18 10 C 45 4, 75 10, 70 36"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 60 25 L 70 37 L 80 25"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* 3. DESKTOP VIEW ARROW: Sleek, fluid designer swooping vector curve */}
            <div className="hidden lg:block absolute bottom-[calc(100%+8px)] right-[calc(50%-22px)] w-[270px] xl:w-[310px] h-[80px] pointer-events-none text-[#dda15e] z-20">
              <motion.svg
                viewBox="0 0 310 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible drop-shadow-[0_2px_12px_rgba(221,161,94,0.4)]"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                {/* Subtle starting anchor dot */}
                <circle cx="12" cy="16" r="2.5" fill="currentColor" opacity="0.9" />
                {/* Fluid calligraphic designer curve */}
                <path
                  d="M 14 16 C 75 4, 150 8, 215 22 C 255 30, 282 44, 288 66"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Sharp, modern arrowhead */}
                <path
                  d="M 275 52 L 288 67 L 297 50"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Freelance Badge */}
            <span className="absolute -top-3 px-3 py-0.5 bg-[#dda15e] text-[#283618] text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
              Freelance
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#dda15e]/20 text-[#dda15e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase size={24} />
            </div>
            <h3 className="text-lg font-bold mb-1 flex items-center gap-1">
              Khamsat <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </h3>
            <span className="text-[12px] text-[#dda15e] font-semibold mb-1">Seller Profile</span>
            <span className="text-[11px] text-[#fefae0]/80">SEO & Web Projects</span>
          </motion.a>

          {/* 2. EMAIL (2nd on phone column, 4th on desktop row) */}
          <motion.a
            href="mailto:contact@rayanmeziti.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-4 sm:order-4 flex flex-col items-center px-2 py-6 sm:px-3 bg-[#606c38]/30 dark:bg-[#151f11] rounded-3xl hover:bg-[#606c38]/70 dark:hover:bg-[#1f2d19] transition-all duration-300 border border-[#606c38]/60 dark:border-white/10 group shadow-lg hover:-translate-y-1 w-full text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#fefae0]/10 text-[#fefae0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <span className="text-[10.5px] sm:text-[11px] xl:text-[12px] font-sans font-semibold tracking-tight text-[#dda15e] group-hover:underline block w-full whitespace-nowrap overflow-hidden text-ellipsis">
              contact@rayanmeziti.com
            </span>
            <span className="text-[11px] text-[#fefae0]/70 mt-1">Direct inquiries</span>
          </motion.a>

          {/* 3. GITHUB (3rd on phone column, 1st on desktop row) */}
          <motion.a
            href="https://github.com/PandaDZ1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-3 lg:order-1 sm:order-1 flex flex-col items-center p-6 bg-[#606c38]/30 dark:bg-[#151f11] rounded-3xl hover:bg-[#606c38]/70 dark:hover:bg-[#1f2d19] transition-all duration-300 border border-[#606c38]/60 dark:border-white/10 group shadow-lg hover:-translate-y-1 w-full text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#fefae0]/10 text-[#fefae0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1 flex items-center gap-1">
              GitHub <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </h3>
            <span className="text-[12px] font-mono text-[#dda15e] font-semibold mb-1">@PandaDZ1</span>
            <span className="text-[11px] text-[#fefae0]/70">Open Source Code</span>
          </motion.a>

          {/* 4. LINKEDIN (4th on phone column, 2nd on desktop row) */}
          <motion.a
            href="https://www.linkedin.com/in/rayan-meziti-7029a0260/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-4 lg:order-2 sm:order-2 flex flex-col items-center p-6 bg-[#606c38]/30 dark:bg-[#151f11] rounded-3xl hover:bg-[#606c38]/70 dark:hover:bg-[#1f2d19] transition-all duration-300 border border-[#606c38]/60 dark:border-white/10 group shadow-lg hover:-translate-y-1 w-full text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#fefae0]/10 text-[#fefae0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1 flex items-center gap-1">
              LinkedIn <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </h3>
            <span className="text-[12px] font-semibold text-[#dda15e] mb-1">Rayan Meziti</span>
            <span className="text-[11px] text-[#fefae0]/70">Connect with me</span>
          </motion.a>

          {/* 5. DISCORD (5th on phone column, 3rd on desktop row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="order-5 lg:order-3 sm:order-3 flex flex-col items-center p-6 bg-[#606c38]/30 dark:bg-[#151f11] rounded-3xl hover:bg-[#606c38]/70 dark:hover:bg-[#1f2d19] transition-all duration-300 border border-[#606c38]/60 dark:border-white/10 group shadow-lg cursor-pointer hover:-translate-y-1 w-full text-center"
            onClick={() => {
              navigator.clipboard.writeText('expiargz');
              alert('Discord username "expiargz" copied to clipboard!');
            }}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#fefae0]/10 text-[#fefae0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1">Discord</h3>
            <span className="text-[12px] font-mono text-[#dda15e] font-semibold mb-1">expiargz</span>
            <span className="text-[11px] text-[#fefae0]/70">Click to copy</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
