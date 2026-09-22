import React from 'react';
import { Github, Linkedin, ExternalLink, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Reach Out & Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            I'm currently learning, building projects, and exploring the world of Artificial Intelligence.
            Feel free to connect with me and follow my journey.
          </p>
        </div>

        {/* Two Large Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: GitHub */}
          <div
            id="card-social-github"
            className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-100 group-hover:scale-105 group-hover:text-cyan-400 transition-all shadow-md">
                  <Github className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                  Code & Repositories
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                GitHub
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Explore my code repositories, Python practice programs, and initial student projects.
              </p>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-sm text-slate-300 flex items-center justify-between">
                <span className="text-xs text-slate-400">Username:</span>
                <span className="text-cyan-300 font-semibold">Harshavardhan7396</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                id="btn-link-github"
                href="https://github.com/Harshavardhan7396"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold text-sm transition-all duration-200 shadow-md group/btn cursor-pointer"
              >
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div
            id="card-social-linkedin"
            className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:text-blue-300 transition-all shadow-md">
                  <Linkedin className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full">
                  Professional Network
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                LinkedIn
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Connect with me on LinkedIn to track my tech milestones, academic path, and AI progress.
              </p>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-sm text-slate-300 flex items-center justify-between">
                <span className="text-xs text-slate-400">Profile Name:</span>
                <span className="text-sky-300 font-semibold">Harshavardhan Boddu</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                id="btn-link-linkedin"
                href="https://www.linkedin.com/in/harshavardhan-boddu-633b08432/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm transition-all duration-200 shadow-md group/btn cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
