import React from "react";
import { CheckCircle, ShieldCheck, Sparkles, Zap, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-indigo-400" />,
      title: "6+ Years Experience",
      desc: "Proven track record in driving real business growth.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: "100% Secure & Trusted",
      desc: "Your transactions and accounts are handled with military-grade safety.",
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      title: "Ultra Fast Delivery",
      desc: "Efficient project completion without compromising premium standards.",
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Decorative Glow behind */}
        <div className="absolute top-[20%] left-[5%] w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Showcase Inspiration */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[30px] blur-[20px] pointer-events-none" />
            
            {/* Design Showcase Card referencing input_file_1.png */}
            <div className="relative rounded-[30px] border border-indigo-500/20 bg-[#050510]/60 p-4 shadow-2xl overflow-hidden glass-card">
              <div className="absolute top-3 left-3 flex items-center space-x-1.5 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="absolute top-3 right-4 z-10 text-xs font-mono text-indigo-400/80 font-medium">
                PixelForge Design System
              </div>
              
              {/* Image Frame showcasing the phone-headphones UI style in Reference Image 1 with .about-image class */}
              <div className="about-image relative flex items-center justify-center">
                <img
                  src="https://plain-eeur-prod-public.komododecks.com/202606/26/fFc0Po3Ll7fnCNOrCB0C/image.jpg"
                  alt="PixelForge Luxury UI Design Concept"
                  referrerPolicy="no-referrer"
                  className="transition-all duration-700 hover:scale-[1.03]"
                  onError={(e) => {
                    // Fallback
                    e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Info */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">PixelForge</span>
            </h2>

            <p className="text-gray-100 font-semibold leading-relaxed text-base sm:text-lg">
              At PixelForge, we specialize in professional YouTube services, digital branding, business account solutions, and premium design services. With over <strong className="text-white font-extrabold">6 years of experience</strong>, our mission is to provide reliable, secure, and high-quality digital solutions that help individuals and businesses succeed online.
            </p>

            <p className="text-gray-200 font-semibold leading-relaxed text-sm sm:text-base">
              Our core values are absolute quality, transparency in all transactions, lightning-fast delivery, and building long-term customer relationships. We treat every client's project as our own, ensuring perfect design standards and top-tier security.
            </p>

            {/* Structured Highlight points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-indigo-950/40">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center shadow-inner">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-bold text-white text-sm">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
