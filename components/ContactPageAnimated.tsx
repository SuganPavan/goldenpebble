"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import FaqSection from "@/components/FaqSection";
import TypewriterText from "@/components/TypewriterText";
import { HOTEL_INFO } from "@/lib/data/hotel";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Navigation
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactPageAnimated() {
  const shouldReduceMotion = useReducedMotion();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const contactPhrases = [
    "Direct Reservations & Instant Confirmation.",
    "Speak directly with Soni & our Havelock team.",
    "Best Rate Guarantee for Direct WhatsApp & Phone Bookings.",
    "Located just 2 minutes from Govind Nagar Beach."
  ];

  const contactCards = [
    {
      id: "phone",
      title: "Direct Phone Line",
      name: HOTEL_INFO.contact.person,
      detail: HOTEL_INFO.contact.displayPhone,
      actionText: "Call Now",
      copyValue: HOTEL_INFO.contact.phone.replace(/\s+/g, ""),
      href: `tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, "")}`,
      icon: Phone,
      bgColor: "bg-[#063F3C]/5 border-[#063F3C]/15 hover:border-[#063F3C]/40",
      iconColor: "text-[#063F3C]",
      btnBg: "bg-[#063F3C] text-white"
    },
    {
      id: "whatsapp",
      title: "WhatsApp Instant Support",
      name: "Available 24/7 for Travel Queries",
      detail: `Chat: ${HOTEL_INFO.contact.whatsapp}`,
      actionText: "Open WhatsApp",
      href: HOTEL_INFO.contact.whatsappLink,
      isExternal: true,
      icon: MessageSquare,
      bgColor: "bg-[#25D366]/10 border-[#25D366]/30 hover:border-[#25D366]/60",
      iconColor: "text-[#25D366]",
      btnBg: "bg-[#25D366] text-white"
    },
    {
      id: "email",
      title: "Official Reservations Email",
      name: "Fast Email Responses",
      detail: HOTEL_INFO.contact.email,
      actionText: "Send Email",
      copyValue: HOTEL_INFO.contact.email,
      href: `mailto:${HOTEL_INFO.contact.email}`,
      icon: Mail,
      bgColor: "bg-[#C9A66B]/10 border-[#C9A66B]/30 hover:border-[#C9A66B]/60",
      iconColor: "text-[#C9A66B]",
      btnBg: "bg-[#C9A66B] text-[#063F3C]"
    },
    {
      id: "timings",
      title: "Reservation Office Hours",
      name: "Mon – Sun Support",
      detail: HOTEL_INFO.contact.timings,
      actionText: "09:30 AM – 06:30 PM",
      icon: Clock,
      bgColor: "bg-white border-[#E8DCC5] hover:border-[#063F3C]/30",
      iconColor: "text-[#063F3C]",
      isInfoOnly: true
    },
    {
      id: "address",
      title: "Property Location",
      name: "Govind Nagar (Beach #3)",
      detail: HOTEL_INFO.address,
      actionText: "View on Google Maps",
      href: "https://maps.google.com/?q=Hotel+Golden+Pebble+Havelock",
      isExternal: true,
      icon: MapPin,
      bgColor: "bg-white border-[#E8DCC5] hover:border-[#063F3C]/30",
      iconColor: "text-[#E98268]"
    }
  ];

  return (
    <div className="bg-[#F8F6EF] overflow-hidden">
      {/* 1. Header Banner with Parallax Zoom & Typewriter Text */}
      <div className="relative text-white pt-32 sm:pt-36 pb-20 sm:pb-24 overflow-hidden">
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838880/golden-pebble/images/hotel-gallery/reception-1.png"
            alt="Golden Pebble Reception and Front Desk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6EF] via-black/65 to-black/75 z-10" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumbs items={[{ label: "Contact Us" }]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E8DCC5] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B] animate-pulse" />
              <span>DIRECT RESERVATIONS DESK</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal drop-shadow-md">
              Contact &amp; Reservations
            </h1>

            {/* Dynamic Typewriter Tagline */}
            <div className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed min-h-[1.5em] flex items-center gap-1">
              <TypewriterText
                phrases={contactPhrases}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={2800}
                cursorClassName="bg-[#C9A66B] h-[0.9em]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* Left Column: Animated Contact Info Cards & Map Link */}
          <div className="order-2 xl:order-1 xl:col-span-5 space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-5 sm:p-8 rounded-3xl border border-[#E8DCC5] shadow-xl space-y-6 relative overflow-hidden"
            >
              {/* Decorative background ambient glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C9A66B]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#E8DCC5]/60 pb-4">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#C9A66B] block mb-1">
                    GET IN TOUCH
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                    Reservations Desk
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#063F3C]/5 border border-[#063F3C]/10 flex items-center justify-center text-[#063F3C]">
                  <Phone className="w-5 h-5 text-[#C9A66B]" />
                </div>
              </div>

              {/* Animated Interactive Contact Cards */}
              <div className="space-y-4">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  const isCopied = copiedField === card.id;

                  const handleCardAction = (e?: React.MouseEvent) => {
                    if (card.copyValue) {
                      copyToClipboard(card.copyValue, card.id);
                    }
                    if (card.href && !card.isInfoOnly) {
                      if (card.isExternal) {
                        window.open(card.href, "_blank", "noopener,noreferrer");
                      } else {
                        window.location.href = card.href;
                      }
                    }
                  };

                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: shouldReduceMotion ? 1 : 1.015, y: -2 }}
                      whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
                      onClick={() => {
                        if (!card.isInfoOnly) {
                          handleCardAction();
                        }
                      }}
                      className={`p-4 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${card.bgColor} relative group ${!card.isInfoOnly ? "cursor-pointer" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
                        <div className="flex items-start gap-3.5 min-w-0 flex-1">
                          <div className={`p-2.5 rounded-xl bg-white shadow-sm border border-[#E8DCC5]/40 shrink-0 ${card.iconColor}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#1C2A28]/60 block truncate">
                              {card.title}
                            </span>
                            <span className="font-bold text-xs sm:text-sm text-[#063F3C] block mt-0.5 truncate">
                              {card.name}
                            </span>
                            <span className="text-xs text-[#1C2A28]/80 font-medium block mt-0.5 break-all sm:break-normal">
                              {card.detail}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Click Actions (Copy / Call / Link) */}
                        <div className="flex items-center justify-end gap-2 w-full sm:w-auto shrink-0 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-[#E8DCC5]/40">
                          {card.copyValue && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(card.copyValue!, card.id);
                              }}
                              className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#F8F6EF] text-[#063F3C] border border-[#E8DCC5] shadow-xs text-xs flex items-center justify-center gap-1.5 font-semibold transition-colors cursor-pointer shrink-0"
                              title={`Copy ${card.title}`}
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-green-600" />
                                  <span className="text-green-600 font-bold">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5 text-[#C9A66B]" />
                                  <span>Copy</span>
                                </>
                              )}
                            </motion.button>
                          )}

                          {card.href && !card.isInfoOnly && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardAction();
                              }}
                              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-sm hover:shadow transition-all shrink-0 cursor-pointer ${card.btnBg || "bg-[#063F3C] text-white"}`}
                            >
                              <span>{card.actionText}</span>
                              {card.isExternal ? (
                                <ExternalLink className="w-3 h-3 opacity-80" />
                              ) : null}
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Travel Agent Friendly Card with Bounce & Glow */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              className="bg-gradient-to-br from-[#063F3C] via-[#073F3B] to-[#0a4f4b] text-white p-6 rounded-3xl shadow-xl border border-[#073D37] relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A66B]/15 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div className="flex items-center gap-2.5 mb-2 text-[#C9A66B]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="font-serif text-xl font-bold">Travel Agent Friendly</h3>
              </div>
              <p className="text-xs text-[#F8F6EF]/85 font-light leading-relaxed">
                We offer competitive travel-agent rates, quick confirmations, and hassle-free coordination for FIT and group bookings across Andaman packages.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-[#C9A66B] font-semibold">
                <span>Partner with Us</span>
                <a
                  href={HOTEL_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-white font-medium"
                >
                  <span>Agent WhatsApp Line</span>
                  <ExternalLink className="w-3 h-3 text-[#C9A66B]" />
                </a>
              </div>
            </motion.div>

            {/* Interactive Map Box */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-5 rounded-3xl border border-[#E8DCC5] shadow-lg space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#E98268]" />
                  <span className="font-serif font-bold text-sm text-[#063F3C]">
                    Location &amp; Directions
                  </span>
                </div>
                <span className="text-[10px] text-[#063F3C]/70 bg-[#063F3C]/5 px-2.5 py-1 rounded-full font-bold">
                  Govind Nagar (Beach #3)
                </span>
              </div>
              <p className="text-[#1C2A28]/70 text-xs">
                Located just 2 minutes walk from Govind Nagar Beach and 5 minutes from Havelock Ferry Jetty.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com/?q=Hotel+Golden+Pebble+Havelock"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#063F3C] hover:bg-[#073F3B] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3 h-3 text-white/70" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Booking Form with Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 xl:order-2 xl:col-span-7 w-full"
          >
            <EnquiryForm defaultEnquiryType="Room booking" />
          </motion.div>
        </div>
      </div>

      {/* Booking & Contact FAQs with Animated Scroll Entrance */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
      >
        <FaqSection
          heading="Booking & Contact FAQs"
          subtitle="Clear answers about reservations, contact details, location, and travel agent inquiries."
          questions={[
            {
              question: "How can I contact Golden Pebble?",
              answer: "You can contact Soni via phone or WhatsApp at +91 9434288856, or email booking@goldenpebble.co.in."
            },
            {
              question: "How can I enquire about room availability?",
              answer: "Room availability enquiries can be submitted through our Contact enquiry form or via WhatsApp."
            },
            {
              question: "How can I make a booking enquiry?",
              answer: "Select your preferred room type on our Contact form and submit your request for quick confirmation."
            },
            {
              question: "Can I contact the hotel for package enquiries?",
              answer: "Yes, our reservations team assists with customized package itineraries and group inquiries."
            },
            {
              question: "Can guests ask the hotel about activities and sightseeing?",
              answer: "Yes, we assist guests with ferry timings, water sport bookings, and island travel tips."
            },
            {
              question: "Where is Golden Pebble located?",
              answer: "Golden Pebble is located at Govind Nagar, Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands - 744211."
            }
          ]}
        />
      </motion.div>
    </div>
  );
}
