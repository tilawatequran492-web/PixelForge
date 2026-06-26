import React, { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static metadata for particles once on mount to maximize performance and prevent re-renders
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 12 + 12,
      delay: Math.random() * -24,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020205] select-none pointer-events-none">
      {/* 1. Futuristic Slow-Moving Ambient Gradients (GPU-Accelerated) */}
      <div 
        className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/10 blur-[130px] mix-blend-screen"
        style={{
          animation: "drift-slow-left 25s infinite ease-in-out",
          willChange: "transform",
        }}
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen"
        style={{
          animation: "drift-slow-right 30s infinite ease-in-out",
          willChange: "transform",
        }}
      />
      <div 
        className="absolute top-[25%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/8 blur-[130px] mix-blend-screen"
        style={{
          animation: "drift-slow-center 28s infinite ease-in-out",
          willChange: "transform",
        }}
      />

      {/* 2. Floating Neon Soft Orbs (inspired by logo colors) */}
      <div 
        className="absolute top-[15%] left-[25%] w-64 h-64 rounded-full bg-purple-500/5 blur-[90px] mix-blend-screen"
        style={{
          animation: "float-orb-alpha 22s infinite ease-in-out",
          willChange: "transform",
        }}
      />
      <div 
        className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] mix-blend-screen"
        style={{
          animation: "float-orb-beta 26s infinite ease-in-out",
          willChange: "transform",
        }}
      />

      {/* 3. Subtle Futuristic Animated Light Beams (Scanner/Reflection effect) */}
      <div 
        className="absolute inset-y-0 -left-[20%] w-[30%] bg-gradient-to-r from-transparent via-indigo-500/3 to-transparent opacity-60 skew-x-12"
        style={{
          animation: "sweep-light-beam 16s infinite linear",
          willChange: "transform",
        }}
      />

      {/* 4. Fine Sci-Fi Digital Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* 5. GPU-Accelerated Floating Digital Sparks / Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float-particle ${p.duration}s infinite ease-in-out`,
              animationDelay: `${p.delay}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* 6. Embedded Ultra-Smooth Keyframes */}
      <style>{`
        @keyframes sweep-light-beam {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          50% {
            transform: translate3d(400%, 0, 0);
          }
          100% {
            transform: translate3d(400%, 0, 0);
          }
        }
        @keyframes drift-slow-left {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(5%, 3%, 0) scale(1.08);
          }
        }
        @keyframes drift-slow-right {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-4%, -5%, 0) scale(1.05);
          }
        }
        @keyframes drift-slow-center {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1.05);
          }
          50% {
            transform: translate3d(3%, -3%, 0) scale(0.95);
          }
        }
        @keyframes float-orb-alpha {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(40px, -50px, 0) scale(1.15);
          }
        }
        @keyframes float-orb-beta {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1.1);
          }
          50% {
            transform: translate3d(-50px, 40px, 0) scale(0.9);
          }
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.15;
          }
          50% {
            transform: translate3d(15px, -35px, 0);
            opacity: 0.55;
          }
        }
      `}</style>
    </div>
  );
}
