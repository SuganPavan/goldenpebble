import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TestimonialSection from "@/components/TestimonialSection";
import BookingCTA from "@/components/BookingCTA";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { constructMetadata } from "@/lib/seo";
import { CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Hotel Golden Pebble | Boutique Hospitality in Havelock",
  description: "Learn about Hotel Golden Pebble in Swaraj Deep, Andaman. Featuring authentic OTA ratings, peaceful island rooms, delicious restaurant dining, and travel partner support."
});

export default function AboutPage() {
  return (
    <div className="bg-[#F8F6EF]">
      {/* Hero Sub-header */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="/images/golden-pebble-property.jpg"
          alt="Hotel Golden Pebble Havelock"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            About Golden Pebble Havelock
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            Discover our commitment to comfortable, peaceful, and transparent hospitality in Swaraj Deep, Andaman & Nicobar Islands.
          </p>
        </div>
      </div>

      {/* Property Introduction & Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/golden-pebble-property.jpg"
              alt="Hotel Golden Pebble Walkway Corridor and Logo Emblem"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#063F3C] font-semibold block">
              OUR HOSPITALITY PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#063F3C] leading-tight">
              A Trusted Partner for Memorable Andaman Journeys
            </h2>
            <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
              Hotel Golden Pebble was established with a singular vision: to offer visitors to Havelock Island a clean, comfortable, and transparent sanctuary where guests can relax at their own pace.
            </p>
            <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
              Strategically located in Havelock (Swaraj Deep) near Govind Nagar Beach and key island transport hubs, our boutique hotel combines warm wooden room acoustics, split air-conditioning, freshly prepared dining, and direct guest assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DCC5]">
              {HOTEL_INFO.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E98268] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#063F3C] text-base">{item.title}</h3>
                    <p className="text-xs text-[#1C2A28]/70 font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified OTA Ratings Showcase */}
      <TestimonialSection />

      {/* Booking CTA */}
      <BookingCTA />
    </div>
  );
}
