"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoImageCarouselProps {
  images: string[];
  altText: string;
  aspectRatioClassName?: string;
  sizes?: string;
  intervalMs?: number;
  delayMs?: number;
  showControls?: boolean;
  children?: React.ReactNode; // Optional overlays like Category Badge / Location Pills
}

export default function AutoImageCarousel({
  images,
  altText,
  aspectRatioClassName = "relative h-48 w-full",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  intervalMs = 3500,
  delayMs = 0,
  showControls = true,
  children,
}: AutoImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback if images array is empty
  const imageList = images && images.length > 0 ? images : ["https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838970/golden-pebble/images/rooms/golden-pebble-room-1.jpg"];

  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;

    let intervalTimer: NodeJS.Timeout;
    const initialDelayTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);

      intervalTimer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, intervalMs);
    }, delayMs);

    return () => {
      clearTimeout(initialDelayTimer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [imageList.length, intervalMs, delayMs, isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div
      className={`${aspectRatioClassName} overflow-hidden group/carousel relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageList.map((img, idx) => (
        <div
          key={img + idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={img}
            alt={`${altText} - photo ${idx + 1}`}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Children overlays (Badges, tags, titles, etc.) */}
      {children}

      {/* Manual Navigation Controls & Indicators if multiple images */}
      {imageList.length > 1 && (
        <>
          {showControls && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer active:scale-95 shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 right-3 z-20 flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm pointer-events-auto">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-4 bg-[#C9A66B]" : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
