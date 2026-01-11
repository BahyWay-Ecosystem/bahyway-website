// useParticleStats.ts - Real-time particle statistics
import { useState, useEffect } from 'react';

interface ParticleStats {
  totalNodes: number;
  activeGems: number;
  particlesPerSecond: number;
  uptime: number;
}

export function useParticleStats(): ParticleStats {
  const [stats, setStats] = useState<ParticleStats>({
    totalNodes: 1000000000,
    activeGems: 15000000,
    particlesPerSecond: 100000,
    uptime: 99.9
  });

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setStats(prev => ({
        totalNodes: prev.totalNodes,
        activeGems: prev.activeGems + Math.floor(Math.random() * 1000),
        particlesPerSecond: 95000 + Math.floor(Math.random() * 10000),
        uptime: 99.9 + Math.random() * 0.09
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return stats;
}
