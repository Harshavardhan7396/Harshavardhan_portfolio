import React from 'react';
import { GraduationCap, Calendar, BookOpen, Layers } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl mx-auto">
          <div
            id="education-card-btech"
            className="relative p-8 sm:p-10 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
          >
            {/* Glowing vertical marker */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-wide">
                    B.Tech — Computer Science Engineering
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Level: <strong className="text-white font-semibold">First Year</strong>
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Status: Currently Pursuing
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="self-start sm:self-center">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                  Active Enrollment
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
              Currently pursuing B.Tech in Computer Science Engineering while developing my foundation in
              programming, computer science, and emerging technologies.
            </p>

            {/* Foundational Pillars */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">Foundational Studies</div>
                <div className="text-xs text-slate-300">Programming Logic & Syntactic Structures</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">Analytical Thinking</div>
                <div className="text-xs text-slate-300">Problem Solving & Algorithmic Basics</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">Tech Exploration</div>
                <div className="text-xs text-slate-300">Early Artificial Intelligence Concepts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
