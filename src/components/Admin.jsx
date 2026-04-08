import React, { useState } from 'react';
import { auth, db } from '../firebase'; // db import pannirukkom
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore'; // Database tools

function Admin() {
  // Login States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Project Form States
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

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
      // Firebase 'projects' collection-la data save panrom
      await addDoc(collection(db, 'projects'), {
        title: title,
        description: desc,
        link: link,
        createdAt: new Date()
      });
      setStatusMsg('✅ Project Added Successfully!');
      setTitle(''); setDesc(''); setLink(''); // Form-a clear panrom
    } catch (err) {
      setStatusMsg('❌ Error: ' + err.message);
    }
  };

  // --- LOGGED IN VIEW (DASHBOARD) ---
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#020817] text-white p-10 font-mono">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
            <h1 className="text-3xl text-cyan-400 font-bold">Admin Panel</h1>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500/10 text-red-500 rounded border border-red-500/20">
              Logout
            </button>
          </div>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-xl mb-6 font-bold text-slate-300">Add New Project</h2>
            <form onSubmit={handleAddProject} className="flex flex-col gap-4">
              <input 
                type="text" placeholder="Project Title" required
                className="p-3 bg-slate-900 border border-white/10 rounded outline-none"
                value={title} onChange={(e) => setTitle(e.target.value)}
              />
              <textarea 
                placeholder="Project Description" required rows="3"
                className="p-3 bg-slate-900 border border-white/10 rounded outline-none"
                value={desc} onChange={(e) => setDesc(e.target.value)}
              />
              <input 
                type="url" placeholder="Project Link (e.g., https://github.com/...)" required
                className="p-3 bg-slate-900 border border-white/10 rounded outline-none"
                value={link} onChange={(e) => setLink(e.target.value)}
              />
              <button type="submit" className="py-3 bg-cyan-600 font-bold rounded hover:bg-cyan-500 transition">
                Publish Project
              </button>
              {statusMsg && <p className="text-center text-cyan-400 mt-2">{statusMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- LOGIN VIEW ---
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center font-mono">
      <form onSubmit={handleLogin} className="bg-white/5 p-10 rounded-2xl border border-white/10 w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-cyan-400 mb-2 text-center">&lt; Secure Login /&gt;</h2>
        <input 
          type="email" placeholder="Admin Email" required
          className="p-3 bg-slate-900 border border-white/10 rounded outline-none text-white"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" required
          className="p-3 bg-slate-900 border border-white/10 rounded outline-none text-white"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-500">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Admin;