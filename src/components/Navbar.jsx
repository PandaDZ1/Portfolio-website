import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'Services', id: 'services', path: '/' },
    { name: 'Projects', id: 'projects', path: '/' },
    { name: 'Blog', id: 'blog', path: '/blog' },
    { name: 'Contact', id: 'contact', path: '/' },
  ];

  const handleNavClick = (e, link) => {
    if (link.id === 'blog') {
      setIsOpen(false);
      return; // Standard React Router navigation to /blog
    }

    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      if (link.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(link.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Keep URL clean without ugly hashtag
      window.history.replaceState(null, '', '/');
    } else {
      // Coming from /blog or /project/:id, navigate to home and scroll cleanly
      navigate('/', { state: { scrollTo: link.id } });
    }
  };

  // Scroll to section when navigated from another page
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
        window.history.replaceState(null, '', '/');
      }, 100);
    }
  }, [location]);

  const isActive = (link) => {
    if (link.id === 'blog') return location.pathname === '/blog';
    if (location.pathname === '/' && link.id === 'home') return true;
    return false;
  };

  return (
    <>
      {/* DESKTOP NAVBAR: Absolute top-6, clean centered pill, NO hashtags in URL */}
      <div className="hidden md:flex absolute w-full z-50 top-6 px-6 justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-[#fefae0]/90 dark:bg-[#1a2315]/90 backdrop-blur-xl border border-[#283618]/20 dark:border-[#dda15e]/25 rounded-full shadow-xl px-12 py-3.5 flex items-center justify-center space-x-12 min-w-[340px] max-w-4xl transition-all duration-300">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.id}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`transition-all duration-300 font-black text-xl hover:text-[#dda15e] relative group py-0.5 ${
                  active
                    ? 'text-[#dda15e]'
                    : 'text-[#283618] dark:text-[#fefae0]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-1 bg-[#dda15e] transition-all duration-300 rounded-full ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* MOBILE HEADER: Absolute top right hamburger */}
      <div className="md:hidden absolute top-5 right-5 z-50 pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="w-12 h-12 rounded-full bg-[#fefae0]/90 dark:bg-[#1a2315]/90 backdrop-blur-xl border border-[#283618]/20 dark:border-[#dda15e]/25 text-[#283618] dark:text-[#dda15e] flex items-center justify-center shadow-xl active:scale-90 transition-transform focus:outline-none"
        >
          <div className="w-5 h-4 flex flex-col justify-between items-center relative">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-0.5 bg-current rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-0.5 bg-current rounded-full origin-center"
            />
          </div>
        </button>
      </div>

      {/* FULLSCREEN MOBILE MENU: Takes 100vw and 100vh, translucent buttons, night mode slider */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 w-screen h-screen z-50 bg-[#fefae0]/95 dark:bg-[#151c11]/95 backdrop-blur-2xl flex flex-col justify-center items-center px-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[#283618] dark:text-[#fefae0] text-xl font-bold focus:outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Navigation buttons: clean translucent buttons, no emojis, no svgs, no titles */}
            <div className="w-full max-w-xs space-y-4">
              {navLinks.map((link, idx) => {
                const active = isActive(link);
                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`block w-full py-4 px-6 rounded-2xl text-center text-2xl font-black transition-all backdrop-blur-md border ${
                        active
                          ? 'bg-[#283618] text-[#dda15e] dark:bg-[#dda15e] dark:text-[#151c11] border-transparent shadow-lg'
                          : 'bg-black/5 dark:bg-white/5 border-[#283618]/10 dark:border-white/10 text-[#283618] dark:text-[#fefae0] hover:bg-black/10 dark:hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Night mode toggle slider */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex items-center justify-center"
            >
              <button
                type="button"
                onClick={toggleTheme}
                title={isDark ? "Switch to Bright Mode" : "Switch to Dimmed Mode"}
                aria-label="Toggle Night Mode"
                className="relative w-16 h-8 rounded-full bg-[#283618]/20 dark:bg-[#dda15e]/30 border border-[#283618]/25 dark:border-[#dda15e]/40 p-1 transition-colors flex items-center cursor-pointer shadow-inner"
              >
                <motion.div
                  animate={{ x: isDark ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                  className="w-6 h-6 rounded-full bg-[#283618] dark:bg-[#dda15e] shadow-md"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
