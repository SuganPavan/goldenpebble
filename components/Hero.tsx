"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, MapPin, Calendar, Compass } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);

  const notifyVideoReady = () => {
    setIsVideoReady(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("hero-video-started"));
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      notifyVideoReady();
      return;
    }

    // Programmatically set muted properties required by WebKit / Chromium autoplay policies
    video.muted = true;
    video.defaultMuted = true;

    const startVideoPlayback = () => {
      if (!video) return;
      if (video.readyState >= 2) {
        notifyVideoReady();
      }

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            notifyVideoReady();
          })
          .catch(() => {
            notifyVideoReady();
          });
      } else {
        notifyVideoReady();
      }
    };

    // Trigger video playback immediately so buffer loads while initial loader overlay is displayed
    startVideoPlayback();
  }, []);

  const handleVideoPlay = () => {
    if (!hasStartedRef.current && videoRef.current) {
      hasStartedRef.current = true;
      try {
        videoRef.current.currentTime = 0;
      } catch {
        // Ignore seek error
      }
    }
    notifyVideoReady();
  };

  const heroPhrases = [
    "Your island, your own pace.",
    "Crystal turquoise waters & white sands.",
    "Boutique luxury in Govind Nagar, Havelock.",
    "Unforgettable Andaman tropical escape."
  ];

  const searchTaglines = [
    "Deluxe Balcony Rooms with Garden View",
    "PADI Scuba Diving & Sea Walk Trips",
    "Govind Nagar Beach Sunset Walk (2 Min)",
    "Havelock Island Ferry & Room Packages"
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[84vh] flex items-center justify-start overflow-hidden pt-16 bg-[#073F3B]">
      {/* Background Image & Video Layer Container */}
      <div className="absolute inset-0 z-0 bg-[#073F3B]">
        {/* Instant Priority Background Image — Eliminates empty/black screen flash on initial load */}
        <Image
          src="/images/golden-pebble-property.jpg"
          alt="Golden Pebble Havelock Luxury Resort"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 xl:object-[15%_center] xl:scale-[1.12] brightness-105 contrast-[1.03]"
        />

        {/* Full Bright Vibrant Video Layer — Smooth Fade In Once Buffer is Ready */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onPlay={handleVideoPlay}
          onPlaying={handleVideoPlay}
          onLoadedData={handleVideoPlay}
          onCanPlay={handleVideoPlay}
          poster="/images/golden-pebble-property.jpg"
          className={`w-full h-full object-cover object-center scale-100 origin-center xl:object-[15%_center] xl:scale-[1.12] xl:origin-left brightness-105 contrast-[1.03] transition-opacity duration-500 relative z-10 transform-gpu ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Mobile Cropped 9:16 Optimized Video */}
          <source media="(max-width: 767px)" src="/hero-bg-video-mobile.mp4" type="video/mp4" />
          {/* Desktop 16:9 Optimized Video */}
          <source media="(min-width: 768px)" src="/hero-bg-video-desktop.mp4" type="video/mp4" />
          {/* Default Fallback Video */}
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Left Corner Dark Vignette Overlay — Strictly Limited to Left Text Area */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.05, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none z-20"
        />
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.05, ease: "easeInOut" }}
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-20"
        />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 lg:pt-10 pb-16 sm:pb-20 lg:pb-12">
        <div className="max-w-2xl text-white">
          
          {/* 1. Eyebrow Text Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3.5 sm:mb-4 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A66B] animate-pulse" />
            <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#E8DCC5] font-bold drop-shadow-md">
              HAVELOCK ISLAND • SWARAJ DWEEP
            </span>
          </motion.div>

          {/* 2. Main Headline with Live Typing Accent */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] mb-4 sm:mb-5 drop-shadow-lg"
          >
            A stay that feels like coming home.
            
            {/* 3. Dynamic Typewriter Accent Text */}
            <span className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#E8DCC5] block mt-1.5 sm:mt-2 tracking-wide drop-shadow-md min-h-[1.4em]">
              <TypewriterText
                phrases={heroPhrases}
                typingSpeed={65}
                deletingSpeed={35}
                pauseDuration={2500}
                cursorClassName="bg-[#E8DCC5] h-[0.9em]"
              />
            </span>
          </motion.h1>

          {/* 4. Subtitle Description */}
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/95 font-light leading-relaxed mb-6 sm:mb-7 max-w-xl drop-shadow-md"
          >
            Wake up to pristine beaches, tranquil tropical greenery, and heartfelt boutique hospitality at Hotel Golden Pebble, Havelock (Swaraj Dweep).
          </motion.p>

          {/* 5. Interactive Pro Live Search / Highlight Bar */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/40 backdrop-blur-xl border border-white/20 p-2.5 sm:p-3.5 rounded-2xl mb-6 sm:mb-7 shadow-2xl max-w-xl"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-white/90 font-sans">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#C9A66B]/20 text-[#C9A66B] shrink-0">
                <Compass className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="overflow-hidden min-w-0">
                <span className="block text-xs sm:text-xs md:text-sm text-[#C9A66B] font-bold uppercase tracking-wider">
                  Discover Golden Pebble Experiences
                </span>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-[#FCE8C2] truncate block">
                  <TypewriterText
                    phrases={searchTaglines}
                    typingSpeed={50}
                    deletingSpeed={25}
                    pauseDuration={3000}
                    cursorClassName="bg-[#C9A66B] h-[0.85em]"
                  />
                </span>
              </div>
            </div>
          </motion.div>

          {/* 6. CTA Buttons */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto"
          >
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center gap-2 bg-[#E98268] hover:bg-[#d67056] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] group min-h-[48px] w-full sm:w-auto text-center shrink-0"
            >
              <span>Explore Your Stay</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] w-full sm:w-auto text-center shrink-0"
            >
              <Calendar className="w-4 h-4 text-[#C9A66B] shrink-0" />
              <span>Book Your Stay</span>
            </Link>

            <a
              href="https://maps.google.com/?q=Hotel+Golden+Pebble+Havelock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-[#C9A66B] transition-colors py-2 font-medium underline-offset-4 hover:underline self-center sm:self-auto"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
              <span>Govind Nagar Beach (2 Min)</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.65, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-sans font-medium drop-shadow-sm">Scroll Down</span>
        <div className="w-7 h-7 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center animate-bounce shadow-md">
          <ChevronDown className="w-3.5 h-3.5 text-[#C9A66B]" />
        </div>
      </motion.div>
    </section>
  );
}
