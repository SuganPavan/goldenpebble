import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutPageAnimatedContent from "@/components/AboutPageAnimatedContent";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import BookingCTA from "@/components/BookingCTA";
import { constructMetadata } from "@/lib/seo";
import { 
  generateHotelSchema, 
  generateBreadcrumbSchema, 
  generateFaqSchema 
} from "@/lib/structuredData";

export const metadata = constructMetadata({
  title: "Hotel Golden Pebble | About Our Hotel in Havelock Island",
  description: "Learn about Hotel Golden Pebble, a boutique hotel in Govind Nagar, Havelock Island (Swaraj Dweep), offering comfortable stays and island experiences.",
  path: "/about"
});

export default function AboutPage() {
  const hotelSchema = generateHotelSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" }
  ]);

  const faqItems = [
    {
      question: "What is Hotel Golden Pebble?",
      answer: "Hotel Golden Pebble is a boutique hotel located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands. It offers clean, comfortable air-conditioned rooms, warm timber interiors, an in-house restaurant, and personalized guest assistance."
    },
    {
      question: "Where is Hotel Golden Pebble located?",
      answer: "Hotel Golden Pebble is located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands - 744211, near Govind Nagar Beach and the Havelock ferry jetty."
    },
    {
      question: "Is Hotel Golden Pebble a beachfront property?",
      answer: "No. Hotel Golden Pebble is an inland boutique hotel in Govind Nagar, Havelock Island. It is conveniently situated near Govind Nagar Beach (Beach No. 3 area) and provides easy access to island attractions like Radhanagar Beach and Elephant Beach."
    },
    {
      question: "What room types are available at Hotel Golden Pebble?",
      answer: "The hotel offers two room categories: Deluxe Rooms (220 sq ft) and Deluxe Rooms with Balcony (280 sq ft), all equipped with split air conditioning, ensuite bathrooms with hot & cold water, and 24x7 power backup."
    },
    {
      question: "What dining options are available at the hotel?",
      answer: "Hotel Golden Pebble features a 30-seat in-house air-conditioned restaurant serving complimentary daily breakfast and freshly prepared meals."
    },
    {
      question: "What services and tour assistance are provided?",
      answer: "Guest services include high-speed Wi-Fi, daily housekeeping, room service, parking, and concierge assistance for private ferry tickets, water sports, and island transfer arrangements."
    }
  ];

  const faqSchema = generateFaqSchema(faqItems);

  return (
    <div className="bg-[#F8F6EF]">
      {/* Structured Data (JSON-LD) for Hotel, Breadcrumbs & FAQ */}
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

      {/* Hero Sub-header */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838816/golden-pebble/images/golden-pebble-property.jpg"
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
            About Hotel Golden Pebble
          </h1>
          <p className="text-sm sm:text-base text-[#F8F6EF]/90 max-w-2xl mt-3 font-light leading-relaxed">
            Discover boutique accommodation, peaceful island living, and transparent hospitality at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands.
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
        questions={faqItems}
      />

      {/* Booking CTA */}
      <BookingCTA />
    </div>
  );
}
