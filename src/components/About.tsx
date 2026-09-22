import React from 'react';
import { GraduationCap, Award, Compass, Target } from 'lucide-react';

export const About: React.FC = () => {
  const infoCards = [
    {
      id: 'info-card-education',
      title: 'Education',
      value: 'B.Tech Computer Science Engineering',
      icon: GraduationCap,
      color: 'text-cyan-400',
      borderGlow: 'hover:border-cyan-500/40',
      badge: 'Academic Path',
    },
    {
      id: 'info-card-level',
      title: 'Current Level',
      value: 'First-Year Student',
      icon: Compass,
      color: 'text-sky-400',
      borderGlow: 'hover:border-sky-500/40',
      badge: 'Stage',
    },
    {
      id: 'info-card-goal',
      title: 'Career Goal',
      value: 'AI Engineer',
      icon: Target,
      color: 'text-blue-400',
      borderGlow: 'hover:border-blue-500/40',
      badge: 'Aspiration',
    },
    {
      id: 'info-card-focus',
      title: 'Focus',
      value: 'Programming • Computer Science • Artificial Intelligence',
      icon: Award,
      color: 'text-indigo-400',
      borderGlow: 'hover:border-indigo-500/40',
      badge: 'Active Priority',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Profile Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto mb-14">
          <div
            id="about-bio-card"
            className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm relative overflow-hidden shadow-xl"
          >
            {/* Ambient accent stripe */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-blue-600" />

            <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                I'm <span className="font-semibold text-white">Harshavardhan</span>, a first-year B.Tech
                Computer Science Engineering student and an aspiring AI Engineer. I'm currently building my
                foundation in programming and computer science while exploring the world of Artificial
                Intelligence.
              </p>
              <p>
                At this stage of my journey, my focus is on learning programming concepts, creating
                beginner-friendly projects, improving problem-solving skills, and gradually moving toward
                Artificial Intelligence and Machine Learning.
              </p>
            </div>
          </div>
        </div>

        {/* Four Small Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 transition-all duration-300 ${card.borderGlow} hover:-translate-y-1 hover:bg-slate-900/80 group shadow-lg flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-400 tracking-wide font-sans mb-1">
                    {card.title}
                  </h3>
                </div>

                <div className="mt-2">
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {card.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
