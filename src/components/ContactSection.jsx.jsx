import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await addDoc(collection(db, "messages"), { ...formData, timestamp: new Date() });
      setStatus('✅ Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <section id="contact" className="max-w-xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-slate-500">Have a concept to discuss? Let's vibe code it together.</p>
      </div>
      <form onSubmit={handleContact} className="space-y-4">
        <input type="text" placeholder="Your Name" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 outline-none text-white" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Your Email" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 outline-none text-white" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        <textarea placeholder="Your Message" rows="5" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 outline-none text-white" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
        <button type="submit" className="w-full py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition shadow-[0_0_15px_rgba(8,145,178,0.3)]">
          Send Message
        </button>
        {status && <p className="mt-4 text-center font-mono text-sm text-cyan-400">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;