import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { ArtboardCanvas } from './components/artboard/ArtboardCanvas';
import { WorkArchiveSection } from './components/sections/WorkArchiveSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ProjectModal } from './components/projects/ProjectModal';
import { Project } from './types';
import { sound } from './utils/audio';
import { Box } from 'lucide-react';

// Unified 3D Spatial Scene
const SpatialScene = lazy(() =>
  import('./components/three/SpatialScene').then((m) => ({ default: m.SpatialScene }))
);

export function App() {
  const [spatialMode, setSpatialMode] = useState<'integrated' | 'immersive'>('integrated');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;

      if (e.key === 'm' || e.key === 'M') {
        sound.playClick();
        setSpatialMode((prev) => (prev === 'integrated' ? 'immersive' : 'integrated'));
      }
      if (e.key === 'Escape' && spatialMode === 'immersive') {
        sound.playClick();
        setSpatialMode('integrated');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, spatialMode]);

  const handleNavigateSection = (sectionId: string) => {
    sound.playClick();
    if (spatialMode === 'immersive') {
      setSpatialMode('integrated');
    }
    setTimeout(() => {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div className="min-h-screen bg-[#0F0F11] text-[#EDEAE2] selection:bg-[#2DD4BF] selection:text-black">
      {/* Top Editorial Navbar (Available at all times) */}
      <Navbar
        currentView={spatialMode === 'immersive' ? '3d' : 'artboard'}
        onViewChange={(view) => setSpatialMode(view === '3d' ? 'immersive' : 'integrated')}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Experience Layout */}
      {spatialMode === 'immersive' ? (
        /* Full Immersive 3D Spatial Environment */
        <main className="fixed inset-0 z-30 w-full h-screen bg-[#08080B] animate-in fade-in duration-300">
          <Suspense
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#08080B] text-[#EDEAE2] font-mono">
                <Box className="w-8 h-8 text-[#2DD4BF] animate-spin mb-3" />
                <div className="text-xs tracking-widest text-[#2DD4BF] uppercase">
                  INITIALIZING SPATIAL SCENE
                </div>
              </div>
            }
          >
            <SpatialScene
              mode="immersive"
              onToggleMode={setSpatialMode}
              onSelectProject={(project) => setSelectedProject(project)}
            />
          </Suspense>
        </main>
      ) : (
        /* Editorial Artboard Experience with Integrated 3D Spatial Window */
        <main className="transition-opacity duration-300">
          <ArtboardCanvas
            onSelectProject={(project) => setSelectedProject(project)}
            onEnter3D={() => setSpatialMode('immersive')}
            onOpenArchive={() => handleNavigateSection('work')}
            children3D={
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-[#08080B] text-[#8E8E93] font-mono text-xs">
                    Loading 3D Viewport...
                  </div>
                }
              >
                <SpatialScene
                  mode="integrated"
                  onToggleMode={setSpatialMode}
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              </Suspense>
            }
          />

          {/* Conventional Accessible Project Archive */}
          <WorkArchiveSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* About Section */}
          <AboutSection />

          {/* Applied Capabilities & Stack */}
          <SkillsSection />

          {/* Direct Communication Channels */}
          <ContactSection />

          {/* Editorial Footer */}
          <Footer
            onToggle3D={() => setSpatialMode('immersive')}
          />
        </main>
      )}

      {/* Project Case Study Drawer / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
