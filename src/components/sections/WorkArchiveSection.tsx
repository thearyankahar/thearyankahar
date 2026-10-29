import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface WorkArchiveProps {
  onSelectProject: (project: Project) => void;
}

export const WorkArchiveSection: React.FC<WorkArchiveProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Fintech', 'EdTech', 'Machine Learning', 'Concept'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'Concept') return p.isConcept;
    if (filter === 'Machine Learning') return p.category.includes('ML') || p.category.includes('Vision');
    return p.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222226]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#8E8E93] uppercase tracking-widest mb-2">
            <span>01 / PROJECT ARCHIVE</span>
            <span className="text-[#333]">•</span>
            <span>VERIFIED CODEBASES</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Software Systems & Implementations
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#8E8E93] max-w-2xl leading-relaxed">
            Case studies grounded in actual implementation codebases, database schemas, and developer prototypes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-2 font-mono text-xs">
          <Filter className="w-3.5 h-3.5 text-[#666] mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              className={`px-3 py-1.5 rounded-md border text-xs transition-all cursor-pointer capitalize ${
                filter === cat
                  ? 'bg-[#1C1C22] border-[#2DD4BF] text-[#2DD4BF] font-medium'
                  : 'bg-[#141417] border-[#24242A] text-[#777] hover:text-[#CCC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              sound.playClick();
              onSelectProject(project);
            }}
            className="group p-5 sm:p-6 rounded-xl bg-[#131316] border border-[#222226] hover:border-[#383842] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between font-mono text-xs mb-3">
                <span className="text-xs font-semibold text-[#8E8E93]">
                  {project.number}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-medium ${
                      project.isConcept
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                        : 'bg-[#1A1A1F] text-[#EDEAE2] border border-[#27272C]'
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-[#666] text-[10px]">{project.year}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#2DD4BF] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#8E8E93] mt-1">
                {project.subtitle}
              </p>
              <p className="mt-2.5 text-xs text-[#9E9E99] leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>

            {/* Tech stack & Action */}
            <div className="mt-5 pt-3.5 border-t border-[#1C1C22] flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 rounded bg-[#18181D] text-[#777] text-[10px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-[10px] font-mono text-[#555] self-center">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-[#8E8E93] group-hover:text-[#2DD4BF] group-hover:translate-x-0.5 transition-all">
                <span>DETAILS</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
