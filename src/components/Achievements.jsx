import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '🏆',
    title: 'Completed Full Stack Web Dev Bootcamp',
    org: 'Self-Directed · 2024',
    description:
      'Mastered the complete MERN-adjacent stack — HTML, CSS, JavaScript, React, and Firebase — by building real-world projects from scratch, proving self-driven learning and execution.',
    tags: ['React', 'Firebase', 'JavaScript'],
    color: 'from-cyan-500/20 to-transparent',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
    badge: 'text-cyan-400',
  },
  {
    icon: '🧩',
    title: 'Open Source Contributor & GitHub Active',
    org: 'GitHub · 2024–Present',
    description:
      'Maintained a consistent GitHub commit streak with active version-controlled projects. Practiced clean code, branching strategies, and collaborative development best practices.',
    tags: ['Git', 'Open Source', 'GitHub'],
    color: 'from-purple-500/20 to-transparent',
    border: 'border-purple-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
    badge: 'text-purple-400',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-28 relative">
      {/* Background glow */}
      <div className="absolute left-10 top-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-cyan-500 font-mono text-xs mb-3 uppercase tracking-widest">// 04. Milestones</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Achievements &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Highlights
          </span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className={`relative p-7 rounded-3xl bg-gradient-to-r ${item.color} border ${item.border} ${item.glow} transition-all duration-400 group overflow-hidden backdrop-blur-sm`}
          >
            {/* Shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full" />

            <div className="flex flex-col md:flex-row md:items-center gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className={`font-mono text-xs ${item.badge} bg-white/5 border border-white/10 px-3 py-1 rounded-full flex-shrink-0`}>
                    {item.org}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-mono text-slate-500 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
