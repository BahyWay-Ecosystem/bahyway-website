// ParticleStream.tsx - Flowing particle streams
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleStreamProps {
  startPos: [number, number, number];
  endPos: [number, number, number];
  particleCount?: number;
  color?: string;
  speed?: number;
}

export default function ParticleStream({
  startPos,
  endPos,
  particleCount = 1000,
  color = '#FFD700',
  speed = 1.0
}: ParticleStreamProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particles along curved path
  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const progress = new Float32Array(particleCount);

    // Create curve (catmull-rom for smooth flow)
    const start = new THREE.Vector3(...startPos);
    const end = new THREE.Vector3(...endPos);
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .add(new THREE.Vector3(0, Math.random() * 2 - 1, Math.random() * 2 - 1));

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      progress[i] = t;

      const point = curve.getPoint(t);
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;

      // Random size variation
      sizes[i] = 0.05 + Math.random() * 0.1;
    }

    return { positions, velocities, sizes, progress, curve };
  }, [startPos, endPos, particleCount]);

  // Animate particles
  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const sizes = pointsRef.current.geometry.attributes.size.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      // Update progress
      particleData.progress[i] += delta * speed * 0.1;

      // Loop back to start
      if (particleData.progress[i] > 1) {
        particleData.progress[i] = 0;
      }

      // Get position on curve
      const point = particleData.curve.getPoint(particleData.progress[i]);
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;

      // Pulsing size effect
      const baseSizes = particleData.sizes[i];
      sizes[i] = baseSizes * (1 + Math.sin(state.clock.elapsedTime * 3 + i * 0.1) * 0.3);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.size.needsUpdate = true;
  });

  // Custom shader material for better visual effect
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;

        void main() {
          vColor = vec3(1.0, 0.84, 0.0); // Golden color
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          // Circular particles with soft edges
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);

          if (dist > 0.5) discard;

          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }, [color]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particleData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particleData.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} attach="material" />
    </points>
  );
}
