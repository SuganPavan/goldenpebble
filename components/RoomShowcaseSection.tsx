"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Users, Maximize, Trees, ChevronLeft, ChevronRight, BedDouble } from "lucide-react";
import { ROOMS } from "@/lib/data/rooms";
import AnimatedWaveDivider from "./AnimatedWaveDivider";

export default function RoomShowcaseSection() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeRoom = ROOMS[activeRoomIndex];
  const galleryImages = activeRoom.gallery && activeRoom.gallery.length > 0 ? activeRoom.gallery : [activeRoom.image];
  const currentMainImage = galleryImages[activeImageIndex] || activeRoom.image;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#EEF6F5] via-[#E4F0EE] to-[#F8F6EF] py-16 sm:py-24 overflow-hidden border-t-2 border-b-2 border-[#C5A46D]/30">
      
      {/* Organic Wave Divider Transition for Distinct Section Differentiation */}
      <div className="absolute top-0 left-0 right-0 z-0 opacity-40 pointer-events-none">
        <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#EEF6F5" />
      </div>

      {/* Ambient Lighting Accents */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(7, 61, 55, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(197, 164, 109, 0.12) 0%, transparent 60%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Matching "Designed for Your Comfort" attached design layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073F3B]/10 border border-[#073F3B]/20 text-[#073F3B] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-3 shadow-sm">
              <BedDouble className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>OUR ROOMS & SUITES</span>
            </div>

            {/* Expressive Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#073F3B] leading-[1.12]">
              Designed for Your{" "}
              <span className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#C5A46D] font-normal italic inline tracking-wide">
                Comfort.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed mt-2.5 max-w-xl">
              Spacious, elegant and thoughtfully designed — our rooms offer the perfect island sanctuary of luxury and natural tropical greenery.
            </p>
          </div>

          {/* Right Action & Room Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Room Selector Toggle Tabs */}
            <div className="bg-white/80 p-1.5 rounded-full border border-[#C5A46D]/40 shadow-sm flex items-center gap-1">
              {ROOMS.map((room, idx) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setActiveRoomIndex(idx);
                    setActiveImageIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeRoomIndex === idx
                      ? "bg-[#073F3B] text-white shadow-md"
                      : "text-[#073F3B] hover:bg-[#073F3B]/10"
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>

            {/* View All Rooms Button */}
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:text-[#073F3B] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* MAIN ROOM SHOWCASE: MATCHING THE ATTACHED DESIGN LAYOUT */}
        <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#C5A46D]/40 shadow-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT MAIN BIG ROOM IMAGE SHOWCASE WITH ATTRIBUTE OVERLAY (lg:col-span-9) */}
            <div className="lg:col-span-9 relative flex flex-col min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] rounded-2xl overflow-hidden group">
              
              {/* Animated Main Room Photo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMainImage}
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={currentMainImage}
                    alt={activeRoom.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover contrast-[1.05] saturate-[1.05]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/90 via-black/20 to-transparent z-10 pointer-events-none" />

              {/* Navigation Arrows overlay on image */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#073F3B] backdrop-blur-md text-white p-2.5 rounded-full border border-white/20 transition-all z-20 shadow-md"
                    aria-label="Previous room image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#073F3B] backdrop-blur-md text-white p-2.5 rounded-full border border-white/20 transition-all z-20 shadow-md"
                    aria-label="Next room image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Top Room Name Tag */}
              <div className="absolute top-4 left-4 bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] text-[11px] font-sans font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-[#C5A46D]/60 shadow-lg z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
                <span>{activeRoom.name}</span>
              </div>

              {/* BOTTOM FLOATING ATTRIBUTE CARD (Matching attached design overlay: Guests, Size, View, Price, View Details) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white shadow-xl z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Room Features Badges */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#073F3B] font-semibold">
                  <div className="flex items-center gap-1.5 bg-[#073F3B]/5 px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4 text-[#C5A46D]" />
                    <span>3 Guests max</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#073F3B]/5 px-3 py-1.5 rounded-full">
                    <Maximize className="w-4 h-4 text-[#C5A46D]" />
                    <span>{activeRoom.sizeSqFt} Sq Ft</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#073F3B]/5 px-3 py-1.5 rounded-full">
                    <Trees className="w-4 h-4 text-[#C5A46D]" />
                    <span>{activeRoom.view}</span>
                  </div>
                </div>

                {/* Price & Details CTA */}
                <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E8E0D2]">
                  <div>
                    <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-[#66736F] font-bold block">
                      STARTING FROM
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif font-bold text-xl sm:text-2xl text-[#073F3B]">
                        {activeRoom.seasonRate.netPayable}
                      </span>
                      <span className="text-[11px] font-sans text-[#66736F] font-normal">/ night</span>
                    </div>
                  </div>

                  <Link
                    href={`/rooms/${activeRoom.slug}`}
                    className="inline-flex items-center gap-1.5 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group/btn shrink-0"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover/btn:text-[#073F3B] transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: VERTICAL THUMBNAIL GALLERY STACK (lg:col-span-3) - Matching attached design */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold hidden lg:block mb-1">
                GALLERY PREVIEWS ({galleryImages.length})
              </span>

              {galleryImages.map((imgUrl, imgIdx) => {
                const isSelectedImage = activeImageIndex === imgIdx;

                return (
                  <div
                    key={imgIdx}
                    onClick={() => setActiveImageIndex(imgIdx)}
                    className={`cursor-pointer relative h-20 sm:h-24 lg:h-28 w-28 sm:w-32 lg:w-full rounded-xl overflow-hidden transition-all duration-300 border-2 shrink-0 ${
                      isSelectedImage
                        ? "border-[#C5A46D] shadow-lg ring-2 ring-[#C5A46D]/30 scale-[1.02]"
                        : "border-[#E8E0D2] opacity-75 hover:opacity-100 hover:border-[#C5A46D]/60"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${activeRoom.name} angle ${imgIdx + 1}`}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                    {isSelectedImage && (
                      <div className="absolute inset-0 bg-[#073F3B]/20 flex items-center justify-center">
                        <span className="bg-[#073F3B] text-white text-[9px] font-sans font-bold uppercase px-2 py-0.5 rounded-full">
                          ACTIVE
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
