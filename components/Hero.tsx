"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-16">
      {/* Background Video with Crystal Clarity & Left Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/golden-pebble-property.jpg"
          className="w-full h-full object-cover object-center brightness-110 contrast-[1.03] transition-all duration-1000"
        >
          {/* Mobile Cropped 9:16 Optimized Video (1.98 MB) */}
          <source media="(max-width: 767px)" src="/hero-bg-video-mobile.mp4" type="video/mp4" />
          {/* Desktop 16:9 Optimized Video (4.85 MB) */}
          <source media="(min-width: 768px)" src="/hero-bg-video-desktop.mp4" type="video/mp4" />
          {/* Default Fallback Video */}
          <source src="/hero-bg-video.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <Image
            src="/images/golden-pebble-property.jpg"
            alt="Golden Pebble Havelock Luxury Resort"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </video>

        {/* Dynamic Dark Vignette Overlay (Light during first 4 seconds video preview, smoothly fades in for text readability at 3.8s) */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: shouldReduceMotion ? 0 : 3.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 via-45% to-transparent pointer-events-none"
        />
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0.15 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: shouldReduceMotion ? 0 : 3.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Hero Content Box (Sequence Starts After 4.0 Seconds of Pure Video Display) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-20">
        <div className="max-w-xl text-white">
          
          {/* 1. Eyebrow Text Animation (Fades in at 4.0s) */}
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 20,
              scale: shouldReduceMotion ? 1 : 0.95
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 4.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="h-[1px] w-6 bg-[#C9A66B]" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#C9A66B] font-semibold drop-shadow-md">
              HAVELOCK ISLAND, ANDAMAN
            </span>
          </motion.div>

          {/* 2. Main Headline Animation (Fades in at 4.15s) */}
          <motion.h1
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 24
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: shouldReduceMotion ? 0 : 4.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] mb-5 drop-shadow-lg"
          >
            A stay that feels like coming home.
            
            {/* 3. Script Accent Text Animation (Fades in at 4.35s) */}
            <motion.span
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                x: shouldReduceMotion ? 0 : -15
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: shouldReduceMotion ? 0 : 4.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-script text-2xl sm:text-3xl md:text-4xl font-normal text-[#E8DCC5] block mt-1 tracking-wide drop-shadow-md"
            >
              Your island, your own pace.
            </motion.span>
          </motion.h1>

          {/* 4. Subtitle Description Animation (Fades in at 4.5s) */}
          <motion.p
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 18
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 4.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-white/90 font-light leading-relaxed mb-7 max-w-md drop-shadow-md"
          >
            Wake up to pristine beaches, tranquil tropical greenery, and heartfelt boutique hospitality at Hotel Golden Pebble, Havelock (Swaraj Deep).
          </motion.p>

          {/* 5. CTA Buttons Animation (Fades in at 4.65s) */}
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 15,
              scale: shouldReduceMotion ? 1 : 0.98
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 4.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-[#E98268] hover:bg-[#d67056] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span>Explore Your Stay</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <span>Book Your Stay</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator Animation (Appears at 4.85s) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 4.85, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-sans font-medium drop-shadow-sm">Scroll Down</span>
        <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center animate-bounce shadow-md">
          <ChevronDown className="w-3.5 h-3.5 text-[#C9A66B]" />
        </div>
      </motion.div>
    </section>
  );
}
