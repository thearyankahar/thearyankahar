import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Pedestal } from './Pedestal';
import { PlatformStairs } from './PlatformStairs';
import { SpatialEnvironment } from './SpatialEnvironment';
import { CameraController } from './CameraController';
import { PROJECTS, PERSONAL_INFO } from '../../data/portfolioData';
import { Project } from '../../types';
import { Box, RotateCcw, ArrowLeft, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';

interface SpatialSceneProps {
  onSelectProject: (project: Project) => void;
  onOpenEducation: () => void;
  onExit3D: () => void;
}

export const SpatialScene: React.FC<SpatialSceneProps> = ({
  onSelectProject,
  onOpenEducation,
  onExit3D,
}) => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [cameraTarget, setCameraTarget] = useState<[number, number, number] | null>([0, 10, 22]);
  const [cameraLookAt, setCameraLookAt] = useState<[number, number, number] | null>([2, 3.5, 0]);
  const [hasWebGLError, setHasWebGLError] = useState<boolean>(false);

  // Platform definitions (progressive stepped architecture matching Reference Image B)
  const platforms = [
    {
      id: 'clnm',
      number: '01',
      title: 'CLNM Lending Suite',
      subtitle: 'Fintech Distributed Engine',
      position: [-8, 0, 4] as [number, number, number],
      size: [3.4, 2.0, 3.4] as [number, number, number],
      accentColor: '#00D9E8',
      cameraFocus: [-8, 5, 11] as [number, number, number],
      lookAtFocus: [-8, 2.5, 4] as [number, number, number],
      project: PROJECTS[0],
    },
    {
      id: 'doctor-appointment',
      number: '02',
      title: 'DocAppointment',
      subtitle: 'Telehealth Microservices',
      position: [-3.2, 0, 1.2] as [number, number, number],
      size: [3.2, 3.2, 3.2] as [number, number, number],
      accentColor: '#63E6C1',
      cameraFocus: [-3.2, 6.2, 8.2] as [number, number, number],
      lookAtFocus: [-3.2, 3.8, 1.2] as [number, number, number],
      project: PROJECTS[1],
    },
    {
      id: 'medisync',
      number: '03',
      title: 'MediSync Platform',
      subtitle: 'Multilingual Health SaaS',
      position: [1.8, 0, -1.2] as [number, number, number],
      size: [3.2, 4.4, 3.2] as [number, number, number],
      accentColor: '#F7D447',
      cameraFocus: [1.8, 7.4, 5.8] as [number, number, number],
      lookAtFocus: [1.8, 5.0, -1.2] as [number, number, number],
      project: PROJECTS[2],
    },
    {
      id: 'ai-loan-calling',
      number: '04',
      title: 'AI Telephony System',
      subtitle: 'Modem Pool Prototype',
      position: [6.8, 0, -3.8] as [number, number, number],
      size: [3.2, 5.6, 3.2] as [number, number, number],
      accentColor: '#E056FD',
      cameraFocus: [6.8, 8.6, 3.2] as [number, number, number],
      lookAtFocus: [6.8, 6.2, -3.8] as [number, number, number],
      project: PROJECTS[3],
    },
    {
      id: 'education-summit',
      number: '05',
      title: 'JSPM Univ 2026',
      subtitle: 'BCA Degree (Grade A)',
      position: [12.0, 0, -6.5] as [number, number, number],
      size: [3.4, 6.8, 3.4] as [number, number, number],
      accentColor: '#FFFFFF',
      cameraFocus: [12.0, 9.8, 0.5] as [number, number, number],
      lookAtFocus: [12.0, 7.4, -6.5] as [number, number, number],
      isEducation: true,
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
      {/* Fallback check if WebGL fails */}
      {hasWebGLError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#101010] text-[#F2F0E9]">
          <Box className="w-12 h-12 text-[#00D9E8] mb-4 animate-bounce" />
          <h2 className="font-display text-2xl font-bold mb-2">WebGL Acceleration Unavailable</h2>
          <p className="max-w-md text-sm text-[#888] mb-6">
            Your graphics device does not support hardware WebGL acceleration. You can explore the full portfolio directly via the editorial Artboard.
          </p>
          <button
            onClick={onExit3D}
            className="px-6 py-2.5 bg-[#00D9E8] text-black font-semibold rounded"
          >
            Return to Editorial Artboard
          </button>
        </div>
      ) : (
        /* The Three.js Canvas Scene */
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

            {/* Stepped Architectural Pedestals */}
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
                  if (platform.isEducation) {
                    onOpenEducation();
                  } else if (platform.project) {
                    onSelectProject(platform.project);
                  }
                }}
              />
            ))}

            {/* Illuminated Stepped Stairs Connecting Each Pedestal (Reference B Signature) */}
            {/* Stair 1: Platform 1 to Platform 2 */}
            <PlatformStairs
              start={[-6.3, 1.0, 2.6]}
              end={[-4.8, 2.2, 1.8]}
              stepsCount={6}
              accentColor="#00D9E8"
            />

            {/* Stair 2: Platform 2 to Platform 3 */}
            <PlatformStairs
              start={[-1.6, 2.2, -0.0]}
              end={[-0.1, 3.4, -0.8]}
              stepsCount={6}
              accentColor="#63E6C1"
            />

            {/* Stair 3: Platform 3 to Platform 4 */}
            <PlatformStairs
              start={[3.4, 3.4, -2.5]}
              end={[4.9, 4.6, -3.3]}
              stepsCount={6}
              accentColor="#F7D447"
            />

            {/* Stair 4: Platform 4 to Platform 5 */}
            <PlatformStairs
              start={[8.4, 4.6, -5.1]}
              end={[9.9, 5.8, -5.9]}
              stepsCount={6}
              accentColor="#E056FD"
            />

            {/* Camera Motion & Controls */}
            <CameraController
              targetPosition={cameraTarget}
              targetLookAt={cameraLookAt}
            />
          </Suspense>
        </Canvas>
      )}

      {/* Top Floating HUD Banner */}
      <div className="absolute top-18 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        {/* Left: Mode Exit Button */}
        <button
          onClick={() => {
            sound.playClick();
            onExit3D();
          }}
          className="pointer-events-auto px-3.5 py-1.5 bg-[#121214]/90 backdrop-blur-md border border-[#333] hover:border-[#00D9E8] text-[#F2F0E9] hover:text-[#00D9E8] rounded-md text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO ARTBOARD</span>
        </button>

        {/* Center: Instruction Chip */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-[#222] font-mono text-[10px] text-[#A6A6A1]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D9E8] animate-pulse" />
          <span>DRAG TO ROTATE SCENE · SCROLL TO ZOOM · CLICK ANY PLATFORM TO INSPECT</span>
        </div>

        {/* Right: Reset Camera View */}
        <button
          onClick={handleResetCamera}
          className="pointer-events-auto px-3 py-1.5 bg-[#121214]/90 backdrop-blur-md border border-[#333] hover:border-[#555] text-[#A6A6A1] hover:text-white rounded-md text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Reset Camera Angle"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RESET VIEW</span>
        </button>
      </div>

      {/* Bottom Floating Stage Progression Navigation (Reference B Progression) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-4xl">
        <div className="bg-[#101014]/90 backdrop-blur-md border border-[#2C2C32] rounded-xl p-2 shadow-2xl flex flex-wrap items-center justify-between gap-1.5 font-mono text-[11px]">
          <span className="hidden lg:inline text-[10px] text-[#666] px-2 uppercase tracking-widest">
            STAGES:
          </span>

          <div className="flex items-center flex-wrap gap-1.5 flex-1 justify-center sm:justify-start">
            {platforms.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => handleStageSelect(idx)}
                className={`px-3 py-1.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-2 ${
                  selectedStage === idx
                    ? 'bg-[#1C1C24] border-current font-semibold shadow-[0_0_12px_rgba(255,255,255,0.15)]'
                    : 'bg-[#141418] border-[#25252A] text-[#888] hover:text-[#CCC] hover:border-[#383842]'
                }`}
                style={{
                  color: selectedStage === idx ? p.accentColor : undefined,
                }}
              >
                <span className="text-[10px] opacity-70">{p.number}</span>
                <span className="text-xs">{p.title}</span>
                {p.isEducation && <GraduationCap className="w-3 h-3 text-[#F7D447]" />}
              </button>
            ))}
          </div>

          {/* Quick Action Button for Selected Stage */}
          {selectedStage !== null && (
            <button
              onClick={() => {
                sound.playClick();
                const p = platforms[selectedStage];
                if (p.isEducation) {
                  onOpenEducation();
                } else if (p.project) {
                  onSelectProject(p.project);
                }
              }}
              className="px-3.5 py-1.5 bg-[#00D9E8] hover:bg-[#63E6C1] text-black font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>OPEN DETAILS</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
