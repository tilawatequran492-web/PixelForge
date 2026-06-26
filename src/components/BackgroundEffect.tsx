import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function BackgroundEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static metadata for a small number of particles once on mount
    const generatedParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020205] select-none pointer-events-none">
      {/* 1. Static Ambient Gradients (High Performance, No Scroll-Lag) */}
      <div 
        className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/8 blur-[120px] mix-blend-screen"
        style={{ willChange: "transform" }}
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-600/8 blur-[140px] mix-blend-screen"
        style={{ willChange: "transform" }}
      />
      <div 
        className="absolute top-[25%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/6 blur-[120px] mix-blend-screen"
        style={{ willChange: "transform" }}
      />

      {/* 2. Soft Orbs (Static for GPU caching and extreme fluid scrolling) */}
      <div 
        className="absolute top-[15%] left-[25%] w-64 h-64 rounded-full bg-purple-500/4 blur-[80px] mix-blend-screen"
        style={{ willChange: "transform" }}
      />
      <div 
        className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-blue-500/4 blur-[90px] mix-blend-screen"
        style={{ willChange: "transform" }}
      />

      {/* 3. Fine Sci-Fi Digital Grid Backdrop (Static and lightweight) */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 4. Fine Static Sparks / Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-indigo-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

