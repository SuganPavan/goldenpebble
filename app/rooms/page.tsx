import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoomsAnimatedContent from "@/components/RoomsAnimatedContent";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
import { constructMetadata } from "@/lib/seo";
import { 
  generateHotelSchema, 
  generateBreadcrumbSchema, 
  generateFaqSchema 
} from "@/lib/structuredData";
import { BedDouble } from "lucide-react";

export const metadata = constructMetadata({
  title: "Rooms at Hotel Golden Pebble | Havelock Island",
  description: "Explore rooms at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep), with comfortable accommodation for your island stay.",
  path: "/rooms"
});

export default function RoomsPage() {
  const hotelSchema = generateHotelSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Rooms", item: "/rooms" }
  ]);

  const faqData = [
    {
      question: "What room categories are available at Hotel Golden Pebble?",
      answer: "Hotel Golden Pebble offers two comfortable room categories in Govind Nagar, Havelock Island: the Deluxe Room (220 sq ft) and the Deluxe Room with Balcony (280 sq ft)."
    },
    {
      question: "How large is the Deluxe Room at Hotel Golden Pebble?",
      answer: "The Deluxe Room provides 220 sq ft of air-conditioned living space, featuring warm timber textures, king bedding, and an ensuite bathroom."
    },
    {
      question: "How large is the Deluxe Room with Balcony?",
      answer: "The Deluxe Room with Balcony provides 280 sq ft of space including a private outdoor balcony overlooking lush garden greenery."
    },
    {
      question: "Do all rooms at Hotel Golden Pebble have air conditioning?",
      answer: "Yes, all rooms at Hotel Golden Pebble are equipped with split air conditioning for individual climate control."
    },
    {
      question: "Are attached ensuite bathrooms available in every room?",
      answer: "Yes, every room features a private attached ensuite bathroom with 24-hour hot and cold running water, fresh towels, and bath amenities."
    },
    {
      question: "Is Wi-Fi available at the hotel?",
      answer: "Yes, complimentary high-speed Wi-Fi access is available for guests throughout the hotel premises."
    },
    {
      question: "Does Hotel Golden Pebble have power backup?",
      answer: "Yes, 24x7 generator power backup is active across the property to ensure uninterrupted guest comfort."
    },
    {
      question: "How can I check room rates and availability?",
      answer: "You can enquire about current room rates and availability by contacting our reservations team at +91 9434288856 or submitting an enquiry through our Contact page."
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
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838967/golden-pebble/images/rooms/golden-pebble-deluxe-room-main.jpg"
          alt="Rooms at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep)"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75 contrast-[1.05] brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/50 to-black/60 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Rooms" }]} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#C5A46D] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mt-4 mb-2 shadow-sm">
            <BedDouble className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>BOUTIQUE HAVELOCK ACCOMMODATION</span>
          </div>

          {/* Exactly ONE H1 tag on the page */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
            Rooms at Hotel Golden Pebble
          </h1>

          {/* Answer-First Opening Paragraph for AEO */}
          <p className="text-xs sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-3 font-light leading-relaxed drop-shadow-sm">
            Hotel Golden Pebble offers comfortable accommodation in Govind Nagar, Havelock Island (Swaraj Dweep), with room options designed for guests visiting the Andaman Islands. Choose between our Deluxe Rooms (220 sq ft) and Deluxe Rooms with Balcony (280 sq ft), featuring split air conditioning, warm timber textures, and modern ensuite bathrooms.
          </p>
        </div>
      </div>

      {/* ANIMATED ROOM CONTENT & SECTIONS */}
      <RoomsAnimatedContent />

      {/* AEO — ANSWER ENGINE OPTIMIZED ACCORDION FAQ SECTION */}
      <FaqSection
        heading="Frequently Asked Questions About Our Rooms"
        subtitle="Essential information regarding room categories, sizes, amenities, and reservation inquiries at Hotel Golden Pebble."
        questions={faqData}
      />

      <BookingCTA />
    </div>
  );
}
