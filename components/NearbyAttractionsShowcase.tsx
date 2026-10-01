"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Navigation, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { LOCATIONS } from "@/lib/data/locations";
import AnimatedWaveDivider from "./AnimatedWaveDivider";
import AutoImageCarousel from "./AutoImageCarousel";

interface MapPinPosition {
  id: string;
  name: string;
  shortTag: string;
  topPercent: number; // Y position on island photo (0-100%)
  leftPercent: number; // X position on island photo (0-100%)
}

// Well-spaced coordinates across the map grid to prevent pin overlaps
const ALL_ISLAND_PINS: MapPinPosition[] = [
  { id: "govind-nagar-beach", name: "Govind Nagar Beach", shortTag: "Govind Nagar", topPercent: 32, leftPercent: 48 },
  { id: "vijaynagar-beach", name: "Vijaynagar Beach", shortTag: "Eastern Coast", topPercent: 44, leftPercent: 70 },
  { id: "radhanagar-beach", name: "Radhanagar Beach", shortTag: "Western Coast", topPercent: 54, leftPercent: 28 },
  { id: "elephant-beach", name: "Elephant Beach", shortTag: "North-West", topPercent: 28, leftPercent: 30 },
  { id: "kalopathar-beach", name: "Kalopathar Beach", shortTag: "South-East", topPercent: 62, leftPercent: 78 },
  { id: "nemo-beach-reef", name: "Nemo Reef", shortTag: "Govind Nagar Coast", topPercent: 22, leftPercent: 62 },
  { id: "neils-cove", name: "Neil's Cove", shortTag: "North Lagoon", topPercent: 42, leftPercent: 24 },
  { id: "lighthouse-point", name: "Lighthouse Point", shortTag: "North Coast", topPercent: 14, leftPercent: 44 },
  { id: "neil-island", name: "Neil Island", shortTag: "Separate Island", topPercent: 84, leftPercent: 58 },
];

export default function NearbyAttractionsShowcase() {
  const [selectedLocationId, setSelectedLocationId] = useState<string>("govind-nagar-beach");
  const activeLocation = LOCATIONS.find((loc) => loc.id === selectedLocationId) || LOCATIONS[0];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const scrollLocations = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const activeTabEl = tabRefs.current[selectedLocationId];
    const container = tabsContainerRef.current;
    if (activeTabEl && container) {
      const scrollLeft = activeTabEl.offsetLeft - container.clientWidth / 2 + activeTabEl.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  }, [selectedLocationId]);

  return (
    <section className="relative py-10 sm:py-14 lg:py-8 overflow-hidden bg-gradient-to-br from-[#021B18] via-[#073F3B] to-[#03201D] text-white w-full">
      {/* Top Wave Divider for Seamless Section Transition */}
      <div className="absolute top-0 left-0 right-0 z-10 opacity-30 pointer-events-none">
        <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#073F3B" />
      </div>

      {/* FULL-BLEED REAL AERIAL ISLAND PHOTO BACKDROP WITH LUXURY OCEAN VIGNETTE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-35 sm:opacity-45">
        <Image
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838817/golden-pebble/images/havelock-aerial-map.png"
          alt="Havelock Island Real Aerial Drone Background"
          fill
          priority
          className="object-cover object-center contrast-[1.1] saturate-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021B18]/95 via-[#073F3B]/80 to-[#021B18]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021B18] via-transparent to-[#021B18]/80 pointer-events-none" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/50 text-[#E8DCC5] text-xs font-sans font-bold tracking-[0.2em] uppercase shadow-sm backdrop-blur-md mb-2">
              <Sparkles className="w-3 h-3 text-[#C5A46D]" />
              <span>NEARBY ATTRACTIONS</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
              Discover{" "}
              <span className="font-script text-2xl sm:text-4xl lg:text-5xl text-[#C5A46D] font-normal italic inline tracking-wide">
                Nearby Places.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Scroll Left / Right Buttons */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={() => scrollLocations("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/20 hover:border-[#C5A46D] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollLocations("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/20 hover:border-[#C5A46D] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/nearby-locations"
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-[#C5A46D]/60 hover:border-[#C5A46D] px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0 backdrop-blur-md"
            >
              <span>VIEW ALL LOCATIONS →</span>
            </Link>
          </div>
        </motion.div>

        {/* MOBILE & TABLET HORIZONTAL HAND-SWIPE CAROUSEL (MATCHING PACKAGE SHOWCASE UX) */}
        <div className="block lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3.5 sm:gap-5 pb-4 pt-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {LOCATIONS.map((loc, index) => (
              <div
                key={loc.id}
                className="w-full sm:w-[310px] md:w-[330px] shrink-0 snap-center flex flex-col"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#C5A46D]/60 p-4 shadow-xl text-[#073F3B] flex flex-col justify-between h-full group hover:border-[#C5A46D] transition-all">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden border border-[#E8E0D2] shadow-md mb-3">
                    <Image
                      src={loc.images && loc.images.length > 0 ? loc.images[0] : loc.image}
                      alt={loc.name}
                      fill
                      sizes="(max-width: 768px) 85vw, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 contrast-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                    <div className="absolute top-2.5 right-2.5 bg-[#073F3B] text-[#C5A46D] text-xs font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md border border-[#C5A46D]/40 flex items-center gap-1 z-10">
                      <Navigation className="w-3 h-3 text-[#C5A46D]" />
                      <span>{loc.island}</span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 text-white text-xs font-sans font-bold uppercase tracking-wider z-10 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>{loc.locationArea}</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#073F3B] leading-snug group-hover:text-[#C5A46D] transition-colors">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-[#C5A46D] font-semibold line-clamp-1 mt-0.5 mb-2">
                        {loc.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed line-clamp-2 mb-3">
                        {loc.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E8DCC5]/60 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs text-[#073F3B] font-medium bg-[#073F3B]/5 p-2 rounded-lg mb-3 border border-[#073F3B]/10">
                        <Clock className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span className="truncate">Best Time: <strong>{loc.bestTimeToVisit}</strong></span>
                      </div>

                      <Link
                        href={`/nearby-locations/${loc.slug}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-[#073F3B] group-hover:bg-[#C5A46D] text-white group-hover:text-[#073F3B] py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                      >
                        <span>VIEW LOCATION →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP 2-COLUMN VIEW (MAP & ACTIVE LOCATION PREVIEW) */}
        <div className="hidden lg:block">
          <div className="relative mb-6">
            <div
              ref={tabsContainerRef}
              className="flex items-center justify-center flex-wrap gap-2 py-1 px-1"
            >
              {ALL_ISLAND_PINS.map((pin) => {
                const isSelected = selectedLocationId === pin.id;
                return (
                  <motion.button
                    key={pin.id}
                    ref={(el) => { tabRefs.current[pin.id] = el; }}
                    onClick={() => setSelectedLocationId(pin.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                      isSelected
                        ? "bg-[#C5A46D] text-[#073F3B] border-white shadow-lg scale-105 font-bold"
                        : "bg-white/10 hover:bg-white/25 text-white border-white/20 backdrop-blur-md"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-[#073F3B]" : "text-[#C5A46D]"}`} />
                    <span>{pin.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* Active Featured Location Card */}
            <div className="col-span-5 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#C5A46D]/60 p-5 shadow-2xl text-[#073F3B] flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#073F3B]/10 text-[#073F3B] text-xs font-sans font-bold uppercase tracking-wider shrink-0">
                      <MapPin className="w-3 h-3 text-[#C5A46D] shrink-0" />
                      <span>SELECTED LOCATION</span>
                    </div>
                    <div className="text-xs font-sans font-bold text-[#C5A46D] uppercase tracking-wider truncate text-right">
                      {activeLocation.locationArea}
                    </div>
                  </div>

                  <AutoImageCarousel
                    key={activeLocation.id + "-" + (activeLocation.images ? activeLocation.images.join(",") : activeLocation.image)}
                    images={activeLocation.images && activeLocation.images.length > 0 ? activeLocation.images : [activeLocation.image]}
                    altText={activeLocation.altText}
                    aspectRatioClassName="relative h-44 w-full rounded-xl overflow-hidden border border-[#E8E0D2] shadow-md mb-3"
                    sizes="40vw"
                    intervalMs={3000}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                    <div className="absolute top-2.5 right-2.5 bg-[#073F3B] text-[#C5A46D] text-xs font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md border border-[#C5A46D]/40 flex items-center gap-1 z-10">
                      <Navigation className="w-3 h-3 text-[#C5A46D]" />
                      <span>{activeLocation.island}</span>
                    </div>
                  </AutoImageCarousel>

                  <div className="min-h-[56px] mb-1.5 flex flex-col justify-start">
                    <h3 className="font-serif text-xl font-bold text-[#073F3B] leading-snug">
                      {activeLocation.name}
                    </h3>
                    <p className="text-xs text-[#C5A46D] font-semibold line-clamp-1 mt-0.5">
                      {activeLocation.subtitle}
                    </p>
                  </div>

                  <div className="min-h-[38px] mb-2.5 flex items-start">
                    <p className="text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed line-clamp-2">
                      {activeLocation.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#073F3B] font-medium bg-[#073F3B]/5 p-2 rounded-lg mb-3 border border-[#073F3B]/10">
                    <Clock className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                    <span className="truncate">Best Time: <strong>{activeLocation.bestTimeToVisit}</strong></span>
                  </div>

                  <Link
                    href={`/nearby-locations/${activeLocation.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] min-h-[44px] py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group"
                  >
                    <span>VIEW LOCATION →</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Map Canvas */}
            <div className="col-span-7 relative h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#C5A46D]/60 shadow-xl group/map">
              <Image
                src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838817/golden-pebble/images/havelock-aerial-map.png"
                alt="Havelock Island Aerial Map View"
                fill
                priority
                sizes="60vw"
                className="object-cover object-center group-hover/map:scale-105 transition-transform duration-1000 contrast-[1.1] saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
              <div className="absolute top-3 left-3 bg-[#073F3B]/90 text-[#C5A46D] text-xs font-sans font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-[#C5A46D]/40 backdrop-blur-md shadow-md flex items-center gap-1.5 z-30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-ping" />
                <span>HAVELOCK ISLAND AERIAL MAP</span>
              </div>

              {ALL_ISLAND_PINS.map((pin) => {
                const isSelectedPin = selectedLocationId === pin.id;
                return (
                  <div
                    key={pin.id}
                    onClick={() => setSelectedLocationId(pin.id)}
                    style={{ top: `${pin.topPercent}%`, left: `${pin.leftPercent}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
                  >
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl whitespace-nowrap ${
                      isSelectedPin
                        ? "bg-white text-[#073F3B] border-2 border-[#C5A46D] scale-110 shadow-[0_0_25px_rgba(197,164,109,1)] z-30"
                        : "bg-[#073F3B]/90 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/40 hover:scale-105 backdrop-blur-md"
                    }`}>
                      <MapPin className={`w-3.5 h-3.5 ${isSelectedPin ? "text-[#C5A46D] fill-[#C5A46D]" : "text-[#C5A46D]"}`} />
                      <span>{pin.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-6 flex sm:hidden justify-center w-full">
          <Link
            href="/nearby-locations"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] font-bold text-xs uppercase tracking-wider px-6 min-h-[48px] py-3 rounded-full shadow-lg transition-all duration-300 w-full max-w-sm text-center"
          >
            <span>VIEW ALL LOCATIONS →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
