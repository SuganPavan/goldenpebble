"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function PackageHeaderAnimation() {
  const shouldReduceMotion = useReducedMotion();

  const images = [
    {
      src: "/images/packages/havelock-escape.webp",
      alt: "Radhanagar Beach Havelock",
      tag: "Radhanagar Beach",
      offsetX: "-210px",
      rotate: -8,
      delay: 0.1,
    },
    {
      src: "/images/packages/port-blair-cultural-expedition.jpg",
      alt: "Cellular Jail Port Blair",
      tag: "Cellular Jail",
      offsetX: "-105px",
      rotate: -4,
      delay: 0.2,
    },
    {
      src: "/images/packages/andaman-heritage-explorer.webp",
      alt: "Elephant Beach Havelock",
      tag: "Elephant Beach",
      offsetX: "0px",
      rotate: 0,
      delay: 0.3,
      isCenter: true,
    },
    {
      src: "/images/packages/andaman-island-trinity.jpg",
      alt: "Neil Natural Bridge",
      tag: "Natural Rock Bridge",
      offsetX: "105px",
      rotate: 4,
      delay: 0.2,
    },
    {
      src: "/images/packages/grand-andaman-leisure.jpg",
      alt: "Chidiyatapu Sunset",
      tag: "Chidiyatapu Sunset",
      offsetX: "210px",
      rotate: 8,
      delay: 0.1,
    },
  ];

  return (
    <div className="relative py-4 sm:py-6 my-2 sm:my-4 w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Ambient Radial Luxury Lighting behind animation */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(197, 164, 109, 0.25) 0%, transparent 70%)"
        }}
      />

      {/* Center-to-Left and Right Expanding Cards Showcase */}
      <div className="relative h-44 sm:h-52 w-full max-w-4xl flex items-center justify-center z-10">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.35,
              rotate: 0,
            }}
            whileInView={{
              x: shouldReduceMotion ? 0 : img.offsetX,
              opacity: 1,
              scale: img.isCenter ? 1.08 : 0.92,
              rotate: shouldReduceMotion ? 0 : img.rotate,
            }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.85,
              delay: img.delay,
              ease: [0.34, 1.56, 0.64, 1], // Spring curve for smooth center-out expansion
            }}
            whileHover={{
              scale: 1.18,
              rotate: 0,
              zIndex: 40,
              transition: { duration: 0.3 },
            }}
            className={`absolute rounded-2xl overflow-hidden shadow-xl border-2 ${
              img.isCenter ? "border-[#C5A46D] shadow-2xl z-20" : "border-white/90 z-10"
            } bg-white cursor-pointer group`}
            style={{
              width: "clamp(120px, 20vw, 180px)",
              height: "clamp(135px, 22vw, 185px)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="200px"
                className="object-cover group-hover:scale-110 transition-transform duration-500 contrast-[1.04]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Destination Tag Pill */}
              <div className="absolute bottom-2 left-1.5 right-1.5 flex items-center justify-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-[#C5A46D]/60 text-white text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider truncate">
                <MapPin className="w-2.5 h-2.5 text-[#C5A46D] shrink-0" />
                <span className="truncate">{img.tag}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtitle Indicator */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C5A46D] uppercase mt-3 z-10"
      >
        ✦ EXPLORE FEATURED ISLAND DESTINATIONS ✦
      </motion.p>
    </div>
  );
}
