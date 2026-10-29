import React from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface ArtboardCanvasProps {
  onSelectProject: (project: Project) => void;
  onEnter3D: () => void;
  onOpenArchive: () => void;
}

export const ArtboardCanvas: React.FC<ArtboardCanvasProps> = ({
  onSelectProject,
  onEnter3D,
  onOpenArchive,
}) => {
  const clnProject = PROJECTS.find((p) => p.id === 'cln') || PROJECTS[0];
  const dixitProject = PROJECTS.find((p) => p.id === 'dixit-lending') || PROJECTS[1];
  const curriculumProject = PROJECTS.find((p) => p.id === 'smart-curriculum') || PROJECTS[2];
  const breedProject = PROJECTS.find((p) => p.id === 'breed-rec') || PROJECTS[3];
  const aiCallingProject = PROJECTS.find((p) => p.id === 'ai-loan-calling') || PROJECTS[5];

  return (
    <section className="relative w-full min-h-screen bg-[#0F0F11] text-[#EDEAE2] pt-20 pb-16 px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center film-grain">
      {/* Outer Editorial Canvas Frame (Reference A Artboard) */}
      <div className="w-full max-w-[1440px] bg-[#141417] border border-[#27272A] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 relative">
        
        {/* Editorial Top Metadata Strip (Reference A Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#27272A] text-[10px] sm:text-[11px] font-mono divide-y md:divide-y-0 md:divide-x divide-[#27272A] bg-[#161619]">
          
          {/* Metadata Block 1: Location & Coordinates */}
          <div className="md:col-span-3 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666663] uppercase tracking-wider">LOCATION & BASE</span>
            <div className="mt-1 font-medium text-[#EDEAE2]">
              PUNE, MAHARASHTRA, INDIA
              <div className="text-[#8E8E93] text-[10px] mt-0.5">18.5204° N, 73.8567° E</div>
            </div>
          </div>

          {/* Metadata Block 2: Professional Disciplines */}
          <div className="md:col-span-3 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666663] uppercase tracking-wider">(MY.EXPERTISE)</span>
            <div className="mt-1 text-[#9E9E99] space-y-0.5">
              <div>FULL-STACK WEB DEVELOPMENT</div>
              <div>RESTFUL APIS & DATABASE DESIGN</div>
              <div>CREATIVE 3D WEBGL INTERACTION</div>
            </div>
          </div>

          {/* Metadata Block 3: Engineering Creed */}
          <div className="md:col-span-4 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666663] uppercase tracking-wider">(ENGINEERING CREED)</span>
            <p className="mt-1 text-[#B0ADA6] leading-relaxed text-[11px]">
              DEVELOPER PURSUING SYSTEMATIC SOFTWARE ARCHITECTURE: RESILIENT DATA SCHEMAS, MODULAR ROUTING, AND IMMERSIVE DIGITAL EXPERIENCES.
            </p>
          </div>

          {/* Metadata Block 4: Fast Mode Action */}
          <div className="md:col-span-2 p-3 sm:p-4 flex flex-col justify-between items-start md:items-end gap-2 bg-[#121215]">
            <button
              onClick={() => {
                sound.playClick();
                onEnter3D();
              }}
              className="w-full py-1.5 px-3 bg-[#24242A] hover:bg-[#2DD4BF] text-[#EDEAE2] hover:text-black font-semibold tracking-wider rounded text-[10px] flex items-center justify-center gap-1.5 border border-[#38383E] transition-all cursor-pointer"
            >
              <Box className="w-3 h-3 text-[#2DD4BF] group-hover:text-black" />
              <span>EXPLORE 3D WORLD</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenArchive();
              }}
              className="text-[10px] text-[#8E8E93] hover:text-[#EDEAE2] transition-colors cursor-pointer uppercase font-mono tracking-wider"
            >
              [ VIEW PROJECT ARCHIVE ]
            </button>
          </div>
        </div>

        {/* The Asymmetric Editorial Grid (Reference A Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr divide-y md:divide-y-0 md:divide-x divide-[#27272A] bg-[#121214]">
          
          {/* Column Group 1 (Left 4 cols): Architectural Artwork & Typography */}
          <div className="md:col-span-4 flex flex-col divide-y divide-[#27272A]">
            
            {/* Panel 1: Abstract Scaffolding Artwork (Clearly labeled) */}
            <div className="relative h-64 md:h-72 overflow-hidden group bg-[#111113]">
              <img
                src="/assets/architects_scaffolding.jpg"
                alt="Architectural structure abstract artwork"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#8E8E93] bg-black/70 px-2 py-0.5 rounded border border-[#27272A]">
                ARTBOARD COMPOSITION / 01
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] text-[#8E8E93] tracking-widest uppercase">
                    Architectural Framework
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-[#EDEAE2]">
                    Structural Precision
                  </div>
                </div>
                <div className="text-[#666663] font-mono text-xs">2024–2026</div>
              </div>
            </div>

            {/* Panel 2: Big Cropped Typography Panel (Reference A Signature) */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-[#141417] relative overflow-hidden group min-h-[260px]">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#666663]">
                <span>CORE FOUNDATION</span>
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
                <span className="text-[10px] text-[#666663]">PUNE, INDIA</span>
              </div>
            </div>
          </div>

          {/* Column Group 2 (Center 5 cols): Featured Real Project: CLN Lending Suite */}
          <div className="md:col-span-5 flex flex-col divide-y divide-[#27272A] bg-[#141417]">
            
            {/* Featured Project Panel: CLN Lending Suite */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(clnProject);
              }}
              className="p-6 md:p-8 flex flex-col justify-between flex-grow cursor-pointer group hover:bg-[#18181C] transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#1C1C22] text-[#2DD4BF] border border-[#27272A]">
                    FEATURED SYSTEM
                  </span>
                  <span className="text-[10px] font-mono text-[#666663]">01 / 06</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-[#8E8E93] group-hover:text-[#2DD4BF] transition-colors">
                  <span>INSPECT DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Authentic Overview */}
              <div className="my-6">
                <div className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase mb-1">
                  Fintech / Commercial CRM
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#EDEAE2] group-hover:text-white transition-colors">
                  CLN Lending Suite
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#9E9E99] leading-relaxed line-clamp-3">
                  Full-stack Customer Loan Network Management platform orchestrating role-based Admin & Employee operations, loan origination, S3/R2 document vaulting, and automated WhatsApp notifications.
                </p>
              </div>

              {/* Authentic Technical Architecture Card */}
              <div className="rounded-lg border border-[#27272A] bg-[#101013] p-4 group-hover:border-[#383842] transition-colors">
                <div className="flex items-center justify-between pb-3 border-b border-[#202025] font-mono text-[10px] text-[#777]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2DD4BF]/60" />
                    <span className="text-[#999]">cln-core-system</span>
                  </div>
                  <span className="text-[#8E8E93]">Commercial CRM</span>
                </div>

                {/* Verified Technical Characteristics */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 font-mono text-xs">
                  <div className="p-2.5 rounded bg-[#16161A] border border-[#222226]">
                    <div className="text-[10px] text-[#666]">STORAGE ARCHITECTURE</div>
                    <div className="text-xs font-semibold text-[#EDEAE2] mt-0.5">S3/R2-Compatible Object Vault</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#16161A] border border-[#222226]">
                    <div className="text-[10px] text-[#666]">DATA ENGINE</div>
                    <div className="text-xs font-semibold text-[#EDEAE2] mt-0.5">Relational MySQL Schema</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#202025]">
                  {['Node.js', 'Express', 'MySQL', 'S3/R2', 'JWT', 'Baileys WhatsApp', 'XLSX'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#18181E] text-[#8E8E93] text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer row inside panel */}
              <div className="flex items-center justify-between pt-4 mt-2 font-mono text-[10px] text-[#666663]">
                <span>STATUS: PRODUCTION SYSTEM</span>
                <span className="text-[#8E8E93] group-hover:text-[#2DD4BF] transition-colors">CLICK TO READ CASE STUDY →</span>
              </div>
            </div>

            {/* Bottom Sub-Panel: Abstract Stepped Geometry Artwork */}
            <div className="h-44 overflow-hidden relative group bg-[#111113]">
              <img
                src="/assets/astronomer_steps.jpg"
                alt="Abstract architectural steps"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#8E8E93]">ARTBOARD COMPOSITION / 02</span>
                <span className="text-[#666663]">SYSTEMATIC FORM</span>
              </div>
            </div>
          </div>

          {/* Column Group 3 (Right 3 cols): Real Secondary Projects */}
          <div className="md:col-span-3 flex flex-col divide-y divide-[#27272A] bg-[#141417]">
            
            {/* Project 2: Dixit Lending Solution */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(dixitProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#2DD4BF] uppercase font-medium">02 / WEB PLATFORM</span>
                  <span className="text-[#666]">NEXT.JS · TAILWIND</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#EDEAE2] group-hover:text-white transition-colors">
                  Dixit Lending Solution
                </h4>
                <p className="text-[11px] text-[#8E8E93] mt-1.5 leading-relaxed">
                  Responsive marketing and loan origination web application with interactive client-side EMI calculators.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202025] flex items-center justify-between font-mono text-[10px] text-[#8E8E93]">
                <span>FINTECH WEB APP</span>
                <span className="group-hover:text-[#2DD4BF] group-hover:translate-x-1 transition-all">VIEW →</span>
              </div>
            </div>

            {/* Project 3: Smart Curriculum Attendance */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(curriculumProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#8E8E93] uppercase font-medium">03 / EDTECH</span>
                  <span className="text-[#666]">REACT · FIREBASE</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#EDEAE2] group-hover:text-white transition-colors">
                  Smart Curriculum Attendance
                </h4>
                <p className="text-[11px] text-[#8E8E93] mt-1.5 leading-relaxed">
                  Academic operations platform for managing lecture timetables, faculty assignments, and student attendance logs.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202025] flex items-center justify-between font-mono text-[10px] text-[#8E8E93]">
                <span>FIRESTORE SYNC</span>
                <span className="group-hover:text-[#2DD4BF] group-hover:translate-x-1 transition-all">VIEW →</span>
              </div>
            </div>

            {/* Project 4: Breed Recognition */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(breedProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#E5A93C] uppercase font-medium">04 / COMPUTER VISION</span>
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

            {/* Project 6: AI Loan Calling Telephony (Clearly labeled Prototype) */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(aiCallingProject);
              }}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#18181C] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#E5A93C] uppercase font-medium">06 / PROTOTYPE</span>
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
          
          {/* Watermark Logo */}
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-2xl tracking-tighter text-[#EDEAE2]">
              THE ARTBOARD™
            </span>
            <span className="text-[#666663] text-[10px]">ARYAN SHYAMLAL KAHAR</span>
          </div>

          {/* Curatorial Note */}
          <div className="text-center md:text-left text-[#8E8E93] max-w-xl text-[10px] leading-relaxed">
            CURATED ARCHIVE OF REAL CODEBASES, PRODUCTION FINTECH PLATFORMS, APPLIED MACHINE LEARNING PIPELINES, AND 3D INTERACTION MODELS.
          </div>

          {/* Action Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onEnter3D();
              }}
              className="px-4 py-2 bg-[#1A1A1E] hover:bg-[#222228] border border-[#27272A] hover:border-[#2DD4BF] text-[#EDEAE2] hover:text-[#2DD4BF] rounded font-medium text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <Box className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>EXPLORE 3D ENVIRONMENT ↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
