import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  FileCode2,
  Palette,
  Sparkles,
  Binary,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Compass,
} from 'lucide-react';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const skills: SkillItem[] = [
    {
      name: 'Programming Fundamentals',
      category: 'Programming',
      status: 'Currently Learning',
      description: 'Variables, data types, conditional branching, loops, functions, and structured problem-solving.',
      iconName: 'Terminal',
    },
    {
      name: 'Python',
      category: 'Programming',
      status: 'Currently Learning',
      description: 'Core syntax, control flow, functions, lists, dictionaries, and beginner problem-solving logic.',
      iconName: 'Code2',
    },
    {
      name: 'HTML',
      category: 'Web',
      status: 'Currently Learning',
      description: 'Document structure, semantic HTML5 elements, forms, input validation, and accessible page markup.',
      iconName: 'FileCode2',
    },
    {
      name: 'CSS',
      category: 'Web',
      status: 'Currently Learning',
      description: 'Responsive styling, Flexbox, box model, modern layouts, and visual presentation.',
      iconName: 'Palette',
    },
    {
      name: 'JavaScript',
      category: 'Web',
      status: 'Exploring',
      description: 'Basic DOM manipulation, event listeners, variables, functions, and interactive web behavior.',
      iconName: 'Sparkles',
    },
    {
      name: 'Computer Science Fundamentals',
      category: 'Core CS',
      status: 'Currently Learning',
      description: 'Number systems, binary logic, introduction to algorithms, and computational thinking fundamentals.',
      iconName: 'Binary',
    },
    {
      name: 'Artificial Intelligence — Learning',
      category: 'AI & ML',
      status: 'Currently Learning',
      description: 'Core concepts of AI, how intelligent agents process data, and modern AI ecosystem exploration.',
      iconName: 'Bot',
    },
    {
      name: 'Machine Learning — Future Focus',
      category: 'AI & ML',
      status: 'Future Focus',
      description: 'Upcoming milestone: linear algebra, statistics, data processing, and supervised learning basics.',
      iconName: 'BrainCircuit',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Terminal':
        return Terminal;
      case 'Code2':
        return Code2;
      case 'FileCode2':
        return FileCode2;
      case 'Palette':
        return Palette;
      case 'Sparkles':
        return Sparkles;
      case 'Binary':
        return Binary;
      case 'Bot':
        return Bot;
      case 'BrainCircuit':
        return BrainCircuit;
      default:
        return Code2;
    }
  };

  const getStatusBadge = (status: SkillItem['status']) => {
    switch (status) {
      case 'Currently Learning':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Currently Learning
          </span>
        );
      case 'Exploring':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/60 text-amber-300 border border-amber-500/30">
            <Compass className="w-3 h-3 text-amber-400" />
            Exploring
          </span>
        );
      case 'Future Focus':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
            <Clock className="w-3 h-3 text-indigo-400" />
            Future Focus
          </span>
        );
    }
  };

  const filteredSkills =
    filter === 'All' ? skills : skills.filter((item) => item.category === filter);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Honest Skill Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills & What I'm Learning
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            As a first-year student, my priority is establishing solid fundamentals rather than claiming
            mastery. Here is an honest view of the technologies I am currently studying and exploring.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Programming', 'Web', 'Core CS', 'AI & ML'].map((category) => (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === category
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconName);
            return (
              <div
                key={skill.name}
                id={`skill-card-${index}`}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    {getStatusBadge(skill.status)}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading tracking-wide group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{skill.category}</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Active Focus
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
