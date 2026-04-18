import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ─── FIREBASE LOGIC UNTOUCHED ─────────────────────────────────
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  // ─────────────────────────────────────────────────────────────

  const cardColors = [
    { border: 'hover:border-cyan-500/50', glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]', dot: 'bg-cyan-400' },
    { border: 'hover:border-blue-500/50', glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]', dot: 'bg-blue-400' },
    { border: 'hover:border-purple-500/50', glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]', dot: 'bg-purple-400' },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28 relative">
      {/* Background glow */}
      <div className="absolute right-10 top-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-cyan-500 font-mono text-xs mb-3 uppercase tracking-widest">// 03. Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Selected{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Projects
          </span>
        </h2>
      </motion.div>

      {loading ? (
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-cyan-500"
              />
            ))}
          </div>
          <span className="text-cyan-500 font-mono text-sm">Fetching data from Firebase...</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const scheme = cardColors[i % cardColors.length];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`relative p-7 rounded-3xl bg-white/[0.04] border border-white/10 ${scheme.border} ${scheme.glow} transition-all duration-400 group overflow-hidden backdrop-blur-sm`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number badge */}
                <span className="absolute top-5 right-5 font-mono text-xs text-slate-600 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className={`w-2 h-2 rounded-full ${scheme.dot} mb-5 shadow-[0_0_8px_currentColor]`} />

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 pr-8">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
          if (!project.link) {
            e.preventDefault();
            alert("Link is missing in database!");
          }
        }} // <--- Indha line thaan miss aayirukku Boss!
        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5 px-3 py-1.5 rounded-full transition-all duration-300"
      >
        View Project ↗
      </a>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Projects;
