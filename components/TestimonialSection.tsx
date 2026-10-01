"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Autoplay slider every 5 seconds
  useEffect(() => {
    if (isAutoplayPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoplayPaused]);

  return (
    <section className="py-12 sm:py-20 lg:py-8 bg-[#F8F6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-4"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-script text-2xl sm:text-4xl lg:text-5xl text-[#C9A66B] block mb-1.5 leading-tight"
          >
            &ldquo;An unforgettable stay in the heart of paradise!&rdquo;
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-2xl sm:text-4xl font-semibold text-[#063F3C]"
          >
            Verified Guest Hospitality Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm text-[#1C2A28]/70 mt-2 font-light max-w-xl mx-auto"
          >
            Real feedback and authentic ratings from travellers across top online travel platforms.
          </motion.p>
        </motion.div>

        {/* OTA Ratings Banner from PDF */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="bg-white rounded-2xl p-4 sm:p-6 lg:p-4 mb-6 sm:mb-10 lg:mb-5 border border-[#E8DCC5] shadow-sm"
        >
          <div className="text-center mb-3">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-sans font-bold text-[#063F3C] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>Hotel Golden Pebble — Verified OTA Ratings</span>
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-4">
            {HOTEL_INFO.ratings.map((ota, index) => (
              <motion.div
                key={ota.platform}
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="bg-[#F8F6EF]/60 p-2.5 sm:p-3 rounded-xl border border-[#E8DCC5]/60 text-center flex flex-col items-center justify-center hover:border-[#C9A66B] transition-colors"
              >
                <span className="text-[11px] sm:text-xs font-medium text-[#1C2A28]/70">{ota.platform}</span>
                <div className="flex items-center gap-1 my-0.5 sm:my-1">
                  <Star className="w-3.5 h-3.5 fill-[#C9A66B] text-[#C9A66B]" />
                  <span className="font-serif font-bold text-base sm:text-lg text-[#063F3C]">
                    {ota.rating}
                  </span>
                  <span className="text-[10px] text-[#1C2A28]/50">/ {ota.maxScore}</span>
                </div>
                <span className="text-[10.5px] sm:text-xs text-[#063F3C]/80 font-semibold uppercase tracking-wider">Verified Rating</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ANIMATED TESTIMONIAL SLIDER CAROUSEL */}
        <div 
          className="relative max-w-4xl mx-auto px-1 sm:px-12"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          {/* Animated Slide Container */}
          <div className="overflow-hidden min-h-[310px] sm:min-h-[260px] lg:min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full"
              >
                {(() => {
                  const review = TESTIMONIALS[currentIndex];
                  return (
                    <div className="bg-white p-5 sm:p-8 lg:p-5 rounded-2xl sm:rounded-3xl border border-[#E8DCC5] shadow-lg relative flex flex-col justify-between group">
                      {/* Quote Watermark Icon */}
                      <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 text-[#C9A66B]/15 pointer-events-none" />

                      <div>
                        {/* Rating Stars & Platform */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C9A66B] text-[#C9A66B]" />
                            ))}
                            <span className="text-xs font-bold text-[#063F3C] ml-1">
                              {review.rating}.0 / 5.0
                            </span>
                          </div>
                          <span className="text-[11px] sm:text-xs font-semibold text-[#063F3C] bg-[#F8F6EF] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#E8DCC5]">
                            {review.platform}
                          </span>
                        </div>

                        {/* Review Title */}
                        <h3 className="font-serif text-lg sm:text-2xl lg:text-xl font-bold text-[#063F3C] mb-2 sm:mb-3 leading-snug">
                          &ldquo;{review.title}&rdquo;
                        </h3>

                        {/* Review Comment */}
                        <p className="text-sm sm:text-base lg:text-sm text-[#1C2A28]/85 font-light leading-relaxed italic mb-4 sm:mb-6 lg:mb-3">
                          &ldquo;{review.comment}&rdquo;
                        </p>
                      </div>

                      {/* Guest Author Footer */}
                      <div className="pt-3.5 sm:pt-4 border-t border-[#E8DCC5]/60 flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-xs">
                        <div>
                          <span className="font-bold text-[#063F3C] text-xs sm:text-sm block">{review.name}</span>
                          <span className="text-[11px] sm:text-xs text-[#1C2A28]/60">{review.location} • {review.date}</span>
                        </div>
                        {review.roomBooked && (
                          <span className="text-[#C9A66B] font-semibold flex items-center gap-1 bg-[#F8F6EF] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#C9A66B]/30 text-xs">
                            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A66B]" />
                            <span>{review.roomBooked}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow Navigation Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Guest Review"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E8DCC5] shadow-md hover:bg-[#063F3C] hover:text-white text-[#063F3C] transition-all flex items-center justify-center z-20 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Guest Review"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E8DCC5] shadow-md hover:bg-[#063F3C] hover:text-white text-[#063F3C] transition-all flex items-center justify-center z-20 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#C9A66B]"
                    : "w-2.5 bg-[#E8DCC5] hover:bg-[#C9A66B]/60"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
