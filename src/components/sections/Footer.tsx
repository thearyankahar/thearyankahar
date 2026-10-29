import React from 'react';
import { ArrowUp, Terminal, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { sound } from '../../utils/audio';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#303030] bg-[#0A0A0A] text-[#929292] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div>
          <div className="font-display font-bold text-[#F2F0EB] text-base uppercase tracking-wider">
            ARYAN KAHAR
          </div>
          <p className="text-[11px] text-[#929292] mt-1">
            Full-Stack Web Developer · Pune, Maharashtra, India
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center flex-wrap gap-6 text-[11px] uppercase tracking-wider">
          {onNavigateSection && (
            <>
              <button
                onClick={() => {
                  sound.playClick();
                  onNavigateSection('work');
                }}
                className="flex items-center gap-1.5 text-[#929292] hover:text-[#35D6C0] transition-colors cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Archive</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigateSection('certifications');
                }}
                className="flex items-center gap-1.5 text-[#929292] hover:text-[#35D6C0] transition-colors cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Certifications</span>
              </button>
            </>
          )}

          <a
            href="https://github.com/thearyankahar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F2F0EB] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/thearyankahar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#35D6C0] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#35D6C0]" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2 bg-[#151515] border border-[#303030] hover:border-[#444] text-[#929292] hover:text-[#F2F0EB] transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-[10px]"
          title="Scroll To Top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>

      {/* Understated, Informative Copyright Line with Comfortable Breathing Room */}
      <div className="border-t border-[#202020] py-6 px-4 text-center text-xs text-[#929292] font-mono">
        © {CURRENT_YEAR} Aryan Kahar · Full-Stack Developer · Pune, India
      </div>
    </footer>
  );
};
