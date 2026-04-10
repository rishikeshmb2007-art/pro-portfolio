import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  
  // Puthusa add panna state
  const [projects, setProjects] = useState([]);

  // Projects-a load panra function
  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    if (isLoggedIn) fetchProjects();
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (err) {
      alert('Wrong Email or Password!');
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setIsLoggedIn(false);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    setStatusMsg('Uploading...');
    try {
      await addDoc(collection(db, 'projects'), { title, description: desc, link, createdAt: new Date() });
      setStatusMsg('✅ Project Added!');
      setTitle(''); setDesc(''); setLink('');
      fetchProjects(); // Add pannathum list-a refresh panrom
    } catch (err) {
      setStatusMsg('❌ Error: ' + err.message);
    }
  };

  // PUTHU FUNCTION: Delete Project
  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', id));
        fetchProjects(); // Delete pannathum list-a refresh panrom
      } catch (err) {
        alert('Error deleting project');
      }
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#020817] text-white p-10 font-mono">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
            <h1 className="text-3xl text-cyan-400 font-bold">Admin Panel</h1>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500/10 text-red-500 rounded border border-red-500/20 hover:bg-red-500/20 transition">Logout</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* ADD PROJECT FORM */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-fit">
              <h2 className="text-xl mb-6 font-bold text-slate-300">Add New Project</h2>
              <form onSubmit={handleAddProject} className="flex flex-col gap-4">
                <input type="text" placeholder="Project Title" required className="p-3 bg-slate-900 border border-white/10 rounded outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Project Description" required rows="3" className="p-3 bg-slate-900 border border-white/10 rounded outline-none" value={desc} onChange={(e) => setDesc(e.target.value)} />
                <input type="url" placeholder="Project Link" required className="p-3 bg-slate-900 border border-white/10 rounded outline-none" value={link} onChange={(e) => setLink(e.target.value)} />
                <button type="submit" className="py-3 bg-cyan-600 font-bold rounded hover:bg-cyan-500 transition">Publish</button>
                {statusMsg && <p className="text-center text-cyan-400 mt-2">{statusMsg}</p>}
              </form>
            </div>

            {/* MANAGE PROJECTS LIST */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl mb-6 font-bold text-slate-300">Manage Projects</h2>
              <div className="flex flex-col gap-4">
                {projects.map(proj => (
                  <div key={proj.id} className="p-4 bg-slate-900 border border-white/10 rounded flex justify-between items-center">
                    <span className="font-bold truncate pr-4">{proj.title}</span>
                    <button onClick={() => handleDelete(proj.id)} className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition">Delete</button>
                  </div>
                ))}
                {projects.length === 0 && <p className="text-slate-500 text-sm">No projects found.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center font-mono">
      <form onSubmit={handleLogin} className="bg-white/5 p-10 rounded-2xl border border-white/10 w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-cyan-400 mb-2 text-center">&lt; Admin Login /&gt;</h2>
        <input type="email" placeholder="Admin Email" required className="p-3 bg-slate-900 border border-white/10 rounded outline-none text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required className="p-3 bg-slate-900 border border-white/10 rounded outline-none text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-500">Enter</button>
      </form>
    </div>
  );
}

export default Admin;