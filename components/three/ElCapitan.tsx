'use client';

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export default function ElCapitan(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(`/models/ElCapitan.glb`, 's') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        position={[0, -10, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        material-color='LightSteelBlue'
      />
    </group>
  );
}

useGLTF.preload('/models/ElCapitan.glb');
