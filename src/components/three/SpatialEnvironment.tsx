import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SpatialEnvironment: React.FC = () => {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      {/* Fog for Depth and Atmospheric Mood (Reference B Style) */}
      <fog attach="fog" args={['#08080B', 10, 45]} />

      {/* Lighting Scheme */}
      <ambientLight intensity={0.4} />
      
      {/* Key Directional Light with Shadows */}
      <directionalLight
        position={[15, 25, 12]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={60}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0001}
      />

      {/* Atmospheric Accent Lights */}
      <pointLight position={[-12, 10, -5]} color="#00D9E8" intensity={1.5} distance={30} decay={2} />
      <pointLight position={[18, 14, 5]} color="#63E6C1" intensity={1.5} distance={35} decay={2} />
      <pointLight position={[5, 18, -12]} color="#F7D447" intensity={1.2} distance={30} decay={2} />

      {/* Dark Reflective Architectural Ground Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial
          color="#060608"
          roughness={0.18}
          metalness={0.88}
        />
      </mesh>

      {/* Subtle Spatial Grid Lines on Ground */}
      <gridHelper
        args={[100, 50, '#1E2028', '#101116']}
        position={[0, 0.01, 0]}
      />

      {/* Floor Neon Glowing Circles (Reference B Signature) */}
      <group position={[-8, 0.02, 4]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.35, 48]} />
          <meshBasicMaterial color="#00D9E8" />
        </mesh>
      </group>

      <group position={[14, 0.02, -2]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.6, 1.75, 48]} />
          <meshBasicMaterial color="#F7D447" />
        </mesh>
      </group>

      <group position={[2, 0.02, 6]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.9, 1.02, 36]} />
          <meshBasicMaterial color="#63E6C1" />
        </mesh>
      </group>

      {/* Distant Floating Neon Halo (Reference B Top Sky Element) */}
      <group ref={ringsRef} position={[0, 16, -10]}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.2, 0.06, 16, 64]} />
          <meshBasicMaterial color="#00D9E8" />
        </mesh>
        <pointLight color="#00D9E8" intensity={2} distance={15} decay={2} />
      </group>
    </>
  );
};
