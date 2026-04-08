import React from 'react';

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 font-sans">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-cyan-500 font-mono text-xs mb-4">// 01. WHO AM I?</p>
          <h2 className="text-4xl font-bold mb-6">A Developer with a <span className="text-cyan-400">Vibe Coding Mindset.</span></h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Currently pursuing my BE in Computer Science Engineering (2nd Year) at <b>SRM MCET</b>. 
            I have a strong passion for learning new technologies quickly and understanding the core concepts behind them.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            I don't just write code; I believe in <b>"Vibe Coding"</b> — understanding the 'why' and 'how' behind every tool, 
            and implementing concepts intuitively from scratch.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 rounded-l-3xl"></div>
            <p className="italic text-slate-300 text-lg">"Fast learner. Concept builder. Turning ideas into reality through clean, purposeful code."</p>
        </div>
      </div>
    </section>
  );
}

export default About;