import React, { Suspense, useRef } from 'react';
import {
  useGLTF,
  OrthographicCamera,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { useThree, Canvas, useFrame } from '@react-three/fiber';

export const ElCapitan = (props) => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const { viewport } = useThree();
  const group = useRef();
  const ref = useRef();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    if (!mediaQuery || mediaQuery.matches) {
      // doSomethingWithoutAnimation();
    } else {
      ref.current.rotation.set(
        -Math.PI + -y / 1000,
        Math.PI / 4 + x / 1000,
        -Math.PI
      );
    }
  });
  const { nodes, materials } = useGLTF('/models/ElCapitan.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} decay={2} position={[0, 1, 0]} />
      <pointLight
        intensity={0.5}
        decay={2}
        distance={100}
        position={[25, 25, -25]}
      />
      <mesh ref={ref} castShadow receiveShadow geometry={nodes.mesh_0.geometry}>
        <meshPhongMaterial
          wireframe={true}
          color='dodgerblue'
          transparent={true}
          opacity={0.08}
        />
      </mesh>
    </group>
  );
};

//useGLTF.preload('./models/ElCapitan.glb');
