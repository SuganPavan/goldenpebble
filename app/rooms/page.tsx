import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoomShowcaseSection from "@/components/RoomShowcaseSection";
import BookingCTA from "@/components/BookingCTA";
import { ROOMS } from "@/lib/data/rooms";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { constructMetadata } from "@/lib/seo";
import { Check, Info } from "lucide-react";

export const metadata = constructMetadata({
  title: "Accommodations & Room Rates | Hotel Golden Pebble Havelock",
  description: "Explore Deluxe Rooms (220 sq ft) and Deluxe Rooms with Balcony (280 sq ft) at Hotel Golden Pebble. Transparent seasonal net payable rates starting from ₹3,600/night."
});

export default function RoomsPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="/images/hotel-gallery/deluxe-room-1.jpeg"
          alt="Golden Pebble Deluxe Rooms"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Rooms & Rates" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            Accommodations & Tariffs
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            Thoughtfully designed for island comfort. Transparent pricing with included daily breakfast and all applicable hotel taxes.
          </p>
        </div>
      </div>

      {/* Interactive Room Showcase Section */}
      <RoomShowcaseSection />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Detailed Rate Table extracted from PDF */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DCC5] shadow-sm mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#063F3C] mb-2">
            Transparent Hotel Rate & Season Breakdown
          </h3>
          <p className="text-xs text-[#1C2A28]/70 mb-6 font-light">
            All net payable rates below include daily breakfast and inclusive taxes.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#063F3C] text-[#F8F6EF] font-serif text-base">
                  <th className="p-4 rounded-tl-xl">Room Category</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Rack Rate</th>
                  <th className="p-4">Season Net Payable Rate<br/><span className="text-xs font-sans font-normal text-[#C9A66B]">(01 Nov 26 – 31 Mar 27*)</span></th>
                  <th className="p-4 rounded-tr-xl">Peak Season Net Payable<br/><span className="text-xs font-sans font-normal text-[#C9A66B]">(15 Dec 26 – 10 Jan 27)</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DCC5]">
                {ROOMS.map((rm) => (
                  <tr key={rm.id} className="hover:bg-[#F8F6EF]/50 transition-colors">
                    <td className="p-4 font-bold text-[#063F3C]">{rm.name}</td>
                    <td className="p-4 text-[#1C2A28]/80">{rm.sizeSqFt} Sq Ft</td>
                    <td className="p-4 text-[#1C2A28]/70">{rm.seasonRate.rackRate}</td>
                    <td className="p-4 font-bold text-[#063F3C] font-serif text-lg">{rm.seasonRate.netPayable}</td>
                    <td className="p-4 font-bold text-[#E98268] font-serif text-lg">{rm.peakSeasonRate.netPayable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-[#1C2A28]/60 mt-3 italic">
            *Season rate is valid from 01st Nov 2026 to 31st Mar 2027, excluding Peak Season dates (15th Dec 2026 to 10th Jan 2027).
          </p>
        </div>

        {/* Room Policies Accordions from PDF */}
        <div className="space-y-6">
          <h3 className="font-serif text-3xl font-semibold text-[#063F3C]">
            Important Occupancy & Stay Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOTEL_INFO.policies.map((pol, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8DCC5] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-[#C9A66B]" />
                  <h4 className="font-serif text-xl font-bold text-[#063F3C]">{pol.title}</h4>
                </div>
                <span className="text-xs text-[#E98268] uppercase tracking-wider font-semibold block mb-4">
                  {pol.subtitle}
                </span>
                <ul className="space-y-2 text-xs text-[#1C2A28]/80 font-light">
                  {pol.rules.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#063F3C] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
