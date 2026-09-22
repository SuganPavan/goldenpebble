"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Globe, Share2 } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data/hotel";

export default function Footer() {
  return (
    <footer className="bg-[#063F3C] text-[#F8F6EF] pt-16 pb-8 border-t border-[#073D37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#073D37]">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#073D37] text-[#C9A66B] flex items-center justify-center border border-[#C9A66B]/30">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8 2 4 4.5 4 8c0 2.5 2 4.5 4.5 5.5C6 14.5 4 16.5 4 19c0 2 3.5 3 8 3s8-1 8-3c0-2.5-2-4.5-4.5-5.5C18 12.5 20 10.5 20 8c0-3.5-4-6-8-6zm0 2c3.2 0 6 1.8 6 4s-2.8 4-6 4-6-1.8-6-4 2.8-4 6-4zm0 10c3.5 0 6 1.5 6 3s-2.5 2-6 2-6-.5-6-2 2.5-3 6-3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl uppercase tracking-wider text-white">
                  Golden Pebble
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#C9A66B]">
                  Havelock Island
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#F8F6EF]/70 font-light leading-relaxed">
              A serene tropical boutique hotel in Havelock (Swaraj Deep), Andaman. Offering transparent pricing, comfortable rooms, fresh dining, and memorable island journeys.
            </p>

            <div className="pt-2">
              <span className="text-xs font-serif italic text-[#C9A66B] block mb-2">
                &ldquo;Nature • Hospitality • Memorable Stays&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#C9A66B] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F6EF]/80 font-light">
              <li>
                <Link href="/" className="hover:text-[#E98268] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E98268] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#E98268] transition-colors">Accommodations</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#E98268] transition-colors">Curated Packages</Link>
              </li>
              <li>
                <Link href="/restaurant" className="hover:text-[#E98268] transition-colors">Dining & Restaurant</Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-[#E98268] transition-colors">Experiences & Activities</Link>
              </li>
              <li>
                <Link href="/nearby-locations" className="hover:text-[#E98268] transition-colors">Nearby Attractions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E98268] transition-colors">Contact Reservations</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#C9A66B] mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-[#F8F6EF]/80 font-light">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">{HOTEL_INFO.contact.person}</span>
                  <a href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[#E98268]">
                    {HOTEL_INFO.contact.displayPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <a href={`mailto:${HOTEL_INFO.contact.email}`} className="hover:text-[#E98268] break-all">
                  {HOTEL_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>Reservation Hours: {HOTEL_INFO.contact.timings}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Stay Connected & Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-[#C9A66B] font-semibold mb-4 uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-xs text-[#F8F6EF]/70 mb-4 font-light">
              Receive special island offers, tariff updates, and travel tips for Havelock Island.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-[#073D37] text-white text-xs border border-[#C9A66B]/30 rounded-l-lg focus:outline-none focus:border-[#C9A66B]"
              />
              <button
                type="submit"
                className="bg-[#E98268] hover:bg-[#d67056] text-white px-3 py-2 rounded-r-lg text-xs font-semibold uppercase transition-colors"
                title="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center gap-3 text-[#C9A66B]">
              <a href="#" className="p-2 rounded-full bg-[#073D37] hover:text-white transition-colors" aria-label="Social Media">
                <Share2 className="w-4 h-4" />
              </a>
              <a href={HOTEL_INFO.contact.website} className="p-2 rounded-full bg-[#073D37] hover:text-white transition-colors" aria-label="Official Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F8F6EF]/60 font-light gap-4">
          <p>© {new Date().getFullYear()} Hotel Golden Pebble, Havelock. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
