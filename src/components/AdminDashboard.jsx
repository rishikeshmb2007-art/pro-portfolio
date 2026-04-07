import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'; // Database-la add panna
import { signOut } from 'firebase/auth'; // Logout panna

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [techStack, setTechStack] = useState('');
  const [description, setDescription] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  // Project-a Database-la save panra function
  const handleAddProject = async (e) => {
    e.preventDefault();
    setStatusMsg('Saving...');
    try {
      // 'projects' nu oru collection-la data-va add pandrom
      await addDoc(collection(db, "projects"), {
        title: title,
        techStack: techStack,
        description: description,
        createdAt: new Date()
      });
      setStatusMsg("✅ Project Added Successfully!");
      setTitle(''); setTechStack(''); setDescription(''); // Form-a clear pandrom
      
      // 3 seconds kalichu success message-a maraikka
      setTimeout(() => setStatusMsg(''), 3000); 
    } catch (error) {
      setStatusMsg("❌ Error adding project: " + error.message);
    }
  };

  // Logout function
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Navbar Section */}
      <div className="max-w-4xl mx-auto flex justify-between items-center border-b border-slate-700 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-400">Admin Control Room</h2>
        <button 
          onClick={handleLogout} 
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded font-bold transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Add Project Form */}
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
        <h3 className="text-xl font-semibold mb-6">➕ Add New Project</h3>
        
        {statusMsg && <p className="mb-4 text-green-400 font-medium bg-green-900/20 p-2 rounded">{statusMsg}</p>}

        <form onSubmit={handleAddProject} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Project Title</label>
            <input 
              type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., E-Commerce Website"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Tech Stack</label>
            <input 
              type="text" value={techStack} onChange={(e) => setTechStack(e.target.value)} required
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., React, Tailwind, Firebase"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Description</label>
            <textarea 
              value={description} onChange={(e) => setDescription(e.target.value)} required rows="4"
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="Briefly describe the project..."
            ></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 font-bold rounded mt-4 transition-colors">
            Publish Project to Portfolio
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;