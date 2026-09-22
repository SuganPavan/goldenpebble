import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { constructMetadata } from "@/lib/seo";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Reservations | Hotel Golden Pebble Havelock",
  description: "Contact Soni at Hotel Golden Pebble reservations. Phone & WhatsApp: +91 9434288856, Email: booking@goldenpebble.co.in. Reservation hours: 09:30 AM – 06:30 PM."
});

export default function ContactPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="/images/hotel-gallery/reception-1.jpeg"
          alt="Golden Pebble Reception and Front Desk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            Contact & Reservations
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            We look forward to welcoming you to Havelock Island. Reach out directly to Soni and our reservations team for instant assistance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Reservations Desk
              </h2>

              <div className="space-y-4 text-xs text-[#063F3C]">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <Phone className="w-5 h-5 text-[#C9A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">{HOTEL_INFO.contact.person}</span>
                    <a href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[#E98268] text-sm">
                      {HOTEL_INFO.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30">
                  <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">WhatsApp Instant Support</span>
                    <a
                      href={HOTEL_INFO.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#063F3C] font-semibold underline hover:text-[#25D366]"
                    >
                      Chat directly on WhatsApp ({HOTEL_INFO.contact.whatsapp})
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <Mail className="w-5 h-5 text-[#C9A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Official Email</span>
                    <a href={`mailto:${HOTEL_INFO.contact.email}`} className="hover:text-[#E98268]">
                      {HOTEL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <Clock className="w-5 h-5 text-[#C9A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Reservation Timings</span>
                    <span>{HOTEL_INFO.contact.timings}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <MapPin className="w-5 h-5 text-[#C9A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Property Address</span>
                    <span>{HOTEL_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Agent Friendly Card */}
            <div className="bg-[#063F3C] text-white p-6 rounded-2xl shadow-md border border-[#073D37]">
              <div className="flex items-center gap-2 mb-2 text-[#C9A66B]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold">Travel Agent Friendly</h3>
              </div>
              <p className="text-xs text-[#F8F6EF]/80 font-light leading-relaxed">
                We offer competitive travel-agent rates, quick confirmations, and hassle-free coordination for FIT and group bookings across Andaman packages.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <EnquiryForm defaultEnquiryType="Room booking" />
          </div>
        </div>
      </div>
    </div>
  );
}
