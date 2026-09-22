import React from 'react';
import { Target, ChevronRight, Bot, BookOpen, Hammer, Sparkles, TrendingUp, Cpu } from 'lucide-react';
import { RoadmapStep } from '../types';

export const CareerGoal: React.FC = () => {
  const steps: { step: string; icon: any; title: string; desc: string; isTarget?: boolean; isCurrent?: boolean }[] = [
    {
      step: '01',
      icon: BookOpen,
      title: 'Learn',
      desc: 'Programming & CS fundamentals',
      isCurrent: true,
    },
    {
      step: '02',
      icon: Hammer,
      title: 'Build',
      desc: 'Beginner & intermediate projects',
      isCurrent: true,
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Experiment',
      desc: 'AI concepts & ML models',
    },
    {
      step: '04',
      icon: TrendingUp,
      title: 'Improve',
      desc: 'Optimization & problem solving',
    },
    {
      step: '05',
      icon: Cpu,
      title: 'Specialize',
      desc: 'Deep learning & neural networks',
    },
    {
      step: '06',
      icon: Bot,
      title: 'AI Engineer',
      desc: 'Real-world intelligent systems',
      isTarget: true,
    },
  ];

  return (
    <section id="career-goal" className="py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Long-Term Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            My Career Goal
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3 mb-6" />

          {/* Main Text */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white shadow-xl shadow-cyan-950/30">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Aspiring AI Engineer
            </span>
            <span className="text-2xl sm:text-3xl">🤖</span>
          </div>

          {/* Description */}
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed mt-6 font-normal">
            My long-term goal is to become an AI Engineer. I want to build a strong foundation in
            programming, mathematics, Machine Learning, Deep Learning, and Artificial Intelligence and
            eventually create intelligent solutions for real-world problems.
          </p>
        </div>

        {/* Visual Roadmap: Learn → Build → Experiment → Improve → Specialize → AI Engineer */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Strategic Growth Pipeline
            </span>
          </div>

          <div
            id="roadmap-container"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  id={`roadmap-step-${item.step}`}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center group ${
                    item.isTarget
                      ? 'bg-gradient-to-b from-cyan-950/80 to-blue-950/70 border-cyan-500/60 shadow-xl shadow-cyan-500/10'
                      : item.isCurrent
                      ? 'bg-slate-900/80 border-cyan-500/40 shadow-lg'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Step Number Badge */}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full mb-3 ${
                      item.isTarget
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : item.isCurrent
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    STEP {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105 ${
                      item.isTarget
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-400/30'
                        : item.isCurrent
                        ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
                        : 'bg-slate-800/80 text-slate-400 border border-slate-700/60'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base font-bold font-heading mb-1 ${
                      item.isTarget ? 'text-cyan-300' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-snug">
                    {item.desc}
                  </p>

                  {/* Connected Arrow Indicator for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-cyan-500/60">
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Simple summary banner */}
          <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-mono text-center">
            <span className="text-cyan-400 font-bold">Roadmap:</span>
            <span>Learn → Build → Experiment → Improve → Specialize → AI Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
