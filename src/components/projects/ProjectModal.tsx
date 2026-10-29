import React, { useEffect } from 'react';
import { X, ExternalLink, Shield, Server, CheckCircle2, AlertTriangle, ArrowRight, Layers, Cpu } from 'lucide-react';
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
        className="relative w-full max-w-4xl bg-[#121214] border border-[#2D2D32] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#242428] flex items-center justify-between bg-[#151518]">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-0.5 rounded text-xs font-mono font-bold"
              style={{
                backgroundColor: `${project.accentColor}20`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}40`,
              }}
            >
              PROJECT {project.number}
            </span>

            <span className="text-xs font-mono text-[#888] uppercase">
              {project.category}
            </span>

            {/* Status Pill */}
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                project.isConcept
                  ? 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                  : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
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
            className="p-1.5 rounded-lg border border-[#333] hover:border-[#666] text-[#A6A6A1] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#F2F0E9]">
          
          {/* Main Title & Tagline */}
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-[#A6A6A1] mt-1">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#D4D4CE] leading-relaxed border-l-2 pl-4 py-1"
               style={{ borderColor: project.accentColor }}>
              {project.tagline}
            </p>
          </div>

          {/* Verification Badge for Concepts */}
          {project.isConcept && (
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-start gap-3 text-xs text-purple-200">
              <AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase text-[11px] mb-1">
                  Concept & Working Developer Prototype Notice
                </strong>
                This project represents a hardware GSM telephony architecture concept and working developer prototype with serial AT-command drivers. It clearly distinguishes local hardware testing from high-volume production scale.
              </div>
            </div>
          )}

          {/* Quick Metrics / Security Audit */}
          {project.metricsOrSecurity && project.metricsOrSecurity.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-3 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#00D9E8]" />
                <span>Verified Engineering Metrics & Security Remediations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.metricsOrSecurity.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#16161A] border border-[#26262B] flex flex-col justify-between"
                  >
                    <div className="text-[10px] font-mono text-[#777] uppercase">
                      {metric.label}
                    </div>
                    <div
                      className="text-sm font-mono font-bold mt-1"
                      style={{ color: project.accentColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-[#A6A6A1] mt-1">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-2">
              Overview & Problem Solved
            </h3>
            <p className="text-sm text-[#C4C4BC] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Architectural Highlights */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-3 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#63E6C1]" />
              <span>Architectural & Engineering Decisions</span>
            </h3>
            <ul className="space-y-2.5">
              {project.architecturalHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4CE]">
                  <CheckCircle2 className="w-4 h-4 text-[#63E6C1] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* End-to-End System Flow */}
          {project.systemFlow && project.systemFlow.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#F7D447]" />
                <span>End-to-End Architecture Flow</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 font-mono">
                {project.systemFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#151518] border border-[#26262C] flex flex-col justify-between relative"
                  >
                    <div>
                      <span className="text-[10px] text-[#666] font-bold">
                        {step.step}
                      </span>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {step.label}
                      </div>
                    </div>
                    <p className="text-[11px] text-[#888] mt-2 leading-tight">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#00D9E8]" />
              <span>Demonstrated Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A6A6A1]">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#16161A] border border-[#222]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D9E8]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-2">
              Verified Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#1C1C22] border border-[#333] text-xs font-mono text-[#E0E0DA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud Services */}
          {project.cloudServices && (
            <div>
              <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-2">
                Cloud Infrastructure & Edge Providers
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.cloudServices.map((cloud) => (
                  <span
                    key={cloud}
                    className="px-2.5 py-1 rounded bg-[#16161A] border border-[#00D9E8]/30 text-xs font-mono text-[#00D9E8]"
                  >
                    {cloud}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 border-t border-[#242428] bg-[#151518] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="text-[#888] text-[11px]">
            Author: Aryan Shyamlal Kahar · Production Verified
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/thearyankahar"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#222] hover:bg-[#333] text-white transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB REPO</span>
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-[#00D9E8] text-black font-bold hover:bg-[#63E6C1] transition-colors cursor-pointer"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
