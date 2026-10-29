import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Pedestal } from './Pedestal';
import { PlatformStairs } from './PlatformStairs';
import { SpatialEnvironment } from './SpatialEnvironment';
import { CameraController } from './CameraController';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { Box, RotateCcw, ArrowLeft, ExternalLink } from 'lucide-react';
import { sound } from '../../utils/audio';

interface SpatialSceneProps {
  onSelectProject: (project: Project) => void;
  onExit3D: () => void;
}

export const SpatialScene: React.FC<SpatialSceneProps> = ({
  onSelectProject,
  onExit3D,
}) => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [cameraTarget, setCameraTarget] = useState<[number, number, number] | null>([0, 10, 22]);
  const [cameraLookAt, setCameraLookAt] = useState<[number, number, number] | null>([2, 3.5, 0]);
  const [hasWebGLError, setHasWebGLError] = useState<boolean>(false);

  // 5 Stepped Architectural Pedestals for Verified Projects
  const platforms = [
    {
      id: 'cln',
      number: '01',
      title: 'CLN Lending Suite',
      subtitle: 'Fintech Operations CRM',
      position: [-8, 0, 4] as [number, number, number],
      size: [3.4, 2.0, 3.4] as [number, number, number],
      accentColor: '#2DD4BF',
      cameraFocus: [-8, 5, 11] as [number, number, number],
      lookAtFocus: [-8, 2.5, 4] as [number, number, number],
      project: PROJECTS[0],
    },
    {
      id: 'dixit-lending',
      number: '02',
      title: 'Dixit Lending Solution',
      subtitle: 'Origination Web Platform',
      position: [-3.2, 0, 1.2] as [number, number, number],
      size: [3.2, 3.2, 3.2] as [number, number, number],
      accentColor: '#2DD4BF',
      cameraFocus: [-3.2, 6.2, 8.2] as [number, number, number],
      lookAtFocus: [-3.2, 3.8, 1.2] as [number, number, number],
      project: PROJECTS[1],
    },
    {
      id: 'smart-curriculum',
      number: '03',
      title: 'Smart Curriculum',
      subtitle: 'Academic Operations',
      position: [1.8, 0, -1.2] as [number, number, number],
      size: [3.2, 4.4, 3.2] as [number, number, number],
      accentColor: '#2DD4BF',
      cameraFocus: [1.8, 7.4, 5.8] as [number, number, number],
      lookAtFocus: [1.8, 5.0, -1.2] as [number, number, number],
      project: PROJECTS[2],
    },
    {
      id: 'breed-rec',
      number: '04',
      title: 'Livestock Breed Recognition',
      subtitle: 'Applied ML & OpenCV',
      position: [6.8, 0, -3.8] as [number, number, number],
      size: [3.2, 5.6, 3.2] as [number, number, number],
      accentColor: '#E5A93C',
      cameraFocus: [6.8, 8.6, 3.2] as [number, number, number],
      lookAtFocus: [6.8, 6.2, -3.8] as [number, number, number],
      project: PROJECTS[3],
    },
    {
      id: 'ai-loan-calling',
      number: '05',
      title: 'AI Loan Calling Prototype',
      subtitle: 'Hardware Telephony Spec',
      position: [11.8, 0, -6.4] as [number, number, number],
      size: [3.2, 6.8, 3.2] as [number, number, number],
      accentColor: '#E5A93C',
      cameraFocus: [11.8, 9.8, 0.6] as [number, number, number],
      lookAtFocus: [11.8, 7.4, -6.4] as [number, number, number],
      project: PROJECTS[5],
    },
  ];

  const handleStageSelect = (index: number) => {
    sound.playClick();
    setSelectedStage(index);
    const p = platforms[index];
    setCameraTarget(p.cameraFocus);
    setCameraLookAt(p.lookAtFocus);
  };

  const handleResetCamera = () => {
    sound.playClick();
    setSelectedStage(null);
    setCameraTarget([0, 10, 22]);
    setCameraLookAt([2, 3.5, 0]);
  };

  return (
    <div className="relative w-full h-screen bg-[#08080B] overflow-hidden select-none">
      {hasWebGLError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#101013] text-[#EDEAE2]">
          <Box className="w-10 h-10 text-[#2DD4BF] mb-4" />
          <h2 className="font-display text-xl font-bold mb-2">3D Acceleration Unavailable</h2>
          <p className="max-w-md text-xs text-[#8E8E93] mb-6">
            WebGL is not supported or active on this device. You can explore all case studies directly via the editorial Artboard.
          </p>
          <button
            onClick={onExit3D}
            className="px-5 py-2 bg-[#2DD4BF] text-black font-semibold rounded text-xs cursor-pointer"
          >
            Return to Editorial Artboard
          </button>
        </div>
      ) : (
        <Canvas
          shadows
          camera={{ position: [0, 10, 22], fov: 42 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            gl.setClearColor('#08080B');
          }}
          onError={() => setHasWebGLError(true)}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <Suspense fallback={null}>
            <SpatialEnvironment />

            {/* Stepped Pedestals */}
            {platforms.map((platform, idx) => (
              <Pedestal
                key={platform.id}
                id={platform.id}
                number={platform.number}
                title={platform.title}
                subtitle={platform.subtitle}
                position={platform.position}
                size={platform.size}
                accentColor={platform.accentColor}
                isSelected={selectedStage === idx}
                onClick={() => {
                  handleStageSelect(idx);
                  if (platform.project) {
                    onSelectProject(platform.project);
                  }
                }}
              />
            ))}

            {/* Connecting Illuminated Stairs (Reference B Signature) */}
            <PlatformStairs
              start={[-6.3, 1.0, 2.6]}
              end={[-4.8, 2.2, 1.8]}
              stepsCount={6}
              accentColor="#2DD4BF"
            />
            <PlatformStairs
              start={[-1.6, 2.2, -0.0]}
              end={[-0.1, 3.4, -0.8]}
              stepsCount={6}
              accentColor="#2DD4BF"
            />
            <PlatformStairs
              start={[3.4, 3.4, -2.5]}
              end={[4.9, 4.6, -3.3]}
              stepsCount={6}
              accentColor="#E5A93C"
            />
            <PlatformStairs
              start={[8.4, 4.6, -5.1]}
              end={[9.9, 5.8, -5.9]}
              stepsCount={6}
              accentColor="#E5A93C"
            />

            <CameraController
              targetPosition={cameraTarget}
              targetLookAt={cameraLookAt}
            />
          </Suspense>
        </Canvas>
      )}

      {/* Top Floating HUD Banner */}
      <div className="absolute top-16 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => {
            sound.playClick();
            onExit3D();
          }}
          className="pointer-events-auto px-3 py-1.5 bg-[#121215]/90 backdrop-blur-md border border-[#27272A] hover:border-[#2DD4BF] text-[#EDEAE2] hover:text-[#2DD4BF] rounded text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shadow-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO ARTBOARD</span>
        </button>

        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-[#222226] font-mono text-[10px] text-[#8E8E93]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/80" />
          <span>ORBIT: DRAG · ZOOM: SCROLL · SELECT PEDESTAL TO VIEW CASE STUDY</span>
        </div>

        <button
          onClick={handleResetCamera}
          className="pointer-events-auto px-3 py-1.5 bg-[#121215]/90 backdrop-blur-md border border-[#27272A] hover:border-[#3E3E44] text-[#8E8E93] hover:text-[#EDEAE2] rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Reset Camera View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RESET</span>
        </button>
      </div>

      {/* Bottom Floating Stage Selector (Reference B Progression) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-4xl">
        <div className="bg-[#121215]/95 backdrop-blur-md border border-[#27272A] rounded-xl p-2 shadow-2xl flex flex-wrap items-center justify-between gap-1.5 font-mono text-[11px]">
          <span className="hidden lg:inline text-[10px] text-[#666663] px-2 uppercase tracking-widest">
            PROJECTS:
          </span>

          <div className="flex items-center flex-wrap gap-1.5 flex-1 justify-center sm:justify-start">
            {platforms.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => handleStageSelect(idx)}
                className={`px-3 py-1.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-2 ${
                  selectedStage === idx
                    ? 'bg-[#1C1C22] border-[#383842] text-[#EDEAE2] font-semibold'
                    : 'bg-[#141417] border-[#222226] text-[#777] hover:text-[#BBB] hover:border-[#2C2C32]'
                }`}
              >
                <span className="text-[10px] text-[#8E8E93]">{p.number}</span>
                <span className="text-xs">{p.title}</span>
              </button>
            ))}
          </div>

          {selectedStage !== null && (
            <button
              onClick={() => {
                sound.playClick();
                const p = platforms[selectedStage];
                if (p.project) {
                  onSelectProject(p.project);
                }
              }}
              className="px-3.5 py-1.5 bg-[#2DD4BF] hover:bg-[#28BFAC] text-black font-semibold rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>INSPECT</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
