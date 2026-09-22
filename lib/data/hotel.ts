export interface OTARating {
  platform: string;
  rating: string;
  maxScore: string;
  badgeText?: string;
}

export interface HotelPolicy {
  title: string;
  subtitle: string;
  rules: string[];
}

export interface MealPolicy {
  title: string;
  subtitle: string;
  rates: {
    mealType: string;
    price: string;
    details: string;
  }[];
  notes: string[];
}

export interface SpecialAddon {
  name: string;
  price: string;
  details: string;
}

export const HOTEL_INFO = {
  name: "Hotel Golden Pebble",
  tagline: "A Stay Closer to Paradise",
  subTagline: "Comfort. Nature. Hospitality.",
  address: "Havelock Island (Swaraj Deep), Andaman & Nicobar Islands, India - 744211",
  locationName: "Havelock (Swaraj Deep), Andaman & Nicobar Islands",
  contact: {
    person: "Soni | Reservations",
    phone: "+91 9434288856",
    displayPhone: "+91 9434288856",
    whatsapp: "+91 9434288856",
    whatsappLink: "https://wa.me/919434288856?text=Hi%20Golden%20Pebble%20Team%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability.",
    email: "booking@goldenpebble.co.in",
    website: "https://goldenpebble.co.in",
    timings: "09:30 AM – 06:30 PM (IST)"
  },
  ratings: [
    { platform: "Google", rating: "4.0", maxScore: "5" },
    { platform: "MakeMyTrip", rating: "3.8", maxScore: "5" },
    { platform: "Goibibo", rating: "4.1", maxScore: "5" },
    { platform: "Agoda", rating: "7.3", maxScore: "10" },
    { platform: "Booking.com", rating: "7.9", maxScore: "10" }
  ] as OTARating[],
  highlights: [
    {
      title: "Best Value for Money",
      desc: "Competitive rates with an excellent balance of price, comfort, and attentive service."
    },
    {
      title: "Convenient Havelock Location",
      desc: "Strategically located for easy access to beaches, sightseeing spots, and popular tourist activities."
    },
    {
      title: "Travel Agent Friendly",
      desc: "Dedicated support, quick confirmations, and hassle-free coordination for FIT and group bookings."
    },
    {
      title: "Comfortable & Reliable Stay",
      desc: "Well-maintained air-conditioned rooms, quality service, and a serene tropical atmosphere."
    }
  ],
  dining: {
    title: "Fresh Flavours. Island Soul.",
    subtitle: "Good Food • Great Company • Brighter Days",
    description: "Enjoy freshly prepared meals, local Andaman delicacies, and international cuisine in our comfortable air-conditioned restaurant environment.",
    capacity: "30 Guests",
    features: [
      "Fully Air-Conditioned Restaurant",
      "Seating Capacity: 30 Guests",
      "Exclusive Breakfast Service for In-House Guests",
      "Comfortable & Pleasant Dining Ambience",
      "Freshly Prepared Meals & Attentive Service"
    ]
  },
  mealPolicies: {
    title: "Meal Supplement Policy",
    subtitle: "GOOD FOOD MAKES GREAT DAYS",
    rates: [
      {
        mealType: "Lunch or Dinner",
        price: "₹750",
        details: "Per person, per meal, plus taxes"
      },
      {
        mealType: "Lunch & Dinner",
        price: "₹1,500",
        details: "Per person, per day, plus taxes"
      }
    ],
    notes: [
      "Served only at designated restaurant/dining area.",
      "Non-transferable and cannot be adjusted against other services.",
      "In case of low occupancy, a fixed menu (TDH) may be offered."
    ]
  } as MealPolicy,
  specialAddons: [
    {
      name: "Half KG Celebration Cake",
      price: "₹1,000 + 5% GST",
      details: "Freshly baked cake for birthdays, anniversaries, or special moments."
    },
    {
      name: "Flower Bed Decoration",
      price: "₹1,500 + 5% GST",
      details: "Romantic floral arrangement for honeymoon couples and celebrations."
    }
  ] as SpecialAddon[],
  policies: [
    {
      title: "Room Occupancy Policy",
      subtitle: "Comfort for Everyone",
      rules: [
        "Maximum Occupancy: 3 adults per room, with 1 child up to 12 years sharing existing bed with parents.",
        "Extra Mattress: Only one extra mattress is permitted per room."
      ]
    },
    {
      title: "Extra Adult, Child & Infant Policy",
      subtitle: "Little Guests, Bigger Memories",
      rules: [
        "Infants & Children below 5 Years: Complimentary stay without extra bed, inclusive of breakfast.",
        "Children 5–12 Years: ₹800 per child (without extra mattress) | ₹1,000 per child (with extra mattress), per day, plus taxes, inclusive of breakfast.",
        "Guests 12 Years & Above: Charged ₹1,250 per person, per day, plus taxes, with or without extra mattress, inclusive of breakfast."
      ]
    },
    {
      title: "Check-In Guidelines",
      subtitle: "A Warm Welcome Always",
      rules: [
        "Valid Photo ID: All Indian guests are required to present valid government-issued photo ID at check-in.",
        "Foreign Nationals / NRIs: A valid Passport, Visa, and Restricted Area Permit (RAP) must be presented at check-in where applicable."
      ]
    },
    {
      title: "Booking Terms & Conditions",
      subtitle: "Plan Today, Explore Tomorrow",
      rules: [
        "Provisional Blocking: Rooms will be blocked provisionally until the specified cut-off date.",
        "Advance Payment: Bookings will be confirmed only upon receipt of 50% advance payment.",
        "Balance Payment: The remaining balance must be paid on or before the date of check-in.",
        "Rate Changes: Rates are subject to change without prior notice until booking confirmation.",
        "Government Taxes: Any increase in applicable government taxes or levies will be payable additionally.",
        "Bank Charges: Any bank charges or transaction fees for international transfers shall be borne by the customer."
      ]
    },
    {
      title: "Cancellation Policy",
      subtitle: "Plans May Change, Memories Stay",
      rules: [
        "0–7 Days Before Check-In: Cancellation made within 0 to 7 days will attract 100% cancellation charges (non-refundable).",
        "8 Days or More Before Check-In: Cancellations made 8 days or more prior to check-in will be processed without cancellation charges (applicable bank/transaction fees deducted).",
        "Ferry Tickets: No refund will be provided for Government Ferry or Private Ferry tickets once purchased, irrespective of the cancellation date."
      ]
    }
  ] as HotelPolicy[]
};
