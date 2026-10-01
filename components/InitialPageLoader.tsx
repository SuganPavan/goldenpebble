"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialPageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const dismissLoader = () => {
      setIsLoading(false);
    };

    // On non-home routes (e.g. /rooms, /packages, /about), dismiss loader quickly (200ms)
    if (pathname !== "/") {
      const timer = setTimeout(dismissLoader, 200);
      return () => clearTimeout(timer);
    }

    // On homepage, keep showing loader until hero video starts playing
    const handleVideoStarted = () => {
      dismissLoader();
    };

    window.addEventListener("hero-video-started", handleVideoStarted);

    // Fallback safety timer guarantees loader clears even if autoplay is restricted or on low power mode
    const fallbackTimer = setTimeout(dismissLoader, 2200);

    return () => {
      window.removeEventListener("hero-video-started", handleVideoStarted);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="golden-pebble-initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] bg-[#073F3B] flex flex-col items-center justify-center p-4 text-white overflow-hidden pointer-events-auto"
        >
          {/* Luxury Ambient Background Radial Glow */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              background: "radial-gradient(circle at 50% 45%, rgba(197, 164, 109, 0.35) 0%, transparent 65%)"
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-xs mx-auto">
            {/* Animated Golden Pebble Official Logo Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mb-5"
            >
              {/* Outer Pulsing Gold Glow Ring */}
              <div className="absolute -inset-4 rounded-3xl border border-[#C5A46D]/40 animate-ping opacity-50 pointer-events-none" />

              {/* Logo Container Card */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#042422] border-2 border-[#C5A46D] flex items-center justify-center p-3 shadow-[0_0_50px_rgba(197,164,109,0.45)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A46D]/20 via-transparent to-white/15 pointer-events-none" />
                
                <Image
                  src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838796/golden-pebble/logo.png"
                  alt="Hotel Golden Pebble Havelock Logo"
                  width={120}
                  height={120}
                  priority
                  className="object-contain w-full h-full drop-shadow-md"
                />
              </div>
            </motion.div>

            {/* Brand Subtitle Typography */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col items-center gap-1 mb-5"
            >
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#C5A46D] uppercase">
                HAVELOCK ISLAND • SWARAJ DWEEP
              </span>
              <span className="text-xs font-serif italic text-white/80">
                Boutique Luxury Hospitality
              </span>
            </motion.div>

            {/* Circular Gold Progress Spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                <div className="absolute inset-0 rounded-full border-2 border-[#C5A46D] border-t-transparent animate-spin" />
              </div>

              <span className="text-xs font-sans text-[#E8DCC5] font-light tracking-wider animate-pulse">
                Preparing Video Experience...
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
