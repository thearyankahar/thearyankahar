import React from 'react';
import { ArrowUp, Box } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { sound } from '../../utils/audio';

interface FooterProps {
  onToggle3D: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onToggle3D }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222226] bg-[#0E0E10] text-[#8E8E93] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div>
          <div className="font-display font-bold text-[#EDEAE2] text-sm">
            ARYAN SHYAMLAL KAHAR
          </div>
          <p className="text-[11px] text-[#666663] mt-0.5">
            Full-Stack Web Developer · Pune, Maharashtra, India
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center flex-wrap gap-4 text-[11px]">
          <button
            onClick={() => {
              sound.playClick();
              onToggle3D();
            }}
            className="flex items-center gap-1.5 text-[#2DD4BF] hover:text-white transition-colors cursor-pointer"
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
            <LinkedinIcon className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-1.5 rounded bg-[#16161A] border border-[#25252B] hover:border-[#3E3E44] text-[#8E8E93] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          title="Scroll To Top"
        >
          <span className="text-[10px]">TOP</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>

      <div className="border-t border-[#18181C] py-3.5 text-center text-[10px] text-[#555]">
        © 2026 ARYAN KAHAR · PRODUCTION CODEBASES & ARCHITECTURAL CASE STUDIES
      </div>
    </footer>
  );
};
