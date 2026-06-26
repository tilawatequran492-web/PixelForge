import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, HeartHandshake, Zap, CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: "Security Verified",
      desc: "All YouTube credentials and digital assets undergo rigid safety checks prior to transfer."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-400" />,
      title: "Trusted Escrow & Deals",
      desc: "Transparency is maintained via official transaction logs to eliminate counterparty risk."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Express Delivery",
      desc: "Instant onboarding and delivery programs ensure your systems are live without delay."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      title: "Verified Support",
      desc: "We provide dedicated premium guidance for setup, optimization, and post-sale care."
    }
  ];

  return (
    <section id="security" className="relative py-20 overflow-hidden bg-gradient-to-b from-transparent to-[#04040d]/60">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="p-8 sm:p-12 rounded-[40px] border border-indigo-950/45 bg-[#050510]/80 backdrop-blur-md relative overflow-hidden shadow-2xl">
          {/* Subtle overlay lines */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-50" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content column */}
            <div className="lg:col-span-5 text-left flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                  Safe & Secure Process
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Safe & Secure <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  Service Process
                </span>
              </h2>

              <p className="text-gray-100 font-semibold leading-relaxed text-sm sm:text-base">
                Every project and transaction is handled professionally and securely. For YouTube channel transactions, we verify all necessary details before completing the process.
              </p>

              <p className="text-gray-200 font-semibold leading-relaxed text-xs sm:text-sm">
                Clear communication, transparency, and client confidence are our priorities throughout every step. Our goal is to provide a safe, reliable, and trustworthy experience for every customer.
              </p>

              {/* Verified Badge */}
              <div className="pt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">100% Fully Verified Business</h4>
                  <p className="text-xs text-gray-200 font-semibold">Guaranteed secure digital solution provider</p>
                </div>
              </div>
            </div>

            {/* Right Steps column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl border border-indigo-950/40 bg-[#030309]/80 hover:border-indigo-500/35 transition-all duration-300 flex flex-col items-start text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm sm:text-base mb-2 flex items-center gap-2">
                    {idx + 1}. {step.title}
                  </h3>
                  <p className="text-gray-200 font-semibold text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
