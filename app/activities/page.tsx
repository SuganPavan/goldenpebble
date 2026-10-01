import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ActivityCard from "@/components/ActivityCard";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
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
            Experiences &amp; Activities
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            From underwater coral reefs to tranquil mangrove sea kayaking, experience Havelock Island to the fullest.
          </p>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACTIVITIES.map((act, idx) => (
            <ActivityCard key={act.id} activity={act} index={idx} />
          ))}
        </div>
      </section>

      {/* Activities & Water Sports FAQs */}
      <FaqSection
        heading="Activities & Water Sports FAQs"
        subtitle="Learn about island experiences, scuba diving, snorkeling, and adventure assistance."
        questions={[
          {
            question: "What activities can guests enjoy around Havelock Island?",
            answer: "Guests can enjoy scuba diving, reef snorkeling, mangrove sea kayaking, beach walks, and island excursions."
          },
          {
            question: "Does Golden Pebble assist guests with water sport activities?",
            answer: "Yes, Golden Pebble provides direct guest assistance to help coordinate certified water sport activities and local tours."
          },
          {
            question: "Can the hotel help guests arrange activities?",
            answer: "Yes, our reception and reservations team can assist guests with scheduling activity slots and local transport guidance."
          },
          {
            question: "What popular attractions can guests combine with island activities?",
            answer: (
              <span>
                Activities can be combined with visits to{" "}
                <Link href="/nearby-locations" className="text-[#063F3C] font-semibold underline hover:text-[#E98268]">
                  Radhanagar Beach, Elephant Beach, and Kalapathar Beach
                </Link>.
              </span>
            )
          },
          {
            question: "How can guests enquire about activities?",
            answer: (
              <span>
                Guests can enquire by exploring our{" "}
                <Link href="/activities" className="text-[#063F3C] font-semibold underline hover:text-[#E98268]">
                  Activities section
                </Link>{" "}
                or contacting our reservations team on our{" "}
                <Link href="/contact" className="text-[#063F3C] font-semibold underline hover:text-[#E98268]">
                  Contact page
                </Link>.
              </span>
            )
          }
        ]}
      />

      <BookingCTA />
    </div>
  );
}
