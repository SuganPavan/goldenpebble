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
  Heart,
  Ship,
  HelpCircle
} from "lucide-react";
import { Package } from "@/lib/data/packages";

interface PackageDetailTemplateProps {
  pkg: Package;
}

export default function PackageDetailTemplate({ pkg }: PackageDetailTemplateProps) {
  const [openFerryInfo, setOpenFerryInfo] = useState<boolean>(true);
  const [openTermsIdx, setOpenTermsIdx] = useState<number | null>(null);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleTerms = (idx: number) => {
    setOpenTermsIdx(openTermsIdx === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="bg-[#F8F6EF] min-h-screen text-[#073F3B]">
      {/* 1. HERO BANNER */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#073F3B]">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority
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

          {/* Action Buttons with Button-in-Button Trailing Icons */}
          <ScrollReveal variant="fade-up" delay={0.5}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-6">
              <Link
                href={`/contact?package=${pkg.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-[#C5A46D] hover:bg-white text-[#073F3B] pl-6 pr-2 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group text-center"
              >
                <span>Plan This Trip</span>
                <div className="w-7 h-7 rounded-full bg-[#073F3B]/10 group-hover:bg-[#073F3B] group-hover:text-white text-[#073F3B] flex items-center justify-center transition-all shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <a
                href={`https://wa.me/919434288856?text=Hi%20Golden%20Pebble,%20I%20would%20like%20to%20plan%20the%20${encodeURIComponent(pkg.name)}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-6 pr-2 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group text-center"
              >
                <span>WhatsApp Us</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. QUICK INFORMATION BLOCKS (Doppelrand Nested Enclosure) */}
      <section className="py-8 bg-white border-b border-[#E8DCC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* 3. ROUTE VISUAL STEPPER */}
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

        {/* 4. DAY-BY-DAY ITINERARY SECTION (Train-style Staggered Scroll & Hand-over Hover Physics) */}
        <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
          <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-8">
            <ScrollReveal variant="fade-up">
              <div>
                <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                  COMPLETE DAY-BY-DAY PROGRAM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073F3B]">
                  Detailed Travel Itinerary
                </h2>
              </div>
            </ScrollReveal>

            {/* Train Stagger Sequence: Each Day animates into view one by one as you scroll */}
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
                  {/* Day Badge with Hand-Over Hover Physics */}
                  <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#073F3B] text-white text-xs sm:text-sm font-bold flex items-center justify-center border-4 border-[#FAF8F5] shadow-md group-hover:bg-[#C5A46D] group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
                    D{dayItem.day}
                  </div>

                  {/* Itinerary Card with Hand-Over Hover Physics */}
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

                    {/* Highlighted Activity Tags */}
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

        {/* 5. VISUAL HIGHLIGHTS GRID */}
        {pkg.visualHighlights && pkg.visualHighlights.length > 0 && (
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 border border-[#E8DCC5]/60 space-y-6">
              <ScrollReveal variant="fade-up">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                    EXPERIENCE HIGHLIGHTS
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                    Key Attractions &amp; Wonders
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="stagger-container" staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pkg.visualHighlights.map((vh, vIdx) => (
                  <ScrollRevealItem key={vIdx} variant="scale-up">
                    <div className="bg-white p-5 rounded-2xl border border-[#E8DCC5] flex items-start gap-3.5 hover:border-[#C5A46D] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-2xs group">
                      <div className="p-2.5 rounded-xl bg-[#073F3B]/10 border border-[#073F3B]/15 text-[#073F3B] group-hover:bg-[#073F3B] group-hover:text-white transition-all shrink-0">
                        <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-wider font-bold text-[#C5A46D] block">
                          {vh.category}
                        </span>
                        <h3 className="font-serif font-bold text-base text-[#073F3B] mt-0.5 group-hover:text-[#C5A46D] transition-colors">
                          {vh.name}
                        </h3>
                      </div>
                    </div>
                  </ScrollRevealItem>
                ))}
              </ScrollReveal>
            </div>
          </section>
        )}

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
                  <span>Package Inclusions</span>
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
                  <span>Package Exclusions</span>
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

        {/* 7. OPTIONAL WATER ADVENTURES INTERACTIVE THEATER (LEFT: FEATURED MEDIA, RIGHT: ROTATING CAROUSEL) */}
        {pkg.waterAdventures && pkg.waterAdventures.length > 0 && (
          <WaterAdventuresTheater adventures={pkg.waterAdventures} />
        )}

        {/* 8. HONEYMOON EXPERIENCES */}
        {pkg.honeymoonExperiences && pkg.honeymoonExperiences.length > 0 && (
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 border border-[#E8DCC5]/60 space-y-6">
              <ScrollReveal variant="fade-up">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] mb-1">
                      <Heart className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>SPECIAL COUPLE ADD-ONS</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                      Honeymoon Experiences
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-[#C5A46D]/15 border border-[#C5A46D]/30 px-4 py-2 rounded-full text-xs font-sans font-medium text-[#073F3B]">
                    <span>Optional experiences available at additional cost. Contact us for current availability and rates.</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="stagger-container" staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pkg.honeymoonExperiences.map((hm, hIdx) => (
                  <ScrollRevealItem key={hIdx} variant="scale-up">
                    <div className="bg-white p-5 rounded-2xl border border-[#E8DCC5] space-y-2 shadow-2xs hover:border-[#C5A46D] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                      <div className="w-9 h-9 rounded-full bg-[#C5A46D]/15 text-[#C5A46D] flex items-center justify-center">
                        <Heart className="w-5 h-5 fill-current" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#073F3B]">
                        {hm.name}
                      </h3>
                      <p className="font-sans text-xs text-[#4E5C58] font-light leading-relaxed">
                        {hm.description}
                      </p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* 9. PRIVATE FERRY INFORMATION */}
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

        {/* 10. THINGS TO KNOW BEFORE YOU TRAVEL */}
        {pkg.thingsToKnow && pkg.thingsToKnow.length > 0 && (
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-6">
              <ScrollReveal variant="fade-up">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                    ESSENTIAL TRAVEL PREPARATION
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                    Things to Know Before You Travel
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="stagger-container" staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {pkg.thingsToKnow.map((item, tIdx) => (
                  <ScrollRevealItem key={tIdx} variant="scale-up">
                    <div className="bg-white p-4 rounded-2xl border border-[#E8DCC5] flex items-start gap-3 shadow-2xs hover:border-[#C5A46D] hover:scale-[1.015] transition-all">
                      <div className="w-6 h-6 rounded-full bg-[#073F3B]/10 text-[#073F3B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {tIdx + 1}
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </ScrollRevealItem>
                ))}
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* 11. TERMS & CONDITIONS (Collapsible Accordion) */}
        {pkg.termsAndConditions && pkg.termsAndConditions.length > 0 && (
          <ScrollReveal variant="fade-up">
            <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
              <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-6">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                    POLICY &amp; GUIDELINES
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                    Terms &amp; Conditions
                  </h2>
                </div>

                <div className="space-y-3">
                  {pkg.termsAndConditions.map((tc, tcIdx) => {
                    const isOpen = openTermsIdx === tcIdx;
                    return (
                      <div 
                        key={tcIdx}
                        className="rounded-2xl border border-[#E8DCC5] bg-white overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          onClick={() => toggleTerms(tcIdx)}
                          className="w-full p-4 text-left font-serif font-bold text-sm sm:text-base text-[#073F3B] flex items-center justify-between hover:text-[#C5A46D] transition-colors"
                        >
                          <span>{tc.title}</span>
                          <ChevronDown className={`w-4 h-4 text-[#C5A46D] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 font-sans text-xs sm:text-sm text-[#4E5C58] font-light border-t border-[#E8DCC5]/60 leading-relaxed">
                            {tc.detail}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        <ScrollReveal variant="fade-up">
          <section className="p-2 sm:p-2.5 rounded-[2.25rem] bg-white border border-[#E8DCC5] shadow-sm">
            <div className="bg-[#FAF8F5] rounded-[calc(2.25rem-0.625rem)] p-6 sm:p-8 lg:p-10 border border-[#E8DCC5]/60 space-y-6">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] block mb-1">
                  NATURAL Q&amp;A
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073F3B]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    question: "Does Hotel Golden Pebble Havelock offer Wi-Fi?",
                    answer: "Yes, complimentary Wi-Fi access is available in guest rooms and common hotel areas for staying guests."
                  },
                  {
                    question: "What amenities does Hotel Golden Pebble Havelock offer?",
                    answer: "Hotel Golden Pebble Havelock provides air-conditioned luxury rooms, an on-site multicuisine restaurant, daily breakfast, 24/7 power backup, travel desk assistance, and prompt island transfer coordination."
                  },
                  {
                    question: "Are inter-island ferry tickets included in this package?",
                    answer: "Yes, all inter-island ferry cruise transfers between Port Blair, Havelock Island, and Neil Island specified in the itinerary are fully included."
                  },
                  {
                    question: "Are water sports included or charged separately?",
                    answer: "Water sports (such as scuba diving, sea walk, jet skiing, and parasailing) are optional and available on direct payment basis at respective beach spots."
                  }
                ].map((faq, fIdx) => {
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

      {/* 13. FINAL ENQUIRE NOW CTA BACKDROP SECTION */}
      <ScrollReveal variant="scale-up">
        <section className="relative py-20 bg-[#073F3B] text-white overflow-hidden mt-12 border-t-2 border-[#C5A46D]/60">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Plan Your Andaman Islands Trip - Hotel Golden Pebble"
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
              Ready to Explore the Andaman Islands?
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#F8F6EF]/90 font-light max-w-xl mx-auto leading-relaxed">
              Let our island reservation team customize your 4-night stay and inter-island experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href={`/contact?package=${pkg.slug}`}
                className="inline-flex items-center justify-between gap-3 bg-[#C5A46D] hover:bg-white text-[#073F3B] pl-7 pr-2 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group"
              >
                <span>Enquire Now</span>
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
          Enquire Now
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
