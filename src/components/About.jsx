import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const stats = [
    { label: 'Year of Study', value: '2nd' },
    { label: 'Technologies', value: '8+' },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28 font-sans relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-cyan-500 font-mono text-xs mb-3 tracking-widest uppercase">// 01. WHO AM I?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          A Developer with a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Vibe Coding Mindset.
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-slate-400 leading-relaxed text-[15px]">
            Currently pursuing my BE in Computer Science Engineering (2nd Year) at{' '}
            <span className="text-cyan-400 font-semibold">SRM MCET</span>.
            I have a strong passion for learning new technologies quickly and understanding the core concepts behind them.
          </p>
          <p className="text-slate-400 leading-relaxed text-[15px]">
            I don't just write code; I believe in{' '}
            <span className="text-white font-semibold">"Vibe Coding"</span>{' '}
            — understanding the 'why' and 'how' behind every tool, and implementing concepts intuitively from scratch.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-2xl border border-white/5 bg-white/[0.03] text-center hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-500">{value}</div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono tracking-wider">{label}</div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://www.linkedin.com/in/rishikesh-mb-a8ba8b34a/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 mt-2 text-sm font-mono text-cyan-400 border border-cyan-500/30 px-5 py-2.5 rounded-full hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-all duration-300"
          >
            View LinkedIn Profile ↗
          </motion.a>
        </motion.div>

        {/* Right: Quote card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden">
            {/* Glowing left bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-3xl shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

            <div className="absolute top-4 right-4 text-6xl text-cyan-500/10 font-serif leading-none select-none">"</div>

            <p className="italic text-slate-300 text-lg leading-relaxed pl-3">
              "Fast learner. Concept builder. Turning ideas into reality through clean, purposeful code."
            </p>
            <div className="mt-6 flex items-center gap-3 pl-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">R</div>
              <div>
                <p className="text-white text-sm font-semibold">Rishikesh MB</p>
                <p className="text-cyan-500/70 text-xs font-mono">Frontend Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;