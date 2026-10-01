"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { Location } from "@/lib/data/locations";
import AutoImageCarousel from "./AutoImageCarousel";

interface LocationCardProps {
  location: Location;
  index?: number;
}

export default function LocationCard({ location, index = 0 }: LocationCardProps) {
  // Row stagger delay so cards in each row animate sequentially as they scroll into view
  const staggerDelay = (index % 3) * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: staggerDelay,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCC5]/70 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Auto-scrolling 2-Image Carousel Header with staggered delay per card */}
        <AutoImageCarousel
          key={location.id}
          images={location.images && location.images.length > 0 ? location.images : [location.image]}
          altText={location.altText}
          aspectRatioClassName="relative h-48 w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          delayMs={index * 600}
        >
          {/* Category Tag Badge */}
          <div className="absolute top-3 left-3 bg-[#063F3C]/90 text-[#F8F6EF] px-3 py-1 rounded-full text-[10.5px] font-semibold tracking-wide backdrop-blur-sm flex items-center gap-1.5 border border-[#C9A66B]/40 shadow-sm z-10">
            <Compass className="w-3 h-3 text-[#C9A66B]" />
            <span>{location.category}</span>
          </div>

          {/* Location Area Pill */}
          <div className="absolute bottom-3 left-3 bg-black/60 text-[#E8DCC5] px-2.5 py-0.5 rounded-md text-[10px] font-medium tracking-wide backdrop-blur-sm flex items-center gap-1 z-10">
            <MapPin className="w-2.5 h-2.5 text-[#C9A66B]" />
            <span>{location.locationArea}</span>
          </div>
        </AutoImageCarousel>

        <div className="p-5">
          <h3 className="font-serif text-xl font-semibold text-[#063F3C] mb-1 group-hover:text-[#E98268] transition-colors">
            {location.name}
          </h3>
          <p className="text-xs text-[#C9A66B] font-medium mb-2">{location.subtitle}</p>
          <p className="text-xs text-[#1C2A28]/70 line-clamp-3 mb-4 font-light leading-relaxed">
            {location.shortDescription}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between border-t border-[#E8DCC5]/30 mt-2">
        <span className="text-[11px] text-[#1C2A28]/70 flex items-center gap-1 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#063F3C]" />
          <span>{location.island}</span>
        </span>

        <Link
          href={`/nearby-locations/${location.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#063F3C] hover:text-[#E98268] transition-colors group/link"
          title={`Explore details about ${location.name}`}
        >
          <span>Explore Details</span>
          <div className="w-7 h-7 rounded-full bg-[#F8F6EF] text-[#063F3C] group-hover/link:bg-[#063F3C] group-hover/link:text-white flex items-center justify-center transition-colors border border-[#E8DCC5]">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
