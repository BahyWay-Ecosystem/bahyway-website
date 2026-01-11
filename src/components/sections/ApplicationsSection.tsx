// ApplicationsSection.tsx - BahyWay applications showcase
import React from 'react';
import { motion } from 'framer-motion';

export default function ApplicationsSection() {
  const applications = [
    {
      name: 'NajafWay',
      description: 'Cemetery Management System',
      color: '#00BCD4',
      icon: '🕌',
      features: ['Grave records', 'Geospatial data', 'Family trees']
    },
    {
      name: 'WPDWay',
      description: 'Wikipedia Data Pipeline',
      color: '#9C27B0',
      icon: '📚',
      features: ['1M+ articles', 'Knowledge graph', 'Real-time ETL']
    },
    {
      name: 'BeeMDMWay',
      description: 'Master Data Management',
      color: '#4CAF50',
      icon: '🐝',
      features: ['Golden records', 'Fuzzy matching', 'Data quality']
    },
    {
      name: 'OntoWay',
      description: 'Visual Graph Editor',
      color: '#FF9800',
      icon: '🎨',
      features: ['UML shapes', 'No-code', 'Particle viz']
    },
    {
      name: 'ETLWay',
      description: 'Universal ETL Platform',
      color: '#2196F3',
      icon: '🔄',
      features: ['Data pipelines', 'Transformations', 'Scheduling']
    },
    {
      name: 'SteerWay',
      description: 'Geospatial Management',
      color: '#FFEB3B',
      icon: '🗺️',
      features: ['Maps', 'Routes', 'Location data']
    },
    {
      name: 'AlarmInsight',
      description: 'Alarm Processing',
      color: '#F44336',
      icon: '🚨',
      features: ['Event detection', 'Alerts', 'Root cause']
    },
    {
      name: 'ZeroWay',
      description: 'Security Platform',
      color: '#E91E63',
      icon: '🛡️',
      features: ['Threat detection', 'Particle sentinels', 'ML anomaly']
    }
  ];

  return (
    <section style={{
      padding: '120px 20px',
      background: 'linear-gradient(to bottom, #0a0e1a, #000)',
      position: 'relative'
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
            The BahyWay Ecosystem
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Eight powerful applications, one unified data heart.
            All powered by ParticlesWay Engine.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '30px'
        }}>
          {applications.map((app, index) => (
            <ApplicationCard key={index} app={app} index={index} />
          ))}
        </div>

        {/* Integration Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '80px',
            padding: '60px 40px',
            background: 'linear-gradient(135deg, rgba(33,150,243,0.1), rgba(156,39,176,0.1))',
            borderRadius: '30px',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Unified Data Platform
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '16px',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            All applications share the same ParticlesWay Engine, enabling seamless
            data flow, unified security, and consistent performance across your
            entire ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ApplicationCard({ app, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{
        background: `linear-gradient(135deg, ${app.color}15, ${app.color}05)`,
        border: `1px solid ${app.color}30`,
        borderRadius: '20px',
        padding: '30px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Icon */}
      <div style={{
        fontSize: '48px',
        marginBottom: '20px'
      }}>
        {app.icon}
      </div>

      {/* Name */}
      <h3 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: 'white',
        marginBottom: '8px'
      }}>
        {app.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '14px',
        color: app.color,
        fontWeight: '600',
        marginBottom: '20px'
      }}>
        {app.description}
      </p>

      {/* Features */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {app.features.map((feature: string, i: number) => (
          <li
            key={i}
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: app.color
            }} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '200px',
        height: '200px',
        background: `radial-gradient(circle, ${app.color}30, transparent)`,
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
}
