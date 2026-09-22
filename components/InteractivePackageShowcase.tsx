"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { Package, PACKAGES } from "@/lib/data/packages";

export default function InteractivePackageShowcase() {
  const [selectedPackage, setSelectedPackage] = useState<Package>(PACKAGES[0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    /* EQUAL 50/50 SPLIT COLUMNS ON LG SCREENS */
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      
      {/* LEFT COLUMN: SHOWCASE PREVIEW */}
      <div className="relative flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPackage.id}
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 10
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : -10
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-white rounded-2xl overflow-hidden border border-[#C5A46D]/40 shadow-xl flex-1 flex flex-col justify-between relative"
          >
            {/* Top Showcase Image - Height reduced to h-[220px] sm:h-[260px] */}
            <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden rounded-t-2xl">
              
              {/* Top-to-Bottom Curtain Reveal Animation */}
              <motion.div
                initial={{ y: shouldReduceMotion ? "100%" : "0%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#073D37] z-30 pointer-events-none"
              />

              {/* Continuous Ken Burns Image */}
              <div className="absolute inset-0 animate-kenburns-10s">
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover contrast-[1.05] saturate-[1.05]"
                />
              </div>

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/90 via-black/30 to-black/20 z-10" />

              {/* Top Left Floating Duration Badge */}
              <div className="absolute top-3 left-3 bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] text-[9px] font-sans font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-[#C5A46D]/60 shadow-md flex items-center gap-1.5 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-pulse" />
                <span>{selectedPackage.duration}</span>
              </div>

              {/* Top Right Rating Badge */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[9px] font-sans font-semibold tracking-wider px-2.5 py-0.5 rounded-full border border-white/20 shadow-sm hidden sm:flex items-center gap-1 z-20">
                <Star className="w-3 h-3 text-[#C5A46D] fill-[#C5A46D]" />
                <span>4.9 Haven</span>
              </div>

              {/* Bottom Image Caption */}
              <div className="absolute bottom-6 left-4 right-4 text-white z-20">
                <div className="inline-block bg-black/40 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/25 mb-1">
                  <span className="font-script text-lg text-[#E8DCC5] tracking-wide">
                    Curated Escape ✨
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium leading-snug drop-shadow-md">
                  {selectedPackage.name}
                </h3>
              </div>

              {/* ORGANIC WAVE SVG DIVIDER */}
              <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
                <svg
                  className="relative block w-full h-6 sm:h-8 text-white"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,0 C180,90 350,-30 550,55 C750,135 950,15 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
              </div>
            </div>

            {/* Bottom Details Content Box */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white pt-1">
              <div>
                {/* Category Label */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#C5A46D]" />
                  <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#C5A46D] font-bold">
                    SELECTED EXPERIENCE
                  </span>
                </div>

                {/* Package Narrative Description */}
                <p className="font-sans text-xs text-[#4E5C58] font-normal leading-relaxed mb-3 line-clamp-2">
                  {selectedPackage.description}
                </p>

                {/* Key Inclusions Highlights */}
                <div className="bg-[#073F3B]/5 p-3 rounded-xl border border-[#C5A46D]/30 mb-3">
                  <span className="text-[8.5px] font-sans tracking-[0.18em] uppercase text-[#073F3B] font-bold block mb-1.5">
                    KEY INCLUSIONS AT A GLANCE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-sans text-[#073F3B]">
                    {selectedPackage.inclusions.slice(0, 4).map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <Check className="w-3 h-3 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#4E5C58] leading-tight text-[10.5px] sm:text-[11px] truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & CTA Action Bar */}
              <div className="pt-3 border-t border-[#E8E0D2] flex flex-row items-center justify-between gap-2">
                <div>
                  <span className="text-[8.5px] font-sans uppercase tracking-[0.18em] text-[#66736F] font-bold block">
                    STARTING TARIFF
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif font-medium text-xl sm:text-2xl text-[#073F3B]">
                      {selectedPackage.startingPrice}
                    </span>
                    <span className="text-[10px] font-sans text-[#66736F] font-normal">/ {selectedPackage.priceBasis}</span>
                  </div>
                </div>

                <Link
                  href={`/packages/${selectedPackage.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-4 py-2 rounded-full text-[10.5px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group"
                >
                  <span>EXPLORE ESCAPE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#073F3B] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT COLUMN: PACKAGE SELECTOR CARDS LIST */}
      <div className="relative flex flex-col justify-between gap-2.5">
        <div className="mb-0.5">
          <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block">
            SELECT AN ISLAND EXPERIENCE
          </span>
          <p className="text-[11px] text-[#66736F] font-light mt-0.5">
            Click any package below to preview details on the left.
          </p>
        </div>

        {PACKAGES.map((pkg) => {
          const isSelected = selectedPackage.id === pkg.id;

          return (
            <motion.div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`cursor-pointer rounded-xl p-3 transition-all duration-300 border relative overflow-hidden flex items-center gap-3 ${
                isSelected
                  ? "bg-white border-[#C5A46D] shadow-md ring-1 ring-[#C5A46D]/30"
                  : "bg-white/80 border-[#E8E0D2] hover:border-[#C5A46D]/50 hover:bg-white shadow-sm"
              }`}
            >
              {/* Active Gold Indicator Bar */}
              {isSelected && (
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#C5A46D]" />
              )}

              {/* Thumbnail Image */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden shrink-0 border border-black/10">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Package Details Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-[9px] font-sans tracking-[0.18em] uppercase font-bold text-[#C5A46D]">
                    {pkg.duration}
                  </span>
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 bg-[#073F3B] text-white text-[8.5px] font-sans uppercase font-bold px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5 text-[#C5A46D]" />
                      <span>Viewing</span>
                    </span>
                  )}
                </div>

                <h4 className={`font-serif text-sm sm:text-base font-medium leading-tight truncate ${
                  isSelected ? "text-[#073F3B]" : "text-[#073F3B]/90"
                }`}>
                  {pkg.name}
                </h4>

                <p className="text-[10.5px] text-[#66736F] font-normal truncate mt-0.5">
                  {pkg.shortDescription}
                </p>

                <div className="mt-1.5 flex items-center justify-between">
                  <span className="font-serif font-semibold text-xs text-[#073F3B]">
                    {pkg.startingPrice} <span className="text-[9px] font-sans text-[#66736F] font-normal">/ {pkg.priceBasis}</span>
                  </span>

                  <span className={`text-[9px] font-sans uppercase font-bold tracking-wider flex items-center gap-1 ${
                    isSelected ? "text-[#C5A46D]" : "text-[#073F3B]"
                  }`}>
                    <span>{isSelected ? "ACTIVE" : "VIEW"}</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
