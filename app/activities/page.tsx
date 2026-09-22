import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ActivityCard from "@/components/ActivityCard";
import BookingCTA from "@/components/BookingCTA";
import { ACTIVITIES } from "@/lib/data/activities";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Things To Do & Experiences | Hotel Golden Pebble Havelock",
  description: "Discover scuba diving at Nemo Reef, reef snorkeling at Elephant Beach, mangrove sea kayaking, and beach walks in Havelock Island."
});

export default function ActivitiesPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80"
          alt="Experiences and Activities in Havelock"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Experiences" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            Experiences & Activities
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            From underwater coral reefs to tranquil mangrove sea kayaking, experience Havelock Island to the fullest.
          </p>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACTIVITIES.map((act) => (
            <ActivityCard key={act.id} activity={act} />
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
