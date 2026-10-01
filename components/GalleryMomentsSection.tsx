"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, X, ChevronLeft, ChevronRight, Maximize2, Hotel } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "rooms" | "balcony" | "property" | "reception" | "dining";
  categoryLabel: string;
  image: string;
  locationTag?: string;
}

export const HOTEL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "hotel-1",
    title: "Hotel Golden Pebble Main Walkway & Timber Architecture",
    category: "property",
    categoryLabel: "TIMBER CORRIDOR",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838842/golden-pebble/images/hotel-gallery/corridor-1.png",
    locationTag: "Golden Pebble Property"
  },
  {
    id: "hotel-2",
    title: "Deluxe Suite Interior & Premium King Bed",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838853/golden-pebble/images/hotel-gallery/deluxe-room-1.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-3",
    title: "Air-Conditioned 30-Guest Dining Room & Restaurant",
    category: "dining",
    categoryLabel: "RESTAURANT & DINING",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838887/golden-pebble/images/hotel-gallery/restaurant-1.png",
    locationTag: "Golden Pebble Restaurant"
  },
  {
    id: "hotel-4",
    title: "Private Room Balcony Lounge & Tropical Garden Breeze",
    category: "balcony",
    categoryLabel: "PRIVATE BALCONY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838833/golden-pebble/images/hotel-gallery/balcony-1.png",
    locationTag: "Balcony Room"
  },
  {
    id: "hotel-5",
    title: "Hotel Reception Desk & Guest Welcome Area",
    category: "reception",
    categoryLabel: "RECEPTION & LOBBY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838880/golden-pebble/images/hotel-gallery/reception-1.png",
    locationTag: "Front Desk Lobby"
  },
  {
    id: "hotel-6",
    title: "Deluxe Suite Angle View & Warm Wood Finish",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838858/golden-pebble/images/hotel-gallery/deluxe-room-2.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-7",
    title: "Second Balcony Seating & Outdoor Relaxation Area",
    category: "balcony",
    categoryLabel: "PRIVATE BALCONY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838835/golden-pebble/images/hotel-gallery/balcony-2.png",
    locationTag: "Balcony Suite"
  },
  {
    id: "hotel-8",
    title: "Lush Tropical Walkway & Garden Corridor",
    category: "property",
    categoryLabel: "TIMBER CORRIDOR",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838844/golden-pebble/images/hotel-gallery/corridor-2.png",
    locationTag: "Garden Walkway"
  },
  {
    id: "hotel-9",
    title: "Deluxe Suite Work Desk & Wardrobe Amenities",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838860/golden-pebble/images/hotel-gallery/deluxe-room-3.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-10",
    title: "Air-Conditioned Restaurant Seating & Dining Vibe",
    category: "dining",
    categoryLabel: "RESTAURANT & DINING",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838889/golden-pebble/images/hotel-gallery/restaurant-2.png",
    locationTag: "Golden Pebble Dining"
  },
  {
    id: "hotel-11",
    title: "Deluxe Suite Spacious Bedroom & Split AC",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838862/golden-pebble/images/hotel-gallery/deluxe-room-4.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-12",
    title: "Deluxe Suite Natural Lighting & Soft Linen Bed",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838864/golden-pebble/images/hotel-gallery/deluxe-room-5.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-13",
    title: "Reception Welcome Lounge & Seating Area",
    category: "reception",
    categoryLabel: "RECEPTION & LOBBY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838882/golden-pebble/images/hotel-gallery/reception-4.png",
    locationTag: "Welcome Lounge"
  },
  {
    id: "hotel-14",
    title: "Private Room Balcony View 3",
    category: "balcony",
    categoryLabel: "PRIVATE BALCONY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838838/golden-pebble/images/hotel-gallery/balcony-3.png",
    locationTag: "Balcony Room"
  },
  {
    id: "hotel-15",
    title: "Private Room Balcony View 4",
    category: "balcony",
    categoryLabel: "PRIVATE BALCONY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838840/golden-pebble/images/hotel-gallery/balcony-4.png",
    locationTag: "Balcony Room"
  },
  {
    id: "hotel-16",
    title: "Covered Timber Walkway & Room Entrances",
    category: "property",
    categoryLabel: "TIMBER CORRIDOR",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838847/golden-pebble/images/hotel-gallery/corridor-3.png",
    locationTag: "Hotel Corridor"
  },
  {
    id: "hotel-17",
    title: "Property Entrance Path & Green Foliage",
    category: "property",
    categoryLabel: "TIMBER CORRIDOR",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838849/golden-pebble/images/hotel-gallery/corridor-4.png",
    locationTag: "Hotel Property"
  },
  {
    id: "hotel-18",
    title: "Deluxe Suite Modern Bedroom Angle 6",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838866/golden-pebble/images/hotel-gallery/deluxe-room-6.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-19",
    title: "Deluxe Suite Modern Bedroom Angle 7",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838868/golden-pebble/images/hotel-gallery/deluxe-room-7.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-20",
    title: "Deluxe Suite Modern Bedroom Angle 8",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838870/golden-pebble/images/hotel-gallery/deluxe-room-8.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-21",
    title: "Deluxe Suite Modern Bedroom Angle 9",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838872/golden-pebble/images/hotel-gallery/deluxe-room-9.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-22",
    title: "Deluxe Suite Modern Bedroom Angle 10",
    category: "rooms",
    categoryLabel: "DELUXE ROOM",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838856/golden-pebble/images/hotel-gallery/deluxe-room-10.png",
    locationTag: "Deluxe Suite"
  },
  {
    id: "hotel-23",
    title: "Reception Area & Hospitality Desk View 5",
    category: "reception",
    categoryLabel: "RECEPTION & LOBBY",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838884/golden-pebble/images/hotel-gallery/reception-5.png",
    locationTag: "Reception Desk"
  },
  {
    id: "hotel-24",
    title: "Restaurant Breakfast & Seafood Buffet Area",
    category: "dining",
    categoryLabel: "RESTAURANT & DINING",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838891/golden-pebble/images/hotel-gallery/restaurant-3.png",
    locationTag: "Golden Pebble Restaurant"
  },
  {
    id: "hotel-25",
    title: "Hotel Front Exterior & Guest Parking Area 1",
    category: "property",
    categoryLabel: "PROPERTY & PARKING",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838875/golden-pebble/images/hotel-gallery/parking-1.png",
    locationTag: "Hotel Exterior"
  },
  {
    id: "hotel-26",
    title: "Hotel Front Exterior & Guest Parking Area 2",
    category: "property",
    categoryLabel: "PROPERTY & PARKING",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838878/golden-pebble/images/hotel-gallery/parking-2.png",
    locationTag: "Hotel Exterior"
  }
];

export default function GalleryMomentsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryScrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      galleryScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredItems = activeCategory === "all" 
    ? HOTEL_GALLERY_ITEMS 
    : HOTEL_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Show top 5 items for home page 3-column x 2-row preview
  const previewItems = filteredItems.slice(0, 5);

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
    <section className="relative py-10 sm:py-14 lg:py-8 bg-[#F8F6EF] overflow-hidden text-[#073F3B]">
      
      {/* Ambient Radial Luxury Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 15% 20%, rgba(197, 164, 109, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 80%, rgba(7, 61, 55, 0.08) 0%, transparent 60%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex items-end justify-between mb-3 sm:mb-4 gap-3"
        >
          <div>
            {/* Eyebrow Gold Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#073F3B]/5 border border-[#C5A46D]/40 text-[#073F3B] text-[11px] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase mb-2 shadow-sm">
              <Hotel className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>HOTEL GALLERY</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#073F3B] leading-tight">
              Moments That Stay{" "}
              <span className="font-script text-2xl sm:text-4xl lg:text-5xl text-[#C5A46D] font-normal italic inline tracking-wide">
                Forever.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Scroll Left / Right Buttons (Mobile & Tablet) */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => scrollGallery("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] hover:border-[#073F3B] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollGallery("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] hover:border-[#073F3B] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* View All Photos Button (Desktop Header Only) */}
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center gap-2 bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-[#F8F6EF] border border-[#C5A46D]/60 hover:border-[#073F3B] px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0"
            >
              <span>VIEW FULL GALLERY →</span>
            </Link>
          </div>
        </motion.div>

        {/* CATEGORY FILTER TABS STRIP (Desktop Only) */}
        <div className="hidden sm:flex items-center justify-start lg:justify-center lg:flex-wrap gap-2 overflow-x-auto lg:overflow-visible pb-2 mb-4 no-scrollbar">
          {[
            { id: "all", label: "ALL HOTEL PHOTOS" },
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
                onClick={() => {
                  setActiveCategory(tab.id);
                  if (galleryScrollRef.current) {
                    galleryScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                  isSelected
                    ? "bg-[#073F3B] text-[#F8F6EF] border-[#073F3B] shadow-sm scale-105"
                    : "bg-white/80 text-[#4E5C58] border-[#E8E0D2] hover:border-[#C5A46D]/60 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MOBILE & TABLET HORIZONTAL HAND-SWIPE CAROUSEL (PACKAGE SHOWCASE STYLE) */}
        <div className="block md:hidden mb-4">
          <div
            ref={galleryScrollRef}
            className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3.5 pb-4 pt-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {previewItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="w-full sm:w-[280px] shrink-0 snap-center flex flex-col cursor-pointer group"
              >
                <div className="bg-white rounded-2xl border border-[#C5A46D]/60 p-3 shadow-md group-hover:border-[#C5A46D] transition-all flex flex-col justify-between h-full">
                  <div className="relative h-56 w-full rounded-xl overflow-hidden border border-[#E8E0D2] shadow-sm mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 contrast-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none z-10" />

                    <div className="absolute top-2.5 left-2.5 bg-[#073F3B]/90 text-[#E8DCC5] text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C5A46D]/50 z-10 backdrop-blur-md">
                      {item.categoryLabel}
                    </div>

                    <div className="absolute top-2.5 right-2.5 bg-black/50 text-white p-1.5 rounded-full border border-white/30 backdrop-blur-md z-10">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#073F3B] leading-snug line-clamp-2 group-hover:text-[#C5A46D] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP SHOWCASE (3-COLUMN 2-ROW GRID) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          <AnimatePresence mode="popLayout">
            {previewItems.map((item, idx) => {
              const isBigFirstColumn = idx === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleOpenLightbox(idx)}
                  className={`relative rounded-2xl overflow-hidden border border-[#C5A46D]/50 shadow-md group cursor-pointer ${
                    isBigFirstColumn
                      ? "md:col-span-1 md:row-span-2 h-[260px] sm:h-[340px] md:h-full min-h-[260px] md:min-h-[400px] lg:min-h-[400px]"
                      : "h-[190px] sm:h-[210px] md:h-[210px] lg:h-[195px]"
                  }`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Floating Location Tag */}
                  {item.locationTag && (
                    <div className="absolute top-3 left-3 bg-[#073F3B]/90 text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C5A46D]/50 backdrop-blur-md shadow-sm flex items-center gap-1.5 z-10">
                      <MapPin className="w-3 h-3 text-[#C5A46D]" />
                      <span>{item.locationTag}</span>
                    </div>
                  )}

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-3 right-3 bg-black/40 text-white p-1.5 rounded-full border border-white/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Maximize2 className="w-3 h-3 text-[#C5A46D]" />
                  </div>

                  {/* Bottom Title & Category Overlay */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white z-10">
                    <span className="text-[8.5px] sm:text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#C5A46D] block mb-0.5">
                      {item.categoryLabel}
                    </span>
                    <h3 className={`font-serif font-medium text-white leading-snug drop-shadow-md ${
                      isBigFirstColumn ? "text-sm sm:text-lg lg:text-xl line-clamp-2 sm:line-clamp-3" : "text-xs sm:text-base line-clamp-1"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* BOTTOM REDIRECT CTA TO FULL GALLERY PAGE */}
        <div className="mt-6 flex justify-center w-full">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-6 min-h-[48px] py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group w-full sm:w-auto max-w-md text-center"
          >
            <span>VIEW FULL GALLERY →</span>
          </Link>
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
              className="relative max-w-4xl w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden border border-[#C5A46D]/60 bg-[#073F3B]/50 shadow-2xl flex flex-col justify-between p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar with Title & Close Button */}
              <div className="flex items-center justify-between pb-2 border-b border-white/20 z-20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  <span className="text-xs font-sans font-bold text-white uppercase tracking-wider">
                    {previewItems[selectedImageIndex].categoryLabel}
                  </span>
                </div>
                <button
                  onClick={handleCloseLightbox}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative flex-1 w-full my-2 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={previewItems[selectedImageIndex].image}
                  alt={previewItems[selectedImageIndex].title}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] transition-all border border-white/30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] transition-all border border-white/30"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Caption Bar */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white z-20">
                <div>
                  <h4 className="font-serif text-base font-medium text-white">
                    {previewItems[selectedImageIndex].title}
                  </h4>
                  {previewItems[selectedImageIndex].locationTag && (
                    <p className="text-[11px] text-[#C5A46D] font-sans flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{previewItems[selectedImageIndex].locationTag}</span>
                    </p>
                  )}
                </div>

                <div className="text-[11px] text-white/70 font-sans">
                  Photo {selectedImageIndex + 1} of {previewItems.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
