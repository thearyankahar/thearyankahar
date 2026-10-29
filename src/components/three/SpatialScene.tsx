import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SpatialEnvironment } from './SpatialEnvironment';
import { CameraController } from './CameraController';
import { Project } from '../../types';
import { Box } from 'lucide-react';

interface SpatialSceneProps {
  activeSection: string;
  focusedProject: Project | null;
  hoveredProjectId?: string | null;
  onSelectProject?: (project: Project) => void;
  onHoverProject?: (id: string | null) => void;
  className?: string;
}

export const SpatialScene: React.FC<SpatialSceneProps> = ({
  activeSection,
  focusedProject,
  className = '',
}) => {
  const [hasWebGLError, setHasWebGLError] = useState(false);

  return (
    <div className={`relative w-full h-full bg-[#0A0A0A] overflow-hidden select-none ${className}`}>
      {hasWebGLError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0A0A0A] text-[#F2F0EB]">
          <Box className="w-8 h-8 text-[#35D6C0] mb-3" />
          <h3 className="text-lg font-bold mb-1">Hardware Acceleration Unavailable</h3>
          <p className="max-w-md text-xs text-[#929292]">
            3D architectural spatial rendering is disabled. Navigating in high-performance Swiss editorial mode.
          </p>
        </div>
      ) : (
        <Canvas
          shadows
          camera={{ position: [0, 4.2, 16], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            gl.setClearColor('#0A0A0A', 1);
          }}
          onError={() => setHasWebGLError(true)}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            {/* Minimalist Architectural Gallery Pavilion */}
            <SpatialEnvironment />

            {/* Cinematic Camera Controller */}
            <CameraController
              activeSection={activeSection}
              focusedProjectId={focusedProject?.id || null}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};
