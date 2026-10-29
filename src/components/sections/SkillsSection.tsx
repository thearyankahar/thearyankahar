import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Terminal, Check, Cpu } from 'lucide-react';
import { sound } from '../../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<number>(0);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#26262B]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#63E6C1] uppercase tracking-widest mb-2">
          <span>02 / TECHNICAL ECOSYSTEM</span>
          <span className="text-[#444]">•</span>
          <span>DEMONSTRATED MASTERY</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Capabilities & Tech Stack
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#A6A6A1] max-w-2xl leading-relaxed">
          Engineering capabilities grounded in verified production usage, rigorous systems design, and continuous applied development.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs no-scrollbar">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.short}
            onClick={() => {
              sound.playClick();
              setSelectedCat(idx);
            }}
            className={`px-4 py-2 rounded-xl whitespace-nowrap border transition-all cursor-pointer ${
              selectedCat === idx
                ? 'bg-[#1C1C22] border-[#63E6C1] text-[#63E6C1] font-bold shadow-sm'
                : 'bg-[#121215] border-[#25252B] text-[#777] hover:text-[#CCC]'
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
            className="p-5 rounded-xl bg-[#121215] border border-[#24242A] hover:border-[#383844] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-bold text-white text-base group-hover:text-[#63E6C1] transition-colors">
                  {skill.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#181820] text-[#888] border border-[#2A2A35]">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-[#9E9E96] leading-relaxed mt-1">
                {skill.highlight}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#202025] flex items-center justify-between font-mono text-[10px] text-[#555]">
              <span className="flex items-center gap-1 text-[#63E6C1]/80">
                <Check className="w-3 h-3 text-[#63E6C1]" />
                <span>Verified in code</span>
              </span>
              <span>{SKILL_CATEGORIES[selectedCat].short}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
