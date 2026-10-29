import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';

interface CameraControllerProps {
  targetPosition: [number, number, number] | null;
  targetLookAt: [number, number, number] | null;
  onTransitionComplete?: () => void;
}

export const CameraController: React.FC<CameraControllerProps> = ({
  targetPosition,
  targetLookAt,
  onTransitionComplete,
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  const desiredPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 10, 22));
  const desiredLookAt = useRef<THREE.Vector3>(new THREE.Vector3(2, 3.5, 0));
  const isTransitioning = useRef<boolean>(false);

  useEffect(() => {
    if (targetPosition) {
      desiredPos.current.set(...targetPosition);
      isTransitioning.current = true;
    }
    if (targetLookAt) {
      desiredLookAt.current.set(...targetLookAt);
      isTransitioning.current = true;
    }
  }, [targetPosition, targetLookAt]);

  useFrame((_, delta) => {
    if (!controlsRef.current) return;

    if (isTransitioning.current) {
      const lerpSpeed = Math.min(delta * 2.8, 0.1);
      camera.position.lerp(desiredPos.current, lerpSpeed);
      controlsRef.current.target.lerp(desiredLookAt.current, lerpSpeed);

      // Check if close enough to finish transition
      if (
        camera.position.distanceTo(desiredPos.current) < 0.2 &&
        controlsRef.current.target.distanceTo(desiredLookAt.current) < 0.2
      ) {
        isTransitioning.current = false;
        if (onTransitionComplete) {
          onTransitionComplete();
        }
      }
    }
    controlsRef.current.update();
  });

  return (
    <DreiOrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.06}
      maxPolarAngle={Math.PI / 2 - 0.05} // prevent going underneath ground floor
      minDistance={6}
      maxDistance={40}
    />
  );
};
