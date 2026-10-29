import React from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface ArtboardCanvasProps {
  onSelectProject: (project: Project) => void;
  onEnter3D: () => void;
  onOpenArchive: () => void;
  children3D?: React.ReactNode;
}

export const ArtboardCanvas: React.FC<ArtboardCanvasProps> = ({
  onSelectProject,
  onEnter3D,
  onOpenArchive,
  children3D,
}) => {
  const dixitProject = PROJECTS.find((p) => p.id === 'dixit-lending') || PROJECTS[0];
  const curriculumProject = PROJECTS.find((p) => p.id === 'smart-curriculum') || PROJECTS[1];
  const breedProject = PROJECTS.find((p) => p.id === 'breed-rec') || PROJECTS[2];
  const aiCallingProject = PROJECTS.find((p) => p.id === 'ai-loan-calling') || PROJECTS[4];

  return (
    <section className="relative w-full min-h-screen bg-[#0F0F11] text-[#EDEAE2] pt-20 pb-16 px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center film-grain">
      {/* Outer Editorial Canvas Frame (Reference A Artboard) */}
      <div className="w-full max-w-[1440px] bg-[#141417] border border-[#27272A] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 relative">
        
        {/* Editorial Top Metadata Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#27272A] text-[10px] sm:text-[11px] font-mono divide-y md:divide-y-0 md:divide-x divide-[#27272A] bg-[#161619]">
          
          {/* Metadata Block 1: Location & Coordinates */}
          <div className="md:col-span-3 p-3.5 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666663] uppercase tracking-wider">LOCATION & BASE</span>
            <div className="mt-1 font-medium text-[#EDEAE2]">
              PUNE, MAHARASHTRA, INDIA
              <div className="text-[#8E8E93] text-[10px] mt-0.5">18.5204° N, 73.8567° E</div>
            </div>
          </div>

          {/* Metadata Block 2: Professional Disciplines */}
          <div className="md:col-span-3 p-3.5 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666663] uppercase tracking-wider">(MY.EXPERTISE)</span>
            <div className="mt-1 text-[#9E9E99] space-y-0.5">
              <div>FULL-STACK WEB DEVELOPMENT</div>
              <div>RESTFUL APIS & DATABASE SCHEMAS</div>
              <div>CREATIVE 3D SPATIAL INTERACTION</div>
            </div>
          </div>

          {/* Metadata Block 3: Engineering Creed */}
          <div className="md:col-span-4 p-3.5 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666663] uppercase tracking-wider">(ENGINEERING CREED)</span>
            <p className="mt-1 text-[#B0ADA6] leading-relaxed text-[11px]">
              DEVELOPER DRIVEN BY SYSTEMATIC ARCHITECTURE: RELATIONAL DATA INTEGRITY, MODULAR MICROSERVICES, AND RESTRAINED DIGITAL CRAFT.
            </p>
          </div>

          {/* Metadata Block 4: Spatial Mode Action */}
          <div className="md:col-span-2 p-3.5 sm:p-4 flex flex-col justify-between items-start md:items-end gap-2 bg-[#121215]">
            <button
              onClick={() => {
                sound.playClick();
                onEnter3D();
              }}
              className="w-full py-1.5 px-3 bg-[#1C1C22] hover:bg-[#2DD4BF] text-[#EDEAE2] hover:text-black font-semibold tracking-wider rounded text-[10px] flex items-center justify-center gap-1.5 border border-[#2F2F36] transition-all cursor-pointer"
            >
              <Box className="w-3 h-3 text-[#2DD4BF]" />
              <span>EXPLORE 3D SPACE ↗</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenArchive();
              }}
              className="text-[10px] text-[#8E8E93] hover:text-[#EDEAE2] transition-colors cursor-pointer uppercase font-mono tracking-wider"
            >
              [ BROWSE REPOSITORY ]
            </button>
          </div>
        </div>

        {/* The Asymmetric Editorial Grid (Reference A Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr divide-y md:divide-y-0 md:divide-x divide-[#27272A] bg-[#121214]">
          
          {/* Column Group 1 (Left 4 cols): Architectural Concept & Large Typography */}
          <div className="md:col-span-4 flex flex-col divide-y divide-[#27272A]">
            
            {/* Panel 1: Original Conceptual Artwork (Fintech Ledger Architectural Abstraction) */}
            <div className="relative h-64 md:h-72 overflow-hidden group bg-[#111113]">
              <img
                src="/assets/fintech_ledger_monochrome.jpg"
                alt="Fintech Ledger Architecture Conceptual Artwork"
                className="w-full h-full object-cover grayscale contrast-125 brightness-80 group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#8E8E93] bg-black/70 px-2 py-0.5 rounded border border-[#27272A]">
                EDITORIAL CONCEPT / 01
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] text-[#8E8E93] tracking-widest uppercase">
                    Ledger Architecture
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-[#EDEAE2]">
                    Relational Ledger System
                  </div>
                </div>
                <div className="text-[#666663] font-mono text-xs">2024–2026</div>
              </div>
            </div>

            {/* Panel 2: Cropped Oversized Editorial Typography */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-[#141417] relative overflow-hidden group min-h-[250px]">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#666663]">
                <span>ARCHITECTURAL CORE</span>
                <span className="text-[#8E8E93]">02 / KAHAR</span>
              </div>

              {/* Cropped Editorial Display Text */}
              <div className="my-auto py-2">
                <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-[#EDEAE2] leading-none select-none">
                  FULL-STACK
                </div>
                <div
                  className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-transparent stroke-text leading-none select-none mt-1 opacity-70"
                  style={{ WebkitTextStroke: '1px #666' }}
                >
                  SYSTEMS.
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] pt-4 border-t border-[#242428]">
                <span>Node.js · Python · React · Next.js</span>
                <span className="text-[10px] text-[#666663]">VERIFIED WORK</span>
              </div>
            </div>
          </div>

          {/* Column Group 2 (Center 5 cols): Featured Real Project: Dixit Lending Solution */}
          <div className="md:col-span-5 flex flex-col divide-y divide-[#27272A] bg-[#141417]">
            
            {/* Featured Project Panel: Dixit Lending Solution */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(dixitProject);
              }}
              className="p-6 md:p-8 flex flex-col justify-between flex-grow cursor-pointer group hover:bg-[#18181C] transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#1C1C22] text-[#2DD4BF] border border-[#27272A]">
                    FEATURED PLATFORM
                  </span>
                  <span className="text-[10px] font-mono text-[#666663]">01 / 05</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-[#8E8E93] group-hover:text-[#2DD4BF] transition-colors">
                  <span>INSPECT DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Real Overview */}
              <div className="my-5">
                <div className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase mb-1">
                  Fintech / Operations CRM & Web App
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#EDEAE2] group-hover:text-white transition-colors">
                  Dixit Lending Solution
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#9E9E99] leading-relaxed line-clamp-3">
                  End-to-end commercial lending system uniting an operational Customer Loan Network Management (CLN) CRM backend with a customer-facing loan inquiry web portal, S3/R2 document vaulting, and automated WhatsApp notifications.
                </p>
              </div>

              {/* Real Project Banner Preview */}
              <div className="rounded-lg border border-[#27272A] bg-[#101013] overflow-hidden group-hover:border-[#383842] transition-colors">
                <div className="relative h-32 overflow-hidden bg-black/40">
                  <img
                    src="/assets/cln-profile-banner.png"
                    alt="Dixit Lending Solution Profile Banner"
                    className="w-full h-full object-cover object-top grayscale contrast-110 opacity-70 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101013] via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#2DD4BF] bg-black/80 px-2 py-0.5 rounded border border-[#222]">
                    CRM OPERATIONS INTERFACE
                  </div>
                </div>

                {/* Verified Technical Characteristics */}
                <div className="p-3.5 grid grid-cols-2 gap-2 font-mono text-xs">
                  <div className="p-2 rounded bg-[#16161A] border border-[#222226]">
                    <div className="text-[10px] text-[#666]">STORAGE</div>
                    <div className="text-xs font-semibold text-[#EDEAE2] mt-0.5">S3/R2-Compatible Object Vault</div>
                  </div>
                  <div className="p-2 rounded bg-[#16161A] border border-[#222226]">
                    <div className="text-[10px] text-[#666]">DATA ENGINE</div>
                    <div className="text-xs font-semibold text-[#EDEAE2] mt-0.5">Relational MySQL Schema</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 px-3.5 pb-3">
                  {['Node.js', 'Express', 'Next.js', 'MySQL', 'S3/R2', 'Baileys', 'XLSX'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-[#18181E] text-[#8E8E93] text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer row inside panel */}
              <div className="flex items-center justify-between pt-4 mt-2 font-mono text-[10px] text-[#666663]">
                <span>STATUS: COMMERCIAL PLATFORM</span>
                <span className="text-[#8E8E93] group-hover:text-[#2DD4BF] transition-colors">VIEW CASE STUDY →</span>
              </div>
            </div>

            {/* Bottom Sub-Panel: Embedded Interactive 3D Spatial Window */}
            <div className="h-48 overflow-hidden relative group bg-[#0A0A0C] border-t border-[#27272A]">
              {children3D ? (
                <div className="w-full h-full relative">
                  {children3D}
                  <div className="absolute top-2 left-3 pointer-events-none font-mono text-[10px] text-[#8E8E93] bg-black/60 px-2 py-0.5 rounded border border-[#27272A]">
                    LIVE SPATIAL VIEWPORT
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    sound.playClick();
                    onEnter3D();
                  }}
                  className="w-full h-full flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-[#111116] transition-colors"
                >
                  <Box className="w-7 h-7 text-[#2DD4BF] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-display font-semibold text-sm text-[#EDEAE2]">
                    Enter 3D Spatial Environment
                  </span>
                  <span className="text-[11px] font-mono text-[#8E8E93] mt-0.5">
                    Explore custom architectural project monuments ↗
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Column Group 3 (Right 3 cols): Secondary Projects */}
          <div className="md:col-span-3 flex flex-col divide-y divide-[#27272A] bg-[#141417]">
            
            {/* Project 2: Smart Curriculum Attendance */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(curriculumProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#8E8E93] uppercase font-medium">02 / EDTECH</span>
                  <span className="text-[#666]">REACT · FIREBASE</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#EDEAE2] group-hover:text-white transition-colors">
                  Smart Curriculum Attendance
                </h4>
                <p className="text-[11px] text-[#8E8E93] mt-1.5 leading-relaxed">
                  Academic operations platform for managing lecture timetables, faculty assignments, and real-time attendance logs.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202025] flex items-center justify-between font-mono text-[10px] text-[#8E8E93]">
                <span>FIRESTORE SYNC</span>
                <span className="group-hover:text-[#2DD4BF] group-hover:translate-x-1 transition-all">VIEW →</span>
              </div>
            </div>

            {/* Project 3: Livestock Breed Recognition */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(breedProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#E5A93C] uppercase font-medium">03 / COMPUTER VISION</span>
                  <span className="text-[#666]">FLASK · OPENCV</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#EDEAE2] group-hover:text-white transition-colors">
                  Livestock Breed Recognition
                </h4>
                <p className="text-[11px] text-[#8E8E93] mt-1.5 leading-relaxed">
                  Machine learning service combining neural classification with OpenCV contour measurements for trait guidance.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202025] flex items-center justify-between font-mono text-[10px] text-[#8E8E93]">
                <span>ML & OPENCV</span>
                <span className="group-hover:text-[#E5A93C] group-hover:translate-x-1 transition-all">VIEW →</span>
              </div>
            </div>

            {/* Project 5: AI Loan Calling Telephony (Prototype) */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(aiCallingProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#E5A93C] uppercase font-medium">05 / PROTOTYPE</span>
                  <span className="text-[#666]">GSM · REDIS</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#EDEAE2] group-hover:text-white transition-colors">
                  CLN AI Loan Calling System
                </h4>
                <p className="text-[11px] text-[#8E8E93] mt-1.5 leading-relaxed">
                  Outbound dialing architecture specification and working developer prototype with USB GSM modem AT drivers and voice handoff.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202025] flex items-center justify-between font-mono text-[10px] text-[#8E8E93]">
                <span>WORKING PROTOTYPE</span>
                <span className="group-hover:text-[#E5A93C] group-hover:translate-x-1 transition-all">VIEW →</span>
              </div>
            </div>

          </div>
        </div>

        {/* Editorial Bottom Watermark & Instructions Bar */}
        <div className="border-t border-[#27272A] bg-[#121214] px-4 sm:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-2xl tracking-tighter text-[#EDEAE2]">
              THE ARTBOARD™
            </span>
            <span className="text-[#666663] text-[10px]">ARYAN SHYAMLAL KAHAR</span>
          </div>

          <div className="text-center md:text-left text-[#8E8E93] max-w-xl text-[10px] leading-relaxed">
            CURATED REPOSITORY OF REAL CODEBASES, PRODUCTION FINTECH PLATFORMS, APPLIED MACHINE LEARNING SERVICES, AND 3D SPATIAL ENVIRONMENTS.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onEnter3D();
              }}
              className="px-4 py-2 bg-[#1A1A1E] hover:bg-[#222228] border border-[#27272A] hover:border-[#2DD4BF] text-[#EDEAE2] hover:text-[#2DD4BF] rounded font-medium text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <Box className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>LAUNCH FULL 3D WORLD ↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
