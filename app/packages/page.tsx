import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import InteractivePackageShowcase from "@/components/InteractivePackageShowcase";
import BookingCTA from "@/components/BookingCTA";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Curated Andaman Holiday Packages | Hotel Golden Pebble Havelock",
  description: "Explore handpicked Havelock Island vacation packages including Beach Bliss 3N, Dive & Explore 4N, Romance Retreat 5N, and Island Adventure 6N."
});

export default function PackagesPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Curated Andaman Holiday Packages"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Packages" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            Curated Island Packages
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            Seamless Andaman island vacations combining boutique hotel stays, daily breakfast, port transfers, and guided sightseeing.
          </p>
        </div>
      </div>

      {/* Interactive Package Explorer Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractivePackageShowcase />
      </section>

      <BookingCTA />
    </div>
  );
}
