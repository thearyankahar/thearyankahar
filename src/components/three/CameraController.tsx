import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';

interface CameraControllerProps {
  activeSection: string;
  focusedProjectId: string | null;
}

export const CameraController: React.FC<CameraControllerProps> = ({
  activeSection,
  focusedProjectId,
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Initial gallery entrance threshold
  const desiredPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 4.2, 16));
  const desiredLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 3.2, 0));
  const prefersReducedMotion = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  // Coordinated Camera Framing across the Minimalist Architectural Pavilion
  useEffect(() => {
    // 1. If viewing a specific project case study: subtle intimate framing down the pavilion
    if (focusedProjectId) {
      desiredPos.current.set(0, 3.5, 6);
      desiredLookAt.current.set(0, 3.0, -10);
      return;
    }

    // 2. Coordinated Section Transitions (Walkthrough along Connected Spaces)
    switch (activeSection) {
      case 'intro':
        // Entrance threshold framing the gallery corridor and right perspective depth
        desiredPos.current.set(0.6, 3.8, 17.5);
        desiredLookAt.current.set(0.2, 2.8, 0);
        break;
      case 'work':
        // Main gallery corridor framing the architectural portals and linear datum line
        desiredPos.current.set(0, 3.8, 10);
        desiredLookAt.current.set(0, 2.8, -8);
        break;
      case 'about':
        // Quiet side gallery wing seen through the left portal
        desiredPos.current.set(5.5, 3.6, 6);
        desiredLookAt.current.set(-2.0, 2.8, 0);
        break;
      case 'skills':
        // Structural systems wing seen through the right portal
        desiredPos.current.set(-5.5, 3.8, 2);
        desiredLookAt.current.set(2.0, 2.8, -4);
        break;
      case 'certifications':
        // Transverse portal threshold framing the linear datum
        desiredPos.current.set(4.0, 3.4, -4);
        desiredLookAt.current.set(-1.0, 2.8, -14);
        break;
      case 'contact':
        // Terminal open-air courtyard threshold looking toward the architectural vista
        desiredPos.current.set(0, 3.0, -10);
        desiredLookAt.current.set(0, 3.2, -30);
        break;
      default:
        desiredPos.current.set(0.6, 3.8, 17.5);
        desiredLookAt.current.set(0.2, 2.8, 0);
    }
  }, [activeSection, focusedProjectId]);

  useFrame((state, delta) => {
    if (!controlsRef.current) return;

    if (prefersReducedMotion.current) {
      state.camera.position.copy(desiredPos.current);
      controlsRef.current.target.copy(desiredLookAt.current);
    } else {
      // Gentle, restrained ambient breathing (Swiss minimalism — calm & subtle)
      const time = state.clock.elapsedTime;
      const breathX = Math.sin(time * 0.3) * 0.18;
      const breathY = Math.cos(time * 0.25) * 0.10;
      const breathZ = Math.sin(time * 0.2) * 0.10;

      // Natural subtle pointer parallax
      const parallaxX = state.pointer.x * 0.4;
      const parallaxY = state.pointer.y * 0.25;

      const targetX = desiredPos.current.x + breathX + parallaxX;
      const targetY = desiredPos.current.y + breathY + parallaxY;
      const targetZ = desiredPos.current.z + breathZ;

      // Smooth, architectural camera interpolation
      const lerpSpeed = Math.min(delta * 2.2, 0.08);

      state.camera.position.x += (targetX - state.camera.position.x) * lerpSpeed;
      state.camera.position.y += (targetY - state.camera.position.y) * lerpSpeed;
      state.camera.position.z += (targetZ - state.camera.position.z) * lerpSpeed;

      controlsRef.current.target.lerp(desiredLookAt.current, lerpSpeed);
    }

    controlsRef.current.update();
  });

  return (
    <DreiOrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      makeDefault
    />
  );
};
