import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  Youtube, 
  TrendingUp, 
  Flame, 
  Image, 
  Video, 
  Layout, 
  Palette, 
  Globe, 
  Smartphone, 
  Key, 
  Rocket 
} from "lucide-react";
import Counter from "./Counter";

interface ServiceItem {
  title: string;
  experience: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "youtube" | "design" | "business" | "development";
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number; key?: string | number }) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });

  // Premium, Category-Specific styling configurations to eliminate synthetic "AI template" feel
  let catColor = "from-indigo-950/80 to-purple-950/80 border-indigo-500/20 text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-400/40 shadow-[0_0_15px_rgba(99,102,241,0.15)]";
  if (service.category === "youtube") {
    catColor = "from-red-950/80 to-rose-950/80 border-red-500/25 text-red-400 group-hover:text-red-300 group-hover:border-red-400/40 shadow-[0_0_15px_rgba(239,68,68,0.25)]";
  } else if (service.category === "design") {
    catColor = "from-fuchsia-950/80 to-pink-950/80 border-fuchsia-500/25 text-fuchsia-400 group-hover:text-fuchsia-300 group-hover:border-fuchsia-400/40 shadow-[0_0_15px_rgba(217,70,239,0.25)]";
  } else if (service.category === "business") {
    catColor = "from-emerald-950/80 to-teal-950/80 border-emerald-500/25 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]";
  } else if (service.category === "development") {
    catColor = "from-cyan-950/80 to-blue-950/80 border-cyan-500/25 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]";
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.2) }}
      className="group relative flex flex-col p-6 rounded-3xl border border-indigo-950/40 glass-card glass-card-hover h-full justify-between"
    >
      {/* Accent Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Icon Frame */}
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${catColor} flex items-center justify-center mb-6 transition-all duration-300 border`}>
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-lg leading-snug mb-3 group-hover:text-indigo-300 transition-colors duration-300 text-left">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-200 font-semibold text-sm sm:text-[15px] leading-relaxed mb-6 text-left">
          {service.description}
        </p>
      </div>

      {/* Animated Progress Bar */}
      <div className="w-full mt-auto">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Expertise / Reliability</span>
          <span className="text-xs font-semibold text-indigo-400">
            <Counter end={service.experience} duration={1500} suffix="%" trigger={isInView} />
          </span>
        </div>
        <div className="w-full h-1.5 bg-indigo-950/50 rounded-full overflow-hidden border border-indigo-950/35">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${service.experience}%` } : { width: "0%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "YouTube Channel Acquisition & Sale",
      experience: 100,
      description: "Secure and trusted buying and selling of monetized and non-monetized YouTube channels with professional support.",
      icon: Youtube,
      category: "youtube"
    },
    {
      title: "YouTube Channel Growth",
      experience: 95,
      description: "Growth strategies that help increase channel performance, audience engagement, and visibility.",
      icon: TrendingUp,
      category: "youtube"
    },
    {
      title: "20-Day Channel Warm-Up Program",
      experience: 90,
      description: "A structured warm-up process designed to prepare YouTube channels for healthy long-term activity.",
      icon: Flame,
      category: "youtube"
    },
    {
      title: "Thumbnail Design",
      experience: 85,
      description: "Eye-catching YouTube thumbnails designed for maximum click-through rate.",
      icon: Image,
      category: "design"
    },
    {
      title: "Islamic Short Video Editing",
      experience: 80,
      description: "Professional Islamic short-form video editing with clean visuals and engaging storytelling.",
      icon: Video,
      category: "design"
    },
    {
      title: "Banner Design",
      experience: 70,
      description: "Professional banners that strengthen your brand identity.",
      icon: Layout,
      category: "design"
    },
    {
      title: "Logo Design",
      experience: 70,
      description: "Modern logos designed to make your business stand out.",
      icon: Palette,
      category: "design"
    },
    {
      title: "UK Business Account Sales",
      experience: 100,
      description: "Reliable UK business account solutions with professional guidance.",
      icon: Globe,
      category: "business"
    },
    {
      title: "Mobile CapCut Account Sales",
      experience: 90,
      description: "Premium mobile CapCut account solutions for content creators.",
      icon: Smartphone,
      category: "business"
    },
    {
      title: "Premium Tools Access",
      experience: 95,
      description: "Access to premium digital tools that improve productivity and content creation.",
      icon: Key,
      category: "business"
    },
    {
      title: "Portfolio Website Design & Launch",
      experience: 100,
      description: "Modern, responsive, SEO-friendly portfolio websites built for businesses, freelancers, and agencies.",
      icon: Rocket,
      category: "development"
    }
  ];

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(s => s.category === activeFilter);

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-indigo-500" />
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              Our Expertise
            </span>
            <span className="h-px w-6 bg-indigo-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">Digital Services</span> We Provide
          </h2>
          <p className="text-gray-200 font-semibold text-sm sm:text-base">
            Professional solutions optimized for high conversion, brand recognition, and growth. Filter by category to explore our areas of expertise.
          </p>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {[
              { id: "all", label: "All Services" },
              { id: "youtube", label: "YouTube Hub" },
              { id: "design", label: "Creative Design" },
              { id: "business", label: "Business Solutions" },
              { id: "development", label: "Web Tech" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-[#070712]/60 border-indigo-950/40 text-gray-400 hover:text-white hover:border-indigo-500/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
