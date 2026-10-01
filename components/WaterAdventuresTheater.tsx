"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, MapPin, Waves, Info, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { WaterAdventure } from "@/lib/data/packages";
import ScrollReveal from "@/components/ScrollReveal";

interface WaterAdventuresTheaterProps {
  adventures: WaterAdventure[];
}

export default function WaterAdventuresTheater({ adventures }: WaterAdventuresTheaterProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const currentAdventure = adventures[selectedIndex] || adventures[0];

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    if (adventures[index]?.video) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % adventures.length;
    setSelectedIndex(nextIdx);
    if (adventures[nextIdx]?.video) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + adventures.length) % adventures.length;
    setSelectedIndex(prevIdx);
    if (adventures[prevIdx]?.video) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <section className="p-2.5 sm:p-3 rounded-[2.5rem] bg-white border border-[#E8DCC5] shadow-xl">
      <div className="bg-[#FAF8F5] rounded-[calc(2.5rem-0.625rem)] p-4 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-6">
        
        {/* SECTION HEADER */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#E8DCC5]/60 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] mb-1">
                <Waves className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>INTERACTIVE WATER SPORTS THEATER</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073F3B]">
                Optional Water Adventures
              </h2>
            </div>

            <Link
              href="/activities"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-5 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md shrink-0 self-start md:self-auto group"
            >
              <span>Explore All Activities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 1. TOP FEATURED DISPLAY: 1 Activity at a Time */}
        <ScrollReveal variant="fade-up">
          <div className="space-y-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-[#C5A46D]/40 shadow-2xl">
            {/* Featured Video / Image Media Frame */}
            <div className="group relative w-full h-[220px] xs:h-[260px] sm:h-[380px] lg:h-[440px] bg-black flex items-center justify-center overflow-hidden mx-auto">
              {isPlaying && currentAdventure.video ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden mx-auto my-auto">
                  {/* Ambient Blurred Video Backdrop */}
                  <video
                    key={`bg-${selectedIndex}`}
                    src={currentAdventure.fullVideo || currentAdventure.video}
                    poster={currentAdventure.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-50 scale-110 pointer-events-none"
                  />
                  {/* Crisp Native Video Player with Instant Image Poster Fallback */}
                  <video
                    key={`fg-${selectedIndex}`}
                    src={currentAdventure.fullVideo || currentAdventure.video}
                    poster={currentAdventure.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="relative z-10 max-h-full max-w-full object-contain shadow-2xl mx-auto my-auto self-center"
                  />
                </div>
              ) : (
                <>
                  <Image
                    src={currentAdventure.image}
                    alt={currentAdventure.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    {currentAdventure.video ? (
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#C5A46D] hover:bg-white text-[#073F3B] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/play border-2 border-white/40 cursor-pointer"
                        aria-label={`Play ${currentAdventure.name} Video`}
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5 sm:ml-1 group-hover/play:scale-110 transition-transform" />
                      </button>
                    ) : (
                      <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#E8DCC5] text-xs font-sans font-medium">
                        Photo Preview
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Featured Activity Details & Navigation Bar */}
            <div className="p-4 sm:p-5 bg-[#073F3B] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#C5A46D]/30">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A46D]">
                    Activity {selectedIndex + 1} of {adventures.length}
                  </span>
                  {currentAdventure.video && (
                    <span className="bg-[#C5A46D] text-[#073F3B] text-[9.5px] font-bold uppercase px-2 py-0.5 rounded-full font-sans">
                      HD Video
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-0.5">
                  {currentAdventure.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8DCC5] font-sans flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>{currentAdventure.locations}</span>
                </p>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/20 transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous Activity"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/20 transition-all active:scale-95 cursor-pointer"
                  aria-label="Next Activity"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* MOBILE ONLY: Explore All Activities Full-width Button directly below featured player */}
        <div className="sm:hidden pt-2">
          <Link
            href="/activities"
            className="w-full py-3 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Explore All Water Activities</span>
            <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 2. DESKTOP ONLY CAROUSEL STRIP: Click to Change Respective Activity (hidden on mobile view) */}
        <ScrollReveal variant="fade-up" className="hidden sm:block">
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-sans uppercase font-bold tracking-[0.2em] text-[#073F3B]">
                Water Adventure Carousel ({adventures.length})
              </span>
              <span className="text-[11px] font-sans text-[#4E5C58]">
                Click thumbnail to switch activity
              </span>
            </div>

            {/* Full-width Horizontal Scrollable Carousel */}
            <div
              className="flex overflow-x-auto gap-3 pb-3 pt-1 scrollbar-thin scrollbar-thumb-[#C5A46D] scrollbar-track-[#FAF8F5] snap-x snap-mandatory -mx-1 px-1"
              style={{ scrollbarWidth: "thin" }}
            >
              {adventures.map((item, idx) => {
                const isSelected = selectedIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`w-[145px] sm:w-[170px] shrink-0 snap-start p-2 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#FAF8F5] border-[#C5A46D] ring-2 ring-[#C5A46D]/50 shadow-md -translate-y-1"
                        : "bg-white/80 border-[#E8DCC5] hover:border-[#C5A46D]/60 hover:bg-white shadow-2xs"
                    }`}
                  >
                    <div className="relative w-full h-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#E8DCC5]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="170px"
                        className="object-cover"
                      />
                      {item.video && (
                        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-[#C5A46D] text-[#073F3B] flex items-center justify-center shadow-md">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h4 className={`font-serif font-bold text-xs sm:text-sm truncate transition-colors ${
                        isSelected ? "text-[#C5A46D]" : "text-[#073F3B]"
                      }`}>
                        {item.name}
                      </h4>
                      <span className="text-[10px] sm:text-[11px] font-sans text-[#4E5C58] truncate block">
                        {item.locations}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* DESKTOP ONLY DISCLAIMER & ALL ACTIVITIES LINK */}
        <ScrollReveal variant="fade-up" className="hidden sm:block">
          <div className="bg-[#073F3B]/5 p-4 rounded-2xl border border-[#073F3B]/15 text-xs text-[#073F3B] leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
              <span>
                <strong>Optional Activity Disclaimer:</strong> Water activities are optional and available on direct payment basis depending on weather conditions.
              </span>
            </div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#073F3B] hover:text-[#C5A46D] underline shrink-0 transition-colors"
            >
              <span>View All Activities Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
