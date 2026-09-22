"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Package } from "@/lib/data/packages";

interface PackageCardProps {
  pkg: Package;
  index?: number;
}

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 20,
        scale: shouldReduceMotion ? 1 : 0.97
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1.0
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group bg-white rounded-3xl overflow-hidden border border-[#E8E0D2] border-t-2 border-t-[#C5A46D] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between h-full relative"
    >
      <div>
        {/* Landscape Photography Container with Continuous Ken Burns Motion */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-[1.75rem]">
          <div className="absolute inset-0 animate-kenburns-10s">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover contrast-[1.05] saturate-[1.05]"
            />
          </div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/80 via-black/20 to-transparent" />

          {/* Top Duration Pill with Gold Border */}
          <div className="absolute top-3.5 right-3.5 bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#C5A46D]/50 shadow-md">
            {pkg.duration}
          </div>

          {/* Handwritten Sub-tag */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="font-script text-xl text-[#E8DCC5] drop-shadow-md block">
              Island Escape ✨
            </span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Small uppercase category label with Gold Star */}
            <div className="flex items-center gap-1.5 mb-2">
              <Star className="w-3 h-3 text-[#C5A46D] fill-[#C5A46D]" />
              <span className="text-[10px] font-sans tracking-[0.22em] uppercase text-[#C5A46D] font-bold block">
                HAVELOCK COLLECTION
              </span>
            </div>

            {/* Package Card Title (Cormorant Garamond 500 weight, deep teal #073F3B) */}
            <h3 className="font-serif text-[24px] sm:text-[27px] font-medium text-[#073F3B] leading-[1.2] tracking-tight group-hover:text-[#C5A46D] transition-colors mb-3 text-balance">
              {pkg.name}
            </h3>

            {/* Short Description (Manrope 400 weight) */}
            <p className="font-sans font-normal text-xs sm:text-sm text-[#4E5C58] leading-relaxed line-clamp-2 mb-4">
              {pkg.shortDescription}
            </p>

            {/* Minimal Inclusion Text Line */}
            {pkg.inclusions && pkg.inclusions[0] && (
              <div className="flex items-center gap-2 text-xs font-sans text-[#073F3B] font-semibold border-t border-[#E8E0D2] pt-3.5 mb-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#C5A46D]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#073F3B]" />
                </div>
                <span className="truncate font-medium text-[#4E5C58]">{pkg.inclusions[0]}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pricing & "EXPLORE PACKAGE →" Link Footer */}
      <div className="p-6 pt-3 bg-[#F8F6EF]/40 border-t border-[#E8E0D2] flex items-center justify-between mt-auto">
        <div>
          <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#66736F] font-bold block mb-0.5">
            STARTING FROM
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-serif font-medium text-xl lg:text-2xl text-[#073F3B]">
              {pkg.startingPrice}
            </span>
            <span className="text-[11px] font-sans text-[#66736F] font-normal">/ {pkg.priceBasis}</span>
          </div>
        </div>

        <Link
          href={`/packages/${pkg.slug}`}
          className="inline-flex items-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-4 py-2.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group/link"
        >
          <span>EXPLORE</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover/link:text-[#073F3B] transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
