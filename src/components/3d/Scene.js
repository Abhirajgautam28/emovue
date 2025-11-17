
'use client';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Box = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'#8e44ad'} />
    </mesh>
  );
};

const Scene = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Box position={[-4, 1, -2]} />
      <Box position={[4, -1, -2]} />
      <Box position={[-2, 2, -5]} />
      <Box position={[2, -2, -5]} />
    </group>
  );
};

export default Scene;
