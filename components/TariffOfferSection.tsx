"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Coffee, Users, Gift, MessageCircle, Calendar } from "lucide-react";

export default function TariffOfferSection() {
  const [activeSeason, setActiveSeason] = useState<"regular" | "peak">("regular");

  return (
    <div className="relative mt-4 text-[#F8F6EF] rounded-2xl border border-[#C5A46D]/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-4 sm:p-6 lg:p-7 overflow-hidden group">
      
      {/* 1. BACKGROUND OFFER VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-100"
        >
          <source src="/offerVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark Emerald Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021B18]/45 via-[#073F3B]/30 to-[#03201D]/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT: COMPACT TARIFF & POLICIES CARD */}

      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-3 pb-4 border-b border-white/20">
        <div className="max-w-xl">
          {/* Eyebrow Gold Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/60 text-[#E8DCC5] text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-1.5 shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] animate-pulse" />
            <span>OFFICIAL HOTEL TARIFF • BEST DIRECT RATE OFFER</span>
          </div>

          {/* Expressive Editorial Title */}
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal leading-tight">
            Transparent Season Rates.{" "}
            <span className="font-script text-xl sm:text-3xl lg:text-4xl text-[#C5A46D] font-normal italic inline tracking-wide">
              Clear Guidelines.
            </span>
          </h3>

          <p className="font-sans text-[11px] sm:text-xs text-[#F8F6EF]/90 font-light leading-relaxed mt-1 max-w-lg">
            Guaranteed net payable rates, complimentary breakfast, split AC, and inclusive hotel taxes.
          </p>
        </div>

        {/* Season Rate Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="bg-black/50 p-1 rounded-full border border-[#C5A46D]/60 backdrop-blur-md flex items-center gap-1 shadow-inner">
            <button
              onClick={() => setActiveSeason("regular")}
              className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                activeSeason === "regular"
                  ? "bg-[#C5A46D] text-[#073F3B] shadow-md"
                  : "text-[#E8DCC5] hover:bg-white/10"
              }`}
            >
              <Calendar className="w-3 h-3" />
              <span>REGULAR SEASON</span>
            </button>
            <button
              onClick={() => setActiveSeason("peak")}
              className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                activeSeason === "peak"
                  ? "bg-[#C5A46D] text-[#073F3B] shadow-md"
                  : "text-[#E8DCC5] hover:bg-white/10"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>PEAK DATES</span>
            </button>
          </div>
        </div>
      </div>

      {/* TWO COMPACT TRANSPARENT GLASS SEASON OFFER DISPLAY CARDS */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 mt-4">
        
        {/* CARD 1: REGULAR SEASON RATES */}
        <div
          className={`bg-black/40 backdrop-blur-xl rounded-xl p-4 sm:p-5 border transition-all duration-300 relative flex flex-col justify-between group/card overflow-hidden ${
            activeSeason === "regular"
              ? "border-[#C5A46D] shadow-[0_0_25px_rgba(197,164,109,0.3)] ring-1 ring-[#C5A46D]/40"
              : "border-white/20 opacity-90 hover:opacity-100"
          }`}
        >
          {/* Top Gold Shimmer Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#C5A46D] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>REGULAR SEASON TARIFF</span>
              </span>
              <span className="bg-[#C5A46D]/25 text-[#C5A46D] text-[9px] font-sans font-bold px-2.5 py-0.5 rounded-full uppercase border border-[#C5A46D]/50">
                SAVE UP TO 35%
              </span>
            </div>

            <h4 className="font-serif text-lg sm:text-xl text-white font-medium mb-0.5">
              Valid 01st Nov 2026 to 31st Mar 2027
            </h4>
            <p className="text-[10px] text-[#E8DCC5]/85 italic mb-3">
              * Excludes Peak Holiday Season (15th Dec 2026 – 10th Jan 2027)
            </p>

            {/* Deluxe Room Row */}
            <div className="bg-black/50 backdrop-blur-md p-2.5 sm:p-3 rounded-lg border border-white/20 mb-2 flex items-center justify-between hover:border-[#C5A46D]/80 transition-colors">
              <div>
                <span className="font-serif font-semibold text-white text-base sm:text-lg block">Deluxe Room</span>
                <span className="text-[10px] text-[#F8F6EF]/80 font-light">220 Sq Ft • Tropical Garden View</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#E8DCC5]/75 line-through block">₹5,499 + 5%</span>
                <span className="font-serif font-bold text-xl sm:text-2xl text-[#C5A46D]">
                  ₹3,600 <span className="text-[10px] font-sans text-white/80 font-normal">/ night</span>
                </span>
              </div>
            </div>

            {/* Deluxe Room with Balcony Row */}
            <div className="bg-black/50 backdrop-blur-md p-2.5 sm:p-3 rounded-lg border border-white/20 flex items-center justify-between hover:border-[#C5A46D]/80 transition-colors">
              <div>
                <span className="font-serif font-semibold text-white text-base sm:text-lg block">Deluxe Room with Balcony</span>
                <span className="text-[10px] text-[#F8F6EF]/80 font-light">280 Sq Ft • Private Balcony</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#E8DCC5]/75 line-through block">₹6,499 + 5%</span>
                <span className="font-serif font-bold text-xl sm:text-2xl text-[#C5A46D]">
                  ₹4,200 <span className="text-[10px] font-sans text-white/80 font-normal">/ night</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-[#E8DCC5]">
            <span className="flex items-center gap-1"><Coffee className="w-3 h-3 text-[#C5A46D]" /> Included Breakfast</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#C5A46D]" /> Taxes &amp; AC Included</span>
          </div>
        </div>

        {/* CARD 2: PEAK HOLIDAY SEASON RATES */}
        <div
          className={`bg-gradient-to-br from-[#C5A46D]/95 via-[#D8B67D]/90 to-[#B39055]/95 backdrop-blur-xl text-[#073F3B] rounded-xl p-4 sm:p-5 border border-[#FFF0D4]/90 shadow-xl relative flex flex-col justify-between transition-all duration-300 overflow-hidden ${
            activeSeason === "peak"
              ? "ring-2 ring-[#C5A46D]/60 scale-[1.005]"
              : "hover:scale-[1.005]"
          }`}
        >
          {/* Ribbon Badge */}
          <div className="absolute -right-12 top-5 bg-[#073F3B] text-[#C5A46D] text-[8.5px] font-sans font-bold uppercase tracking-[0.18em] py-0.5 px-10 rotate-45 shadow-md">
            LIMITED
          </div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#073F3B]" />
                <span>PEAK HOLIDAY DATES</span>
              </span>
              <span className="bg-[#073F3B] text-[#F8F6EF] text-[9px] font-sans font-bold px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                LIMITED INVENTORY
              </span>
            </div>

            <h4 className="font-serif text-lg sm:text-xl text-[#073F3B] font-bold mb-0.5">
              Valid 15th Dec 2026 to 10th Jan 2027
            </h4>
            <p className="text-[10px] text-[#073F3B]/85 font-semibold mb-3">
              * Peak Holiday Season dates with guaranteed confirmations &amp; breakfast
            </p>

            {/* Deluxe Room Row */}
            <div className="bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-lg border border-[#073F3B]/20 mb-2 flex items-center justify-between shadow-sm">
              <div>
                <span className="font-serif font-bold text-[#073F3B] text-base sm:text-lg block">Deluxe Room</span>
                <span className="text-[10px] text-[#073F3B]/85 font-medium">220 Sq Ft • Garden View</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#073F3B]/65 line-through block">₹5,499 + 5%</span>
                <span className="font-serif font-bold text-xl sm:text-2xl text-[#073F3B]">
                  ₹4,600 <span className="text-[10px] font-sans text-[#073F3B]/85 font-normal">/ night</span>
                </span>
              </div>
            </div>

            {/* Deluxe Room with Balcony Row */}
            <div className="bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-lg border border-[#073F3B]/20 flex items-center justify-between shadow-sm">
              <div>
                <span className="font-serif font-bold text-[#073F3B] text-base sm:text-lg block">Deluxe Room with Balcony</span>
                <span className="text-[10px] text-[#073F3B]/85 font-medium">280 Sq Ft • Private Balcony</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#073F3B]/65 line-through block">₹6,499 + 5%</span>
                <span className="font-serif font-bold text-xl sm:text-2xl text-[#073F3B]">
                  ₹5,200 <span className="text-[10px] font-sans text-[#073F3B]/85 font-normal">/ night</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#073F3B]/20 flex items-center justify-between text-[11px] text-[#073F3B] font-bold">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#073F3B]" /> Peak Season Lock Rate</span>
            <span className="flex items-center gap-1"><Coffee className="w-3.5 h-3.5 text-[#073F3B]" /> Included Daily Breakfast</span>
          </div>
        </div>

      </div>

      {/* 4 COMPACT POLICY GLASS CARDS */}
      <div className="relative z-10 mt-4 pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-[11px]">
        
        <div className="bg-black/30 backdrop-blur-xl p-3 rounded-xl border border-white/20 hover:border-[#C5A46D]/70 transition-all">
          <div className="flex items-center gap-1.5 mb-0.5 text-[#C5A46D] font-bold text-xs">
            <span>👶</span>
            <span>Children Under 5 FREE</span>
          </div>
          <p className="text-[#F8F6EF]/85 font-light leading-snug">
            Infants &amp; kids below 5 yrs stay complimentary with breakfast included.
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-xl p-3 rounded-xl border border-white/20 hover:border-[#C5A46D]/70 transition-all">
          <div className="flex items-center gap-1.5 mb-0.5 text-[#C5A46D] font-bold text-xs">
            <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Extra Bed &amp; Child Policy</span>
          </div>
          <p className="text-[#F8F6EF]/85 font-light leading-snug">
            Child 5–12 yrs: ₹800 / ₹1,000 | Extra Adult (12+ yrs): ₹1,250 / day.
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-xl p-3 rounded-xl border border-white/20 hover:border-[#C5A46D]/70 transition-all">
          <div className="flex items-center gap-1.5 mb-0.5 text-[#C5A46D] font-bold text-xs">
            <Coffee className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Flexible Meal Supplements</span>
          </div>
          <p className="text-[#F8F6EF]/85 font-light leading-snug">
            Add Lunch or Dinner @ ₹750 / meal or ₹1,500 / day in our AC dining room.
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-xl p-3 rounded-xl border border-white/20 hover:border-[#C5A46D]/70 transition-all">
          <div className="flex items-center gap-1.5 mb-0.5 text-[#C5A46D] font-bold text-xs">
            <Gift className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Romantic Special Add-ons</span>
          </div>
          <p className="text-[#F8F6EF]/85 font-light leading-snug">
            Flower Bed Decor @ ₹1,500 | 0.5 KG Celebration Cake @ ₹1,000.
          </p>
        </div>

      </div>

      {/* DIRECT RESERVATIONS & INSTANT WHATSAPP CALL-TO-ACTION FOOTER BAR */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C5A46D] animate-ping" />
          <span className="text-[11px] sm:text-xs text-[#E8DCC5] font-medium">
            Direct Bookings: <strong className="text-white font-semibold">Soni (+91 9434288856)</strong>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* WhatsApp Direct Chat Button */}
          <a
            href="https://wa.me/919434288856?text=Hi%20Golden%20Pebble,%20I%20would%20like%20to%20inquire%20about%20the%20Official%20Season%20Room%20Rates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WHATSAPP US</span>
          </a>

          {/* Lock Rate Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-5 py-2 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>LOCK YOUR ROOM RATE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
