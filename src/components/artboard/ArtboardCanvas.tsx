import React, { useState } from 'react';
import { ArrowUpRight, Box, ShieldCheck, Database, Layers, ExternalLink, Sparkles, GraduationCap } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface ArtboardCanvasProps {
  onSelectProject: (project: Project) => void;
  onEnter3D: () => void;
  onOpenEducation: () => void;
  onOpenArchive: () => void;
}

export const ArtboardCanvas: React.FC<ArtboardCanvasProps> = ({
  onSelectProject,
  onEnter3D,
  onOpenEducation,
  onOpenArchive,
}) => {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  const clnmProject = PROJECTS.find((p) => p.id === 'clnm') || PROJECTS[0];
  const docProject = PROJECTS.find((p) => p.id === 'doctor-appointment') || PROJECTS[1];
  const medisyncProject = PROJECTS.find((p) => p.id === 'medisync') || PROJECTS[2];
  const aiCallingProject = PROJECTS.find((p) => p.id === 'ai-loan-calling') || PROJECTS[3];

  return (
    <section className="relative w-full min-h-screen bg-[#202020] text-[#F2F0E9] pt-20 pb-16 px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center film-grain">
      {/* Outer Editorial Canvas Frame (Reference A Artboard) */}
      <div className="w-full max-w-[1440px] bg-[#101010] border border-[#2D2D2D] rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 relative">
        
        {/* Editorial Top Bar (Reference A Header Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#2C2C2C] text-[10px] sm:text-[11px] font-mono divide-y md:divide-y-0 md:divide-x divide-[#2C2C2C] bg-[#121212]">
          {/* Metadata Block 1: Location & Time */}
          <div className="md:col-span-2 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666660] uppercase">Location</span>
            <div className="mt-1 font-medium text-[#F2F0E9]">
              PUNE, MAHARASHTRA
              <div className="text-[#00D9E8] text-[10px]">18.5204° N, 73.8567° E</div>
            </div>
          </div>

          {/* Metadata Block 2: Expertise */}
          <div className="md:col-span-2 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666660] uppercase">(MY.EXPERTISE)</span>
            <div className="mt-1 text-[#A6A6A1] space-y-0.5">
              <div>FULL-STACK ARCHITECTURE</div>
              <div>HARDENED APIS & REDIS</div>
              <div>WEBGL & 3D INTERACTION</div>
            </div>
          </div>

          {/* Metadata Block 3: Verification & Education */}
          <div className="md:col-span-2 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666660] uppercase">(VERIFIED.ACADEMIC)</span>
            <button
              onClick={() => {
                sound.playClick();
                onOpenEducation();
              }}
              className="mt-1 text-left group cursor-pointer"
            >
              <div className="text-[#F7D447] font-semibold flex items-center gap-1 group-hover:underline">
                <GraduationCap className="w-3 h-3" />
                <span>BCA · JSPM UNIV 2026</span>
              </div>
              <div className="text-[#888] text-[10px]">Result: PASS (Grade A Capstone)</div>
            </button>
          </div>

          {/* Metadata Block 4: Editorial Statement */}
          <div className="md:col-span-4 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[#666660] uppercase">(DISCIPLINE & CREED)</span>
            <p className="mt-1 text-[#C4C4BC] leading-relaxed text-[11px]">
              FULL-STACK DEVELOPER SPECIALIZING IN RESILIENT BACKEND MICROSERVICES, HIGH-TRANSACTION FINTECH LEDGERS, AND EXPERIMENTAL 3D DIGITAL CRAFT.
            </p>
          </div>

          {/* Metadata Block 5: Fast Navigation Actions */}
          <div className="md:col-span-2 p-3 sm:p-4 flex flex-col justify-between items-start md:items-end gap-2 bg-[#141414]">
            <button
              onClick={() => {
                sound.playClick();
                onEnter3D();
              }}
              className="w-full py-1.5 px-3 bg-[#00D9E8] text-black font-bold tracking-wider rounded text-[10px] flex items-center justify-center gap-1.5 hover:bg-[#63E6C1] transition-colors cursor-pointer shadow-[0_0_15px_rgba(0,217,232,0.25)]"
            >
              <Box className="w-3 h-3" />
              <span>EXPLORE 3D SCENE</span>
              <Sparkles className="w-2.5 h-2.5" />
            </button>

            <div className="flex items-center gap-3 text-[10px] text-[#A6A6A1]">
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenArchive();
                }}
                className="hover:text-[#00D9E8] transition-colors cursor-pointer uppercase"
              >
                [ ARCHIVE ]
              </button>
              <a
                href="https://github.com/thearyankahar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F2F0E9] transition-colors flex items-center gap-0.5"
              >
                <span>GITHUB</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* The Asymmetric Editorial Grid (Reference A Collage) */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr divide-y md:divide-y-0 md:divide-x divide-[#2C2C2C] bg-[#0E0E0E]">
          
          {/* Column Group 1 (Left 4 cols): Split into 2 stacked panels */}
          <div className="md:col-span-4 flex flex-col divide-y divide-[#2C2C2C]">
            
            {/* Panel 1: Monochrome Scaffolding / Figure with Neon Cyan Hover */}
            <div
              onMouseEnter={() => {
                sound.playHover();
                setHoveredPanel('hero-figure');
              }}
              onMouseLeave={() => setHoveredPanel(null)}
              className="relative h-64 md:h-72 overflow-hidden group cursor-crosshair bg-[#141414]"
            >
              <img
                src="/assets/architects_scaffolding.jpg"
                alt="System Architecture Scaffolding"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:contrast-150 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Overlay Metadata */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#A6A6A1] bg-black/60 px-2 py-0.5 rounded border border-[#333]">
                FIG. 01 / INFRASTRUCTURE
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] text-[#00D9E8] tracking-widest uppercase">
                    Zero-Downtime Microservices
                  </div>
                  <div className="font-display font-bold text-lg text-white">
                    Distributed Scalability
                  </div>
                </div>
                <div className="text-[#666660] font-mono text-xs">2024–2026</div>
              </div>
            </div>

            {/* Panel 2: Big Cropped Typography Panel (Reference A Signature) */}
            <div
              onMouseEnter={() => {
                sound.playHover();
                setHoveredPanel('typography');
              }}
              onMouseLeave={() => setHoveredPanel(null)}
              className="p-6 md:p-8 flex flex-col justify-between bg-[#121212] relative overflow-hidden group min-h-[260px]"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-[#666660]">
                <span>ARCHITECTURAL CORE</span>
                <span className="text-[#00D9E8] group-hover:tracking-widest transition-all">02 / KAHAR</span>
              </div>

              {/* Massive Cropped Editorial Text */}
              <div className="my-auto py-2">
                <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-[#F2F0E9] leading-none select-none">
                  FULL-STACK
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-transparent stroke-text text-stroke leading-none select-none mt-1 opacity-80"
                     style={{ WebkitTextStroke: '1px #888' }}>
                  PRECISION.
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#A6A6A1] pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-1.5 text-xs text-[#E5E5DF]">
                  <Database className="w-3.5 h-3.5 text-[#00D9E8]" />
                  <span>PostgreSQL · MySQL · Redis</span>
                </div>
                <span className="text-[10px] text-[#666660]">128 CREDITS</span>
              </div>
            </div>
          </div>

          {/* Column Group 2 (Center 5 cols): Featured Interactive Project (CLNM Dixit Lending) */}
          <div className="md:col-span-5 flex flex-col divide-y divide-[#2C2C2C] bg-[#101010]">
            
            {/* Featured Hero Project Panel: CLNM */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(clnmProject);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredPanel('clnm');
              }}
              onMouseLeave={() => setHoveredPanel(null)}
              className="p-6 md:p-8 flex flex-col justify-between flex-grow cursor-pointer group hover:bg-[#151515] transition-all relative overflow-hidden"
            >
              {/* Glowing Accent Corner Indicator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D9E8]/10 blur-2xl group-hover:bg-[#00D9E8]/20 transition-all pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00D9E8]/10 text-[#00D9E8] border border-[#00D9E8]/30">
                    FEATURED CASE STUDY
                  </span>
                  <span className="text-[10px] font-mono text-[#666660]">01 / 04</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-[#A6A6A1] group-hover:text-[#00D9E8] transition-colors">
                  <span>INSPECT DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Project Title & Visual Identity */}
              <div className="my-6">
                <div className="font-mono text-xs text-[#00D9E8] tracking-widest uppercase mb-1">
                  Fintech / Enterprise Core
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F2F0E9] group-hover:text-white transition-colors">
                  CLNM — Dixit Lending Suite
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#A6A6A1] leading-relaxed line-clamp-3">
                  Production micro-finance engine orchestrating role-based Admin & Field Officer dashboards, encrypted KYC streaming proxy on Cloudflare R2, live attendance, and zero-downtime database migrations.
                </p>
              </div>

              {/* Visual Showcase (Mockup Display Reference A Style) */}
              <div className="relative rounded-lg overflow-hidden border border-[#2D2D2D] bg-[#0A0A0A] p-4 group-hover:border-[#00D9E8]/50 transition-colors">
                <div className="flex items-center justify-between pb-3 border-b border-[#222] font-mono text-[10px] text-[#888]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-[#AAA]">clnm-core.internal</span>
                  </div>
                  <span className="text-[#00D9E8]">VERIFIED PRODUCTION</span>
                </div>

                {/* Key Architecture Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 pt-3 font-mono">
                  <div className="p-2.5 rounded bg-[#131313] border border-[#222]">
                    <div className="text-[10px] text-[#666]">SECURITY AUDIT</div>
                    <div className="text-xs font-bold text-[#00D9E8] mt-0.5">11 VULNERABILITIES REMEDIATED</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#131313] border border-[#222]">
                    <div className="text-[10px] text-[#666]">INJECTIONS SANITIZED</div>
                    <div className="text-xs font-bold text-[#63E6C1] mt-0.5">21 STORED-XSS FIXED</div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#222]">
                  {['Node.js', 'Express', 'MySQL', 'Cloudflare R2', 'Aiven', 'JWT'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-[#181818] text-[#A6A6A1] text-[10px] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer row inside panel */}
              <div className="flex items-center justify-between pt-4 mt-2 font-mono text-[10px] text-[#666660]">
                <span>STATUS: LIVE PRODUCTION</span>
                <span className="text-[#00D9E8] group-hover:underline">CLICK TO READ FULL CASE STUDY →</span>
              </div>
            </div>

            {/* Bottom Sub-Panel: Brutalist Concrete & Architecture */}
            <div className="h-44 overflow-hidden relative group bg-[#121212]">
              <img
                src="/assets/astronomer_steps.jpg"
                alt="Architectural Geometry"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#C4C4BC]">FIG. 02 / STEPPED GEOMETRY</span>
                <span className="text-[#63E6C1]">DISCIPLINE OVER SPEED</span>
              </div>
            </div>
          </div>

          {/* Column Group 3 (Right 3 cols): Secondary Projects & Archive Exploration */}
          <div className="md:col-span-3 flex flex-col divide-y divide-[#2C2C2C] bg-[#121212]">
            
            {/* Project 2: Doctor Appointment System */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(docProject);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredPanel('doctor');
              }}
              onMouseLeave={() => setHoveredPanel(null)}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#161616] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#63E6C1] uppercase font-semibold">02 / Telehealth</span>
                  <span className="text-[#666]">AWS ECS · REDIS</span>
                </div>
                <h4 className="font-display font-bold text-lg text-[#F2F0E9] group-hover:text-[#63E6C1] transition-colors">
                  Doctor Appointment System
                </h4>
                <p className="text-[11px] text-[#888] mt-1.5 leading-relaxed">
                  Real-time clinical availability engine with atomic Redis TTL mutex locks preventing double-booking race conditions.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222] flex items-center justify-between font-mono text-[10px] text-[#A6A6A1]">
                <span>FASTAPI + DJANGO</span>
                <span className="text-[#63E6C1] group-hover:translate-x-1 transition-transform">VIEW →</span>
              </div>
            </div>

            {/* Project 3: MediSync */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(medisyncProject);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredPanel('medisync');
              }}
              onMouseLeave={() => setHoveredPanel(null)}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#161616] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#F7D447] uppercase font-semibold">03 / Applied AI</span>
                  <span className="text-[#666]">4 LANGUAGES</span>
                </div>
                <h4 className="font-display font-bold text-lg text-[#F2F0E9] group-hover:text-[#F7D447] transition-colors">
                  MediSync Platform
                </h4>
                <p className="text-[11px] text-[#888] mt-1.5 leading-relaxed">
                  Multilingual health SaaS with computer-vision food macro diagnostics, streak matrix, and Prisma ORM ledger.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222] flex items-center justify-between font-mono text-[10px] text-[#A6A6A1]">
                <span>REACT 18 · PRISMA</span>
                <span className="text-[#F7D447] group-hover:translate-x-1 transition-transform">VIEW →</span>
              </div>
            </div>

            {/* Project 4: AI Loan Calling Telephony Concept */}
            <div
              onClick={() => {
                sound.playClick();
                onSelectProject(aiCallingProject);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredPanel('ai-calling');
              }}
              onMouseLeave={() => setHoveredPanel(null)}
              className="p-5 flex flex-col justify-between flex-1 cursor-pointer group hover:bg-[#161616] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#E056FD] uppercase font-semibold">04 / Telephony Spec</span>
                  <span className="text-[#E056FD]/80">PROTOTYPE</span>
                </div>
                <h4 className="font-display font-bold text-lg text-[#F2F0E9] group-hover:text-[#E056FD] transition-colors">
                  AI Loan Calling System
                </h4>
                <p className="text-[11px] text-[#888] mt-1.5 leading-relaxed">
                  Automated outbound calling CRM prototype driving USB GSM modem pools with dynamic SIM rotation and conversational AI handoff.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222] flex items-center justify-between font-mono text-[10px] text-[#A6A6A1]">
                <span>GAMMU + OPENAI</span>
                <span className="text-[#E056FD] group-hover:translate-x-1 transition-transform">VIEW →</span>
              </div>
            </div>

          </div>
        </div>

        {/* Editorial Bottom Watermark & Instructions Bar (Reference A Style) */}
        <div className="border-t border-[#2C2C2C] bg-[#0E0E0E] px-4 sm:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          
          {/* Oversized Cropped Watermark Logo */}
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter text-[#E5E5DF]">
              THE ARTBOARD™
            </span>
            <span className="text-[#666660] text-[10px]">EDITION 2026</span>
          </div>

          {/* Curatorial Explanation Note */}
          <div className="text-center md:text-left text-[#888] max-w-xl text-[10px] leading-relaxed">
            THE ARTBOARD SERVES AS A STRUCTURED ENVIRONMENT WHERE REAL PRODUCTION ARCHITECTURES, BACKEND LEDGERS, AND INTERACTIVE 3D RESEARCH ACCUMULATED BY ARYAN KAHAR ARE RIGOROUSLY CATALOGED.
          </div>

          {/* Call to action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onEnter3D();
              }}
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#252525] border border-[#00D9E8]/40 hover:border-[#00D9E8] text-[#00D9E8] rounded font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,217,232,0.15)]"
            >
              <Box className="w-3.5 h-3.5" />
              <span>LAUNCH 3D SPATIAL WORLD</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
