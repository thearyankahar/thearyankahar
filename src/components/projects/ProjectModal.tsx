import React, { useEffect } from 'react';
import { X, Server, CheckCircle2, Layers, Cpu, Compass, ShieldAlert, GitBranch, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#151515] border border-[#303030] shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* A. Modal Sticky Header */}
        <div className="p-4 sm:p-6 border-b border-[#303030] flex items-center justify-between bg-[#0A0A0A] sticky top-0 z-20">
          <div className="flex items-center gap-3 font-mono text-xs text-[#929292]">
            <span className="text-[#35D6C0] font-semibold">{project.number}</span>
            <span className="text-[#404040]">/</span>
            <span className="text-[#F2F0EB] uppercase tracking-wider">{project.category}</span>
            <span className="text-[#404040]">/</span>
            <span>{project.year}</span>
            {project.isConcept && (
              <span className="px-2 py-0.5 text-[10px] bg-[#202020] text-[#929292] border border-[#303030] uppercase">
                Working Prototype
              </span>
            )}
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 border border-[#303030] hover:border-[#555] text-[#929292] hover:text-[#F2F0EB] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-[#F2F0EB]">
          
          {/* Visual Screenshot Banner (Grayscale High-Contrast Treatment) */}
          {project.bannerImage && (
            <div className="relative overflow-hidden border border-[#303030] bg-[#0A0A0A]">
              <div className="relative h-56 sm:h-80 overflow-hidden">
                <img
                  src={project.bannerImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.08] brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-25" />
              </div>
              <div className="p-3 bg-[#0A0A0A] border-t border-[#303030] flex items-center justify-between text-xs font-mono text-[#929292]">
                <span className="text-[#F2F0EB]">{project.evidenceLabel || project.title}</span>
                <span className="text-[#666]">{project.year}</span>
              </div>
            </div>
          )}

          {/* Project Overview & Headlines */}
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F2F0EB] tracking-tight uppercase">
              {project.title}
            </h2>
            <div className="text-xs font-mono text-[#35D6C0] mt-1.5 uppercase tracking-wider font-semibold">
              {project.subtitle} · {project.year}
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#929292] leading-relaxed border-l-2 border-[#35D6C0] pl-4 py-1">
              {project.tagline}
            </p>
          </div>

          {/* Prototype / Concept Banner (if applicable) */}
          {project.isConcept && (
            <div className="p-5 bg-[#0A0A0A] border border-[#303030] flex items-start gap-3.5 text-xs text-[#929292] leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-[#35D6C0] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F2F0EB] block font-mono uppercase text-[11px] mb-1">
                  Developer Prototype Scope
                </strong>
                This system represents a technical architecture specification and working developer prototype testing serial AT-commands on USB GSM modems with Redis queues.
              </div>
            </div>
          )}

          {/* Problem and Purpose */}
          <div className="p-6 bg-[#0A0A0A] border border-[#303030] space-y-4">
            <div>
              <h3 className="font-mono text-xs uppercase text-[#F2F0EB] tracking-wider mb-2 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#35D6C0]" />
                <span>The Problem & Industry Context</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {project.intendedUsers && (
              <div className="pt-4 border-t border-[#202020]">
                <span className="font-mono text-[10px] uppercase text-[#666] tracking-wider block mb-1">
                  Intended Users & Workflow:
                </span>
                <p className="text-xs text-[#929292] leading-relaxed">
                  {project.intendedUsers}
                </p>
              </div>
            )}
          </div>

          {/* Direct Implementation */}
          <div className="space-y-4">
            <div>
              <h3 className="font-mono text-xs uppercase text-[#F2F0EB] tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#35D6C0]" />
                <span>My Direct Implementation</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                {project.myContribution}
              </p>
            </div>

            {/* Completed Features Grid */}
            <div>
              <div className="font-mono text-[11px] text-[#35D6C0] font-semibold mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CORE MODULES & FEATURES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.completedFeatures.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-[#0A0A0A] border border-[#303030] flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D6C0] mt-1.5 flex-shrink-0" />
                    <span className="text-[#F2F0EB] leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prototype / Planned Features */}
            {project.prototypeOrPlannedFeatures && project.prototypeOrPlannedFeatures.length > 0 && (
              <div className="pt-2">
                <div className="font-mono text-[11px] text-[#929292] font-semibold mb-2.5 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#929292]" />
                  <span>PLANNED / PROTOTYPE SCOPE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.prototypeOrPlannedFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[#0A0A0A] border border-[#202020] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#666] mt-1.5 flex-shrink-0" />
                      <span className="text-[#929292] leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technical Architecture */}
          {project.architectureLayers && project.architectureLayers.length > 0 && (
            <div className="p-6 bg-[#0A0A0A] border border-[#303030]">
              <h3 className="font-mono text-xs uppercase text-[#F2F0EB] tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#35D6C0]" />
                <span>System Architecture & Component Layers</span>
              </h3>

              <div className="space-y-3 font-mono text-xs">
                {project.architectureLayers.map((layer, idx) => (
                  <div key={idx} className="p-4 bg-[#151515] border border-[#303030] flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="md:w-1/3">
                      <span className="text-[10px] text-[#666] uppercase block">LAYER 0{idx + 1}</span>
                      <span className="font-semibold text-[#F2F0EB]">{layer.layer}</span>
                    </div>

                    <div className="md:w-1/3 flex flex-wrap gap-1.5">
                      {layer.components.map((c, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#0A0A0A] text-[#35D6C0] text-[10px] border border-[#303030]">
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="md:w-1/3 text-[11px] text-[#929292] font-sans">
                      {layer.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Decisions & Technical Trade-offs */}
          <div className="space-y-4">
            <div>
              <h3 className="font-mono text-xs uppercase text-[#F2F0EB] tracking-wider mb-3 flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#35D6C0]" />
                <span>Key Engineering Decisions</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#929292]">
                {project.engineeringDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#0A0A0A] border border-[#303030]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#35D6C0] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-[#F2F0EB]">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trade-offs & Implementation Challenges */}
            {project.tradeoffs && project.tradeoffs.length > 0 && (
              <div className="pt-2">
                <h4 className="font-mono text-[11px] text-[#F2F0EB] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-[#35D6C0]" />
                  <span>Technical Trade-offs & Challenges</span>
                </h4>
                <div className="space-y-2.5 font-mono text-xs">
                  {project.tradeoffs.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#0A0A0A] border border-[#303030]">
                      <div className="text-[10px] text-[#35D6C0] uppercase mb-1 font-semibold">
                        CHALLENGE: {item.challenge}
                      </div>
                      <div className="text-[#F2F0EB] text-xs font-sans leading-relaxed">
                        <strong className="font-mono text-[#929292] font-normal">ENGINEERING RESOLUTION: </strong>
                        {item.decision}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#F2F0EB] tracking-wider mb-3">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#0A0A0A] border border-[#303030] text-xs font-mono text-[#F2F0EB]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 border-t border-[#303030] bg-[#0A0A0A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="text-[#929292] text-[11px]">
            Aryan Shyamlal Kahar · Full-Stack Developer · Pune, India
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/thearyankahar"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#151515] hover:bg-[#202020] text-[#F2F0EB] transition-colors flex items-center gap-2 cursor-pointer border border-[#303030]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 text-[#929292]" />
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-5 py-2 bg-[#35D6C0] text-[#0A0A0A] font-bold hover:bg-[#28BFAC] transition-colors cursor-pointer uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
