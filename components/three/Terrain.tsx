'use client';

import Flatirons from '@components/three/Flatirons';
import {
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function Terrain() {
  return (
    <Canvas orthographic camera={{ zoom: 3.5, position: [0, 50, 150] }}>
      <Suspense fallback={<Loader />}>
        <directionalLight intensity={0.25} />
        <ambientLight intensity={0.25} />
        <pointLight
          intensity={0.25}
          position={[100, 50, 100]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <Flatirons />
        <Environment preset='sunset' background />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
