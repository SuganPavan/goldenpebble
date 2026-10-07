"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, Sparkles, CheckCircle2, Layers, Compass } from "lucide-react";
import { PACKAGES } from "@/lib/data/packages";

export default function ActivitiesPackageShowcase() {
  // Duration Filter Tabs as requested: 3 Nights, 4 Nights, 5 Nights, 13 Nights, and Show All
  const durationTabs = [
    { id: "all", label: "All Curated Tours", subtitle: "Featured Selections" },
    { id: "3", nights: 3, label: "3 Nights / 4 Days", subtitle: "Short Island Escape" },
    { id: "4", nights: 4, label: "4 Nights / 5 Days", subtitle: "Popular Explorer" },
    { id: "5", nights: 5, label: "5 Nights / 6 Days", subtitle: "Relaxed Island Tour" },
    { id: "13", nights: 13, label: "13 Nights / 14 Days", subtitle: "Grand Odyssey" },
  ];

  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter packages based on active tab selection
  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeTab === "all") {
      // Showcase representative choices across durations
      return ["andaman-glimpse", "island-explorer", "andaman-highlights", "grand-andaman-odyssey"].includes(pkg.slug);
    }
    return pkg.nights === Number(activeTab);
  });

  return (
    <div className="space-y-8">
      {/* 1. ANIMATED DURATION TAB SELECTOR WITH SEA BLUE ACCENT */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#E8DCC5] shadow-md space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C5A46D]" />
            <span className="text-xs font-sans uppercase font-bold tracking-[0.2em] text-[#073F3B]">
              Filter By Stay Duration
            </span>
          </div>
          <span className="text-xs text-[#4E5C58] font-sans hidden sm:inline">
            Click duration tab to view matching packages
          </span>
        </div>

        {/* Responsive Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {durationTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = tab.id === "all" 
              ? PACKAGES.length 
              : PACKAGES.filter(p => p.nights === tab.nights).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`relative group p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-[#083344] via-[#0E4A5E] to-[#083344] text-white border-[#C5A46D] shadow-lg ring-2 ring-[#C5A46D]/50 scale-[1.02]"
                    : "bg-[#FAF8F5] text-[#073F3B] border-[#E8DCC5] hover:border-[#C5A46D]/60 hover:bg-white hover:shadow-sm"
                }`}
              >
                {/* Active Gold Top Accent */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A46D]" />
                )}

                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C5A46D]">
                    {tab.id === "all" ? "ALL PACKAGES" : `${tab.nights} NIGHTS`}
                  </span>
                  <span className={`text-[10px] font-sans font-bold px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? "bg-[#C5A46D] text-[#082F49]" 
                      : "bg-[#082F49]/10 text-[#073F3B]"
                  }`}>
                    {count}
                  </span>
                </div>

                <div className="font-serif font-bold text-xs sm:text-sm line-clamp-1">
                  {tab.label}
                </div>

                <div className={`text-[10.5px] font-sans truncate mt-0.5 ${
                  isActive ? "text-[#E8DCC5]" : "text-[#4E5C58]"
                }`}>
                  {tab.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. ANIMATED PACKAGE CARDS DISPLAY */}
      <div className="min-h-[320px]">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="group h-full bg-white rounded-3xl border border-[#E8DCC5] hover:border-[#C5A46D] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Package Cover Image with Sea Blue Backdrop & Badge */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#082F49]">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Duration Badge in Sea Blue Glass */}
                    <div className="absolute top-3 left-3 bg-[#082F49]/90 backdrop-blur-md border border-[#C5A46D]/60 text-white px-3 py-1 rounded-full text-[11px] font-sans font-bold flex items-center gap-1.5 shadow-md">
                      <Clock className="w-3 h-3 text-[#C5A46D]" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Night Split Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#F8F6EF]">
                      <span className="text-[11px] font-sans font-medium bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                        {pkg.nightSplit}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3.5">
                    {/* Route */}
                    <div className="flex items-center gap-1.5 text-xs text-[#C5A46D] font-sans font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{pkg.route}</span>
                    </div>

                    {/* Title */}
                    <Link href={`/packages/${pkg.slug}`} className="block group/title">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#073F3B] group-hover/title:text-[#C5A46D] transition-colors line-clamp-1">
                        {pkg.name}
                      </h3>
                    </Link>

                    {/* Short Description */}
                    <p className="font-sans text-xs text-[#4E5C58] leading-relaxed font-light line-clamp-2">
                      {pkg.shortDescription}
                    </p>

                    {/* Activity & Excursion Inclusions */}
                    <div className="pt-2 border-t border-[#E8DCC5]/60 space-y-1.5">
                      <span className="text-[10px] font-sans uppercase font-bold text-[#073F3B] tracking-wider block">
                        KEY INCLUDED EXCURSIONS:
                      </span>
                      {pkg.highlightsList.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] font-sans text-[#073F3B]/80 leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-[#C5A46D] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#082F49]/5 hover:bg-[#082F49] text-[#073F3B] hover:text-white border border-[#082F49]/20 hover:border-[#082F49] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xs"
                  >
                    <span>View Full Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-3xl border border-[#E8DCC5] text-center space-y-3">
            <Layers className="w-8 h-8 text-[#C5A46D] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#073F3B]">No packages found for this duration</h4>
            <p className="text-xs text-[#4E5C58]">Please select another duration tab or view all available packages.</p>
            <button
              onClick={() => setActiveTab("all")}
              className="px-4 py-2 rounded-full bg-[#082F49] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A46D] hover:text-[#082F49] transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* 3. VIEW ALL PACKAGES ANIMATED SEA BLUE BANNER */}
      <div className="bg-gradient-to-r from-[#083344] via-[#0E4A5E] to-[#083344] p-6 sm:p-8 rounded-3xl border-2 border-[#C5A46D]/50 shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        <div className="space-y-1 text-center sm:text-left relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C5A46D]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>COMPLETE ISLAND TOUR CATALOGUE</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Want to explore all {PACKAGES.length} Andaman Tour Packages?
          </h3>
          <p className="text-xs sm:text-sm text-[#F8F6EF]/80 font-light max-w-xl">
            Browse our complete collection of tour itineraries ranging from 3 nights to 13 nights covering Port Blair, Havelock Island &amp; Neil Island.
          </p>
        </div>

        <Link
          href="/packages"
          className="relative z-10 px-6 py-3.5 rounded-full bg-[#C5A46D] hover:bg-white text-[#082F49] hover:text-[#082F49] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 shrink-0 flex items-center gap-2 group border border-white/30"
        >
          <span>View All {PACKAGES.length} Packages</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
