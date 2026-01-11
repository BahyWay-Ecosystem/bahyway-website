// ParticlesWayEngine.tsx - Main 3D Visualization Engine
import React, { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Environment
} from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';

import HeartSphere from './HeartSphere';
import ParticleStream from './ParticleStream';
import RedisPlatform from './RedisPlatform';
import Dashboard from './Dashboard';
import LoadingScreen from './LoadingScreen';
import InteractiveControls from './InteractiveControls';

interface ParticlesWayEngineProps {
  autoRotate?: boolean;
  showDashboards?: boolean;
  showControls?: boolean;
  particleDensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export default function ParticlesWayEngine({
  autoRotate = true,
  showDashboards = true,
  showControls = true,
  particleDensity = 'high',
  interactive = true
}: ParticlesWayEngineProps) {

  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [isExploding, setIsExploding] = useState(false);
  const [stats, setStats] = useState({
    totalNodes: 1000000000,
    activeGems: 15000000,
    particlesPerSecond: 100000,
    uptime: 99.9
  });

  // Particle counts based on density
  const particleCounts = {
    low: 500,
    medium: 1000,
    high: 2000
  };

  const particleCount = particleCounts[particleDensity];

  // Handle segment click
  const handleSegmentClick = useCallback((segmentIndex: number) => {
    if (!interactive) return;
    setSelectedSegment(segmentIndex);
    setIsExploding(true);

    // Reset after animation
    setTimeout(() => {
      setIsExploding(false);
    }, 2000);
  }, [interactive]);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
    }}>
      <Canvas
        shadows
        camera={{ position: [0, 5, 20], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true
        }}
        dpr={[1, 2]} // Adaptive pixel ratio
      >
        <Suspense fallback={<LoadingScreen />}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={1.5} color="#2196F3" />
          <pointLight position={[15, 10, -10]} intensity={0.5} color="#FF9800" />
          <pointLight position={[-15, -10, 10]} intensity={0.5} color="#9C27B0" />

          {/* Main Components */}
          <HeartSphere
            isExploding={isExploding}
            selectedSegment={selectedSegment}
            onSegmentClick={handleSegmentClick}
          />

          {/* Redis Platforms */}
          <RedisPlatform position={[-12, 0, 0]} side="left" />
          <RedisPlatform position={[12, 0, 0]} side="right" />

          {/* Particle Streams - Inbound (Left) */}
          <ParticleStream
            startPos={[-18, 3, 0]}
            endPos={[-6, 2, 0]}
            particleCount={particleCount}
            color="#FFD700"
            speed={1.0}
          />
          <ParticleStream
            startPos={[-18, 0, 0]}
            endPos={[-6, 0, 0]}
            particleCount={particleCount}
            color="#FFD700"
            speed={1.2}
          />
          <ParticleStream
            startPos={[-18, -3, 0]}
            endPos={[-6, -2, 0]}
            particleCount={particleCount}
            color="#FFD700"
            speed={0.8}
          />

          {/* Particle Streams - Outbound (Right) */}
          <ParticleStream
            startPos={[6, 2, 0]}
            endPos={[18, 3, 0]}
            particleCount={particleCount}
            color="#FFD700"
            speed={1.0}
          />
          <ParticleStream
            startPos={[6, 0, 0]}
            endPos={[18, 0, 0]}
            particleCount={particleCount}
            color="#FFD700"
            speed={1.2}
          />
          <ParticleStream
            startPos={[6, -2, 0]}
            endPos={[18, -3, 0]}
            particleCount={particleCount}
            color="#FFD700"
            speed={0.8}
          />

          {/* Stars Background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Environment (for reflections) */}
          <Environment preset="night" />

          {/* Camera Controls */}
          <OrbitControls
            enableZoom={interactive}
            enablePan={false}
            autoRotate={autoRotate && !selectedSegment}
            autoRotateSpeed={0.5}
            minDistance={12}
            maxDistance={40}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />

          {/* Post-processing Effects */}
          <EffectComposer>
            <Bloom
              intensity={1.0}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={300}
            />
            <ChromaticAberration
              offset={new Vector2(0.0005, 0.0005)}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* Overlay Dashboards */}
      {showDashboards && (
        <>
          <Dashboard
            position="left"
            stats={stats}
            selectedSegment={selectedSegment}
          />
          <Dashboard
            position="right"
            stats={stats}
            selectedSegment={selectedSegment}
          />
        </>
      )}

      {/* Interactive Controls */}
      {showControls && (
        <InteractiveControls
          onDensityChange={(density) => {
            // Re-render with new density
          }}
          onReset={() => {
            setSelectedSegment(null);
            setIsExploding(false);
          }}
        />
      )}
    </div>
  );
}
