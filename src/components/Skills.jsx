import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '🌐', color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/30', glow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]' },
  { name: 'CSS', icon: '🎨', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400/20 to-yellow-500/10', border: 'border-yellow-400/30', glow: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400/20 to-cyan-500/10', border: 'border-cyan-400/30', glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]' },
  { name: 'Firebase', icon: '🔥', color: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-400/30', glow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]' },
  { name: 'Java', icon: '☕', color: 'from-red-500/20 to-red-600/10', border: 'border-red-500/30', glow: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]' },
  { name: 'Basic DSA', icon: '🧠', color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/30', glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
  { name: 'Git & GitHub', icon: '🐙', color: 'from-slate-400/20 to-slate-500/10', border: 'border-slate-400/30', glow: 'hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]' },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-cyan-500 font-mono text-xs mb-3 uppercase tracking-widest">// 02. My Tech Stack</p>
        <h2 className="text-4xl font-bold text-white">
          Tools I{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Build With
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.04 }}
            className={`relative p-6 rounded-2xl border ${skill.border} bg-gradient-to-br ${skill.color} backdrop-blur-sm text-center cursor-default group overflow-hidden transition-all duration-300 ${skill.glow}`}
          >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />

            <div className="text-3xl mb-3">{skill.icon}</div>
            <p className="font-bold text-white text-sm tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Currently learning tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="flex justify-center mt-10"
      >
        <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 border border-white/10 px-5 py-2.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Currently exploring: Tailwind CSS v4 · Next.js · TypeScript
        </span>
      </motion.div>
    </section>
  );
}

export default Skills;
