import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, Award, Compass, ShieldCheck, ArrowRight, Code2 } from 'lucide-react';
import { sound } from '../../utils/audio';

interface AboutSectionProps {
  onOpenEducation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEducation }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#26262B]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#F7D447] uppercase tracking-widest mb-2">
          <span>03 / BACKGROUND & PHILOSOPHY</span>
          <span className="text-[#444]">•</span>
          <span>THE DEVELOPER</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Engineering Logic, Designer by Instinct
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Biography Narrative */}
        <div className="lg:col-span-7 space-y-6 text-[#D4D4CE] text-sm sm:text-base leading-relaxed">
          <p className="text-lg text-white font-medium leading-relaxed">
            I am Aryan Shyamlal Kahar, a Full-Stack Web Developer based in Pune, India. I specialize in building reliable, fault-tolerant backend systems, hardened multi-tenant APIs, and immersive WebGL user interfaces.
          </p>

          <p>
            My engineering work bridges the gap between low-level architectural rigor and creative frontend expression. On the server side, I focus on distributed locking (Redis), relational schema normalization (PostgreSQL, MySQL), zero-downtime migration harnesses, and containerized deployments on AWS ECS and Docker.
          </p>

          <p>
            On the client side, I believe digital tools should feel tactile, fast, and visually arresting. Rather than assembling generic templates, I craft bespoke editorial layouts, custom Three.js spatial scenes, and fluid typographic hierarchies that provide distinctive character without compromising keyboard accessibility, responsiveness, or speed.
          </p>

          {/* Education Highlight Card */}
          <div className="p-6 rounded-2xl bg-[#141418] border border-[#2A2A32] mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#F7D447] font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>JSPM UNIVERSITY PUNE · BCA 2023–2026</span>
              </div>
              <div className="text-white font-display font-bold text-lg mt-1">
                Bachelor of Computer Applications
              </div>
              <div className="text-xs text-[#888] font-mono mt-0.5">
                Completed All 6 Semesters · Grade A Capstone Project · Final Sem SGPA 7.23
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onOpenEducation();
              }}
              className="px-4 py-2 bg-[#F7D447] text-black font-bold text-xs rounded-lg hover:bg-yellow-300 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>INSPECT GRADE SHEET</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Principles Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#121215] border border-[#24242A]">
            <h3 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#00D9E8]" />
              <span>Core Development Principles</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-[#17171C] border border-[#25252D]">
                <div className="font-display font-bold text-white text-sm">
                  1. Zero Unverified Claims
                </div>
                <p className="text-[#888] mt-1 leading-relaxed">
                  Every architecture, metric, and feature presented is backed by actual code, audited schemas, or clearly labeled as a prototype.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#17171C] border border-[#25252D]">
                <div className="font-display font-bold text-white text-sm">
                  2. Defense in Depth
                </div>
                <p className="text-[#888] mt-1 leading-relaxed">
                  Strict JWT rotation, parameterized queries, authenticated streaming proxies, and rate-limiting at every gateway.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#17171C] border border-[#25252D]">
                <div className="font-display font-bold text-white text-sm">
                  3. Performance as Experience
                </div>
                <p className="text-[#888] mt-1 leading-relaxed">
                  Sub-50ms query execution, lazy-loaded WebGL modules, lightweight initial paints, and seamless reduced-motion alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
