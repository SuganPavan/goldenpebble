import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutPageAnimatedContent from "@/components/AboutPageAnimatedContent";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import BookingCTA from "@/components/BookingCTA";
import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

export const metadata = constructMetadata({
  title: "About Golden Pebble Havelock | Boutique Hotel in Swaraj Dweep",
  description: "Learn about Hotel Golden Pebble in Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands. Discover boutique accommodations, location details, in-house dining, and guest services."
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" }
  ]);

  return (
    <div className="bg-[#F8F6EF]">
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Sub-header */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src="/images/golden-pebble-property.jpg"
          alt="Hotel Golden Pebble building exterior in Havelock Island (Swaraj Dweep), Andaman"
          fill
          priority
          className="object-cover opacity-75 contrast-[1.05] brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/50 to-black/60 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          {/* Exactly ONE H1 tag on the page */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            About Golden Pebble Havelock
          </h1>
          <p className="text-sm sm:text-base text-[#F8F6EF]/90 max-w-2xl mt-3 font-light leading-relaxed">
            Discover boutique accommodation, peaceful island living, and transparent hospitality at Hotel Golden Pebble in Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands.
          </p>
        </div>
      </div>

      {/* ANIMATED ABOUT CONTENT & SECTIONS */}
      <AboutPageAnimatedContent />

      {/* Verified OTA Ratings Showcase */}
      <TestimonialSection />

      {/* Frequently Asked Questions About Golden Pebble */}
      <FaqSection
        heading="Frequently Asked Questions About Golden Pebble"
        subtitle="Essential information regarding our boutique hotel identity, location, and guest hospitality."
        questions={[
          {
            question: "What is Golden Pebble?",
            answer: "Hotel Golden Pebble is a boutique hotel on Havelock Island (Swaraj Dweep), offering comfortable air-conditioned rooms, warm timber interiors, and transparent hospitality."
          },
          {
            question: "Where is Hotel Golden Pebble located?",
            answer: "Golden Pebble is located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands (PIN 744211), near Govind Nagar Beach and the Havelock ferry jetty."
          },
          {
            question: "What accommodation does Golden Pebble offer?",
            answer: "Golden Pebble offers Deluxe Rooms (220 sq ft) and Deluxe Rooms with Balcony (280 sq ft), all equipped with split AC, ensuite hot & cold water bathrooms, and power backup."
          },
          {
            question: "What dining facilities are available?",
            answer: "The hotel features a 30-seat in-house air-conditioned restaurant serving complimentary daily breakfast and freshly prepared meals."
          },
          {
            question: "What guest services are available?",
            answer: "Services include high-speed Wi-Fi, daily housekeeping, room service, parking, and assistance with private ferry tickets and island activity bookings."
          },
          {
            question: "Which destination is Golden Pebble associated with?",
            answer: "Golden Pebble is situated on Havelock Island (Swaraj Dweep) in the Andaman & Nicobar Islands."
          }
        ]}
      />

      {/* Booking CTA */}
      <BookingCTA />
    </div>
  );
}
