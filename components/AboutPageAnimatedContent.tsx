"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  BedDouble, 
  UtensilsCrossed, 
  Compass, 
  Utensils, 
  Waves, 
  Phone, 
  Sparkles 
} from "lucide-react";

export default function AboutPageAnimatedContent() {
  return (
    <>
      {/* Section 1: Property Story & Entity Definition */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Image with Smooth Scroll & Hover Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white group"
          >
            <Image
              src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838816/golden-pebble/images/golden-pebble-property.jpg"
              alt="Hotel Golden Pebble walkway corridor and reception emblem in Havelock Island (Swaraj Dweep)"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073F3B]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg z-10">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
                PEACEFUL BOUTIQUE HOSPITALITY
              </span>
              <p className="font-serif text-base text-[#073F3B] font-bold mt-0.5">
                Hotel Golden Pebble • Govind Nagar, Havelock Island
              </p>
            </div>
          </motion.div>

          {/* Right Text Content with Smooth Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-5"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold inline-block cursor-pointer"
            >
              BOUTIQUE HOSPITALITY IN SWARAJ DWEEP
            </motion.span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B] leading-tight">
              Boutique Accommodation in Havelock Island (Swaraj Dweep)
            </h2>
            
            {/* Opening Paragraph strictly answering entity details for SEO & AEO */}
            <p className="text-sm sm:text-base text-[#1C2A28]/90 font-normal leading-relaxed">
              Hotel Golden Pebble is a boutique hotel located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands. Situated near Govind Nagar Beach and key island transport hubs, our property provides clean, comfortable accommodations, split air conditioning, an in-house restaurant, and direct guest assistance for travellers exploring Swaraj Dweep.
            </p>
            
            <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
              Established with a commitment to peaceful and transparent hospitality, Golden Pebble offers two room categories — <Link href="/rooms/deluxe-room" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">Deluxe Rooms (220 sq ft)</Link> and <Link href="/rooms/deluxe-room-with-balcony" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">Deluxe Rooms with Balcony (280 sq ft)</Link>. Guests enjoy freshly prepared meals at our <Link href="/restaurant" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">in-house air-conditioned restaurant</Link>, complimentary daily breakfast, high-speed Wi-Fi, and personalized assistance with island tours and ferry coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DCC5]">
              {HOTEL_INFO.highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-start gap-3 p-2.5 rounded-xl bg-white/60 border border-[#E8DCC5]/60 hover:border-[#C5A46D] transition-all cursor-default"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#073F3B] text-base">{item.title}</h3>
                    <p className="text-xs text-[#1C2A28]/70 font-light mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Section 2: Property Overview & Frequently Asked Questions (AEO Direct Extraction) */}
      <section className="py-12 bg-white/70 border-y border-[#E8DCC5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8"
          >
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block mb-1">
              FACTUAL INFORMATION &amp; DESTINATION CONTEXT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B]">
              Property &amp; Stay Overview
            </h2>
            <p className="text-xs sm:text-sm text-[#1C2A28]/75 font-light mt-1.5">
              Essential details regarding location, accommodations, dining, and island accessibility for guests planning their stay in Swaraj Dweep.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: MapPin,
                question: "Where is Hotel Golden Pebble located?",
                answer: (
                  <>
                    Hotel Golden Pebble is located in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands (PIN 744211). It is positioned conveniently near Govind Nagar Beach, local markets, the Havelock ferry jetty, and popular island beaches such as <Link href="/nearby-locations/radhanagar-beach" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">Radhanagar Beach</Link>, <Link href="/nearby-locations/elephant-beach" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">Elephant Beach</Link>, and <Link href="/nearby-locations/kalopathar-beach" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">Kalopathar Beach</Link>.
                  </>
                )
              },
              {
                icon: BedDouble,
                question: "What accommodations does Golden Pebble offer?",
                answer: (
                  <>
                    The property offers two boutique room categories: Deluxe Rooms (220 sq ft) and Deluxe Rooms with Balcony (280 sq ft). All rooms feature split air conditioning, warm wooden room acoustics, ensuite bathrooms with hot &amp; cold water, and 24x7 generator power backup. View room specs on our <Link href="/rooms" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">Accommodations &amp; Tariffs page</Link>.
                  </>
                )
              },
              {
                icon: UtensilsCrossed,
                question: "What dining and guest services are available?",
                answer: (
                  <>
                    Golden Pebble features a 30-seat <Link href="/restaurant" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">in-house air-conditioned restaurant</Link> offering complimentary daily breakfast and freshly prepared meals. Amenities include high-speed Wi-Fi, daily housekeeping, room service, parking, and assistance with private ferry tickets and <Link href="/activities" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">water sport activities</Link>.
                  </>
                )
              },
              {
                icon: Compass,
                question: "Which destination is Golden Pebble associated with?",
                answer: (
                  <>
                    Golden Pebble is situated on Havelock Island (Swaraj Dweep) in the Andaman &amp; Nicobar Islands. It serves FIT travellers, families, honeymooners, and group tours exploring the island. Discover our curated <Link href="/packages" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">Andaman Island Packages</Link> or <Link href="/contact" className="text-[#073F3B] font-medium underline hover:text-[#C5A46D]">contact our reservations team</Link> directly.
                  </>
                )
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03, 
                    borderColor: "#C5A46D",
                    boxShadow: "0 16px 32px -8px rgba(7, 61, 55, 0.18)"
                  }}
                  className="bg-[#F8F6EF] p-6 rounded-2xl border border-[#E8DCC5] space-y-2 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 text-[#073F3B]">
                    <div className="w-8 h-8 rounded-lg bg-[#073F3B]/10 flex items-center justify-center group-hover:bg-[#073F3B] transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <h3 className="font-serif text-xl font-bold group-hover:text-[#C5A46D] transition-colors">
                      {card.question}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C2A28]/80 font-light leading-relaxed pl-10">
                    {card.answer}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED "EXPLORE GOLDEN PEBBLE" TRAIN STAGGER ANIMATION SECTION */}
      <section className="py-12 bg-gradient-to-r from-[#073F3B] via-[#042825] to-[#073F3B] text-white border-y-2 border-[#C5A46D]/60 shadow-2xl relative overflow-hidden">
        {/* Ambient Radial Lighting Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,164,109,0.18),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#C5A46D]/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#C5A46D]/20 border border-[#C5A46D]/50 text-[#F3D39B]">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#C5A46D] font-bold block">
                  FAST-TRACK DIRECTORY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3D39B] tracking-wide">
                  Explore Golden Pebble
                </h2>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-sans text-[#F8F6EF]/90 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span>Discover Swaraj Dweep</span>
            </div>
          </div>

          {/* TRAIN STAGGER ANIMATED CARDS GRID (DISPLAYS ONE BY ONE LIKE TRAIN CARS ON SCROLL) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5"
          >
            {[
              { label: "Deluxe Rooms", subtitle: "220 & 280 Sq Ft", href: "/rooms", icon: BedDouble },
              { label: "In-House Dining", subtitle: "30-Seat AC Restaurant", href: "/restaurant", icon: Utensils },
              { label: "Island Packages", subtitle: "3N - 6N Escapes", href: "/packages", icon: Compass },
              { label: "Water Activities", subtitle: "Scuba, Kayak & Snorkel", href: "/activities", icon: Waves },
              { label: "Nearby Beaches", subtitle: "Radhanagar & Elephant", href: "/nearby-locations", icon: MapPin },
              { label: "Contact Reservations", subtitle: "+91 9434288856", href: "/contact", icon: Phone }
            ].map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -50, scale: 0.88 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 22
                      }
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className="group bg-black/40 hover:bg-[#C5A46D] backdrop-blur-md p-4 rounded-2xl border border-[#C5A46D]/40 hover:border-[#F3D39B] transition-all duration-300 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl hover:text-[#073F3B] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[#F3D39B] group-hover:bg-[#073F3B] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-[#C5A46D] group-hover:text-[#073F3B] font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-sm font-bold text-white group-hover:text-[#073F3B] transition-colors leading-tight">
                        {link.label}
                      </h3>
                      <p className="text-[10.5px] font-sans text-[#F8F6EF]/70 group-hover:text-[#073F3B]/80 transition-colors mt-0.5 font-light">
                        {link.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 group-hover:border-[#073F3B]/20 flex items-center justify-between text-[11px] font-sans font-bold text-[#F3D39B] group-hover:text-[#073F3B] transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}
