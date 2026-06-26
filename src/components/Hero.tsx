import React from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowDown, Calendar, Users, Briefcase, Award } from "lucide-react";
import Counter from "./Counter";

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

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-950/45 border border-indigo-500/35 backdrop-blur-md shadow-lg shadow-indigo-500/5 text-indigo-300 font-medium text-xs sm:text-sm"
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>⭐ 6+ Years of Professional Experience</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                PixelForge
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-400">
                Professional Digital Solutions
              </span>{" "}
              <span className="text-white">for Creators & Businesses</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 font-semibold text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Helping creators and businesses grow with trusted digital services, professional design, and premium online solutions. We forge your digital vision into reality.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/923041245158"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-xl shadow-indigo-600/20 hover:shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                Contact on WhatsApp
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#0a0a18]/80 hover:bg-indigo-950/20 text-gray-200 border border-indigo-900/40 hover:border-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                View Services
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </motion.div>

            {/* Floating Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 w-full"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-indigo-950/10 border border-indigo-950/30 backdrop-blur-sm">
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    <Counter end={1300} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-200 mt-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-400" /> Happy Clients
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    <Counter end={1500} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-200 mt-1 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-400" /> Projects Done
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    <Counter end={99} suffix="%" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-200 mt-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-indigo-400" /> Success Rate
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-200 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" /> Online Support
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Floating Character Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Background glowing circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-blue-500/20 blur-[60px] -z-10 animate-pulse" />
            
            {/* Floating character wrapper using custom .hero-image style */}
            <div className="hero-image relative z-10 flex items-center justify-center">
              <img
                src="https://plain-eeur-prod-public.komododecks.com/202606/26/fFc0Po3Ll7fnCNOrCB0C/image.jpg"
                alt="PixelForge Founder & Digital Expert"
                referrerPolicy="no-referrer"
                className="transition-transform duration-700 hover:scale-[1.03]"
                onError={(e) => {
                  // Fallback if the image cannot be read
                  e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
