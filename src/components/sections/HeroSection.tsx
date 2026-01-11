// HeroSection.tsx - Main hero section with 3D visualization
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

// Dynamically import to avoid SSR issues
const ParticlesWayEngine = dynamic(
  () => import('../visualization/ParticlesWayEngine'),
  { ssr: false }
);

export default function HeroSection() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: '#000'
    }}>
      {/* 3D Visualization Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <Suspense fallback={<LoadingFallback />}>
          <ParticlesWayEngine
            autoRotate={true}
            showDashboards={true}
            showControls={true}
            particleDensity="high"
            interactive={true}
          />
        </Suspense>
      </div>

      {/* Gradient Overlay (to make text readable) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'rgba(33, 150, 243, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(33, 150, 243, 0.3)',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '30px'
          }}
        >
          <Sparkles size={16} color="#2196F3" />
          Introducing BahyWay ParticlesWay Ecosystem
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '20px',
            maxWidth: '1200px',
            background: 'linear-gradient(135deg, #ffffff, #2196F3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          The Heart of Your
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #FFD700, #FF9800)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Data Ecosystem
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 24px)',
            lineHeight: '1.6',
            maxWidth: '700px',
            marginBottom: '40px',
            color: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          Real-time knowledge graph managing 1 billion nodes with 8-way parallel processing.
          Powered by PostgreSQL, Redis, and Kafka.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <button
            onClick={scrollToFeatures}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 20px rgba(33, 150, 243, 0.4)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(33, 150, 243, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(33, 150, 243, 0.4)';
            }}
          >
            Explore Ecosystem
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => window.open('https://demo.bahyway.com', '_blank')}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Play size={20} />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '60px',
            marginTop: '80px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <StatItem number="1B+" label="Total Nodes" />
          <StatItem number="15M+" label="Active Gems" />
          <StatItem number="100K+" label="Particles/sec" />
          <StatItem number="99.9%" label="Uptime SLA" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3
        }}
      >
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          position: 'relative'
        }}>
          <div style={{
            width: '4px',
            height: '10px',
            background: 'white',
            borderRadius: '2px',
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)'
          }} />
        </div>
      </motion.div>
    </section>
  );
}

// Stat Item Component
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px'
      }}>
        {number}
      </div>
      <div style={{
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.6)',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {label}
      </div>
    </div>
  );
}

// Loading Fallback
function LoadingFallback() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '3px solid rgba(33, 150, 243, 0.3)',
          borderTop: '3px solid #2196F3',
          borderRadius: '50%',
          margin: '0 auto 20px',
          animation: 'spin 1s linear infinite'
        }} />
        <p>Loading ParticlesWay Engine...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
