import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Hotel Golden Pebble Havelock",
  description: "Official check-in, booking, payment, and cancellation terms for Hotel Golden Pebble, Havelock."
});

export default function TermsPage() {
  return (
    <div className="bg-[#F8F6EF]">
      <div className="relative text-white pt-32 sm:pt-36 pb-12 sm:pb-14 overflow-hidden">
        <Image
          src="/images/golden-pebble-property.jpg"
          alt="Golden Pebble Property"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-3">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#E8DCC5] font-light mt-1">
            Simple Guidelines. Brighter Stays.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-6 text-sm text-[#1C2A28]/80 font-light leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">1. Booking & Payment Terms</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rooms are blocked provisionally until the specified cut-off date.</li>
            <li>Bookings will be confirmed only upon receipt of 50% advance payment.</li>
            <li>The remaining balance must be paid on or before check-in.</li>
            <li>Rates are subject to change without prior notice until booking is confirmed.</li>
            <li>Any increase in statutory government taxes or levies will be payable additionally.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">2. Cancellation Policy</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>0–7 Days Before Check-In:</strong> Cancellation made within 0 to 7 days will attract 100% cancellation charges (non-refundable).</li>
            <li><strong>8 Days or More Before Check-In:</strong> Cancellations made 8 days or more prior to check-in will be processed without cancellation charges (bank/transaction fees deducted).</li>
            <li><strong>Ferry Tickets:</strong> No refund will be provided for Government Ferry or Private Ferry tickets once purchased, irrespective of the cancellation date.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">3. Room Occupancy & Child Policy</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maximum Occupancy: 3 adults per room, with 1 child up to 12 years sharing existing bed with parents.</li>
            <li>Extra Mattress: Only one extra mattress is permitted per room.</li>
            <li>Infants & Children below 5 Years: Complimentary stay without extra bed, inclusive of breakfast.</li>
            <li>Children 5–12 Years: ₹800/day (without extra mattress) | ₹1,000/day (with extra mattress), plus taxes, inclusive of breakfast.</li>
            <li>Guests 12 Years & Above: Charged ₹1,250/day, plus taxes, inclusive of breakfast.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">4. Check-In & Photo ID Guidelines</h2>
          <p>
            All Indian guests must present a valid government-issued photo ID at check-in. Foreign Nationals / NRIs must present a valid Passport, Visa, and RAP (Restricted Area Permit) where applicable.
          </p>
        </div>
      </div>
    </div>
  );
}
