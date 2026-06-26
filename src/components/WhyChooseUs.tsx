import React from "react";
import { motion } from "motion/react";
import { 
  Award, Zap, Sparkles, ShieldAlert, ShieldCheck, MessageSquareCode, 
  Smile, LayoutGrid, HeartHandshake, CheckCircle 
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      title: "6+ Years Experience",
      desc: "Over half a decade of industry expertise helping creators and businesses scale efficiently.",
      icon: <Award className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Fast Delivery",
      desc: "Engineered project workflows that ensure prompt turnaround and delivery on schedule.",
      icon: <Zap className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Premium Quality",
      desc: "Impeccable visual layouts, production-ready code, and elite marketing assets.",
      icon: <Sparkles className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Trusted Service",
      desc: "Hundreds of active clients trust us globally with their digital channels and branding.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Professional Communication",
      desc: "24/7 dedicated support with absolute transparency and direct status updates.",
      icon: <MessageSquareCode className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Secure Transactions",
      desc: "Guaranteed secure channel transfers, safe payment portals, and complete data safety.",
      icon: <CheckCircle className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Customer Satisfaction",
      desc: "Our primary metric is client smiles, verified by a stellar 99% satisfaction rate.",
      icon: <Smile className="w-5 h-5 text-yellow-400" />
    },
    {
      title: "Modern Design Standards",
      desc: "Adherence to premium, responsive, and high-performance layouts.",
      icon: <LayoutGrid className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Reliable After-Sales Support",
      desc: "We stay with you. Enjoy continuous assistance even after project delivery.",
      icon: <HeartHandshake className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="why-us" className="relative py-20 overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute right-[-10%] top-[30%] w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-indigo-500" />
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              The Forge Difference
            </span>
            <span className="h-px w-6 bg-indigo-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">PixelForge</span>
          </h2>
          <p className="text-gray-200 font-semibold text-sm sm:text-base">
            We are dedicated to forging reliable, secure, and top-tier digital assets that stand the test of time.
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-3xl border border-indigo-950/45 bg-[#060613]/70 backdrop-blur-md hover:border-indigo-500/30 hover:shadow-[0_12px_24px_-8px_rgba(79,70,229,0.25)] transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Icon Container with glowing background */}
              <div className="w-10 h-10 rounded-xl bg-indigo-950/40 border border-indigo-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 font-semibold text-xs sm:text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
