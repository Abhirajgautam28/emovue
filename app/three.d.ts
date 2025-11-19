import * as THREE from 'three'
import { ReactThreeFiber } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Node<THREE.Object3D, typeof THREE.Object3D>
      ambientLight: ReactThreeFiber.Node<THREE.AmbientLight, typeof THREE.AmbientLight>
      directionalLight: ReactThreeFiber.Node<THREE.DirectionalLight, typeof THREE.DirectionalLight>
      meshStandardMaterial: ReactThreeFiber.Node<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
    }
  }
}
