import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-5 flex justify-between items-center bg-[#020817]/80 backdrop-blur-md border-b border-white/5">
      <div className="font-mono text-xl font-bold text-cyan-400">&lt;RMB /&gt;</div>
      <ul className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest uppercase text-slate-500">
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;