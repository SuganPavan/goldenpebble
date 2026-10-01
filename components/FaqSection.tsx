"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import { Plus, Minus, ArrowRight, Sparkles, HelpCircle, MessageCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqSectionProps {
  heading: string;
  subtitle?: string;
  questions: FaqItem[];
  sideTitle?: string;
  sideDescription?: string;
  sideButtonText?: string;
  sideButtonLink?: string;
  className?: string;
}

export default function FaqSection({
  heading,
  subtitle,
  questions,
  sideButtonText = "Contact Reservations",
  sideButtonLink = "https://wa.me/919434288856?text=Hi%20Golden%20Pebble%20Team%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability.",
  className = ""
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className={`py-8 sm:py-16 lg:py-8 text-[#F8F6EF] relative overflow-hidden ${className}`}>
      
      {/* 1. FULL COVER BACKGROUND IMAGE ACROSS THE ENTIRE FAQ PAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838816/golden-pebble/images/golden-pebble-property.jpg"
          alt="Hotel Golden Pebble Havelock Property Background"
          fill
          sizes="100vw"
          className="object-cover object-center w-full h-full scale-105"
        />
        {/* Dark Emerald & Vignette Overlays for rich image visibility and optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021B18]/85 via-[#073F3B]/75 to-[#03201D]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CENTERED EDITORIAL HEADER WITH SCROLL REVEAL */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 lg:mb-5">
          <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/60 text-[#E8DCC5] text-xs font-sans font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-md mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A46D] animate-pulse" />
            <span>GUEST ASSISTANCE &amp; FAQS</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white drop-shadow-md">
            {heading}
          </h2>

          {subtitle && (
            <p className="text-xs sm:text-sm text-[#F8F6EF]/90 font-light mt-1.5 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </ScrollReveal>

        {/* STAGGERED ACCORDION LIST */}
        <ScrollReveal variant="stagger-container" staggerDelay={0.1} className="space-y-2 lg:space-y-2">
          {questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollRevealItem key={idx} variant="fade-up">
                <div
                  className="bg-black/45 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-[#C5A46D] transition-all duration-300 shadow-xl overflow-hidden group/card"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 lg:py-2.5 text-left flex items-center justify-between gap-3 font-serif text-sm sm:text-lg font-semibold text-white group-hover/card:text-[#C5A46D] transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span className="leading-snug drop-shadow-sm">{item.question}</span>
                    <div className={`p-1.5 rounded-full transition-all shrink-0 ${
                      isOpen 
                        ? "bg-[#C5A46D] text-[#073F3B] shadow-md" 
                        : "bg-white/10 text-[#C5A46D] border border-white/20"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-4 sm:px-6 pb-3 sm:pb-5 lg:pb-3 pt-1 text-xs sm:text-sm font-sans font-light text-[#F8F6EF]/90 leading-relaxed border-t border-white/10"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>

        {/* BOTTOM HELPFUL BANNER WITH SCROLL REVEAL */}
        <ScrollReveal variant="scale-up" delay={0.2} className="mt-6 sm:mt-8 lg:mt-4 pt-4 lg:pt-3 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 backdrop-blur-md p-4 sm:p-5 lg:p-3.5 rounded-2xl border border-white/10">
          <div className="text-center sm:text-left">
            <h3 className="font-serif font-bold text-sm sm:text-base text-white">Have a specific question about your island stay?</h3>
            <p className="text-xs text-[#E8DCC5] font-light">Our team at Golden Pebble Havelock is available 24/7 to assist you.</p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-center">
            {sideButtonLink.startsWith("http://") || sideButtonLink.startsWith("https://") ? (
              <a
                href={sideButtonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-5 min-h-[44px] py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group flex-1 sm:flex-initial text-center cursor-pointer"
              >
                <span>{sideButtonText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <Link
                href={sideButtonLink}
                className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-5 min-h-[44px] py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group flex-1 sm:flex-initial text-center cursor-pointer"
              >
                <span>{sideButtonText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
