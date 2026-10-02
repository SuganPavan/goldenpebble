"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Users, Maximize, Trees, ChevronLeft, ChevronRight, BedDouble, ZoomIn, X } from "lucide-react";
import { ROOMS } from "@/lib/data/rooms";
import AnimatedWaveDivider from "./AnimatedWaveDivider";

export default function RoomShowcaseSection() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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
    <section className="relative bg-gradient-to-b from-[#EEF6F5] via-[#E4F0EE] to-[#F8F6EF] py-8 sm:py-10 lg:py-12 overflow-hidden border-t-2 border-b-2 border-[#C5A46D]/30">
      
      {/* Organic Wave Divider Transition */}
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
        
        {/* Section Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-5 sm:mb-6 gap-4">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073F3B]/10 border border-[#073F3B]/20 text-[#073F3B] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-2.5 shadow-sm">
              <BedDouble className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>OUR ROOMS &amp; SUITES</span>
            </div>

            {/* Expressive Editorial Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#073F3B] leading-[1.15]">
              Rooms &amp; Accommodation at{" "}
              <span className="font-script text-2xl sm:text-5xl lg:text-6xl text-[#C5A46D] font-normal italic inline-block tracking-wide cursor-pointer select-none">
                Golden Pebble Havelock
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="font-sans text-xs sm:text-base text-[#4E5C58] font-light leading-relaxed mt-2 max-w-xl">
              Discover comfortable accommodation at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep). Choose from our Deluxe Room and Deluxe Room with Balcony, designed for a comfortable stay while exploring the island.
            </p>
          </div>

          {/* Right Action & Room Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Room Selector Toggle Tabs */}
            <div className="bg-white p-1 sm:p-1.5 rounded-2xl sm:rounded-full border border-[#C5A46D]/50 shadow-md grid grid-cols-2 gap-1.5 w-full sm:w-auto sm:flex sm:items-center sm:justify-center">
              {ROOMS.map((room, idx) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setActiveRoomIndex(idx);
                    setActiveImageIndex(0);
                  }}
                  className={`px-2 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] xs:text-xs sm:text-sm font-sans font-bold uppercase tracking-wide sm:tracking-wider transition-all duration-300 relative text-center flex items-center justify-center leading-tight w-full sm:w-auto shrink-0 ${
                    activeRoomIndex === idx
                      ? "bg-[#073F3B] text-white shadow-md"
                      : "text-[#073F3B] hover:bg-[#073F3B]/10"
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>

            {/* View All Rooms Header Link (Desktop Only) */}
            <Link
              href="/rooms"
              className="hidden xl:inline-flex items-center justify-center gap-2 bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-[#F8F6EF] border-2 border-[#C5A46D]/60 hover:border-[#073F3B] px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0 h-12"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:text-[#F8F6EF] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* MAIN ROOM SHOWCASE CONTAINER */}
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C5A46D]/40 shadow-2xl p-3 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            
            {/* LEFT MAIN ROOM IMAGE SHOWCASE */}
            <div className="xl:col-span-9 flex flex-col justify-between rounded-2xl overflow-hidden group">
              {/* Room Image Display Container */}
              <div
                className="relative h-[240px] xs:h-[280px] sm:h-[330px] lg:h-[350px] w-full rounded-t-2xl overflow-hidden cursor-pointer bg-[#073F3B]"
                onClick={() => setIsLightboxOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMainImage}
                    initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentMainImage}
                      alt={activeRoom.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 75vw"
                      className="object-cover contrast-[1.05] saturate-[1.05] group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/70 via-black/10 to-transparent z-10 pointer-events-none" />

                {/* Hover Click-to-Zoom Indicator Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#073F3B]/90 text-white px-4 py-2 rounded-full border border-[#C5A46D] text-xs font-sans font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md">
                    <ZoomIn className="w-4 h-4 text-[#C5A46D]" />
                    <span>Click to Expand Full Screen</span>
                  </div>
                </div>

                {/* Navigation Arrows overlay on image */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#073F3B] backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/20 transition-all z-20 shadow-md"
                      aria-label="Previous room image"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#073F3B] backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/20 transition-all z-20 shadow-md"
                      aria-label="Next room image"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </>
                )}

                {/* Top Room Name Tag */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeRoom.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3.5 left-3.5 bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] text-[10.5px] sm:text-xs font-sans font-bold tracking-[0.15em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#C5A46D]/60 shadow-lg z-20 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-pulse" />
                    <span>{activeRoom.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ROOM DETAILS ATTRIBUTE CARD — ATTACHED FLUSH DIRECTLY BENEATH ROOM PHOTO */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeRoom.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bg-[#FAF8F5] lg:bg-white px-3.5 py-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-3.5 rounded-b-2xl rounded-t-none border border-t-0 border-[#C5A46D]/40 shadow-sm z-20 flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-5 -mt-px"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Room Features Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-sans text-[#073F3B] font-semibold">
                    <div className="flex items-center gap-1.5 bg-[#073F3B]/5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm border border-[#073F3B]/10 whitespace-nowrap">
                      <Users className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>3 Guests max</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#073F3B]/5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm border border-[#073F3B]/10 whitespace-nowrap">
                      <Maximize className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>{activeRoom.sizeSqFt} Sq Ft</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#073F3B]/5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm border border-[#073F3B]/10 whitespace-nowrap">
                      <Trees className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>{activeRoom.view}</span>
                    </div>
                  </div>

                  {/* Price & Details CTA Block (Desktop vs Mobile Responsive Layout) */}
                  {/* MOBILE ONLY: HIGHLIGHTED RATE CARD */}
                  <div className="flex lg:hidden flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-3 rounded-xl bg-[#073F3B] border border-[#C5A46D]/50 shadow-sm">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-bold text-xl text-[#F8F6EF]">
                          {activeRoom.seasonRate.rackRate}
                        </span>
                        <span className="text-xs text-[#F8F6EF]/80">/ Night</span>
                      </div>
                      <span className="inline-block text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#C5A46D]">
                        Rack Rate • 5% GST included
                      </span>
                    </div>

                    <Link
                      href="/rooms"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-4 py-2 min-h-[40px] rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group/btn shrink-0 whitespace-nowrap w-full sm:w-auto"
                    >
                      <span>VIEW ROOM DETAILS →</span>
                    </Link>
                  </div>

                  {/* DESKTOP ONLY: RATE & DETAILS BLOCK */}
                  <div className="hidden lg:flex items-center justify-end gap-5 shrink-0 ml-auto">
                    {/* Rate Container */}
                    <div className="text-right shrink-0">
                      <div className="flex items-baseline justify-end gap-1">
                        <span className="font-serif font-bold text-2xl text-[#073F3B]">
                          {activeRoom.seasonRate.rackRate}
                        </span>
                        <span className="text-xs text-[#66736F]">/ Night</span>
                      </div>
                      <span className="text-[11px] font-sans uppercase tracking-wider text-[#66736F] font-semibold block mt-0.5 whitespace-nowrap">
                        Rack Rate • 5% GST included
                      </span>
                    </div>

                    {/* Button */}
                    <Link
                      href="/rooms"
                      className="inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-5 py-2.5 min-h-[42px] rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group/btn shrink-0 whitespace-nowrap"
                    >
                      <span>VIEW ROOM DETAILS →</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE: THUMBNAIL GALLERY STACK — PERFECTLY HEIGHT-ALIGNED WITH LEFT COLUMN */}
            <div className="xl:col-span-3 flex flex-row xl:flex-col justify-between gap-2 overflow-x-auto xl:overflow-visible pb-1 xl:pb-0 no-scrollbar mt-1 xl:mt-0 h-full">
              <div className="hidden xl:block shrink-0">
                <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block mb-1">
                  GALLERY PREVIEWS ({galleryImages.length})
                </span>
              </div>

              {galleryImages.map((imgUrl, imgIdx) => {
                const isSelectedImage = activeImageIndex === imgIdx;

                return (
                  <motion.div
                    key={imgIdx}
                    onClick={() => setActiveImageIndex(imgIdx)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`cursor-pointer relative h-16 xs:h-20 sm:h-24 lg:h-[72px] w-24 xs:w-28 sm:w-32 lg:w-full rounded-xl overflow-hidden transition-all duration-300 border-2 shrink-0 ${
                      isSelectedImage
                        ? "border-[#C5A46D] shadow-md ring-2 ring-[#C5A46D]/40 scale-[1.01]"
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
                        <span className="bg-[#073F3B] text-white text-[10px] sm:text-[11px] font-sans font-bold uppercase px-2 py-0.5 rounded-full shadow-md border border-[#C5A46D]/60">
                          ACTIVE
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative max-w-5xl w-full h-[75vh] sm:h-[80vh] rounded-3xl overflow-hidden border-2 border-[#C5A46D] shadow-2xl bg-[#073F3B]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentMainImage}
                  alt={activeRoom.name}
                  fill
                  priority
                  className="object-cover"
                />
                
                {/* Lightbox Header Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] px-4 py-2 rounded-full border border-[#C5A46D]/60 text-xs font-serif font-bold flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
                    <span>{activeRoom.name} — Full View ({activeImageIndex + 1} / {galleryImages.length})</span>
                  </div>

                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="bg-black/60 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] p-2.5 rounded-full border border-white/30 transition-all shadow-lg flex items-center gap-1.5 text-xs font-bold"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Close</span>
                  </button>
                </div>

                {/* Lightbox Navigation Controls */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] p-3 rounded-full border border-white/30 transition-all z-20 shadow-xl"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] p-3 rounded-full border border-white/30 transition-all z-20 shadow-xl"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
