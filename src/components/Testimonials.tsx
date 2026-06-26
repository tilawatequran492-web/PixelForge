import React from "react";
import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  role: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: "Michael Johnson",
      text: "PixelForge delivered exactly what was promised. The YouTube channel transfer was smooth, secure, and professional.",
      role: "YouTube Content Creator",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    {
      name: "Daniel Smith",
      text: "My thumbnail quality improved dramatically. Highly recommended for content creators searching for maximum click-through rates.",
      role: "Gaming Enthusiast & Streamer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
    },
    {
      name: "Ahmed Hassan",
      text: "The portfolio website exceeded my expectations. Modern design, smooth animations, and excellent professional communication.",
      role: "Digital Agency Director",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
    },
    {
      name: "Sarah Williams",
      text: "Very professional service. Everything was completed on time with outstanding quality. Will definitely buy again.",
      role: "E-Commerce Brand Specialist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    },
    {
      name: "James Carter",
      text: "I've used multiple services from PixelForge, and every experience has been excellent. Safe, secure, and very friendly.",
      role: "Digital Marketer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
    },
    {
      name: "Ali Khan",
      text: "Professional support, quick delivery, and trustworthy communication. Highly recommended for any serious creator.",
      role: "Vlogger & Influencer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120"
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Visual backdrop ambient glow */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-indigo-500" />
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              Client Reviews
            </span>
            <span className="h-px w-6 bg-indigo-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">Creators & Businesses</span>
          </h2>
          <p className="text-gray-200 font-semibold text-sm sm:text-base">
            See how PixelForge helps professionals and businesses around the world build, secure, and scale their digital empires.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 rounded-[32px] border border-indigo-950/45 bg-[#050511]/70 backdrop-blur-md relative overflow-hidden flex flex-col justify-between hover:border-indigo-500/30 hover:scale-[1.01] transition-all duration-300 group"
            >
              {/* Giant glowing quote mark in back */}
              <Quote className="absolute right-6 top-6 w-16 h-16 text-indigo-500/5 group-hover:text-indigo-500/10 transition-colors duration-300 pointer-events-none" />

              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center space-x-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-yellow-500/90 text-yellow-500/90 filter drop-shadow-[0_0_4px_rgba(234,179,8,0.3)]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-left mb-6 font-semibold">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-5 border-t border-indigo-950/40">
                <div className="w-12 h-12 rounded-full border border-indigo-500/30 overflow-hidden relative shadow-lg">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <p className="text-xs text-indigo-400 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
