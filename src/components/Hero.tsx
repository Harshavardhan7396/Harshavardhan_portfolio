import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium w-fit shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>B.Tech CSE Student • Aspiring AI Engineer</span>
            </div>

            {/* Main Heading & Large Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                Hi, I'm Harshavardhan <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              </h1>
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Aspiring AI Engineer
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I'm a first-year Computer Science Engineering student beginning my journey in technology,
              programming, and Artificial Intelligence. I enjoy learning new concepts, building small
              projects, and continuously improving my technical skills.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-hero-view-projects"
                type="button"
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-lets-connect"
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-cyan-500/40 shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Social Icons Below Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Connect:
              </span>
              <a
                id="hero-social-github"
                href="https://github.com/Harshavardhan7396"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harshavardhan's GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 group flex items-center gap-2"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono hidden sm:inline text-slate-400 group-hover:text-slate-200">
                  Harshavardhan7396
                </span>
              </a>

              <a
                id="hero-social-linkedin"
                href="https://www.linkedin.com/in/harshavardhan-boddu-633b08432/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harshavardhan's LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 group flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono hidden sm:inline text-slate-400 group-hover:text-slate-200">
                  Harshavardhan Boddu
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
