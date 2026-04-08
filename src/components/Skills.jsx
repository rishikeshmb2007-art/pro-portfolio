import React from 'react';

function Skills() {
  const mySkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'Java', 'Basic DSA', 'Git & GitHub'];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 bg-white/[0.02] rounded-[3rem]">
      <p className="text-center text-cyan-500 font-mono text-xs mb-4 uppercase tracking-widest">// 02. My Tech Stack</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {mySkills.map(skill => (
          <div key={skill} className="p-6 border border-white/5 rounded-2xl bg-slate-900/50 text-center font-bold text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition cursor-default shadow-lg hover:-translate-y-1">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;