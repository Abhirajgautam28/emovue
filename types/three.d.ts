import { Object3DNode, Object3DProps } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshStandardMaterial: Object3DProps<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
  }
}
