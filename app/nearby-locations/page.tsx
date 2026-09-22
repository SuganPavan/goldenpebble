import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationCard from "@/components/LocationCard";
import BookingCTA from "@/components/BookingCTA";
import { LOCATIONS } from "@/lib/data/locations";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Nearby Attractions & Havelock Travel Guide | Golden Pebble",
  description: "Explore top attractions near Hotel Golden Pebble: Radhanagar Beach (10 km), Elephant Beach (8 km), Kalopathar Beach (6.5 km), Govind Nagar Beach (1.5 km), and Neil Island (30 km)."
});

export default function NearbyLocationsPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="/images/havelock-aerial-map.jpg"
          alt="Havelock Island Aerial View"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Nearby Locations" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            Discover Havelock Island
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            Verified distance guide to Havelock&apos;s most beautiful beaches, coral reefs, and neighboring islands.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
