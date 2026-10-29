import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<number>(0);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222226]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#8E8E93] uppercase tracking-widest mb-2">
          <span>03 / TECHNICAL CAPABILITIES</span>
          <span className="text-[#333]">•</span>
          <span>APPLIED STACK</span>
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Languages, Backends & Tooling
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#8E8E93] max-w-2xl leading-relaxed">
          Technologies and tools verified through direct implementation across projects and repositories.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 font-mono text-xs no-scrollbar">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.short}
            onClick={() => {
              sound.playClick();
              setSelectedCat(idx);
            }}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap border text-xs transition-all cursor-pointer ${
              selectedCat === idx
                ? 'bg-[#1C1C22] border-[#2DD4BF] text-[#2DD4BF] font-medium'
                : 'bg-[#131316] border-[#222226] text-[#777] hover:text-[#CCC]'
            }`}
          >
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Active Category Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {SKILL_CATEGORIES[selectedCat].skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-xl bg-[#131316] border border-[#222226] hover:border-[#32323A] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-display font-semibold text-white text-sm">
                  {skill.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8E8E93] bg-[#18181D]">
                  {skill.area}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#1C1C22] flex items-center justify-between font-mono text-[10px] text-[#666]">
              <span>Verified in:</span>
              <span className="text-[#8E8E93] text-right">{skill.verifiedIn}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
