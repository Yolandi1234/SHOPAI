const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  size: 2 + (index % 4) * 2,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 19) % 100}%`,
  duration: `${7 + (index % 5)}s`,
  delay: `${(index % 6) * 0.7}s`,
  color: index % 2 === 0 ? "rgba(95, 213, 255, 0.95)" : "rgba(255, 91, 207, 0.95)",
}));

export function ParticleField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="noise-overlay" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full blur-[1px] animate-drift"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
            background: particle.color,
            boxShadow: `0 0 18px ${particle.color}`,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(95,213,255,0.16),transparent_66%)] blur-3xl" />
      <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,79,203,0.12),transparent_68%)] blur-3xl" />
      <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(95,213,255,0.12),transparent_72%)] blur-3xl" />
    </div>
  );
}
