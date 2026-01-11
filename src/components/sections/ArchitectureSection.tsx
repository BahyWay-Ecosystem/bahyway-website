// ArchitectureSection.tsx - Technical architecture
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Zap } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section style={{
      padding: '120px 20px',
      background: '#0a0e1a',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Three-Tier Architecture
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Optimized for performance, reliability, and scale.
            Each tier designed for specific workload characteristics.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Tier 1: Hot Tier (Redis) */}
          <ArchitectureTier
            icon={<Zap size={32} />}
            title="Hot Tier"
            subtitle="Redis Cluster"
            color="#FF9800"
            specs={[
              'Sub-millisecond latency',
              '15M active Gems',
              '100K+ ops/sec',
              'In-memory caching'
            ]}
            delay={0}
          />

          {/* Connection Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              width: '2px',
              height: '60px',
              background: 'linear-gradient(to bottom, #FF9800, #2196F3)',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '12px solid #2196F3'
            }} />
          </motion.div>

          {/* Tier 2: Durability (Kafka) */}
          <ArchitectureTier
            icon={<Layers size={32} />}
            title="Durability Layer"
            subtitle="Apache Kafka"
            color="#FFD700"
            specs={[
              'Guaranteed delivery',
              'Event sourcing',
              '1M+ msgs/sec',
              'Event replay'
            ]}
            delay={0.2}
          />

          {/* Connection Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              width: '2px',
              height: '60px',
              background: 'linear-gradient(to bottom, #FFD700, #2196F3)',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '12px solid #2196F3'
            }} />
          </motion.div>

          {/* Tier 3: Cold Storage (PostgreSQL) */}
          <ArchitectureTier
            icon={<Server size={32} />}
            title="Cold Storage"
            subtitle="PostgreSQL BDV3.0"
            color="#2196F3"
            specs={[
              '1 billion nodes',
              '8-way partitioning',
              'ACID compliant',
              'SQL queries'
            ]}
            delay={0.4}
          />
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '80px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(33,150,243,0.1), rgba(255,215,0,0.1))',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <h3 style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Performance Benchmarks
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            <BenchmarkStat label="Read Latency" value="< 1ms" color="#4CAF50" />
            <BenchmarkStat label="Write Throughput" value="100K TPS" color="#FF9800" />
            <BenchmarkStat label="Storage Cost" value="-41%" color="#2196F3" />
            <BenchmarkStat label="Query Speed" value="8x Faster" color="#9C27B0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArchitectureTier({ icon, title, subtitle, color, specs, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '600px',
        padding: '40px',
        background: `linear-gradient(135deg, ${color}10, ${color}05)`,
        border: `2px solid ${color}40`,
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Icon */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '20px',
        background: `${color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        color: color,
        border: `2px solid ${color}60`
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '28px',
        fontWeight: '700',
        color: 'white',
        marginBottom: '8px'
      }}>
        {title}
      </h3>

      {/* Subtitle */}
      <p style={{
        fontSize: '16px',
        color: color,
        fontWeight: '600',
        marginBottom: '24px'
      }}>
        {subtitle}
      </p>

      {/* Specs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px'
      }}>
        {specs.map((spec: string, index: number) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: color
            }} />
            {spec}
          </div>
        ))}
      </div>

      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '200px',
        height: '200px',
        background: `radial-gradient(circle, ${color}20, transparent)`,
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
}

function BenchmarkStat({ label, value, color }: any) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        fontSize: '36px',
        fontWeight: '800',
        color: color,
        marginBottom: '8px'
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.6)',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {label}
      </div>
    </div>
  );
}
