"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BotanicalDecoration from "./BotanicalDecoration";
import AnimatedWaveDivider from "./AnimatedWaveDivider";

export default function BookingCTA() {
  return (
    <div className="relative w-full">
      {/* Top Animated Ocean Wave (Ivory -> Coral) */}
      <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#E98268" />

      {/* Main Coral Booking Section */}
      <section className="py-12 sm:py-20 bg-[#E98268] text-white relative overflow-hidden">
        {/* Decorative Seashell & Botanical overlay */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden md:block opacity-20">
          <BotanicalDecoration variant="leaf-left" className="text-white" />
        </div>
        <div className="absolute bottom-6 right-10 opacity-30">
          <BotanicalDecoration variant="seashell" className="text-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="text-xs sm:text-xs font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/80 font-semibold block mb-2 sm:mb-3">
            HAVELOCK ISLAND, ANDAMAN
          </span>

          <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl font-normal leading-tight mb-4 sm:mb-6 text-balance">
            Ready to make this your island story?
          </h2>

          <p className="text-sm sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Discover luxury comfort, transparent tariffs, and warm boutique hospitality at Hotel Golden Pebble. Contact Soni directly for personalized reservation support.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#063F3C] hover:bg-[#F8F6EF] px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl group w-full sm:w-auto text-center"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 text-[#E98268] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Animated Ocean Wave (Coral -> Deep Teal Footer) */}
      <AnimatedWaveDivider topBgColor="#E98268" waveFillColor="#063F3C" />
    </div>
  );
}
