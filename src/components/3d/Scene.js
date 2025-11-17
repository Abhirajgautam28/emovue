'use client';
import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const CustomObject = ({ shape, color, position }) => {
  const ref = useMemo(() => new THREE.Object3D(), []);
  useFrame((state, delta) => {
    ref.rotation.x += delta * 0.5;
    ref.rotation.y += delta * 0.5;
  });

  return (
    <group position={position} ref={ref}>
      {shape === 'sphere' && (
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color={color} />
        </Sphere>
      )}
      {shape === 'torus' && (
        <Torus args={[1, 0.4, 16, 100]}>
          <meshStandardMaterial color={color} />
        </Torus>
      )}
      {shape === 'box' && (
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color={color} />
        </Box>
      )}
    </group>
  );
};

export default function Scene() {
  const objects = useMemo(() => [
    { shape: 'sphere', color: '#00A9FF', position: [-4, 1, -2] },
    { shape: 'torus', color: '#A0E9FF', position: [4, -1, -2] },
    { shape: 'box', color: '#00A9FF', position: [0, 0, 2] },
    { shape: 'sphere', color: '#A0E9FF', position: [2, 2, -4] },
    { shape: 'torus', color: '#00A9FF', position: [-2, -2, 4] },
  ], []);

  return (
    <>
      {objects.map((obj, index) => (
        <CustomObject key={index} {...obj} />
      ))}
    </>
  );
}
