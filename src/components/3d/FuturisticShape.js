'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';

const FuturisticShape = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <TorusKnot args={[2, 0.5, 256, 32]} scale={0.5}>
        <meshStandardMaterial color="#e0e0e0" roughness={0.1} metalness={0.9} />
      </TorusKnot>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default FuturisticShape;
