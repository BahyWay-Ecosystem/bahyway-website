// Dashboard.tsx - Floating holographic dashboards
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Activity,
  Database,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Server
} from 'lucide-react';

interface DashboardProps {
  position: 'left' | 'right';
  stats: {
    totalNodes: number;
    activeGems: number;
    particlesPerSecond: number;
    uptime: number;
  };
  selectedSegment: number | null;
}

export default function Dashboard({ position, stats, selectedSegment }: DashboardProps) {
  const [liveStats, setLiveStats] = useState(stats);
  const [isExpanded, setIsExpanded] = useState(false);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        totalNodes: prev.totalNodes,
        activeGems: prev.activeGems + Math.floor(Math.random() * 1000),
        particlesPerSecond: 95000 + Math.floor(Math.random() * 10000),
        uptime: 99.9 + Math.random() * 0.09
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const dashboardStyle: React.CSSProperties = {
    position: 'absolute',
    top: position === 'left' ? '80px' : 'auto',
    bottom: position === 'right' ? '80px' : 'auto',
    [position]: '20px',
    width: '320px',
    background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.95), rgba(20, 25, 40, 0.95))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(33, 150, 243, 0.3)',
    borderRadius: '16px',
    padding: '20px',
    color: 'white',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(33, 150, 243, 0.1)',
    zIndex: 100,
    overflow: 'hidden'
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <motion.div
      style={dashboardStyle}
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Activity size={20} color="#2196F3" />
          <span style={{
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            {position === 'left' ? 'System Metrics' : 'Performance'}
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: '#2196F3',
            cursor: 'pointer',
            fontSize: '12px',
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(33, 150, 243, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
          }}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Total Nodes */}
        <StatCard
          icon={<Database size={18} color="#4CAF50" />}
          label="Total Nodes"
          value={formatNumber(liveStats.totalNodes)}
          color="#4CAF50"
          trend="+0.5%"
        />

        {/* Active Gems */}
        <StatCard
          icon={<Zap size={18} color="#FFD700" />}
          label="Active Gems"
          value={formatNumber(liveStats.activeGems)}
          color="#FFD700"
          trend="+2.3%"
          animated
        />

        {/* Particles/sec */}
        <StatCard
          icon={<TrendingUp size={18} color="#FF9800" />}
          label="Particles/sec"
          value={formatNumber(liveStats.particlesPerSecond)}
          color="#FF9800"
          animated
        />

        {/* Uptime */}
        <StatCard
          icon={<Clock size={18} color="#9C27B0" />}
          label="Uptime"
          value={liveStats.uptime.toFixed(2) + '%'}
          color="#9C27B0"
        />

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '16px',
                marginTop: '8px'
              }}>
                <StatCard
                  icon={<Users size={18} color="#00BCD4" />}
                  label="Concurrent Users"
                  value="1,247"
                  color="#00BCD4"
                />
                <div style={{ height: '12px' }} />
                <StatCard
                  icon={<Server size={18} color="#F44336" />}
                  label="Cluster Nodes"
                  value="24"
                  color="#F44336"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mini Chart (if right dashboard) */}
      {position === 'right' && (
        <div style={{ marginTop: '20px' }}>
          <MiniChart data={liveStats} />
        </div>
      )}

      {/* Pulse indicator */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#4CAF50',
        boxShadow: '0 0 10px #4CAF50',
        animation: 'pulse 2s infinite'
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({
  icon,
  label,
  value,
  color,
  trend,
  animated = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  trend?: string;
  animated?: boolean;
}) {
  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s'
      }}
      whileHover={{
        background: 'rgba(255, 255, 255, 0.05)',
        scale: 1.02
      }}
    >
      <div style={{
        padding: '8px',
        borderRadius: '8px',
        background: `${color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '11px',
          opacity: 0.6,
          marginBottom: '2px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {label}
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: '700',
          color: color,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <motion.span
            animate={animated ? {
              scale: [1, 1.05, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {value}
          </motion.span>
          {trend && (
            <span style={{
              fontSize: '11px',
              color: '#4CAF50',
              fontWeight: '600'
            }}>
              {trend}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Mini Chart Component
function MiniChart({ data }: { data: any }) {
  const chartData = Array.from({ length: 20 }, (_, i) =>
    50 + Math.sin(i * 0.5) * 30 + Math.random() * 20
  );

  return (
    <div style={{
      height: '60px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: '3px',
      padding: '10px',
      background: 'rgba(33, 150, 243, 0.05)',
      borderRadius: '8px'
    }}>
      {chartData.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          style={{
            flex: 1,
            background: 'linear-gradient(to top, #2196F3, #64B5F6)',
            borderRadius: '2px 2px 0 0',
            minHeight: '2px'
          }}
        />
      ))}
    </div>
  );
}
