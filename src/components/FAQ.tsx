import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "How long does delivery take?",
      answer: "Delivery times depend on the specific service. Thumbnail, logo, and banner designs are typically delivered within 24 to 48 hours. Channel transfers, UK business accounts, and customized warm-up programs follow strict security timelines (usually 2 to 7 days) to ensure complete integrity and account safety."
    },
    {
      question: "Are transactions secure?",
      answer: "Absolutely. Security is our highest priority at PixelForge. We use strict verification procedures, escrow deals where applicable, and safe transfer methods to ensure all payments, personal details, and digital assets like YouTube channels remain 100% secure with zero risk."
    },
    {
      question: "Do you provide after-sales support?",
      answer: "Yes! We provide reliable and continuous after-sales support for all services. Whether you need help setting up your new YouTube channel, managing your UK business account, or fine-tuning your website portfolio, our support team is available 24/7 to assist you."
    },
    {
      question: "Can I order multiple services?",
      answer: "Of course. Many of our clients combine services—such as ordering our 20-Day Channel Warm-Up Program alongside Thumbnail Design and YouTube Channel Growth packages. We offer customized bundled packages to help creators and businesses grow even faster."
    },
    {
      question: "How do I contact you?",
      answer: "You can easily contact us directly via WhatsApp at 03041245158 or 03011497107. You can also send an email to gaminginhell56@gmail.com. We are highly responsive and look forward to discussing your digital service requirements!"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 overflow-hidden bg-gradient-to-t from-transparent to-[#03030b]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-indigo-500" />
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              Got Questions?
            </span>
            <span className="h-px w-6 bg-indigo-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">Questions</span>
          </h2>
          <p className="text-gray-200 font-semibold text-sm sm:text-base">
            Have a question about our secure processes, delivery times, or service customization? Find quick answers below.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#060614]/80 border-indigo-500/40 shadow-lg shadow-indigo-500/5"
                    : "bg-[#04040c]/40 border-indigo-950/40 hover:border-indigo-800/40"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${isOpen ? "text-indigo-400" : "text-gray-500"}`} />
                    <span className="font-display font-semibold text-white text-sm sm:text-base md:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen ? "bg-indigo-600/20 border-indigo-400 text-white" : "bg-indigo-950/20 border-indigo-950 text-gray-500"
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 border-t border-indigo-950/20">
                        <p className="text-gray-200 font-semibold text-xs sm:text-sm md:text-base leading-relaxed text-left pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
