import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<number>(0);

  return (
    <div className="w-full relative z-20 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <section id="skills" className="max-w-7xl mx-auto scroll-mt-14 bg-[#151515]/85 backdrop-blur-md border border-[#303030] p-6 sm:p-12 lg:p-16">
        {/* Section Header */}
        <div className="mb-12 border-b border-[#303030] pb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] uppercase tracking-widest mb-3">
            <span className="text-[#35D6C0]">03 / TECHNICAL CAPABILITIES</span>
            <span className="text-[#404040]">•</span>
            <span>APPLIED STACK</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F2F0EB] tracking-tight uppercase">
            Languages, Backends & Tooling
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#929292] max-w-2xl leading-relaxed">
            Technologies and tools applied across web applications, backend services, and production repositories.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs no-scrollbar">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.short}
              onClick={() => {
                sound.playClick();
                setSelectedCat(idx);
              }}
              className={`px-4 py-2 border text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedCat === idx
                  ? 'bg-[#202020] border-[#35D6C0] text-[#35D6C0] font-semibold'
                  : 'bg-[#0A0A0A] border-[#303030] text-[#929292] hover:text-[#F2F0EB] hover:border-[#444]'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES[selectedCat].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 bg-[#0A0A0A] border border-[#303030] hover:border-[#35D6C0]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-[#F2F0EB] text-base group-hover:text-[#35D6C0] transition-colors">
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono text-[#929292] bg-[#151515] border border-[#252525]">
                    {skill.area}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202020] flex items-center justify-between font-mono text-[11px] text-[#929292]">
                <span className="text-[#666663]">Applied in:</span>
                <span className="text-[#F2F0EB] text-right font-medium">{skill.verifiedIn}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
