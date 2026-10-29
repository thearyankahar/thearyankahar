import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <div className="w-full relative z-20 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <section id="certifications" className="max-w-7xl mx-auto scroll-mt-14 bg-[#151515]/85 backdrop-blur-md border border-[#303030] p-6 sm:p-12 lg:p-16">
        {/* Section Header */}
        <div className="mb-12 border-b border-[#303030] pb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-[#929292] uppercase tracking-widest mb-3">
            <span className="text-[#35D6C0]">04 / CREDENTIALS</span>
            <span className="text-[#404040]">•</span>
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F2F0EB] tracking-tight uppercase">
            Certifications & Professional Learning
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#929292] max-w-2xl leading-relaxed">
            Industry assessments and cloud certifications validating advanced database engineering, data analytics simulation, and cloud infrastructure competencies.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 bg-[#0A0A0A] border border-[#303030] hover:border-[#35D6C0]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Issuer & Date Badge */}
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <div className="flex items-center gap-2 text-[#35D6C0]">
                    <Award className="w-4 h-4" />
                    <span className="font-bold uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                  <span className="text-[#929292] text-[11px]">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#F2F0EB] group-hover:text-[#35D6C0] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <div className="text-[11px] font-mono text-[#929292] mt-1 mb-4 uppercase tracking-wider">
                  {cert.category}
                </div>

                <p className="text-xs sm:text-sm text-[#929292] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Validated Competencies */}
              <div className="pt-4 border-t border-[#202020]">
                <div className="text-[10px] font-mono uppercase text-[#929292] mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#35D6C0]" />
                  <span>VALIDATED COMPETENCIES</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-[#151515] border border-[#252525] text-[#F2F0EB] text-[11px] font-mono flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#35D6C0]" />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
