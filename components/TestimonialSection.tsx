"use client";

import { Star, ShieldCheck } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-[#F8F6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-script text-4xl sm:text-5xl text-[#C9A66B] block mb-1">
            What Our Guests Say
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#063F3C]">
            Verified Guest Hospitality Experiences
          </h2>
          <p className="text-sm text-[#1C2A28]/70 mt-3 font-light">
            Real feedback and authentic ratings across top online travel platforms.
          </p>
        </div>

        {/* OTA Ratings Banner from PDF */}
        <div className="bg-white rounded-2xl p-6 mb-12 border border-[#E8DCC5] shadow-sm">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#063F3C]">
              Hotel Golden Pebble — Verified OTA Ratings
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {HOTEL_INFO.ratings.map((ota) => (
              <div
                key={ota.platform}
                className="bg-[#F8F6EF]/60 p-3.5 rounded-xl border border-[#E8DCC5]/40 text-center flex flex-col items-center justify-center"
              >
                <span className="text-xs font-medium text-[#1C2A28]/70">{ota.platform}</span>
                <div className="flex items-center gap-1 my-1">
                  <Star className="w-4 h-4 fill-[#C9A66B] text-[#C9A66B]" />
                  <span className="font-serif font-bold text-lg text-[#063F3C]">
                    {ota.rating}
                  </span>
                  <span className="text-xs text-[#1C2A28]/50">/ {ota.maxScore}</span>
                </div>
                <span className="text-[10px] text-[#063F3C]/80 font-medium">Verified Rating</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5]/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A66B] text-[#C9A66B]" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-[#063F3C] bg-[#F8F6EF] px-2.5 py-1 rounded-full border border-[#E8DCC5]/40">
                    {review.platform}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-[#063F3C] mb-2">
                  &ldquo;{review.title}&rdquo;
                </h4>

                <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DCC5]/40 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#063F3C] block">{review.name}</span>
                  <span className="text-[#1C2A28]/60">{review.location}</span>
                </div>
                {review.roomBooked && (
                  <span className="text-[#C9A66B] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {review.roomBooked}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
