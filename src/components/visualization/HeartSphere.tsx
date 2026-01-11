// HeartSphere.tsx - Central 4-segment heart sphere
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface HeartSphereProps {
  isExploding: boolean;
  selectedSegment: number | null;
  onSegmentClick: (index: number) => void;
}

export default function HeartSphere({
  isExploding,
  selectedSegment,
  onSegmentClick
}: HeartSphereProps) {
  const groupRef = useRef<THREE.Group>(null);
  const segmentRefs = useRef<(THREE.Mesh | null)[]>([]);

  // 4 colored segments (matching your image)
  const segments = useMemo(() => [
    {
      color: '#00BCD4',
      position: new THREE.Vector3(-2.5, 2.5, 0),
      name: 'Teal',
      description: 'Data Ingestion Layer',
      stats: { nodes: '250M', particles: '3.7M' }
    },
    {
      color: '#FF9800',
      position: new THREE.Vector3(2.5, 2.5, 0),
      name: 'Orange',
      description: 'Processing Layer',
      stats: { nodes: '250M', particles: '4.2M' }
    },
    {
      color: '#9C27B0',
      position: new THREE.Vector3(-2.5, -2.5, 0),
      name: 'Purple',
      description: 'Analysis Layer',
      stats: { nodes: '250M', particles: '3.9M' }
    },
    {
      color: '#F44336',
      position: new THREE.Vector3(2.5, -2.5, 0),
      name: 'Red',
      description: 'Distribution Layer',
      stats: { nodes: '250M', particles: '3.2M' }
    }
  ], []);

  // Rotation animation
  useFrame((state) => {
    if (!groupRef.current) return;

    // Gentle rotation
    if (!isExploding) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }

    // Segment animations
    segmentRefs.current.forEach((mesh, index) => {
      if (!mesh) return;

      if (selectedSegment === index) {
        // Selected segment grows
        mesh.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else if (isExploding) {
        // Other segments shrink
        mesh.scale.lerp(new THREE.Vector3(0.8, 0.8, 0.8), 0.1);
      } else {
        // Reset to normal
        mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }

      // Gentle pulse
      const pulseFactor = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
      if (selectedSegment !== index && !isExploding) {
        mesh.scale.multiplyScalar(pulseFactor);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Outer transparent shell */}
      <mesh>
        <sphereGeometry args={[6, 64, 64]} />
        <meshPhysicalMaterial
          color="#2196F3"
          transparent
          opacity={0.15}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
          transmission={0.5}
          thickness={0.5}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh scale={0.95}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshBasicMaterial
          color="#2196F3"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Grid lines on sphere (technical look) */}
      <mesh>
        <sphereGeometry args={[6.05, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* 4 colored segments */}
      {segments.map((segment, index) => (
        <mesh
          key={index}
          position={segment.position}
          ref={(ref) => (segmentRefs.current[index] = ref)}
          onClick={() => onSegmentClick(index)}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
          }}
        >
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshPhysicalMaterial
            color={segment.color}
            emissive={segment.color}
            emissiveIntensity={selectedSegment === index ? 0.8 : 0.5}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />

          {/* Segment label */}
          {selectedSegment === index && (
            <Html center distanceFactor={8}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
                padding: '15px 20px',
                borderRadius: '12px',
                border: `2px solid ${segment.color}`,
                fontFamily: 'Arial, sans-serif',
                minWidth: '200px',
                pointerEvents: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: segment.color
                }}>
                  {segment.name} Partition
                </div>
                <div style={{
                  fontSize: '14px',
                  marginBottom: '10px',
                  opacity: 0.8
                }}>
                  {segment.description}
                </div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>
                  <div>Nodes: {segment.stats.nodes}</div>
                  <div>Active Particles: {segment.stats.particles}</div>
                </div>
              </div>
            </Html>
          )}
        </mesh>
      ))}

      {/* Sparkles inside sphere */}
      <Sparkles
        count={2000}
        scale={5.5}
        size={3}
        speed={0.4}
        opacity={0.6}
        color="#ffffff"
      />

      {/* Central "PostgreSQL" text */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#2196F3"
      >
        PostgreSQL
      </Text>

      {/* Rotating ring around sphere */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#2196F3"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}
