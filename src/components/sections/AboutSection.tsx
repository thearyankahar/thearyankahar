import React from 'react';
import { Compass, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const edu = PERSONAL_INFO.education;
  const internship = PERSONAL_INFO.internship;

  return (
    <div className="w-full relative z-20 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <section id="about" className="max-w-7xl mx-auto scroll-mt-14 bg-[#151515]/85 backdrop-blur-md border border-[#303030] p-6 sm:p-12 lg:p-16">
        {/* Section Header */}
        <div className="mb-12 border-b border-[#303030] pb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] uppercase tracking-widest mb-3">
            <span className="text-[#35D6C0]">02 / BACKGROUND</span>
            <span className="text-[#404040]">•</span>
            <span>PROFILE & PRINCIPLES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F2F0EB] tracking-tight uppercase">
            Systematic Implementation & Engineering Discipline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#929292] max-w-2xl leading-relaxed">
            Full-stack web developer focused on robust database design, role-based workflows, and clean, accessible interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Biography Narrative & Experience */}
          <div className="lg:col-span-7 space-y-6 text-[#929292] text-sm sm:text-base leading-relaxed">
            <p className="text-base sm:text-lg text-[#F2F0EB] font-medium leading-relaxed">
              I am Aryan Kahar, a Full-Stack Web Developer based in Pune, India. I build backend services, relational database schemas, and responsive web applications.
            </p>

            <p>
              My recent commercial work centers on operational web software—primarily the Dixit Lending Solution (incorporating the CLN Lending Suite), where I engineered role-based Admin and Employee CRM portals, S3/R2-compatible document vaulting, automated WhatsApp notifications via Baileys, and customer loan inquiry applications with interactive financial EMI calculators.
            </p>

            <p>
              In addition to commercial platforms, I construct software across machine learning services (Python, Flask, OpenCV contouring), academic platforms (React, TypeScript, Firebase Firestore), and hardware prototypes (serial AT-commands for USB GSM modems with Redis job queues).
            </p>

            <p>
              I treat software engineering as a disciplined craft: prioritizing clean relational schemas, deterministic application state, and functional implementations over speculative claims.
            </p>

            {/* Experience & Academic Journey Subsection */}
            <div className="space-y-4 mt-8 pt-6 border-t border-[#303030]">
              <div className="font-mono text-xs text-[#929292] uppercase tracking-wider flex items-center gap-2 mb-2">
                <span className="text-[#35D6C0]">02.1 / JOURNEY</span>
                <span className="text-[#404040]">•</span>
                <span>EXPERIENCE & FOUNDATION</span>
              </div>

              {/* Completed Internship Card */}
              {internship && (
                <div className="p-5 sm:p-6 bg-[#0A0A0A] border border-[#303030]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h3 className="text-[#F2F0EB] font-display font-bold text-base sm:text-lg">
                      {internship.company}
                    </h3>
                    <span className="text-[11px] font-mono text-[#35D6C0] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35D6C0]" />
                      <span>{internship.status}</span>
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#929292] mb-3">
                    {internship.type} · {internship.duration}
                  </div>
                  <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              )}

              {/* Academic Foundation Card */}
              <div className="p-5 sm:p-6 bg-[#0A0A0A] border border-[#303030]">
                <span className="text-[10px] font-mono text-[#929292] uppercase tracking-wider block mb-1">
                  ACADEMIC FOUNDATION
                </span>
                <div className="text-[#F2F0EB] font-display font-bold text-base sm:text-lg">
                  {edu.degree}
                </div>
                <div className="text-xs sm:text-sm text-[#929292] font-mono mt-1">
                  {edu.institution} · {edu.period} · {edu.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Practical Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#0A0A0A] border border-[#303030]">
              <h3 className="font-mono text-xs uppercase text-[#F2F0EB] tracking-wider mb-6 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#35D6C0]" />
                <span>Development Creed & Practice</span>
              </h3>

              <div className="space-y-4 text-xs text-[#929292]">
                <div className="p-4 bg-[#151515] border border-[#303030]">
                  <div className="font-semibold text-[#F2F0EB] mb-1.5 flex items-center gap-2 text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#35D6C0]" />
                    <span>1. Practical Implementation</span>
                  </div>
                  <p className="leading-relaxed text-[#929292]">
                    Focusing on working application architectures, relational schemas, and clearly distinguishing developer prototypes from production systems.
                  </p>
                </div>

                <div className="p-4 bg-[#151515] border border-[#303030]">
                  <div className="font-semibold text-[#F2F0EB] mb-1.5 flex items-center gap-2 text-sm">
                    <Layers className="w-4 h-4 text-[#35D6C0]" />
                    <span>2. Layered Architecture</span>
                  </div>
                  <p className="leading-relaxed text-[#929292]">
                    Decoupling client presentation from backend controllers, abstracting cloud storage behind validated clients, and modeling relational integrity.
                  </p>
                </div>

                <div className="p-4 bg-[#151515] border border-[#303030]">
                  <div className="font-semibold text-[#F2F0EB] mb-1.5 flex items-center gap-2 text-sm">
                    <Terminal className="w-4 h-4 text-[#35D6C0]" />
                    <span>3. Usable Ergonomics</span>
                  </div>
                  <p className="leading-relaxed text-[#929292]">
                    Preserving keyboard accessibility, responsive breakpoints, fast bundle delivery, and comfortable negative space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
