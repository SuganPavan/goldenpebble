import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ActivityCard from "@/components/ActivityCard";
import WaterAdventuresTheater from "@/components/WaterAdventuresTheater";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";
import { VERIFIED_WATER_ADVENTURES } from "@/lib/data/activities";
import { WATER_ADVENTURES } from "@/lib/data/packages";
import { constructMetadata } from "@/lib/seo";
import { 
  generateHotelSchema, 
  generateBreadcrumbSchema, 
  generateFaqSchema 
} from "@/lib/structuredData";
import { Compass, Info, MapPin, Waves } from "lucide-react";

export const metadata = constructMetadata({
  title: "Havelock Island Activities & Water Adventures | Hotel Golden Pebble",
  description: "Explore water adventures and activities available in Havelock Island, including scuba diving, sea walk, jet ski, parasailing and more from Hotel Golden Pebble.",
  path: "/activities"
});

export default function ActivitiesPage() {
  const hotelSchema = generateHotelSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Activities", item: "/activities" }
  ]);

  // Verified FAQ items (Visible FAQ === JSON-LD FAQ 100% Match)
  const faqData = [
    {
      question: "What water adventures are available in Havelock Island?",
      answer: "Popular water adventures in Havelock Island (Swaraj Dweep) include scuba diving, boat diving, underwater sea walk, jet ski rides, banana rides, glass-bottom boat rides, sofa rides, and parasailing."
    },
    {
      question: "Are water activities included in hotel stay bookings?",
      answer: "No. Water adventures are optional destination activities available on a direct payment basis. Package details specify if selected activities are included in a particular itinerary."
    },
    {
      question: "Where do water sports activities take place?",
      answer: "Activities take place at certified activity centers and designated beaches across Havelock Island (such as Elephant Beach, Nemo Reef, and Govind Nagar Beach) as well as selected sites in Port Blair."
    },
    {
      question: "Can Hotel Golden Pebble assist guests with activity enquiries?",
      answer: "Yes. Guests staying at Hotel Golden Pebble in Govind Nagar can consult our front desk or reservations team for guidance on certified local operators and scheduling assistance."
    },
    {
      question: "Are water activities suitable for non-swimmers?",
      answer: "Yes. Introductory scuba diving (DSD), underwater sea walk, glass-bottom boat rides, and guided jet ski rides feature 1-on-1 instructor supervision and life jacket support for non-swimmers."
    },
    {
      question: "How can guests check current activity rates and availability?",
      answer: "Water adventure rates are indicative and subject to operator confirmation and weather conditions. Guests can enquire directly via our Contact page or call our reservations team at +91 9434288856."
    }
  ];

  const faqSchema = generateFaqSchema(faqData);

  // ItemList Schema for 8 Verified Water Adventures
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Havelock Island Water Adventures & Activities",
    "description": "Verified water activities available in Havelock Island and Port Blair for guests staying at Hotel Golden Pebble.",
    "itemListElement": VERIFIED_WATER_ADVENTURES.map((act, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": act.name,
        "description": act.shortDescription,
        "url": `https://goldenpebble.co.in/contact?activity=${act.slug}`
      }
    }))
  };

  return (
    <div className="bg-[#F8F6EF] min-h-screen text-[#073F3B]">
      {/* STRUCTURED DATA SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HEADER BANNER */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80"
          alt="Water Sports and Activities in Havelock Island (Swaraj Dweep)"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/65 to-black/60 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Activities" }]} />

          <ScrollReveal variant="fade-down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[11px] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase mt-4 mb-2 shadow-sm backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>BOUTIQUE HAVELOCK DESTINATION EXPERIENCES</span>
            </div>
          </ScrollReveal>

          {/* Exactly ONE H1 tag on the page */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
              Havelock Island Activities &amp; Water Adventures
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="text-xs sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-3 font-light leading-relaxed drop-shadow-sm">
              Explore water adventures and activities available in Havelock Island, including scuba diving, sea walk, jet ski, parasailing and more from Hotel Golden Pebble.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* AEO ANSWER-FIRST LEAD PARAGRAPH */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
              WATER SPORTS &amp; ACTIVITIES OVERVIEW
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
              Island Destination Experiences
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4E5C58] font-light leading-relaxed">
              Guests staying at Hotel Golden Pebble can explore a range of optional water adventures available in Havelock Island (Swaraj Dweep) and, for selected activities, Port Blair. Experiences include scuba diving, boat diving, sea walk, jet ski, banana rides, glass-bottom rides, sofa rides and parasailing. All activities are destination experiences conducted by certified local operators.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* INLAND PROPERTY POSITIONING & PROXIMITY DISCLAIMER */}
      <section className="pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="bg-[#073F3B] text-white p-6 sm:p-8 rounded-3xl border border-[#C5A46D]/40 shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D]">
                LOCATION &amp; ACCOMMODATION BASE
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Hotel Golden Pebble — Your Havelock Stay Base
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed">
              Hotel Golden Pebble is an inland boutique hotel situated in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands - 744211. Our property provides a peaceful accommodation base equipped with air-conditioned Deluxe Rooms and an in-house restaurant, allowing guests convenient access to island activity centers, Havelock Jetty, and nearby beaches (<Link href="/nearby-locations/radhanagar-beach" className="text-[#F3D39B] underline">Radhanagar Beach</Link>, <Link href="/nearby-locations/elephant-beach" className="text-[#F3D39B] underline">Elephant Beach</Link>, and <Link href="/nearby-locations/kalopathar-beach" className="text-[#F3D39B] underline">Kalopathar Beach</Link>).
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* INTERACTIVE WATER SPORTS THEATER */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WaterAdventuresTheater adventures={WATER_ADVENTURES} />
      </section>

      {/* SECTION 1: OPTIONAL WATER ADVENTURES RATE CARDS (8 VERIFIED ACTIVITIES) */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8DCC5]/70 pb-4">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                VERIFIED ACTIVITY COLLECTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073F3B]">
                Optional Water Adventures
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed mt-1">
                Explore verified water sports, duration breakdown, locations, and indicative rates for island visitors.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8DCC5] text-xs font-sans text-[#073F3B] font-medium shrink-0">
              <Waves className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>8 Verified Experiences</span>
            </div>
          </div>
        </ScrollReveal>

        {/* PRICE DISCLAIMER NOTE */}
        <ScrollReveal variant="fade-up">
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed shadow-2xs">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Indicative Rate Disclaimer:</span>
              <span>
                Water adventure rates are indicative and subject to availability and operator confirmation. Please contact reservations for current rates and availability.
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 VERIFIED ACTIVITY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {VERIFIED_WATER_ADVENTURES.map((act, idx) => (
            <ActivityCard key={act.id} activity={act} index={idx} />
          ))}
        </div>
      </section>

      {/* AEO ACCORDION FAQ SECTION */}
      <ScrollReveal variant="fade-up">
        <FaqSection
          heading="Frequently Asked Questions About Activities"
          subtitle="Essential information regarding water sports, activity locations, non-swimmer guidance, and booking assistance."
          questions={faqData}
        />
      </ScrollReveal>

      {/* FINAL BOOKING CTA */}
      <ScrollReveal variant="scale-up">
        <BookingCTA />
      </ScrollReveal>
    </div>
  );
}
