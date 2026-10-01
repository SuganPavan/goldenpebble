"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Utensils, 
  Wifi, 
  Wind, 
  ConciergeBell, 
  Car, 
  CheckCircle2, 
  Waves, 
  Tv, 
  Coffee, 
  Bath, 
  MessageCircle,
  ShieldCheck,
  Zap,
  Bed,
  Layers,
  Compass
} from "lucide-react";

export default function TariffOfferSection() {
  const propertyAmenities = [
    {
      title: "Air-Conditioned Rooms",
      description: "Enjoy a cool and comfortable room after exploring Havelock Island.",
      icon: Wind,
      badge: "Climate Control"
    },
    {
      title: "High-Speed Wi-Fi",
      description: "Stay connected with reliable wireless internet throughout the property.",
      icon: Wifi,
      badge: "High-Speed"
    },
    {
      title: "In-House Restaurant",
      description: "Dine at our 30-seat air-conditioned restaurant serving fresh meals and regional delicacies.",
      icon: Utensils,
      badge: "In-House Dining"
    },
    {
      title: "Complimentary Breakfast",
      description: "Start each island morning with a fresh breakfast served for all in-house guests.",
      icon: Coffee,
      badge: "Daily Breakfast"
    },
    {
      title: "Room Service",
      description: "Convenient in-room dining assistance for your maximum convenience.",
      icon: ConciergeBell,
      badge: "In-Room Service"
    },
    {
      title: "Complimentary Parking",
      description: "Parking facility available for private guest vehicles and rented scooters.",
      icon: Car,
      badge: "On-Site Parking"
    },
    {
      title: "24x7 Generator Power Backup",
      description: "Uninterrupted generator power backup active round-the-clock during your stay.",
      icon: Zap,
      badge: "Power Backup"
    },
    {
      title: "Island Activity & Ferry Desk",
      description: "Assistance with booking private ferry tickets, scuba diving, and island tours.",
      icon: Compass,
      badge: "Travel Desk"
    }
  ];

  const roomAmenities = [
    { title: "Split Air Conditioning", icon: Wind, detail: "Individual Climate Control" },
    { title: "Electric Kettle & Tea/Coffee", icon: Coffee, detail: "In-Room Refreshments" },
    { title: "Flat-Screen TV", icon: Tv, detail: "Satellite Channels" },
    { title: "Private Ensuite Bathroom", icon: Bath, detail: "Hot & Cold Water + Toiletries" },
    { title: "Power Backup", icon: Zap, detail: "24x7 Generator Backup" },
    { title: "Private Balcony / View", icon: Layers, detail: "Available in Deluxe Balcony Rooms" },
    { title: "Comfortable King Bedding", icon: Bed, detail: "Plush Linens & Pillows" },
    { title: "Daily Housekeeping & Water", icon: ShieldCheck, detail: "Fresh Towels & Bottled Water" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative text-[#F8F6EF] rounded-2xl border border-[#C5A46D]/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-4 sm:p-5 lg:p-6 overflow-hidden group"
    >
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838813/golden-pebble/images/amenities-bg.jpg"
          alt="Andaman Tropical Forest and Turquoise Waters"
          fill
          loading="lazy"
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center scale-105 brightness-95 contrast-[1.05]"
        />

        {/* Softened Emerald Dark Overlay to Ensure 100% Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021B18]/70 via-[#073F3B]/60 to-[#03201D]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/50 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT: AMENITIES & FACILITIES */}

      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-3 pb-3.5 border-b border-white/30">
        <div className="max-w-2xl">
          {/* Eyebrow Gold Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/70 border border-[#F3D39B]/80 text-[#FCE8C2] text-[11px] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase mb-2 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#F3D39B] animate-pulse" />
            <span>ISLAND COMFORT</span>
          </div>

          {/* H2 Title */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-[#F3D39B] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            World-Class Amenities for a Comfortable Havelock Stay
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#F8F6EF] font-medium leading-relaxed mt-1.5 max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Enjoy a comfortable island stay at Golden Pebble Havelock with thoughtfully selected amenities designed for relaxation, convenience and a memorable experience in Havelock Island, Swaraj Dweep.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 border border-[#F3D39B]/70 text-[#FCE8C2] text-xs font-serif font-medium shadow-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            <ShieldCheck className="w-4 h-4 text-[#F3D39B]" />
            Verified Property Features
          </span>
        </div>
      </div>

      {/* PROPERTY HIGHLIGHTS AMENITIES GRID */}
      <div className="relative z-10 mt-4 lg:mt-3">
        <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[0.22em] text-[#F3D39B] font-extrabold mb-2.5 flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <Sparkles className="w-4 h-4 text-[#F3D39B]" />
          <span>VERIFIED HOTEL AMENITIES &amp; SERVICES</span>
        </h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 lg:gap-3"
        >
          {propertyAmenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-black/55 hover:bg-black/75 rounded-xl p-3.5 lg:p-3 border border-white/25 hover:border-[#F3D39B] transition-all duration-300 group/card flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 rounded-lg bg-[#C5A46D]/30 border border-[#F3D39B]/70 text-[#FCE8C2] group-hover/card:bg-[#F3D39B] group-hover/card:text-[#073F3B] transition-colors duration-300 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10.5px] sm:text-xs font-sans uppercase tracking-wider font-bold text-[#FCE8C2] bg-[#C5A46D]/30 px-2 py-0.5 rounded-full border border-[#F3D39B]/60 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#F3D39B] mb-1 group-hover/card:text-white transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F8F6EF] font-normal leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ROOM AMENITIES & CONVENIENCES STRIP */}
      <div className="relative z-10 mt-4 sm:mt-6 lg:mt-3 pt-3 lg:pt-2.5 border-t border-white/30">
        <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[0.22em] text-[#F3D39B] font-extrabold mb-2.5 flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <CheckCircle2 className="w-4 h-4 text-[#F3D39B]" />
          <span>IN-ROOM AMENITIES &amp; CONVENIENCES</span>
        </h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-3"
        >
          {roomAmenities.map((roomItem, rIdx) => {
            const RoomIcon = roomItem.icon;
            return (
              <motion.div
                key={rIdx}
                variants={cardVariants}
                className="bg-black/50 hover:bg-black/70 p-2.5 rounded-xl border border-white/20 hover:border-[#F3D39B] transition-all duration-300 flex items-center gap-2.5 shadow-md hover:-translate-y-0.5"
              >
                <div className="p-1.5 rounded-lg bg-[#C5A46D]/30 border border-[#F3D39B]/60 text-[#FCE8C2] shrink-0">
                  <RoomIcon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-serif font-bold text-[#F3D39B] truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {roomItem.title}
                  </div>
                  <div className="text-xs text-[#F8F6EF]/90 font-normal truncate drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    {roomItem.detail}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* DIRECT RESERVATIONS & INSTANT WHATSAPP CALL-TO-ACTION FOOTER BAR */}
      <div className="relative z-10 mt-4 sm:mt-6 lg:mt-3 pt-3 lg:pt-3 border-t border-white/30 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F3D39B] animate-ping shrink-0" />
          <span className="text-xs sm:text-sm text-[#F8F6EF] font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Have questions about amenities or stay? Contact Soni: <strong className="text-[#F3D39B] font-bold">+91 9434288856</strong>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
          {/* WhatsApp Direct Chat Button */}
          <a
            href="https://wa.me/919434288856?text=Hi%20Golden%20Pebble,%20I%20would%20like%20to%20inquire%20about%20room%20amenities%20and%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-lg drop-shadow-md h-11 w-full sm:w-auto shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>WHATSAPP US</span>
          </a>

          {/* Book Stay Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 bg-[#F3D39B] hover:bg-white text-[#073F3B] px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-lg group h-11 w-full sm:w-auto shrink-0"
          >
            <span>BOOK YOUR STAY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>
      </div>

    </motion.div>
  );
}
