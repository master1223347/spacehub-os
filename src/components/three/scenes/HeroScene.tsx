'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '../objects/Stars';
import { Earth } from '../objects/Earth';
import { OrbitingNodes } from '../objects/OrbitingNodes';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[10, 5, 10]} intensity={1} color="#4da6ff" />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#ff6b35" />

      {/* Objects */}
      <Earth />
      <OrbitingNodes />
      <Stars count={6000} />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette darkness={0.5} offset={0.5} />
      </EffectComposer>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
