import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Box, Grid, Sparkles, GraduationCap } from 'lucide-react';
import { sound } from '../../utils/audio';

interface NavbarProps {
  currentView: 'artboard' | '3d';
  onViewChange: (view: 'artboard' | '3d') => void;
  onOpenEducation: () => void;
  onOpenArchive: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  onOpenEducation,
  onOpenArchive,
  onNavigateSection,
}) => {
  const [time, setTime] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101010]/90 backdrop-blur-md border-b border-[#2C2C2C] text-[#F2F0E9] text-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateSection('top')}
            className="text-left font-display font-bold tracking-wider text-sm hover:text-[#00D9E8] transition-colors flex items-center gap-2 group"
          >
            <span className="w-2 h-2 bg-[#00D9E8] rounded-full inline-block group-hover:scale-125 transition-transform" />
            <span>ARYAN KAHAR</span>
          </button>
          <span className="hidden sm:inline-block text-[#666660] font-mono text-[10px] uppercase">
            / Full-Stack Engineer
          </span>
        </div>

        {/* Center Metadata (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-[#A6A6A1]">
          <div className="flex items-center gap-2">
            <span className="text-[#666660]">LOC:</span>
            <span>PUNE, IN</span>
            <span className="text-[#444]">•</span>
            <span className="text-[#00D9E8]">{time ? `${time} IST` : '13:30:00 IST'}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#63E6C1] rounded-full animate-pulse" />
            <span className="text-[#63E6C1] uppercase tracking-wider text-[10px] font-semibold">
              Available For Roles
            </span>
          </div>
        </div>

        {/* Right Navigation & Mode Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden md:flex items-center gap-4 text-[11px] font-mono tracking-wider text-[#A6A6A1]">
            <button
              onClick={() => onNavigateSection('work')}
              className="hover:text-[#F2F0E9] transition-colors cursor-pointer"
            >
              WORK
            </button>
            <button
              onClick={() => onNavigateSection('about')}
              className="hover:text-[#F2F0E9] transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => onNavigateSection('skills')}
              className="hover:text-[#F2F0E9] transition-colors cursor-pointer"
            >
              SKILLS
            </button>
            <button
              onClick={onOpenEducation}
              className="flex items-center gap-1.5 text-[#F7D447] hover:text-[#fff] transition-colors cursor-pointer bg-[#F7D447]/10 px-2 py-0.5 rounded border border-[#F7D447]/30"
              title="Verified JSPM University 2026 BCA Graduate"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>BCA 2026</span>
            </button>
            <button
              onClick={onOpenArchive}
              className="hover:text-[#00D9E8] transition-colors cursor-pointer"
            >
              ARCHIVE
            </button>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#F2F0E9] transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            title={isMuted ? 'Enable Audio Feedback' : 'Mute Audio'}
            className="p-1.5 rounded border border-[#333] hover:border-[#555] text-[#A6A6A1] hover:text-[#F2F0E9] transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00D9E8]" />}
          </button>

          {/* Experience Mode Switcher (Artboard <-> 3D) */}
          <div className="flex items-center p-0.5 bg-[#181818] border border-[#333] rounded-md font-mono text-[10px]">
            <button
              onClick={() => {
                sound.playClick();
                onViewChange('artboard');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all cursor-pointer ${
                currentView === 'artboard'
                  ? 'bg-[#2A2A2A] text-[#F2F0E9] font-medium shadow-sm'
                  : 'text-[#888] hover:text-[#CCC]'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span className="hidden sm:inline">ARTBOARD</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onViewChange('3d');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all cursor-pointer ${
                currentView === '3d'
                  ? 'bg-[#00D9E8] text-black font-semibold shadow-[0_0_12px_rgba(0,217,232,0.4)]'
                  : 'text-[#00D9E8]/80 hover:text-[#00D9E8]'
              }`}
            >
              <Box className="w-3 h-3" />
              <span>3D WORLD</span>
              <Sparkles className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
