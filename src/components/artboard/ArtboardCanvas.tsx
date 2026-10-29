import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface ArtboardCanvasProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectProject?: (project: Project) => void;
  showGrid?: boolean;
}

export const ArtboardCanvas: React.FC<ArtboardCanvasProps> = ({
  onNavigateSection,
}) => {
  return (
    <section
      id="intro"
      className="relative w-full min-h-[calc(100vh-3.5rem)] pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16 flex flex-col justify-between scroll-mt-14 z-10"
    >
      {/* Main Editorial Hero Stack */}
      <div className="my-auto max-w-5xl w-full">
        {/* Concise Section Eyebrow (Eliminates redundant second header bar) */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#929292] uppercase tracking-widest mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#35D6C0]" />
          <span className="text-[#35D6C0] font-semibold">01 / OVERVIEW</span>
          <span className="text-[#404040]">•</span>
          <span>FULL-STACK DEVELOPER</span>
        </div>

        {/* Improved Main Headline: Clear Professional Value & Intentional Line Breaks */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] text-[#F2F0EB] tracking-tight leading-[1.04] uppercase max-w-5xl">
          I build web applications<br className="hidden sm:inline" /> from interface to database.
        </h1>

        {/* Clear Supporting Introduction */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#929292] font-normal leading-relaxed max-w-2xl">
          I’m <span className="text-[#F2F0EB] font-medium">Aryan Kahar</span>, a Full-Stack Developer focused on building thoughtful user experiences, reliable backend systems, and database-driven applications.
        </p>

        {/* Two Clear, Functional Calls to Action */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          {/* Primary Action: Explore my work */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateSection('work');
            }}
            className="px-6 py-3.5 bg-[#F2F0EB] hover:bg-[#35D6C0] text-[#0A0A0A] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors duration-200 flex items-center gap-2.5 cursor-pointer shadow-sm group focus:outline-none focus:ring-2 focus:ring-[#35D6C0]"
            aria-label="Explore my work"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary Action: Get in touch */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateSection('contact');
            }}
            className="px-6 py-3.5 bg-[#151515]/60 hover:bg-[#202020] border border-[#303030] hover:border-[#35D6C0] text-[#F2F0EB] font-medium text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-2.5 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#35D6C0]"
            aria-label="Get in touch"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 text-[#35D6C0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Subtle, Credible Availability Indicator */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2.5 font-mono text-xs text-[#929292]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35D6C0] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35D6C0]" />
          </span>
          <span className="text-[#F2F0EB]/90">Open to software development opportunities</span>
          <span className="text-[#404040] hidden sm:inline">•</span>
          <span className="text-[#929292] hidden sm:inline">Pune, IN · Hybrid / Remote</span>
        </div>
      </div>

      {/* Grounded Swiss Bottom Anchor Bar */}
      <div className="w-full border-t border-[#303030] pt-4 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[#929292]">
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          <span className="text-[#F2F0EB] font-medium">CORE DISCIPLINES</span>
          <span className="text-[#404040]">/</span>
          <span>REST APIs</span>
          <span className="text-[#404040]">•</span>
          <span>Relational Schemas</span>
          <span className="text-[#404040]">•</span>
          <span>React & Next.js</span>
          <span className="text-[#404040]">•</span>
          <span>MySQL & Node</span>
        </div>
        <div className="text-left sm:text-right text-[#666663]">
          SCROLL OR USE TOP NAVIGATION TO EXPLORE WORK
        </div>
      </div>
    </section>
  );
};
