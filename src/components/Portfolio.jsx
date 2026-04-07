import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

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

  const handleContact = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await addDoc(collection(db, "messages"), { ...formData, timestamp: new Date() });
      setStatus('✅ Message Sent!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (err) {
      setStatus('❌ Error.');
    }
  };

  return (
    <div className="bg-[#020817] text-[#e2e8f0] font-['Space_Grotesk']">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-5 flex justify-between items-center bg-[#020817]/80 backdrop-blur-md border-b border-white/5">
        <div className="font-mono text-xl font-bold text-cyan-400">&lt;RMB /&gt;</div>
        <ul className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest uppercase text-slate-500">
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Rishikesh MB
        </h1>
        <p className="text-cyan-400 font-mono tracking-[0.3em] mb-10 text-sm uppercase">Finance • Mathematics • Computer Science</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-3 bg-cyan-600 rounded-full font-bold hover:bg-cyan-500 transition">View My Work</a>
          <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/5 transition">Let's Talk</a>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-500 font-mono text-xs mb-4">// 01. WHO AM I?</p>
            <h2 className="text-4xl font-bold mb-6">A developer with an <span className="text-white">analytical edge.</span></h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              I specialize in bridging complex domains. Whether it's building <b>financial models</b>, 
              performing <b>statistical analysis</b>, or developing <b>web applications</b> using React and Python, 
              I focus on creating data-driven solutions.
            </p>
            <div className="flex gap-6">
              <div><span className="block text-2xl font-bold text-white">10+</span><span className="text-xs text-slate-500 uppercase">Projects</span></div>
              <div><span className="block text-2xl font-bold text-white">3+</span><span className="text-xs text-slate-500 uppercase">Domains</span></div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
             <p className="italic text-slate-300">"Turning complex data into intuitive digital experiences."</p>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 bg-white/[0.02] rounded-[3rem]">
        <p className="text-center text-cyan-500 font-mono text-xs mb-4 uppercase tracking-widest">// 02. My Tech Stack</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Python', 'Firebase', 'Tailwind', 'Streamlit', 'Statistics', 'Pandas', 'SQL'].map(skill => (
            <div key={skill} className="p-6 border border-white/5 rounded-2xl bg-slate-900/50 text-center font-bold text-slate-400 hover:text-white hover:border-cyan-500/50 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROJECTS SECTION (FETCHED FROM FIREBASE) */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-cyan-500 font-mono text-xs mb-4 uppercase tracking-widest">// 03. Portfolio</p>
        <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>
        {loading ? (
          <div className="animate-pulse text-slate-600">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition group">
                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">{project.description}</p>
                <span className="text-[10px] font-mono bg-white/5 px-3 py-1 rounded text-slate-400 uppercase tracking-widest">
                  {project.techStack}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 6. CONTACT SECTION (WORKING BACKEND) */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-slate-500">Have a project in mind? Let's build it together.</p>
        </div>
        <form onSubmit={handleContact} className="space-y-4">
          <input 
            type="text" placeholder="Name" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 outline-none"
            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 outline-none"
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <textarea 
            placeholder="Your Message" rows="5" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 outline-none"
            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
          ></textarea>
          <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition">
            Send Message
          </button>
          {status && <p className="mt-4 text-center font-mono text-sm text-cyan-400">{status}</p>}
        </form>
      </section>

      <footer className="py-12 text-center text-slate-700 text-xs font-mono border-t border-white/5">
        RISHIKESH MB • 2026
      </footer>
    </div>
  );
}

export default Portfolio;