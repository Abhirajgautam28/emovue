'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function RotatingBox({ position, args, color, rotationSpeed }: { position: [number, number, number], args: [number, number, number], color: string, rotationSpeed: { x: number, y: number } }) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * rotationSpeed.x;
      mesh.current.rotation.y += delta * rotationSpeed.y;
    }
  });
  return (
    <Box position={position} args={args} ref={mesh}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Box>
  );
}

export default function ThreeScene() {
    const boxes = useMemo(() => {
        const boxArray = [];
        for (let i = 0; i < 50; i++) {
            boxArray.push({
                position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10] as [number, number, number],
                args: [0.2, 0.2, 0.2] as [number, number, number],
                color: ['#FF1493', '#1E90FF', '#FFD700', '#ADFF2F', '#FF4500'][Math.floor(Math.random() * 5)],
                rotationSpeed: { x: Math.random() * 0.5, y: Math.random() * 0.5 }
            });
        }
        return boxArray;
    }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: new THREE.Vector3(0, 0, 5), fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={new THREE.Vector3(5, 5, 5)} />
        {boxes.map((box, index) => (
            <RotatingBox key={index} {...box} />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
