import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Grid } from 'lucide-react';
import { sound } from '../../utils/audio';

interface NavbarProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  showGrid?: boolean;
  onToggleGrid?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigateSection,
  showGrid = false,
  onToggleGrid,
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#303030] text-[#F2F0EB] text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateSection('intro')}
            className="text-left font-display font-bold tracking-wider text-sm hover:text-[#35D6C0] transition-colors flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-1.5 h-1.5 bg-[#35D6C0] rounded-full inline-block" />
            <span>ARYAN KAHAR</span>
          </button>
          <span className="hidden sm:inline-block text-[#929292] font-mono text-[10px] uppercase tracking-wider">
            / Full-Stack Developer
          </span>
        </div>

        {/* Center Metadata (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-[#929292]">
          <div className="flex items-center gap-2">
            <span className="text-[#666663]">LOCATION:</span>
            <span className="text-[#F2F0EB]">PUNE, IN</span>
            <span className="text-[#333]">•</span>
            <span className="text-[#F2F0EB]">{time ? `${time} IST` : '15:00:00 IST'}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#35D6C0] rounded-full" />
            <span className="text-[#929292] uppercase tracking-wider text-[10px]">
              Available For Roles
            </span>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="flex items-center gap-3 sm:gap-5 text-[11px] font-mono tracking-wider text-[#929292]">
            {[
              { id: 'work', label: 'WORK' },
              { id: 'about', label: 'ABOUT' },
              { id: 'skills', label: 'SKILLS' },
              { id: 'certifications', label: 'CERTS' },
              { id: 'contact', label: 'CONTACT' },
            ].map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => onNavigateSection(id)}
                  className={`transition-colors cursor-pointer relative py-1 ${
                    isActive ? 'text-[#35D6C0] font-semibold' : 'hover:text-[#F2F0EB]'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#35D6C0] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Swiss Style Grid Toggle Button */}
          {onToggleGrid && (
            <button
              onClick={onToggleGrid}
              aria-label={showGrid ? 'Hide Architectural Grid' : 'Show Architectural Grid'}
              title={showGrid ? 'Hide Architectural Grid' : 'Show Architectural Grid'}
              className={`p-1.5 rounded border transition-colors cursor-pointer flex items-center gap-1 font-mono text-[10px] ${
                showGrid
                  ? 'border-[#35D6C0] text-[#35D6C0] bg-[#35D6C0]/10'
                  : 'border-[#303030] text-[#929292] hover:text-[#F2F0EB] hover:border-[#404040]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">GRID</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            title={isMuted ? 'Enable Audio Feedback' : 'Mute Audio'}
            className="p-1.5 rounded border border-[#303030] hover:border-[#404040] text-[#929292] hover:text-[#F2F0EB] transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#35D6C0]" />}
          </button>
        </div>
      </div>
    </header>
  );
};
