"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, X, ChevronLeft, ChevronRight, Maximize2, Hotel, ArrowLeft } from "lucide-react";
import { HOTEL_GALLERY_ITEMS } from "@/components/GalleryMomentsSection";
import OrganicDivider from "@/components/OrganicDivider";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? HOTEL_GALLERY_ITEMS 
    : HOTEL_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#073F3B] pb-16">
      
      {/* HEADER HERO BANNER */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 text-white overflow-hidden mb-10">
        <Image
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838842/golden-pebble/images/hotel-gallery/corridor-1.png"
          alt="Golden Pebble Hotel Gallery"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#C5A46D] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#E8DCC5] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-3 shadow-md backdrop-blur-md">
            <Hotel className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>OFFICIAL PHOTO GALLERY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Hotel Golden Pebble{" "}
            <span className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#C5A46D] font-normal italic inline tracking-wide">
              Photo Showcase.
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed mt-3 max-w-2xl">
            Explore all 26 official photographs of Hotel Golden Pebble, Havelock Island — including Deluxe Suites, private balconies, timber walkways, reception lobby, and air-conditioned restaurant.
          </p>
        </div>

        <OrganicDivider position="bottom" fillColor="#F8F6EF" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CATEGORY FILTER TABS STRIP */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: "all", label: `ALL PHOTOS (${HOTEL_GALLERY_ITEMS.length})` },
            { id: "rooms", label: "DELUXE ROOMS" },
            { id: "balcony", label: "PRIVATE BALCONIES" },
            { id: "property", label: "TIMBER CORRIDORS & GARDENS" },
            { id: "reception", label: "RECEPTION & LOBBY" },
            { id: "dining", label: "RESTAURANT & DINING" }
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                  isSelected
                    ? "bg-[#073F3B] text-[#F8F6EF] border-[#073F3B] shadow-lg scale-105"
                    : "bg-white text-[#4E5C58] border-[#E8E0D2] hover:border-[#C5A46D] hover:bg-[#F8F6EF]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* FULL GRID SHOWCASE (3 COLUMNS ON MD / LG) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 3) * 0.08,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25, ease: "easeOut" } }}
                onClick={() => handleOpenLightbox(idx)}
                className="relative rounded-2xl overflow-hidden border-2 border-[#C5A46D]/40 shadow-xl group cursor-pointer h-[260px] sm:h-[290px]"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.05] saturate-[1.05]"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Floating Location Tag */}
                {item.locationTag && (
                  <div className="absolute top-3 left-3 bg-[#073F3B]/90 text-white text-[9.5px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C5A46D]/50 backdrop-blur-md shadow-md flex items-center gap-1.5 z-10">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>{item.locationTag}</span>
                  </div>
                )}

                {/* Top Right Zoom Icon */}
                <div className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full border border-white/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Maximize2 className="w-4 h-4 text-[#C5A46D]" />
                </div>

                {/* Bottom Title & Category Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-[#C5A46D] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-white leading-snug truncate drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL PREVIEW */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={handleCloseLightbox}
          >
            <div
              className="relative max-w-5xl w-full h-[75vh] sm:h-[85vh] rounded-2xl overflow-hidden border border-[#C5A46D]/60 bg-[#073F3B]/50 shadow-2xl flex flex-col justify-between p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar with Title & Close Button */}
              <div className="flex items-center justify-between pb-2 border-b border-white/20 z-20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  <span className="text-xs font-sans font-bold text-white uppercase tracking-wider">
                    {filteredItems[selectedImageIndex].categoryLabel}
                  </span>
                </div>
                <button
                  onClick={handleCloseLightbox}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative flex-1 w-full my-2 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] transition-all border border-white/30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] transition-all border border-white/30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption Bar */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white z-20">
                <div>
                  <h4 className="font-serif text-lg font-medium text-white">
                    {filteredItems[selectedImageIndex].title}
                  </h4>
                  {filteredItems[selectedImageIndex].locationTag && (
                    <p className="text-xs text-[#C5A46D] font-sans flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{filteredItems[selectedImageIndex].locationTag}</span>
                    </p>
                  )}
                </div>

                <div className="text-xs text-white/70 font-sans">
                  Photo {selectedImageIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
