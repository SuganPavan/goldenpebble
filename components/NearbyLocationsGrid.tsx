"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocationCard from "./LocationCard";
import { Location } from "@/lib/data/locations";
import { Sparkles, Compass, Anchor, MapPin } from "lucide-react";

interface NearbyLocationsGridProps {
  locations: Location[];
}

export default function NearbyLocationsGrid({ locations }: NearbyLocationsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Places", value: "All", count: locations.length, icon: MapPin },
    {
      label: "Beaches & Coastal Attractions",
      value: "Beaches & Coastal Attractions",
      count: locations.filter((l) => l.category === "Beaches & Coastal Attractions").length,
      icon: Sparkles
    },
    {
      label: "Island Points of Interest",
      value: "Island Points of Interest",
      count: locations.filter((l) => l.category === "Island Points of Interest").length,
      icon: Compass
    },
    {
      label: "Nearby Island Destination",
      value: "Nearby Island Destination",
      count: locations.filter((l) => l.category === "Nearby Island Destination").length,
      icon: Anchor
    }
  ];

  const filteredLocations =
    selectedCategory === "All"
      ? locations
      : locations.filter((l) => l.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pb-2 border-b border-[#E8DCC5]">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = selectedCategory === cat.value;

          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? "bg-[#073F3B] text-[#C5A46D] border-[#073F3B] shadow-md scale-105"
                  : "bg-white text-[#073F3B] hover:bg-[#F8F6EF] border-[#E8DCC5]"
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-[#C5A46D]" : "text-[#073F3B]"}`} />
              <span>{cat.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? "bg-white/10 text-white" : "bg-[#F8F6EF] text-[#4E5C58]"}`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Unified 3-Column Responsive Grid with Scroll & Filter Animations */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredLocations.map((loc, idx) => (
            <LocationCard key={loc.id} location={loc} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
