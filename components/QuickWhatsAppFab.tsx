"use client";

import { MessageSquare } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data/hotel";

export default function QuickWhatsAppFab() {
  return (
    <a
      href={HOTEL_INFO.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group animate-bounce-slow"
      title="Chat on WhatsApp with Hotel Reservations"
      aria-label="Contact Hotel Reservations on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-semibold uppercase tracking-wider pr-1">
        WhatsApp Enquiry
      </span>
    </a>
  );
}
