import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  MonumentDixit,
  MonumentCurriculum,
  MonumentBreed,
  MonumentMovie,
  MonumentAICalling,
} from './ArchitecturalMonuments';
import { PlatformStairs } from './PlatformStairs';
import { SpatialEnvironment } from './SpatialEnvironment';
import { CameraController } from './CameraController';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { Box, RotateCcw, ArrowLeft, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { sound } from '../../utils/audio';

interface SpatialSceneProps {
  mode: 'integrated' | 'immersive';
  onToggleMode: (mode: 'integrated' | 'immersive') => void;
  onSelectProject: (project: Project) => void;
  className?: string;
}

export const SpatialScene: React.FC<SpatialSceneProps> = ({
  mode,
  onToggleMode,
  onSelectProject,
  className = '',
}) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number | null>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  // The 5 distinct architectural monuments
  const stages = [
    {
      id: 'dixit-lending',
      number: '01',
      title: 'Dixit Lending Solution',
      subtitle: 'Lending CRM & Web Platform',
      position: [-7.5, 0, 3.5] as [number, number, number],
      accentColor: '#2DD4BF',
      cameraFocus: [-7.5, 4.5, 9.5] as [number, number, number],
      lookAtFocus: [-7.5, 1.8, 3.5] as [number, number, number],
      project: PROJECTS[0],
    },
    {
      id: 'smart-curriculum',
      number: '02',
      title: 'Smart Curriculum',
      subtitle: 'Academic Operations Matrix',
      position: [-3.2, 0, 1.2] as [number, number, number],
      accentColor: '#2DD4BF',
      cameraFocus: [-3.2, 5.5, 7.5] as [number, number, number],
      lookAtFocus: [-3.2, 2.2, 1.2] as [number, number, number],
      project: PROJECTS[1],
    },
    {
      id: 'breed-rec',
      number: '03',
      title: 'Livestock Breed Recognition',
      subtitle: 'Computer Vision & ML',
      position: [1.8, 0, -1.0] as [number, number, number],
      accentColor: '#E5A93C',
      cameraFocus: [1.8, 5.8, 5.2] as [number, number, number],
      lookAtFocus: [1.8, 2.0, -1.0] as [number, number, number],
      project: PROJECTS[2],
    },
    {
      id: 'movie-booking',
      number: '04',
      title: 'Online Movie Ticket Booking',
      subtitle: 'Reservation Engine',
      position: [6.8, 0, -3.2] as [number, number, number],
      accentColor: '#2DD4BF',
      cameraFocus: [6.8, 6.2, 3.0] as [number, number, number],
      lookAtFocus: [6.8, 2.4, -3.2] as [number, number, number],
      project: PROJECTS[3],
    },
    {
      id: 'ai-loan-calling',
      number: '05',
      title: 'CLN AI Loan Calling',
      subtitle: 'Telephony Prototype',
      position: [11.8, 0, -5.8] as [number, number, number],
      accentColor: '#E5A93C',
      cameraFocus: [11.8, 7.5, 0.5] as [number, number, number],
      lookAtFocus: [11.8, 3.0, -5.8] as [number, number, number],
      project: PROJECTS[4],
    },
  ];

  // Camera Target based on mode & selected stage
  const getCameraTarget = (): [number, number, number] => {
    if (mode === 'integrated') {
      return [0, 12, 23];
    }
    if (selectedStageIndex !== null) {
      return stages[selectedStageIndex].cameraFocus;
    }
    return [0, 7.5, 18];
  };

  const getCameraLookAt = (): [number, number, number] => {
    if (mode === 'integrated') {
      return [1.5, 2.0, 0];
    }
    if (selectedStageIndex !== null) {
      return stages[selectedStageIndex].lookAtFocus;
    }
    return [1.5, 2.2, -1.0];
  };

  const handleStageSelect = (idx: number) => {
    sound.playClick();
    setSelectedStageIndex(idx);
    if (mode === 'integrated') {
      onToggleMode('immersive');
    }
  };

  const handleResetCamera = () => {
    sound.playClick();
    setSelectedStageIndex(null);
  };

  return (
    <div className={`relative w-full h-full bg-[#08080B] overflow-hidden select-none ${className}`}>
      {hasWebGLError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#101013] text-[#EDEAE2]">
          <Box className="w-8 h-8 text-[#2DD4BF] mb-3" />
          <h3 className="font-display text-lg font-bold mb-1">WebGL Acceleration Unavailable</h3>
          <p className="max-w-md text-xs text-[#8E8E93] mb-4">
            3D rendering is not active on this device. Explore the software systems via the conventional archive below.
          </p>
        </div>
      ) : (
        <Canvas
          shadows
          camera={{ position: [0, 12, 23], fov: 40 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            gl.setClearColor('#08080B');
          }}
          onError={() => setHasWebGLError(true)}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <Suspense fallback={null}>
            <SpatialEnvironment />

            {/* Custom Architectural Monuments for Each Project */}
            <MonumentDixit
              id={stages[0].id}
              number={stages[0].number}
              title={stages[0].title}
              subtitle={stages[0].subtitle}
              position={stages[0].position}
              accentColor={stages[0].accentColor}
              isSelected={selectedStageIndex === 0}
              onClick={() => {
                handleStageSelect(0);
                onSelectProject(stages[0].project);
              }}
            />

            <MonumentCurriculum
              id={stages[1].id}
              number={stages[1].number}
              title={stages[1].title}
              subtitle={stages[1].subtitle}
              position={stages[1].position}
              accentColor={stages[1].accentColor}
              isSelected={selectedStageIndex === 1}
              onClick={() => {
                handleStageSelect(1);
                onSelectProject(stages[1].project);
              }}
            />

            <MonumentBreed
              id={stages[2].id}
              number={stages[2].number}
              title={stages[2].title}
              subtitle={stages[2].subtitle}
              position={stages[2].position}
              accentColor={stages[2].accentColor}
              isSelected={selectedStageIndex === 2}
              onClick={() => {
                handleStageSelect(2);
                onSelectProject(stages[2].project);
              }}
            />

            <MonumentMovie
              id={stages[3].id}
              number={stages[3].number}
              title={stages[3].title}
              subtitle={stages[3].subtitle}
              position={stages[3].position}
              accentColor={stages[3].accentColor}
              isSelected={selectedStageIndex === 3}
              onClick={() => {
                handleStageSelect(3);
                onSelectProject(stages[3].project);
              }}
            />

            <MonumentAICalling
              id={stages[4].id}
              number={stages[4].number}
              title={stages[4].title}
              subtitle={stages[4].subtitle}
              position={stages[4].position}
              accentColor={stages[4].accentColor}
              isSelected={selectedStageIndex === 4}
              onClick={() => {
                handleStageSelect(4);
                onSelectProject(stages[4].project);
              }}
            />

            {/* Connecting Architectural Stepped Walkways */}
            <PlatformStairs start={[-5.8, 0.4, 2.3]} end={[-4.7, 0.4, 1.8]} stepsCount={4} accentColor="#2DD4BF" />
            <PlatformStairs start={[-1.6, 0.4, 0.2]} end={[-0.2, 0.4, -0.4]} stepsCount={4} accentColor="#2DD4BF" />
            <PlatformStairs start={[3.4, 0.4, -1.8]} end={[4.9, 0.4, -2.4]} stepsCount={4} accentColor="#E5A93C" />
            <PlatformStairs start={[8.4, 0.4, -4.2]} end={[9.9, 0.4, -4.8]} stepsCount={4} accentColor="#E5A93C" />

            {/* Dynamic Camera Choreography */}
            <CameraController
              targetPosition={getCameraTarget()}
              targetLookAt={getCameraLookAt()}
            />
          </Suspense>
        </Canvas>
      )}

      {/* Integrated Mode Mini Controls (When embedded in Artboard) */}
      {mode === 'integrated' ? (
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              onToggleMode('immersive');
            }}
            className="px-3 py-1.5 bg-[#121215]/90 hover:bg-[#1A1A20] backdrop-blur-md border border-[#27272A] hover:border-[#2DD4BF] text-[#EDEAE2] hover:text-[#2DD4BF] rounded text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
          >
            <Maximize2 className="w-3 h-3" />
            <span>EXPAND 3D VIEW</span>
          </button>
        </div>
      ) : (
        /* Immersive Mode Full HUD */
        <>
          {/* Top Bar Actions */}
          <div className="absolute top-16 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <button
              onClick={() => {
                sound.playClick();
                onToggleMode('integrated');
              }}
              className="pointer-events-auto px-3.5 py-1.5 bg-[#121215]/90 backdrop-blur-md border border-[#27272A] hover:border-[#2DD4BF] text-[#EDEAE2] hover:text-[#2DD4BF] rounded text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO ARTBOARD</span>
            </button>

            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full border border-[#222226] font-mono text-[10px] text-[#8E8E93]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/80" />
              <span>CLICK MONUMENT TO INSPECT · ORBIT: DRAG · ZOOM: SCROLL</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={handleResetCamera}
                className="px-3 py-1.5 bg-[#121215]/90 backdrop-blur-md border border-[#27272A] hover:border-[#3E3E44] text-[#8E8E93] hover:text-[#EDEAE2] rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Reset Camera View"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">RESET</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onToggleMode('integrated');
                }}
                className="p-1.5 bg-[#121215]/90 backdrop-blur-md border border-[#27272A] text-[#8E8E93] hover:text-white rounded transition-colors cursor-pointer"
                title="Collapse to Artboard"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Floating Stage Progression */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-4xl">
            <div className="bg-[#121215]/95 backdrop-blur-md border border-[#27272A] rounded-xl p-2 shadow-2xl flex flex-wrap items-center justify-between gap-1.5 font-mono text-[11px]">
              <span className="hidden lg:inline text-[10px] text-[#666663] px-2 uppercase tracking-widest">
                MONUMENTS:
              </span>

              <div className="flex items-center flex-wrap gap-1.5 flex-1 justify-center sm:justify-start">
                {stages.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => handleStageSelect(idx)}
                    className={`px-3 py-1.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-2 ${
                      selectedStageIndex === idx
                        ? 'bg-[#1C1C22] border-[#383842] text-[#EDEAE2] font-semibold'
                        : 'bg-[#141417] border-[#222226] text-[#777] hover:text-[#BBB] hover:border-[#2C2C32]'
                    }`}
                  >
                    <span className="text-[10px] text-[#8E8E93]">{s.number}</span>
                    <span className="text-xs">{s.title}</span>
                  </button>
                ))}
              </div>

              {selectedStageIndex !== null && (
                <button
                  onClick={() => {
                    sound.playClick();
                    const s = stages[selectedStageIndex];
                    onSelectProject(s.project);
                  }}
                  className="px-3.5 py-1.5 bg-[#2DD4BF] hover:bg-[#28BFAC] text-black font-semibold rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>CASE STUDY</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
