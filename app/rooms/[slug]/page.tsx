import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingCTA from "@/components/BookingCTA";
import RoomGalleryInteractive from "@/components/RoomGalleryInteractive";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";
import { ROOMS } from "@/lib/data/rooms";
import { constructMetadata } from "@/lib/seo";
import { 
  generateHotelSchema, 
  generateBreadcrumbSchema, 
  generateFaqSchema 
} from "@/lib/structuredData";
import { 
  CheckCircle2, 
  Maximize2, 
  BedDouble, 
  Eye, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  MapPin, 
  Compass, 
  Sparkles,
  Utensils,
  Camera
} from "lucide-react";

interface RoomDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomDetailPageProps) {
  const resolvedParams = await params;
  const room = ROOMS.find((r) => r.slug === resolvedParams.slug);
  if (!room) return {};

  const isBalcony = room.slug === "deluxe-room-with-balcony";

  return constructMetadata({
    title: isBalcony 
      ? "Deluxe Room with Balcony in Havelock Island | Hotel Golden Pebble"
      : "Deluxe Room in Havelock Island | Hotel Golden Pebble",
    description: isBalcony
      ? "Explore the Deluxe Room with Balcony at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep), with 280 sq ft of space and a private balcony."
      : "Explore the Deluxe Room at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep), with 220 sq ft of comfortable accommodation and a tropical garden view.",
    path: `/rooms/${room.slug}`
  });
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const resolvedParams = await params;
  const room = ROOMS.find((r) => r.slug === resolvedParams.slug);

  if (!room) {
    notFound();
  }

  const isBalcony = room.slug === "deluxe-room-with-balcony";
  const otherRoom = ROOMS.find((r) => r.slug !== room.slug) || ROOMS[0];

  // Verified Structured Data Schemas
  const hotelSchema = generateHotelSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Rooms", item: "/rooms" },
    { name: room.name, item: `/rooms/${room.slug}` }
  ]);

  // Verified Room Specific FAQs (Visible FAQ === JSON-LD FAQ 100% Match)
  const roomFaqs = isBalcony
    ? [
        {
          question: "What is the size of the Deluxe Room with Balcony?",
          answer: "The Deluxe Room with Balcony offers 280 sq ft of spacious accommodation at Hotel Golden Pebble in Govind Nagar."
        },
        {
          question: "Does the Deluxe Room with Balcony have a private balcony?",
          answer: "Yes, it features a private outdoor balcony with seating overlooking the garden and lush tropical canopy."
        },
        {
          question: "What bed configuration is available?",
          answer: "The Deluxe Room with Balcony is outfitted with a plush King Size Bed."
        },
        {
          question: "Does the room have air conditioning?",
          answer: "Yes, the room features split air conditioning, 24x7 generator backup, and ensuite hot and cold water shower."
        },
        {
          question: "What is the current room rate for the Deluxe Room with Balcony?",
          answer: "The current verified rate is ₹6,824 / night (Rack Rate including 5% GST and complimentary daily breakfast)."
        }
      ]
    : [
        {
          question: "What is the size of the Deluxe Room?",
          answer: "The Deluxe Room offers 220 sq ft of comfortable accommodation at Hotel Golden Pebble in Govind Nagar."
        },
        {
          question: "Does the Deluxe Room have a garden view?",
          answer: "Yes, the room offers a peaceful Tropical Garden View."
        },
        {
          question: "What bed configuration is available in the Deluxe Room?",
          answer: "The Deluxe Room offers a choice of King Bed or Twin Beds."
        },
        {
          question: "Does the room have air conditioning?",
          answer: "Yes, the room features split air conditioning, 24x7 generator backup, and ensuite hot and cold water shower."
        },
        {
          question: "What is the current room rate for the Deluxe Room?",
          answer: "The current verified rate is ₹5,774 / night (Rack Rate including 5% GST and complimentary daily breakfast)."
        }
      ];

  const faqSchema = generateFaqSchema(roomFaqs);

  // Exact HotelRoom & Offer Product Schema
  const roomProductSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `https://goldenpebble.co.in/rooms/${room.slug}/#room`,
    "name": `${room.name} at Hotel Golden Pebble`,
    "description": room.description,
    "image": room.image,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 3
    },
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": room.bedType
    },
    "amenityFeature": room.amenities.map((am) => ({
      "@type": "LocationFeatureSpecification",
      "name": am,
      "value": true
    })),
    "offers": {
      "@type": "Offer",
      "price": isBalcony ? "6824" : "5774",
      "priceCurrency": "INR",
      "url": `https://goldenpebble.co.in/rooms/${room.slug}`
    }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomProductSchema) }}
      />

      {/* HEADER BANNER */}
      <div className="relative text-white pt-32 sm:pt-36 pb-14 sm:pb-16 overflow-hidden bg-[#073F3B]">
        <Image
          src={room.image}
          alt={`${room.name} at Hotel Golden Pebble in Havelock Island`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/65 to-black/60 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Rooms", href: "/rooms" },
              { label: room.name }
            ]}
          />

          <ScrollReveal variant="fade-down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[11px] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase mt-4 mb-2 shadow-sm backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>BOUTIQUE HAVELOCK ACCOMMODATION</span>
            </div>
          </ScrollReveal>

          {/* Exactly ONE H1 tag per room page */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
              {room.name} at Hotel Golden Pebble
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="text-xs sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-2 font-light leading-relaxed drop-shadow-sm">
              {room.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* AEO ANSWER-FIRST ROOM SUMMARY */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
              ROOM SUMMARY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
              Accommodation Overview
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4E5C58] font-light leading-relaxed">
              {isBalcony ? (
                "Hotel Golden Pebble's Deluxe Room with Balcony offers 280 sq ft of accommodation in Govind Nagar, Havelock Island (Swaraj Dweep), with a garden and canopy view, king-size bed, private balcony with seating, split air conditioning and an attached ensuite bathroom with hot and cold water."
              ) : (
                "Hotel Golden Pebble's Deluxe Room offers 220 sq ft of comfortable accommodation in Govind Nagar, Havelock Island (Swaraj Dweep), with a tropical garden view, flexible king or twin-bed configuration, split air conditioning and an attached ensuite bathroom with hot and cold water."
              )}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8 sm:space-y-10">
        
        {/* ROW 1: INTERACTIVE PHOTO GALLERY */}
        <ScrollReveal variant="fade-up">
          <div className="w-full">
            <RoomGalleryInteractive
              mainImage={room.image}
              gallery={room.gallery}
              roomName={room.name}
            />
          </div>
        </ScrollReveal>

        {/* ROW 2: PROMINENT ROOM PRICE & RATE BANNER */}
        <ScrollReveal variant="fade-up">
          <div className="bg-[#073F3B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#C5A46D]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C5A46D] mb-1">
                <Tag className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>OFFICIAL ROOM TARIFF</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-3xl sm:text-5xl text-[#F8F6EF]">
                  {room.seasonRate.rackRate}
                </span>
                <span className="text-sm sm:text-base font-sans text-white/80 font-normal">/ night</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-[#E8DCC5] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span>Rack Rate &bull; 5% GST Included &bull; Daily Breakfast Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/contact?room=${encodeURIComponent(room.name)}`}
                className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-7 py-3.5 min-h-[48px] rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0 text-center"
              >
                <span>BOOK YOUR STAY</span>
                <ArrowRight className="w-4 h-4 text-[#073F3B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/rooms"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 min-h-[48px] rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md shrink-0 text-center"
              >
                <span>VIEW ALL ROOMS</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 3: SCANNABLE ROOM SPECIFICATIONS BAR */}
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-3xl bg-white border border-[#E8DCC5] shadow-sm text-xs text-[#073F3B]">
            <div className="flex flex-col items-center text-center p-2">
              <Maximize2 className="w-5 h-5 text-[#C5A46D] mb-1.5" />
              <span className="font-bold text-sm sm:text-base font-serif">{room.sizeSqFt} Sq Ft</span>
              <span className="text-[11px] text-[#4E5C58] font-light">Room Size</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <Eye className="w-5 h-5 text-[#C5A46D] mb-1.5" />
              <span className="font-bold text-xs sm:text-sm font-serif">{room.view}</span>
              <span className="text-[11px] text-[#4E5C58] font-light">View</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <BedDouble className="w-5 h-5 text-[#C5A46D] mb-1.5" />
              <span className="font-bold text-xs sm:text-sm font-serif">{room.bedType}</span>
              <span className="text-[11px] text-[#4E5C58] font-light">Bed Configuration</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <Sparkles className="w-5 h-5 text-[#C5A46D] mb-1.5" />
              <span className="font-bold text-xs sm:text-sm font-serif">{isBalcony ? "Private Balcony" : "Split Air Conditioning"}</span>
              <span className="text-[11px] text-[#4E5C58] font-light">{isBalcony ? "Outdoor Space" : "Air Conditioning"}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 4: SANCTUARY OVERVIEW & VERIFIED AMENITIES */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block mb-1">
                ROOM DETAILS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                Sanctuary Overview
              </h2>
              <p className="text-sm sm:text-base text-[#4E5C58] font-light leading-relaxed mt-2">
                {room.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8DCC5]/60 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#073F3B]">
                Verified Room Amenities &amp; Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                {room.amenities.map((am, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#073F3B] bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DCC5]/60 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 5: HOTEL LOCATION POSITIONING */}
        <ScrollReveal variant="fade-up">
          <div className="bg-[#073F3B] text-white p-6 sm:p-8 rounded-3xl border border-[#C5A46D]/40 shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D]">
                HOTEL LOCATION &amp; ACCESSIBILITY
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Stay in Govind Nagar, Havelock Island
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed">
              Located in Govind Nagar, Hotel Golden Pebble provides a comfortable base for guests exploring Havelock Island&apos;s beaches, water adventures and local attractions. Guests can conveniently access <Link href="/nearby-locations/radhanagar-beach" className="text-[#F3D39B] underline">Radhanagar Beach</Link>, <Link href="/nearby-locations/elephant-beach" className="text-[#F3D39B] underline">Elephant Beach</Link>, <Link href="/nearby-locations/kalopathar-beach" className="text-[#F3D39B] underline">Kalopathar Beach</Link>, and Havelock Jetty.
            </p>
          </div>
        </ScrollReveal>

        {/* ROW 6: CONTEXTUAL INTERNAL NAVIGATION LINKS */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white p-6 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
              EXPLORE MORE OF HOTEL GOLDEN PEBBLE
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans font-bold">
              <Link href="/packages" className="p-3 bg-[#FAF8F5] hover:bg-[#073F3B] hover:text-white rounded-xl border border-[#E8DCC5] transition-all flex items-center justify-between group">
                <span>Stay Packages</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </Link>
              <Link href="/activities" className="p-3 bg-[#FAF8F5] hover:bg-[#073F3B] hover:text-white rounded-xl border border-[#E8DCC5] transition-all flex items-center justify-between group">
                <span>Water Activities</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </Link>
              <Link href="/restaurant" className="p-3 bg-[#FAF8F5] hover:bg-[#073F3B] hover:text-white rounded-xl border border-[#E8DCC5] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Restaurant</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </Link>
              <Link href="/gallery" className="p-3 bg-[#FAF8F5] hover:bg-[#073F3B] hover:text-white rounded-xl border border-[#E8DCC5] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Gallery</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 7: RELATED ROOM SECTION */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
              EXPLORE OTHER ACCOMMODATIONS
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#073F3B]">
              Explore Other Rooms
            </h2>

            <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#E8DCC5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden border border-[#E8DCC5] shrink-0">
                  <Image
                    src={otherRoom.image}
                    alt={otherRoom.name}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#073F3B]">
                    {otherRoom.name}
                  </h3>
                  <p className="text-xs text-[#4E5C58] font-light mt-1">
                    {otherRoom.sizeSqFt} Sq Ft &bull; {otherRoom.view} &bull; {otherRoom.bedType}
                  </p>
                  <p className="text-sm font-serif font-bold text-[#073F3B] mt-1.5">
                    {otherRoom.seasonRate.rackRate} <span className="text-xs font-sans font-normal text-[#4E5C58]">/ night</span>
                  </p>
                </div>
              </div>

              <Link
                href={`/rooms/${otherRoom.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm shrink-0"
              >
                <span>VIEW ROOM DETAILS →</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 8: VISIBLE FAQ ACCORDION SECTION */}
        <ScrollReveal variant="fade-up">
          <FaqSection
            heading={`Frequently Asked Questions (${room.name})`}
            subtitle="Verified accommodation information regarding room size, view, bed configuration, and tariffs."
            questions={roomFaqs}
          />
        </ScrollReveal>

        {/* ROW 9: RESERVATION ENQUIRY BOX */}
        <ScrollReveal variant="fade-up">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCC5] shadow-xl text-center space-y-6">
            <div>
              <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-[#073F3B]/10 text-[#073F3B] text-xs font-sans font-bold uppercase tracking-wider mb-2.5 shadow-xs">
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>ROOM RESERVATION ENQUIRY</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#073F3B]">
                Enquire About {room.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E5C58] font-light max-w-2xl mx-auto mt-2 leading-relaxed">
                Interested in staying in our {room.name} ({room.sizeSqFt} sq ft)? Contact our reservations desk directly for room availability, seasonal tariffs, and instant reservation assistance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-3xl mx-auto pt-2">
              {/* Primary Direct Enquiry Link */}
              <Link
                href={`/contact?room=${encodeURIComponent(room.name)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] min-h-[48px] px-8 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>BOOK YOUR STAY</span>
                <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:text-[#073F3B] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Instant WhatsApp Enquiry Link */}
              <a
                href={`https://wa.me/919434288856?text=${encodeURIComponent(`Hi Golden Pebble Havelock, I would like to enquire about booking the ${room.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white min-h-[48px] px-8 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry</span>
              </a>

              {/* Direct Call Link */}
              <a
                href="tel:+919434288856"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F8F6EF] hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] min-h-[48px] px-8 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#C5A46D]" />
                <span>CONTACT RESERVATIONS</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#E8DCC5]/60 flex items-center justify-center gap-2 text-xs text-[#4E5C58]">
              <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span>Direct hotel tariff &bull; No booking fees &bull; Instant response</span>
            </div>
          </div>
        </ScrollReveal>

      </div>

      <BookingCTA />
    </div>
  );
}
