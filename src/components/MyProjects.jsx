import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-cyan-500 font-mono text-xs mb-4 uppercase tracking-widest">// 03. Portfolio</p>
      <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>
      
      {loading ? (
        <div className="animate-pulse text-cyan-500 font-mono">Fetching data from Firebase...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition group hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-cyan-500 text-sm hover:underline font-mono">
                  View Project ↗
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;