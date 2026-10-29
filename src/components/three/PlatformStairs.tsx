import React from 'react';

interface PlatformStairsProps {
  start: [number, number, number];
  end: [number, number, number];
  stepsCount?: number;
  width?: number;
  accentColor?: string;
}

export const PlatformStairs: React.FC<PlatformStairsProps> = ({
  start,
  end,
  stepsCount = 6,
  width = 1.4,
  accentColor = '#2DD4BF',
}) => {
  const [x1, y1, z1] = start;
  const [x2, y2, z2] = end;

  const dx = (x2 - x1) / stepsCount;
  const dy = (y2 - y1) / stepsCount;
  const dz = (z2 - z1) / stepsCount;

  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    const x = x1 + dx * (i + 0.5);
    const y = y1 + dy * (i + 0.5);
    const z = z1 + dz * (i + 0.5);

    steps.push(
      <group key={i} position={[x, y, z]}>
        {/* Step Tread */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[Math.abs(dx) * 1.05, 0.08, width]} />
          <meshStandardMaterial
            color="#141418"
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>

        {/* Subtle Illuminated Edge */}
        <mesh position={[0, 0.045, width / 2]}>
          <boxGeometry args={[Math.abs(dx) * 1.05, 0.015, 0.02]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>
      </group>
    );
  }

  return <group>{steps}</group>;
};
