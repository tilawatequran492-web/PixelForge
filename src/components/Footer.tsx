import React from "react";
import { Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-[#020205] border-t border-indigo-950/40 overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-indigo-950/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-indigo-950/20 pb-8">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-3 text-left">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <Logo size={32} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Pixel<span className="text-indigo-400 font-extrabold">Forge</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold max-w-sm">
              Helping creators and businesses scale globally with premium YouTube solutions, high-converting thumbnail designs, secure account acquisitions, and custom technology portals.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-col md:items-center space-y-3 text-left md:text-center">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-300 font-semibold hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Brand Promise Column */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-1 text-left md:text-right">
            <span className="text-xs text-indigo-400 font-bold tracking-wider uppercase">Official Partner</span>
            <span className="text-sm font-display font-bold text-white">PixelForge Digital LLC</span>
            <span className="text-[10px] text-gray-400 font-semibold mt-1">Verifiable Trust & Premium Design Standards</span>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-semibold">
            © 2026 PixelForge. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-1 text-xs text-gray-400 font-semibold">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
            <span>for digital innovators</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
