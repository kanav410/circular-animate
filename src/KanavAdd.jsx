import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const KanavAdd = () => {
  const tex = useTexture('./image.png');
  let KanavAdd = useRef(null);
  useFrame ((state,delta) => {
    KanavAdd.current.rotation.y += delta;
  }
    
);

  return (
    <group>
    <mesh ref={KanavAdd} rotation={[0,1.4,0.5]} >
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
};

export default KanavAdd;
