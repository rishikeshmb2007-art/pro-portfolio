import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH PROJECTS FROM FIREBASE
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

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-cyan-500 font-mono animate-pulse">
            Fetching from Database...
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-800/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 pr-8">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* THE BULLETPROOF BUTTON */}
                {project.link && (
                  <div className="mt-auto pt-4">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.link, "_blank");
                      }}
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer relative z-50"
                    >
                      View Project ↗
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;