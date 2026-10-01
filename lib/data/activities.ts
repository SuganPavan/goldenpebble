export interface Activity {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "Water Sport" | "Nature" | "Leisure" | "Adventure";
  duration: string;
  suitability: string;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  includedEquipment: string[];
  safetyInfo: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: "scuba-diving",
    slug: "scuba-diving",
    name: "Scuba Diving",
    subtitle: "Explore Vibrant Coral Reefs at Nemo Reef & Light House",
    category: "Water Sport",
    duration: "2 - 3 Hours",
    suitability: "Beginners & Non-swimmers welcome",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Dive into crystal clear waters with a certified instructor to discover clownfish, sea turtles, and brain corals.",
    description: "Havelock Island is internationally acclaimed as one of Asia's finest scuba diving destinations. No prior swimming or diving experience is required for Discover Scuba Diving (DSD). After a brief pool/shallow water training session, dive up to 12 meters alongside PADI/SSI certified dive masters at Nemo Reef.",
    highlights: [
      "Guided 1-on-1 underwater dive experience with PADI certified dive master",
      "Complimentary HD underwater photos & video recording included",
      "Close encounters with Nemo clownfish, stingrays, and sea anemones",
      "Full safety briefing and complete scuba gear provided"
    ],
    includedEquipment: ["Wetsuit", "Mask & Snorkel", "BCA Vest", "Regulator", "Fins"],
    safetyInfo: "Medical questionnaire required before diving. Flying or high altitude travel restricted for 18 hours after dive."
  },
  {
    id: "sea-walk",
    slug: "sea-walk",
    name: "Underwater Sea Walk",
    subtitle: "Seabed Walk with Continuous Fresh Air Helmet",
    category: "Water Sport",
    duration: "20 - 30 Mins Underwater",
    suitability: "Non-swimmers & All Families",
    image: "/images/activity/sea_walk_image.webp",
    shortDescription: "Walk naturally on the sandy sea floor wearing a transparent helmet supplied with continuous fresh air.",
    description: "Experience walking on the seabed without swimming skills or scuba gear. Wearing a specialized helmet connected to a surface air system, you can breathe normally while feeding tropical fish and observing coral formations up close.",
    highlights: [
      "No swimming or diving skills required",
      "Breathe normally inside continuous air-supplied helmet",
      "Fully guided by certified sea walk safety divers",
      "Includes underwater photography and video capture"
    ],
    includedEquipment: ["Fresh Air Sea Walk Helmet", "Safety Harness", "Neoprene Footwear"],
    safetyInfo: "Suitable for non-swimmers and guests wearing glasses/contact lenses."
  },
  {
    id: "snorkeling",
    slug: "snorkeling",
    name: "Snorkeling",
    subtitle: "Swim Alongside Marine Life in Shallow Reefs",
    category: "Water Sport",
    duration: "1 - 2 Hours",
    suitability: "All Age Groups & Families",
    image: "/images/activity/Snorkeling.jpg",
    shortDescription: "Float effortlessly above shallow coral gardens at Elephant Beach and Govind Nagar.",
    description: "Snorkeling is the easiest and most accessible way to experience Andaman's rich marine biodiversity. Equipped with a mask, snorkel tube, and life jacket, float safely over colorful shallow reefs accompanied by experienced local guides.",
    highlights: [
      "Ideal for non-swimmers and children using life jackets",
      "Shallow reef entry at Elephant Beach & Nemo Reef",
      "Guided group snorkeling with safety assistance",
      "Vibrant hard and soft coral formations"
    ],
    includedEquipment: ["Snorkel Mask", "Breathing Tube", "Life Jacket", "Fins (optional)"],
    safetyInfo: "Life jackets are mandatory for all non-swimmers."
  },
  {
    id: "sea-kayaking",
    slug: "sea-kayaking",
    name: "Mangrove Sea Kayaking",
    subtitle: "Paddle Through Serene Coastal Waterways",
    category: "Adventure",
    duration: "2 Hours",
    suitability: "Nature Enthusiasts & Couples",
    image: "/images/activity/Mangrove Sea Kayaking.jpeg",
    shortDescription: "Glide peacefully through dense mangrove channels or open turquoise sea during morning or night tours.",
    description: "Experience the tranquil, untouched ecosystem of Havelock's dense mangrove creeks. Guided sea kayaking allows you to paddle quietly through calm waterways while learning about coastal flora, bird species, and marine biodiversity. Night bioluminescence kayaking is also available during new moon phases.",
    highlights: [
      "Peaceful paddling through green mangrove tunnels",
      "Bioluminescence night kayaking options on select moonless nights",
      "Tandem (2-seater) and single kayak options",
      "Experienced kayaking guide leading the group"
    ],
    includedEquipment: ["Fiberglass Kayak", "Paddles", "Dry Bag", "Life Vest"],
    safetyInfo: "Conducted only in calm, sheltered inland mangrove waters."
  },
  {
    id: "parasailing",
    slug: "parasailing",
    name: "Parasailing",
    subtitle: "High-Altitude Aerial Island Bay Flight",
    category: "Adventure",
    duration: "10 - 15 Mins Flight",
    suitability: "Couples & Thrill Seekers",
    image: "/images/activity/Parasailing.jpg",
    shortDescription: "Soar 300 feet above turquoise waters towed by a high-powered winch boat.",
    description: "Combine flying and sailing for breathtaking panoramic views of Andaman's coastline. Take off and land directly on the winch boat deck wearing certified marine safety harnesses under the guidance of licensed boat captains.",
    highlights: [
      "300ft aerial flight with bird's-eye views of coral reefs",
      "Safe launch and landing directly from the boat winch deck",
      "Double and tandem harness options available for couples",
      "Full safety briefing and life vest included"
    ],
    includedEquipment: ["Parachute Canopy", "Winch Boat Harness", "Certified Life Vest"],
    safetyInfo: "Subject to favorable weather and wind conditions."
  },
  {
    id: "jet-ski",
    slug: "jet-ski",
    name: "Jet Ski Ride",
    subtitle: "High-Speed Ocean Watercraft Wave Ride",
    category: "Water Sport",
    duration: "10 Mins Ride",
    suitability: "All Guests & Adventure Lovers",
    image: "/images/activity/Jet Ski Ride.webp",
    shortDescription: "Speed across ocean waves on a powerful jet ski accompanied by certified safety instructors.",
    description: "Feel the adrenaline rush of riding ocean waves on modern Yamaha personal watercraft. Guided by expert jet ski instructors at Corbyn's Cove or Elephant Beach, enjoy fast-paced cruising across coastal waters.",
    highlights: [
      "High-speed watercraft riding on open ocean waves",
      "Accompanied by professional instructor for non-experienced riders",
      "Available at Corbyn's Cove & Elephant Beach",
      "Impact life jackets provided"
    ],
    includedEquipment: ["Yamaha Watercraft", "Impact Life Jacket", "Safety Lanyard"],
    safetyInfo: "Riders must follow instructor speed safety limits."
  },
  {
    id: "semi-sub-marine",
    slug: "semi-sub-marine",
    name: "Semi Submarine",
    subtitle: "Air-Conditioned Coral Reef Window Viewing",
    category: "Leisure",
    duration: "45 Mins Cruise",
    suitability: "Families, Children & Seniors",
    image: "/images/activity/Semi Submarine.jpg",
    shortDescription: "Observe deep coral formations and sea creatures from an air-conditioned glass underwater cabin.",
    description: "Explore underwater marine life without getting wet. Descend into the vessel's submerged glass cabin equipped with large observation windows angled at 45 degrees for clear views of deep coral gardens and fish schools.",
    highlights: [
      "100% dry underwater observation experience",
      "Air-conditioned cabin seating with large glass viewing windows",
      "Perfect for seniors, toddlers, and non-swimmers",
      "Guided coral explanation during cruise"
    ],
    includedEquipment: ["Air-Conditioned Submerged Cabin Seating"],
    safetyInfo: "Completely safe enclosed cabin cruise with certified marine crew."
  },
  {
    id: "glass-bottom",
    slug: "glass-bottom",
    name: "Glass Bottom Boat",
    subtitle: "Shallow Water Coral Reef Viewing Boat",
    category: "Leisure",
    duration: "15 - 20 Mins",
    suitability: "Kids & Senior Guests",
    image: "/images/activity/Glass Bottom Boat.webp",
    shortDescription: "Observe coral reefs through transparent glass panels built into the boat hull.",
    description: "Enjoy a calm and comfortable boat cruise over shallow coral beds. Transparent glass floor panels allow passengers of all ages to look directly down into vibrant coral formations and marine life.",
    highlights: [
      "Clear view of shallow coral reefs beneath the boat",
      "Shallow water beach ride at Elephant Beach & North Bay",
      "Gentle boat cruise suitable for all age groups",
      "Attentive boat crew guidance"
    ],
    includedEquipment: ["Glass Panel Viewing Boat", "Life Jackets"],
    safetyInfo: "Calm water ride suitable for all age groups."
  },
  {
    id: "banana-sofa-rides",
    slug: "banana-sofa-rides",
    name: "Banana & Sofa Water Rides",
    subtitle: "Group Inflatable Towable Water Rides",
    category: "Water Sport",
    duration: "10 - 15 Mins",
    suitability: "Groups & Families",
    image: "/images/activity/Banana & Sofa Water Rides.webp",
    shortDescription: "Enjoy fun ocean towable rides pulling groups across turquoise waves.",
    description: "Hold on tight as a speed boat pulls inflatable banana tubes or sofa floats across tropical waves. Perfect for family groups and friends looking for shared laughter and splash-filled fun.",
    highlights: [
      "Fun group activity for up to 6 guests per tube",
      "Exciting wave turns and splash bounces",
      "Towed by experienced speed boat captains",
      "High-buoyancy impact life vests included"
    ],
    includedEquipment: ["Inflatable Towable Tube", "Impact Life Jacket"],
    safetyInfo: "Life jacket mandatory. Non-swimmers welcome."
  },
  {
    id: "dinner-cruise",
    slug: "dinner-cruise",
    name: "Night Harbour Dinner Cruise",
    subtitle: "Catamaran Cruise with Live Music & Buffet",
    category: "Leisure",
    duration: "2 Hours Evening Cruise",
    suitability: "Couples & Families",
    image: "/images/activity/Night Harbour Dinner Cruise.jpeg",
    shortDescription: "Evening catamaran cruise around Port Blair harbour with live acoustic music and dinner buffet.",
    description: "Set sail across calm evening harbor waters aboard a luxury catamaran. Enjoy live acoustic musical performances, a rich buffet spread of island delicacies, and glowing views of Port Blair coastline.",
    highlights: [
      "2-hour scenic catamaran cruise around Port Blair harbour",
      "Live acoustic musical performances on open upper deck",
      "Comprehensive buffet dinner spread (Veg & Non-Veg)",
      "Illuminated city and island coastline views"
    ],
    includedEquipment: ["Catamaran Seating", "Buffet Dining", "Upper Deck Access"],
    safetyInfo: "Equipped with certified marine safety apparatus and life rafts."
  },
  {
    id: "beach-walks-sunsets",
    slug: "beach-walks-sunsets",
    name: "Beach Walks & Sunset Watching",
    subtitle: "Unwind at Radhanagar & Kalopathar Beaches",
    category: "Leisure",
    duration: "Flexible",
    suitability: "All Guests",
    image: "/images/activity/Beach Walks & Sunset Watching.webp",
    shortDescription: "Relax on powdery white sands, sip fresh coconut water, and watch golden island sunsets.",
    description: "Sometimes the finest island experience is simply relaxing on white coral sand under the shade of coastal trees. Enjoy leisurely morning strolls at Kalopathar Beach or evening sunset gatherings at Radhanagar Beach with local fruit stalls and quiet tropical breezes.",
    highlights: [
      "Completely complimentary island experience",
      "Golden hour photography opportunities",
      "Clean, uncrowded natural shorelines",
      "Refreshing fresh coconut water stalls"
    ],
    includedEquipment: ["N/A"],
    safetyInfo: "Swim only in designated lifeguard-monitored beach areas."
  }
];
