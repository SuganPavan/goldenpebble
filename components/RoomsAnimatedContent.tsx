"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Wind, 
  Bath, 
  Wifi, 
  CheckCircle2, 
  Coffee, 
  ConciergeBell, 
  Car, 
  Zap, 
  Maximize, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  BedDouble,
  Utensils,
  MapPin,
  Ticket,
  Waves,
  Building2,
  Tv,
  Layers,
  Bed
} from "lucide-react";

const roomAmenitiesList = [
  { title: "Split Air Conditioning", icon: Wind, description: "Individual climate control in every room" },
  { title: "Electric Kettle & Tea/Coffee", icon: Coffee, description: "In-room tea & coffee maker setup" },
  { title: "Flat-Screen LED TV", icon: Tv, description: "Satellite entertainment channels" },
  { title: "Ensuite Bathrooms (Hot & Cold)", icon: Bath, description: "Private attached modern bathroom with 24-hr hot shower" },
  { title: "24x7 Generator Power Backup", icon: Zap, description: "Uninterrupted generator power backup for continuous comfort" },
  { title: "Private Balcony / Canopy View", icon: Layers, description: "Available in Deluxe Balcony Room category" },
  { title: "Comfortable King Bedding", icon: Bed, description: "Plush mattresses, clean linens & comfortable pillows" },
  { title: "Daily Housekeeping & Bottled Water", icon: ShieldCheck, description: "Sanitized daily room care, fresh towels & complimentary water" },
  { title: "High-Speed Wi-Fi", icon: Wifi, description: "Complimentary internet access throughout the property" },
  { title: "Room Service Assistance", icon: ConciergeBell, description: "Attentive in-room dining assistance" },
  { title: "On-Site Parking", icon: Car, description: "Facility for guest vehicles and rental scooters" },
  { title: "Complimentary Daily Breakfast", icon: Utensils, description: "Fresh morning breakfast served daily at our in-house restaurant" }
];

const whyStayPoints = [
  {
    title: "Convenient Govind Nagar Location",
    description: "Situated in Govind Nagar on Havelock Island (Swaraj Dweep), providing seamless connectivity to local markets, dining spots, and key beaches.",
    icon: MapPin
  },
  {
    title: "Comfortable Accommodation",
    description: "Thoughtfully designed 220 sq ft Deluxe Rooms and 280 sq ft Deluxe Rooms with Balcony equipped with split AC, warm timber textures, and ensuite bath facilities.",
    icon: BedDouble
  },
  {
    title: "Complimentary Daily Breakfast",
    description: "Start each day with a complimentary breakfast served fresh at our in-house dining facility.",
    icon: Utensils
  },
  {
    title: "30-Seat Air-Conditioned Restaurant",
    description: "Enjoy freshly prepared meals, regional seafood delicacies, and multi-cuisine dishes in our comfortable 30-seat in-house restaurant.",
    icon: Building2
  },
  {
    title: "High-Speed Wi-Fi & Daily Housekeeping",
    description: "Stay connected throughout your vacation with high-speed Wi-Fi, paired with attentive daily housekeeping for clean, sanitized rooms.",
    icon: Wifi
  },
  {
    title: "Room Service & On-Site Parking",
    description: "Benefit from prompt room service assistance and convenient parking space for private vehicles and rented scooters.",
    icon: ConciergeBell
  },
  {
    title: "Private Ferry Ticket Assistance",
    description: "Our desk offers guidance and assistance with booking private ferry tickets between Port Blair, Havelock Island, and Neil Island.",
    icon: Ticket
  },
  {
    title: "Water Sports & Activity Guidance",
    description: "Get assistance planning island adventures such as scuba diving, snorkeling at Elephant Beach, and sea kayaking.",
    icon: Waves
  },
  {
    title: "24x7 Generator Power Backup",
    description: "Experience uninterrupted comfort with round-the-clock generator power backup during your island getaway.",
    icon: Zap
  }
];

export default function RoomsAnimatedContent() {
  return (
    <>
      {/* DETAILED ROOM CATEGORIES SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. DELUXE ROOM (220 SQ FT) */}
        <motion.div 
          id="deluxe-room" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DCC5] shadow-xl hover:border-[#C5A46D] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#E8DCC5]"
          >
            <Image
              src="/images/rooms/golden-pebble-deluxe-room-main.jpg"
              alt="Deluxe Room at Hotel Golden Pebble in Havelock Island"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 bg-[#073F3B] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C5A46D]/60 shadow-md">
              220 SQ FT
            </div>
          </motion.div>

          <div className="lg:col-span-6 space-y-4">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, x: 2 }}
                className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] inline-block mb-1 cursor-pointer"
              >
                CATEGORY 1 • GOVIND NAGAR, HAVELOCK ISLAND
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073F3B]">
                Deluxe Room
              </h2>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#073F3B]/5 border border-[#073F3B]/15 text-[#073F3B] text-xs font-semibold">
                <Maximize className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>220 sq ft Living Space</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
              The Deluxe Room at Hotel Golden Pebble offers a 220 sq. ft. sanctuary designed for peace and relaxation. Featuring warm wooden wall textures, soft mood lighting, split air conditioning, plush bedding, and a modern private ensuite bathroom, it provides a clean and comfortable environment for guests exploring Swaraj Dweep.
            </p>

            <div>
              <h3 className="text-xs font-sans uppercase tracking-wider font-bold text-[#073F3B] mb-2.5">
                Verified Room Facilities:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#073F3B] font-medium">
                {[
                  { icon: Wind, label: "Split Air Conditioning" },
                  { icon: Bath, label: "Ensuite Bathroom (Hot & Cold)" },
                  { icon: Wifi, label: "High-Speed Wi-Fi" },
                  { icon: Zap, label: "24x7 Generator Power Backup" },
                  { icon: CheckCircle2, label: "Daily Housekeeping" },
                  { icon: Coffee, label: "Tea/Coffee Maker" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.03, x: 2, borderColor: "#C5A46D" }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1.5 bg-[#F8F6EF] p-2 rounded-lg border border-[#E8DCC5] transition-colors cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8DCC5] flex flex-col xs:flex-row xs:items-center justify-between gap-3.5 sm:gap-4">
              <div>
                <span className="text-[11px] sm:text-xs uppercase font-sans text-[#66736F] tracking-wider block font-semibold">Rack Rate</span>
                <span className="font-serif font-bold text-2xl text-[#073F3B]">₹5,774</span>
                <span className="text-[11px] sm:text-xs text-[#66736F] ml-1">/ Night (incl. GST)</span>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3 w-full xs:w-auto">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full xs:w-auto">
                  <Link
                    href="/rooms/deluxe-room"
                    className="inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group/btn w-full xs:w-auto text-center min-h-[42px]"
                  >
                    <span>View Room Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover/btn:text-[#073F3B] transition-transform group-hover/btn:translate-x-1 shrink-0" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full xs:w-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#F8F6EF] hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xs w-full xs:w-auto text-center min-h-[42px]"
                  >
                    <span>Enquire Room</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. DELUXE ROOM WITH BALCONY (280 SQ FT) */}
        <motion.div 
          id="deluxe-room-with-balcony" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DCC5] shadow-xl hover:border-[#C5A46D] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 lg:order-2 relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#E8DCC5]"
          >
            <Image
              src="/images/rooms/golden-pebble-balcony-room-main.jpg"
              alt="Deluxe Room with Balcony at Hotel Golden Pebble, Havelock Island"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 bg-[#073F3B] text-white text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border border-[#C5A46D]/60 shadow-md max-w-[calc(100%-1.5rem)] leading-tight whitespace-normal sm:whitespace-nowrap">
              280 SQ FT • PRIVATE BALCONY
            </div>
          </motion.div>

          <div className="lg:col-span-6 lg:order-1 space-y-4">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, x: 2 }}
                className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] inline-block mb-1 cursor-pointer"
              >
                CATEGORY 2 • GOVIND NAGAR, HAVELOCK ISLAND
              </motion.span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073F3B]">
                Deluxe Room with Balcony
              </h2>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#073F3B]/5 border border-[#073F3B]/15 text-[#073F3B] text-xs font-semibold">
                <Maximize className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>280 sq ft Living Space + Private Balcony</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
              Experience 280 sq. ft. of refined tropical comfort in our Deluxe Room with Balcony. Step out onto your private balcony to enjoy the fresh island morning air and vibrant green natural surroundings. Outfitted with rich timber cladding, split air conditioning, plush bedding, and modern ensuite bath amenities, this room offers enhanced space to unwind during your Havelock stay.
            </p>

            <div>
              <h3 className="text-xs font-sans uppercase tracking-wider font-bold text-[#073F3B] mb-2.5">
                Verified Room Facilities:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#073F3B] font-medium">
                {[
                  { icon: Sparkles, label: "Private Balcony with Seating" },
                  { icon: Wind, label: "Split Air Conditioning" },
                  { icon: Bath, label: "Ensuite Bathroom (Hot & Cold)" },
                  { icon: Wifi, label: "High-Speed Wi-Fi" },
                  { icon: Zap, label: "24x7 Generator Power Backup" },
                  { icon: Coffee, label: "Tea/Coffee Maker" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.03, x: 2, borderColor: "#C5A46D" }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1.5 bg-[#F8F6EF] p-2 rounded-lg border border-[#E8DCC5] transition-colors cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8DCC5] flex flex-col xs:flex-row xs:items-center justify-between gap-3.5 sm:gap-4">
              <div>
                <span className="text-[11px] sm:text-xs uppercase font-sans text-[#66736F] tracking-wider block font-semibold">Rack Rate</span>
                <span className="font-serif font-bold text-2xl text-[#073F3B]">₹6,824</span>
                <span className="text-[11px] sm:text-xs text-[#66736F] ml-1">/ Night (incl. GST)</span>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3 w-full xs:w-auto">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full xs:w-auto">
                  <Link
                    href="/rooms/deluxe-room-with-balcony"
                    className="inline-flex items-center justify-center gap-2 bg-[#073F3B] hover:bg-[#C5A46D] text-white hover:text-[#073F3B] px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-md group/btn w-full xs:w-auto text-center min-h-[42px]"
                  >
                    <span>View Room Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover/btn:text-[#073F3B] transition-transform group-hover/btn:translate-x-1 shrink-0" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full xs:w-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#F8F6EF] hover:bg-[#073F3B] text-[#073F3B] hover:text-white border border-[#E8DCC5] px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-xs w-full xs:w-auto text-center min-h-[42px]"
                  >
                    <span>Enquire Room</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* COMMON ROOM AMENITIES SECTION */}
      <section className="py-12 bg-white border-t border-b border-[#E8DCC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] inline-block mb-1 cursor-pointer"
            >
              VERIFIED HOTEL SERVICES
            </motion.span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073F3B]">
              Room Amenities
            </h2>
            <p className="text-xs sm:text-sm text-[#4E5C58] font-light mt-2">
              Every room at Hotel Golden Pebble in Govind Nagar includes essential conveniences for a seamless tropical island vacation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roomAmenitiesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.03, 
                    borderColor: "#C5A46D",
                    boxShadow: "0 12px 24px -6px rgba(197, 164, 109, 0.25)"
                  }}
                  className="bg-[#F8F6EF] p-5 rounded-2xl border border-[#E8DCC5] flex flex-col justify-between transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#073F3B]/10 border border-[#073F3B]/20 text-[#073F3B] flex items-center justify-center mb-3 group-hover:bg-[#073F3B] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#C5A46D] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#073F3B] mb-1 group-hover:text-[#C5A46D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4E5C58] font-light leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY STAY AT GOLDEN PEBBLE HAVELOCK? */}
      <section className="py-16 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#C5A46D] inline-block mb-1 cursor-pointer"
            >
              GUEST ADVANTAGES
            </motion.span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073F3B]">
              Why Stay at Golden Pebble Havelock?
            </h2>
            <p className="text-xs sm:text-sm text-[#4E5C58] font-light mt-2.5 leading-relaxed">
              Hotel Golden Pebble provides a balanced combination of location, modern room comfort, attentive guest services, and travel assistance in Govind Nagar, Havelock Island (Swaraj Dweep).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyStayPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03, 
                    borderColor: "#C5A46D",
                    boxShadow: "0 16px 32px -8px rgba(7, 61, 55, 0.18)"
                  }}
                  className="bg-white p-6 rounded-2xl border border-[#E8DCC5] shadow-sm transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#073F3B]/10 text-[#073F3B] flex items-center justify-center mb-4 group-hover:bg-[#073F3B] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C5A46D] group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#073F3B] mb-2 group-hover:text-[#C5A46D] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5C58] font-light leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION & GEO DETAILS SECTION */}
      <section className="py-12 bg-white border-t border-[#E8DCC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#073F3B] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C5A46D]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#C5A46D] block">
                PROPERTY ADDRESS &amp; LOCALITY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                Hotel Golden Pebble Location
              </h2>
              <div className="space-y-1 text-xs sm:text-sm text-[#F8F6EF]/90 font-light">
                <p className="font-semibold text-[#C5A46D]">Hotel Golden Pebble</p>
                <p>Govind Nagar, Havelock Island (Swaraj Dweep)</p>
                <p>Andaman &amp; Nicobar Islands, India</p>
                <p>PIN: 744211</p>
              </div>
              <p className="text-xs sm:text-sm text-[#F8F6EF]/80 font-light leading-relaxed">
                Conveniently located in Govind Nagar near Govind Nagar Beach No. 3 and Vijay Nagar Beach No. 5, our location allows visitors to comfortably reach dive shops, local restaurants, and island transport hubs.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/20 space-y-3">
              <h3 className="font-serif font-bold text-lg text-white mb-2">
                Explore Island Destinations
              </h3>
              <div className="space-y-2">
                {[
                  { text: "Explore our in-house restaurant", href: "/restaurant" },
                  { text: "Discover activities and water sports assistance", href: "/activities" },
                  { text: "View available packages", href: "/packages" },
                  { text: "Explore nearby locations in Havelock", href: "/nearby-locations" }
                ].map((linkItem, lIdx) => (
                  <motion.div key={lIdx} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={linkItem.href}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#C5A46D] text-white hover:text-[#073F3B] transition-colors text-xs font-medium group"
                    >
                      <span>{linkItem.text}</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:text-[#073F3B] transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
