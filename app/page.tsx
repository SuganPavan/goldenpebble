import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import OrganicDivider from "@/components/OrganicDivider";
import TestimonialSection from "@/components/TestimonialSection";
import BookingCTA from "@/components/BookingCTA";
import { ArrowRight, Utensils, Coffee, Award, Sparkles } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Hotel Golden Pebble | Premium Boutique Hotel in Havelock Island",
  description: "Official website for Hotel Golden Pebble, Havelock (Swaraj Deep), Andaman. Featuring Deluxe Rooms from ₹3,600/night, air-conditioned dining, curated holiday packages, and verified guest hospitality."
});

import AboutSection from "@/components/AboutSection";
import RoomShowcaseSection from "@/components/RoomShowcaseSection";
import TariffOfferSection from "@/components/TariffOfferSection";
import InteractivePackageShowcase from "@/components/InteractivePackageShowcase";
import UnforgettableActivitiesSection from "@/components/UnforgettableActivitiesSection";
import NearbyAttractionsShowcase from "@/components/NearbyAttractionsShowcase";
import GalleryMomentsSection from "@/components/GalleryMomentsSection";

export default function HomePage() {
  return (
    <div className="bg-[#F8F6EF] overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Golden Pebble Section */}
      <AboutSection />

      {/* 3. Room Details Section (Designed for Your Comfort) */}
      <RoomShowcaseSection />

      {/* 4. Official Hotel Tariff & Policies Offer Section */}
      <section className="py-6 sm:py-10 bg-[#F8F6EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TariffOfferSection />
        </div>
      </section>

      {/* 5. Curated Packages Section (Find Your Own Island Rhythm) */}
      <section className="py-10 sm:py-12 bg-[#F8F6EF] relative overflow-hidden">
        {/* Ambient Radial Luxury Lighting */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 85% 15%, rgba(197, 164, 109, 0.14) 0%, transparent 65%),
              radial-gradient(ellipse at 15% 85%, rgba(7, 61, 55, 0.08) 0%, transparent 65%)
            `
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Editorial Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-5 sm:mb-6 gap-3">
            <div className="max-w-3xl">
              {/* Gold Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073F3B]/5 border border-[#C5A46D]/40 text-[#073F3B] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>CURATED PACKAGES • ISLAND ESCAPES</span>
              </div>

              {/* Expressive Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#073F3B] leading-[1.12] text-balance">
                Find Your Own{" "}
                <span className="font-script text-2xl sm:text-4xl lg:text-5xl text-[#C5A46D] font-normal italic inline mt-0 tracking-wide">
                  Island Rhythm.
                </span>
              </h2>

              {/* Narrative Quote Description */}
              <div className="relative pl-4 border-l-2 border-[#C5A46D] mt-2">
                <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
                  From slow mornings beside the sea to unforgettable underwater adventures, discover a stay shaped around the way you want to experience Havelock.
                </p>
              </div>
            </div>

            {/* Premium Gold-bordered Navigation Button */}
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#073F3B] text-[#073F3B] hover:text-[#F8F6EF] border-2 border-[#C5A46D]/60 hover:border-[#073F3B] px-4 py-2.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl group shrink-0"
            >
              <span>EXPLORE ALL EXPERIENCES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#F8F6EF] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Interactive Package Showcase */}
          <InteractivePackageShowcase />
        </div>
      </section>

      {/* 6. Unforgettable Island Activities Section */}
      <UnforgettableActivitiesSection />

      {/* 7. Nearby Attractions Section */}
      <NearbyAttractionsShowcase />

      {/* 8. Moments That Stay Forever Gallery Section */}
      <GalleryMomentsSection />

      {/* 8. Restaurant & Dining Section */}
      <section className="relative bg-[#063F3C] text-white overflow-hidden">
        <OrganicDivider position="top" fillColor="#F8F6EF" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Food Image Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Golden Pebble Restaurant & Island Seafood Dining"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-script text-2xl text-[#E8DCC5] block leading-none">
                    Good Food Brighter Days
                  </span>
                  <span className="text-[10px] font-sans text-white/80 uppercase tracking-wider font-medium">
                    Fresh Seafood & Daily Breakfast
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content Right */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C9A66B]/40 text-[#C9A66B] text-[10px] font-sans font-bold tracking-[0.25em] uppercase">
                <Utensils className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>OUR RESTAURANT & DINING</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-balance">
                Fresh flavours.{" "}
                <span className="font-serif italic text-[#E8DCC5] inline">
                  Island soul.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed max-w-2xl">
                Savour fresh ocean seafood, local delicacies, and international cuisine in our fully air-conditioned 30-guest dining room. Complimentary breakfast is served daily for all in-house guests.
              </p>

              {/* Dining Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Utensils className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                  <span className="text-[11px] font-medium text-white/90">30 Guest AC Seating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Coffee className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                  <span className="text-[11px] font-medium text-white/90">Daily Breakfast Included</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <Award className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                  <span className="text-[11px] font-medium text-white/90">Meals @ ₹750 / ₹1,500</span>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-4">
                <Link
                  href="/restaurant"
                  className="inline-flex items-center gap-2 bg-[#E98268] hover:bg-[#d67056] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md group"
                >
                  <span>Explore Full Dining</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Marquee Food Photo Animation Strip */}
        <div className="relative pt-2 pb-10 z-10 overflow-hidden bg-black/20 border-t border-b border-white/10">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#063F3C] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#063F3C] to-transparent z-20 pointer-events-none" />
          
          <div className="px-4 mb-2 max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A66B] font-semibold">
              DINING HIGHLIGHTS & FRESH FOOD GALLERY
            </span>
            <span className="text-[10px] font-sans text-white/60 hidden sm:block">
              Hover to pause • Freshly prepared daily
            </span>
          </div>

          <div className="animate-marquee flex gap-4 px-4">
            {[
              {
                src: "/images/hotel-gallery/restaurant-1.png",
                title: "Golden Pebble Dining Hall",
                tag: "Air-Con Seating"
              },
              {
                src: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
                title: "Fresh Island Lobster",
                tag: "Catch of the Day"
              },
              {
                src: "/images/hotel-gallery/restaurant-2.png",
                title: "Breakfast & Dining",
                tag: "In-House Guests"
              },
              {
                src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
                title: "Andaman Seafood Curry",
                tag: "Local Speciality"
              },
              {
                src: "/images/hotel-gallery/restaurant-3.png",
                title: "30 Guest Dining Space",
                tag: "Pleasant Ambience"
              },
              {
                src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
                title: "Tropical Breakfast Spread",
                tag: "Complimentary"
              },
              {
                src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
                title: "Ocean Fresh Delicacies",
                tag: "Chef's Specials"
              },
              {
                src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
                title: "Tropical Coolers & Shakes",
                tag: "Refreshments"
              },
              // Duplicate set for continuous seamless loop
              {
                src: "/images/hotel-gallery/restaurant-1.png",
                title: "Golden Pebble Dining Hall",
                tag: "Air-Con Seating"
              },
              {
                src: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
                title: "Fresh Island Lobster",
                tag: "Catch of the Day"
              },
              {
                src: "/images/hotel-gallery/restaurant-2.png",
                title: "Breakfast & Dining",
                tag: "In-House Guests"
              },
              {
                src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
                title: "Andaman Seafood Curry",
                tag: "Local Speciality"
              },
              {
                src: "/images/hotel-gallery/restaurant-3.png",
                title: "30 Guest Dining Space",
                tag: "Pleasant Ambience"
              },
              {
                src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
                title: "Tropical Breakfast Spread",
                tag: "Complimentary"
              },
              {
                src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
                title: "Ocean Fresh Delicacies",
                tag: "Chef's Specials"
              },
              {
                src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
                title: "Tropical Coolers & Shakes",
                tag: "Refreshments"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="relative h-36 sm:h-44 w-52 sm:w-64 shrink-0 rounded-2xl overflow-hidden border border-[#C9A66B]/30 shadow-md group transition-all duration-300 hover:border-[#C9A66B]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#C9A66B] font-semibold block leading-tight">
                    {item.tag}
                  </span>
                  <span className="font-serif text-sm sm:text-base text-[#F8F6EF] font-normal block truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Guest Testimonials */}
      <TestimonialSection />

      {/* 10. Final Coral Booking CTA */}
      <BookingCTA />
    </div>
  );
}
