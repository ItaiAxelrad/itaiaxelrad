'use client';

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: { ['default']: THREE.MeshStandardMaterial };
};

export default function Flatirons(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/flatirons.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color='DarkKhaki'
      />
    </group>
  );
}

useGLTF.preload('/models/flatirons.glb');