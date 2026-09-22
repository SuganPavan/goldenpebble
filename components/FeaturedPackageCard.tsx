"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { Package } from "@/lib/data/packages";

interface FeaturedPackageCardProps {
  pkg: Package;
}

export default function FeaturedPackageCard({ pkg }: FeaturedPackageCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 20,
        scale: shouldReduceMotion ? 1 : 0.98
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1.0
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group bg-white rounded-3xl overflow-hidden border-2 border-[#C5A46D]/40 shadow-xl hover:shadow-2xl transition-all duration-500 mb-14 sm:mb-16 relative"
    >
      {/* Decorative Outer Subtle Gold Glow Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C5A46D]/10 via-transparent to-[#073F3B]/5 pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch relative z-10">
        
        {/* Left Column: Unique Luxury Photography Framing (~55% width) */}
        <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] w-full overflow-hidden">
          {/* Continuous Ken Burns 10s Image Motion */}
          <div className="absolute inset-0 animate-kenburns-10s">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover contrast-[1.05] saturate-[1.05]"
            />
          </div>

          {/* Luxury Multi-Layered Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/85 via-black/25 to-black/20" />

          {/* Floating Top Left Duration & Category Badge */}
          <div className="absolute top-5 left-5 bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] text-[11px] font-sans font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full border border-[#C5A46D]/60 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
            <span>ISLAND RETREAT • {pkg.duration}</span>
          </div>

          {/* Floating Top Right Rating Badge */}
          <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md text-white text-[10px] font-sans font-semibold tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 shadow-md hidden sm:flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#C5A46D] fill-[#C5A46D]" />
            <span>4.9 / 5.0 Havelock Haven</span>
          </div>

          {/* Handwritten Accent Overlay (Floating Bottom Left) */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-block bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 mb-2">
              <span className="font-script text-2xl text-[#E8DCC5] tracking-wide">
                Barefoot Luxury Awaits ✨
              </span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-white font-normal leading-snug drop-shadow-md">
              Turquoise Reef Waters, Golden Sunsets & Private Beach Strolls
            </p>
          </div>
        </div>

        {/* Right Column: High-End Editorial Details Panel (~45% width) */}
        <div className="lg:col-span-5 p-6 sm:p-9 lg:p-11 flex flex-col justify-between bg-gradient-to-b from-white via-white to-[#F8F6EF]/60 text-[#073F3B]">
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            {/* Category Tag with Gold Sparkle */}
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="text-xs font-sans tracking-[0.22em] uppercase text-[#C5A46D] font-bold">
                FEATURED RESORT EXPERIENCE
              </span>
            </div>

            {/* Editorial Title (Cormorant Garamond 500 weight, 30-38px, deep teal #073F3B) */}
            <h3 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-medium text-[#073F3B] leading-[1.18] tracking-tight mb-3">
              Three Nights of Barefoot Bliss
            </h3>

            {/* Gold Hairline Accent Line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5A46D] to-transparent mb-4" />

            {/* Short Description (Manrope 400 weight) */}
            <p className="font-sans font-normal text-xs sm:text-sm text-[#4E5C58] leading-relaxed mb-6">
              A thoughtfully curated island escape filled with turquoise waters, golden sunsets, and slow, peaceful mornings at Hotel Golden Pebble.
            </p>

            {/* Minimal Inclusions List with Dot Separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#073F3B] font-bold mb-6 border-y border-[#E8E0D2] py-4">
              <span className="bg-[#073F3B]/5 px-2.5 py-1 rounded-md">3N Deluxe Room</span>
              <span className="text-[#C5A46D]">•</span>
              <span className="bg-[#073F3B]/5 px-2.5 py-1 rounded-md">Daily Breakfast</span>
              <span className="text-[#C5A46D]">•</span>
              <span className="bg-[#073F3B]/5 px-2.5 py-1 rounded-md">Jetty Transfers</span>
              <span className="text-[#C5A46D]">•</span>
              <span className="bg-[#073F3B]/5 px-2.5 py-1 rounded-md">Beach Tours</span>
            </div>

            {/* Inclusions Checklist items */}
            <ul className="space-y-2.5 mb-6 text-xs font-sans text-[#4E5C58] font-medium">
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#C5A46D]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#073F3B]" />
                </div>
                <span>Complimentary Havelock jetty pickup & drop assistance</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#C5A46D]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#073F3B]" />
                </div>
                <span>Air-conditioned dining room service & all hotel taxes included</span>
              </li>
            </ul>
          </motion.div>

          {/* Pricing & CTA Button Footer */}
          <div className="pt-5 border-t border-[#E8E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#66736F] font-bold block mb-0.5">
                STARTING FROM
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-medium text-2xl lg:text-3xl text-[#073F3B]">
                  {pkg.startingPrice}
                </span>
                <span className="text-xs font-sans text-[#66736F] font-normal">/ {pkg.priceBasis}</span>
              </div>
            </div>

            <Link
              href={`/packages/${pkg.slug}`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-7 py-4 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl group/btn"
            >
              <span>DISCOVER THIS ESCAPE</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover/btn:text-[#073F3B] transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
