// RedisPlatform.tsx - Redis cache platform
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface RedisPlatformProps {
  position: [number, number, number];
  side: 'left' | 'right';
}

export default function RedisPlatform({ position, side }: RedisPlatformProps) {
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Pulsing animation
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005;
    }

    if (glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      glowRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group position={position}>
      {/* Platform ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#FF9800"
          emissive="#FF9800"
          emissiveIntensity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Inner platform disc */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[2.5, 64]} />
        <meshStandardMaterial
          color="#FF9800"
          emissive="#FF9800"
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Glow effect */}
      <mesh ref={glowRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 3.5, 64]} />
        <meshBasicMaterial
          color="#FF9800"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Grid pattern on platform */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Redis label */}
      <Html
        center
        distanceFactor={12}
        position={[0, 0, 0]}
      >
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.95), rgba(255, 193, 7, 0.95))',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '12px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: '16px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          boxShadow: '0 4px 15px rgba(255, 152, 0, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4CAF50',
              boxShadow: '0 0 8px #4CAF50'
            }} />
            Redis Cache
          </div>
          <div style={{
            fontSize: '11px',
            opacity: 0.9,
            marginTop: '4px',
            fontWeight: 'normal'
          }}>
            {side === 'left' ? 'Hot Tier (Ingestion)' : 'Hot Tier (Delivery)'}
          </div>
        </div>
      </Html>

      {/* Floating data cubes (visual effect) */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 3;
        return (
          <RoundedBox
            key={i}
            position={[
              Math.cos(angle + Date.now() * 0.0005) * radius,
              Math.sin(angle * 2 + Date.now() * 0.0003) * 0.5,
              Math.sin(angle + Date.now() * 0.0005) * radius
            ]}
            args={[0.2, 0.2, 0.2]}
            radius={0.02}
          >
            <meshStandardMaterial
              color="#FFD700"
              emissive="#FF9800"
              emissiveIntensity={0.5}
            />
          </RoundedBox>
        );
      })}
    </group>
  );
}
