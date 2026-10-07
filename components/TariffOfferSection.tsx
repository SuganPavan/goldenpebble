"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Utensils, 
  Wifi, 
  Wind, 
  ConciergeBell, 
  Car, 
  Coffee, 
  Zap,
  Compass
} from "lucide-react";

export default function TariffOfferSection() {
  const conciseAmenities = [
    { label: "Air Conditioning", icon: Wind, emoji: "❄️" },
    { label: "Free Wi-Fi", icon: Wifi, emoji: "📶" },
    { label: "Breakfast Included", icon: Coffee, emoji: "🍳" },
    { label: "Restaurant", icon: Utensils, emoji: "🍽️" },
    { label: "Room Service", icon: ConciergeBell, emoji: "🛎️" },
    { label: "Parking", icon: Car, emoji: "🚗" },
    { label: "24×7 Power Backup", icon: Zap, emoji: "⚡" },
    { label: "Travel Desk", icon: Compass, emoji: "🏝️" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative text-[#F8F6EF] rounded-2xl border border-[#C5A46D]/60 shadow-xl p-6 sm:p-8 overflow-hidden group"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/comfortable-stay-bg.jpg"
          alt="Golden Pebble Havelock Amenities Background"
          fill
          loading="lazy"
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center scale-105 brightness-95 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#021B18]/70 via-[#073F3B]/60 to-[#03201D]/75 pointer-events-none" />
      </div>

      {/* HEADER SECTION */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 border border-[#F3D39B]/80 text-[#FCE8C2] text-xs font-sans font-bold tracking-[0.2em] uppercase shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#F3D39B]" />
          <span>ISLAND COMFORT</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-[#F3D39B] drop-shadow-md">
          Everything You Need for a Comfortable Stay
        </h2>
      </div>

      {/* 8 CONCISE ICON + LABEL AMENITIES GRID */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {conciseAmenities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-black/55 hover:bg-black/75 p-3.5 sm:p-4 rounded-xl border border-white/20 hover:border-[#F3D39B] transition-all flex items-center gap-3 shadow-md group/item"
            >
              <div className="w-9 h-9 rounded-lg bg-[#C5A46D]/30 border border-[#F3D39B]/60 text-[#FCE8C2] group-hover/item:bg-[#F3D39B] group-hover/item:text-[#073F3B] flex items-center justify-center transition-colors shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-serif text-xs sm:text-sm font-bold text-white group-hover/item:text-[#F3D39B] transition-colors leading-tight">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* FOOTER CTA */}
      <div className="relative z-10 text-center pt-2">
        <Link
          href="/rooms"
          className="inline-flex items-center justify-center gap-2 bg-[#F3D39B] hover:bg-white text-[#073F3B] px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-lg group"
        >
          <span>View All Amenities →</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
