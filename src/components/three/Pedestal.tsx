import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { sound } from '../../utils/audio';

interface PedestalProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  position: [number, number, number];
  size: [number, number, number];
  accentColor: string;
  onClick: () => void;
  isSelected?: boolean;
}

export const Pedestal: React.FC<PedestalProps> = ({
  number,
  title,
  subtitle,
  position,
  size,
  accentColor,
  onClick,
  isSelected = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const iconRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (iconRef.current) {
      iconRef.current.rotation.y += delta * 0.6;
      iconRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
    }
  });

  const [width, height, depth] = size;

  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        sound.playClick();
        onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
        setHovered(true);
        sound.playHover();
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
        setHovered(false);
      }}
    >
      {/* Monolithic Dark Architectural Block */}
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={hovered || isSelected ? '#1A1A1E' : '#111114'}
          roughness={0.35}
          metalness={0.7}
        />
      </mesh>

      {/* Restrained Top Emissive Trim */}
      <mesh position={[0, height + 0.015, 0]}>
        <boxGeometry args={[width - 0.08, 0.03, depth - 0.08]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={hovered || isSelected ? 0.9 : 0.4}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Floating 3D Geometric Artifact */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <group position={[0, height + 1.1, 0]}>
          <mesh ref={iconRef}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial
              color={accentColor}
              emissive={accentColor}
              emissiveIntensity={hovered ? 1.0 : 0.5}
              roughness={0.25}
              metalness={0.8}
            />
          </mesh>

          <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.8, 0.02, 16, 48]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>

          <pointLight
            color={accentColor}
            intensity={hovered || isSelected ? 2.0 : 0.8}
            distance={3.5}
            decay={2}
          />
        </group>
      </Float>

      {/* Front Face Text */}
      <group position={[0, height * 0.65, depth / 2 + 0.02]}>
        <Text
          position={[-width * 0.38, 0.4, 0]}
          fontSize={0.22}
          color={accentColor}
          anchorX="left"
          anchorY="middle"
        >
          {number}
        </Text>

        <Text
          position={[-width * 0.38, 0.12, 0]}
          fontSize={0.26}
          maxWidth={width * 0.8}
          color="#EDEAE2"
          anchorX="left"
          anchorY="middle"
        >
          {title}
        </Text>

        <Text
          position={[-width * 0.38, -0.2, 0]}
          fontSize={0.15}
          maxWidth={width * 0.8}
          color="#8E8E93"
          anchorX="left"
          anchorY="middle"
        >
          {subtitle}
        </Text>

        <Text
          position={[-width * 0.38, -0.48, 0]}
          fontSize={0.13}
          color={hovered ? accentColor : '#555558'}
          anchorX="left"
          anchorY="middle"
        >
          {hovered ? 'INSPECT CASE STUDY →' : '[ DETAILS ]'}
        </Text>
      </group>
    </group>
  );
};
