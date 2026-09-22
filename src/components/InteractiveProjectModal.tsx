import React, { useState } from 'react';
import { X, Play, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface Props {
  project: ProjectItem | null;
  onClose: () => void;
}

export const InteractiveProjectModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  // Grade Calculator State
  const [marks, setMarks] = useState<number>(85);
  const [calculatedGrade, setCalculatedGrade] = useState<{
    grade: string;
    remarks: string;
    log: string[];
  } | null>(null);

  // Voting Calculator State
  const [age, setAge] = useState<number>(19);
  const [votingResult, setVotingResult] = useState<{
    eligible: boolean;
    message: string;
    log: string[];
  } | null>(null);

  const runGradeCalculator = () => {
    const score = Number(marks);
    const logs: string[] = [
      `>>> student_marks = ${score}`,
      `>>> Checking conditional grade criteria...`,
    ];

    let grade = '';
    let remarks = '';

    if (score >= 90) {
      grade = 'A+ (Outstanding)';
      remarks = 'Excellent academic mastery!';
      logs.push(`>>> condition (score >= 90) -> True`);
    } else if (score >= 80) {
      grade = 'A (Very Good)';
      remarks = 'Demonstrates strong understanding and consistency.';
      logs.push(`>>> condition (score >= 80) -> True`);
    } else if (score >= 70) {
      grade = 'B (Good)';
      remarks = 'Good work with room for advanced concepts.';
      logs.push(`>>> condition (score >= 70) -> True`);
    } else if (score >= 60) {
      grade = 'C (Satisfactory)';
      remarks = 'Meets core foundational requirements.';
      logs.push(`>>> condition (score >= 60) -> True`);
    } else if (score >= 40) {
      grade = 'D (Pass)';
      remarks = 'Passing mark. Recommended to review logic principles.';
      logs.push(`>>> condition (score >= 40) -> True`);
    } else {
      grade = 'F (Needs Improvement)';
      remarks = 'Focus on reviewing core fundamentals.';
      logs.push(`>>> condition (score < 40) -> True (else branch)`);
    }

    logs.push(`>>> Result: Grade = ${grade}`);
    setCalculatedGrade({ grade, remarks, log: logs });
  };

  const runVotingCalculator = () => {
    const userAge = Number(age);
    const logs: string[] = [
      `>>> applicant_age = ${userAge}`,
      `>>> Minimum voting age required: 18`,
    ];

    if (userAge >= 18) {
      logs.push(`>>> condition (applicant_age >= 18) -> True`);
      logs.push(`>>> Result: Eligible to vote in democratic elections.`);
      setVotingResult({
        eligible: true,
        message: 'Eligible to Vote! Congratulations, you meet the age requirement (18+).',
        log: logs,
      });
    } else {
      const yearsRemaining = 18 - userAge;
      logs.push(`>>> condition (applicant_age >= 18) -> False`);
      logs.push(`>>> Result: Ineligible. ${yearsRemaining} year(s) remaining until eligibility.`);
      setVotingResult({
        eligible: false,
        message: `Not yet eligible. You will be eligible in ${yearsRemaining} year${yearsRemaining > 1 ? 's' : ''}.`,
        log: logs,
      });
    }
  };

  return (
    <div
      id="project-interactive-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-heading">
              {project.title} — Python Logic Runner
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Interactive Simulation Panel */}
          {project.type === 'grade-calc' && (
            <div className="p-5 rounded-xl bg-slate-950/60 border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  Interactive Test: Student Marks (0 - 100)
                </span>
                <span className="text-xs text-slate-400">Python input simulation</span>
              </div>

              <div className="flex items-center gap-4">
                <input
                  id="input-marks-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={marks}
                  onChange={(e) => setMarks(Number(e.target.value))}
                  className="flex-1 accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="w-16 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-center font-mono font-bold text-white text-sm">
                  {marks}%
                </div>
                <button
                  type="button"
                  onClick={runGradeCalculator}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Run Logic
                </button>
              </div>

              {calculatedGrade && (
                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-700/80 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Computed Grade:</span>
                    <span className="text-sm font-bold text-cyan-300 font-mono">
                      {calculatedGrade.grade}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{calculatedGrade.remarks}</p>

                  <div className="mt-3 pt-2 border-t border-slate-800 font-mono text-[11px] text-slate-400 space-y-0.5">
                    {calculatedGrade.log.map((line, i) => (
                      <div key={i} className="text-emerald-400/90">{line}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {project.type === 'voting-calc' && (
            <div className="p-5 rounded-xl bg-slate-950/60 border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  Interactive Test: Applicant Age
                </span>
                <span className="text-xs text-slate-400">Python conditional simulation</span>
              </div>

              <div className="flex items-center gap-4">
                <input
                  id="input-age-slider"
                  type="range"
                  min="5"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="flex-1 accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="w-16 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-center font-mono font-bold text-white text-sm">
                  {age} yrs
                </div>
                <button
                  type="button"
                  onClick={runVotingCalculator}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Evaluate
                </button>
              </div>

              {votingResult && (
                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-700/80 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Eligibility Status:</span>
                    <span
                      className={`text-sm font-bold font-mono ${
                        votingResult.eligible ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {votingResult.eligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{votingResult.message}</p>

                  <div className="mt-3 pt-2 border-t border-slate-800 font-mono text-[11px] text-slate-400 space-y-0.5">
                    {votingResult.log.map((line, i) => (
                      <div key={i} className="text-emerald-400/90">{line}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Python Code Snippet View */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Source Structure (Python 3)</span>
              <span className="text-cyan-400">beginner_project.py</span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>{project.pythonSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Verified Beginner Logic
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
