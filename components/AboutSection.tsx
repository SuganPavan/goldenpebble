"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowRight, Star, Compass, Heart, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedWaveDivider from "./AnimatedWaveDivider";
import BotanicalDecoration from "./BotanicalDecoration";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants respecting prefers-reduced-motion with strict Easing types
  const textRevealVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const cardContainerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: 0.1
      }
    }
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#073D37] text-[#F8F6EF]">
      {/* 1. TOP WAVE DIVIDER */}
      <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#073D37" />

      {/* 2. UNIFIED SEAMLESS BACKGROUND CONTAINER */}
      <div className="relative min-h-[500px] lg:min-h-[550px] flex items-center py-10 sm:py-12 lg:py-14">
        
        {/* Continuous Multi-Directional Organic Gradient Layer */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 92% 18%, rgba(91, 186, 203, 0.42) 0%, rgba(35, 111, 135, 0.32) 42%, transparent 75%),
              radial-gradient(ellipse at 8% 82%, rgba(7, 61, 55, 0.95) 0%, rgba(6, 63, 60, 0.85) 45%, transparent 80%),
              radial-gradient(circle at 60% 55%, rgba(121, 216, 212, 0.18) 0%, transparent 65%),
              linear-gradient(125deg, #073D37 0%, #063F3C 32%, #14545B 62%, #236F87 100%)
            `
          }}
        />

        {/* Subtle Botanical Line Accent */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <div className="absolute -top-8 -left-8 transform -rotate-12">
            <BotanicalDecoration variant="leaf-left" className="text-[#C9A66B] w-36 h-72" />
          </div>
          <div className="absolute -bottom-8 right-8 transform rotate-12">
            <BotanicalDecoration variant="leaf-right" className="text-[#79D8D4] w-32 h-64" />
          </div>
        </div>

        {/* 3. FOREGROUND EDITORIAL CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT FOREGROUND: SEQUENCED TEXT & STAGGERED FEATURE CARDS */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Eyebrow & Heading Animation */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={textRevealVariants}
                className="space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A66B]" />
                  <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#C9A66B] font-bold">
                    ABOUT HOTEL GOLDEN PEBBLE
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#F8F6EF]">
                  A little closer to nature.
                  <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#C9A66B] font-normal italic block mt-1.5 tracking-wide">
                    A little more at ease.
                  </span>
                </h2>
              </motion.div>

              {/* Gold Decorative Accent Line */}
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#C9A66B] via-[#E8DCC5] to-transparent my-3" />

              {/* Narrative Text Animation */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
                className="space-y-3"
              >
                <div className="relative pl-4 border-l-2 border-[#C9A66B]/60 py-1">
                  <p className="font-serif text-base sm:text-lg text-[#F8F6EF]/95 font-light leading-relaxed">
                    Hotel Golden Pebble is a charming boutique haven situated in Havelock Island (Swaraj Deep). Surrounded by lush tropical foliage and crafted with warm timber architecture, our property offers peaceful accommodations, attentive service, and an authentic Andaman atmosphere.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#F8F6EF]/85 font-light leading-relaxed">
                  Whether you are seeking quiet beach strolls at Govind Nagar, diving adventures at Nemo Reef, or freshly prepared seafood, Golden Pebble delivers luxury comfort with transparent tariffs.
                </p>
              </motion.div>

              {/* Buttons Animation */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
                className="pt-1 flex flex-wrap gap-3.5 items-center"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#C9A66B] hover:bg-[#d8b577] text-[#073D37] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 text-[#F8F6EF] px-5 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Explore Rooms</span>
                </Link>
              </motion.div>

              {/* 4 Feature Cards — Staggered Reveal Sequence */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardContainerVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15"
              >
                {/* 1. Best Value */}
                <motion.div
                  variants={cardItemVariants}
                  className="p-3 rounded-xl bg-[#063F3C]/40 backdrop-blur-md border border-[#C9A66B]/25 hover:border-[#C9A66B]/60 transition-all"
                >
                  <Star className="w-4 h-4 text-[#C9A66B] mb-1" />
                  <span className="text-xs font-semibold text-white block">Best Value</span>
                  <span className="text-[10px] text-[#F8F6EF]/80 font-light">Transparent Rates</span>
                </motion.div>

                {/* 2. Prime Location */}
                <motion.div
                  variants={cardItemVariants}
                  className="p-3 rounded-xl bg-[#063F3C]/40 backdrop-blur-md border border-[#C9A66B]/25 hover:border-[#C9A66B]/60 transition-all"
                >
                  <Compass className="w-4 h-4 text-[#C9A66B] mb-1" />
                  <span className="text-xs font-semibold text-white block">Prime Location</span>
                  <span className="text-[10px] text-[#F8F6EF]/80 font-light">Govind Nagar</span>
                </motion.div>

                {/* 3. Hospitality */}
                <motion.div
                  variants={cardItemVariants}
                  className="p-3 rounded-xl bg-[#063F3C]/40 backdrop-blur-md border border-[#C9A66B]/25 hover:border-[#C9A66B]/60 transition-all"
                >
                  <Heart className="w-4 h-4 text-[#C9A66B] mb-1" />
                  <span className="text-xs font-semibold text-white block">Hospitality</span>
                  <span className="text-[10px] text-[#F8F6EF]/80 font-light">Personalized Care</span>
                </motion.div>

                {/* 4. FIT & Group */}
                <motion.div
                  variants={cardItemVariants}
                  className="p-3 rounded-xl bg-[#063F3C]/40 backdrop-blur-md border border-[#C9A66B]/25 hover:border-[#C9A66B]/60 transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C9A66B] mb-1" />
                  <span className="text-xs font-semibold text-white block">FIT & Group</span>
                  <span className="text-[10px] text-[#F8F6EF]/80 font-light">Agent Friendly</span>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT FOREGROUND: PROPORTIONAL CURTAIN REVEAL IMAGES */}
            <div className="lg:col-span-6 relative">
              <div className="relative grid grid-cols-12 gap-4 items-center">
                
                {/* 1. First Main Card: Real Golden Pebble Walkway Corridor */}
                <div className="col-span-12 sm:col-span-8 relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9A66B]/50 group h-[280px] sm:h-[340px]">
                  
                  {/* Slow Top-to-Bottom Sliding Curtain Overlay */}
                  <motion.div
                    initial={{ y: shouldReduceMotion ? "100%" : "0%" }}
                    whileInView={{ y: "100%" }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.15,
                      ease: [0.25, 1, 0.5, 1]
                    }}
                    className="absolute inset-0 bg-[#073D37] z-30 pointer-events-none"
                  />

                  {/* Image with subtle slow zoom reveal */}
                  <motion.div
                    initial={{ scale: shouldReduceMotion ? 1 : 1.12, opacity: 0.7 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/images/golden-pebble-property.jpg"
                      alt="Hotel Golden Pebble Walkway Corridor and Logo Emblem"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.05] saturate-[1.05]"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#073D37]/75 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Handwritten Accent Overlay */}
                  <div className="absolute top-4 left-4 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 z-20">
                    <span className="font-script text-xl sm:text-2xl text-[#E8DCC5] tracking-wide">
                      Nature Heals Here ✨
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#C9A66B] font-bold block">
                      BOUTIQUE HAVEN • HAVELOCK ISLAND
                    </span>
                    <p className="font-serif text-base sm:text-lg text-white font-normal mt-0.5">
                      Warm Timber Architecture & Tropical Gardens
                    </p>
                  </div>
                </div>

                {/* 2. Second Overlapping Card: Turquoise Andaman Sea */}
                <div className="col-span-12 sm:col-span-4 sm:-ml-8 sm:mt-8 relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 group h-[190px] sm:h-[230px] z-20">
                  
                  {/* Slow Top-to-Bottom Sliding Curtain Overlay */}
                  <motion.div
                    initial={{ y: shouldReduceMotion ? "100%" : "0%" }}
                    whileInView={{ y: "100%" }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.8,
                      ease: [0.25, 1, 0.5, 1]
                    }}
                    className="absolute inset-0 bg-[#073D37] z-30 pointer-events-none"
                  />

                  {/* Image with subtle slow zoom reveal */}
                  <motion.div
                    initial={{ scale: shouldReduceMotion ? 1 : 1.12, opacity: 0.7 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.6, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                      alt="Vivid Turquoise Andaman Sea & Coral Reef Waters"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.05] saturate-[1.08]"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#052A38]/75 via-transparent to-transparent z-10 pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                    <span className="font-script text-lg sm:text-xl text-[#79D8D4] block">
                      Turquoise Waters
                    </span>
                    <span className="text-[9px] font-sans tracking-widest uppercase text-white/90 block mt-0.5 font-semibold">
                      Havelock Island Sea
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrated Quote Pill */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-5 flex items-center justify-between p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#79D8D4] animate-pulse" />
                  <span className="text-xs sm:text-sm font-serif italic text-[#DCEFF2]">
                    &ldquo;Surrounded by tropical nature, steps away from the Andaman sea.&rdquo;
                  </span>
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#79D8D4] font-bold hidden sm:inline-block">
                  Swaraj Dweep
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM WAVE DIVIDER */}
      <AnimatedWaveDivider topBgColor="#236F87" waveFillColor="#F8F6EF" />
    </section>
  );
}
