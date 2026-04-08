import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './ContactSection.jsx';

function Portfolio() {
  return (
    <div className="bg-[#020817] text-[#e2e8f0] min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-slate-600 text-xs font-mono border-t border-white/5 mt-10">
        DESIGNED & CODED BY RISHIKESH MB • 2026
      </footer>
    </div>
  );
}

export default Portfolio;