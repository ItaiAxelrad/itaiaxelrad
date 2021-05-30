import React, { Suspense, useRef } from 'react';
import {
  useGLTF,
  OrthographicCamera,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { useThree, Canvas, useFrame } from '@react-three/fiber';

export const Model = (props) => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const { viewport } = useThree();
  const group = useRef();
  const ref = useRef();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 5;
    const y = (mouse.y * viewport.height) / 5;
    if (!mediaQuery || mediaQuery.matches) {
      // doSomethingWithoutAnimation();
    } else {
      ref.current.rotation.set(
        -Math.PI + y / 1000,
        -Math.PI / 3 + -x / 1000,
        -Math.PI
      );
    }
  });
  const { nodes, materials } = useGLTF('/models/golden.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <ambientLight intensity={0.5} />
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        position={[0, -20, 0]}
        geometry={nodes.mesh_0.geometry}
      >
        <meshPhongMaterial
          color="dodgerblue"
          wireframe={true}
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

//useGLTF.preload('./models/ElCapitan.glb');
