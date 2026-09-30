import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function LampToggle({ className = '', showPrompt = true }) {
  const { isDark, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={isDark ? "Switch to Bright Mode" : "Switch to Dimmed Mode"}
      className={`group relative flex flex-col items-center justify-center select-none cursor-pointer focus:outline-none w-60 sm:w-64 shrink-0 transition-transform ${className}`}
    >
      {/* HANDWRITTEN PROMPT ABOVE THE LAMP WITH FIXED BOUNDING BOX (NO LAYOUT SHIFT) */}
      {showPrompt && (
        <div className="h-16 w-full flex flex-col items-center justify-center text-center mb-1">
          <span 
            className="text-2xl sm:text-3xl font-bold tracking-wide transition-all duration-300 text-[#bc6c25] dark:text-[#dda15e] whitespace-nowrap block leading-tight"
            style={{ 
              fontFamily: "'Caveat', cursive",
              textShadow: isDark 
                ? '0 0 12px rgba(221, 161, 94, 0.8), 0 0 24px rgba(221, 161, 94, 0.4)' 
                : '0 0 10px rgba(188, 108, 37, 0.45)'
            }}
          >
            {isDark ? 'Turn On the Light' : 'Click to Dim the Site'}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#606c38] dark:text-[#dda15e]/80 font-bold whitespace-nowrap block mt-0.5">
            {isDark ? 'Night Mode' : 'Light Mode'}
          </span>
        </div>
      )}

      {/* Rock-solid Simplistic Sketch Lamp (No jiggling, stays firmly in one place) */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
        <img
          src={isDark ? "/lamp-bw-dim.png" : "/lamp-bw-bright.png"}
          alt={isDark ? "Simplistic sketch lamp (dimmed)" : "Simplistic sketch lamp (bright)"}
          className={`w-full h-full object-contain transition-all duration-300 ${
            isDark 
              ? 'invert-[0.9] brightness-125 opacity-90 drop-shadow-[0_2px_14px_rgba(255,255,255,0.2)]' 
              : 'opacity-95 drop-shadow-[0_4px_16px_rgba(221,161,94,0.45)]'
          }`}
        />

        {/* Ambient warm glow pulse when ON */}
        {!isDark && (
          <div className="absolute inset-0 bg-[#dda15e]/25 blur-2xl rounded-full pointer-events-none -z-10 animate-pulse" />
        )}
      </div>

      {/* STYLISH HOVER HINT BOX */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-[102%] left-1/2 -translate-x-1/2 pointer-events-none z-50 whitespace-nowrap"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#283618]/95 dark:bg-[#1a2315]/95 text-[#fefae0] dark:text-[#dda15e] border border-[#dda15e]/30 shadow-2xl backdrop-blur-md text-xs font-bold tracking-wider">
              {isDark ? (
                <>
                  <Sun size={13} className="text-[#dda15e]" />
                  <span>Bright Mode</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="text-[#dda15e]" />
                  <span>Night Mode</span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
