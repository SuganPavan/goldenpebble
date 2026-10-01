import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoomsAnimatedContent from "@/components/RoomsAnimatedContent";
import BookingCTA from "@/components/BookingCTA";
import FaqSection from "@/components/FaqSection";
import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/structuredData";
import { BedDouble } from "lucide-react";

export const metadata = constructMetadata({
  title: "Rooms & Accommodation in Havelock | Golden Pebble Havelock",
  description: "Discover comfortable accommodation at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands (PIN: 744211). Choose from Deluxe Room (220 sq ft) and Deluxe Room with Balcony (280 sq ft) with split AC, Wi-Fi, and 24x7 power backup near Govind Nagar Beach No. 3 and Vijay Nagar Beach No. 5.",
  path: "/rooms"
});

export default function RoomsPage() {
  const faqData = [
    {
      question: "What room types are available at Golden Pebble Havelock?",
      answer: "Hotel Golden Pebble offers two comfortable room categories in Govind Nagar, Havelock Island: the Deluxe Room (220 sq ft) and the Deluxe Room with Balcony (280 sq ft)."
    },
    {
      question: "How large is the Deluxe Room at Golden Pebble Havelock?",
      answer: "The Deluxe Room provides 220 sq ft of living space, featuring split air conditioning, warm timber accents, and an ensuite bathroom."
    },
    {
      question: "How large is the Deluxe Room with Balcony?",
      answer: "The Deluxe Room with Balcony provides 280 sq ft of space including a private balcony with seating overlooking tropical greenery."
    },
    {
      question: "Do the rooms at Golden Pebble have air conditioning?",
      answer: "Yes, all rooms at Hotel Golden Pebble are equipped with split air conditioning and individual climate control."
    },
    {
      question: "Do the rooms have attached bathrooms?",
      answer: "Yes, every room features a modern private attached ensuite bathroom with fresh towels and bath amenities."
    },
    {
      question: "Is hot and cold water available?",
      answer: "Yes, 24-hour hot and cold running water is available in all attached ensuite bathrooms."
    },
    {
      question: "Is Wi-Fi available at Golden Pebble Havelock?",
      answer: "Yes, high-speed Wi-Fi access is available for guests throughout the property."
    },
    {
      question: "Does Golden Pebble have power backup?",
      answer: "Yes, 24x7 generator power backup is active across the property for uninterrupted guest comfort."
    },
    {
      question: "How can I enquire about room availability?",
      answer: "You can enquire about room availability and direct bookings by visiting our Contact page or reaching our reservations team at +91 9434288856."
    }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Rooms & Accommodation", item: "/rooms" }
  ]);

  const faqSchema = generateFaqSchema(faqData);

  return (
    <div className="bg-[#F8F6EF]">
      {/* STRUCTURED DATA SCHEMAS FOR BREADCRUMB & FAQ */}
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
          alt="Rooms and Accommodation at Hotel Golden Pebble Havelock"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75 contrast-[1.05] brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/50 to-black/60 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Rooms & Accommodation" }]} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#C5A46D] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mt-4 mb-2 shadow-sm">
            <BedDouble className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>BOUTIQUE HAVELOCK ACCOMMODATION</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
            Rooms &amp; Accommodation at Golden Pebble Havelock
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-3 font-light leading-relaxed drop-shadow-sm">
            Hotel Golden Pebble is a boutique hotel located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands, India (PIN: 744211). We offer comfortable accommodation options including Deluxe Rooms (220 sq ft) and Deluxe Rooms with Balcony (280 sq ft), designed for travelers exploring the tropical beauty of Swaraj Dweep.
          </p>
        </div>
      </div>

      {/* ANIMATED ROOM CONTENT & SECTIONS */}
      <RoomsAnimatedContent />

      {/* AEO — ANSWER ENGINE OPTIMIZED ACCORDION FAQ SECTION */}
      <FaqSection
        heading="Rooms & Accommodation FAQs"
        subtitle="Answers to common guest questions about accommodation types, room sizes, facilities, and bookings at Hotel Golden Pebble, Havelock."
        questions={[
          {
            question: "What room types are available at Golden Pebble Havelock?",
            answer: "Hotel Golden Pebble offers two comfortable room categories in Govind Nagar: Deluxe Room (220 sq ft) and Deluxe Room with Balcony (280 sq ft)."
          },
          {
            question: "How large is the Deluxe Room at Golden Pebble Havelock?",
            answer: "The Deluxe Room provides 220 sq ft of living space, featuring split air conditioning, warm timber accents, and an ensuite bathroom."
          },
          {
            question: "How large is the Deluxe Room with Balcony?",
            answer: "The Deluxe Room with Balcony provides 280 sq ft of space including a private balcony with seating overlooking tropical greenery."
          },
          {
            question: "Do the rooms at Golden Pebble have air conditioning?",
            answer: "Yes, all rooms at Hotel Golden Pebble are equipped with split air conditioning for individual climate control."
          },
          {
            question: "Do the rooms have attached bathrooms?",
            answer: "Yes, all rooms feature private attached ensuite bathrooms."
          },
          {
            question: "Is hot and cold water available?",
            answer: "Yes, 24-hour hot and cold running water is available in all attached ensuite bathrooms."
          },
          {
            question: "Is Wi-Fi available at Golden Pebble Havelock?",
            answer: "Yes, high-speed Wi-Fi access is available for guests throughout the property."
          },
          {
            question: "Does Golden Pebble have power backup?",
            answer: "Yes, 24x7 generator power backup is active across the property for uninterrupted guest comfort."
          },
          {
            question: "How can I enquire about room availability?",
            answer: (
              <span>
                You can enquire about room availability and direct bookings by visiting our{" "}
                <Link href="/contact" className="text-[#073F3B] font-bold underline hover:text-[#C5A46D]">
                  Contact page
                </Link>{" "}
                or contacting our reservations team directly at +91 9434288856.
              </span>
            )
          }
        ]}
      />

      <BookingCTA />
    </div>
  );
}
