"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Navigation, Clock } from "lucide-react";
import { LOCATIONS } from "@/lib/data/locations";
import AnimatedWaveDivider from "./AnimatedWaveDivider";

interface MapPinPosition {
  id: string;
  name: string;
  shortTag: string;
  topPercent: number; // Y position on island photo (0-100%)
  leftPercent: number; // X position on island photo (0-100%)
}

const ALL_ISLAND_PINS: MapPinPosition[] = [
  { id: "govind-nagar-beach", name: "Govind Nagar Beach", shortTag: "1.5 KM • 4 MIN", topPercent: 26, leftPercent: 48 },
  { id: "elephant-beach", name: "Elephant Beach", shortTag: "8 KM • 15 MIN", topPercent: 36, leftPercent: 28 },
  { id: "radhanagar-beach", name: "Radhanagar Beach", shortTag: "10 KM • 20 MIN", topPercent: 54, leftPercent: 22 },
  { id: "kalopathar-beach", name: "Kalopathar Beach", shortTag: "6.5 KM • 12 MIN", topPercent: 54, leftPercent: 74 },
  { id: "neil-island", name: "Neil Island", shortTag: "30 KM • 75 MIN FERRY", topPercent: 80, leftPercent: 60 },
];

export default function NearbyAttractionsShowcase() {
  const [selectedLocationId, setSelectedLocationId] = useState<string>("radhanagar-beach");

  const activeLocation = LOCATIONS.find((loc) => loc.id === selectedLocationId) || LOCATIONS[0];

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden bg-gradient-to-br from-[#021B18] via-[#073F3B] to-[#03201D] text-white w-full">
      
      {/* Top Wave Divider for Seamless Section Transition */}
      <div className="absolute top-0 left-0 right-0 z-10 opacity-30 pointer-events-none">
        <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#073F3B" />
      </div>

      {/* FULL-BLEED REAL AERIAL ISLAND PHOTO BACKDROP WITH LUXURY OCEAN VIGNETTE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-35 sm:opacity-45">
        <Image
          src="/images/havelock-aerial-map.jpg"
          alt="Havelock Island Real Aerial Drone Background"
          fill
          priority
          className="object-cover object-center contrast-[1.1] saturate-[1.2]"
        />
        {/* Dark Emerald Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021B18]/95 via-[#073F3B]/80 to-[#021B18]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021B18] via-transparent to-[#021B18]/80 pointer-events-none" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION HEADER BLOCK */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-3">
          <div>
            {/* Eyebrow Gold Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/50 text-[#E8DCC5] text-[10px] font-sans font-bold tracking-[0.2em] uppercase shadow-sm backdrop-blur-md mb-2">
              <Sparkles className="w-3 h-3 text-[#C5A46D]" />
              <span>NEARBY ATTRACTIONS • HAVELOCK MAP</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
              Discover{" "}
              <span className="font-script text-2xl sm:text-4xl lg:text-5xl text-[#C5A46D] font-normal italic inline tracking-wide">
                Nearby Places.
              </span>
            </h2>
          </div>

          {/* View All Locations Button */}
          <Link
            href="/nearby-locations"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-[#C5A46D]/60 hover:border-[#C5A46D] px-4 py-2 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0 backdrop-blur-md self-start sm:self-auto"
          >
            <span>VIEW ALL 5 LOCATIONS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#073F3B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ALL 5 LOCATIONS STRIP (TOP SELECTOR BAR) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-5 no-scrollbar">
          {ALL_ISLAND_PINS.map((pin) => {
            const isSelected = selectedLocationId === pin.id;

            return (
              <button
                key={pin.id}
                onClick={() => setSelectedLocationId(pin.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shrink-0 border ${
                  isSelected
                    ? "bg-[#C5A46D] text-[#073F3B] border-white shadow-md scale-105"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
                }`}
              >
                <MapPin className={`w-3 h-3 ${isSelected ? "text-[#073F3B]" : "text-[#C5A46D]"}`} />
                <span>{pin.name}</span>
                <span className={`text-[9px] font-normal ${isSelected ? "text-[#073F3B]/80" : "text-white/60"}`}>
                  ({pin.shortTag.split(" • ")[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* COMPACT REAL AERIAL ISLAND MAP & PREVIEW CARD CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* MAP CANVAS (lg:col-span-7 xl:col-span-7) - Height reduced to h-[340px] sm:h-[380px] lg:h-[400px] */}
          <div className="lg:col-span-7 relative h-[340px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden border border-[#C5A46D]/60 shadow-xl group/map">
            
            {/* Real Aerial Island Drone Photo */}
            <Image
              src="/images/havelock-aerial-map.jpg"
              alt="Havelock Island Aerial Map View"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover/map:scale-105 transition-transform duration-1000 contrast-[1.1] saturate-[1.2]"
            />

            {/* Dark Overlay for Pin Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

            {/* Top Left Tag */}
            <div className="absolute top-3 left-3 bg-[#073F3B]/90 text-[#C5A46D] text-[9px] font-sans font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-[#C5A46D]/40 backdrop-blur-md shadow-md flex items-center gap-1.5 z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-ping" />
              <span>HAVELOCK ISLAND AERIAL MAP</span>
            </div>

            {/* ALL 5 LOCATION PINS POSITIONED ON THE MAP */}
            {ALL_ISLAND_PINS.map((pin) => {
              const isSelectedPin = selectedLocationId === pin.id;

              return (
                <div
                  key={pin.id}
                  onClick={() => setSelectedLocationId(pin.id)}
                  style={{
                    top: `${pin.topPercent}%`,
                    left: `${pin.leftPercent}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
                >
                  {/* Location Pin Badge Pill */}
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl whitespace-nowrap ${
                      isSelectedPin
                        ? "bg-white text-[#073F3B] border-2 border-[#C5A46D] scale-110 shadow-[0_0_25px_rgba(197,164,109,1)] z-30"
                        : "bg-[#073F3B]/90 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/40 hover:scale-105 backdrop-blur-md"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isSelectedPin ? "text-[#C5A46D] fill-[#C5A46D]" : "text-[#C5A46D]"}`} />
                    <span>{pin.name}</span>
                    <span className={`text-[8.5px] font-normal ${isSelectedPin ? "text-[#073F3B]/80" : "text-white/70"}`}>
                      ({pin.shortTag.split(" • ")[0]})
                    </span>
                  </div>

                  {/* Pulsing Radar Ring */}
                  {isSelectedPin && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#C5A46D] animate-ping opacity-80 pointer-events-none" />
                  )}
                </div>
              );
            })}

          </div>

          {/* COMPACT ACTIVE FEATURED LOCATION GLASS CARD (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#C5A46D]/60 p-4 sm:p-5 shadow-xl text-[#073F3B] relative overflow-hidden"
              >
                {/* Active Location Header Tag */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#073F3B]/10 text-[#073F3B] text-[9px] font-sans font-bold uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-[#C5A46D]" />
                    <span>SELECTED PLACE</span>
                  </div>
                  <div className="text-[10px] font-sans font-bold text-[#C5A46D] uppercase tracking-wider">
                    {activeLocation.distance} away
                  </div>
                </div>

                {/* Compact Location Image */}
                <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-[#E8E0D2] shadow-sm mb-3">
                  <Image
                    src={activeLocation.image}
                    alt={activeLocation.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-2 right-2 bg-[#073F3B] text-[#C5A46D] text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md border border-[#C5A46D]/40 flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#C5A46D]" />
                    <span>{activeLocation.distance} • {activeLocation.travelTime}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#073F3B] mb-0.5 leading-snug">
                  {activeLocation.name}
                </h3>
                <p className="text-[11px] text-[#C5A46D] font-semibold mb-2 line-clamp-1">
                  {activeLocation.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-[11px] sm:text-xs text-[#4E5C58] font-light leading-relaxed mb-3 line-clamp-2">
                  {activeLocation.shortDescription}
                </p>

                {/* Best Time Info */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#073F3B] font-medium bg-[#073F3B]/5 p-2 rounded-lg mb-3 border border-[#073F3B]/10">
                  <Clock className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Best Time: <strong>{activeLocation.bestTimeToVisit}</strong></span>
                </div>

                {/* Action CTA Button */}
                <Link
                  href={`/nearby-locations/${activeLocation.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] py-2.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group"
                >
                  <span>EXPLORE LOCATION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#073F3B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
