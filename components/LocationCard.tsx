"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Compass } from "lucide-react";
import { Location } from "@/lib/data/locations";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCC5]/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={location.image}
            alt={location.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#063F3C]/90 text-[#F8F6EF] px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#C9A66B]" />
            {location.distance}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-xl font-semibold text-[#063F3C] mb-1 group-hover:text-[#E98268] transition-colors">
            {location.name}
          </h3>
          <p className="text-xs text-[#C9A66B] font-medium mb-2">{location.subtitle}</p>
          <p className="text-xs text-[#1C2A28]/70 line-clamp-2 mb-4 font-light leading-relaxed">
            {location.shortDescription}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between border-t border-[#E8DCC5]/30 mt-2">
        <span className="text-[11px] text-[#1C2A28]/70 flex items-center gap-1 font-medium">
          <Compass className="w-3.5 h-3.5 text-[#063F3C]" />
          {location.travelTime}
        </span>

        <Link
          href={`/nearby-locations/${location.slug}`}
          className="w-8 h-8 rounded-full bg-[#F8F6EF] text-[#063F3C] group-hover:bg-[#063F3C] group-hover:text-white flex items-center justify-center transition-colors border border-[#E8DCC5]"
          title="View Attraction Details"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
