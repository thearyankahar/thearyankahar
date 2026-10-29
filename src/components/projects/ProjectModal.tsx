import React, { useEffect } from 'react';
import { X, Server, CheckCircle2, AlertTriangle, Layers, Cpu } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#141417] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#222226] flex items-center justify-between bg-[#16161A]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#1F1F24] text-[#2DD4BF] border border-[#2D2D35]">
              PROJECT {project.number}
            </span>

            <span className="text-xs font-mono text-[#8E8E93] uppercase">
              {project.category}
            </span>

            {/* Status Pill */}
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-medium ${
                project.isConcept
                  ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                  : 'bg-[#1C1C22] text-[#EDEAE2] border border-[#2F2F36]'
              }`}
            >
              {project.status}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg border border-[#27272A] hover:border-[#3E3E44] text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-[#EDEAE2]">
          
          {/* Main Title & Tagline */}
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-[#8E8E93] mt-1">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm text-[#BDB9B0] leading-relaxed border-l border-[#2DD4BF]/50 pl-3 py-0.5">
              {project.tagline}
            </p>
          </div>

          {/* Prototype / Concept Banner */}
          {project.isConcept && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase text-[10px] mb-0.5">
                  Concept & Working Developer Prototype Notice
                </strong>
                This system represents an architectural specification and functional developer prototype testing local multi-channel USB GSM modem AT-commands. It distinguishes hardware driver prototyping from high-volume production cloud telephony scale.
              </div>
            </div>
          )}

          {/* Technical Summary */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#8E8E93] tracking-wider mb-2">
              System Overview & Purpose
            </h3>
            <p className="text-sm text-[#B4B1A8] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Core Modules Implemented */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#8E8E93] tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Implemented Core Modules</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9E9E99]">
              {project.coreModules.map((module, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#111114] border border-[#202024]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/80 mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Decisions */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#8E8E93] tracking-wider mb-3 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Engineering Decisions & Implementation Notes</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B4B1A8]">
              {project.engineeringDecisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]/80 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Notes (if present) */}
          {project.technicalNotes && project.technicalNotes.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase text-[#8E8E93] tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#8E8E93]" />
                <span>Verified Architecture Notes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                {project.technicalNotes.map((note, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#111114] border border-[#202024]">
                    <div className="text-[10px] text-[#666] uppercase">{note.label}</div>
                    <div className="text-xs text-[#B4B1A8] mt-1 leading-snug">{note.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Technologies Used */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#8E8E93] tracking-wider mb-2">
              Verified Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#1A1A1F] border border-[#26262B] text-xs font-mono text-[#EDEAE2]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 border-t border-[#222226] bg-[#16161A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="text-[#666663] text-[11px]">
            Developer: Aryan Shyamlal Kahar · Verified Source Code
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/thearyankahar"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#202025] hover:bg-[#2A2A30] text-[#EDEAE2] transition-colors flex items-center gap-2 cursor-pointer border border-[#2B2B32]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-1.5 rounded-lg bg-[#2DD4BF] text-black font-semibold hover:bg-[#28BFAC] transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
