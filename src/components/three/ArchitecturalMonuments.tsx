import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { sound } from '../../utils/audio';

interface BaseMonumentProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  position: [number, number, number];
  accentColor: string;
  onClick: () => void;
  isSelected?: boolean;
}

// -------------------------------------------------------------
// Monument 01: Dixit Lending Solution — Monolithic Ledger Vault
// -------------------------------------------------------------
export const MonumentDixit: React.FC<BaseMonumentProps> = ({
  number,
  title,
  subtitle,
  position,
  accentColor,
  onClick,
  isSelected = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringRef1.current) ringRef1.current.rotation.z += delta * 0.4;
    if (ringRef2.current) ringRef2.current.rotation.x += delta * 0.3;
  });

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
      {/* Tier 1: Heavy Foundation Slab */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.8, 3.6]} />
        <meshStandardMaterial color={hovered || isSelected ? '#1A1A1E' : '#111114'} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Tier 2: Cantilevered Ledger Block */}
      <mesh position={[0.2, 1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.8, 3.2]} />
        <meshStandardMaterial color={hovered || isSelected ? '#202025' : '#141418'} roughness={0.3} metalness={0.75} />
      </mesh>

      {/* Tier 3: Inset Vault Head with Recessed Channel */}
      <mesh position={[-0.1, 2.0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.8, 2.8]} />
        <meshStandardMaterial color="#16161A" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Vertical Recessed Illuminated Channel */}
      <mesh position={[1.41, 1.2, 0]}>
        <boxGeometry args={[0.04, 2.2, 0.2]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {/* Floating Artifact: Dual Interlocking Ledger Calibration Rings */}
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.3}>
        <group position={[0, 3.3, 0]}>
          <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[0.75, 0.03, 16, 48]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>
          <mesh ref={ringRef2} rotation={[-Math.PI / 4, 0, 0]}>
            <torusGeometry args={[0.95, 0.025, 16, 48]} />
            <meshStandardMaterial color="#888" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={hovered ? 0.9 : 0.4} />
          </mesh>
          <pointLight color={accentColor} intensity={hovered || isSelected ? 2.2 : 0.9} distance={4} />
        </group>
      </Float>

      {/* Architectural Front Typography */}
      <group position={[0, 1.5, 1.82]}>
        <Text position={[-1.4, 0.45, 0]} fontSize={0.22} color={accentColor} anchorX="left" anchorY="middle">
          {number}
        </Text>
        <Text position={[-1.4, 0.15, 0]} fontSize={0.26} maxWidth={2.8} color="#EDEAE2" anchorX="left" anchorY="middle">
          {title}
        </Text>
        <Text position={[-1.4, -0.18, 0]} fontSize={0.14} maxWidth={2.8} color="#8E8E93" anchorX="left" anchorY="middle">
          {subtitle}
        </Text>
        <Text position={[-1.4, -0.45, 0]} fontSize={0.12} color={hovered ? accentColor : '#555558'} anchorX="left" anchorY="middle">
          {hovered ? 'INSPECT CASE STUDY →' : '[ PLATFORM OVERVIEW ]'}
        </Text>
      </group>
    </group>
  );
};

// -----------------------------------------------------------------
// Monument 02: Smart Curriculum Attendance — Academic Lattice Grid
// -----------------------------------------------------------------
export const MonumentCurriculum: React.FC<BaseMonumentProps> = ({
  number,
  title,
  subtitle,
  position,
  accentColor,
  onClick,
  isSelected = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const matrixCoreRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (matrixCoreRef.current) {
      matrixCoreRef.current.rotation.y += delta * 0.5;
    }
  });

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
      {/* Plinth Base */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.8, 3.2]} />
        <meshStandardMaterial color={hovered || isSelected ? '#1A1A1E' : '#111114'} roughness={0.35} metalness={0.7} />
      </mesh>

      {/* Structural Modular Columns (4 Pillars) */}
      {[[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]].map(([px, pz], i) => (
        <mesh key={i} position={[px, 1.8, pz]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 2.0, 0.3]} />
          <meshStandardMaterial color="#16161A" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}

      {/* Intermediate Timetable Tray */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <boxGeometry args={[2.8, 0.12, 2.8]} />
        <meshStandardMaterial color="#1A1A20" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Upper Framework Beam */}
      <mesh position={[0, 2.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.0, 0.15, 3.0]} />
        <meshStandardMaterial color="#18181D" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Fine Linear Accent Border along upper framework */}
      <mesh position={[0, 2.88, 1.51]}>
        <boxGeometry args={[2.8, 0.02, 0.02]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {/* Floating Artifact: Rotating 3D Scheduling Matrix Lattice */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.25}>
        <group ref={matrixCoreRef} position={[0, 3.9, 0]}>
          <mesh>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#202028" wireframe roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={hovered ? 0.9 : 0.4} />
          </mesh>
          <pointLight color={accentColor} intensity={hovered || isSelected ? 2.0 : 0.8} distance={3.8} />
        </group>
      </Float>

      {/* Front Face Text */}
      <group position={[0, 0.4, 1.62]}>
        <Text position={[-1.2, 0.18, 0]} fontSize={0.22} color={accentColor} anchorX="left" anchorY="middle">
          {number}
        </Text>
        <Text position={[-1.2, -0.08, 0]} fontSize={0.24} maxWidth={2.5} color="#EDEAE2" anchorX="left" anchorY="middle">
          {title}
        </Text>
        <Text position={[-1.2, -0.34, 0]} fontSize={0.13} maxWidth={2.5} color="#8E8E93" anchorX="left" anchorY="middle">
          {subtitle}
        </Text>
      </group>
    </group>
  );
};

// ------------------------------------------------------------------------
// Monument 03: Breed Recognition — Concentric Morphological Contour Scanner
// ------------------------------------------------------------------------
export const MonumentBreed: React.FC<BaseMonumentProps> = ({
  number,
  title,
  subtitle,
  position,
  accentColor,
  onClick,
  isSelected = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const lensRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (lensRef.current) {
      lensRef.current.rotation.y += delta * 0.4;
      lensRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

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
      {/* Cylindrical Stepped Contour Foundation */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.7, 1.8, 0.8, 36]} />
        <meshStandardMaterial color={hovered || isSelected ? '#1A1A1E' : '#111114'} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Contour Tier 2: Elliptical Inset Step */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.4, 1.5, 0.6, 36]} />
        <meshStandardMaterial color="#16161B" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Contour Tier 3: Scanner Prism Pedestal */}
      <mesh position={[0, 1.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 1.2, 0.6, 36]} />
        <meshStandardMaterial color="#181820" roughness={0.25} metalness={0.85} />
      </mesh>

      {/* Glowing Contour Circumference Ring */}
      <mesh position={[0, 1.41, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.39, 1.43, 48]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {/* Floating Artifact: OpenCV Optical Vision Scanner Prism & Lens */}
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.25}>
        <group position={[0, 2.9, 0]}>
          <mesh ref={lensRef}>
            <torusGeometry args={[0.7, 0.035, 16, 48]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.6} />
          </mesh>
          <mesh>
            <coneGeometry args={[0.3, 0.6, 4]} />
            <meshStandardMaterial color="#DDD" roughness={0.1} metalness={0.9} />
          </mesh>
          <pointLight color={accentColor} intensity={hovered || isSelected ? 2.4 : 1.0} distance={4} />
        </group>
      </Float>

      {/* Front Face Text */}
      <group position={[0, 0.45, 1.72]}>
        <Text position={[-1.2, 0.18, 0]} fontSize={0.22} color={accentColor} anchorX="left" anchorY="middle">
          {number}
        </Text>
        <Text position={[-1.2, -0.08, 0]} fontSize={0.22} maxWidth={2.4} color="#EDEAE2" anchorX="left" anchorY="middle">
          {title}
        </Text>
        <Text position={[-1.2, -0.32, 0]} fontSize={0.12} maxWidth={2.4} color="#8E8E93" anchorX="left" anchorY="middle">
          {subtitle}
        </Text>
      </group>
    </group>
  );
};

// -----------------------------------------------------------------
// Monument 04: Movie Ticket Booking — Stepped Cinema Amphitheater
// -----------------------------------------------------------------
export const MonumentMovie: React.FC<BaseMonumentProps> = ({
  number,
  title,
  subtitle,
  position,
  accentColor,
  onClick,
  isSelected = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const apertureRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (apertureRef.current) apertureRef.current.rotation.z += delta * 0.4;
  });

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
      {/* Tiered Amphitheater Slab 1 */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.8, 3.2]} />
        <meshStandardMaterial color={hovered || isSelected ? '#1A1A1E' : '#111114'} roughness={0.35} metalness={0.7} />
      </mesh>

      {/* Rear Vertical Projection Screen Pylon */}
      <mesh position={[0, 2.0, -1.2]} castShadow receiveShadow>
        <boxGeometry args={[3.0, 2.4, 0.4]} />
        <meshStandardMaterial color="#16161A" roughness={0.25} metalness={0.8} />
      </mesh>

      {/* Cinema Screen Aspect Ratio Frame with Horizontal Slit */}
      <mesh position={[0, 2.1, -0.98]}>
        <planeGeometry args={[2.4, 1.2]} />
        <meshStandardMaterial color="#0A0A0C" roughness={0.1} metalness={0.9} />
      </mesh>
      <mesh position={[0, 2.1, -0.97]}>
        <boxGeometry args={[2.2, 0.015, 0.01]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {/* Stepped Seating Tier 2 */}
      <mesh position={[0, 0.9, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.2, 1.6]} />
        <meshStandardMaterial color="#18181E" roughness={0.3} metalness={0.75} />
      </mesh>

      {/* Floating Artifact: Anamorphic Aperture Ring */}
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.25}>
        <group position={[0, 3.6, 0]}>
          <mesh ref={apertureRef}>
            <torusGeometry args={[0.6, 0.03, 16, 48]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.5} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.4, 0.4, 0.04]} />
            <meshStandardMaterial color="#BBB" roughness={0.2} metalness={0.9} />
          </mesh>
          <pointLight color={accentColor} intensity={hovered || isSelected ? 2.0 : 0.8} distance={3.8} />
        </group>
      </Float>

      {/* Front Face Text */}
      <group position={[0, 0.4, 1.62]}>
        <Text position={[-1.2, 0.18, 0]} fontSize={0.22} color={accentColor} anchorX="left" anchorY="middle">
          {number}
        </Text>
        <Text position={[-1.2, -0.08, 0]} fontSize={0.22} maxWidth={2.4} color="#EDEAE2" anchorX="left" anchorY="middle">
          {title}
        </Text>
        <Text position={[-1.2, -0.32, 0]} fontSize={0.12} maxWidth={2.4} color="#8E8E93" anchorX="left" anchorY="middle">
          {subtitle}
        </Text>
      </group>
    </group>
  );
};

// ------------------------------------------------------------------------
// Monument 05: CLN AI Loan Calling System — Brutalist Telephony Array Tower
// ------------------------------------------------------------------------
export const MonumentAICalling: React.FC<BaseMonumentProps> = ({
  number,
  title,
  subtitle,
  position,
  accentColor,
  onClick,
  isSelected = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const pulseRingRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (pulseRingRef.current) {
      pulseRingRef.current.rotation.y += delta * 0.7;
      const s = 1.0 + Math.sin(state.clock.elapsedTime * 2.5) * 0.08;
      pulseRingRef.current.scale.set(s, s, s);
    }
  });

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
      {/* Tower Foundation Plinth */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.0, 3.2]} />
        <meshStandardMaterial color={hovered || isSelected ? '#1A1A1E' : '#111114'} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Tower Shaft with Slanted Baffling Plates */}
      <mesh position={[0, 2.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 1.2, 2.2, 8]} />
        <meshStandardMaterial color="#16161A" roughness={0.25} metalness={0.8} />
      </mesh>

      {/* Radial GSM Antenna Array Fins (4 orthogonal fins) */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((rot, i) => (
        <mesh key={i} position={[0, 2.4, 0]} rotation={[0, rot, 0]}>
          <boxGeometry args={[1.8, 0.5, 0.04]} />
          <meshStandardMaterial color="#181820" roughness={0.2} metalness={0.85} />
        </mesh>
      ))}

      {/* Transmission Head Platform */}
      <mesh position={[0, 3.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 0.9, 0.2, 16]} />
        <meshStandardMaterial color="#1C1C22" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Floating Artifact: Radio Wave Pulse Transmitter Ring */}
      <Float speed={1.9} rotationIntensity={0.25} floatIntensity={0.3}>
        <group position={[0, 4.4, 0]}>
          <mesh ref={pulseRingRef}>
            <torusGeometry args={[0.75, 0.03, 16, 48]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={hovered ? 0.9 : 0.5} />
          </mesh>
          <mesh>
            <cylinderGeometry args={[0.04, 0.08, 0.8, 8]} />
            <meshStandardMaterial color="#CCC" roughness={0.1} metalness={0.9} />
          </mesh>
          <pointLight color={accentColor} intensity={hovered || isSelected ? 2.5 : 1.1} distance={4.2} />
        </group>
      </Float>

      {/* Front Face Text */}
      <group position={[0, 0.5, 1.62]}>
        <Text position={[-1.2, 0.2, 0]} fontSize={0.22} color={accentColor} anchorX="left" anchorY="middle">
          {number}
        </Text>
        <Text position={[-1.2, -0.06, 0]} fontSize={0.22} maxWidth={2.4} color="#EDEAE2" anchorX="left" anchorY="middle">
          {title}
        </Text>
        <Text position={[-1.2, -0.3, 0]} fontSize={0.12} maxWidth={2.4} color="#8E8E93" anchorX="left" anchorY="middle">
          {subtitle}
        </Text>
      </group>
    </group>
  );
};
