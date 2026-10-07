"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Globe, Share2, Check, AlertCircle, Loader2 } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data/hotel";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@") || !newsletterEmail.includes(".")) {
      setSubscriptionStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setSubscriptionStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubscriptionStatus("success");
        setNewsletterEmail("");
      } else {
        setSubscriptionStatus("error");
        setErrorMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setSubscriptionStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopiedLink(true);
      setTimeout(() => setIsCopiedLink(false), 2500);
    }
  };
  return (
    <footer className="bg-[#063F3C] text-[#F8F6EF] pt-12 sm:pt-16 pb-8 border-t border-[#073D37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#073D37]">
          {/* Col 1: Brand Info */}
          <div className="space-y-3.5">
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

            <p className="text-xs sm:text-sm text-[#F8F6EF]/75 font-light leading-relaxed">
              A serene tropical boutique hotel in Havelock (Swaraj Dweep), Andaman. Offering transparent pricing, comfortable rooms, fresh dining, and memorable island journeys.
            </p>

            <div className="pt-1">
              <span className="text-xs sm:text-sm font-serif italic text-[#C9A66B] block">
                &ldquo;Nature • Hospitality • Memorable Stays&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Navigation (Explore & Hotel) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#C9A66B] mb-3 uppercase tracking-wider">
                Explore
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#F8F6EF]/85 font-light">
                <li>
                  <Link href="/rooms" className="hover:text-[#E98268] transition-colors block">Rooms</Link>
                </li>
                <li>
                  <Link href="/activities" className="hover:text-[#E98268] transition-colors block">Experiences</Link>
                </li>
                <li>
                  <Link href="/packages" className="hover:text-[#E98268] transition-colors block">Packages</Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#E98268] transition-colors block">Gallery</Link>
                </li>
                <li>
                  <Link href="/nearby-locations" className="hover:text-[#E98268] transition-colors block">Nearby</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#C9A66B] mb-3 uppercase tracking-wider">
                Hotel
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#F8F6EF]/85 font-light">
                <li>
                  <Link href="/about" className="hover:text-[#E98268] transition-colors block">About Us</Link>
                </li>
                <li>
                  <Link href="/restaurant" className="hover:text-[#E98268] transition-colors block">Dining</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#E98268] transition-colors block">Contact</Link>
                </li>
                <li>
                  <Link href="/contact#faq" className="hover:text-[#E98268] transition-colors block">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#C9A66B] mb-3 sm:mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F8F6EF]/85 font-light">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">{HOTEL_INFO.contact.person}</span>
                  <a href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[#E98268] text-white">
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
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#C9A66B] mb-3 sm:mb-4 uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-xs sm:text-sm text-[#F8F6EF]/75 mb-4 font-light">
              Receive special island offers, tariff updates, and travel tips for Havelock Island.
            </p>

            {subscriptionStatus === "success" ? (
              <div className="bg-[#073D37] border border-[#C9A66B]/50 rounded-xl p-3.5 text-xs text-[#E8DCC5] flex items-start gap-2.5 mb-5 shadow-inner">
                <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Subscription Confirmed!</span>
                  <span>Thank you for subscribing to Hotel Golden Pebble island offers &amp; travel updates.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col mb-5">
                <div className="flex items-center">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (subscriptionStatus === "error") setSubscriptionStatus("idle");
                    }}
                    placeholder="Your email address"
                    className="w-full h-11 px-3.5 py-2 bg-[#073D37] text-white text-xs sm:text-sm border border-[#C9A66B]/30 rounded-l-lg focus:outline-none focus:border-[#C9A66B] placeholder:text-[#F8F6EF]/50"
                  />
                  <button
                    type="submit"
                    disabled={subscriptionStatus === "loading"}
                    className="bg-[#E98268] hover:bg-[#d67056] text-white h-11 px-4 rounded-r-lg text-xs font-semibold uppercase transition-colors shrink-0 flex items-center justify-center cursor-pointer disabled:opacity-60"
                    title="Subscribe to Island Updates"
                  >
                    {subscriptionStatus === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {subscriptionStatus === "error" && (
                  <span className="text-[11px] text-red-400 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-red-400" />
                    {errorMessage || "Please enter a valid email address."}
                  </span>
                )}
              </form>
            )}

            <div className="flex items-center gap-3 text-[#C9A66B]">
              <button
                onClick={handleShareClick}
                className="p-2.5 rounded-full bg-[#073D37] hover:text-white transition-colors cursor-pointer relative group flex items-center gap-1.5"
                aria-label="Share Page Link"
                title="Share Website Link"
              >
                {isCopiedLink ? <Check className="w-4.5 h-4.5 text-green-400" /> : <Share2 className="w-4.5 h-4.5" />}
              </button>
              {isCopiedLink && (
                <span className="text-[11px] text-green-400 font-bold tracking-wide">
                  Link Copied!
                </span>
              )}
              <a
                href={HOTEL_INFO.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#073D37] hover:text-white transition-colors"
                aria-label="Official Website"
              >
                <Globe className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-[#F8F6EF]/70 font-light gap-3 text-center sm:text-left">
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
