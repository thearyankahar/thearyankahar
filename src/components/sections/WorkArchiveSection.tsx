import React, { useState } from 'react';
import { ArrowUpRight, List, LayoutGrid } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface WorkArchiveProps {
  onSelectProject: (project: Project) => void;
  hoveredProjectId?: string | null;
  onHoverProject?: (id: string | null) => void;
}

export const WorkArchiveSection: React.FC<WorkArchiveProps> = ({
  onSelectProject,
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'image'>('list');
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & SaaS' },
    { id: 'operations', label: 'Systems & Operations' },
    { id: 'ml', label: 'Applied ML & Vision' },
    { id: 'prototype', label: 'Prototypes' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'prototype') return p.isConcept;
    if (filter === 'fintech') return p.category.toLowerCase().includes('fintech') || p.id === 'fitoglobe';
    if (filter === 'operations') return p.id === 'smart-curriculum' || p.id === 'movie-booking' || p.category.toLowerCase().includes('operations');
    if (filter === 'ml') return p.category.toLowerCase().includes('ml') || p.category.toLowerCase().includes('vision');
    return true;
  });

  return (
    <section id="work" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 scroll-mt-14 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b border-[#303030] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-[#929292] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-[#35D6C0] font-bold">02 / SELECTED WORK</span>
              <span className="text-[#303030]">•</span>
              <span>SOFTWARE IMPLEMENTATIONS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F2F0EB] tracking-tight uppercase">
              Project Archive
            </h2>
            <p className="mt-2 text-sm text-[#929292] max-w-xl leading-relaxed">
              Full-stack platforms, relational database schemas, and engineering case studies.
            </p>
          </div>

          {/* Controls Bar: Category Filters & Dual View Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-1.5 font-mono text-xs">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    sound.playClick();
                    setFilter(c.id);
                  }}
                  className={`px-3 py-1.5 rounded text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    filter === c.id
                      ? 'bg-[#F2F0EB] text-[#0A0A0A] font-semibold'
                      : 'bg-[#151515] text-[#929292] hover:text-[#F2F0EB] border border-[#303030]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* View Mode Switcher (List View vs Image View) */}
            <div className="flex items-center gap-1 p-1 bg-[#151515] border border-[#303030] rounded">
              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('list');
                }}
                className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#202020] text-[#35D6C0] font-medium'
                    : 'text-[#929292] hover:text-[#F2F0EB]'
                }`}
                title="Typographic List View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px] hidden sm:inline">LIST</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('image');
                }}
                className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'image'
                    ? 'bg-[#202020] text-[#35D6C0] font-medium'
                    : 'text-[#929292] hover:text-[#F2F0EB]'
                }`}
                title="Visual Image View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px] hidden sm:inline">IMAGE</span>
              </button>
            </div>
          </div>
        </div>

        {/* View 1: Default Clean Typographic List View */}
        {viewMode === 'list' && (
          <div className="border-t border-[#303030] divide-y divide-[#303030]">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    sound.playClick();
                    onSelectProject(project);
                  }
                }}
                className="group py-6 sm:py-8 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#151515]/80 transition-colors cursor-pointer rounded-lg"
              >
                {/* Left: Project Number & Identity */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-[280px]">
                  <span className="font-mono text-xs text-[#929292] group-hover:text-[#35D6C0] transition-colors">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2F0EB] group-hover:text-[#35D6C0] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-[#929292] mt-0.5">
                      {project.category} · {project.year}
                    </div>
                  </div>
                </div>

                {/* Center: Concise Description */}
                <p className="text-xs sm:text-sm text-[#929292] max-w-xl leading-relaxed">
                  {project.tagline || project.summary}
                </p>

                {/* Right: Scope & Action Arrow */}
                <div className="flex items-center justify-between md:justify-end gap-4 min-w-[180px]">
                  <span className="font-mono text-[11px] text-[#929292]">
                    {project.isConcept ? 'Working Prototype' : ''}
                  </span>

                  <div className="w-8 h-8 rounded-full border border-[#303030] group-hover:border-[#35D6C0] group-hover:bg-[#35D6C0] text-[#929292] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Visual Image View (Monochrome High-Contrast Editorial Cards) */}
        {viewMode === 'image' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    sound.playClick();
                    onSelectProject(project);
                  }
                }}
                className="group flex flex-col justify-between border border-[#303030] bg-[#151515]/60 hover:border-[#35D6C0]/70 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              >
                {/* 16:10 Monochromatic Image Preview Frame (Pure Grayscale, No Color on Hover) */}
                {(project.bannerImage || project.image) && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A] border-b border-[#303030]">
                    <img
                      src={project.bannerImage || project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter grayscale contrast-[1.12] brightness-[0.92] group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Card Content Body: Clean, Truthful & Unpretentious */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#929292] mb-2">
                      <span className="uppercase">{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#F2F0EB] group-hover:text-[#35D6C0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#929292] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#303030] flex items-center justify-between font-mono text-xs text-[#929292]">
                    <span className="text-[#929292] text-[11px]">
                      {project.isConcept ? 'Working Prototype' : ''}
                    </span>
                    <span className="text-[#F2F0EB] group-hover:text-[#35D6C0] flex items-center gap-1.5 transition-colors">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
