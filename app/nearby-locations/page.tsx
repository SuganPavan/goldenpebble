import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyLocationsGrid from "@/components/NearbyLocationsGrid";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
import { LOCATIONS } from "@/lib/data/locations";
import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/structuredData";
import { MapPin, Sparkles } from "lucide-react";

export const metadata = constructMetadata({
  title: "Places to Visit Near Golden Pebble Havelock | Swaraj Dweep Guide",
  description: "Explore beaches and attractions near Golden Pebble in Govind Nagar, Swaraj Dweep (Havelock Island): Radhanagar Beach, Elephant Beach, Kalopathar Beach, Nemo Reef, and Neil Island.",
  path: "/nearby-locations"
});

export default function NearbyLocationsPage() {
  const faqData = [
    {
      question: "What are the best places to visit near Golden Pebble Havelock?",
      answer: "Golden Pebble is situated in Govind Nagar on Swaraj Dweep (Havelock Island). Places to explore across Havelock Island include Govind Nagar Beach (Beach No. 3), Vijaynagar Beach (Beach No. 5), Radhanagar Beach (Beach No. 7), Elephant Beach, Kalopathar Beach, Nemo Reef, Neil's Cove, and Lighthouse Point."
    },
    {
      question: "Which beaches can visitors explore in Havelock Island?",
      answer: "Visitors to Havelock Island (Swaraj Dweep) can explore several coastal beaches including Govind Nagar Beach (Beach No. 3), Vijaynagar Beach (Beach No. 5), Radhanagar Beach (Beach No. 7), Elephant Beach, Kalopathar Beach, and Neil's Cove."
    },
    {
      question: "Where is Golden Pebble located?",
      answer: "Golden Pebble is located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands, India – 744211."
    },
    {
      question: "What are some popular attractions in Havelock Island?",
      answer: "Popular attractions on Havelock Island (Swaraj Dweep) include Radhanagar Beach for golden sunsets, Elephant Beach for coral reef water sports, Kalopathar Beach for black rock shorelines, Govind Nagar Beach for shallow coastal strolls, and Nemo Reef for scuba diving."
    },
    {
      question: "Is Radhanagar Beach in Havelock Island?",
      answer: "Yes, Radhanagar Beach (Beach No. 7) is located on the western coast of Havelock Island (Swaraj Dweep) in the Andaman & Nicobar Islands."
    },
    {
      question: "Is Neil Island close to Havelock Island?",
      answer: "Neil Island (Shaheed Dweep) is a separate neighboring island located in the Ritchie's Archipelago, south of Havelock Island. Reaching Neil Island requires inter-island maritime ferry travel from Havelock Island or Port Blair."
    },
    {
      question: "What can visitors do around Havelock Island?",
      answer: "Visitors around Havelock Island can enjoy beach walks, sunset watching, scuba diving at Nemo Reef, reef snorkeling, underwater sea walks, mangrove kayaking, and inter-island day trips."
    }
  ];

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Nearby Locations", item: "/nearby-locations" }
  ]);

  const faqSchema = generateFaqSchema(faqData);

  return (
    <div className="bg-[#F8F6EF]">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838817/golden-pebble/images/havelock-aerial-map.png"
          alt="Havelock Island Swaraj Dweep aerial view landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Nearby Locations" }]} />
          
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[10px] font-sans font-bold tracking-[0.2em] uppercase backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Govind Nagar • Swaraj Dweep (Havelock Island)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-3 leading-tight">
            Places to Visit Near Golden Pebble Havelock
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-3xl mt-3 font-light leading-relaxed">
            Located in Govind Nagar on Swaraj Dweep (Havelock Island), Golden Pebble provides a convenient base for exploring the island&apos;s beaches, coastal attractions and experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Unified Locations Grid with Category Tabs */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DCC5] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#C5A46D] tracking-[0.2em] uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>HAVELOCK &amp; NEARBY DESTINATIONS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                Beaches, Attractions &amp; Neighboring Islands
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4E5C58] font-light max-w-md">
              Filter by category or explore all 9 destinations around Swaraj Dweep (Havelock Island).
            </p>
          </div>

          <NearbyLocationsGrid locations={LOCATIONS} />
        </section>

        {/* Internal Linking Section: Explore Havelock Island */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#C5A46D] tracking-[0.2em] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>COMPLETE HAVELOCK EXPERIENCE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
              Explore Havelock Island with Golden Pebble
            </h2>
            <p className="text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed mt-2">
              From discovering scuba diving at Nemo Reef to relaxing at Radhanagar Beach, plan your stay seamlessly in Govind Nagar. Discover our curated itineraries, guest activities, and boutique accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#E8DCC5]/60">
            <Link
              href="/activities"
              className="p-4 rounded-2xl bg-[#F8F6EF] hover:bg-[#073F3B] hover:text-white border border-[#E8DCC5] transition-all duration-300 group"
            >
              <span className="text-xs font-bold text-[#073F3B] group-hover:text-[#C5A46D] block mb-1">
                Water Activities
              </span>
              <span className="text-[11px] text-[#4E5C58] group-hover:text-white/80 block leading-tight">
                Explore our Havelock experiences &amp; water sports →
              </span>
            </Link>

            <Link
              href="/packages"
              className="p-4 rounded-2xl bg-[#F8F6EF] hover:bg-[#073F3B] hover:text-white border border-[#E8DCC5] transition-all duration-300 group"
            >
              <span className="text-xs font-bold text-[#073F3B] group-hover:text-[#C5A46D] block mb-1">
                Tour Packages
              </span>
              <span className="text-[11px] text-[#4E5C58] group-hover:text-white/80 block leading-tight">
                View our Havelock tour packages &amp; itineraries →
              </span>
            </Link>

            <Link
              href="/rooms"
              className="p-4 rounded-2xl bg-[#F8F6EF] hover:bg-[#073F3B] hover:text-white border border-[#E8DCC5] transition-all duration-300 group"
            >
              <span className="text-xs font-bold text-[#073F3B] group-hover:text-[#C5A46D] block mb-1">
                Boutique Rooms
              </span>
              <span className="text-[11px] text-[#4E5C58] group-hover:text-white/80 block leading-tight">
                Check Golden Pebble room availability in Govind Nagar →
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-4 rounded-2xl bg-[#F8F6EF] hover:bg-[#073F3B] hover:text-white border border-[#E8DCC5] transition-all duration-300 group"
            >
              <span className="text-xs font-bold text-[#073F3B] group-hover:text-[#C5A46D] block mb-1">
                Reservations Desk
              </span>
              <span className="text-[11px] text-[#4E5C58] group-hover:text-white/80 block leading-tight">
                Contact our Havelock reservations team →
              </span>
            </Link>
          </div>
        </section>

        {/* Nearby Beaches & Attractions FAQs (AEO Optimized) */}
        <FaqSection
          heading="Frequently Asked Questions About Places Near Golden Pebble"
          subtitle="Factual answers to tourist questions about places to visit around Swaraj Dweep (Havelock Island)."
          questions={faqData}
        />
      </div>

      <BookingCTA />
    </div>
  );
}
