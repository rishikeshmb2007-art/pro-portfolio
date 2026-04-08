import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020817] px-6 font-mono relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto z-10 text-center md:text-left pt-20">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-cyan-400 text-lg mb-4">
          &gt; Hi, my name is
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Rishikesh.
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          Full Stack & Frontend Developer.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-sans mx-auto md:mx-0">
          I'm a 2nd-year BE-CSE student at SRM MCET. Fast learner, tech enthusiast, and a vibe coder who loves translating ideas into interactive web experiences.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex justify-center md:justify-start gap-4">
          <a href="#projects" className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded hover:bg-cyan-500 transition shadow-[0_0_15px_rgba(8,145,178,0.4)]">View My Work</a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold rounded hover:bg-cyan-500/10 transition">Let's Talk</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;