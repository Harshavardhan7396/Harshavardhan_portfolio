import React, { useEffect, useRef } from 'react';

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate neural network nodes
    const nodeCount = 38;
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      layer: number;
      pulse: number;
      pulseSpeed: number;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 2,
        layer: Math.floor(Math.random() * 4),
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Synapse pulses travelling between nodes
    interface Pulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background subtle circular aura
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        width * 0.6
      );
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      gradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.04)');
      gradient.addColorStop(1, 'rgba(7, 12, 24, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Connect nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Random chance to spawn a traveling synaptic signal
            if (Math.random() < 0.003 && pulses.length < 12) {
              pulses.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // Draw and update traveling pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const start = nodes[pulse.fromIndex];
        const end = nodes[pulse.toIndex];
        if (!start || !end) continue;

        const currentX = start.x + (end.x - start.x) * pulse.progress;
        const currentY = start.y + (end.y - start.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off canvas boundaries
        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        n.pulse += n.pulseSpeed;
        const currentRadius = n.radius + Math.sin(n.pulse) * 1.2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(1, currentRadius), 0, Math.PI * 2);

        // Core glow
        if (i % 3 === 0) {
          ctx.fillStyle = '#06b6d4'; // Cyan
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 10;
        } else if (i % 3 === 1) {
          ctx.fillStyle = '#38bdf8'; // Sky blue
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = '#818cf8'; // Indigo
          ctx.shadowColor = '#818cf8';
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="hero-visual-container" className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center">
      {/* Outer ambient glow rings */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-sky-500/5 to-indigo-500/10 blur-xl" />
      
      {/* Visual Frame */}
      <div className="relative w-full h-full rounded-2xl border border-cyan-500/20 bg-slate-950/60 backdrop-blur-md overflow-hidden shadow-2xl shadow-cyan-950/30 flex flex-col">
        {/* Futuristic Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-900/60 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-slate-400 font-medium tracking-wide">ai_neural_core.py</span>
          </div>
          <span className="font-mono text-[10px] text-cyan-400/90 font-medium px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
            MODEL: LEARNING
          </span>
        </div>

        {/* Neural Network Canvas */}
        <div className="relative flex-1 w-full h-full">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Floating Technology HUD Badges */}
          <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-1.5 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-200">Neural Nodes: Active</span>
          </div>

          <div className="absolute bottom-4 left-4 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-lg px-3 py-2 shadow-lg max-w-[210px]">
            <div className="text-[11px] font-mono text-cyan-300 font-medium flex items-center gap-1.5">
              <span>{'<'}CS Foundation{'/>'}</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Algorithms • Logic • Python</div>
          </div>

          <div className="absolute bottom-4 right-4 bg-gradient-to-r from-cyan-950/80 to-blue-950/80 backdrop-blur-md border border-cyan-500/40 rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[10px] font-mono uppercase text-slate-400">Target</div>
            <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
              <span>AI Engineering</span>
              <span className="text-cyan-400">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
