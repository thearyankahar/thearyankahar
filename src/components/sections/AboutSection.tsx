import React from 'react';
import { Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const edu = PERSONAL_INFO.education;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222226]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#8E8E93] uppercase tracking-widest mb-2">
          <span>02 / BACKGROUND</span>
          <span className="text-[#333]">•</span>
          <span>PROFILE & FOCUS</span>
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Systematic Implementation & Engineering Discipline
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Biography Narrative */}
        <div className="lg:col-span-7 space-y-5 text-[#B4B1A8] text-sm leading-relaxed">
          <p className="text-base text-[#EDEAE2] font-medium leading-relaxed">
            I am Aryan Shyamlal Kahar, a Full-Stack Web Developer based in Pune, India. I build backend services, database schemas, and responsive web interfaces.
          </p>

          <p>
            My recent work centers on operational web software—such as the CLN Lending Suite, where I developed role-based admin and employee portals, S3/R2 document vaulting, and automated WhatsApp notifications. In addition to commercial web platforms, I build full-stack tools using React, TypeScript, Node.js, and Python services.
          </p>

          <p>
            I treat software engineering as a disciplined craft: prioritizing clean relational schemas, deterministic application state, and verified implementations over speculative claims.
          </p>

          {/* Education Summary Card (Restrained, factual, no document popups) */}
          <div className="p-5 rounded-xl bg-[#141417] border border-[#242428] mt-6">
            <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider block">
              ACADEMIC BACKGROUND
            </span>
            <div className="text-[#EDEAE2] font-display font-bold text-base mt-1">
              {edu.degree}
            </div>
            <div className="text-xs text-[#8E8E93] font-mono mt-0.5">
              {edu.institution} · {edu.period} · {edu.location}
            </div>
          </div>
        </div>

        {/* Right Column: Practical Principles */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-6 rounded-xl bg-[#131316] border border-[#222226]">
            <h3 className="font-mono text-xs uppercase text-[#8E8E93] tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#2DD4BF]" />
              <span>Development Focus</span>
            </h3>

            <div className="space-y-3 text-xs text-[#9E9E99]">
              <div className="p-3 rounded-lg bg-[#18181D] border border-[#222228]">
                <div className="font-semibold text-[#EDEAE2] mb-1">
                  1. Verified Implementation
                </div>
                <p className="leading-relaxed">
                  Presenting only verified codebase architectures, real database schemas, and clearly distinguishing working prototypes from production systems.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#18181D] border border-[#222228]">
                <div className="font-semibold text-[#EDEAE2] mb-1">
                  2. Layered Responsibilities
                </div>
                <p className="leading-relaxed">
                  Decoupling presentation from server controllers, abstracting object storage behind clean clients, and validating inputs at route boundaries.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#18181D] border border-[#222228]">
                <div className="font-semibold text-[#EDEAE2] mb-1">
                  3. Usable Ergonomics
                </div>
                <p className="leading-relaxed">
                  Preserving keyboard accessibility, responsive breakpoints, fast bundle delivery, and comfortable spatial interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
