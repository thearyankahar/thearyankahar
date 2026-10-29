import React, { useState } from 'react';
import { ArrowUpRight, Shield, Layers, Filter, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface WorkArchiveProps {
  onSelectProject: (project: Project) => void;
}

export const WorkArchiveSection: React.FC<WorkArchiveProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Fintech', 'Healthcare', 'HealthTech', 'Concept'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'Concept') return p.isConcept;
    return p.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#26262B]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00D9E8] uppercase tracking-widest mb-2">
            <span>01 / ENGINEERING REPOSITORY</span>
            <span className="text-[#444]">•</span>
            <span>VERIFIED WORK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Selected Systems & Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A6A6A1] max-w-2xl leading-relaxed">
            Accessible project archive detailing verified architectural contributions, database designs, security remediations, and distributed cloud deployments.
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
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer capitalize ${
                filter === cat
                  ? 'bg-[#222] border-[#00D9E8] text-[#00D9E8] font-semibold'
                  : 'bg-[#141416] border-[#2A2A30] text-[#888] hover:text-[#CCC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              sound.playClick();
              onSelectProject(project);
            }}
            className="group p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#24242A] hover:border-[#383844] transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Accent Glow */}
            <div
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none"
              style={{ backgroundColor: project.accentColor }}
            />

            <div>
              {/* Header row */}
              <div className="flex items-center justify-between font-mono text-xs mb-4">
                <span
                  className="px-2.5 py-0.5 rounded font-bold"
                  style={{
                    backgroundColor: `${project.accentColor}18`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}35`,
                  }}
                >
                  {project.number}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                      project.isConcept
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-500/20'
                        : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-[#666]">{project.year}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#00D9E8] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#888] mt-1">
                {project.subtitle}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#B4B4AC] leading-relaxed line-clamp-3">
                {project.summary}
              </p>

              {/* Key Metrics or Security highlight */}
              {project.metricsOrSecurity && project.metricsOrSecurity[0] && (
                <div className="mt-4 p-3 rounded-xl bg-[#17171C] border border-[#26262E] flex items-center gap-3">
                  <Shield className="w-4 h-4 text-[#00D9E8] flex-shrink-0" />
                  <div className="text-xs font-mono">
                    <span className="text-[#777] uppercase text-[10px] block">
                      {project.metricsOrSecurity[0].label}
                    </span>
                    <span className="text-white font-semibold">
                      {project.metricsOrSecurity[0].value}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Tech stack tags & Action */}
            <div className="mt-6 pt-4 border-t border-[#222] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[#18181E] text-[#888] text-[10px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] font-mono text-[#555] self-center">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-[#00D9E8] group-hover:translate-x-1 transition-transform">
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
