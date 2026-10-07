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

  // Lock background body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Experiences", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Dining", href: "/restaurant" },
    { name: "Contact", href: "/contact" }
  ];

  const isHeaderLight = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderLight
          ? "bg-[#F8F6EF] shadow-md py-2.5 text-[#1C2A28]"
          : "bg-gradient-to-b from-black/75 via-black/40 to-transparent py-3.5 text-white"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink min-w-0 mr-2 sm:mr-4 lg:mr-8 xl:mr-12">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 border shrink-0 ${
                isHeaderLight
                  ? "bg-[#063F3C] border-[#C9A66B]/30 text-[#C9A66B]"
                  : "bg-white/15 backdrop-blur-md border-white/30 text-[#C9A66B]"
              }`}
            >
              {/* Palm / Island Icon */}
              <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8 2 4 4.5 4 8c0 2.5 2 4.5 4.5 5.5C6 14.5 4 16.5 4 19c0 2 3.5 3 8 3s8-1 8-3c0-2.5-2-4.5-4.5-5.5C18 12.5 20 10.5 20 8c0-3.5-4-6-8-6zm0 2c3.2 0 6 1.8 6 4s-2.8 4-6 4-6-1.8-6-4 2.8-4 6-4zm0 10c3.5 0 6 1.5 6 3s-2.5 2-6 2-6-.5-6-2 2.5-3 6-3z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-bold text-sm sm:text-lg lg:text-xl tracking-wider uppercase leading-none truncate">
                Golden Pebble
              </span>
              <span
                className={`text-[9px] sm:text-[11px] tracking-[0.2em] uppercase font-sans mt-0.5 truncate ${
                  isHeaderLight ? "text-[#063F3C]/80" : "text-white/80"
                }`}
              >
                Havelock Island
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation (Visible on xl 1280px and above) */}
          <nav className="hidden xl:flex items-center gap-3.5 xl:gap-5 flex-1 justify-center px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-bold tracking-wider transition-colors relative py-1 uppercase whitespace-nowrap ${
                    isActive
                      ? isHeaderLight
                        ? "text-[#E98268]"
                        : "text-white"
                      : isHeaderLight
                      ? "text-[#1C2A28]/85 hover:text-[#063F3C]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E98268] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Direct Phone & Action Button (Desktop Only) */}
          <div className="hidden xl:flex items-center gap-3.5 shrink-0 ml-4 xl:ml-6">
            <a
              href="tel:+919434288856"
              className={`inline-flex items-center gap-1.5 text-xs xl:text-sm font-sans font-bold tracking-wide transition-colors ${
                isHeaderLight ? "text-[#073F3B] hover:text-[#C9A66B]" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>+91 9434288856</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#E98268] hover:bg-[#d67056] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile & Tablet Drawer Toggle (Visible below xl: 0px to 1279px) */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
            <Link
              href="/contact"
              className="bg-[#E98268] hover:bg-[#d67056] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-md transition-transform active:scale-95 shrink-0"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all border shadow-md active:scale-95 cursor-pointer shrink-0 ${
                isHeaderLight
                  ? "bg-[#063F3C] text-white border-[#C9A66B]/50"
                  : "bg-black/50 backdrop-blur-md text-white border-white/40"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A66B]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Panel (Visible below xl: 0px to 1279px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[58px] sm:top-[68px] bottom-0 bg-[#F8F6EF] text-[#1C2A28] border-t-2 border-[#C5A46D]/40 z-[60] overflow-y-auto px-4 sm:px-6 py-6 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-2.5 max-w-lg mx-auto pb-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 px-5 rounded-2xl text-lg sm:text-xl font-serif font-bold border flex justify-between items-center transition-all ${
                    isActive
                      ? "bg-[#063F3C] text-[#F8F6EF] border-[#C5A46D] shadow-md"
                      : "bg-white/80 text-[#063F3C] border-[#E8DCC5] hover:bg-white hover:border-[#C5A46D]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? "text-[#C5A46D] translate-x-1" : "text-[#063F3C]/40"}`} />
                </Link>
              );
            })}

            <div className="mt-4 pt-5 border-t border-[#E8DCC5] flex flex-col gap-3">
              <a
                href="tel:+919434288856"
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-[#063F3C]/5 border border-[#063F3C]/20 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#073F3B] hover:bg-[#063F3C]/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A46D]" />
                <span>Call Reservations: +91 9434288856</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#E98268] hover:bg-[#d67056] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95 text-center"
              >
                <span>Book Your Stay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
