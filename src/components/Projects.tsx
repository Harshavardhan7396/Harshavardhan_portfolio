import React, { useState } from 'react';
import { Code, Terminal, Clock, Sparkles, ExternalLink, Play, Check } from 'lucide-react';
import { ProjectItem } from '../types';
import { InteractiveProjectModal } from './InteractiveProjectModal';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'project-grade-calc',
      title: 'Student Grade Calculator',
      description:
        "A beginner-friendly project that calculates a student's grade based on their marks. This project helped me understand programming logic, user input, conditions, and output.",
      technology: 'Python',
      badge: 'Beginner Project',
      type: 'grade-calc',
      pythonSnippet: `# Student Grade Calculator
def calculate_grade(marks):
    if marks >= 90:
        return "Grade A+ (Outstanding)"
    elif marks >= 80:
        return "Grade A (Very Good)"
    elif marks >= 70:
        return "Grade B (Good)"
    elif marks >= 60:
        return "Grade C (Satisfactory)"
    elif marks >= 40:
        return "Grade D (Pass)"
    else:
        return "Grade F (Needs Improvement)"

# User Input & Execution
student_marks = float(input("Enter marks obtained: "))
result = calculate_grade(student_marks)
print(f"Final Grade: {result}")`,
    },
    {
      id: 'project-voting-calc',
      title: 'Voting Eligibility Calculator',
      description:
        'A beginner project that checks whether a person is eligible to vote based on their age. This project helped me understand conditional statements, logical thinking, and decision-making in programming.',
      technology: 'Python',
      badge: 'Beginner Project',
      type: 'voting-calc',
      pythonSnippet: `# Voting Eligibility Calculator
def check_voting_eligibility(age):
    MINIMUM_VOTING_AGE = 18
    if age >= MINIMUM_VOTING_AGE:
        return True, "Eligible to vote!"
    else:
        years_left = MINIMUM_VOTING_AGE - age
        return False, f"Ineligible. Wait {years_left} more year(s)."

# User Input & Evaluation
user_age = int(input("Enter your age: "))
is_eligible, message = check_voting_eligibility(user_age)
print(message)`,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Hands-on projects built while learning fundamental programming concepts and core computational logic.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              id={`card-${proj.id}`}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header: Project Index & Badges */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-semibold text-cyan-400 tracking-widest uppercase">
                    PROJECT 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                      {proj.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                      {proj.technology}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>

                {/* Mini Code Logic Feature Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6 font-mono text-xs text-slate-400 space-y-1.5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Terminal className="w-3.5 h-3.5" /> Core Concept:
                    </span>
                    <span className="text-[11px] text-slate-400">Python 3</span>
                  </div>
                  <p className="text-slate-300">
                    {proj.type === 'grade-calc'
                      ? 'Conditionals (if-elif-else), arithmetic thresholds & formatted output'
                      : 'Relational operators, decision branching & age boundary validation'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                {/* Primary Button: As instructed, no fake project URL -> display "Project Link Coming Soon" */}
                <div
                  id={`btn-status-${proj.id}`}
                  className="px-4 py-2.5 rounded-lg bg-slate-800/80 text-slate-400 font-medium text-xs sm:text-sm border border-slate-700/60 inline-flex items-center gap-2 cursor-default"
                >
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Project Link Coming Soon</span>
                </div>

                {/* Interactive Demo Launcher to preview genuine logic */}
                <button
                  id={`btn-demo-${proj.id}`}
                  type="button"
                  onClick={() => setActiveProject(proj)}
                  className="px-4 py-2.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/60 text-cyan-300 hover:text-white font-medium text-xs sm:text-sm border border-cyan-500/30 hover:border-cyan-400/50 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Preview Logic & Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Card */}
        <div className="max-w-3xl mx-auto">
          <div
            id="card-future-projects"
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-cyan-950/20 to-slate-900/80 border border-cyan-500/20 text-center relative overflow-hidden shadow-lg"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
              More Projects Coming Soon 🚀
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              I'm currently learning new technologies and programming concepts. As I continue my journey,
              I will add more projects to my portfolio.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <InteractiveProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
