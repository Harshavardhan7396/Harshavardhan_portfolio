import React from 'react';
import { Github, Linkedin, Cpu, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="footer" className="bg-[#050811] border-t border-slate-800/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold">
                <Cpu className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                HARSHAVARDHAN
              </span>
            </div>
            <p className="text-sm font-medium text-cyan-400">
              Aspiring AI Engineer | B.Tech CSE Student
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                id="footer-social-github"
                href="https://github.com/Harshavardhan7396"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harshavardhan on GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                id="footer-social-linkedin"
                href="https://www.linkedin.com/in/harshavardhan-boddu-633b08432/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harshavardhan on LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            © 2026 Harshavardhan. Built with curiosity and code.
          </p>
        </div>
      </div>
    </footer>
  );
};
