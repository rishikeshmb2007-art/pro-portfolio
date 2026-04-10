import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-[100] px-8 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? 'bg-[#020817]/70 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,255,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        className="font-mono text-xl font-bold relative group"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">&lt;RMB /&gt;</span>
        <span className="absolute -inset-2 rounded-lg bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-md transition-all duration-300"></span>
      </motion.a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {links.map((link, i) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              className={`relative text-[11px] font-bold tracking-widest uppercase transition-all duration-300 group ${
                active === link ? 'text-cyan-400' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                active === link ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          </motion.li>
        ))}
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <a
            href="https://www.linkedin.com/in/rishikesh-mb-a8ba8b34a/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-[11px] font-bold tracking-widest uppercase border border-cyan-500/40 text-cyan-400 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            Hire Me ↗
          </a>
        </motion.li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 group"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#020817]/95 backdrop-blur-xl border-b border-cyan-500/10 px-8 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
