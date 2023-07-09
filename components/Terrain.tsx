'use client';

import { Flatirons } from '@components/Models';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function Terrain() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 3.5, position: [0, 50, 150] }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '8px',
      }}
    >
      <Suspense fallback={null}>
        <directionalLight intensity={0.25} />
        <ambientLight intensity={0.25} />
        <Flatirons />
        <Environment preset='sunset' />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
