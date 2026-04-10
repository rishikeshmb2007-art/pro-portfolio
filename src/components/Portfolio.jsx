import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './MyProjects';
import Achievements from './Achievements';
import Contact from './ContactSection.jsx';

function Portfolio() {
  return (
    <div className="bg-[#020817] text-[#e2e8f0] min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <About />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Skills />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Projects />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <Achievements />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Contact />

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5 mt-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
        <p className="font-mono text-xs text-slate-600 tracking-widest mb-3">
          DESIGNED & CODED BY{' '}
          <span className="text-cyan-500">RISHIKESH MB</span>{' '}
          · 2026
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://www.linkedin.com/in/rishikesh-mb-a8ba8b34a/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-600 hover:text-cyan-400 font-mono tracking-wider transition-colors duration-300"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.instagram.com/_.rissshi._/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-600 hover:text-pink-400 font-mono tracking-wider transition-colors duration-300"
          >
            Instagram ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
