'use client';

import {
  AccumulativeShadows,
  Environment,
  Html,
  OrbitControls,
  RandomizedLight,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded </Html>;
}

export default function Model({ children }) {
  return (
    <Canvas shadows camera={{ position: [0, 50, 100], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        {children}
        <AccumulativeShadows
          temporal
          frames={200}
          color='purple'
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <Environment preset={'dawn'} blur={1} background />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Suspense>
    </Canvas>
  );
}
