import React from 'react';

export const SpatialEnvironment: React.FC = () => {
  return (
    <>
      {/* Restrained Depth Fog */}
      <fog attach="fog" args={['#08080A', 12, 45]} />

      {/* Ambient & Directional Lighting */}
      <ambientLight intensity={0.35} />
      
      <directionalLight
        position={[14, 22, 12]}
        intensity={0.9}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={18}
        shadow-camera-bottom={-18}
        shadow-bias={-0.0001}
      />

      {/* Subtle Restrained Accent Lights */}
      <pointLight position={[-10, 8, -4]} color="#2DD4BF" intensity={0.9} distance={25} decay={2} />
      <pointLight position={[14, 12, 4]} color="#E5A93C" intensity={0.7} distance={25} decay={2} />

      {/* Dark Charcoal Ground Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#09090C"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Subtle Ground Grid */}
      <gridHelper
        args={[80, 40, '#1E1E24', '#111116']}
        position={[0, 0.01, 0]}
      />

      {/* Restrained Floor Circles */}
      <group position={[-8, 0.02, 4]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.3, 48]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
      </group>

      <group position={[12, 0.02, -4]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.4, 1.5, 48]} />
          <meshBasicMaterial color="#E5A93C" />
        </mesh>
      </group>
    </>
  );
};
