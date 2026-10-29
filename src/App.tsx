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

// Lazy-load Three.js 3D spatial scene for fast initial render
const SpatialScene = lazy(() =>
  import('./components/three/SpatialScene').then((m) => ({ default: m.SpatialScene }))
);

export function App() {
  const [currentView, setCurrentView] = useState<'artboard' | '3d'>('artboard');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject && (e.key === 'm' || e.key === 'M')) {
        sound.playClick();
        setCurrentView((prev) => (prev === 'artboard' ? '3d' : 'artboard'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const handleNavigateSection = (sectionId: string) => {
    sound.playClick();
    if (currentView === '3d') {
      setCurrentView('artboard');
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F11] text-[#EDEAE2] selection:bg-[#2DD4BF] selection:text-black">
      {/* Top Editorial Navbar */}
      <Navbar
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Viewport */}
      {currentView === 'artboard' ? (
        <main className="transition-opacity duration-300 animate-in fade-in">
          {/* Editorial Artboard Canvas (Reference A) */}
          <ArtboardCanvas
            onSelectProject={(project) => setSelectedProject(project)}
            onEnter3D={() => setCurrentView('3d')}
            onOpenArchive={() => handleNavigateSection('work')}
          />

          {/* Conventional Project Archive */}
          <WorkArchiveSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* About Section */}
          <AboutSection />

          {/* Skills & Applied Tech Stack */}
          <SkillsSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Editorial Footer */}
          <Footer
            onToggle3D={() => setCurrentView('3d')}
          />
        </main>
      ) : (
        /* Immersive 3D Spatial Environment (Reference B) */
        <main className="w-full h-screen transition-opacity duration-300 animate-in fade-in">
          <Suspense
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#08080B] text-[#EDEAE2] font-mono">
                <Box className="w-8 h-8 text-[#2DD4BF] animate-spin mb-3" />
                <div className="text-xs tracking-widest text-[#2DD4BF] uppercase">
                  INITIALIZING 3D SPATIAL ENVIRONMENT
                </div>
                <div className="text-[11px] text-[#666] mt-1.5">Loading WebGL runtime and architectural geometry...</div>
              </div>
            }
          >
            <SpatialScene
              onSelectProject={(project) => setSelectedProject(project)}
              onExit3D={() => setCurrentView('artboard')}
            />
          </Suspense>
        </main>
      )}

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
