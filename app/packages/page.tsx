import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import InteractivePackageShowcase from "@/components/InteractivePackageShowcase";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
import { constructMetadata } from "@/lib/seo";
import { Compass, MapPin } from "lucide-react";

export const metadata = constructMetadata({
  title: "Andaman Tour & Holiday Packages | Golden Pebble",
  description: "Explore thoughtfully planned Andaman tour packages starting from 3 Nights / 4 Days covering Port Blair, Havelock and Neil Island."
});

export default function PackagesPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Explore Our Andaman Packages - Golden Pebble Havelock"
          fill
          priority
          className="object-cover opacity-70 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/60 to-black/60 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Packages" }]} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#C5A46D] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mt-4 mb-2 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>CURATED TOUR ITINERARIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
            Explore Our Andaman Packages
          </h1>

          <p className="text-sm sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-3 font-light leading-relaxed drop-shadow-sm">
            Thoughtfully planned island journeys designed to make your Andaman holiday simple, comfortable and memorable.
          </p>
        </div>
      </div>

      {/* Introductory Section: Choose Itinerary by Island Experience */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DCC5] shadow-sm mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>TAILORED ISLAND ROUTE SELECTION</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
              Choose Your Preferred Island Experience
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed mt-2">
              Select an itinerary based on the islands and attractions you want to explore. Whether you prefer a quick 3 Nights / 4 Days getaway or an all-inclusive island circuit across Port Blair, Havelock and Neil Island, each package includes hotel accommodations, daily breakfast, and seamless island transfers.
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-6 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md shrink-0 text-center"
          >
            <span>Plan Custom Trip</span>
          </Link>
        </div>

        {/* 3 Package Cards Showcase Grid */}
        <InteractivePackageShowcase />
      </section>

      {/* Andaman Holiday Package FAQs */}
      <FaqSection
        heading="Andaman Holiday Package FAQs"
        subtitle="Answers to common questions regarding island itineraries, ferry transfers, and beach excursions."
        questions={[
          {
            question: "What Andaman tour packages are available?",
            answer: "We offer curated packages starting from 3 Nights / 4 Days (1 N Port Blair, 2 N Havelock) to 4 Nights / 5 Days (Island Explorer, Andaman Highlights, Havelock Escape) and extended multi-day itineraries."
          },
          {
            question: "Which destinations are included in these itineraries?",
            answer: "Depending on the chosen itinerary, destinations include Cellular Jail, Radhanagar Beach, Elephant Beach, Bharatpur Beach, Lakshmanpur Beach, Natural Bridge, Corbyn's Cove, and Chidiyatapu Sunset Point."
          },
          {
            question: "Are daily breakfast and island transfers included?",
            answer: "Yes, all itineraries include daily breakfast at our air-conditioned restaurant, airport pickup and drop transfers, and inter-island ferry cruise transfers."
          },
          {
            question: "Are water activities included or optional?",
            answer: "Water activities (such as scuba diving, snorkeling, sea walk, and jet ski) are optional and available on direct payment basis at the respective beaches."
          },
          {
            question: "How can I enquire about an Andaman package?",
            answer: (
              <span>
                You can enquire directly through our{" "}
                <Link href="/contact" className="text-[#073F3B] font-bold underline hover:text-[#C5A46D]">
                  Contact & Reservations page
                </Link>{" "}
                or reach our team on WhatsApp at +91 9434288856.
              </span>
            )
          }
        ]}
      />

      <BookingCTA />
    </div>
  );
}
