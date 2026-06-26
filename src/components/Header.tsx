import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Sync active item initially
    if (window.location.hash) {
      setActiveItem(window.location.hash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveItem(`#${id}`);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    const sections = ["home", "about", "services", "why-us", "security", "testimonials", "faq", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Security", href: "#security" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#03030b]/80 backdrop-blur-lg border-b border-indigo-950/40 shadow-[0_10px_30px_rgba(2,2,5,0.8)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2.5 group">
              <Logo size={40} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400 group-hover:from-white group-hover:to-indigo-300 transition-all">
                Pixel<span className="text-indigo-400 font-extrabold">Forge</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeItem === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveItem(item.href)}
                    className={`relative font-sans text-sm font-medium transition-colors duration-300 py-1.5 px-0.5 ${
                      isActive ? "text-indigo-400 font-semibold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute left-0 right-0 bottom-0 h-[2.5px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/923041245158"
                target="_blank"
                referrerPolicy="no-referrer"
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm text-white group overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:scale-105" />
                <div className="absolute inset-[1px] bg-[#03030c] rounded-[11px] group-hover:bg-transparent transition-all duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-indigo-300 group-hover:text-white transition-colors duration-300">
                  <WhatsAppIcon className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                  WhatsApp Support
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-950/20 focus:outline-none transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#020205]/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />

            {/* Content Drawer */}
            <div className="absolute top-0 inset-x-0 bg-[#04040d]/95 border-b border-indigo-950/40 p-6 flex flex-col space-y-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const isActive = activeItem === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.href);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl font-medium text-base transition-all flex items-center ${
                        isActive 
                          ? "text-white bg-indigo-950/40 border-l-2 border-indigo-500 pl-6 font-bold" 
                          : "text-gray-300 hover:text-white hover:bg-indigo-950/20 pl-4"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <div className="pt-4 border-t border-indigo-950/30">
                <a
                  href="https://wa.me/923041245158"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-600/20 hover:shadow-purple-600/30 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
