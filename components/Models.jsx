import { Suspense, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Flatirons = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('./models/flatirons.glb');

  useFrame(() => (group.current.rotation.y += 0.0005));

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        transparent
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[-30, 10, -30]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
      ></mesh>
    </group>
  );
};

useGLTF.preload('./models/flatirons.glb');
