"use client";

import { useState, useMemo, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import PackageCard from "./PackageCard";
import { Search, Filter, RotateCcw, Compass, MapPin, Calendar, Sparkles, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function PackageFilterContent() {
  const searchParams = useSearchParams();
  const durationParam = searchParams.get("duration") || "all";
  const islandParam = searchParams.get("island") || "all";

  const [selectedDuration, setSelectedDuration] = useState<string>(durationParam);
  const [selectedIsland, setSelectedIsland] = useState<string>(islandParam);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync state if URL searchParams change
  useEffect(() => {
    if (durationParam) {
      setSelectedDuration(durationParam);
    }
  }, [durationParam]);

  const handleDurationChange = (val: string) => {
    setSelectedDuration(val);
    const url = new URL(window.location.href);
    if (val === "all") {
      url.searchParams.delete("duration");
    } else {
      url.searchParams.set("duration", val);
    }
    window.history.pushState({}, "", url.toString());
  };

  const handleIslandChange = (val: string) => {
    setSelectedIsland(val);
    const url = new URL(window.location.href);
    if (val === "all") {
      url.searchParams.delete("island");
    } else {
      url.searchParams.set("island", val);
    }
    window.history.pushState({}, "", url.toString());
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const durationCounts = useMemo(() => {
    return {
      all: PACKAGES.length,
      "3": PACKAGES.filter((p) => p.nights === 3).length,
      "4": PACKAGES.filter((p) => p.nights === 4).length,
      "5": PACKAGES.filter((p) => p.nights === 5).length,
      "6": PACKAGES.filter((p) => p.nights === 6).length,
      "13": PACKAGES.filter((p) => p.nights === 13).length,
    };
  }, []);

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Filter by duration (nights)
      if (selectedDuration !== "all") {
        if (selectedDuration === "3" && pkg.nights !== 3) return false;
        if (selectedDuration === "4" && pkg.nights !== 4) return false;
        if (selectedDuration === "5" && pkg.nights !== 5) return false;
        if (selectedDuration === "6" && pkg.nights !== 6) return false;
        if (selectedDuration === "13" && pkg.nights !== 13) return false;
      }

      // Filter by island / destination
      if (selectedIsland !== "all") {
        const lowerRoute = (pkg.route + " " + pkg.description + " " + pkg.name).toLowerCase();
        if (selectedIsland === "havelock" && !lowerRoute.includes("havelock")) return false;
        if (selectedIsland === "neil" && !lowerRoute.includes("neil")) return false;
        if (selectedIsland === "portblair" && !lowerRoute.includes("port blair")) return false;
        if (selectedIsland === "northbay" && !lowerRoute.includes("north bay") && !lowerRoute.includes("ross")) return false;
        if (selectedIsland === "baratang" && !lowerRoute.includes("baratang")) return false;
      }

      // Filter by text search
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = pkg.name.toLowerCase().includes(query);
        const matchesDesc = pkg.shortDescription.toLowerCase().includes(query);
        const matchesRoute = pkg.route.toLowerCase().includes(query);
        const matchesDuration = pkg.duration.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesRoute && !matchesDuration) return false;
      }

      return true;
    });
  }, [selectedDuration, selectedIsland, searchQuery]);

  const resetFilters = () => {
    setSelectedDuration("all");
    setSelectedIsland("all");
    setSearchQuery("");
    const url = new URL(window.location.href);
    url.searchParams.delete("duration");
    url.searchParams.delete("island");
    window.history.pushState({}, "", url.pathname);
  };

  const activeFilterCount = (selectedDuration !== "all" ? 1 : 0) + (selectedIsland !== "all" ? 1 : 0) + (searchQuery !== "" ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0;

  return (
    <div className="space-y-6">
      {/* Interactive Filter Control Panel */}
      <div className="bg-white p-4 sm:p-7 rounded-2xl sm:rounded-[2rem] border border-[#E8DCC5] shadow-md space-y-4 sm:space-y-6">
        
        {/* MOBILE ONLY: Filter Menu Toggle Trigger Link / Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="w-full flex items-center justify-between p-3.5 bg-[#FAF8F5] border border-[#E8DCC5] rounded-xl text-[#073F3B] active:scale-[0.99] transition-all shadow-sm"
            aria-expanded={isMobileFilterOpen}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#073F3B] text-white flex items-center justify-center font-bold shrink-0">
                <Filter className="w-5 h-5 text-[#C5A46D]" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-base font-bold text-[#073F3B]">Filter Tour Packages</span>
                  {hasActiveFilters && (
                    <span className="bg-[#C5A46D] text-[#073F3B] text-[10px] font-sans font-bold px-2 py-0.5 rounded-full">
                      {activeFilterCount} Active
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-sans text-[#4E5C58]">
                  {isMobileFilterOpen ? "Tap to close filter menu" : "Tap here to open filter menu & options"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-[#073F3B] bg-white px-3 py-1.5 rounded-full border border-[#E8DCC5] shrink-0 ml-2">
              <span>{isMobileFilterOpen ? "Close" : "Open"}</span>
              {isMobileFilterOpen ? (
                <ChevronUp className="w-4 h-4 text-[#C5A46D]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#C5A46D]" />
              )}
            </div>
          </button>
        </div>

        {/* FILTER CONTENT: Always visible on Desktop/Tablet (sm:block), Collapsible Menu on Mobile */}
        <div className={`${isMobileFilterOpen ? "block" : "hidden sm:block"} space-y-6 transition-all duration-300`}>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8DCC5]/60 pb-5 pt-2 sm:pt-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#073F3B] text-white hidden sm:flex items-center justify-center font-bold shadow-sm">
                <Filter className="w-5 h-5 text-[#C5A46D]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D]">
                  <Sparkles className="w-3 h-3 text-[#C5A46D]" />
                  <span>PACKAGE FINDER</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#073F3B]">Filter & Find Tour Itineraries</h3>
              </div>
            </div>

            {/* Search Box Input */}
            <div className="relative w-full md:w-auto min-w-[240px] sm:min-w-[300px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4E5C58]" />
              <input
                type="text"
                placeholder="Search package name or destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 text-xs font-sans rounded-full border border-[#E8DCC5] focus:outline-none focus:border-[#C5A46D] focus:ring-2 focus:ring-[#C5A46D]/20 bg-[#FAF8F5] transition-all text-[#073F3B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#4E5C58] hover:text-[#073F3B] font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Duration Filter Buttons with Package Counts */}
          <div className="space-y-2 sm:space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#073F3B] uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Filter by Duration:</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:items-center sm:gap-2">
              {[
                { label: `All Durations (${durationCounts.all})`, value: "all" },
                { label: `3 Nights / 4 Days (${durationCounts["3"]})`, value: "3" },
                { label: `4 Nights / 5 Days (${durationCounts["4"]})`, value: "4" },
                { label: `5 Nights / 6 Days (${durationCounts["5"]})`, value: "5" },
                { label: `6 Nights / 7 Days (${durationCounts["6"]})`, value: "6" },
                { label: `13 Nights / 14 Days (${durationCounts["13"]})`, value: "13" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleDurationChange(tab.value)}
                  className={`w-full sm:w-auto justify-center text-center px-2 sm:px-3.5 lg:px-4 py-2 lg:py-2 rounded-xl sm:rounded-full text-[10.5px] xs:text-[11px] sm:text-xs font-sans font-medium transition-all duration-300 flex items-center ${
                    selectedDuration === tab.value
                      ? "bg-[#073F3B] text-white shadow-sm font-bold border border-[#073F3B]"
                      : "bg-[#FAF8F5] text-[#4E5C58] hover:bg-[#E8DCC5]/50 hover:text-[#073F3B] border border-[#E8DCC5]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Island Filter Pills */}
          <div className="space-y-2 sm:space-y-2.5 pt-1">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#073F3B] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Filter by Islands & Sightseeing:</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:items-center sm:gap-2">
              {[
                { label: "All Destinations", value: "all" },
                { label: "Havelock Island", value: "havelock" },
                { label: "Neil Island", value: "neil" },
                { label: "Port Blair", value: "portblair" },
                { label: "North Bay & Ross", value: "northbay" },
                { label: "Baratang Caves", value: "baratang" },
              ].map((island) => (
                <button
                  key={island.value}
                  onClick={() => handleIslandChange(island.value)}
                  className={`w-full sm:w-auto justify-center text-center px-2 sm:px-3.5 py-2 rounded-xl sm:rounded-full text-[10.5px] xs:text-[11px] sm:text-xs font-sans transition-all duration-300 flex items-center ${
                    selectedIsland === island.value
                      ? "bg-[#C5A46D] text-[#073F3B] font-bold shadow-sm border border-[#C5A46D]"
                      : "bg-[#FAF8F5] text-[#4E5C58] hover:bg-[#E8DCC5]/50 hover:text-[#073F3B] border border-[#E8DCC5]"
                  }`}
                >
                  {island.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Only: Apply & Close Filter Menu Button */}
          <div className="sm:hidden pt-2">
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-2.5 bg-[#073F3B] text-white text-xs font-sans font-bold rounded-xl shadow-sm flex items-center justify-center gap-2"
            >
              <span>Apply & Close Filter Menu</span>
              <ChevronUp className="w-4 h-4 text-[#C5A46D]" />
            </button>
          </div>

        </div>

        {/* Filter Summary & Scroll Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E8DCC5]/60 text-xs font-sans">
          <div className="text-[#4E5C58] font-medium flex items-center gap-2 flex-wrap">
            <span>
              Showing <span className="font-bold text-[#073F3B] text-sm">{filteredPackages.length}</span> of{" "}
              <span className="font-bold text-[#073F3B]">{PACKAGES.length}</span> Andaman tour packages
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#073F3B] hover:text-[#C5A46D] font-bold underline transition-colors ml-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Left/Right Scroll Arrows */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] hover:border-[#073F3B] flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] hover:border-[#073F3B] flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Single Horizontal Row for Packages */}
      {filteredPackages.length > 0 ? (
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory gap-6 pb-6 pt-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AnimatePresence>
            {filteredPackages.map((pkg, index) => (
              <div key={pkg.id} className="w-[85vw] sm:w-[360px] lg:w-[380px] shrink-0 snap-start flex flex-col">
                <PackageCard pkg={pkg} index={index} />
              </div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DCC5] shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8DCC5] flex items-center justify-center mx-auto text-[#C5A46D]">
            <Compass className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#073F3B]">No Packages Found</h3>
          <p className="font-sans text-xs sm:text-sm text-[#4E5C58] max-w-md mx-auto">
            We couldn't find any tour packages matching your selected filters or search keywords.
          </p>
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function InteractivePackageShowcase() {
  return (
    <Suspense fallback={<div className="py-8 text-center font-sans text-xs text-[#4E5C58]">Loading packages...</div>}>
      <PackageFilterContent />
    </Suspense>
  );
}
