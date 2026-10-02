"use client";

import Link from "next/link";
import { Compass, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

export default function HomePagePackageShowcase() {
  const durationQuickLinks = [
    { label: "4 Nights / 5 Days", href: "/packages?duration=4" },
    { label: "5 Nights / 6 Days", href: "/packages?duration=5" },
    { label: "6 Nights / 7 Days", href: "/packages?duration=6" },
    { label: "13 Nights / 14 Days", href: "/packages?duration=13" },
  ];

  return (
    <div className="relative max-w-3xl mx-auto w-full pt-2 sm:pt-4">
      <div className="group p-2 sm:p-3 rounded-[2.25rem] bg-[#073F3B] border-2 border-[#C5A46D]/60 shadow-xl hover:shadow-2xl hover:border-[#C5A46D] transition-all duration-500 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A524D] via-[#073F3B] to-black/80 pointer-events-none" />

        <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[10px] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>EXPLORE ALL ITINERARIES</span>
            </div>

            <Link href="/packages" className="block group/title">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 group-hover/title:text-[#C5A46D] transition-colors flex items-center gap-3">
                <span>Explore All Andaman Tour Packages</span>
                <ArrowRight className="w-6 h-6 text-[#C5A46D] shrink-0 group-hover/title:translate-x-2 transition-transform" />
              </h3>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-[#F8F6EF]/80 font-light leading-relaxed mb-6 max-w-xl">
              Browse our complete range of island tour packages categorized by night breakdown and destinations across Swaraj Dweep, Neil Island, and Port Blair.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/15">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase font-bold text-[#C5A46D] block mb-2">
                FILTER BY DURATION:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {durationQuickLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-[#C5A46D]/20 border border-[#C5A46D]/30 hover:border-[#C5A46D] transition-all duration-300 group/link"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-white group-hover/link:text-[#C5A46D] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C5A46D] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
