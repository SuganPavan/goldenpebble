import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingCTA from "@/components/BookingCTA";
import RoomGalleryInteractive from "@/components/RoomGalleryInteractive";
import { ROOMS } from "@/lib/data/rooms";
import { constructMetadata } from "@/lib/seo";
import { CheckCircle2, Maximize2, BedDouble, Users, Eye, Phone, MessageSquare, ArrowRight, Tag, ShieldCheck } from "lucide-react";

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

  return constructMetadata({
    title: `${room.name} (${room.sizeSqFt} Sq Ft) Rates & Details`,
    description: `${room.description} Book ${room.name} at Golden Pebble Havelock starting from ${room.seasonRate.rackRate}/night incl. 5% GST.`,
    path: `/rooms/${room.slug}`
  });
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const resolvedParams = await params;
  const room = ROOMS.find((r) => r.slug === resolvedParams.slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-14 sm:pb-16 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Rooms", href: "/rooms" },
              { label: room.name }
            ]}
          />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-3">
            {room.name}
          </h1>
          <p className="text-sm text-[#E8DCC5] font-light mt-2">{room.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8 sm:space-y-10">
        
        {/* ROW 1: FIRST ROW COVERS ENTIRE ROOM IMAGE WITH INTERACTIVE SPECIFIC PHOTO SELECTOR */}
        <div className="w-full">
          <RoomGalleryInteractive
            mainImage={room.image}
            gallery={room.gallery}
            roomName={room.name}
          />
        </div>

        {/* ROW 2: PROMINENT ROOM PRICE & RATE BANNER */}
        <div className="bg-[#073F3B] text-white p-5 sm:p-6 rounded-2xl shadow-xl border-2 border-[#C5A46D]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C5A46D] mb-1">
              <Tag className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>OFFICIAL HOTEL ROOM TARIFF</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-[#F8F6EF]">
                {room.seasonRate.rackRate}
              </span>
              <span className="text-xs sm:text-sm font-sans text-white/80 font-normal">/ Night</span>
            </div>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-[#E8DCC5] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span>Rack Rate • 5% GST Included • Daily Breakfast Included</span>
            </div>
          </div>

          <Link
            href={`/contact?room=${encodeURIComponent(room.name)}`}
            className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-white text-[#073F3B] px-6 py-3.5 min-h-[48px] rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0 w-full sm:w-auto text-center"
          >
            <span>Enquire Room Rate</span>
            <ArrowRight className="w-4 h-4 text-[#073F3B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ROW 3: ROOM SPECIFICATIONS BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm text-xs text-[#063F3C]">
          <div className="flex flex-col items-center text-center">
            <Maximize2 className="w-5 h-5 text-[#C9A66B] mb-1" />
            <span className="font-bold">{room.sizeSqFt} Sq. Ft.</span>
            <span className="text-[11px] sm:text-xs text-[#1C2A28]/60 font-light">Spacious Area</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <BedDouble className="w-5 h-5 text-[#C9A66B] mb-1" />
            <span className="font-bold">{room.bedType}</span>
            <span className="text-[11px] sm:text-xs text-[#1C2A28]/60 font-light">Premium Bedding</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-5 h-5 text-[#C9A66B] mb-1" />
            <span className="font-bold">Max 3 Adults</span>
            <span className="text-[11px] sm:text-xs text-[#1C2A28]/60 font-light">+ 1 Child (&lt;12 yrs)</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Eye className="w-5 h-5 text-[#C9A66B] mb-1" />
            <span className="font-bold">{room.view}</span>
            <span className="text-[11px] sm:text-xs text-[#1C2A28]/60 font-light">Greenery View</span>
          </div>
        </div>

        {/* ROW 4: SANCTUARY OVERVIEW & VERIFIED ROOM AMENITIES */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
            Sanctuary Overview
          </h2>
          <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
            {room.description}
          </p>

          <h3 className="font-serif text-xl font-bold text-[#063F3C] pt-4 border-t border-[#E8DCC5]/60">
            Verified Room Amenities &amp; Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {room.amenities.map((am, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#063F3C]">
                <CheckCircle2 className="w-4 h-4 text-[#E98268] shrink-0" />
                <span>{am}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 5: DEDICATED STANDALONE SEPARATE ROW FOR ENQUIRE ABOUT ROOM */}
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
              <span>Go to Room Enquiry Form</span>
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
              <span>Call Desk: +91 9434288856</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#E8DCC5]/60 flex items-center justify-center gap-2 text-xs text-[#4E5C58]">
            <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
            <span>Direct hotel tariff • No booking fees • Instant response</span>
          </div>
        </div>

      </div>

      <BookingCTA />
    </div>
  );
}
