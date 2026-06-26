import React, { useState } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";

// Official brand-identity WhatsApp SVG path for a high-end premium look
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.338 4.978L2 22l5.19-1.361c1.476.804 3.137 1.228 4.82 1.23h.004c5.505 0 9.988-4.478 9.989-9.984a9.95 9.95 0 0 0-2.926-7.064A9.95 9.95 0 0 0 12.012 2zm5.834 14.168c-.24.673-1.396 1.293-1.922 1.353-.483.054-.954.26-3.085-.572-2.723-1.064-4.48-3.832-4.615-4.012-.136-.18-1.096-1.455-1.096-2.776 0-1.32.688-1.968.932-2.228.196-.21.517-.315.828-.315.1-.002.193 0 .278.005.25.011.417.026.598.461.226.547.776 1.895.844 2.03.067.136.113.294.022.474-.09.18-.135.294-.27.451-.136.157-.286.352-.407.472-.136.136-.278.285-.12.556.157.27.7 1.144 1.5 1.857.915.814 1.684 1.067 1.924 1.164.24.1.383.083.526-.083.143-.165.61-.713.774-.954.165-.24.33-.203.556-.12.226.083 1.436.677 1.684.804.248.12.413.18.474.285.06.1.06.586-.18 1.259z"/>
  </svg>
);

export default function Contact() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  
  // State for the copy email feature
  const [copiedEmail, setCopiedEmail] = useState(false);

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-indigo-500" />
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              Get in Touch
            </span>
            <span className="h-px w-6 bg-indigo-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Forge Your Next <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">Big Project</span> With Us
          </h2>
          <p className="text-gray-200 font-semibold text-sm sm:text-base">
            Contact us directly on WhatsApp or via email. We typically reply within 15 minutes!
          </p>
        </div>

        {/* Centered Direct Contacts Block */}
        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-4 text-center">
            Direct Contact Details
          </h3>
          
          {/* WhatsApp Cards */}
          <div className="space-y-4">
            {/* WhatsApp Card 1 */}
            <div className="p-6 rounded-[24px] border border-emerald-500/25 bg-[#050f0b]/95 relative overflow-hidden flex flex-col space-y-4 shadow-[0_8px_32px_rgba(16,185,129,0.05)] hover:border-emerald-500/45 hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)] transition-all duration-300 group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:bg-emerald-500/20 transition-colors">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400/70 font-mono tracking-widest uppercase">Verified Account</div>
                    <h4 className="text-white font-display font-extrabold text-sm sm:text-base">WhatsApp Number 1</h4>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>

              <div className="py-1 flex items-center gap-2">
                <WhatsAppIcon className="w-6 h-6 text-emerald-400 shrink-0" />
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-wide font-mono drop-shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  03041245158
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("03041245158");
                    setCopied1(true);
                    setTimeout(() => setCopied1(false), 2000);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#020205] hover:bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/40 text-xs text-emerald-400 font-semibold transition-all duration-200 cursor-pointer"
                >
                  {copied1 ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emerald-400/70" />
                      Copy Number
                    </>
                  )}
                </button>
                <a
                  href="https://wa.me/923041245158"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs text-white font-bold transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  Click to Chat
                </a>
              </div>
            </div>

            {/* WhatsApp Card 2 */}
            <div className="p-6 rounded-[24px] border border-emerald-500/25 bg-[#050f0b]/95 relative overflow-hidden flex flex-col space-y-4 shadow-[0_8px_32px_rgba(16,185,129,0.05)] hover:border-emerald-500/45 hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)] transition-all duration-300 group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:bg-emerald-500/20 transition-colors">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400/70 font-mono tracking-widest uppercase">Verified Account</div>
                    <h4 className="text-white font-display font-extrabold text-sm sm:text-base">WhatsApp Number 2</h4>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>

              <div className="py-1 flex items-center gap-2">
                <WhatsAppIcon className="w-6 h-6 text-emerald-400 shrink-0" />
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-wide font-mono drop-shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  0301 1497107
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("03011497107");
                    setCopied2(true);
                    setTimeout(() => setCopied2(false), 2000);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#020205] hover:bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/40 text-xs text-emerald-400 font-semibold transition-all duration-200 cursor-pointer"
                >
                  {copied2 ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emerald-400/70" />
                      Copy Number
                    </>
                  )}
                </button>
                <a
                  href="https://wa.me/923011497107"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs text-white font-bold transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  Click to Chat
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="p-6 rounded-3xl border border-indigo-950/40 bg-[#04040d]/95 relative overflow-hidden shadow-xl transition-all duration-300 group text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3 text-indigo-400 font-semibold text-sm tracking-wider uppercase">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>Email Address</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("gaminginhell56@gmail.com");
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 2000);
                }}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-950/40 hover:bg-indigo-900/40 border border-indigo-950 text-[11px] font-mono text-indigo-300 transition-colors cursor-pointer"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400/70" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-gray-200 font-semibold leading-relaxed mb-4">
              Send us an email for formal requests, large business partnerships, or contract agreements.
            </p>

            <a 
              href="mailto:gaminginhell56@gmail.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#020205] border border-indigo-950/50 hover:border-indigo-500/30 hover:bg-indigo-950/10 transition-all cursor-pointer group/mail"
            >
              <div className="font-mono text-xs sm:text-sm text-white font-semibold">
                gaminginhell56@gmail.com
              </div>
              <Send className="w-4 h-4 text-indigo-400 group-hover/mail:text-indigo-300" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
