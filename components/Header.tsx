"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Packages", href: "/packages" },
    { name: "Experiences", href: "/activities" },
    { name: "Nearby", href: "/nearby-locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Dining", href: "/restaurant" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F6EF]/95 backdrop-blur-md shadow-md py-2.5 text-[#1C2A28]"
          : "bg-gradient-to-b from-black/65 via-black/35 to-transparent py-3.5 text-white"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Logo with Generous Right Margin Space */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0 mr-4 lg:mr-8 xl:mr-12">
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 border ${
                isScrolled
                  ? "bg-[#063F3C] border-[#C9A66B]/30 text-[#C9A66B]"
                  : "bg-white/15 backdrop-blur-md border-white/30 text-[#C9A66B]"
              }`}
            >
              {/* Palm / Island Icon */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8 2 4 4.5 4 8c0 2.5 2 4.5 4.5 5.5C6 14.5 4 16.5 4 19c0 2 3.5 3 8 3s8-1 8-3c0-2.5-2-4.5-4.5-5.5C18 12.5 20 10.5 20 8c0-3.5-4-6-8-6zm0 2c3.2 0 6 1.8 6 4s-2.8 4-6 4-6-1.8-6-4 2.8-4 6-4zm0 10c3.5 0 6 1.5 6 3s-2.5 2-6 2-6-.5-6-2 2.5-3 6-3z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-wider uppercase leading-none">
                Golden Pebble
              </span>
              <span
                className={`text-[8.5px] sm:text-[9px] tracking-[0.25em] uppercase font-sans mt-0.5 ${
                  isScrolled ? "text-[#063F3C]/80" : "text-white/80"
                }`}
              >
                Havelock Island Andaman
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation with Balanced Spacing */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 flex-1 justify-center px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] xl:text-xs font-semibold tracking-wider transition-colors relative py-1 uppercase whitespace-nowrap ${
                    isActive
                      ? isScrolled
                        ? "text-[#E98268] font-bold"
                        : "text-white font-bold"
                      : isScrolled
                      ? "text-[#1C2A28]/85 hover:text-[#063F3C]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E98268] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Direct Phone & Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 ml-4 lg:ml-6">
            <a
              href="tel:+919434288856"
              className={`hidden xl:inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wide transition-colors ${
                isScrolled ? "text-[#073F3B] hover:text-[#C9A66B]" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>+91 9434288856</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#E98268] hover:bg-[#d67056] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#E98268] text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-[#063F3C]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F6EF] text-[#1C2A28] border-b border-[#E8DCC5] px-4 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm sm:text-base font-serif font-medium border-b border-[#E8DCC5]/40 flex justify-between items-center ${
                  pathname === link.href
                    ? "bg-[#063F3C] text-[#F8F6EF]"
                    : "text-[#063F3C] hover:bg-[#E8DCC5]/30"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-60" />
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[#E8DCC5] flex flex-col gap-3">
              <a
                href="tel:+919434288856"
                className="flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#073F3B]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>Call Reservations: +91 9434288856</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#E98268] text-white text-xs font-semibold uppercase tracking-wider"
              >
                <span>Book Your Stay</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
