import React from 'react';
import { Terminal, Globe, Cpu, Bot, Check, ArrowRight } from 'lucide-react';
import { JourneyCard } from '../types';

export const LearningJourney: React.FC = () => {
  const journeyCards: (JourneyCard & { icon: any; statusText: string; isCurrent?: boolean })[] = [
    {
      number: '01',
      title: 'Programming',
      description:
        'Learn programming fundamentals, logic, conditions, loops, functions, and problem solving.',
      topics: ['Python Syntax', 'Control Flow', 'Functions & Scope', 'Algorithmic Thinking'],
      icon: Terminal,
      statusText: 'Active Phase',
      isCurrent: true,
    },
    {
      number: '02',
      title: 'Web Development',
      description: 'Learn HTML, CSS, and JavaScript and build interactive websites.',
      topics: ['Semantic HTML5', 'Responsive CSS', 'DOM Events', 'Interactive Layouts'],
      icon: Globe,
      statusText: 'Active Phase',
      isCurrent: true,
    },
    {
      number: '03',
      title: 'Computer Science',
      description:
        'Strengthen knowledge of algorithms, data structures, and core computer science concepts.',
      topics: ['Data Structures', 'Search & Sort', 'Complexity Basics', 'Computer Architecture'],
      icon: Cpu,
      statusText: 'Ongoing Milestone',
    },
    {
      number: '04',
      title: 'Artificial Intelligence',
      description:
        'Gradually move toward Machine Learning, Deep Learning, and Artificial Intelligence.',
      topics: ['Math for ML', 'Supervised Learning', 'Neural Architectures', 'AI Applications'],
      icon: Bot,
      statusText: 'Future Goal',
    },
  ];

  return (
    <section id="learning-journey" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Milestones & Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            My Learning Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A transparent overview of the sequential milestones shaping my undergraduate development.
            Each step represents focused study and deliberate practice.
          </p>
        </div>

        {/* 4 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {journeyCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                id={`journey-card-${card.number}`}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Number & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-cyan-400/90 tracking-tighter">
                      {card.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                        card.isCurrent
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      {card.statusText}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Key focus chips */}
                <div className="pt-4 border-t border-slate-800/60">
                  <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">Key Areas:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {card.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/60 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
