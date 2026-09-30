import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="absolute w-full z-50 top-6 px-4 sm:px-6 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto bg-[#fefae0]/90 backdrop-blur-xl border border-[#283618]/20 rounded-full shadow-xl px-8 py-3 flex items-center justify-between min-w-[300px] w-full max-w-4xl relative">

        {/* Desktop menu */}
        <div className="hidden md:flex justify-center w-full space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id === 'blog' ? '/blog' : `/#${link.id}`}
              className={`transition-all duration-300 font-black text-xl hover:text-[#dda15e] relative group ${
                link.id === 'home' ? 'text-[#283618]' : 'text-[#283618]'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-1 bg-[#dda15e] transition-all duration-300 rounded-full ${
                  link.id === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#283618] hover:text-[#dda15e] focus:outline-none transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-[120%] left-0 w-full bg-[#fefae0] shadow-2xl rounded-3xl border border-[#283618]/10 overflow-hidden flex flex-col pointer-events-auto">
            <div className="px-4 pt-4 pb-6 space-y-2 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id === 'blog' ? '/blog' : `/#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-xl text-xl font-black transition-colors ${
                    link.id === 'home'
                      ? 'text-[#dda15e] bg-[#606c38]/10 border-b-2 border-[#dda15e]'
                      : 'text-[#283618] hover:bg-[#606c38]/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
