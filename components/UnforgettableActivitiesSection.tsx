"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Waves, Anchor, Ship, Sparkles } from "lucide-react";

interface FeaturedExperience {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  icon: React.ElementType;
  emoji: string;
  image: string;
}

const FEATURED_EXPERIENCES: FeaturedExperience[] = [
  {
    id: "scuba-diving",
    slug: "scuba-diving",
    name: "Scuba Diving",
    shortDesc: "Explore Havelock's underwater world.",
    icon: Anchor,
    emoji: "🤿",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "sea-walk",
    slug: "sea-walk",
    name: "Sea Walk",
    shortDesc: "Walk beneath the Andaman Sea.",
    icon: Waves,
    emoji: "🌊",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838823/golden-pebble/images/activity/sea_walk_image.webp"
  },
  {
    id: "snorkeling",
    slug: "snorkeling",
    name: "Snorkelling",
    shortDesc: "Discover colourful coral reefs.",
    icon: Compass,
    emoji: "🤿",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838825/golden-pebble/images/activity/Snorkeling.jpg"
  },
  {
    id: "kayaking",
    slug: "kayaking",
    name: "Kayaking",
    shortDesc: "Explore mangroves and island waters.",
    icon: Ship,
    emoji: "🛶",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Mangrove%20Sea%20Kayaking.jpg"
  }
];

export default function UnforgettableActivitiesSection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#083344] via-[#0E4A5E] to-[#083344] text-white">
      {/* TROPICAL SEA BLUE AMBIENT GLOW */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 25% 15%, rgba(56, 189, 248, 0.22) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 85%, rgba(197, 164, 109, 0.2) 0%, transparent 65%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#082F49]/80 border border-sky-400/40 text-sky-300 text-[11px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>HAVELOCK ADVENTURES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white drop-shadow-md">
            Island Experiences
          </h2>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-sky-100/90 font-light leading-relaxed">
            Discover some of Havelock Island&apos;s most memorable water and nature experiences.
          </p>
        </motion.div>

        {/* 4 FEATURED EXPERIENCE CARDS GRID WITH ELEGANT NO-FLICKER HOVER ANIMATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group h-full bg-[#082F49]/70 hover:bg-[#082F49] rounded-3xl border border-sky-400/30 hover:border-[#C5A46D] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 flex flex-col justify-between backdrop-blur-md hover:-translate-y-2"
            >
              <Link href={`/activities/${exp.slug}`} className="block flex-1 flex flex-col justify-between h-full">
                <div>
                  {/* Image Container with Zoom & Floating Emoji Badge */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-black/40">
                    <Image
                      src={exp.image}
                      alt={exp.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082F49] via-transparent to-black/30 pointer-events-none" />
                    
                    {/* Emoji & Icon Pill Badge */}
                    <div className="absolute top-3 left-3 bg-[#083344]/90 backdrop-blur-md border border-sky-300/40 group-hover:border-[#C5A46D] text-white px-3 py-1 rounded-full text-xs font-sans font-bold flex items-center gap-1.5 shadow-md z-10 transition-colors">
                      <span className="text-base leading-none">{exp.emoji}</span>
                      <span className="text-[11px] text-[#C5A46D] group-hover:text-white uppercase font-bold tracking-wider transition-colors">{exp.name}</span>
                    </div>

                    {/* ELEGANT CENTERED HOVER BADGE OVER IMAGE */}
                    <div className="absolute inset-0 bg-[#082F49]/60 backdrop-blur-xs flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      <div className="bg-[#073F3B]/90 border border-[#C5A46D] px-4 py-2 rounded-full shadow-xl text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        <span className="text-xs font-sans font-bold text-[#C5A46D] uppercase tracking-wider">
                          View Activity Details
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A46D] transition-colors">
                      {exp.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-sky-100/85 font-light leading-relaxed">
                      {exp.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-5 pt-0">
                  <div className="w-full py-2.5 px-4 rounded-xl bg-white/10 group-hover:bg-[#C5A46D] text-sky-100 group-hover:text-[#082F49] border border-white/15 group-hover:border-[#C5A46D] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                    <span>Explore Activity</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#082F49] group-hover:translate-x-1.5 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTAS: EXPLORE ALL EXPERIENCES, STAY PACKAGES & DISCOVER NEARBY */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 border-t border-sky-400/20">
          <Link
            href="/activities"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#082F49] px-8 py-3.5 rounded-full text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group w-full sm:w-auto text-center"
          >
            <span>Explore All Experiences →</span>
          </Link>
          
          <Link
            href="/packages"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#082F49] px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-300 border border-white/25 w-full sm:w-auto text-center"
          >
            <span>Explore Stay Packages →</span>
          </Link>
          
          <Link
            href="/nearby-locations"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/15 text-sky-100 hover:text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-300 border border-white/15 w-full sm:w-auto text-center"
          >
            <span>Discover Nearby →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
