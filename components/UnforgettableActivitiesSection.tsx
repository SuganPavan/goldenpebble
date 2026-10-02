"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Sparkles, Compass, Waves, Anchor, Sun, Zap, Ship, 
  Clock, MapPin, MousePointerClick, ShieldCheck, Play, Video, CheckCircle2,
  ChevronLeft, ChevronRight
} from "lucide-react";
import AnimatedWaveDivider from "./AnimatedWaveDivider";

interface WaterSportActivity {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  image: string;
  video: string;
  duration: string;
  location: string;
  suitability: string;
  officialDetails: string;
}

const WATER_SPORTS_DATA: WaterSportActivity[] = [
  {
    id: "scuba-diving",
    slug: "scuba-diving",
    name: "Scuba Diving",
    subtitle: "PADI Guided Coral Reef Diving Session",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839082/golden-pebble/videos/scuba-diving.mp4",
    duration: "30 Mins Underwater",
    location: "Port Blair & Havelock",
    suitability: "Beginners & Non-swimmers welcome",
    officialDetails: "Hotel Golden Pebble Concierge assists in-house guests with resort transfers and PADI-certified dive master sessions at Nemo Reef. Includes complete scuba equipment, safety briefing, and underwater photography/video assistance."
  },
  {
    id: "sea-walk",
    slug: "sea-walk",
    name: "Underwater Sea Walk",
    subtitle: "Seabed Walk with Continuous Fresh Air Helmet",
    icon: Waves,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838823/golden-pebble/images/activity/sea_walk_image.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839099/golden-pebble/videos/sea-walk.mp4",
    duration: "20 - 30 Mins Underwater",
    location: "Port Blair & Havelock",
    suitability: "Non-swimmers & All Families",
    officialDetails: "Walk naturally on the sandy sea floor wearing a specialized transparent helmet supplied with fresh air from the surface pontoon. Fully guided by certified sea walk divers with Hotel Golden Pebble transfer coordination."
  },
  {
    id: "snorkeling",
    slug: "snorkeling",
    name: "Snorkeling Excursion",
    subtitle: "Shallow Reef Marine Life Observation",
    icon: Waves,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838825/golden-pebble/images/activity/Snorkeling.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790920419/golden-pebble/videos/snorkeling-video-new.mp4",
    duration: "1 - 2 Hours",
    location: "Elephant Beach & Govind Nagar",
    suitability: "All Age Groups & Families",
    officialDetails: "Observe coral gardens and tropical marine species floating comfortably on the surface. Includes high-visibility mask, snorkel, certified life jacket, and guide support arranged by Hotel Golden Pebble."
  },
  {
    id: "sea-kayaking",
    slug: "sea-kayaking",
    name: "Sea & Mangrove Kayaking",
    subtitle: "Guided Estuary & Bioluminescence Kayaking",
    icon: Compass,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Mangrove%20Sea%20Kayaking.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790920469/golden-pebble/videos/mangrove-kayaking-new.mp4",
    duration: "2 Hours Session",
    location: "Havelock Mangrove Inlets",
    suitability: "Couples & Nature Enthusiasts",
    officialDetails: "Paddle through calm mangrove waterways or experience seasonal night bioluminescence tours led by experienced local naturalists. Kayaks, paddles, and life vests provided."
  },
  {
    id: "parasailing",
    slug: "parasailing",
    name: "Parasailing",
    subtitle: "High-Altitude Aerial Island Bay Flight",
    icon: Zap,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838822/golden-pebble/images/activity/Parasailing.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839080/golden-pebble/videos/parasailing.mp4",
    duration: "10 - 15 Mins Flight",
    location: "Havelock & Port Blair",
    suitability: "Couples & Thrill Seekers",
    officialDetails: "Soar 300 feet above turquoise waters towed by a high-powered winch boat equipped with certified marine harness and safety gear for panoramic island views."
  },
  {
    id: "jet-ski",
    slug: "jet-ski",
    name: "Jet Ski Ride",
    subtitle: "High-Speed Ocean Watercraft Wave Ride",
    icon: Zap,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Jet%20Ski%20Ride.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839057/golden-pebble/videos/jet-ski.mp4",
    duration: "10 Mins Ride",
    location: "Port Blair & Havelock",
    suitability: "All Guests & Adventure Lovers",
    officialDetails: "Speed across ocean waves on a powerful jet ski accompanied by certified safety instructors at Corbyn's Cove or Elephant Beach with hotel desk booking assistance."
  },
  {
    id: "semi-sub-marine",
    slug: "semi-sub-marine",
    name: "Semi Submarine",
    subtitle: "Air-Conditioned Coral Reef Window Viewing",
    icon: Compass,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838824/golden-pebble/images/activity/Semi%20Submarine.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    duration: "45 Mins Cruise",
    location: "Port Blair & Havelock",
    suitability: "Families, Children & Seniors",
    officialDetails: "View deep coral formations and tropical sea creatures from an air-conditioned underwater glass viewing cabin without getting wet."
  },
  {
    id: "glass-bottom",
    slug: "glass-bottom",
    name: "Glass Bottom Boat",
    subtitle: "Shallow Water Coral Reef Viewing Boat",
    icon: Sun,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838819/golden-pebble/images/activity/Glass%20Bottom%20Boat.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    duration: "15 - 20 Mins",
    location: "Elephant Beach & North Bay",
    suitability: "Kids & Senior Guests",
    officialDetails: "Observe coral reefs through clear glass panels built into the boat hull during a calm and stable boat cruise over shallow coral beds."
  },
  {
    id: "banana-sofa-rides",
    slug: "banana-sofa-rides",
    name: "Banana & Sofa Water Rides",
    subtitle: "Group Inflatable Towable Water Rides",
    icon: Sparkles,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790841869/golden-pebble/images/activity/Banana___Sofa_Water_Rides.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790838990/golden-pebble/videos/Banana_ride.mp4",
    duration: "10 - 15 Mins",
    location: "Havelock Island",
    suitability: "Groups & Families",
    officialDetails: "Enjoy fun ocean towable rides pulling groups across turquoise waves equipped with certified impact life jackets and professional boat captains."
  },
  {
    id: "dinner-cruise",
    slug: "dinner-cruise",
    name: "Night Harbour Dinner Cruise",
    subtitle: "Catamaran Cruise with Live Music & Buffet",
    icon: Ship,
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838821/golden-pebble/images/activity/Night%20Harbour%20Dinner%20Cruise.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839034/golden-pebble/videos/dinner-cruise.mp4",
    duration: "2 Hours Evening Cruise",
    location: "Port Blair Harbour",
    suitability: "Couples & Families",
    officialDetails: "Evening catamaran cruise around Port Blair harbor featuring live acoustic musical performances, buffet dining spread, and illuminated city coastline views."
  }
];

export default function UnforgettableActivitiesSection() {
  const [activeActivity, setActiveActivity] = useState<WaterSportActivity>(WATER_SPORTS_DATA[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activitiesTabsRef = useRef<HTMLDivElement>(null);
  const activitiesScrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const scrollActivities = (direction: "left" | "right") => {
    if (activitiesScrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      activitiesScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll active activity tab smoothly into the middle of the scroll container
  useEffect(() => {
    const activeTabEl = tabRefs.current[activeActivity.id];
    if (activeTabEl && activitiesTabsRef.current) {
      const container = activitiesTabsRef.current;
      const scrollLeft = activeTabEl.offsetLeft - (container.clientWidth / 2) + (activeTabEl.clientWidth / 2);
      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
    }
  }, [activeActivity.id]);

  const handleNextActivity = () => {
    const currentIndex = WATER_SPORTS_DATA.findIndex((act) => act.id === activeActivity.id);
    const nextIndex = (currentIndex + 1) % WATER_SPORTS_DATA.length;
    setActiveActivity(WATER_SPORTS_DATA[nextIndex]);
  };

  const handlePrevActivity = () => {
    const currentIndex = WATER_SPORTS_DATA.findIndex((act) => act.id === activeActivity.id);
    const prevIndex = (currentIndex - 1 + WATER_SPORTS_DATA.length) % WATER_SPORTS_DATA.length;
    setActiveActivity(WATER_SPORTS_DATA[prevIndex]);
  };

  // Guarantee Video Autoplay on Every Activity Tab Click
  useEffect(() => {
    const timer = setTimeout(() => {
      const video = videoRef.current;
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        video.currentTime = 0;
        video.load();
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log("Autoplay caught:", err);
          });
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [activeActivity.id, activeActivity.video]);

  const whatsappMessage = encodeURIComponent(
    `Hello Golden Pebble Concierge! I am interested in booking the "${activeActivity.name}" water sport activity during my stay. Please share official details and slot availability.`
  );

  return (
    <section className="relative py-4 sm:py-6 lg:py-3 overflow-hidden bg-[#0369A1] text-white">
      {/* TOP & BOTTOM ORGANIC WAVE DIVIDERS */}
      <div className="absolute top-0 left-0 right-0 z-10 opacity-40 pointer-events-none">
        <AnimatedWaveDivider topBgColor="#F8F6EF" waveFillColor="#0369A1" />
      </div>

      {/* FULL-WIDTH OCEAN UNDERWATER BACKDROP */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 sm:opacity-35">
        <Image
          src={activeActivity.image}
          alt={activeActivity.name}
          fill
          priority
          className="object-cover object-center contrast-[1.05] transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/75 via-[#0369A1]/55 to-[#075985]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0369A1] via-transparent to-[#0369A1]/60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex items-end justify-between mb-3 sm:mb-4 gap-3"
        >
          <div className="max-w-2xl">
            {/* Editorial Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white drop-shadow-md">
              Havelock{" "}
              <span className="font-script text-2xl sm:text-5xl lg:text-6xl text-[#E8DCC5] font-normal italic inline tracking-wide drop-shadow-sm">
                Island Experiences
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Scroll Left / Right Buttons (Mobile & Tablet) */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => scrollActivities("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/30 flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollActivities("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] border border-white/30 flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/activities"
              className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#F8F6EF] hover:bg-[#C5A46D] text-[#073F3B] hover:text-white px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl group shrink-0 border border-white/30 h-11"
            >
              <span>EXPLORE ALL EXPERIENCES →</span>
            </Link>
          </div>
        </motion.div>

        {/* MOBILE & TABLET HORIZONTAL HAND-SWIPE CAROUSEL (MATCHING PACKAGE SHOWCASE UX) */}
        <div className="block md:hidden mt-2 mb-2">
          <div
            ref={activitiesScrollRef}
            className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3.5 sm:gap-5 pb-4 pt-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {WATER_SPORTS_DATA.map((act) => {
              const whatsappMessageAct = encodeURIComponent(
                `Hello Golden Pebble Concierge! I am interested in booking the "${act.name}" water sport activity during my stay. Please share official details and slot availability.`
              );

              return (
                <div
                  key={act.id}
                  className="w-full sm:w-[320px] shrink-0 snap-center flex flex-col"
                >
                  <div className="bg-[#073F3B]/95 backdrop-blur-2xl rounded-2xl border-2 border-[#C5A46D]/60 p-4 shadow-xl text-white flex flex-col justify-between h-full group hover:border-[#C5A46D] transition-all">
                    {/* Media Screen */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#C5A46D]/50 shadow-md mb-3 bg-[#073F3B]">
                      <Image
                        src={act.image}
                        alt={act.name}
                        fill
                        sizes="(max-width: 768px) 85vw, 320px"
                        className="object-cover rounded-xl filter contrast-[1.04]"
                      />
                      <video
                        src={act.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={act.image}
                        className="w-full h-full object-cover transition-all duration-500 rounded-xl filter contrast-[1.04] relative z-10"
                      >
                        <source src={act.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-20" />

                      <div className="absolute top-2.5 left-2.5 bg-[#073F3B]/90 text-[#E8DCC5] text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C5A46D]/50 z-30 flex items-center gap-1 backdrop-blur-md shadow-sm">
                        <Video className="w-3 h-3 text-[#C5A46D]" />
                        <span>HD PREVIEW</span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-30 flex items-center justify-between">
                        <span className="text-xs font-serif font-bold text-white drop-shadow">
                          {act.name}
                        </span>
                        <span className="text-[10px] font-sans font-bold text-[#E8DCC5] uppercase tracking-wider">
                          {act.location}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#C5A46D] transition-colors">
                          {act.name}
                        </h3>
                        <p className="text-xs text-[#E8DCC5] font-medium line-clamp-1 mb-2">
                          {act.subtitle}
                        </p>
                        <p className="text-xs text-[#F8F6EF]/90 font-light leading-relaxed line-clamp-2 mb-3">
                          {act.officialDetails}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/15 mt-auto">
                        <div className="grid grid-cols-2 gap-2 text-[11px] mb-3">
                          <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                            <span className="truncate">{act.duration}</span>
                          </div>
                          <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                            <span className="truncate">{act.suitability.split("&")[0]}</span>
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/919434288856?text=${whatsappMessageAct}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#C5A46D] hover:bg-white text-[#073F3B] hover:text-[#073F3B] py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-center"
                        >
                          <span>BOOK {act.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#073F3B] group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP WATER SPORTS THEATER VIEW */}
        <div className="hidden md:block">
          {/* CLICK PROMPT BADGE & CAROUSEL ARROWS */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#C5A46D] text-[#073F3B] px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-lg">
              <MousePointerClick className="w-4 h-4 text-[#073F3B] shrink-0" />
              <span>TAP OR SWIPE ARROWS TO EXPLORE ALL 10 WATER ACTIVITIES</span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 ml-auto">
              <button
                onClick={handlePrevActivity}
                aria-label="Previous Activity"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#C5A46D] hover:text-[#073F3B] text-white flex items-center justify-center transition-all border border-white/30 active:scale-95 shadow cursor-pointer"
              >
                <ChevronLeft className="w-4.5 h-4.5 shrink-0" />
              </button>
              <button
                onClick={handleNextActivity}
                aria-label="Next Activity"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#C5A46D] hover:text-[#073F3B] text-white flex items-center justify-center transition-all border border-white/30 active:scale-95 shadow cursor-pointer"
              >
                <ChevronRight className="w-4.5 h-4.5 shrink-0" />
              </button>
            </div>
          </div>

          {/* WATER SPORTS SELECTOR TABS STRIP */}
          <div
            ref={activitiesTabsRef}
            className="flex flex-wrap justify-center gap-2.5 pb-3 pt-1 px-0.5"
          >
            {WATER_SPORTS_DATA.map((act, index) => {
              const IconComp = act.icon;
              const isActive = activeActivity.id === act.id;

              return (
                <motion.button
                  key={act.id}
                  ref={(el) => { tabRefs.current[act.id] = el; }}
                  onClick={() => setActiveActivity(act)}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group/btn cursor-pointer shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl transition-all duration-300 border text-left ${
                    isActive
                      ? "bg-[#C5A46D] border-white text-[#073F3B] shadow-[0_0_25px_rgba(197,164,109,0.7)] scale-105 font-bold"
                      : "bg-white/15 hover:bg-white/30 border-white/30 text-white shadow-md backdrop-blur-md"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-[#073F3B] text-[#C5A46D]" : "bg-white/20 text-white group-hover/btn:bg-white group-hover/btn:text-[#073F3B]"
                  } transition-colors`}>
                    <IconComp className="w-4 h-4 shrink-0" />
                  </div>

                  <div>
                    <div className="text-xs font-sans font-bold tracking-wide uppercase flex items-center gap-1.5">
                      <span>{act.name}</span>
                      {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#073F3B] shrink-0" />}
                    </div>
                    <div className={`text-xs font-sans font-semibold flex items-center gap-1 ${isActive ? "text-[#073F3B]" : "text-[#E8DCC5]"}`}>
                      <Play className="w-2.5 h-2.5 fill-current shrink-0" />
                      <span>Autoplay Video</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* LIVE WATER SPORTS VIDEO THEATER SCREEN */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeActivity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 bg-[#073F3B]/95 backdrop-blur-2xl rounded-3xl border-2 border-[#C5A46D]/60 p-5 sm:p-6 shadow-2xl relative overflow-hidden text-white flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center"
            >
              {/* Left Flying View Autoplay Video Screen Container */}
              <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:col-span-5 relative flex items-center justify-center mx-auto my-auto"
              >
                <div className="relative aspect-[16/9] w-full max-w-lg rounded-2xl overflow-hidden border-2 border-[#C5A46D]/60 shadow-2xl group bg-[#073F3B] mx-auto my-auto flex items-center justify-center">
                  <Image
                    src={activeActivity.image}
                    alt={activeActivity.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover rounded-2xl filter contrast-[1.04] brightness-[1.02]"
                  />

                  <video
                    ref={videoRef}
                    key={activeActivity.video}
                    src={activeActivity.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={activeActivity.image}
                    className="w-full h-full object-cover transition-all duration-500 rounded-2xl filter contrast-[1.04] brightness-[1.02] relative z-10 mx-auto my-auto"
                  >
                    <source src={activeActivity.video} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-20" />

                  <div className="absolute top-3 left-3 bg-[#073F3B]/90 backdrop-blur-md text-[#E8DCC5] text-xs font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#C5A46D]/60 flex items-center gap-1.5 shadow-md z-20">
                    <Video className="w-3 h-3 text-[#C5A46D]" />
                    <span>COMPACT HD PREVIEW</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                    <span className="text-xs font-sans text-[#E8DCC5] font-semibold uppercase tracking-wider block drop-shadow">
                      Curated Guest Activity
                    </span>
                    <span className="font-serif text-lg font-bold text-white leading-tight drop-shadow-md">
                      {activeActivity.name}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Activity Details */}
              <div className="w-full lg:col-span-7 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-sans font-bold tracking-[0.2em] uppercase mb-2">
                    <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>{activeActivity.location}</span>
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-white leading-tight">
                    {activeActivity.name}
                  </h3>
                  <p className="font-sans text-sm text-[#E8DCC5] font-medium mt-1">
                    {activeActivity.subtitle}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                  className="relative pl-3.5 border-l-2 border-[#C5A46D]"
                >
                  <p className="font-sans text-sm text-[#F8F6EF]/90 font-light leading-relaxed">
                    {activeActivity.officialDetails}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#E8DCC5] bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Official Activity • Direct Hotel Golden Pebble Desk Coordination (+91 9434288856)</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/15 text-xs"
                >
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <div>
                      <span className="text-xs text-white/70 font-sans uppercase block">Duration</span>
                      <span className="text-sm font-bold text-white">{activeActivity.duration}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <div>
                      <span className="text-xs text-white/70 font-sans uppercase block">Suitability</span>
                      <span className="text-sm font-bold text-white">{activeActivity.suitability}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <div>
                      <span className="text-xs text-white/70 font-sans uppercase block">Location</span>
                      <span className="text-sm font-bold text-white">{activeActivity.location}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
                  className="pt-3 flex items-center gap-3"
                >
                  <a
                    href={`https://wa.me/919434288856?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-6 min-h-[48px] py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group text-center"
                  >
                    <span>ENQUIRE ABOUT {activeActivity.name.toUpperCase()} →</span>
                  </a>

                  <Link
                    href="/activities"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 min-h-[48px] py-3 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all border border-white/20 text-center"
                  >
                    <span>EXPLORE ALL EXPERIENCES →</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-6 flex sm:hidden justify-center w-full">
          <Link
            href="/activities"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] font-bold text-xs uppercase tracking-wider px-6 min-h-[48px] py-3 rounded-full shadow-lg transition-all duration-300 w-full max-w-sm text-center"
          >
            <span>EXPLORE ALL EXPERIENCES →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
