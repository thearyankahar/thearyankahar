import React, { useState, useEffect } from 'react';
import { X, GraduationCap, CheckCircle, Award, Calendar, FileText, ExternalLink, ShieldCheck, ZoomIn } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EducationModal: React.FC<EducationModalProps> = ({ isOpen, onClose }) => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedDoc) setSelectedDoc(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedDoc]);

  if (!isOpen) return null;

  const edu = PERSONAL_INFO.education;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#121215] border border-[#2F2F36] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#24242A] flex items-center justify-between bg-[#16161B]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F7D447]/10 border border-[#F7D447]/30 flex items-center justify-center text-[#F7D447]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base sm:text-lg">
                  Academic Verification & Degree Record
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  VERIFIED PASS
                </span>
              </div>
              <p className="text-xs text-[#888] font-mono">
                JSPM University Pune · School of Computational Sciences
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg border border-[#333] hover:border-[#666] text-[#A6A6A1] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#F2F0E9]">
          
          {/* Main Credentials Overview Card */}
          <div className="p-6 rounded-xl bg-[#16161C] border border-[#2A2A33] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7D447]/10 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-[11px] font-mono text-[#F7D447] uppercase tracking-wider font-semibold">
                  Undergraduate Degree
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                  {edu.degree}
                </h3>
                <div className="text-sm text-[#A6A6A1] mt-1 font-mono">
                  {edu.institution} · {edu.period}
                </div>
                <p className="mt-3 text-xs text-[#C8C8C0] leading-relaxed">
                  Focus: {edu.focus}
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#111115] border border-[#222]">
                  <div className="text-[10px] text-[#777]">OVERALL RESULT</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">PASS (128 CREDITS)</div>
                  <div className="text-[10px] text-[#555] mt-0.5">{edu.resultDate}</div>
                </div>

                <div className="p-3 rounded-lg bg-[#111115] border border-[#222]">
                  <div className="text-[10px] text-[#777]">CAPSTONE PROJECT</div>
                  <div className="text-sm font-bold text-[#F7D447] mt-0.5">{edu.projectGrade}</div>
                  <div className="text-[10px] text-[#555] mt-0.5">Scheme B (PROJ)</div>
                </div>

                <div className="p-3 rounded-lg bg-[#111115] border border-[#222]">
                  <div className="text-[10px] text-[#777]">FINAL SEMESTER</div>
                  <div className="text-sm font-bold text-[#00D9E8] mt-0.5">{edu.lastSemesterSGPA}</div>
                  <div className="text-[10px] text-[#555] mt-0.5">Highest Academic Sem</div>
                </div>

                <div className="p-3 rounded-lg bg-[#111115] border border-[#222]">
                  <div className="text-[10px] text-[#777]">CONVOCATION</div>
                  <div className="text-sm font-bold text-[#63E6C1] mt-0.5">REGISTERED</div>
                  <div className="text-[10px] text-[#555] mt-0.5">Oct 2026 Receipt Confirmed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sixth Semester Verified Course Breakdown */}
          <div>
            <h4 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#F7D447]" />
              <span>Final Academic Curricula & Lab Evaluated Courses</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {edu.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#16161B] border border-[#24242A]"
                >
                  <span className="text-[#D4D4CE]">{course.split(' (')[0]}</span>
                  <span className="font-mono text-[11px] font-bold text-[#00D9E8] ml-2">
                    {course.split(' (')[1]?.replace(')', '') || 'B+'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification Documents Viewer */}
          <div>
            <h4 className="font-mono text-xs uppercase text-[#888] tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#00D9E8]" />
              <span>Verified Documents (Click to Inspect Full Resolution)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {edu.documents.map((doc, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    sound.playClick();
                    setSelectedDoc(doc.imagePath);
                  }}
                  className="group rounded-xl border border-[#2A2A30] bg-[#16161A] overflow-hidden cursor-pointer hover:border-[#00D9E8]/60 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 bg-black/40 overflow-hidden">
                    <img
                      src={doc.imagePath}
                      alt={doc.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-2 right-2 p-1.5 rounded bg-black/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="font-display font-bold text-white text-sm group-hover:text-[#00D9E8] transition-colors">
                      {doc.title}
                    </div>
                    <p className="text-[11px] text-[#888] mt-1 leading-normal">
                      {doc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#24242A] bg-[#16161B] flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Authenticated Academic Record (BCA 2023–2026)</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-[#222] hover:bg-[#333] text-white transition-colors cursor-pointer"
          >
            CLOSE RECORD
          </button>
        </div>

        {/* Fullscreen Image Preview Zoom */}
        {selectedDoc && (
          <div
            className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedDoc(null)}
          >
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#222] text-white hover:bg-[#444] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedDoc}
              alt="Document Full View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-[#333] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </div>
    </div>
  );
};
