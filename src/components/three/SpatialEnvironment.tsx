import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SpatialEnvironment: React.FC = () => {
  const lineMatRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    // Subtle, restrained breathing on the central datum axis line (Swiss minimalism)
    if (lineMatRef.current) {
      lineMatRef.current.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  return (
    <>
      {/* 1. Volumetric Atmosphere: Clean Dark Charcoal Depth */}
      <fog attach="fog" args={['#0A0A0A', 20, 60]} />

      {/* 2. Restrained Gallery Lighting */}
      <ambientLight intensity={0.65} />

      {/* Main Architectural Directional Sunlight */}
      <directionalLight
        position={[14, 26, 16]}
        intensity={1.25}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={65}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0001}
      />

      {/* Soft Gallery Fill Light */}
      <directionalLight
        position={[-14, 12, 10]}
        intensity={0.4}
        color="#D4D4D8"
      />

      {/* 3. Continuous Matte Gallery Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial
          color="#0D0D0D"
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* 4. Floor Expansion Joints & Linear Hairline Dividers (Swiss Grid Alignment) */}
      {[-8, -4, 4, 8].map((x) => (
        <mesh key={`grid-${x}`} position={[x, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.015, 60]} />
          <meshBasicMaterial color="#202020" />
        </mesh>
      ))}

      {/* Restrained Continuous Floor Datum Conduit Line (Positioned in right perspective corridor) */}
      <mesh position={[5.5, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.035, 70]} />
        <meshBasicMaterial ref={lineMatRef} color="#35D6C0" transparent opacity={0.5} />
      </mesh>

      {/* 5. Minimalist Gallery Architectural Pavilion: Connected Corridors & Portals */}
      
      {/* Left Monolithic Gallery Wall (with architectural openings at z = 4 and z = -10) */}
      <group position={[-9.5, 0, 0]}>
        {/* Wall Section A (Front) */}
        <mesh position={[0, 4.0, 14]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 8.0, 12]} />
          <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Portal Lintel spanning above doorway at z = 5 */}
        <mesh position={[0, 6.8, 5]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 2.4, 6]} />
          <meshStandardMaterial color="#181818" roughness={0.55} metalness={0.3} />
        </mesh>
        {/* Wall Section B (Middle) */}
        <mesh position={[0, 4.0, -3]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 8.0, 10]} />
          <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Portal Lintel spanning above doorway at z = -11 */}
        <mesh position={[0, 6.8, -11]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 2.4, 6]} />
          <meshStandardMaterial color="#181818" roughness={0.55} metalness={0.3} />
        </mesh>
        {/* Wall Section C (Rear) */}
        <mesh position={[0, 4.0, -20]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 8.0, 12]} />
          <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
        </mesh>
      </group>

      {/* Right Monolithic Gallery Wall (Symmetrical Architectural Balance) */}
      <group position={[9.5, 0, 0]}>
        {/* Wall Section A (Front) */}
        <mesh position={[0, 4.0, 14]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 8.0, 12]} />
          <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Portal Lintel spanning above doorway at z = 5 */}
        <mesh position={[0, 6.8, 5]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 2.4, 6]} />
          <meshStandardMaterial color="#181818" roughness={0.55} metalness={0.3} />
        </mesh>
        {/* Wall Section B (Middle) */}
        <mesh position={[0, 4.0, -3]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 8.0, 10]} />
          <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Portal Lintel spanning above doorway at z = -11 */}
        <mesh position={[0, 6.8, -11]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 2.4, 6]} />
          <meshStandardMaterial color="#181818" roughness={0.55} metalness={0.3} />
        </mesh>
        {/* Wall Section C (Rear) */}
        <mesh position={[0, 4.0, -20]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 8.0, 12]} />
          <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
        </mesh>
      </group>

      {/* 6. Transverse Structural Ceiling Portal Beams (Connecting the Pavilion) */}
      {[-16, -4, 8, 20].map((z) => (
        <group key={`beam-${z}`} position={[0, 8.8, z]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[19.8, 0.5, 0.8]} />
            <meshStandardMaterial color="#1C1C1C" roughness={0.5} metalness={0.35} />
          </mesh>
          {/* Subtle Recessed Linear Downlight Slot */}
          <mesh position={[0, -0.26, 0]}>
            <boxGeometry args={[18.0, 0.02, 0.06]} />
            <meshBasicMaterial color="#F2F0EB" transparent opacity={0.35} />
          </mesh>
        </group>
      ))}

      {/* 7. Gallery Colonnade Outer Pilasters (Rhythm & Perspective Depth) */}
      {[-14, 14].map((x) =>
        [-12, -2, 8, 18].map((z) => (
          <mesh key={`pilaster-${x}-${z}`} position={[x, 4.5, z]} castShadow receiveShadow>
            <boxGeometry args={[0.5, 9.0, 1.2]} />
            <meshStandardMaterial color="#131313" roughness={0.65} metalness={0.25} />
          </mesh>
        ))
      )}

      {/* 8. Terminal Gallery Courtyard Frame (End of Corridor Vista at z = -28) */}
      <group position={[0, 0, -28]}>
        <mesh position={[-6, 5.0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 10.0, 1.0]} />
          <meshStandardMaterial color="#161616" roughness={0.55} metalness={0.3} />
        </mesh>
        <mesh position={[6, 5.0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 10.0, 1.0]} />
          <meshStandardMaterial color="#161616" roughness={0.55} metalness={0.3} />
        </mesh>
        <mesh position={[0, 9.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[13.0, 1.0, 1.0]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.55} metalness={0.35} />
        </mesh>
      </group>
    </>
  );
};
