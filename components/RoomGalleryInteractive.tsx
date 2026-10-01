"use client";

import { useState } from "react";
import Image from "next/image";

interface RoomGalleryProps {
  mainImage: string;
  gallery: string[];
  roomName: string;
}

export default function RoomGalleryInteractive({ mainImage, gallery, roomName }: RoomGalleryProps) {
  const allImages = gallery && gallery.length > 0 ? gallery : [mainImage];
  const [activeImage, setActiveImage] = useState(mainImage);

  return (
    <div className="space-y-4">
      {/* FIRST ROW: COVER ENTIRE ROOM IMAGE */}
      <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E8DCC5] group">
        <Image
          src={activeImage}
          alt={roomName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 bg-[#073F3B]/90 text-white text-xs font-sans font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#C5A46D]/60 shadow-md">
          {roomName} Photo Gallery
        </div>
      </div>

      {/* BELOW MAIN COVER: SPECIFIC ROOM THUMBNAIL PREVIEWS */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
        {allImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(img)}
            type="button"
            className={`relative h-20 sm:h-24 rounded-xl overflow-hidden transition-all duration-300 border-2 cursor-pointer ${
              activeImage === img
                ? "border-[#C5A46D] shadow-md ring-2 ring-[#C5A46D]/40 scale-105"
                : "border-[#E8DCC5] opacity-75 hover:opacity-100 hover:border-[#C5A46D]"
            }`}
          >
            <Image
              src={img}
              alt={`${roomName} photo ${i + 1}`}
              fill
              sizes="200px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
