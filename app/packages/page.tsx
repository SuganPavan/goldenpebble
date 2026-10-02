import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import InteractivePackageShowcase from "@/components/InteractivePackageShowcase";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";
import { constructMetadata } from "@/lib/seo";
import { 
  generateHotelSchema, 
  generateBreadcrumbSchema, 
  generateFaqSchema 
} from "@/lib/structuredData";
import { Compass } from "lucide-react";

export const metadata = constructMetadata({
  title: "Hotel Packages in Havelock Island | Hotel Golden Pebble",
  description: "Explore hotel packages at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep), including multiple stay durations for your Andaman holiday.",
  path: "/packages"
});

export default function PackagesPage() {
  const hotelSchema = generateHotelSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Packages", item: "/packages" }
  ]);

  const faqData = [
    {
      question: "What package options are available at Hotel Golden Pebble?",
      answer: "Hotel Golden Pebble offers curated stay packages in Govind Nagar, Havelock Island (Swaraj Dweep), featuring multiple stay durations including 3 Nights, 4 Nights, 5 Nights, 6 Nights, and 13 Nights island itineraries."
    },
    {
      question: "Does Hotel Golden Pebble offer a 4 Nights / 5 Days package?",
      answer: "Yes. Hotel Golden Pebble offers 4 Nights / 5 Days Andaman stay packages (such as Island Explorer and Andaman Highlights) alongside 3 Nights, 6 Nights, and extended multi-day options. Contact reservations for current package details and rates."
    },
    {
      question: "Where is Hotel Golden Pebble located?",
      answer: "Hotel Golden Pebble is located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands, India - 744211."
    },
    {
      question: "Does the package include accommodation?",
      answer: "Yes, stay packages include boutique hotel accommodation at Hotel Golden Pebble in Govind Nagar, featuring Deluxe Rooms (220 sq ft) or Deluxe Rooms with Balcony (280 sq ft) equipped with split air conditioning."
    },
    {
      question: "Does the package include meals or sightseeing?",
      answer: "Stay packages include daily complimentary breakfast served at our 30-seat in-house air-conditioned restaurant. Sightseeing excursions to Radhanagar Beach and Elephant Beach, as well as inter-island ferry transfers, are coordinated according to the chosen package itinerary."
    },
    {
      question: "How can I enquire about the package?",
      answer: "You can enquire about current package availability and customized itineraries by visiting our Contact page or reaching our reservations desk at +91 9434288856."
    },
    {
      question: "Does the package have a fixed price?",
      answer: "Package rates vary depending on travel dates, seasonal schedules, and room selection. Contact our reservations team for current package rates."
    },
    {
      question: "Can I ask for current package availability?",
      answer: "Yes, current package availability can be checked directly by contacting our reservations team via phone, email, or online enquiry form."
    }
  ];

  const faqSchema = generateFaqSchema(faqData);

  return (
    <div className="bg-[#F8F6EF]">
      {/* STRUCTURED DATA SCHEMAS FOR HOTEL, BREADCRUMBS & FAQ */}
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

      {/* HEADER BANNER */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Hotel Packages at Hotel Golden Pebble in Havelock Island (Swaraj Dweep)"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/60 to-black/60 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Packages" }]} />
          
          <ScrollReveal variant="fade-down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#C5A46D] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mt-4 mb-2 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>BOUTIQUE HAVELOCK ITINERARIES</span>
            </div>
          </ScrollReveal>

          {/* Exactly ONE H1 tag on the page */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
              Hotel Packages at Hotel Golden Pebble
            </h1>
          </ScrollReveal>

          {/* Answer-First Opening Copy for AEO */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="text-xs sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-3 font-light leading-relaxed drop-shadow-sm">
              Hotel Golden Pebble offers curated stay packages in Govind Nagar, Havelock Island (Swaraj Dweep), with options designed for different trip lengths and travel plans. Explore our stay package collection including 3 Nights, 4 Nights, 5 Nights, 6 Nights, and 13 Nights island itineraries. Contact our reservations team for current package details and rates.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* SECTION 1: OUR ANDAMAN PACKAGES - COMPLETE PACKAGE COLLECTION */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                COMPLETE PACKAGE COLLECTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073F3B]">
                Our Andaman Packages
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed mt-1">
                Explore stay packages at Hotel Golden Pebble for different trip lengths and travel plans. Choose the package duration that best suits your Havelock Island holiday.
              </p>
            </div>
          </ScrollReveal>

          {/* EQUAL VISIBILITY RESPONSIVE PACKAGE GRID WITH FILTERS */}
          <InteractivePackageShowcase />
        </div>
      </section>

      {/* AEO ACCORDION FAQ SECTION */}
      <ScrollReveal variant="fade-up">
        <FaqSection
          heading="Frequently Asked Questions About Our Packages"
          subtitle="Essential information regarding stay packages, duration breakdown, inclusions, and reservation inquiries."
          questions={faqData}
        />
      </ScrollReveal>

      <ScrollReveal variant="scale-up">
        <BookingCTA />
      </ScrollReveal>
    </div>
  );
}
