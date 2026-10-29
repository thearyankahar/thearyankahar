import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { ArtboardCanvas } from './components/artboard/ArtboardCanvas';
import { WorkArchiveSection } from './components/sections/WorkArchiveSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ProjectModal } from './components/projects/ProjectModal';
import { EducationModal } from './components/sections/EducationModal';
import { Project } from './types';
import { sound } from './utils/audio';
import { Box, Sparkles } from 'lucide-react';

// Code-split and lazy-load Three.js 3D spatial scene for blazing-fast initial load
const SpatialScene = lazy(() =>
  import('./components/three/SpatialScene').then((m) => ({ default: m.SpatialScene }))
);

export function App() {
  const [currentView, setCurrentView] = useState<'artboard' | '3d'>('artboard');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEducationOpen, setIsEducationOpen] = useState<boolean>(false);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle 3D with 'm' key if no modal open
      if (!selectedProject && !isEducationOpen && (e.key === 'm' || e.key === 'M')) {
        sound.playClick();
        setCurrentView((prev) => (prev === 'artboard' ? '3d' : 'artboard'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isEducationOpen]);

  const handleNavigateSection = (sectionId: string) => {
    sound.playClick();
    if (currentView === '3d') {
      setCurrentView('artboard');
      // Wait briefly for DOM to mount
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
    <div className="min-h-screen bg-[#202020] text-[#F2F0E9] selection:bg-[#00D9E8] selection:text-black">
      {/* Top Global Editorial Header */}
      <Navbar
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        onOpenEducation={() => setIsEducationOpen(true)}
        onOpenArchive={() => handleNavigateSection('work')}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Experience Render Mode */}
      {currentView === 'artboard' ? (
        <main className="transition-opacity duration-500 animate-in fade-in">
          {/* Flagship Editorial Artboard (Inspired by Reference Image A) */}
          <ArtboardCanvas
            onSelectProject={(project) => setSelectedProject(project)}
            onEnter3D={() => setCurrentView('3d')}
            onOpenEducation={() => setIsEducationOpen(true)}
            onOpenArchive={() => handleNavigateSection('work')}
          />

          {/* Accessible Conventional Project Repository Archive */}
          <WorkArchiveSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* About & Philosophy Section */}
          <AboutSection
            onOpenEducation={() => setIsEducationOpen(true)}
          />

          {/* Skills & Tech Ecosystem Matrix */}
          <SkillsSection />

          {/* Direct Contact Section */}
          <ContactSection />

          {/* Art-Directed Minimal Footer */}
          <Footer
            onToggle3D={() => setCurrentView('3d')}
            onOpenEducation={() => setIsEducationOpen(true)}
          />
        </main>
      ) : (
        /* Immersive 3D Spatial Environment (Inspired by Reference Image B) */
        <main className="w-full h-screen transition-opacity duration-500 animate-in fade-in">
          <Suspense
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#08080B] text-[#F2F0E9] font-mono">
                <Box className="w-10 h-10 text-[#00D9E8] animate-spin mb-4" />
                <div className="text-sm tracking-widest text-[#00D9E8] uppercase flex items-center gap-2">
                  <span>INITIALIZING 3D SPATIAL RUNTIME</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-[#666] mt-2">Loading WebGL shaders and architectural assets...</div>
              </div>
            }
          >
            <SpatialScene
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenEducation={() => setIsEducationOpen(true)}
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

      {/* Verified Education & Credentials Modal */}
      <EducationModal
        isOpen={isEducationOpen}
        onClose={() => setIsEducationOpen(false)}
      />
    </div>
  );
}

export default App;
