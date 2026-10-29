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
  const meshRef = useRef<THREE.Group>(null);
  const iconRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Smooth floating and rotation animation
  useFrame((state, delta) => {
    if (iconRef.current) {
      iconRef.current.rotation.y += delta * 0.8;
      iconRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
      ringRef.current.rotation.x = Math.PI / 2 + Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  const [width, height, depth] = size;

  return (
    <group
      ref={meshRef}
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
      {/* Main Architectural Monolith (Reference B Style dark block) */}
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={hovered || isSelected ? '#1c1c1f' : '#111113'}
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Illuminated Neon Top Rim / Pad (Reference B Style) */}
      <mesh position={[0, height + 0.02, 0]}>
        <boxGeometry args={[width - 0.1, 0.04, depth - 0.1]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={hovered || isSelected ? 1.6 : 0.8}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* Fine glowing outline strip along the front bottom */}
      <mesh position={[0, 0.05, depth / 2 + 0.02]}>
        <boxGeometry args={[width * 0.85, 0.05, 0.02]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {/* Floating 3D Geometric Emblem above pedestal */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, height + 1.2, 0]}>
          {/* Central geometric artifact */}
          <mesh ref={iconRef}>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial
              color={accentColor}
              emissive={accentColor}
              emissiveIntensity={hovered ? 1.8 : 1.0}
              roughness={0.2}
              metalness={0.9}
              wireframe={false}
            />
          </mesh>

          {/* Glowing orbital neon ring */}
          <mesh ref={ringRef} position={[0, 0, 0]}>
            <torusGeometry args={[0.9, 0.03, 16, 64]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>

          {/* Subtle light emitting from the floating object */}
          <pointLight
            color={accentColor}
            intensity={hovered || isSelected ? 3.5 : 1.8}
            distance={4.5}
            decay={2}
          />
        </group>
      </Float>

      {/* Front Face Typography (3D Text directly mounted on monolithic face) */}
      <group position={[0, height * 0.65, depth / 2 + 0.02]}>
        {/* Project Number */}
        <Text
          position={[-width * 0.38, 0.45, 0]}
          fontSize={0.24}
          color={accentColor}
          anchorX="left"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_ad06HQHQ.woff"
        >
          {number}
        </Text>

        {/* Project Title */}
        <Text
          position={[-width * 0.38, 0.15, 0]}
          fontSize={0.28}
          maxWidth={width * 0.8}
          color="#F2F0E9"
          anchorX="left"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVysDA-Wdf9h5ODF_2Q.woff"
        >
          {title}
        </Text>

        {/* Subtitle / Discipline */}
        <Text
          position={[-width * 0.38, -0.2, 0]}
          fontSize={0.16}
          maxWidth={width * 0.8}
          color="#A6A6A1"
          anchorX="left"
          anchorY="middle"
        >
          {subtitle}
        </Text>

        {/* Action Prompt */}
        <Text
          position={[-width * 0.38, -0.5, 0]}
          fontSize={0.14}
          color={hovered ? accentColor : '#666660'}
          anchorX="left"
          anchorY="middle"
        >
          {hovered ? 'CLICK TO OPEN CASE STUDY ↗' : '[ INSPECT SYSTEM ]'}
        </Text>
      </group>
    </group>
  );
};
