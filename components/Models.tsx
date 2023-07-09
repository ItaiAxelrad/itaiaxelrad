import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Flatirons = (props) => {
  const group = useRef();
  const { scene } = useGLTF('./models/flatirons.glb');

  useFrame(() => (scene.rotation.y += 0.00025));

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // geometry={scene.geometry}
        // material={scene.mesh_0.material}
        position={[-20, 20, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI / 4]}
      ></mesh>
    </group>
  );
};

// useGLTF.preload('./models/ElCapitan.glb');

// export const ElCapitan = (props) => {
//   const group = useRef();
//   const { scene } = useGLTF('./models/ElCapitan.glb');

//   useFrame(() => (group.current.rotation.y += 0.00025));

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.mesh_0.geometry}
//         material={nodes.mesh_0.material}
//         position={[-20, 20, 20]}
//         rotation={[-Math.PI / 2, 0, Math.PI / 4]}
//       ></mesh>
//     </group>
//   );
// };

// useGLTF.preload('./models/ElCapitan.glb');
