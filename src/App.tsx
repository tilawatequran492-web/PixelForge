import React from "react";
import BackgroundEffect from "./components/BackgroundEffect";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* 1. Global Futuristic Background */}
      <BackgroundEffect />

      {/* 2. Sticky Header Navbar */}
      <Header />

      {/* Main Layout Sections */}
      <main className="relative z-10">
        {/* 3. Hero Dashboard & Character Section */}
        <Hero />

        {/* 4. About Us Section with Reference Images Styles */}
        <About />

        {/* 5. Services Showcase with Experience Bars */}
        <Services />

        {/* 6. Why Choose PixelForge Grids */}
        <WhyChooseUs />

        {/* 7. Safe & Trusted Process Protocols */}
        <Process />

        {/* 8. AI-Style Testimonials */}
        <Testimonials />

        {/* 9. Interactive FAQ Accordion */}
        <FAQ />

        {/* 10. Contact Section and WhatsApp / Email Inquiry Portal */}
        <Contact />
      </main>

      {/* 11. Luxury Footer */}
      <Footer />
    </div>
  );
}
