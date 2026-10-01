"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnquiryFormSchema, EnquiryFormData } from "@/lib/validation";
import { HOTEL_INFO } from "@/lib/data/hotel";
import TypewriterText from "@/components/TypewriterText";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  MessageSquare,
  Calendar,
  Moon,
  Users,
  BedDouble,
  Utensils,
  Sparkles,
  PenTool
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnquiryFormProps {
  defaultRoomCategory?: string;
  defaultPackageName?: string;
  defaultEnquiryType?: "Room booking" | "Package enquiry" | "General enquiry" | "Restaurant enquiry" | "Group booking";
  className?: string;
}

export default function EnquiryForm({
  defaultRoomCategory = "Deluxe Room",
  defaultPackageName = "None",
  defaultEnquiryType = "Room booking",
  className = ""
}: EnquiryFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<{
    state: "idle" | "loading" | "success" | "error";
    message?: string;
    messageId?: string;
  }>({ state: "idle" });

  const [activeField, setActiveField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      fullName: "",
      email: "",
      phone: "+91 ",
      checkIn: "",
      checkOut: "",
      adults: "2",
      children0to5: "0",
      children6to11: "0",
      children12plus: "0",
      children: "0",
      roomCategory: defaultRoomCategory,
      numberOfRooms: "1",
      mealPlan: "Breakfast Included (CP)",
      selectedPackage: defaultPackageName,
      enquiryType: defaultEnquiryType,
      message: "",
      consent: true
    }
  });

  const watchCheckIn = watch("checkIn");
  const watchCheckOut = watch("checkOut");
  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");
  const watchPhone = watch("phone");
  const watchEmail = watch("email");
  const watchMessage = watch("message");

  // Auto-calculate Number of Nights
  const calculateNights = () => {
    if (!watchCheckIn || !watchCheckOut) return 0;
    const d1 = new Date(watchCheckIn);
    const d2 = new Date(watchCheckOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nightsCount = calculateNights();

  const formPhrases = [
    "Direct reservations & tariff confirmation for Havelock Island.",
    "Enter guest details for fast WhatsApp & email confirmation.",
    "Calculates stay duration & meal plan preferences instantly."
  ];

  const onSubmit: SubmitHandler<EnquiryFormData> = async (data) => {
    setSubmissionStatus({ state: "loading" });

    const submissionPayload: EnquiryFormData = {
      ...data,
      fullName: `${data.firstName} ${data.lastName}`.trim(),
      children: `${parseInt(data.children0to5 || "0") + parseInt(data.children6to11 || "0") + parseInt(data.children12plus || "0")}`
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionPayload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus({
          state: "success",
          message: "Thank you! Your booking reservation enquiry has been successfully delivered to Hotel Golden Pebble reservations team. Soni will contact you shortly.",
          messageId: result.messageId
        });
        reset();
      } else {
        setSubmissionStatus({
          state: "error",
          message: result.error || "Failed to deliver reservation enquiry. Please try again or contact reservations directly."
        });
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Network error. Please check your connection or call reservations directly.";
      setSubmissionStatus({
        state: "error",
        message: errorMessage
      });
    }
  };

  return (
    <div className={`bg-white rounded-3xl p-5 sm:p-8 border border-[#E8DCC5] shadow-xl ${className}`}>
      {/* Form Header with Typewriter Subtitle */}
      <div className="mb-6 border-b border-[#E8DCC5] pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#063F3C]/10 text-[#063F3C] text-[10px] font-sans font-bold uppercase tracking-wider mb-2 shadow-xs">
          <BedDouble className="w-3.5 h-3.5 text-[#C9A66B]" />
          <span>OFFICIAL RESERVATION FORM</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#063F3C]">
          HOTEL ROOM BOOKING FORM
        </h3>
        
        {/* Dynamic Typewriter Animation Subtitle */}
        <div className="text-xs text-[#1C2A28]/75 mt-1 font-medium min-h-[1.4em]">
          <TypewriterText
            phrases={formPhrases}
            typingSpeed={55}
            deletingSpeed={30}
            pauseDuration={3000}
            cursorClassName="bg-[#C9A66B] h-[0.85em]"
          />
        </div>
      </div>

      {submissionStatus.state === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[#063F3C]/5 border border-[#063F3C]/20 rounded-2xl p-6 text-center space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-[#063F3C] text-[#F8F6EF] flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-6 h-6 text-[#C9A66B]" />
          </div>
          <h4 className="font-serif text-2xl font-bold text-[#063F3C]">Reservation Request Received!</h4>
          <p className="text-sm text-[#1C2A28]/80 leading-relaxed max-w-md mx-auto">
            {submissionStatus.message}
          </p>
          {submissionStatus.messageId && (
            <p className="text-[11px] text-[#1C2A28]/60 font-mono bg-white px-3 py-1 rounded-full inline-block border border-[#E8DCC5]">
              Booking Reference ID: {submissionStatus.messageId}
            </p>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={HOTEL_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quick Confirmation</span>
            </a>
            <button
              onClick={() => setSubmissionStatus({ state: "idle" })}
              className="text-xs text-[#063F3C] underline hover:text-[#E98268] font-medium"
            >
              Submit Another Reservation
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          {/* 🏨 SECTION 1: GUEST & BOOKING DETAILS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DCC5]/60 pb-2">
              <span className="text-sm font-sans font-bold uppercase tracking-wider text-[#063F3C]">
                🏨 Guest &amp; Booking Details
              </span>
            </div>

            {/* 1. Guest Name (First & Last Name with Typing Indicators) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider">
                    1. First Name *
                  </label>
                  {activeField === "firstName" && watchFirstName && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[10px] text-[#C9A66B] font-bold flex items-center gap-1"
                    >
                      <PenTool className="w-2.5 h-2.5 animate-bounce" /> Typing...
                    </motion.span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    {...register("firstName")}
                    onFocus={() => setActiveField("firstName")}
                    onBlur={() => setActiveField(null)}
                    placeholder="First Name (e.g. Rahul)"
                    className={`w-full px-3.5 py-2.5 rounded-xl border transition-all duration-200 bg-[#F8F6EF]/40 text-sm focus:outline-none ${
                      activeField === "firstName"
                        ? "border-[#063F3C] ring-2 ring-[#063F3C]/20 bg-white shadow-sm"
                        : "border-[#E8DCC5]"
                    }`}
                  />
                </div>
                {errors.firstName && (
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider">
                    Last Name *
                  </label>
                  {activeField === "lastName" && watchLastName && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[10px] text-[#C9A66B] font-bold flex items-center gap-1"
                    >
                      <PenTool className="w-2.5 h-2.5 animate-bounce" /> Typing...
                    </motion.span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    {...register("lastName")}
                    onFocus={() => setActiveField("lastName")}
                    onBlur={() => setActiveField(null)}
                    placeholder="Last Name (e.g. Sharma)"
                    className={`w-full px-3.5 py-2.5 rounded-xl border transition-all duration-200 bg-[#F8F6EF]/40 text-sm focus:outline-none ${
                      activeField === "lastName"
                        ? "border-[#063F3C] ring-2 ring-[#063F3C]/20 bg-white shadow-sm"
                        : "border-[#E8DCC5]"
                    }`}
                  />
                </div>
                {errors.lastName && (
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            {/* 2. Mobile Number & 3. Email Address with Typing Feedback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider">
                    2. Mobile / WhatsApp Number *
                  </label>
                  {activeField === "phone" && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[10px] text-[#25D366] font-bold flex items-center gap-1"
                    >
                      <Sparkles className="w-2.5 h-2.5 animate-spin" /> WhatsApp Support
                    </motion.span>
                  )}
                </div>
                <input
                  type="text"
                  {...register("phone")}
                  onFocus={() => setActiveField("phone")}
                  onBlur={() => setActiveField(null)}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-xl border transition-all duration-200 bg-[#F8F6EF]/40 text-sm focus:outline-none ${
                    activeField === "phone"
                      ? "border-[#063F3C] ring-2 ring-[#063F3C]/20 bg-white shadow-sm"
                      : "border-[#E8DCC5]"
                  }`}
                />
                {errors.phone && (
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider">
                    3. Email Address *
                  </label>
                  {activeField === "email" && watchEmail && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[10px] text-[#C9A66B] font-bold flex items-center gap-1"
                    >
                      <PenTool className="w-2.5 h-2.5 animate-bounce" /> Typing email...
                    </motion.span>
                  )}
                </div>
                <input
                  type="email"
                  {...register("email")}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  placeholder="rahul@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border transition-all duration-200 bg-[#F8F6EF]/40 text-sm focus:outline-none ${
                    activeField === "email"
                      ? "border-[#063F3C] ring-2 ring-[#063F3C]/20 bg-white shadow-sm"
                      : "border-[#E8DCC5]"
                  }`}
                />
                {errors.email && (
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            {/* 4. Check-in Date & 5. Check-out Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>4. Check-in Date *</span>
                </label>
                <input
                  type={watchCheckIn ? "date" : "text"}
                  placeholder="Select Date"
                  {...register("checkIn")}
                  onFocus={(e) => {
                    e.target.type = "date";
                    try {
                      if (typeof e.target.showPicker === "function") {
                        e.target.showPicker();
                      }
                    } catch {}
                  }}
                  onBlur={(e) => {
                    register("checkIn").onBlur(e);
                    if (!e.target.value) {
                      e.target.type = "text";
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] focus:ring-2 focus:ring-[#063F3C]/20 transition-all placeholder:text-gray-500 cursor-pointer"
                />
                {errors.checkIn && (
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    {errors.checkIn.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>5. Check-out Date *</span>
                </label>
                <input
                  type={watchCheckOut ? "date" : "text"}
                  placeholder="Select Date"
                  {...register("checkOut")}
                  onFocus={(e) => {
                    e.target.type = "date";
                    try {
                      if (typeof e.target.showPicker === "function") {
                        e.target.showPicker();
                      }
                    } catch {}
                  }}
                  onBlur={(e) => {
                    register("checkOut").onBlur(e);
                    if (!e.target.value) {
                      e.target.type = "text";
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] focus:ring-2 focus:ring-[#063F3C]/20 transition-all placeholder:text-gray-500 cursor-pointer"
                />
                {errors.checkOut && (
                  <span className="text-[11px] text-red-600 font-medium mt-1 block">
                    {errors.checkOut.message}
                  </span>
                )}
              </div>
            </div>

            {/* 6. Number of Nights (Animated Dynamic Calculation) */}
            <div className="bg-[#063F3C]/5 p-3.5 rounded-2xl border border-[#063F3C]/10 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#063F3C]">
                <Moon className="w-4 h-4 text-[#C9A66B]" />
                <span>6. Number of Nights:</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={nightsCount}
                  initial={{ opacity: 0, y: -5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-bold font-sans text-[#063F3C] bg-white px-3.5 py-1.5 rounded-xl border border-[#E8DCC5] shadow-xs"
                >
                  {nightsCount > 0 ? (
                    <span className="text-[#E98268]">🌙 {nightsCount} {nightsCount === 1 ? "Night" : "Nights"}</span>
                  ) : (
                    <span className="text-[#1C2A28]/50 font-normal">Select Check-in &amp; Check-out</span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 7. Number of Adults & 8. Number of Children */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>7. Number of Adults *</span>
                </label>
                <select
                  {...register("adults")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] transition-all"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults (Max Room Capacity)</option>
                  <option value="4">4 Adults (Requires 2 Rooms)</option>
                  <option value="5+">5+ Adults (Multiple Rooms / Group)</option>
                </select>
              </div>

              {/* 8. Children Breakdown by Age Group */}
              <div>
                <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-2">
                  8. Number of Children (By Age Group)
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {/* 0-5 Years */}
                  <div className="bg-[#F8F6EF] p-2.5 rounded-xl border border-[#E8DCC5] text-center">
                    <span className="block text-[10px] font-sans font-bold text-[#063F3C] uppercase mb-1">
                      0–5 Years
                    </span>
                    <select
                      {...register("children0to5")}
                      className="w-full px-2 py-1.5 rounded-lg border border-[#E8DCC5] bg-white text-xs text-center font-semibold text-[#063F3C]"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                    <span className="text-[9px] text-[#1C2A28]/60 block mt-1">Infant</span>
                  </div>

                  {/* 6-11 Years */}
                  <div className="bg-[#F8F6EF] p-2.5 rounded-xl border border-[#E8DCC5] text-center">
                    <span className="block text-[10px] font-sans font-bold text-[#063F3C] uppercase mb-1">
                      6–11 Years
                    </span>
                    <select
                      {...register("children6to11")}
                      className="w-full px-2 py-1.5 rounded-lg border border-[#E8DCC5] bg-white text-xs text-center font-semibold text-[#063F3C]"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                    <span className="text-[9px] text-[#1C2A28]/60 block mt-1">Child</span>
                  </div>

                  {/* 12+ Years */}
                  <div className="bg-[#F8F6EF] p-2.5 rounded-xl border border-[#E8DCC5] text-center">
                    <span className="block text-[10px] font-sans font-bold text-[#063F3C] uppercase mb-1">
                      12+ Years
                    </span>
                    <select
                      {...register("children12plus")}
                      className="w-full px-2 py-1.5 rounded-lg border border-[#E8DCC5] bg-white text-xs text-center font-semibold text-[#063F3C]"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                    <span className="text-[9px] text-[#1C2A28]/60 block mt-1">Extra Bed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🛏️ SECTION 2: ROOM DETAILS */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 border-b border-[#E8DCC5]/60 pb-2">
              <span className="text-sm font-sans font-bold uppercase tracking-wider text-[#063F3C]">
                🛏️ Room Details
              </span>
            </div>

            {/* 9. Select Room Category */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                9. Select Room Category *
              </label>
              <select
                {...register("roomCategory")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] transition-all"
              >
                <option value="Deluxe Room">Deluxe Room (220 Sq Ft — ₹5,774/night incl. GST)</option>
                <option value="Deluxe Room with Balcony">Deluxe Room with Balcony / Premium (280 Sq Ft — ₹6,824/night incl. GST)</option>
                <option value="Suite">Suite Room</option>
                <option value="Honeymoon Suite">Honeymoon Suite</option>
                <option value="Other">Other / Not Sure (Best Recommendation)</option>
              </select>
            </div>

            {/* 10. Number of Rooms Required */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1">
                10. Number of Rooms Required *
              </label>
              <select
                {...register("numberOfRooms")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] transition-all"
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
                <option value="5+">5+ Rooms (Group / Corporate Booking)</option>
              </select>
            </div>

            {/* 11. Meal Plan */}
            <div>
              <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider mb-1 flex items-center gap-1">
                <Utensils className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>11. Meal Plan *</span>
              </label>
              <select
                {...register("mealPlan")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC5] bg-[#F8F6EF]/40 text-sm focus:outline-none focus:border-[#063F3C] transition-all"
              >
                <option value="Room Only (EP)">Room Only (EP Plan)</option>
                <option value="Breakfast Included (CP)">Breakfast Included (CP — Free Daily Breakfast for Guests)</option>
                <option value="Breakfast + Dinner (MAP)">Breakfast + Dinner (MAP — Additional ₹750/person)</option>
                <option value="Breakfast + Lunch + Dinner (AP)">Breakfast + Lunch + Dinner (AP — Full Board ₹1,500/person)</option>
              </select>
            </div>

            {/* Message / Special Requests with Animated Live Character Counter & Typing Feedback */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-medium text-[#063F3C] uppercase tracking-wider">
                  Special Requests &amp; Notes
                </label>
                {activeField === "message" && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[10px] text-[#C9A66B] font-bold flex items-center gap-1"
                  >
                    <PenTool className="w-2.5 h-2.5 animate-bounce" /> {watchMessage?.length || 0} chars typed
                  </motion.span>
                )}
              </div>
              <textarea
                {...register("message")}
                onFocus={() => setActiveField("message")}
                onBlur={() => setActiveField(null)}
                rows={3}
                placeholder="Ferry arrival time, extra bed request, celebratory setup (cake/candlelight dinner), etc."
                className={`w-full px-3.5 py-2.5 rounded-xl border transition-all duration-200 bg-[#F8F6EF]/40 text-sm focus:outline-none ${
                  activeField === "message"
                    ? "border-[#063F3C] ring-2 ring-[#063F3C]/20 bg-white shadow-sm"
                    : "border-[#E8DCC5]"
                }`}
              />
            </div>
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start gap-2 pt-2 border-t border-[#E8DCC5]/60">
            <input
              type="checkbox"
              id="consent-check"
              {...register("consent")}
              className="mt-1 rounded text-[#063F3C] focus:ring-[#063F3C]"
            />
            <label htmlFor="consent-check" className="text-xs text-[#1C2A28]/70 leading-normal">
              I agree to Hotel Golden Pebble contacting me regarding this reservation according to the{" "}
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

          {/* Validation Error Summary Notification */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-2.5 font-medium shadow-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-1 text-amber-950">Please complete the required details to submit:</span>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-amber-850">
                  {errors.firstName && <li>First Name is required</li>}
                  {errors.lastName && <li>Last Name is required</li>}
                  {errors.phone && <li>Valid Mobile / WhatsApp number is required</li>}
                  {errors.email && <li>Valid Email address is required</li>}
                  {errors.checkIn && <li>Check-in date is required</li>}
                  {errors.checkOut && <li>Check-out date is required ({errors.checkOut.message})</li>}
                  {errors.consent && <li>Privacy policy consent agreement is required</li>}
                </ul>
              </div>
            </div>
          )}

          {/* Submit Button with Hover & Tap Animations */}
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            type="submit"
            disabled={submissionStatus.state === "loading"}
            className="w-full py-3.5 rounded-full bg-[#E98268] hover:bg-[#d67056] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {submissionStatus.state === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Delivering Booking Request to Hotel...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Room Booking Request</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}
