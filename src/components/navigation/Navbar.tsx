import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Box, Grid } from 'lucide-react';
import { sound } from '../../utils/audio';

interface NavbarProps {
  currentView: 'artboard' | '3d';
  onViewChange: (view: 'artboard' | '3d') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F11]/90 backdrop-blur-md border-b border-[#242428] text-[#EDEAE2] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateSection('top')}
            className="text-left font-display font-bold tracking-wider text-sm hover:text-[#2DD4BF] transition-colors flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full inline-block" />
            <span>ARYAN KAHAR</span>
          </button>
          <span className="hidden sm:inline-block text-[#666663] font-mono text-[10px] uppercase tracking-wider">
            / Full-Stack Developer
          </span>
        </div>

        {/* Center Metadata (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-[#9E9E99]">
          <div className="flex items-center gap-2">
            <span className="text-[#666663]">LOCATION:</span>
            <span>PUNE, IN</span>
            <span className="text-[#333]">•</span>
            <span className="text-[#EDEAE2]">{time ? `${time} IST` : '14:00:00 IST'}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#2DD4BF]/80 rounded-full" />
            <span className="text-[#A4A49E] uppercase tracking-wider text-[10px]">
              Available For Roles
            </span>
          </div>
        </div>

        {/* Right Navigation & Mode Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden md:flex items-center gap-4 text-[11px] font-mono tracking-wider text-[#9E9E99]">
            <button
              onClick={() => onNavigateSection('work')}
              className="hover:text-[#EDEAE2] transition-colors cursor-pointer"
            >
              WORK
            </button>
            <button
              onClick={() => onNavigateSection('about')}
              className="hover:text-[#EDEAE2] transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => onNavigateSection('skills')}
              className="hover:text-[#EDEAE2] transition-colors cursor-pointer"
            >
              SKILLS
            </button>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#EDEAE2] transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            title={isMuted ? 'Enable Audio Feedback' : 'Mute Audio'}
            className="p-1.5 rounded border border-[#27272A] hover:border-[#3E3E44] text-[#9E9E99] hover:text-[#EDEAE2] transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#2DD4BF]" />}
          </button>

          {/* Experience Mode Switcher (Artboard <-> 3D) */}
          <div className="flex items-center p-0.5 bg-[#141417] border border-[#27272A] rounded-md font-mono text-[10px]">
            <button
              onClick={() => {
                sound.playClick();
                onViewChange('artboard');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all cursor-pointer ${
                currentView === 'artboard'
                  ? 'bg-[#24242A] text-[#EDEAE2] font-medium'
                  : 'text-[#777] hover:text-[#BBB]'
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
                  ? 'bg-[#2DD4BF] text-black font-semibold'
                  : 'text-[#2DD4BF]/80 hover:text-[#2DD4BF]'
              }`}
            >
              <Box className="w-3 h-3" />
              <span>3D WORLD</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
