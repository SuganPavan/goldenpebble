"use client";

import { useRef } from "react";
import Link from "next/link";
import { PACKAGES } from "@/lib/data/packages";
import PackageCard from "./PackageCard";
import { ArrowRight, Compass, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function HomePagePackageShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const durationQuickLinks = [
    { label: "4 Nights / 5 Days", href: "/packages?duration=4" },
    { label: "5 Nights / 6 Days", href: "/packages?duration=5" },
    { label: "6 Nights / 7 Days", href: "/packages?duration=6" },
    { label: "13 Nights / 14 Days", href: "/packages?duration=13" },
  ];

  return (
    <div className="relative space-y-2">
      {/* Scroll Controls Header (Desktop Only) */}
      <div className="hidden sm:flex items-center justify-end gap-2 mb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] hover:border-[#073F3B] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] hover:border-[#073F3B] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Single Horizontal Row of Animated Package Cards (Desktop Only for Cards, Mobile Shows Tile Only) */}
      <div
        ref={scrollContainerRef}
        className="flex flex-nowrap overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory gap-4 sm:gap-5 lg:gap-6 pb-2 sm:pb-6 lg:pb-3 pt-2 sm:pt-4 lg:pt-3 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Render 3 featured packages on Desktop view only */}
        {PACKAGES.slice(0, 3).map((pkg, index) => (
          <div
            key={pkg.id}
            className="hidden sm:flex w-[300px] md:w-[320px] lg:w-[350px] max-w-[360px] shrink-0 snap-start flex-col"
          >
            <PackageCard pkg={pkg} index={index} />
          </div>
        ))}

        {/* View All Packages Card Tile */}
        <div
          key="view-all-tile"
          className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px] max-w-full sm:max-w-[360px] shrink-0 snap-start flex flex-col"
        >
          <div className="group p-2 rounded-[2.25rem] bg-[#073F3B] border-2 border-[#C5A46D]/60 shadow-xl hover:shadow-2xl hover:border-[#C5A46D] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A524D] via-[#073F3B] to-black/80 pointer-events-none" />

            <div className="relative z-10 p-5 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
                  <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>EXPLORE ALL ITINERARIES</span>
                </div>

                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-[#C5A46D] transition-colors">
                  Explore All Andaman Tour Packages
                </h3>

                <p className="font-sans text-xs text-[#F8F6EF]/80 font-light leading-relaxed mb-4">
                  Browse our complete range of island tour packages categorized by night breakdown and destinations.
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/15">
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#C5A46D] block mb-1.5">
                    FILTER BY DURATION:
                  </span>
                  {durationQuickLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-[#C5A46D]/20 border border-[#C5A46D]/30 hover:border-[#C5A46D] transition-all duration-300 group/link"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-[#C5A46D] shrink-0" />
                        <span className="text-[11px] sm:text-xs font-bold text-white group-hover/link:text-[#C5A46D] transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/packages"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] hover:text-[#073F3B] py-3.5 px-6 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group/btn min-h-[44px]"
                >
                  <span>VIEW ALL PACKAGES</span>
                  <ArrowRight className="w-4 h-4 text-[#073F3B] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
