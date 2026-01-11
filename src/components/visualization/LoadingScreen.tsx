// LoadingScreen.tsx - Beautiful loading state
import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing ParticlesWay Engine...');

  useEffect(() => {
    const steps = [
      { progress: 20, status: 'Loading PostgreSQL Core...' },
      { progress: 40, status: 'Connecting Redis Cache...' },
      { progress: 60, status: 'Streaming Kafka Events...' },
      { progress: 80, status: 'Spawning Particles...' },
      { progress: 100, status: 'Ready!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].progress);
        setStatus(steps[currentStep].status);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Html center>
      <div style={{
        width: '400px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.95), rgba(20, 25, 40, 0.95))',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(33, 150, 243, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        textAlign: 'center'
      }}>
        {/* Logo/Icon */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
          style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 30px',
            background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(33, 150, 243, 0.5)'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            background: 'white',
            borderRadius: '50%'
          }} />
        </motion.div>

        {/* Title */}
        <h2 style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '10px',
          fontFamily: '"Inter", sans-serif'
        }}>
          BahyWay ParticlesWay
        </h2>

        {/* Status */}
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '14px',
          marginBottom: '30px',
          minHeight: '20px'
        }}>
          {status}
        </p>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
              borderRadius: '3px',
              boxShadow: '0 0 10px rgba(33, 150, 243, 0.5)'
            }}
          />
        </div>

        {/* Percentage */}
        <div style={{
          color: '#2196F3',
          fontSize: '12px',
          fontWeight: '600',
          marginTop: '10px'
        }}>
          {progress}%
        </div>
      </div>
    </Html>
  );
}
