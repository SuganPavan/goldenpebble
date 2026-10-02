"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import WaterAdventuresTheater from "@/components/WaterAdventuresTheater";
import { 
  Clock, 
  MapPin, 
  Check, 
  X, 
  ChevronDown, 
  MessageCircle, 
  ArrowRight, 
  Sparkles,
  Ship,
  HelpCircle,
  BedDouble,
  Compass
} from "lucide-react";
import { Package, PACKAGES } from "@/lib/data/packages";
import { generateHotelSchema, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/structuredData";

interface PackageDetailTemplateProps {
  pkg: Package;
}

export default function PackageDetailTemplate({ pkg }: PackageDetailTemplateProps) {
  const [openFerryInfo, setOpenFerryInfo] = useState<boolean>(true);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Structured Data Schemas
  const hotelSchema = generateHotelSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Packages", item: "/packages" },
    { name: pkg.name, item: `/packages/${pkg.slug}` }
  ]);

  const packageFaqs = [
    {
      question: `What is included in the ${pkg.name} package?`,
      answer: `${pkg.name} includes boutique hotel accommodation at Hotel Golden Pebble in Govind Nagar, daily complimentary breakfast, inter-island ferry cruise transfers, and airport pickup/drop transfers as specified in the itinerary.`
    },
    {
      question: `How many nights does the ${pkg.name} package cover?`,
      answer: `This package covers ${pkg.duration} ${pkg.nightSplit}.`
    },
    {
      question: "Where is the hotel accommodation located?",
      answer: "Hotel Golden Pebble is located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands - 744211."
    },
    {
      question: "Are inter-island ferry transfers included?",
      answer: "Yes, all inter-island ferry cruise transfers between Port Blair, Havelock Island, and Neil Island specified in the itinerary are included."
    },
    {
      question: "Are water activities included or optional?",
      answer: "Water activities (such as scuba diving, sea walk, jet skiing, and snorkeling) are optional and available on direct payment basis at respective beach centers."
    },
    {
      question: "How can I enquire about the package rate and availability?",
      answer: "Contact our reservations team directly at +91 9434288856 or submit an enquiry form on our Contact page for current package rates and availability."
    }
  ];

  const faqSchema = generateFaqSchema(packageFaqs);

  // Other related packages (excluding current package)
  const relatedPackages = PACKAGES.filter((p) => p.slug !== pkg.slug).slice(0, 3);

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

      {/* 1. HERO BANNER */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src={pkg.image}
          alt={`${pkg.name} experience in Havelock Island - Hotel Golden Pebble`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/65 to-black/60 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Packages", href: "/packages" },
              { label: pkg.name }
            ]}
          />

          <ScrollReveal variant="fade-down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[11px] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase mt-4 mb-2 shadow-sm backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>{pkg.duration} &bull; {pkg.nightSplit}</span>
            </div>
          </ScrollReveal>

          {/* Exactly ONE H1 tag on the page */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-1 leading-tight text-white drop-shadow-md">
              {pkg.name}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-[#E8DCC5] font-semibold">
              <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span>{pkg.route}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <p className="text-sm sm:text-sm lg:text-base text-[#F8F6EF]/90 max-w-3xl mt-4 font-light leading-relaxed drop-shadow-sm">
              {pkg.description}
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal variant="fade-up" delay={0.5}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-6">
              <Link
                href={`/contact?package=${pkg.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-[#C5A46D] hover:bg-white text-[#073F3B] pl-6 pr-2 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group text-center"
              >
                <span>ENQUIRE ABOUT THIS PACKAGE</span>
                <div className="w-7 h-7 rounded-full bg-[#073F3B]/10 group-hover:bg-[#073F3B] group-hover:text-white text-[#073F3B] flex items-center justify-center transition-all shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <Link
                href="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md text-center"
              >
                <span>EXPLORE ALL PACKAGES →</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. AEO ANSWER-FIRST PACKAGE OVERVIEW */}
      <ScrollReveal variant="fade-up">
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DCC5] shadow-sm space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
              PACKAGE OVERVIEW
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
              Package Overview
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4E5C58] font-light leading-relaxed">
              {pkg.name} is a {pkg.duration} Andaman holiday package based at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep). The package combines boutique hotel accommodation with verified inter-island transfers, daily breakfast, and sightseeing excursions to island attractions. Contact our reservations team for current package rates and details.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. QUICK INFORMATION BLOCKS */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 sm:p-2.5 rounded-[2rem] bg-[#F8F6EF] border border-[#E8DCC5] shadow-sm">
          <ScrollReveal variant="stagger-container" staggerDelay={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-1">
            {pkg.quickInfo.map((info, qIdx) => (
              <ScrollRevealItem key={qIdx} variant="scale-up">
                <div className="bg-white px-2.5 py-3.5 sm:p-4 rounded-[calc(2rem-0.625rem)] border border-[#E8DCC5]/70 flex flex-col items-center text-center justify-center shadow-2xs hover:border-[#C5A46D] hover:scale-[1.02] transition-all min-h-[90px] sm:min-h-[100px]">
                  <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-bold text-[#C5A46D] mb-1 text-center">
                    {info.label}
                  </span>
                  <span className="font-serif font-bold text-xs xs:text-sm sm:text-base lg:text-lg text-[#073F3B] leading-snug text-center max-w-full px-1">
                    {info.value}
                  </span>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 4. ROUTE VISUAL STEPPER */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
          <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 border border-[#E8DCC5]/60">
            <ScrollReveal variant="fade-up">
              <span className="text-xs sm:text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                ISLAND HOPPING ROUTE
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#073F3B] mb-6">
                Journey Sequence
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="stagger-container" staggerDelay={0.15} className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-2.5 sm:gap-3">
              {pkg.routeSteps.map((step, sIdx) => (
                <ScrollRevealItem key={sIdx} variant="fade-up" className="flex-none sm:flex-initial lg:flex-1 flex flex-col sm:flex-row items-center max-w-full w-full sm:w-auto">
                  <div className="flex items-center gap-2.5 sm:gap-3 bg-white px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-2xl border border-[#E8DCC5] justify-center shadow-2xs hover:border-[#C5A46D] hover:scale-[1.02] transition-all min-w-0 w-full sm:w-auto">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#073F3B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {sIdx + 1}
                    </span>
                    <span className="font-serif font-bold text-xs sm:text-sm lg:text-base text-[#073F3B] truncate">
                      {step}
                    </span>
                  </div>
                  {sIdx < pkg.routeSteps.length - 1 && (
                    <>
                      <div className="my-1 text-[#C5A46D] font-bold text-xs sm:hidden shrink-0">
                        ↓
                      </div>
                      <div className="hidden sm:block mx-1 sm:mx-1.5 text-[#C5A46D] font-bold text-xs sm:text-sm lg:text-base shrink-0">
                        →
                      </div>
                    </>
                  )}
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-10">

        {/* 5. DAY-BY-DAY ITINERARY SECTION */}
        <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
          <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-8">
            <ScrollReveal variant="fade-up">
              <div>
                <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                  COMPLETE DAY-BY-DAY PROGRAM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073F3B]">
                  {pkg.name} Itinerary
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 before:w-0.5 before:bg-[#C5A46D]/40">
              {pkg.itinerary.map((dayItem, dIdx) => (
                <motion.div
                  key={dayItem.day}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (dIdx % 2) * 0.1,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className="relative pl-12 sm:pl-14 group"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#073F3B] text-white text-xs sm:text-sm font-bold flex items-center justify-center border-4 border-[#FAF8F5] shadow-md group-hover:bg-[#C5A46D] group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
                    D{dayItem.day}
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DCC5] space-y-3 shadow-2xs hover:border-[#C5A46D] hover:shadow-xl hover:scale-[1.015] hover:-translate-y-1 hover:bg-[#FFFDF9] transition-all duration-300 cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DCC5]/60 pb-3">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#073F3B] group-hover:text-[#C5A46D] transition-colors">
                        {dayItem.title}
                      </h3>
                      {dayItem.overnight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#073F3B]/10 text-[#073F3B] font-sans text-[10.5px] font-bold uppercase tracking-wider border border-[#073F3B]/15 shrink-0 self-start sm:self-auto">
                          <span>🌙</span>
                          <span>{dayItem.overnight}</span>
                        </span>
                      )}
                    </div>

                    <p className="font-sans text-sm sm:text-sm text-[#4E5C58] font-light leading-relaxed">
                      {dayItem.description}
                    </p>

                    {dayItem.activities && dayItem.activities.length > 0 && (
                      <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-[#E8DCC5]/40">
                        <span className="text-[11px] sm:text-xs font-sans uppercase font-bold tracking-wider text-[#C5A46D] shrink-0">
                          KEY ACTIVITIES:
                        </span>
                        {dayItem.activities.map((act, aIdx) => (
                          <span
                            key={aIdx}
                            className="px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A46D]/50 text-[#073F3B] font-sans text-[11px] font-bold flex items-center gap-1.5 shadow-2xs group-hover:border-[#C5A46D] group-hover:bg-white transition-all"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                            <span>{act}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. INCLUSIONS & EXCLUSIONS SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* What's Included */}
          <ScrollReveal variant="fade-right">
            <div className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm h-full">
              <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 border border-[#E8DCC5]/60 space-y-5 h-full">
                <h2 className="font-serif text-2xl font-bold text-[#073F3B] flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#073F3B]/10 border border-[#073F3B]/15 text-[#073F3B]">
                    <Check className="w-5 h-5 text-[#073F3B]" />
                  </div>
                  <span>What&apos;s Included</span>
                </h2>

                <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#4E5C58] font-light">
                  {pkg.inclusions.map((inc, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DCC5]/70 shadow-2xs hover:border-[#C5A46D] hover:translate-x-1 transition-all">
                      <div className="w-5 h-5 rounded-full bg-[#073F3B]/10 text-[#073F3B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#073F3B]" />
                      </div>
                      <span className="leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* What's Not Included */}
          <ScrollReveal variant="fade-left">
            <div className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm h-full">
              <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 border border-[#E8DCC5]/60 space-y-5 h-full">
                <h2 className="font-serif text-2xl font-bold text-[#073F3B] flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#E98268]/10 border border-[#E98268]/20 text-[#E98268]">
                    <X className="w-5 h-5 text-[#E98268]" />
                  </div>
                  <span>What&apos;s Not Included</span>
                </h2>

                <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#4E5C58] font-light">
                  {pkg.exclusions.map((exc, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DCC5]/70 shadow-2xs hover:border-[#E98268] hover:translate-x-1 transition-all">
                      <div className="w-5 h-5 rounded-full bg-[#E98268]/15 text-[#E98268] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-[#E98268]" />
                      </div>
                      <span className="leading-snug">{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 7. OPTIONAL WATER ADVENTURES */}
        {pkg.waterAdventures && pkg.waterAdventures.length > 0 && (
          <WaterAdventuresTheater adventures={pkg.waterAdventures} />
        )}

        {/* 8. ACCOMMODATION AT HOTEL GOLDEN PEBBLE */}
        <ScrollReveal variant="fade-up">
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 border border-[#E8DCC5]/60 space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
                INCLUDED ACCOMMODATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                Your Stay at Hotel Golden Pebble
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
                Guests stay at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep). Accommodation options include air-conditioned <Link href="/rooms/deluxe-room" className="text-[#073F3B] font-bold underline hover:text-[#C5A46D]">Deluxe Rooms (220 sq ft)</Link> and <Link href="/rooms/deluxe-room-with-balcony" className="text-[#073F3B] font-bold underline hover:text-[#C5A46D]">Deluxe Rooms with Balcony (280 sq ft)</Link>, equipped with split AC, ensuite hot &amp; cold water bathrooms, 24x7 generator power backup, and high-speed Wi-Fi.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link href="/rooms" className="text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] inline-flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-[#C5A46D]" />
                  <span>Explore All Accommodations &rarr;</span>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 9. DESTINATION LOCATION CONTEXT */}
        <ScrollReveal variant="fade-up">
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#073F3B] text-white rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#C5A46D]/40 shadow-xl space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
                LOCALITY &amp; ACCESSIBILITY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Explore Havelock Island
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed">
                Hotel Golden Pebble is situated in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands - 744211. Our inland boutique property provides a convenient base for exploring famous beaches (<Link href="/nearby-locations/radhanagar-beach" className="text-[#F3D39B] underline">Radhanagar Beach</Link>, <Link href="/nearby-locations/elephant-beach" className="text-[#F3D39B] underline">Elephant Beach</Link>, <Link href="/nearby-locations/kalopathar-beach" className="text-[#F3D39B] underline">Kalopathar Beach</Link>) and island activity centers.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 10. PRIVATE FERRY INFORMATION */}
        {pkg.privateFerryInfo && pkg.privateFerryInfo.length > 0 && (
          <ScrollReveal variant="fade-up">
            <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
              <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] overflow-hidden border border-[#E8DCC5]/60">
                <button
                  onClick={() => setOpenFerryInfo(!openFerryInfo)}
                  className="w-full p-6 text-left font-serif font-bold text-xl text-[#073F3B] flex items-center justify-between hover:text-[#C5A46D] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#073F3B]/10 border border-[#073F3B]/15 text-[#073F3B]">
                      <Ship className="w-5 h-5 text-[#073F3B]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
                        INTER-ISLAND LOGISTICS
                      </span>
                      <span>Private Ferry Information</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#C5A46D] transition-transform duration-300 ${openFerryInfo ? "rotate-180" : ""}`} />
                </button>

                {openFerryInfo && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#E8DCC5]/60 space-y-3 font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
                    {pkg.privateFerryInfo.map((ferryItem, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-[#E8DCC5]/70 shadow-2xs hover:border-[#C5A46D] transition-all">
                        <div className="w-2 h-2 rounded-full bg-[#C5A46D] shrink-0 mt-2" />
                        <span>{ferryItem}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* 11. RELATED PACKAGES SECTION (LINK BACK TO COMPLETE COLLECTION) */}
        <ScrollReveal variant="fade-up">
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-6">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                  EXPLORE MORE ITINERARIES
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                  Explore More Andaman Packages
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed mt-1">
                  Discover other stay packages at Hotel Golden Pebble tailored for different trip durations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPackages.map((relPkg, rIdx) => (
                  <motion.div
                    key={rIdx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rIdx * 0.1, duration: 0.5 }}
                    className="bg-white p-5 rounded-2xl border border-[#E8DCC5] shadow-2xs hover:border-[#C5A46D] hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-[#C5A46D] font-bold block mb-1">
                        {relPkg.duration}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-[#073F3B] hover:text-[#C5A46D] transition-colors">
                        {relPkg.name}
                      </h3>
                      <p className="font-sans text-xs text-[#4E5C58] font-light line-clamp-2 mt-1 leading-relaxed">
                        {relPkg.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#E8DCC5]">
                      <Link href={`/packages/${relPkg.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] transition-colors">
                        <span>VIEW PACKAGE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-2">
                <Link 
                  href="/packages" 
                  className="inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <Compass className="w-4 h-4 text-[#C5A46D]" />
                  <span>Explore All Andaman Packages &rarr;</span>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        <ScrollReveal variant="fade-up">
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-6">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                  PACKAGE FAQS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {packageFaqs.map((faq, fIdx) => {
                  const isOpen = openFaqIdx === fIdx;
                  return (
                    <div 
                      key={fIdx}
                      className="rounded-2xl border border-[#E8DCC5] bg-white overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full p-4 text-left font-serif font-bold text-sm sm:text-base text-[#073F3B] flex items-center justify-between hover:text-[#C5A46D] transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <HelpCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#C5A46D] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 font-sans text-xs sm:text-sm text-[#4E5C58] font-light border-t border-[#E8DCC5]/60 leading-relaxed pl-10">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 13. FINAL ENQUIRE NOW CTA SECTION */}
      <ScrollReveal variant="scale-up">
        <section className="relative py-20 bg-[#073F3B] text-white overflow-hidden mt-12 border-t-2 border-[#C5A46D]/60">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt={`Plan your ${pkg.name} package - Hotel Golden Pebble`}
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B] via-[#073F3B]/70 to-black/60 z-0 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/50 text-[#C5A46D] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>START YOUR ISLAND ADVENTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-white drop-shadow-md">
              Plan Your {pkg.name} Package
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#F8F6EF]/90 font-light max-w-xl mx-auto leading-relaxed">
              Contact our reservations team for current rates, room selection, and customized itineraries.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href={`/contact?package=${pkg.slug}`}
                className="inline-flex items-center justify-between gap-3 bg-[#C5A46D] hover:bg-white text-[#073F3B] pl-7 pr-2 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group"
              >
                <span>ENQUIRE NOW</span>
                <div className="w-8 h-8 rounded-full bg-[#073F3B]/10 group-hover:bg-[#073F3B] group-hover:text-white text-[#073F3B] flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <a
                href={`https://wa.me/919434288856?text=Hi%20Golden%20Pebble,%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(pkg.name)}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-7 pr-2 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group"
              >
                <span>WhatsApp Us</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 14. STICKY BOTTOM MOBILE CTA BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#073F3B]/95 backdrop-blur-md p-3 border-t border-[#C5A46D]/40 flex items-center justify-between gap-2 shadow-2xl">
        <Link
          href={`/contact?package=${pkg.slug}`}
          className="flex-1 bg-[#C5A46D] text-[#073F3B] py-2.5 rounded-full text-center text-xs font-sans font-bold uppercase tracking-wider shadow-md"
        >
          ENQUIRE NOW
        </Link>
        <a
          href={`https://wa.me/919434288856?text=Hi%20Golden%20Pebble,%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(pkg.name)}%20package`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-2.5 rounded-full flex items-center justify-center shadow-md"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  );
}
