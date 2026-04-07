import React, { useState } from 'react';
import { auth } from '../firebase'; // Namma setup panna firebase file
import { signInWithEmailAndPassword } from 'firebase/auth';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Page refresh aaguratha thadukka
    setError(''); // Palaiya errors-a clear panna
    
    try {
      // Firebase kooda check pandrom
      await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome Admin! 🎉 Login Successful.");
      // Next step-la inga namma Dashboard-ku redirect pannuvom
    } catch (err) {
      setError("Invalid Email or Password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-slate-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Admin Login</h2>
        
        {error && <p className="text-red-400 text-sm mb-4 text-center bg-red-900/30 p-2 rounded">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">Email ID</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-blue-500"
              placeholder="admin@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition-colors shadow-lg shadow-blue-500/30"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;