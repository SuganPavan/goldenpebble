import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import BookingCTA from "@/components/BookingCTA";
import { HOTEL_INFO } from "@/lib/data/hotel";
import { constructMetadata } from "@/lib/seo";
import { generateRestaurantSchema } from "@/lib/structuredData";
import { Utensils, Coffee, Check, Users } from "lucide-react";

export const metadata = constructMetadata({
  title: "Air-Conditioned Restaurant & Dining | Hotel Golden Pebble",
  description: "Savour fresh Andaman seafood and international cuisine in our 30-seat air-conditioned restaurant. Daily breakfast included for all guests."
});

export default function RestaurantPage() {
  const restaurantSchema = generateRestaurantSchema();

  return (
    <div className="bg-[#F8F6EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
          alt="Golden Pebble Air Conditioned Restaurant"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Dining & Restaurant" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mt-4">
            Fresh Flavours. Island Soul.
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] max-w-2xl mt-3 font-light leading-relaxed">
            Good Food • Great Company • Brighter Days at Hotel Golden Pebble Havelock.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Restaurant Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Golden Pebble Air Conditioned Restaurant"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Restaurant Features Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm text-xs text-[#063F3C]">
              <div className="flex flex-col items-center text-center">
                <Users className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">30 Guest Capacity</span>
                <span className="text-[10px] text-[#1C2A28]/60">Air-Conditioned</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Coffee className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">Inclusive Breakfast</span>
                <span className="text-[10px] text-[#1C2A28]/60">Complimentary</span>
              </div>
              <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
                <Utensils className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">Fresh Seafood</span>
                <span className="text-[10px] text-[#1C2A28]/60">Local Delicacies</span>
              </div>
            </div>

            {/* Restaurant Introduction */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Dining Ambience & Cuisine
              </h2>
              <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                Our in-house dining hall offers a comfortable, pleasant air-conditioned sanctuary where guests can start their morning with a freshly cooked breakfast spread or relax in the evening over rich Indian curries, fresh catch of the day seafood, and vegetarian options.
              </p>

              <h3 className="font-serif text-xl font-bold text-[#063F3C] pt-4 border-t border-[#E8DCC5]/60">
                Verified Restaurant Features
              </h3>
              <ul className="space-y-2 text-xs text-[#063F3C]">
                {HOTEL_INFO.dining.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E98268] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meal Supplement Policy Table from PDF */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#063F3C]">
                Official PDF Meal Supplement Tariffs
              </h3>
              <p className="text-xs text-[#1C2A28]/70 font-light">
                Add lunch or dinner supplements to your room stay during booking.
              </p>

              <div className="space-y-3 text-xs">
                {HOTEL_INFO.mealPolicies.rates.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#063F3C] text-sm block">{m.mealType}</span>
                      <span className="text-[#1C2A28]/70">{m.details}</span>
                    </div>
                    <span className="font-serif font-bold text-xl text-[#063F3C]">{m.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#E8DCC5]/60">
                <span className="text-xs font-bold text-[#063F3C] block mb-2">Meal Policy Guidelines:</span>
                <ul className="space-y-1 text-xs text-[#1C2A28]/70 font-light">
                  {HOTEL_INFO.mealPolicies.notes.map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Restaurant Enquiry */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <EnquiryForm defaultEnquiryType="Restaurant enquiry" />
            </div>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
