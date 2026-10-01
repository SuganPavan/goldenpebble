"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Check, Sparkles } from "lucide-react";
import { Package } from "@/lib/data/packages";

interface PackageCardProps {
  pkg: Package;
  index?: number;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div
      className="group p-2 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-[#C5A46D]/60 transition-all duration-500 flex flex-col justify-between h-full relative"
    >
      <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.5rem)] overflow-hidden border border-[#E8DCC5]/60 flex flex-col h-full justify-between">
        <div>
          {/* High-Quality Image Container */}
          <div className="relative h-52 sm:h-52 md:h-48 lg:h-44 w-full overflow-hidden rounded-t-[calc(2.25rem-0.5rem)]">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-108 transition-transform duration-700 contrast-[1.03]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/85 via-black/25 to-black/10 group-hover:from-[#073F3B]/90 transition-colors duration-500" />

            {/* Duration Badge */}
            <div className="absolute top-3.5 right-3.5 bg-[#073F3B]/90 backdrop-blur-md text-[#F8F6EF] text-xs font-sans font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border border-[#C5A46D]/60 shadow-md group-hover:border-[#C5A46D] group-hover:bg-[#073F3B] transition-all">
              {pkg.duration} {pkg.nightSplit}
            </div>

            {/* Island Route Tag on Image */}
            <div className="absolute bottom-3 left-4 right-4 text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
              <span className="font-sans text-xs sm:text-sm font-semibold text-[#E8DCC5] truncate drop-shadow-sm">
                {pkg.route}
              </span>
            </div>
          </div>

          {/* Card Body Content */}
          <div className="p-5 sm:p-6 lg:p-4 flex-1 flex flex-col justify-between">
            <div>
              {/* Package Title Container */}
              <div className="relative mb-3 lg:mb-2 p-2 -mx-2 rounded-2xl group-hover:bg-[#073F3B]/[0.04] group-hover:border group-hover:border-[#C5A46D]/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 mb-1">
                  <Sparkles className="w-3 h-3 text-[#C5A46D]" />
                  <span>FEATURED ITINERARY</span>
                </div>

                <h3 className="font-serif text-2xl lg:text-xl font-bold text-[#073F3B] leading-tight group-hover:text-[#C5A46D] transition-colors duration-300 relative inline-block">
                  {pkg.name}
                  {/* Highlight Underline Bar on Hover */}
                  <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-[#C5A46D] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </h3>
              </div>

              {/* Short Description */}
              <p className="font-sans text-sm sm:text-sm text-[#4E5C58] font-light leading-relaxed mb-4 lg:mb-2 line-clamp-3 lg:line-clamp-2">
                {pkg.shortDescription}
              </p>

              {/* Key Highlights List */}
              <div className="pt-3 lg:pt-2 border-t border-[#E8DCC5]/70 space-y-1.5 lg:space-y-1">
                <span className="text-xs font-sans tracking-[0.2em] uppercase font-bold text-[#073F3B] block mb-2 lg:mb-1">
                  KEY HIGHLIGHTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#073F3B]">
                  {pkg.highlightsList.slice(0, 5).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 min-w-0">
                      <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span className="text-[13px] sm:text-sm font-medium text-[#4E5C58] truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer Bar */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-[#E8DCC5]/70 flex items-center justify-between gap-2 mt-auto rounded-b-[calc(2.25rem-0.5rem)]">
          <span className="text-xs font-sans font-bold text-[#073F3B] uppercase tracking-wider group-hover:text-[#C5A46D] transition-colors shrink-0">
            Package Itinerary
          </span>

          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex items-center justify-between gap-1.5 sm:gap-2 bg-[#073F3B] group-hover:bg-[#C5A46D] text-white group-hover:text-[#073F3B] px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group/btn shrink-0"
          >
            <span className="whitespace-nowrap">VIEW PACKAGE →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
