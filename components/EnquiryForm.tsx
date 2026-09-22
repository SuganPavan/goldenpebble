"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnquiryFormSchema, EnquiryFormData } from "@/lib/validation";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, MessageSquare } from "lucide-react";

interface EnquiryFormProps {
  defaultRoomCategory?: string;
  defaultPackageName?: string;
  defaultEnquiryType?: "Room booking" | "Package enquiry" | "General enquiry" | "Restaurant enquiry" | "Group booking";
  className?: string;
}

export default function EnquiryForm({
  defaultRoomCategory = "Any / Not Sure",
  defaultPackageName = "None",
  defaultEnquiryType = "Room booking",
  className = ""
}: EnquiryFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<{
    state: "idle" | "loading" | "success" | "error";
    message?: string;
    messageId?: string;
  }>({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "+91 ",
      checkIn: "",
      checkOut: "",
      adults: "2",
      children: "0",
      roomCategory: defaultRoomCategory,
      selectedPackage: defaultPackageName,
      enquiryType: defaultEnquiryType,
      message: "",
      consent: true
    }
  });

  const onSubmit: SubmitHandler<EnquiryFormData> = async (data) => {
    setSubmissionStatus({ state: "loading" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus({
          state: "success",
          message: "Thank you! Your enquiry has been successfully delivered to Hotel Golden Pebble reservations team. Soni will contact you shortly.",
          messageId: result.messageId
        });
        reset();
      } else {
        setSubmissionStatus({
          state: "error",
          message: result.error || "Failed to deliver enquiry email. Please try again or contact reservations directly."
        });
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Network error. Please check your internet connection or call reservations directly.";
      setSubmissionStatus({
        state: "error",
        message: errorMessage
      });
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DCC5] shadow-lg ${className}`}>
      <div className="mb-6 border-b border-[#E8DCC5]/60 pb-4">
        <h3 className="font-serif text-2xl font-bold text-[#063F3C]">Send an Enquiry</h3>
        <p className="text-xs text-[#1C2A28]/70 mt-1">
          Direct reservations & tariff confirmation for Hotel Golden Pebble, Havelock.
        </p>
      </div>

      {submissionStatus.state === "success" ? (
        <div className="bg-[#063F3C]/5 border border-[#063F3C]/20 rounded-xl p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#063F3C] text-[#F8F6EF] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#C9A66B]" />
          </div>
          <h4 className="font-serif text-2xl font-bold text-[#063F3C]">Enquiry Delivered!</h4>
          <p className="text-sm text-[#1C2A28]/80 leading-relaxed max-w-md mx-auto">
            {submissionStatus.message}
          </p>
          {submissionStatus.messageId && (
            <p className="text-[11px] text-[#1C2A28]/50 font-mono">
              Reference ID: {submissionStatus.messageId}
            </p>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={HOTEL_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quick Chat</span>
            </a>
            <button
              onClick={() => setSubmissionStatus({ state: "idle" })}
              className="text-xs text-[#063F3C] underline hover:text-[#E98268] font-medium"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {submissionStatus.state === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Delivery Failed</span>
              </div>
              <p>{submissionStatus.message}</p>
              <div className="pt-2 border-t border-red-200/60 flex items-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, "")}`}
                  className="font-medium text-red-900 underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Call Soni: {HOTEL_INFO.contact.phone}
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] focus:ring-1 focus:ring-[#063F3C]"
              />
              {errors.fullName && (
                <span className="text-[11px] text-red-600 font-medium mt-1 block">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="rahul@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] focus:ring-1 focus:ring-[#063F3C]"
              />
              {errors.email && (
                <span className="text-[11px] text-red-600 font-medium mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="text"
                {...register("phone")}
                placeholder="+91 9876543210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] focus:ring-1 focus:ring-[#063F3C]"
              />
              {errors.phone && (
                <span className="text-[11px] text-red-600 font-medium mt-1 block">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Enquiry Type */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Enquiry Type
              </label>
              <select
                {...register("enquiryType")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
              >
                <option value="Room booking">Room Booking</option>
                <option value="Package enquiry">Holiday Package</option>
                <option value="Restaurant enquiry">Dining & Restaurant</option>
                <option value="Group booking">Group / Agent Booking</option>
                <option value="General enquiry">General Question</option>
              </select>
            </div>

            {/* Check-In */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Check-In Date
              </label>
              <input
                type="date"
                {...register("checkIn")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
              />
              {errors.checkIn && (
                <span className="text-[11px] text-red-600 font-medium mt-1 block">
                  {errors.checkIn.message}
                </span>
              )}
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Check-Out Date
              </label>
              <input
                type="date"
                {...register("checkOut")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
              />
              {errors.checkOut && (
                <span className="text-[11px] text-red-600 font-medium mt-1 block">
                  {errors.checkOut.message}
                </span>
              )}
            </div>

            {/* Adults */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Adults
              </label>
              <select
                {...register("adults")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults (Max Occupancy)</option>
                <option value="4+">4+ Adults (Multiple Rooms)</option>
              </select>
            </div>

            {/* Children */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                Children (&lt;12 yrs)
              </label>
              <select
                {...register("children")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
              </select>
            </div>
          </div>

          {/* Room Category */}
          <div>
            <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
              Room Category Preference
            </label>
            <select
              {...register("roomCategory")}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
            >
              <option value="Any / Not Sure">Any Category / Best Recommendation</option>
              <option value="Deluxe Room (220 sq ft)">Deluxe Room (220 Sq Ft - Net ₹3,600/night)</option>
              <option value="Deluxe Room with Balcony (280 sq ft)">Deluxe Room with Balcony (280 Sq Ft - Net ₹4,200/night)</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
              Message / Special Requests
            </label>
            <textarea
              {...register("message")}
              rows={3}
              placeholder="Tell us about ferry timing, special add-ons (cake/decorations), or extra mattress requirements..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C]"
            />
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="consent-check"
              {...register("consent")}
              className="mt-1 rounded text-[#063F3C] focus:ring-[#063F3C]"
            />
            <label htmlFor="consent-check" className="text-xs text-[#1C2A28]/70 leading-normal">
              I agree to the hotel contacting me regarding this enquiry according to the{" "}
              <a href="/privacy-policy" target="_blank" className="underline text-[#063F3C]">
                Privacy Policy
              </a>.
            </label>
          </div>
          {errors.consent && (
            <span className="text-[11px] text-red-600 font-medium block">
              {errors.consent.message}
            </span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionStatus.state === "loading"}
            className="w-full py-3.5 rounded-full bg-[#E98268] hover:bg-[#d67056] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {submissionStatus.state === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Delivering Enquiry to Hotel...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Reservation Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
