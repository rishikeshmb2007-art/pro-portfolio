import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // 1. FIREBASE LA SAVE PANRA CODE
      await addDoc(collection(db, "messages"), { ...formData, timestamp: new Date() });

      // 2. EMAILJS VAZHIYA GMAIL-KU ANUPPURA CODE
      await emailjs.send(
        'service_oahnp1a',    // 👈 Quotes pottu add panniyachu
        'template_txgrygv',   // 👈 Quotes pottu add panniyachu
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'iPSQzlfUi0C8X9Jxs'   // 👈 Quotes pottu add panniyachu
      );

      setStatus('✅ Message Sent! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
      
    } catch (err) {
      console.error(err);
      setStatus('❌ Error sending message.');
    }
  };

  const inputClass =
    'w-full p-4 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-cyan-500/60 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] outline-none text-white placeholder-slate-600 transition-all duration-300 text-sm font-sans';

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rishikesh-mb-a8ba8b34a/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_.rissshi._/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      color: 'hover:border-pink-500/50 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]',
    },
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-28 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-64 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-cyan-500 font-mono text-xs mb-3 uppercase tracking-widest">// 05. Let's Connect</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Touch
          </span>
        </h2>
        <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
          Have a concept to discuss? Let's vibe code it together. Drop a message or connect on socials.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3"
        >
          <form onSubmit={handleContact} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className={inputClass}
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className={inputClass}
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className={inputClass}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl text-sm tracking-wider hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message ✦</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-sm text-cyan-400 mt-2"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Socials sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-4 pt-2"
        >
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Connect Elsewhere</p>
          {socials.map(({ label, href, icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 group ${color}`}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
              <div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-slate-600 font-mono">@{label === 'Instagram' ? '_.rissshi._' : 'rishikesh-mb'}</p>
              </div>
              <span className="ml-auto text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
            </a>
          ))}

          <div className="mt-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-xs text-slate-600 font-mono uppercase tracking-wider mb-2">Response time</p>
            <p className="text-sm text-slate-300">Usually replies within <span className="text-cyan-400 font-semibold">24 hours</span></p>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-mono">Available for opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;