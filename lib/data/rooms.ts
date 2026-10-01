export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  sizeSqFt: number;
  maxOccupancy: string;
  bedType: string;
  view: string;
  image: string;
  gallery: string[];
  description: string;
  shortDescription: string;
  seasonRate: {
    rackRate: string;
    netPayable: string;
    validity: string;
    inclusions: string;
  };
  peakSeasonRate: {
    rackRate: string;
    netPayable: string;
    validity: string;
    inclusions: string;
  };
  amenities: string[];
  features: string[];
}

export const ROOMS: Room[] = [
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    name: "Deluxe Room",
    subtitle: "Comfortable & Tranquil Island Accommodations",
    sizeSqFt: 220,
    maxOccupancy: "3 Adults + 1 Child (<12 yrs)",
    bedType: "King Bed or Twin Beds",
    view: "Tropical Garden View",
    image: "/images/rooms/golden-pebble-deluxe-room-main.jpg",
    gallery: [
      "/images/rooms/golden-pebble-deluxe-room-main.jpg",
      "/images/rooms/golden-pebble-deluxe-room-swan.jpg",
      "/images/rooms/golden-pebble-deluxe-room-chairs.jpg",
      "/images/rooms/golden-pebble-deluxe-room-side.jpg",
      "/images/rooms/golden-pebble-deluxe-room-bathroom.jpg"
    ],
    description: "The Deluxe Room at Hotel Golden Pebble offers a perfectly balanced 220 sq. ft. sanctuary designed for peace and relaxation after a day exploring Havelock Island's world-famous beaches. Featuring warm wooden wall textures, soft mood lighting, premium bedding, split air-conditioning, and modern ensuite bathroom fittings, it is ideal for couples, friends, and small families.",
    shortDescription: "Spacious 220 sq ft room featuring warm timber acoustics, air conditioning, and plush bedding.",
    seasonRate: {
      rackRate: "₹5,774",
      netPayable: "₹5,774",
      validity: "Valid from 01st Nov 2026 to 31st Mar 2027 (Excl. 15 Dec – 10 Jan)",
      inclusions: "Rack Rate • 5% GST included"
    },
    peakSeasonRate: {
      rackRate: "₹5,774",
      netPayable: "₹5,774",
      validity: "Valid from 15th Dec 2026 to 10th Jan 2027",
      inclusions: "Rack Rate • 5% GST included"
    },
    amenities: [
      "Split Air Conditioning",
      "Complimentary Daily Breakfast",
      "Flat Screen LED TV",
      "High-Speed Wi-Fi",
      "Ensuite Bathroom with Hot & Cold Shower",
      "Daily Housekeeping",
      "Tea/Coffee Maker",
      "Intercom Facility",
      "Clean Linen & Fresh Towels",
      "Toiletries Kit"
    ],
    features: [
      "220 Sq Ft Space",
      "Garden View",
      "King / Twin Bedding",
      "Complimentary Breakfast"
    ]
  },
  {
    id: "deluxe-room-with-balcony",
    slug: "deluxe-room-with-balcony",
    name: "Deluxe Room with Balcony",
    subtitle: "Expanded Luxury with Private Island Breeze Balcony",
    sizeSqFt: 280,
    maxOccupancy: "3 Adults + 1 Child (<12 yrs)",
    bedType: "King Size Bed",
    view: "Garden & Canopy View",
    image: "/images/rooms/golden-pebble-balcony-room-main.jpg",
    gallery: [
      "/images/rooms/golden-pebble-balcony-room-main.jpg",
      "/images/rooms/golden-pebble-balcony-seating.jpg",
      "/images/rooms/golden-pebble-balcony-corridor.jpg",
      "/images/rooms/golden-pebble-balcony-room-interior.jpg",
      "/images/rooms/golden-pebble-balcony-bathroom.jpg"
    ],
    description: "Experience 280 sq. ft. of refined tropical comfort in our Deluxe Room with Balcony. Step out onto your private balcony to enjoy the fresh island morning air and vibrant green natural surroundings. Outfitted with rich timber cladding, generous seating, a King size plush mattress, and premium bath amenities, this room offers enhanced space for travelers seeking extra room to unwind.",
    shortDescription: "Expansive 280 sq ft sanctuary featuring a private balcony overlooking lush tropical greenery.",
    seasonRate: {
      rackRate: "₹6,824",
      netPayable: "₹6,824",
      validity: "Valid from 01st Nov 2026 to 31st Mar 2027 (Excl. 15 Dec – 10 Jan)",
      inclusions: "Rack Rate • 5% GST included"
    },
    peakSeasonRate: {
      rackRate: "₹6,824",
      netPayable: "₹6,824",
      validity: "Valid from 15th Dec 2026 to 10th Jan 2027",
      inclusions: "Rack Rate • 5% GST included"
    },
    amenities: [
      "Private Balcony with Seating",
      "Split Air Conditioning",
      "Complimentary Daily Breakfast",
      "Flat Screen LED TV",
      "High-Speed Wi-Fi",
      "Ensuite Bathroom with Hot & Cold Shower",
      "Daily Housekeeping",
      "Tea/Coffee Maker",
      "Intercom Facility",
      "Work Desk & Armchair",
      "Premium Toiletries"
    ],
    features: [
      "280 Sq Ft Space",
      "Private Balcony",
      "King Size Bed",
      "Garden Canopy View"
    ]
  }
];
