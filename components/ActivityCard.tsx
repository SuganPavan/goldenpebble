"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import { Activity } from "@/lib/data/activities";

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

export default function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
  const staggerDelay = (index % 4) * 0.08;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: staggerDelay,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DCC5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Card Image Container */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-[#E8DCC5]/60">
          <Image
            src={activity.image}
            alt={`${activity.name} water activity experience in Havelock Island`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-108 contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Optional Activity Badge */}
          <div className="absolute top-3 left-3 bg-[#073F3B]/90 backdrop-blur-md text-[#C5A46D] border border-[#C5A46D]/40 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C5A46D]" />
            <span>Optional Activity</span>
          </div>

          {/* Location Tag on Image */}
          {activity.location && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1 text-white text-xs font-sans font-medium drop-shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
              <span className="truncate text-[#E8DCC5]">{activity.location}</span>
            </div>
          )}
        </div>

        {/* Card Details */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#073F3B] group-hover:text-[#C5A46D] transition-colors leading-tight">
            {activity.name}
          </h3>

          {/* Rate Display */}
          {activity.price && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DCC5] text-[#073F3B]">
              <span className="text-[10px] font-sans uppercase font-bold text-[#C5A46D] tracking-wider">Rate:</span>
              <span className="font-serif font-bold text-sm sm:text-base text-[#073F3B]">{activity.price}</span>
            </div>
          )}

          <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed line-clamp-2">
            {activity.shortDescription}
          </p>

          {/* Duration info */}
          {activity.duration && (
            <div className="pt-3 border-t border-[#E8DCC5]/60 flex items-center justify-between text-xs text-[#073F3B] font-medium">
              <div className="flex items-center gap-1.5 text-[#4E5C58]">
                <Clock className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                <span>{activity.duration}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <Link
          href={`/contact?activity=${activity.slug}`}
          className="w-full inline-flex items-center justify-between bg-[#073F3B] group-hover:bg-[#C5A46D] text-white group-hover:text-[#073F3B] px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
        >
          <span>ENQUIRE ABOUT THIS ACTIVITY</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
