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
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838926/golden-pebble/images/nearby_location/Nemo%20Beach_Nemo%20Reef_1.jpg",
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
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790841869/golden-pebble/images/activity/Banana___Sofa_Water_Rides.webp",
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
  },
  {
    id: "snorkeling",
    slug: "snorkeling",
    name: "Snorkelling",
    subtitle: "Guided Coral Reef Surface Snorkeling Experience",
    category: "Water Sport",
    price: "₹1,000 / person",
    duration: "30–45 mins snorkeling session",
    location: "Elephant Beach & Nemo Reef, Havelock",
    suitability: "Beginners, Non-swimmers & Families welcome",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838825/golden-pebble/images/activity/Snorkeling.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839082/golden-pebble/videos/scuba-diving.mp4",
    shortDescription: "Discover colourful coral reefs and tropical marine life with guided surface snorkeling in Havelock Island.",
    description: "Explore Havelock's rich marine life from the ocean surface. Guided by certified instructors, participants wear sanitized masks, snorkels, and high-buoyancy life jackets to observe vibrant coral gardens and colorful reef fish at Elephant Beach and Nemo Reef.",
    highlights: [
      "Guided shallow water coral reef snorkeling session",
      "100% suitable for beginners and non-swimmers with life jackets",
      "Sanitized snorkel mask and safety equipment provided",
      "Opportunity to spot reef fish, sea anemones, and living coral"
    ],
    includedEquipment: ["Snorkel Mask", "Dry-top Snorkel Pipe", "High-Buoyancy Life Jacket"],
    safetyInfo: "Life jacket mandatory for non-swimmers. Weather dependent."
  },
  {
    id: "kayaking",
    slug: "kayaking",
    name: "Kayaking",
    subtitle: "Guided Mangrove & Ocean Sea Kayaking Excursion",
    category: "Adventure",
    price: "₹2,500 / person",
    duration: "1.5–2 hours guided kayaking tour",
    location: "Havelock Island Mangrove Backwaters",
    suitability: "Adventure Enthusiasts & Nature Lovers",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Mangrove%20Sea%20Kayaking.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839057/golden-pebble/videos/jet-ski.mp4",
    shortDescription: "Paddle through serene mangrove backwaters and calm ocean waters on a guided sea kayaking excursion in Havelock.",
    description: "Experience the peaceful natural beauty of Havelock Island's mangrove ecosystems and coastal lagoons. Guided by certified sea kayakers, explore tranquil waters, observe indigenous birds, and navigate scenic island channels.",
    highlights: [
      "Guided mangrove backwater and lagoon sea kayaking trip",
      "Stable single and tandem ocean kayak craft",
      "Safety briefing and lightweight paddles provided",
      "Ideal for nature photography and bird watching"
    ],
    includedEquipment: ["Ocean Kayak Vessel", "Lightweight Ergonomic Paddle", "Certified Life Vest"],
    safetyInfo: "Instruction provided prior to launch. Suitable for beginners with basic fitness."
  },
  {
    id: "sea-kayaking",
    slug: "sea-kayaking",
    name: "Sea Kayaking",
    subtitle: "Guided Mangrove & Ocean Sea Kayaking Excursion",
    category: "Adventure",
    price: "₹2,500 / person",
    duration: "1.5–2 hours guided kayaking tour",
    location: "Havelock Island Mangrove Backwaters",
    suitability: "Adventure Enthusiasts & Nature Lovers",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Mangrove%20Sea%20Kayaking.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839057/golden-pebble/videos/jet-ski.mp4",
    shortDescription: "Paddle through serene mangrove backwaters and calm ocean waters on a guided sea kayaking excursion in Havelock.",
    description: "Experience the peaceful natural beauty of Havelock Island's mangrove ecosystems and coastal lagoons. Guided by certified sea kayakers, explore tranquil waters, observe indigenous birds, and navigate scenic island channels.",
    highlights: [
      "Guided mangrove backwater and lagoon sea kayaking trip",
      "Stable single and tandem ocean kayak craft",
      "Safety briefing and lightweight paddles provided",
      "Ideal for nature photography and bird watching"
    ],
    includedEquipment: ["Ocean Kayak Vessel", "Lightweight Ergonomic Paddle", "Certified Life Vest"],
    safetyInfo: "Instruction provided prior to launch. Suitable for beginners with basic fitness."
  },
  {
    id: "snorkelling-alias",
    slug: "snorkelling",
    name: "Snorkelling",
    subtitle: "Guided Coral Reef Surface Snorkeling Experience",
    category: "Water Sport",
    price: "₹1,000 / person",
    duration: "30–45 mins snorkeling session",
    location: "Elephant Beach & Nemo Reef, Havelock",
    suitability: "Beginners, Non-swimmers & Families welcome",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838825/golden-pebble/images/activity/Snorkeling.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839082/golden-pebble/videos/scuba-diving.mp4",
    shortDescription: "Discover colourful coral reefs and tropical marine life with guided surface snorkeling in Havelock Island.",
    description: "Explore Havelock's rich marine life from the ocean surface. Guided by certified instructors, participants wear sanitized masks, snorkels, and high-buoyancy life jackets to observe vibrant coral gardens and colorful reef fish at Elephant Beach and Nemo Reef.",
    highlights: [
      "Guided shallow water coral reef snorkeling session",
      "100% suitable for beginners and non-swimmers with life jackets",
      "Sanitized snorkel mask and safety equipment provided",
      "Opportunity to spot reef fish, sea anemones, and living coral"
    ],
    includedEquipment: ["Snorkel Mask", "Dry-top Snorkel Pipe", "High-Buoyancy Life Jacket"],
    safetyInfo: "Life jacket mandatory for non-swimmers. Weather dependent."
  },
  {
    id: "glass-bottom-alias",
    slug: "glass-bottom",
    name: "Glass Bottom Boat Ride",
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
    id: "semi-sub-marine",
    slug: "semi-sub-marine",
    name: "Semi Sub Marine",
    subtitle: "Underwater Reef & Marine Exploration Boat Cruise",
    category: "Leisure",
    price: "₹1,800–₹2,500 / person",
    duration: "45–60 mins underwater viewing trip",
    location: "Port Blair & Havelock Island",
    suitability: "Families, Kids, Seniors & Non-swimmers",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838824/golden-pebble/images/activity/Semi%20Submarine.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    shortDescription: "Explore coral reefs and underwater marine life through large air-conditioned glass windows beneath ocean surface level.",
    description: "Experience the underwater world without getting wet. Semi Submarine cruises feature an air-conditioned lower ocean deck with large glass observation windows submerged below the sea surface to view living coral reefs and fish in Port Blair and Havelock Island.",
    highlights: [
      "Submerged air-conditioned underwater observation deck",
      "Large panoramic glass viewing windows for clear marine view",
      "100% dry experience suitable for toddlers and senior citizens",
      "Guided coral reef commentary by onboard marine guide"
    ],
    includedEquipment: ["Submerged Glass Observation Deck Vessel", "Air Conditioned Seating", "Life Vests"],
    safetyInfo: "Calm water cruise suitable for all age groups."
  },
  {
    id: "semi-submarine-alias",
    slug: "semi-submarine",
    name: "Semi Submarine",
    subtitle: "Underwater Reef & Marine Exploration Boat Cruise",
    category: "Leisure",
    price: "₹1,800–₹2,500 / person",
    duration: "45–60 mins underwater viewing trip",
    location: "Port Blair & Havelock Island",
    suitability: "Families, Kids, Seniors & Non-swimmers",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838824/golden-pebble/images/activity/Semi%20Submarine.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    shortDescription: "Explore coral reefs and underwater marine life through large air-conditioned glass windows beneath ocean surface level.",
    description: "Experience the underwater world without getting wet. Semi Submarine cruises feature an air-conditioned lower ocean deck with large glass observation windows submerged below the sea surface to view living coral reefs and fish in Port Blair and Havelock Island.",
    highlights: [
      "Submerged air-conditioned underwater observation deck",
      "Large panoramic glass viewing windows for clear marine view",
      "100% dry experience suitable for toddlers and senior citizens",
      "Guided coral reef commentary by onboard marine guide"
    ],
    includedEquipment: ["Submerged Glass Observation Deck Vessel", "Air Conditioned Seating", "Life Vests"],
    safetyInfo: "Calm water cruise suitable for all age groups."
  },
  {
    id: "dinner-cruise",
    slug: "dinner-cruise",
    name: "Dinner Cruise",
    subtitle: "Night Harbour Cruise with Live Music & Island Buffet",
    category: "Leisure",
    price: "₹3,500–₹4,500 / person",
    duration: "2–3 hours evening harbour cruise",
    location: "Port Blair Harbour",
    suitability: "Couples, Honeymooners & Families",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838821/golden-pebble/images/activity/Night%20Harbour%20Dinner%20Cruise.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839034/golden-pebble/videos/dinner-cruise.mp4",
    shortDescription: "Enjoy a romantic night harbour cruise in Port Blair featuring live music entertainment and a lavish island dinner buffet.",
    description: "Savor a memorable evening cruising Port Blair harbor under moonlight. The Night Harbour Dinner Cruise includes live acoustic entertainment, dance floor deck, welcome drinks, and a delicious multi-course buffet dinner.",
    highlights: [
      "Scenic night harbour cruise around Port Blair coast",
      "Live acoustic music performance and dance floor",
      "Multi-course buffet dinner with veg and non-veg options",
      "Open upper deck for night sea breeze and city skyline views"
    ],
    includedEquipment: ["Catamaran Cruise Vessel Deck", "Buffet Dining Service", "Safety Vests"],
    safetyInfo: "Safety orientation on embarkation. Pre-booking required."
  },
  {
    id: "sea-kart",
    slug: "sea-kart",
    name: "Sea Kart",
    subtitle: "Self-Drive Ocean Speed Watercraft Adventure",
    category: "Adventure",
    price: "₹3,500–₹4,500 / person",
    duration: "20–30 mins self-drive ocean session",
    location: "Port Blair",
    suitability: "Thrill Seekers, Couples & Friends",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Jet%20Ski%20Ride.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839091/golden-pebble/videos/sea-kart.mp4",
    shortDescription: "Drive your own high-speed inflatable ocean watercraft guided by a licensed escort boat.",
    description: "Sea Kart is an unsinkable high-speed ocean craft that you drive yourself! Cruising coastal waters off Port Blair under the escort of a safety vessel, experience steering through sea waves with push-button throttle controls.",
    highlights: [
      "Self-drive high speed ocean kart experience",
      "Unsinkable marine hull design with easy paddle throttle",
      "Escorted by professional instructor safety speed boat",
      "Complimentary action photo and video recording"
    ],
    includedEquipment: ["Sea Kart Watercraft", "Impact Life Jacket", "Safety Helmet"],
    safetyInfo: "Driver must be 18+ with valid photo ID. Briefing provided."
  }
];

// COMBINED LIST FOR COMPATIBILITY
export const ACTIVITIES: Activity[] = VERIFIED_WATER_ADVENTURES;
