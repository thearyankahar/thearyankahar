import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { ArtboardCanvas } from './components/artboard/ArtboardCanvas';
import { WorkArchiveSection } from './components/sections/WorkArchiveSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ProjectModal } from './components/projects/ProjectModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';
import { sound } from './utils/audio';

// Persistent Futuristic Architectural 3D Scene
const SpatialScene = lazy(() =>
  import('./components/three/SpatialScene').then((m) => ({ default: m.SpatialScene }))
);

export function App() {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState<boolean>(false);

  // 1. Direct Navigation & URL Hash Routing Synchronization
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      if (hash.startsWith('project/')) {
        const projectId = hash.replace('project/', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          setActiveSection('work');
          return;
        }
      }

      const validSections = ['intro', 'work', 'about', 'skills', 'certifications', 'contact'];
      if (validSections.includes(hash)) {
        setActiveSection(hash);
        setSelectedProject(null);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'auto' });
        }
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  // 2. Cinematic Scrolling: Synchronize Active Section with Viewport
  useEffect(() => {
    const sectionIds = ['intro', 'work', 'about', 'skills', 'certifications', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !window.location.hash.startsWith('#project/')) {
            setActiveSection(entry.target.id);
            // Non-intrusive URL state update without scroll jump
            if (window.location.hash !== `#${entry.target.id}`) {
              window.history.replaceState(null, '', `#${entry.target.id}`);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 3. Direct Navigation Handler
  const handleNavigateSection = (sectionId: string) => {
    sound.playClick();
    setActiveSection(sectionId);
    setSelectedProject(null);
    window.location.hash = sectionId;

    if (sectionId === 'intro' || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 4. Clickable Project Selection (from 3D or HTML)
  const handleSelectProject = (project: Project) => {
    sound.playClick();
    setSelectedProject(project);
    window.location.hash = `project/${project.id}`;
  };

  // 5. Close Project Case Study and Return to Archive
  const handleCloseProject = () => {
    sound.playClick();
    setSelectedProject(null);
    window.location.hash = 'work';
  };

  const handleToggleGrid = () => {
    sound.playClick();
    setShowGrid((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F2F0EB] selection:bg-[#35D6C0] selection:text-[#0A0A0A] font-sans antialiased">
      
      {/* Swiss Architectural Grid Overlay (Optional Toggle) */}
      {showGrid && (
        <div className="fixed inset-0 pointer-events-none z-40 swiss-grid-overlay transition-opacity duration-300" />
      )}

      {/* 1. Persistent Shared 3D Architectural World */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Suspense fallback={null}>
          <SpatialScene
            activeSection={activeSection}
            focusedProject={selectedProject}
            hoveredProjectId={hoveredProjectId}
            onSelectProject={handleSelectProject}
            onHoverProject={setHoveredProjectId}
          />
        </Suspense>
      </div>

      {/* 2. Structured Editorial HTML Layers (Semantic, Accessible & Responsive) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Persistent Editorial Top Navigation (Direct Navigation Method) */}
        <Navbar
          activeSection={activeSection}
          onNavigateSection={handleNavigateSection}
          showGrid={showGrid}
          onToggleGrid={handleToggleGrid}
        />

        {/* Continuous Flow of Portfolio Content */}
        <main className="flex-1">
          {/* Zone 1: The Arrival Space (Hero Introduction) */}
          <ArtboardCanvas
            onSelectProject={handleSelectProject}
            onNavigateSection={handleNavigateSection}
          />

          {/* Zone 2: The Project Colonnade (Software Implementations Archive) */}
          <WorkArchiveSection
            onSelectProject={handleSelectProject}
            hoveredProjectId={hoveredProjectId}
            onHoverProject={setHoveredProjectId}
          />

          {/* Zone 3: The Reflection Chamber (Engineering Principles & Profile) */}
          <AboutSection />

          {/* Zone 4: The Technical Matrix (Applied Capabilities & Verified Stack) */}
          <SkillsSection />

          {/* Zone 5: Professional Credentials & Certifications */}
          <CertificationsSection />

          {/* Zone 6: The Final Gateway (Direct Communication Channels) */}
          <ContactSection />
        </main>

        {/* Editorial Colophon & Direct Links */}
        <Footer onNavigateSection={handleNavigateSection} />
      </div>

      {/* 3. Individual Project Space: Reusable Case Study Inspection Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </div>
  );
}

export default App;
