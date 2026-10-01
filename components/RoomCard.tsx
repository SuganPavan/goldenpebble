"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, Maximize2, Users } from "lucide-react";
import { Room } from "@/lib/data/rooms";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DCC5]/70 flex flex-col justify-between">
      <div>
        {/* Room Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-[#063F3C]/90 text-[#F8F6EF] px-3 py-1 rounded-full text-xs font-serif font-medium tracking-wide backdrop-blur-sm">
            {room.sizeSqFt} Sq Ft Sanctuary
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="font-serif text-2xl font-semibold text-[#063F3C] mb-1 group-hover:text-[#E98268] transition-colors">
            {room.name}
          </h3>
          <p className="text-xs text-[#C9A66B] font-medium tracking-wide uppercase mb-3">
            {room.view}
          </p>
          <p className="text-sm text-[#1C2A28]/70 line-clamp-3 mb-6 font-light leading-relaxed">
            {room.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/40 mb-6 text-xs text-[#063F3C]">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-[#C9A66B]" />
              <span>{room.sizeSqFt} sq. ft.</span>
            </div>
            <div className="flex items-center gap-2">
              <BedDouble className="w-4 h-4 text-[#C9A66B]" />
              <span className="truncate">{room.bedType}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Users className="w-4 h-4 text-[#C9A66B]" />
              <span>Max: {room.maxOccupancy}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Footer Actions */}
      <div className="p-6 pt-0 bg-white flex items-center justify-between border-t border-[#E8DCC5]/30">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#063F3C]">
              {room.seasonRate.rackRate}
            </span>
            <span className="text-xs text-[#1C2A28]/70">/ Night</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#1C2A28]/70 block font-sans font-medium mt-0.5">
            Rack Rate • 5% GST included
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/rooms/${room.slug}`}
            className="px-4 py-2.5 rounded-full bg-[#063F3C] text-white hover:bg-[#073D37] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
          >
            <span>View Room</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
