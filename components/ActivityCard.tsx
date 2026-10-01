"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Activity } from "@/lib/data/activities";

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

export default function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
  const staggerDelay = (index % 4) * 0.08;

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
      className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCC5]/60 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
    >
      <div>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={activity.image}
            alt={activity.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#063F3C]/90 text-[#F8F6EF] px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider backdrop-blur-sm">
            {activity.category}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-xl font-semibold text-[#063F3C] mb-1 group-hover:text-[#E98268] transition-colors">
            {activity.name}
          </h3>
          <p className="text-xs text-[#1C2A28]/70 line-clamp-2 mb-4 font-light leading-relaxed">
            {activity.shortDescription}
          </p>

          <div className="flex items-center gap-3 text-xs text-[#063F3C] font-medium pt-3 border-t border-[#E8DCC5]/40">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
              {activity.duration}
            </span>
            <span className="flex items-center gap-1 text-[#1C2A28]/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A66B]" />
              {activity.suitability}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <Link
          href={`/activities/${activity.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#063F3C] group-hover:text-[#E98268] uppercase tracking-wider transition-colors"
        >
          <span>Explore Activity</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
