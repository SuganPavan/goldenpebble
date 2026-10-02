"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  BedDouble, 
  Utensils, 
  Compass, 
  Waves, 
  Phone, 
  Sparkles,
  ShieldCheck,
  Clock,
  Wifi,
  Image as ImageIcon
} from "lucide-react";

export default function AboutPageAnimatedContent() {
  return (
    <>
      {/* SECTION 1: A Comfortable Base in Havelock Island */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Image with Hover & Scroll Animation */}
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
              alt="Hotel Golden Pebble building exterior corridor in Govind Nagar, Havelock Island (Swaraj Dweep)"
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

          {/* Right Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-5"
          >
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold inline-block">
              BOUTIQUE HOTEL IDENTITY
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B] leading-tight">
              A Comfortable Base in Havelock Island
            </h2>
            
            {/* Opening Paragraph - Answer First for AEO */}
            <p className="text-sm sm:text-base text-[#1C2A28]/90 font-normal leading-relaxed">
              Hotel Golden Pebble is a boutique hotel in Govind Nagar, Havelock Island (Swaraj Dweep), Andaman &amp; Nicobar Islands. The property offers a comfortable base for guests exploring the island&apos;s beaches, water adventures and local attractions.
            </p>
            
            <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
              Designed with warm timber room accents and peaceful garden surroundings, Golden Pebble balances modern creature comforts with local island warmth. Guests can rest in well-appointed <Link href="/rooms" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">air-conditioned accommodations</Link>, dine at our <Link href="/restaurant" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">in-house restaurant</Link>, and rely on transparent hospitality from our dedicated on-site team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#E8DCC5]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#E8DCC5]/60">
                <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-semibold text-[#073F3B]">Inland Boutique Property</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#E8DCC5]/60">
                <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-semibold text-[#073F3B]">Govind Nagar Location</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#E8DCC5]/60">
                <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-semibold text-[#073F3B]">In-House Restaurant &amp; Breakfast</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#E8DCC5]/60">
                <CheckCircle2 className="w-5 h-5 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-semibold text-[#073F3B]">24x7 Generator Backup</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: Our Approach to Hospitality */}
      <section className="py-12 bg-white/70 border-y border-[#E8DCC5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block mb-1">
              GUEST PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B]">
              Our Approach to Hospitality
            </h2>
            <p className="text-sm text-[#1C2A28]/80 font-light mt-2 leading-relaxed">
              We believe great island hospitality starts with transparency, cleanliness, and reliable amenities. Rather than making exaggerated claims, Hotel Golden Pebble focuses on providing what travellers actually need for a seamless stay in Swaraj Dweep.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Transparent Service",
                desc: "No hidden charges or inflated promises. Honest room specifications, clear check-in schedules, and verified guest amenities."
              },
              {
                icon: Clock,
                title: "Reliable Backup",
                desc: "24x7 generator power backup ensuring uninterrupted air conditioning and lighting during island power fluctuations."
              },
              {
                icon: Wifi,
                title: "Modern Essentials",
                desc: "High-speed Wi-Fi access in common areas, split AC in every room, and hot & cold water running throughout the day."
              },
              {
                icon: Compass,
                title: "Island Guidance",
                desc: "Personalized assistance with private ferry bookings, scuba diving sessions, scooter rentals, and destination management."
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#F8F6EF] p-6 rounded-2xl border border-[#E8DCC5] space-y-3 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#073F3B]/10 flex items-center justify-center text-[#C5A46D]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#073F3B]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1C2A28]/75 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: A Convenient Location in Govind Nagar */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block">
              LOCATION &amp; ACCESSIBILITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B]">
              A Convenient Location in Govind Nagar
            </h2>
            <p className="text-sm sm:text-base text-[#1C2A28]/90 font-normal leading-relaxed">
              Situated in Govind Nagar (Beach No. 3 area), Swaraj Dweep, Hotel Golden Pebble places guests within short travelling distances to Havelock Island&apos;s main attractions and transit points.
            </p>
            <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
              While our hotel is an inland boutique property (not beachfront), its strategic position allows easy access to <Link href="/nearby-locations/radhanagar-beach" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">Radhanagar Beach (Beach No. 7)</Link>, <Link href="/nearby-locations/elephant-beach" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">Elephant Beach</Link>, and <Link href="/nearby-locations/kalopathar-beach" className="text-[#073F3B] font-semibold underline hover:text-[#C5A46D] transition-colors">Kalopathar Beach</Link>. The property offers convenient access to Havelock Jetty and island attractions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#073F3B]">
              <div className="flex items-center gap-2 bg-[#073F3B]/5 px-3 py-2 rounded-lg border border-[#073F3B]/10">
                <MapPin className="w-4 h-4 text-[#C5A46D]" />
                <span>Govind Nagar, Havelock Island - 744211</span>
              </div>
              <div className="flex items-center gap-2 bg-[#073F3B]/5 px-3 py-2 rounded-lg border border-[#073F3B]/10">
                <MapPin className="w-4 h-4 text-[#C5A46D]" />
                <span>Convenient access to Havelock Jetty &amp; island attractions</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-80 sm:h-[360px] rounded-2xl overflow-hidden border-2 border-[#E8DCC5] shadow-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
              alt="Havelock Island turquoise ocean waters and coastline near Govind Nagar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-light">
              <span className="font-semibold text-[#F3D39B] block">Havelock Island Coastline</span>
              Easy access to island beaches &amp; water activity centers from Govind Nagar.
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: Rooms & Comfort */}
      <section className="py-12 bg-white/70 border-y border-[#E8DCC5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block mb-1">
              ACCOMMODATION SPECS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B]">
              Rooms &amp; Comfort
            </h2>
            <p className="text-sm text-[#1C2A28]/80 font-light mt-2 leading-relaxed">
              Hotel Golden Pebble offers two carefully designed room categories tailored for couples, families, and solo travellers seeking clean, peaceful accommodation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Deluxe Room */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8F6EF] rounded-2xl border border-[#E8DCC5] overflow-hidden shadow-md flex flex-col justify-between"
            >
              <div className="relative h-60">
                <Image
                  src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838967/golden-pebble/images/rooms/golden-pebble-deluxe-room-main.jpg"
                  alt="Deluxe Room interior with split AC and comfortable king bed at Hotel Golden Pebble"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-[#073F3B]">
                      Deluxe Room
                    </h3>
                    <span className="text-xs font-mono text-[#073F3B] bg-[#073F3B]/10 px-2.5 py-1 rounded-full font-semibold">
                      220 Sq Ft
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                    Well-lit, air-conditioned room featuring warm wooden accents, king-size bed, electric kettle, flat-screen TV, and ensuite bathroom with 24-hour hot &amp; cold water.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8DCC5] flex items-center justify-between">
                  <Link 
                    href="/rooms/deluxe-room" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] transition-colors"
                  >
                    View Room Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="inline-flex items-center gap-1 text-xs text-[#1C2A28]/70 hover:text-[#073F3B]"
                  >
                    <ImageIcon className="w-3.5 h-3.5" /> View Photos
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Deluxe Room with Balcony */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F8F6EF] rounded-2xl border border-[#E8DCC5] overflow-hidden shadow-md flex flex-col justify-between"
            >
              <div className="relative h-60">
                <Image
                  src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838964/golden-pebble/images/rooms/golden-pebble-balcony-room-main.jpg"
                  alt="Deluxe Room with Balcony interior and private outdoor seating at Hotel Golden Pebble"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-[#073F3B]">
                      Deluxe Room with Balcony
                    </h3>
                    <span className="text-xs font-mono text-[#073F3B] bg-[#073F3B]/10 px-2.5 py-1 rounded-full font-semibold">
                      280 Sq Ft
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                    Spacious room with a private balcony overlooking quiet green surroundings. Equipped with split AC, seating area, work desk, and modern amenities.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8DCC5] flex items-center justify-between">
                  <Link 
                    href="/rooms/deluxe-room-with-balcony" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] transition-colors"
                  >
                    View Room Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link 
                    href="/rooms" 
                    className="inline-flex items-center gap-1 text-xs text-[#1C2A28]/70 hover:text-[#073F3B]"
                  >
                    <BedDouble className="w-3.5 h-3.5" /> All Accommodations
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Discover Havelock Island */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#073F3B] font-bold block mb-1">
            ISLAND EXPERIENCES &amp; DINING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#073F3B]">
            Discover Havelock Island
          </h2>
          <p className="text-sm text-[#1C2A28]/80 font-light mt-2 leading-relaxed">
            Havelock Island is world-famous for its crystal-clear waters, vibrant coral reefs, and tranquil beaches. Hotel Golden Pebble assists guests in experiencing the best of Swaraj Dweep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 p-6 rounded-2xl border border-[#E8DCC5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#073F3B]/10 flex items-center justify-center text-[#C5A46D]">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#073F3B]">
              Water Adventures
            </h3>
            <p className="text-xs sm:text-sm text-[#1C2A28]/75 font-light leading-relaxed">
              Book certified scuba diving sessions, sea kayaking in mangrove creeks, and snorkeling trips at Elephant Beach through our guest desk.
            </p>
            <Link href="/activities" className="inline-flex items-center gap-1 text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] transition-colors pt-2">
              Explore Activities <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl border border-[#E8DCC5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#073F3B]/10 flex items-center justify-center text-[#C5A46D]">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#073F3B]">
              In-House Dining
            </h3>
            <p className="text-xs sm:text-sm text-[#1C2A28]/75 font-light leading-relaxed">
              Enjoy freshly prepared Indian, Continental, and local seafood dishes at our 30-seat air-conditioned restaurant with daily complimentary breakfast.
            </p>
            <Link href="/restaurant" className="inline-flex items-center gap-1 text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] transition-colors pt-2">
              View Dining Menu <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl border border-[#E8DCC5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#073F3B]/10 flex items-center justify-center text-[#C5A46D]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#073F3B]">
              Tour Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#1C2A28]/75 font-light leading-relaxed">
              Explore curated multi-day Andaman tour itineraries combining hotel stays, ferry transfers, and island sightseeing.
            </p>
            <Link href="/packages" className="inline-flex items-center gap-1 text-xs font-bold text-[#073F3B] hover:text-[#C5A46D] transition-colors pt-2">
              View Holiday Packages <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Plan Your Stay (Fast-Track Stagger Grid) */}
      <section className="py-12 bg-gradient-to-r from-[#073F3B] via-[#042825] to-[#073F3B] text-white border-y-2 border-[#C5A46D]/60 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,164,109,0.18),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
                  Plan Your Stay
                </h2>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-sans text-[#F8F6EF]/90 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span>Discover Swaraj Dweep</span>
            </div>
          </div>

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
