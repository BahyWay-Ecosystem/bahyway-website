// FeaturesSection.tsx - Features showcase
import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Database,
  Layers,
  GitBranch,
  Shield,
  TrendingUp,
  Cpu,
  Globe
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Real-Time Processing',
      description: 'Process 100,000+ particles per second with sub-millisecond latency using Redis hot tier caching.',
      color: '#FFD700',
      stats: '< 1ms'
    },
    {
      icon: <Database size={32} />,
      title: 'Massive Scale',
      description: '1 billion nodes with 8-way parallel partitioning. Built on PostgreSQL for rock-solid reliability.',
      color: '#2196F3',
      stats: '1B Nodes'
    },
    {
      icon: <Layers size={32} />,
      title: 'Hybrid Architecture',
      description: 'Redis for hot data, PostgreSQL for cold storage, Kafka for guaranteed durability. Best of all worlds.',
      color: '#FF9800',
      stats: '3-Tier'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Knowledge Graph',
      description: 'Native graph capabilities with particle-based tracking. Visualize complex relationships in real-time.',
      color: '#9C27B0',
      stats: 'Graph Native'
    },
    {
      icon: <Shield size={32} />,
      title: 'Enterprise Security',
      description: 'ZeroWay security with particle sentinel defense. Self-defending architecture against reverse engineering.',
      color: '#F44336',
      stats: '99.9% Protected'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Intelligent Analytics',
      description: 'Fuzzy logic score engine and AlertWay service. Automatic root cause analysis for inactive nodes.',
      color: '#4CAF50',
      stats: 'AI-Powered'
    },
    {
      icon: <Cpu size={32} />,
      title: 'High Performance',
      description: '8-way color-based partitioning for massive parallelism. 41% less storage, 3-8x faster queries than DV 2.0.',
      color: '#00BCD4',
      stats: '8x Parallel'
    },
    {
      icon: <Globe size={32} />,
      title: 'Multi-Application',
      description: 'Powers 8 applications: NajafWay, WPDWay, BeeMDMWay, OntoWay, ETLWay, SteerWay, AlarmInsight, ZeroWay.',
      color: '#FFEB3B',
      stats: '8 Apps'
    }
  ];

  return (
    <section
      id="features"
      style={{
        padding: '120px 20px',
        background: 'linear-gradient(to bottom, #000, #0a0e1a)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        backgroundImage: 'radial-gradient(circle, #2196F3 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '20px'
          }}>
            Enterprise-Grade Features
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Everything you need to build, scale, and manage
            billion-node knowledge graphs in real-time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        padding: '40px 30px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = feature.color;
        e.currentTarget.style.boxShadow = `0 10px 40px ${feature.color}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div style={{
        width: '70px',
        height: '70px',
        borderRadius: '16px',
        background: `${feature.color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        color: feature.color,
        border: `1px solid ${feature.color}30`
      }}>
        {feature.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '22px',
        fontWeight: '700',
        color: 'white',
        marginBottom: '12px'
      }}>
        {feature.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '15px',
        lineHeight: '1.6',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '20px'
      }}>
        {feature.description}
      </p>

      {/* Stats Badge */}
      <div style={{
        display: 'inline-block',
        padding: '6px 14px',
        background: `${feature.color}20`,
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
        color: feature.color,
        border: `1px solid ${feature.color}40`
      }}>
        {feature.stats}
      </div>

      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: `radial-gradient(circle, ${feature.color}20, transparent)`,
        borderRadius: '50%',
        transform: 'translate(50%, -50%)',
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
}
