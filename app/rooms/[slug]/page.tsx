import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import BookingCTA from "@/components/BookingCTA";
import { ROOMS } from "@/lib/data/rooms";
import { constructMetadata } from "@/lib/seo";
import { CheckCircle2, Maximize2, BedDouble, Users, Eye } from "lucide-react";

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
    description: `${room.description} Book ${room.name} at Golden Pebble Havelock starting from ${room.seasonRate.netPayable}/night incl. breakfast & taxes.`,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Room Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Gallery Grid */}
            <div className="space-y-4">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {room.gallery.map((img, i) => (
                  <div key={i} className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={img}
                      alt={`${room.name} photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Room Specifications Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm text-xs text-[#063F3C]">
              <div className="flex flex-col items-center text-center">
                <Maximize2 className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{room.sizeSqFt} Sq. Ft.</span>
                <span className="text-[10px] text-[#1C2A28]/60 font-light">Spacious Area</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <BedDouble className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{room.bedType}</span>
                <span className="text-[10px] text-[#1C2A28]/60 font-light">Premium Bedding</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">Max 3 Adults</span>
                <span className="text-[10px] text-[#1C2A28]/60 font-light">+ 1 Child (&lt;12 yrs)</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Eye className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{room.view}</span>
                <span className="text-[10px] text-[#1C2A28]/60 font-light">Greenery View</span>
              </div>
            </div>

            {/* Room Description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Sanctuary Overview
              </h2>
              <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                {room.description}
              </p>

              <h3 className="font-serif text-xl font-bold text-[#063F3C] pt-4 border-t border-[#E8DCC5]/60">
                Verified Room Amenities & Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {room.amenities.map((am, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#063F3C]">
                    <CheckCircle2 className="w-4 h-4 text-[#E98268] shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate Breakdown Table for this Room */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#063F3C]">
                Official PDF Rate Breakdown
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#063F3C] text-sm block">Season Rate</span>
                    <span className="text-[#1C2A28]/70">{room.seasonRate.validity}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-xl text-[#063F3C]">{room.seasonRate.netPayable}</span>
                    <span className="text-[10px] text-[#063F3C]/80 block font-light">Net Payable / Night</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#E98268]/10 border border-[#E98268]/30 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#E98268] text-sm block">Peak Season Rate</span>
                    <span className="text-[#1C2A28]/70">{room.peakSeasonRate.validity}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-xl text-[#E98268]">{room.peakSeasonRate.netPayable}</span>
                    <span className="text-[10px] text-[#1C2A28]/80 block font-light">Net Payable / Night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <EnquiryForm
                defaultRoomCategory={`${room.name} (${room.sizeSqFt} sq ft)`}
                defaultEnquiryType="Room booking"
              />
            </div>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
