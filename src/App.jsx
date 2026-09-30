import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#fefae0] dark:bg-[#151c11] min-h-screen font-sans text-[#283618] dark:text-[#fefae0] selection:bg-[#606c38] selection:text-[#fefae0] transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
