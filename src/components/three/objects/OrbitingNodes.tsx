'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SATELLITES = [
  { radius: 3.1, speed: 0.75, phase: 0.2, size: 0.12, color: '#39d5ff' },
  { radius: 3.6, speed: 0.52, phase: 1.7, size: 0.1, color: '#58a6ff' },
  { radius: 4.1, speed: 0.4, phase: 2.4, size: 0.14, color: '#a371f7' },
  { radius: 2.7, speed: 1.05, phase: 3.1, size: 0.09, color: '#3fb950' },
  { radius: 4.4, speed: 0.34, phase: 4.2, size: 0.11, color: '#f0883e' },
  { radius: 3.4, speed: 0.61, phase: 5.0, size: 0.08, color: '#f85149' },
];

export function OrbitingNodes() {
  const rigRef = useRef<THREE.Group>(null!);
  const satelliteRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }, delta) => {
    if (rigRef.current) {
      rigRef.current.rotation.y += delta * 0.08;
      rigRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.12;
      rigRef.current.rotation.z = Math.cos(clock.elapsedTime * 0.14) * 0.06;
    }

    const t = clock.elapsedTime;
    satelliteRefs.current.forEach((mesh, i) => {
      const satellite = SATELLITES[i];
      if (!mesh || !satellite) return;

      const angle = t * satellite.speed + satellite.phase;
      mesh.position.set(
        Math.cos(angle) * satellite.radius,
        Math.sin(angle * 0.9) * (satellite.radius * 0.2),
        Math.sin(angle) * satellite.radius,
      );
    });
  });

  return (
    <group ref={rigRef}>
      <mesh scale={1.45}>
        <torusKnotGeometry args={[1.25, 0.08, 220, 20, 2, 5]} />
        <meshStandardMaterial
          color="#58a6ff"
          emissive="#1d4f9e"
          emissiveIntensity={0.8}
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3.2, 0.03, 24, 180]} />
        <meshBasicMaterial color="#39d5ff" transparent opacity={0.25} />
      </mesh>

      <mesh rotation={[Math.PI / 3.5, Math.PI / 6, 0]}>
        <torusGeometry args={[4.15, 0.03, 24, 180]} />
        <meshBasicMaterial color="#a371f7" transparent opacity={0.2} />
      </mesh>

      {SATELLITES.map((satellite, index) => (
        <mesh
          key={`${satellite.color}-${index}`}
          ref={(el) => {
            satelliteRefs.current[index] = el;
          }}
        >
          <sphereGeometry args={[satellite.size, 16, 16]} />
          <meshStandardMaterial
            color={satellite.color}
            emissive={satellite.color}
            emissiveIntensity={1.25}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}
