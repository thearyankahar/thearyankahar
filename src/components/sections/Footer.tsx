import React from 'react';
import { ArrowUp, Box, Mail, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { sound } from '../../utils/audio';

interface FooterProps {
  onToggle3D: () => void;
  onOpenEducation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onToggle3D, onOpenEducation }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#24242A] bg-[#0E0E10] text-[#888] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Signature */}
        <div>
          <div className="font-display font-extrabold text-white text-base">
            ARYAN SHYAMLAL KAHAR
          </div>
          <p className="text-[11px] text-[#666] mt-0.5">
            Full-Stack Web Developer · JSPM University Pune (2023–2026)
          </p>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center flex-wrap gap-4 text-[11px]">
          <button
            onClick={() => {
              sound.playClick();
              onOpenEducation();
            }}
            className="flex items-center gap-1.5 text-[#F7D447] hover:text-white transition-colors cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BCA Grade Sheet</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onToggle3D();
            }}
            className="flex items-center gap-1.5 text-[#00D9E8] hover:text-white transition-colors cursor-pointer"
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Spatial View</span>
          </button>

          <a
            href="https://github.com/thearyankahar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/thearyankahar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#00D9E8]" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-[#18181D] border border-[#2D2D35] hover:border-[#555] text-[#A6A6A1] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          title="Scroll To Top"
        >
          <span className="text-[10px]">TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>

      <div className="border-t border-[#1C1C22] py-4 text-center text-[10px] text-[#555]">
        © 2026 ARYAN KAHAR. ALL ARCHITECTURAL CASE STUDIES VERIFIED FROM DIRECT CODEBASE AND ACADEMIC RECORDS.
      </div>
    </footer>
  );
};
