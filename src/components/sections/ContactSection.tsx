import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    // Generate mailto link
    const mailto = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#26262B]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00D9E8] uppercase tracking-widest mb-2">
          <span>04 / CONNECT & INITIATE</span>
          <span className="text-[#444]">•</span>
          <span>DIRECT CONTACT</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Let’s Build Something Distinctive
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#A6A6A1] max-w-2xl leading-relaxed">
          Open to full-stack software development roles, engineering internships, and specialized technical projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#121215] border border-[#24242A] flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00D9E8]/10 border border-[#00D9E8]/30 flex items-center justify-center text-[#00D9E8]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#777] uppercase">EMAIL</span>
                <div className="text-white font-mono text-sm sm:text-base font-semibold">
                  {PERSONAL_INFO.contact.email}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.contact.email, 'email')}
              className="p-2 rounded-lg bg-[#18181E] border border-[#333] hover:border-[#666] text-[#A6A6A1] hover:text-white transition-colors cursor-pointer"
              title="Copy Email"
            >
              {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-[#121215] border border-[#24242A] flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#63E6C1]/10 border border-[#63E6C1]/30 flex items-center justify-center text-[#63E6C1]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#777] uppercase">PHONE</span>
                <div className="text-white font-mono text-sm sm:text-base font-semibold">
                  {PERSONAL_INFO.contact.phone}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.contact.phone, 'phone')}
              className="p-2 rounded-lg bg-[#18181E] border border-[#333] hover:border-[#666] text-[#A6A6A1] hover:text-white transition-colors cursor-pointer"
              title="Copy Phone"
            >
              {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#121215] border border-[#24242A] hover:border-[#00D9E8] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-white" />
                <span className="font-mono text-xs text-white">GitHub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-[#00D9E8] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#121215] border border-[#24242A] hover:border-[#00D9E8] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#00D9E8]" />
                <span className="font-mono text-xs text-white">LinkedIn</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-[#00D9E8] transition-colors" />
            </a>
          </div>

          <div className="p-4 rounded-xl bg-[#101012] border border-[#222] font-mono text-xs text-[#888]">
            <span className="text-[#00D9E8] font-bold block mb-1">AVAILABLE TIMEFRAME:</span>
            <span>Immediate start for engineering roles in Pune, hybrid, or global remote teams.</span>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#24242A] space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181E] border border-[#2D2D35] focus:border-[#00D9E8] text-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#18181E] border border-[#2D2D35] focus:border-[#00D9E8] text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Full-Stack Developer Role / Project Consultation"
                className="w-full px-4 py-2.5 rounded-lg bg-[#18181E] border border-[#2D2D35] focus:border-[#00D9E8] text-white text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                Message & Requirements
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the engineering team, role requirements, or system architecture you want to discuss..."
                className="w-full px-4 py-2.5 rounded-lg bg-[#18181E] border border-[#2D2D35] focus:border-[#00D9E8] text-white text-sm outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-[#00D9E8] hover:bg-[#63E6C1] text-black font-display font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,217,232,0.25)]"
            >
              <Send className="w-4 h-4" />
              <span>TRANSMIT DIRECT MESSAGE</span>
            </button>

            {submitted && (
              <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono animate-in fade-in">
                Draft prepared! Opening your mail client to send to thearyankahar@gmail.com.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
