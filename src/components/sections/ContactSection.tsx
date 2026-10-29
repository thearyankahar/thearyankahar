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
    const mailto = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222226]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#8E8E93] uppercase tracking-widest mb-2">
          <span>04 / CONNECT</span>
          <span className="text-[#333]">•</span>
          <span>COMMUNICATION</span>
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Direct Inquiries & Opportunities
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#8E8E93] max-w-2xl leading-relaxed">
          Open to full-stack developer roles, engineering internships, and software development engagements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Email Card */}
          <div className="p-5 rounded-xl bg-[#131316] border border-[#222226] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#18181D] border border-[#27272C] flex items-center justify-center text-[#2DD4BF]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#666] uppercase">EMAIL</span>
                <div className="text-[#EDEAE2] font-mono text-sm font-medium">
                  {PERSONAL_INFO.contact.email}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.contact.email, 'email')}
              className="p-1.5 rounded-md bg-[#18181E] border border-[#28282E] text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
              title="Copy Email"
            >
              {copied === 'email' ? <Check className="w-3.5 h-3.5 text-[#2DD4BF]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-xl bg-[#131316] border border-[#222226] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#18181D] border border-[#27272C] flex items-center justify-center text-[#2DD4BF]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#666] uppercase">PHONE</span>
                <div className="text-[#EDEAE2] font-mono text-sm font-medium">
                  {PERSONAL_INFO.contact.phone}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.contact.phone, 'phone')}
              className="p-1.5 rounded-md bg-[#18181E] border border-[#28282E] text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
              title="Copy Phone"
            >
              {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-[#2DD4BF]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-[#131316] border border-[#222226] hover:border-[#383842] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-white" />
                <span className="font-mono text-xs text-[#EDEAE2]">GitHub</span>
              </div>
              <ExternalLink className="w-3 h-3 text-[#666] group-hover:text-[#2DD4BF] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-[#131316] border border-[#222226] hover:border-[#383842] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#2DD4BF]" />
                <span className="font-mono text-xs text-[#EDEAE2]">LinkedIn</span>
              </div>
              <ExternalLink className="w-3 h-3 text-[#666] group-hover:text-[#2DD4BF] transition-colors" />
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-[#111114] border border-[#1E1E22] font-mono text-xs text-[#8E8E93]">
            <span className="text-[#8E8E93] block text-[10px] uppercase mb-0.5">AVAILABILITY:</span>
            <span>Immediate start for full-stack engineering roles in Pune, hybrid, or remote.</span>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-7 rounded-xl bg-[#131316] border border-[#222226] space-y-3.5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8E93] uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#18181D] border border-[#25252B] focus:border-[#2DD4BF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#8E8E93] uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#18181D] border border-[#25252B] focus:border-[#2DD4BF] text-white text-xs outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#8E8E93] uppercase mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Full-Stack Engineering Role / Discussion"
                className="w-full px-3.5 py-2 rounded-lg bg-[#18181D] border border-[#25252B] focus:border-[#2DD4BF] text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#8E8E93] uppercase mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your team, role scope, or project..."
                className="w-full px-3.5 py-2 rounded-lg bg-[#18181D] border border-[#25252B] focus:border-[#2DD4BF] text-white text-xs outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-5 rounded-lg bg-[#2DD4BF] hover:bg-[#28BFAC] text-black font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SEND INQUIRY</span>
            </button>

            {submitted && (
              <div className="p-2.5 rounded bg-[#18181E] border border-[#28282E] text-[#2DD4BF] text-xs text-center font-mono">
                Draft prepared. Opening your mail client to transmit to thearyankahar@gmail.com.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
