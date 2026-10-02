export interface Activity {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "Water Sport" | "Nature" | "Leisure" | "Adventure";
  price?: string;
  duration?: string;
  location?: string;
  suitability: string;
  image: string;
  video?: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  includedEquipment: string[];
  safetyInfo: string;
}

// 8 VERIFIED OPTIONAL WATER ADVENTURES WITH APPROVED RATES
export const VERIFIED_WATER_ADVENTURES: Activity[] = [
  {
    id: "scuba-diving",
    slug: "scuba-diving",
    name: "Scuba Diving",
    subtitle: "30 Mins Underwater Guided Coral Reef Dive",
    category: "Water Sport",
    price: "₹3,500 / person",
    duration: "30 mins underwater experience",
    location: "Port Blair & Havelock",
    suitability: "Beginners & Non-swimmers welcome",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839082/golden-pebble/videos/scuba-diving.mp4",
    shortDescription: "Experience a guided underwater activity in the Andaman Islands, with a listed 30-minute underwater experience.",
    description: "Discover Scuba Diving provides an introduction to the underwater environment under direct guide supervision. Swim alongside marine life and coral formations at designated dive centers in Havelock Island and Port Blair.",
    highlights: [
      "Guided 1-on-1 underwater dive experience with certified instructor",
      "Complimentary digital underwater photos & video clips",
      "Full safety briefing and underwater gear provided",
      "Suitable for beginners and first-time divers"
    ],
    includedEquipment: ["Wetsuit", "Mask & Snorkel", "BCD Vest", "Regulator", "Fins"],
    safetyInfo: "Medical questionnaire required before diving. Flying restricted for 18 hours after dive."
  },
  {
    id: "boat-diving",
    slug: "boat-diving",
    name: "Boat Diving",
    subtitle: "Deep Water Boat Launch Dive Experience",
    category: "Water Sport",
    price: "₹5,500 / person",
    duration: "30 mins underwater experience",
    location: "Port Blair & Havelock",
    suitability: "Adventure Enthusiasts & Divers",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839018/golden-pebble/videos/boat-diving.mp4",
    shortDescription: "Explore deeper reef sites launched directly from a dive boat, with a listed 30-minute underwater experience.",
    description: "Boat Diving takes participants directly to offshore reef locations via dive boat for an immersive underwater dive. Guided by certified dive team members in Port Blair and Havelock Island.",
    highlights: [
      "Offshore boat ride to deeper coral reef dive locations",
      "Direct water entry from dive boat platform",
      "Guided underwater exploration with dive master",
      "Digital photo and video recording included"
    ],
    includedEquipment: ["Scuba Suit", "Mask", "BCD Vest", "Regulator", "Fins"],
    safetyInfo: "Pre-dive safety briefing mandatory. Medical screening required."
  },
  {
    id: "sea-walk",
    slug: "sea-walk",
    name: "Sea Walk",
    subtitle: "Underwater Seabed Walk with Air-Supplied Helmet",
    category: "Water Sport",
    price: "₹3,500 / person",
    duration: "20–30 mins underwater experience",
    location: "Port Blair & Havelock",
    suitability: "Non-swimmers & All Families",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838823/golden-pebble/images/activity/sea_walk_image.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839099/golden-pebble/videos/sea-walk.mp4",
    shortDescription: "Explore the underwater environment through a sea-walk experience with a listed 20–30 minute duration.",
    description: "Sea Walk allows participants to walk naturally on the sandy ocean floor while wearing a specialized transparent helmet supplied with continuous surface air. Ideal for non-swimmers and guests who wear glasses.",
    highlights: [
      "No swimming or scuba skills required",
      "Breathe normally inside air-supplied helmet",
      "Guided by certified sea-walk safety team",
      "Includes underwater photo and video capture"
    ],
    includedEquipment: ["Fresh Air Sea Walk Helmet", "Safety Harness", "Neoprene Footwear"],
    safetyInfo: "Suitable for non-swimmers and guests wearing prescription glasses."
  },
  {
    id: "jet-ski",
    slug: "jet-ski",
    name: "Jet Ski",
    subtitle: "High-Speed Ocean Watercraft Coastal Ride",
    category: "Water Sport",
    price: "₹650–₹950 / person",
    location: "Port Blair & Havelock",
    suitability: "All Guests & Thrill Seekers",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Jet%20Ski%20Ride.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839057/golden-pebble/videos/jet-ski.mp4",
    shortDescription: "Enjoy a high-speed personal watercraft ride across coastal waters with an instructor.",
    description: "Feel the rush of ocean wave cruising on a personal watercraft. Conducted at designated water sports complexes in Port Blair and Havelock Island with safety instructor escort.",
    highlights: [
      "Fast-paced wave riding across coastal waters",
      "Accompanied by professional watercraft instructor",
      "High-impact safety life jackets provided",
      "Available at designated activity centers"
    ],
    includedEquipment: ["Personal Watercraft", "Impact Life Jacket", "Safety Key Strap"],
    safetyInfo: "Riders must wear life jackets and adhere to designated speed zones."
  },
  {
    id: "banana-ride",
    slug: "banana-ride",
    name: "Banana Ride",
    subtitle: "Group Inflatable Towable Tube Ocean Ride",
    category: "Water Sport",
    price: "₹650–₹850 / person",
    location: "Havelock",
    suitability: "Groups & Families",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790841869/golden-pebble/images/activity/Banana___Sofa_Water_Rides.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790838978/golden-pebble/videos/banana-ride.mp4",
    shortDescription: "Hold on tight as a speed boat pulls a multi-passenger inflatable banana tube across ocean waves.",
    description: "A fun group water activity where participants sit on an inflatable banana-shaped tube towed by a powered speed boat across coastal waters in Havelock Island.",
    highlights: [
      "Fun group activity for up to 6 participants",
      "Exciting splash turns and wave bounces",
      "Towed by experienced speed boat operator",
      "Mandatory high-buoyancy life jackets provided"
    ],
    includedEquipment: ["Multi-Passenger Banana Tube", "Impact Life Jacket"],
    safetyInfo: "Life jackets mandatory for all participants. Non-swimmers welcome."
  },
  {
    id: "glass-bottom",
    slug: "glass-bottom-ride",
    name: "Glass Bottom Ride",
    subtitle: "Shallow Reef Viewing Through Transparent Boat Hull",
    category: "Leisure",
    price: "₹750–₹1,000 / person",
    location: "Port Blair & Havelock",
    suitability: "Kids, Families & Seniors",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838819/golden-pebble/images/activity/Glass%20Bottom%20Boat.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    shortDescription: "Observe shallow coral formations through transparent glass panels built into the boat hull.",
    description: "Enjoy a comfortable boat ride over shallow coral beds. Transparent glass floor panels allow passengers of all ages to observe marine life beneath the water surface without getting wet.",
    highlights: [
      "100% dry coral viewing experience",
      "Clear observation of shallow coral gardens",
      "Suitable for toddlers, seniors, and non-swimmers",
      "Gentle boat cruise guided by local boat crew"
    ],
    includedEquipment: ["Glass Bottom Panel Vessel", "Life Jackets"],
    safetyInfo: "Calm water boat cruise suitable for all age groups."
  },
  {
    id: "sofa-ride",
    slug: "sofa-ride",
    name: "Sofa Ride",
    subtitle: "Inflatable Seated Towable Ocean Float Ride",
    category: "Water Sport",
    price: "₹650–₹850 / person",
    location: "Havelock",
    suitability: "Couples, Friends & Families",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839118/golden-pebble/videos/sofa-ride.mp4",
    shortDescription: "Sit back on an inflatable sofa float towed across tropical ocean waves by a speed boat.",
    description: "A comfortable yet exhilarating inflatable towable ride where participants sit upright on a sofa-shaped float pulled by a powered speed boat off Havelock Island.",
    highlights: [
      "Seated group float ride for 2 to 4 guests",
      "Balanced and splash-filled wave turns",
      "Guided by certified boat captain",
      "High-buoyancy life vests provided"
    ],
    includedEquipment: ["Inflatable Sofa Float", "Impact Life Jacket"],
    safetyInfo: "Life jacket mandatory. Suitable for non-swimmers."
  },
  {
    id: "parasailing",
    slug: "parasailing",
    name: "Parasailing",
    subtitle: "Aerial Canopy Flight Towed by Winch Boat",
    category: "Adventure",
    price: "₹3,500 / person",
    location: "Port Blair & Havelock",
    suitability: "Couples & Thrill Seekers",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838822/golden-pebble/images/activity/Parasailing.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790838978/golden-pebble/videos/banana-ride.mp4",
    shortDescription: "Experience high-altitude aerial flight towed by a specialized winch boat over coastal waters.",
    description: "Soar above coastal waters wearing a marine safety harness connected to a parachute canopy. Takeoffs and landings take place directly on the winch boat deck under licensed captain supervision.",
    highlights: [
      "Aerial view of coastal shorelines and coral waters",
      "Safe takeoff and landing directly from winch boat deck",
      "Single and double tandem harness options available",
      "Certified marine safety gear provided"
    ],
    includedEquipment: ["Parachute Canopy", "Winch Boat Harness", "Certified Life Vest"],
    safetyInfo: "Subject to favorable weather and wind conditions."
  }
];

// COMBINED LIST FOR COMPATIBILITY
export const ACTIVITIES: Activity[] = VERIFIED_WATER_ADVENTURES;
