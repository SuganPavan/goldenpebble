"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Compass, Waves, Anchor, Sun, X, Clock, Users, ShieldCheck } from "lucide-react";
import AnimatedWaveDivider from "./AnimatedWaveDivider";

interface ActivityBadgeItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  icon: typeof Waves;
  image: string;
  duration: string;
  suitability: string;
  shortDescription: string;
}

const ACTIVITIES_DATA: ActivityBadgeItem[] = [
  {
    id: "scuba-diving",
    slug: "scuba-diving",
    name: "Scuba Diving",
    subtitle: "Explore Vibrant Coral Reefs at Nemo Reef",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    duration: "2 - 3 Hours",
    suitability: "Beginners & Non-swimmers welcome",
    shortDescription: "Dive into crystal clear waters with a certified instructor to discover clownfish, sea turtles, and brain corals."
  },
  {
    id: "snorkeling",
    slug: "snorkeling",
    name: "Snorkeling",
    subtitle: "Swim Alongside Marine Life in Shallow Reefs",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    duration: "1 - 2 Hours",
    suitability: "All Age Groups & Families",
    shortDescription: "Float effortlessly above shallow coral gardens at Elephant Beach and Govind Nagar with guided assistance."
  },
  {
    id: "sea-kayaking",
    slug: "sea-kayaking",
    name: "Kayaking",
    subtitle: "Paddle Through Serene Coastal Mangroves",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    duration: "2 Hours",
    suitability: "Nature Enthusiasts & Couples",
    shortDescription: "Experience peaceful kayaking through green mangrove tunnels or bioluminescence night tours on moonless nights."
  },
  {
    id: "island-hopping",
    slug: "island-hopping",
    name: "Island Hopping",
    subtitle: "Lagoon Cruises & Neil Island Day Trips",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
    duration: "Half / Full Day",
    suitability: "Couples & Group Travelers",
    shortDescription: "Charter private boat excursions to hidden sandbars, coral coves, and surrounding pristine island lagoons."
  },
  {
    id: "beach-walks-sunsets",
    slug: "beach-walks-sunsets",
    name: "Beach Walks",
    subtitle: "Unwind at Radhanagar & Kalopathar Beaches",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    duration: "Flexible",
    suitability: "All Guests",
    shortDescription: "Relax on powdery white coral sands, sip fresh coconut water, and watch golden sunset hues over Asia's best beach."
  }
];

export default function UnforgettableActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityBadgeItem | null>(null);

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-[#0369A1] text-white">
      
      {/* TOP & BOTTOM ORGANIC WAVE DIVIDERS FOR SEAMLESS TRANSITIONS */}
      <div className="absolute top-0 left-0 right-0 z-10 opacity-40 pointer-events-none">
        <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#0369A1" />
      </div>

      {/* FULL-WIDTH OCEAN UNDERWATER BACKDROP WITH MORE TRANSPARENT SOFT OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-45">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80"
          alt="Havelock Scuba Diving & Underwater Marine Life"
          fill
          priority
          className="object-cover object-center contrast-[1.05]"
        />

        {/* Ocean Blue Turquoise Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/60 via-[#0369A1]/40 to-[#075985]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0369A1] via-transparent to-[#0369A1]/50 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION HEADER BLOCK MATCHING ATTACHED SCREENSHOT */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-4">
          
          <div className="max-w-2xl">
            {/* Eyebrow Gold/White Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/40 text-white text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-2.5 shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E8DCC5]" />
              <span>TRIPS • ADVENTURE • EXPLORE</span>
            </div>

            {/* Expressive Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white drop-shadow-md">
              Unforgettable{" "}
              <span className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#E8DCC5] font-normal italic inline tracking-wide drop-shadow-sm">
                Island Activities
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="font-sans text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed mt-2 max-w-xl drop-shadow-sm">
              Discover the vibrant marine life, pristine beaches and thrilling adventures that make Havelock special.
            </p>
          </div>

          {/* Right Action Button Pill */}
          <div className="flex lg:justify-end">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 bg-[#F8F6EF] hover:bg-[#C5A46D] text-[#073F3B] hover:text-white px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl group shrink-0 border border-white/30"
            >
              <span>EXPLORE ACTIVITIES</span>
              <ArrowRight className="w-4 h-4 text-[#073F3B] group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 5 COMPACT CIRCULAR GLASS ICON BADGES HORIZONTAL ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-2">
          {ACTIVITIES_DATA.map((act) => {
            const IconComp = act.icon;
            const isSelected = selectedActivity?.id === act.id;

            return (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(isSelected ? null : act)}
                className="group/badge cursor-pointer flex flex-col items-center text-center transition-all duration-300"
              >
                {/* CIRCULAR GLASS RING BADGE CONTAINER */}
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    isSelected
                      ? "bg-[#C5A46D] border-white text-[#073F3B] shadow-[0_0_30px_rgba(197,164,109,0.7)] scale-110"
                      : "bg-white/15 hover:bg-white/30 border-white/30 hover:border-white text-white shadow-lg backdrop-blur-md hover:scale-105"
                  }`}
                >
                  <IconComp className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${
                    isSelected ? "text-[#073F3B]" : "text-white group-hover/badge:text-[#E8DCC5]"
                  }`} />
                </div>

                {/* Activity Label Below Icon */}
                <span className={`mt-2.5 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase transition-colors duration-300 ${
                  isSelected ? "text-[#E8DCC5]" : "text-white group-hover/badge:text-[#E8DCC5]"
                }`}>
                  {act.name}
                </span>
                <span className="text-[10px] text-[#F8F6EF]/80 font-light mt-0.5">
                  {act.duration}
                </span>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE PREVIEW MODAL / POPUP DETAILS WHEN BADGE IS CLICKED */}
        <AnimatePresence>
          {selectedActivity && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 bg-[#073F3B]/95 backdrop-blur-2xl rounded-3xl border-2 border-[#C5A46D]/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] p-2 rounded-full transition-all z-20 border border-white/20"
                aria-label="Close activity preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Activity Image Left */}
                <div className="lg:col-span-5 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/20 shadow-md">
                  <Image
                    src={selectedActivity.image}
                    alt={selectedActivity.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-[#073F3B]/90 text-[#C5A46D] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C5A46D]/40">
                    {selectedActivity.name}
                  </div>
                </div>

                {/* Activity Content Right */}
                <div className="lg:col-span-7 space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                      {selectedActivity.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C5A46D] font-semibold mt-0.5">
                      {selectedActivity.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F8F6EF]/85 font-light leading-relaxed">
                    {selectedActivity.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#E8DCC5] font-semibold pt-1">
                    <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>{selectedActivity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                      <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>{selectedActivity.suitability}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>Safety Equipment Included</span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/activities/${selectedActivity.slug}`}
                      className="inline-flex items-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
                    >
                      <span>VIEW FULL ACTIVITY DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
