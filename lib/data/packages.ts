export interface PackageHighlight {
  category: string;
  name: string;
}

export interface PackageImportantInfo {
  title: string;
  detail: string;
}

export interface WaterAdventure {
  name: string;
  locations: string;
  image: string;
  video?: string;
  fullVideo?: string;
}

export interface HoneymoonExperience {
  name: string;
  description: string;
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  duration: string;
  nightSplit: string;
  nights: number;
  days: number;
  route: string;
  image: string;
  shortDescription: string;
  description: string;
  highlightsList: string[];
  visualHighlights?: PackageHighlight[];
  inclusions: string[];
  exclusions: string[];
  quickInfo: { label: string; value: string }[];
  routeSteps: string[];
  importantInfo: PackageImportantInfo[];
  waterAdventures: WaterAdventure[];
  honeymoonExperiences: HoneymoonExperience[];
  privateFerryInfo: string[];
  thingsToKnow: string[];
  termsAndConditions: { title: string; detail: string }[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities?: string[];
    overnight?: string;
  }[];
}

export const WATER_ADVENTURES: WaterAdventure[] = [
  { 
    name: "Scuba Diving", 
    locations: "Port Blair & Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838926/golden-pebble/images/nearby_location/Nemo%20Beach_Nemo%20Reef_1.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839082/golden-pebble/videos/scuba-diving.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839082/golden-pebble/videos/scuba-diving.mp4"
  },
  { 
    name: "Boat Diving", 
    locations: "Port Blair & Havelock Island",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839018/golden-pebble/videos/boat-diving.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839018/golden-pebble/videos/boat-diving.mp4"
  },
  { 
    name: "Sea Walk", 
    locations: "Port Blair & Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838823/golden-pebble/images/activity/sea_walk_image.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839099/golden-pebble/videos/sea-walk.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839099/golden-pebble/videos/sea-walk.mp4"
  },
  { 
    name: "Jet Ski", 
    locations: "Port Blair & Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Jet%20Ski%20Ride.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839057/golden-pebble/videos/jet-ski.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839057/golden-pebble/videos/jet-ski.mp4"
  },
  { 
    name: "Banana Ride", 
    locations: "Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790841869/golden-pebble/images/activity/Banana___Sofa_Water_Rides.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790838978/golden-pebble/videos/banana-ride.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790838978/golden-pebble/videos/banana-ride.mp4"
  },
  { 
    name: "Glass Bottom Ride", 
    locations: "Port Blair & Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838819/golden-pebble/images/activity/Glass%20Bottom%20Boat.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4"
  },
  { 
    name: "Sofa Ride", 
    locations: "Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790841869/golden-pebble/images/activity/Banana___Sofa_Water_Rides.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839118/golden-pebble/videos/sofa-ride.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839118/golden-pebble/videos/sofa-ride.mp4"
  },
  { 
    name: "Parasailing", 
    locations: "Port Blair & Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838822/golden-pebble/images/activity/Parasailing.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839080/golden-pebble/videos/parasailing.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839080/golden-pebble/videos/parasailing.mp4"
  },
  { 
    name: "Sea Kart", 
    locations: "Port Blair",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838820/golden-pebble/images/activity/Jet%20Ski%20Ride.webp",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839091/golden-pebble/videos/sea-kart.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839091/golden-pebble/videos/sea-kart.mp4"
  },
  { 
    name: "Semi Sub Marine", 
    locations: "Port Blair & Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838824/golden-pebble/images/activity/Semi%20Submarine.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839042/golden-pebble/videos/glass-bottom-ride.mp4"
  },
  { 
    name: "Dinner Cruise", 
    locations: "Port Blair",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838821/golden-pebble/images/activity/Night%20Harbour%20Dinner%20Cruise.jpg",
    video: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839034/golden-pebble/videos/dinner-cruise.mp4",
    fullVideo: "https://res.cloudinary.com/dj3hvn4ja/video/upload/v1790839034/golden-pebble/videos/dinner-cruise.mp4"
  }
];

export const HONEYMOON_EXPERIENCES: HoneymoonExperience[] = [
  { 
    name: "Candle Light Dinner", 
    description: "A romantic beachfront candle-light dinner with customized menu setup under the stars." 
  },
  { 
    name: "Candle Light Dinner by the Pool", 
    description: "An intimate poolside candle-light dining experience with ambient music and fine dining service." 
  },
  { 
    name: "Flower Bed Decoration", 
    description: "Special floral bed decoration arranged in your room upon arrival for a memorable honeymoon stay." 
  }
];

export const PRIVATE_FERRY_INFO: string[] = [
  "Private A/C cruises (e.g., Nautika, Makruzz, Green Ocean, or similar high-speed catamarans) are normally used for inter-island transfers where available.",
  "Ferry operations and seat availability are subject to sea weather conditions, port authority schedules, and government clearance.",
  "If the private ferry service is unavailable due to technical reasons or weather advisories, guests will be transferred via government ferry services.",
  "Guests will be promptly informed by our island ground team if any ferry vessel or schedule adjustment occurs."
];

export const THINGS_TO_KNOW: string[] = [
  "Restricted Area Regulations: Andaman and Nicobar Islands are an ecologically sensitive restricted zone; guests must respect tribal and marine laws.",
  "Valid Photo Identification: Guests must carry original government-issued photo ID for hotel check-in and inter-island ferry ticketing.",
  "Accepted Photo IDs: Passport, Driving License, Voter ID, or Aadhaar Card as permitted by government authorities.",
  "ID Restrictions: PAN Card is NOT accepted as a valid photo identification by hotels or ferry entry points.",
  "Children Identification: Children must carry school-issued photo ID cards or original birth certificates and travel with parents/guardians.",
  "Airport Arrival Meeting: Representative meeting and airport transfer details will be provided prior to your arrival at Port Blair airport.",
  "Snorkeling & Water Trips: Guests taking water excursions should carry a towel, extra set of dry clothes, and mineral water.",
  "Recommended Clothing & Gear: Light cotton clothing, shorts, T-shirts, open footwear/sandals, cap, sunglasses, and sunscreen lotion.",
  "Arrival Day Breakfast: Breakfast on the arrival day is subject to hotel check-in timings and the individual hotel's applicable policy.",
  "Check-Out & Packed Breakfast: Early morning checkout requires prior notice; packed breakfast should be requested from reception on the previous evening for early ferry departures."
];

export const TERMS_AND_CONDITIONS: { title: string; detail: string }[] = [
  {
    title: "1. Rates & Pricing Variability",
    detail: "All package rates and taxes are subject to availability and seasonal adjustments. Final package cost is confirmed upon booking placement."
  },
  {
    title: "2. Room Allocation & Hotel Check-in",
    detail: "Standard hotel check-in time is generally 10:00 AM to 12:00 PM, and checkout is 08:00 AM to 09:00 AM. Early check-in or late checkout is subject to room availability."
  },
  {
    title: "3. Mandatory Photo Identification",
    detail: "All adult guests and children must present valid photo identification at check-in. Failure to produce valid ID may result in refusal of stay without refund."
  },
  {
    title: "4. Weather & Inter-Island Ferry Adjustments",
    detail: "Ferry sailings are contingent on maritime weather. In the event of rough sea conditions or vessel cancellations, alternative timing or government ferries will be arranged."
  },
  {
    title: "5. Maximum Room Occupancy & Extra Bed Policy",
    detail: "Standard room occupancy permits up to 2 adults and 1 child. Extra adult/child policy applies with extra mattress or rollaway bed as provided by the hotel."
  },
  {
    title: "6. Breakfast Conditions",
    detail: "Complimentary breakfast is served during fixed hotel restaurant hours. Packed breakfast for early morning transfers must be requested 12 hours in advance."
  },
  {
    title: "7. Sightseeing Closures & Missed Excursions",
    detail: "Cellular Jail, Ross Island, and museum sights are closed on Mondays and national holidays. Missed sightseeing due to weekly closures or flight delays will be substituted where possible."
  },
  {
    title: "8. Point-to-Point Vehicle Usage",
    detail: "Transport services are provided strictly on a point-to-point basis according to the fixed itinerary. Vehicles are not available for personal usage outside planned trips."
  },
  {
    title: "9. Water Sports & Optional Activities",
    detail: "All water activities (scuba diving, sea walk, jet ski, parasailing) are optional, non-inclusive, and subject to weather and medical fitness."
  },
  {
    title: "10. Force Majeure & Itinerary Modifications",
    detail: "Golden Pebble is not liable for itinerary changes resulting from natural disasters, severe weather, strikes, port closures, or government restrictions. Alternate arrangements will be prioritized."
  },
  {
    title: "11. Limitation of Refunds & Compensation",
    detail: "Unutilized services, missed ferry transfers, or unused hotel nights caused by flight delays or weather cancellations are non-refundable."
  },
  {
    title: "12. Legal Jurisdiction",
    detail: "All claims, disputes, or legal matters arising out of tour arrangements shall be subject exclusively to the courts of Port Blair, Andaman & Nicobar Islands."
  }
];

export const COMMON_IMPORTANT_INFO: PackageImportantInfo[] = [
  {
    title: "Inter-Island Ferry Transfers",
    detail: "Inter-island ferry transfers (Port Blair to Havelock, Havelock to Neil, Neil to Port Blair) are operated by private A/C cruises or government ferries subject to weather and availability."
  },
  {
    title: "Weather & Sightseeing Schedules",
    detail: "Island weather conditions may necessitate adjustments to beach visit order or boat excursion departure times for safety."
  },
  {
    title: "Optional Water Activities",
    detail: "Water sports such as scuba diving, sea walk, and jet skiing are optional activities available at additional cost on direct payment basis."
  },
  {
    title: "Hotel Check-In & Check-Out Policy",
    detail: "Check-in time is typically 11:00 AM – 12:00 PM and checkout is 08:30 AM – 09:00 AM. Early check-in or late checkout is subject to availability."
  },
  {
    title: "Identification Requirements",
    detail: "Guests must carry valid photo identification (Passport, Aadhaar, Driving License, or Voter ID). PAN card is not accepted."
  }
];

const COMMON_INCLUSIONS = [
  "Accommodation for 4 nights as per chosen itinerary",
  "Daily Breakfast at the hotel restaurant",
  "Air-conditioned vehicle transfers according to the itinerary",
  "Airport pickup and drop-off transfers at Port Blair airport",
  "Entry permits and tickets for specified sightseeing attractions",
  "Inter-island ferry transfers (Port Blair • Havelock • Neil Island)",
  "All sightseeing excursions as specified in the day-by-day program"
];

const COMMON_EXCLUSIONS = [
  "Lunch and Dinner",
  "Extra excursions or vehicle usage outside the planned itinerary",
  "Optional water sports (Scuba Diving, Sea Walk, Jet Ski, Parasailing, etc.)",
  "Room service, laundry, telephone charges, and personal expenses",
  "Airline or ship tickets to and from Port Blair",
  "Additional expenses resulting from weather delays, ferry/flight cancellations, or force majeure events"
];

export const PACKAGES: Package[] = [
  {
    id: "andaman-glimpse",
    slug: "andaman-glimpse",
    name: "Andaman Glimpse",
    duration: "3 Nights / 4 Days",
    nightSplit: "(1 N Port Blair – 2 N Havelock)",
    nights: 3,
    days: 4,
    route: "Port Blair • Havelock Island",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A compact 4-day island getaway combining historic Cellular Jail in Port Blair with Radhanagar Beach sunset, Elephant Beach coral waters, and Chidiyatapu.",
    description: "Discover the perfect 4-day Andaman getaway staying 1 night in Port Blair and 2 nights in Havelock Island. Includes Cellular Jail, luxury ferry transfers, Radhanagar Beach sunset, Elephant Beach marine coral excursion, and Chidiyatapu sunset point.",
    highlightsList: [
      "Cellular Jail Historic Visit (1 Hour Trip)",
      "Afternoon Ferry Port Blair to Havelock (1.5 – 2 Hours)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)",
      "TryTrabby Goody Bag & Complimentary Photoshoot at Radhanagar Beach"
    ],
    quickInfo: [
      { label: "Duration", value: "3 Nights / 4 Days" },
      { label: "Night Breakdown", value: "1 N PB • 2 N HL" },
      { label: "Islands Covered", value: "2 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail Historic Memorial" },
      { category: "Asia's Premier Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Adventure", name: "Elephant Beach Coral Reefs" },
      { category: "Sunset Vista", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Occupancy for 02 Nights with Breakfast at Havelock",
      "Accommodation 01 Double Occupancy for 01 Night with Breakfast at Port Blair",
      "All transfers as per itinerary in AC Car at Port Blair & Havelock Island",
      "Airport Pickup & Drop-off transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock by A/C Luxury Tourist Private Ferry",
      "All days sightseeing according to the itinerary",
      "TryTrabby Goody Bag & Complimentary Photoshoot at Radhanagar Beach"
    ],
    exclusions: [
      "Lunch & Dinner (unless optional CP, MAP, or AP meal plan selected)",
      "Any extra excursions apart from the suggested itinerary",
      "Water sports activities (Scuba Diving, Sea Walk, Jet Ski, Parasailing, Banana Ride, Glass Bottom)",
      "Room service, laundry, telephone charges, and personal expenses",
      "Vehicle at disposal outside itinerary",
      "Any Airline / Ship Tickets to Port Blair",
      "Expenses incurred due to bad weather, flight or ferry cancellation, strike or political unrest"
    ],
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Transfer to Havelock → Radhanagar Beach Sunset",
        description: "Arrive at Port Blair in the morning by flight where our representative greets you. Visit the famous Cellular Jail ('Kala Pani'), a colonial prison constructed by the British showcasing the struggle of freedom fighters (1-hour visit depending on flight timing). Later, depart for Havelock Island (Swaraj Dweep) by afternoon ferry (1.5–2 hours cruise). Our representative welcomes you at Havelock exit gate with a placard. Transfer to hotel, check in, and refresh. In the afternoon (03:00 PM – 06:00 PM), head to explore Radhanagar Beach (Beach #7), named Asia's Best Beach. Unwind on pristine white sands, enjoy emerald waters, and witness a breathtaking ocean sunset before returning to the hotel.",
        activities: ["Cellular Jail Visit (1 Hr Trip)", "Afternoon Ferry to Havelock (1.5–2 Hrs)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 1)"
      },
      {
        day: 2,
        title: "Havelock Island → Elephant Beach Marine Corals Excursion & Water Sports",
        description: "After a sumptuous breakfast, proceed to Elephant Beach via a scenic 30-minute boat ride (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Indulge in optional water sports such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, banana ride, and more (direct payment). Return to your resort for a relaxing evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out formalities, depart for Port Blair by morning ferry (10:30 AM – 12:30 PM). Our representative welcomes you at Port Blair harbor. After check-in at hotel and lunch, proceed to Chidiyatapu (30 km away from Port Blair), the premier sunset point in Andaman. Admire long trails of black rocks and boulders along the beach (03:00 PM – 06:00 PM). Return to Port Blair for local handicrafts shopping and overnight stay.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 3)"
      },
      {
        day: 4,
        title: "Departure from Andaman Islands",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport / Harbor, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "port-blair-heritage-escape",
    slug: "port-blair-heritage-escape",
    name: "Port Blair Heritage Escape",
    duration: "3 Nights / 4 Days",
    nightSplit: "(3 N Port Blair)",
    nights: 3,
    days: 4,
    route: "Port Blair • North Bay & Ross Island • Chidiyatapu",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A focused 4-day Port Blair itinerary covering Cellular Jail, Light & Sound show, North Bay Coral Reefs, Ross Island heritage, museums, and Chidiyatapu sunset.",
    description: "Experience the rich history, culture, and coastal natural beauty of Port Blair over 4 days. Includes 3 nights stay in Port Blair, Cellular Jail, Corbyn's Cove Beach, Sound & Light Show, North Bay Coral Island excursion, Ross Island nature walk, Port Blair city museums, and Chidiyatapu sunset point.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach Relaxation (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "North Bay Coral Island & Ross Island Excursion (10:30 AM – 03:30 PM)",
      "Port Blair Museums & Heritage Sightseeing",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)",
      "TryTrabby Goody Bag Included"
    ],
    quickInfo: [
      { label: "Duration", value: "3 Nights / 4 Days" },
      { label: "Night Breakdown", value: "3 N Port Blair" },
      { label: "Islands Covered", value: "3 Islands (PB, North Bay, Ross)" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "North Bay Island", "Ross Island", "Chidiyatapu", "Port Blair"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Beach", name: "Corbyn's Cove Beach" },
      { category: "Coral Reefs", name: "North Bay Coral Island" },
      { category: "Colonial Heritage", name: "Ross Island Nature Walk" },
      { category: "Cultural Museums", name: "Anthropological & Marine Museums" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Vista" }
    ],
    inclusions: [
      "Accommodation 01 Double Occupancy for 03 Nights with Breakfast at Port Blair",
      "All transfers as per itinerary in AC Car in Port Blair",
      "Airport Pickup & Drop-off transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "All days sightseeing according to the itinerary",
      "TryTrabby Goody Bag Included"
    ],
    exclusions: [
      "Lunch & Dinner (unless optional CP, MAP, or AP meal plan selected)",
      "Any extra excursions apart from the suggested itinerary",
      "Water sports activities (Scuba Diving, Sea Walk, Jet Ski, Parasailing, Glass Bottom)",
      "Room service, laundry, telephone charges, and Ross Island maintenance fee",
      "Vehicle at disposal outside itinerary",
      "Any Airline / Ship Tickets to Port Blair",
      "Expenses incurred due to bad weather, flight or ferry cancellation, strike or political unrest"
    ],
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrival at Port Blair in the morning/afternoon by flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British showcasing freedom struggle history (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, the famous beach in Port Blair ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), witness the captivating Sound and Light Show at Cellular Jail where freedom struggle sagas come alive. Return to hotel for overnight stay.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound and Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "North Bay Island & Ross Island Sightseeing Excursion",
        description: "Post breakfast, embark on a full day excursion (10:30 AM – 03:30 PM) to North Bay Island (Coral Island). Explore rich coral reefs and underwater marine life, with optional snorkeling, scuba diving, glass bottom rides, or sea walk. Later, proceed to Ross Island, the historic administrative headquarters of the British prior to independence. Take a pleasant nature walk amidst sylvan surroundings with deer, peacocks, and colonial ruins. Return to hotel for overnight stay in Port Blair.",
        activities: ["North Bay Coral Island (10:30 AM – 03:30 PM)", "Ross Island Colonial Ruins Walk", "Optional Water Sports"],
        overnight: "Port Blair (Night 2)"
      },
      {
        day: 3,
        title: "Local Sightseeing in Port Blair → Museums → Chidiyatapu Sunset & Shopping",
        description: "After breakfast, embark on a city tour of Port Blair covering Chatham Saw Mill (Asia's oldest and largest saw mill), Forest Museum, Samudrika Naval Marine Museum, Science Centre, and Anthropological Museum showcasing indigenous tribal artifacts and culture. After lunch, proceed to Chidiyatapu (30 km from Port Blair), renowned as the sunset point in Andaman. Admire long trails of black rocks and boulders along the beach (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Port Blair Museum Tour (Chatham, Samudrika, Anthropological)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 3)"
      },
      {
        day: 4,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport / Harbor, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "andaman-classic-escape",
    slug: "andaman-classic-escape",
    name: "Andaman Classic Escape",
    duration: "3 Nights / 4 Days",
    nightSplit: "(2 N Port Blair – 1 N Havelock)",
    nights: 3,
    days: 4,
    route: "Port Blair • Havelock Island",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A balanced 4-day trip featuring 2 nights in Port Blair and 1 night in Havelock, covering Cellular Jail, Corbyn's Cove, Radhanagar Beach, Elephant Beach, and Chidiyatapu.",
    description: "Explore the perfect 4-day Andaman itinerary with 2 nights in Port Blair and 1 night in Havelock Island. Includes Cellular Jail, Sound & Light Show, Corbyn's Cove Beach, inter-island luxury ferry, Radhanagar Beach sunset, Elephant Beach, and Chidiyatapu.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Elephant Beach Excursion (10:00 AM – 12:30 PM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Morning Ferry Havelock to Port Blair (08:00 AM – 09:30 AM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)",
      "TryTrabby Goody Bag & Complimentary Photoshoot at Radhanagar Beach"
    ],
    quickInfo: [
      { label: "Duration", value: "3 Nights / 4 Days" },
      { label: "Night Breakdown", value: "2 N PB • 1 N HL" },
      { label: "Islands Covered", value: "2 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Beach", name: "Corbyn's Cove Beach" },
      { category: "Marine Adventure", name: "Elephant Beach Coral Reefs" },
      { category: "Premier Beach", name: "Radhanagar Beach Sunset" },
      { category: "Sunset Vista", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Occupancy for 02 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Occupancy for 01 Night with Breakfast at Havelock",
      "All transfers as per itinerary in AC Car at Port Blair & Havelock Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock by A/C Luxury Tourist Private Ferry",
      "All days sightseeing according to the itinerary",
      "TryTrabby Goody Bag & Complimentary Photoshoot at Radhanagar Beach"
    ],
    exclusions: [
      "Lunch & Dinner (unless optional CP, MAP, or AP meal plan selected)",
      "Any extra excursions apart from the suggested itinerary",
      "Water sports activities (Scuba Diving, Sea Walk, Jet Ski, Parasailing, Glass Bottom)",
      "Room service, laundry, telephone charges, and Ross Island maintenance fee",
      "Vehicle at disposal outside itinerary",
      "Any Airline / Ship Tickets to Port Blair",
      "Expenses incurred due to bad weather, flight or ferry cancellation, strike or political unrest"
    ],
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrival at Port Blair in the morning/afternoon by flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British showcasing the life of prisoners (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail where freedom struggle sagas come alive. Overnight stay in Port Blair.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Morning Ferry → Elephant Beach → Radhanagar Beach Sunset",
        description: "After breakfast and hotel check-out, board the morning ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Our representative greets you at Havelock exit gate with a placard. Head for Elephant Beach (10:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs, with optional water sports like snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides. In the afternoon (03:00 PM – 06:00 PM), visit world-famous Radhanagar Beach (Beach #7) to relax on pure white sands and witness an unforgettable sunset. Check into your Havelock hotel for overnight stay.",
        activities: ["Morning Ferry to Havelock (07:30 AM – 09:30 AM)", "Elephant Beach Coral Reef Excursion (10:00 AM – 12:30 PM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (08:00 AM – 09:30 AM). Representative transfer to hotel and check-in. After lunch, proceed to Chidiyatapu (30 km away from Port Blair), the famous sunset point in Andaman. Spend time admiring the long trail of black rocks and boulders along the beach (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (08:00 AM – 09:30 AM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 3)"
      },
      {
        day: 4,
        title: "Departure from Andaman Islands",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport / Harbor, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "island-explorer",
    slug: "island-explorer",
    name: "Island Explorer",
    duration: "4 Nights / 5 Days",
    nightSplit: "(1 N Port Blair – 2 N Havelock – 1 N Neil)",
    nights: 4,
    days: 5,
    route: "Port Blair • Havelock • Neil Island",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A complete island-hopping experience combining the historic highlights of Port Blair, the world-famous beaches of Havelock, and the serene marine shores of Neil Island.",
    description: "Discover the best of the Andaman Islands through a carefully planned five-day journey covering iconic beaches, inter-island cruise transfers, historical landmarks, and unforgettable coastal vistas.",
    highlightsList: [
      "Cellular Jail Historic Visit (1 Hour Trip)",
      "Afternoon Ferry Port Blair to Havelock (1.5 – 2 Hours)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil Island to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "4 Nights / 5 Days" },
      { label: "Night Breakdown", value: "1 N PB • 2 N HL • 1 N NL" },
      { label: "Islands Covered", value: "3 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail Historic Monument" },
      { category: "Asia's Premier Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Adventure", name: "Elephant Beach Coral Reefs" },
      { category: "Neil Island Exploration", name: "Bharatpur Beach & Lakshmanpur Beach" },
      { category: "Natural Wonder", name: "Natural Living Rock Bridge" },
      { category: "Biological Reserve", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Afternoon Ferry to Havelock → Radhanagar Beach",
        description: "Arrive at Port Blair Airport in the morning where our representative welcomes you with a name placard. Visit the famous Cellular Jail ('Kala Pani') to learn about the historic colonial prison and freedom struggle (1-hour visit depending on flight arrival). In the afternoon, board the inter-island ferry to Havelock Island (1.5 to 2 hours journey). On arrival at Havelock (Swaraj Dweep), transfer to your hotel, check in, and refresh. Later (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on pure white sand and witness breathtaking sunset views.",
        activities: ["Cellular Jail Visit (1 Hr Trip)", "Afternoon Ferry to Havelock (1.5–2 Hrs)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 1)"
      },
      {
        day: 2,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat ride to Elephant Beach, renowned for exotic marine life and vibrant coral reefs. Spend the morning (09:00 AM – 12:30 PM) exploring crystal-clear waters and enjoying optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for a relaxing evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and hotel check-out, board the morning ferry to Neil Island (Shaheed Dweep, approximately 1-hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports activities. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for panoramic views overlooking Havelock and Port Blair, along with the famous Natural Rock Bridge structure before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 3)"
      },
      {
        day: 4,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known as the premier sunset point in Andaman. Admire long trails of black rocks and boulders along the beach (03:00 PM – 06:00 PM). Return to Port Blair for local handicrafts shopping.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 4)"
      },
      {
        day: 5,
        title: "Departure from Andaman Islands",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your onward journey home."
      }
    ]
  },
  {
    id: "andaman-highlights",
    slug: "andaman-highlights",
    name: "Andaman Highlights",
    duration: "4 Nights / 5 Days",
    nightSplit: "(2 N Port Blair – 1 N Havelock – 1 N Neil)",
    nights: 4,
    days: 5,
    route: "Port Blair • Havelock • Neil Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838944/golden-pebble/images/packages/andaman-highlights.jpg",
    shortDescription: "Experience the essential Andaman attractions with a balanced itinerary of freedom history, coastal sights, sound & light show, and iconic beach destinations.",
    description: "Experience the essential Andaman attractions with a balanced five-day itinerary covering Port Blair's heritage, Havelock's iconic shores, and Neil Island's pristine marine beaches.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach Relaxation (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Elephant Beach Water Excursion (09:00 AM – 01:30 PM)",
      "Radhanagar Beach World Famous Sunset (03:30 PM – 05:30 PM)",
      "Morning Ferry to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "4 Nights / 5 Days" },
      { label: "Night Breakdown", value: "2 N PB • 1 N HL • 1 N NL" },
      { label: "Islands Covered", value: "3 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Relaxation", name: "Corbyn's Cove Beach" },
      { category: "Marine Adventure", name: "Elephant Beach Water Sports" },
      { category: "Sunset Vista", name: "Radhanagar Beach" },
      { category: "Tranquil Island", name: "Neil Island & Natural Bridge" },
      { category: "Sunset Sanctuary", name: "Chidiyatapu" }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport in the morning/afternoon and transfer to your hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') built by the British to showcase the life of freedom fighters (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), witness the captivating Sound & Light Show at Cellular Jail where freedom struggle sagas come alive.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island → Elephant Beach → Evening Radhanagar Beach",
        description: "After breakfast, board the morning ferry to Havelock Island. Proceed on a 30-minute speed boat ride to Elephant Beach (09:00 AM – 01:30 PM), renowned for exotic marine life and colorful coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). In the afternoon (03:30 PM – 05:30 PM), explore Radhanagar Beach (Beach No. 7) to witness magnificent ocean sunset views before checking into your Havelock hotel.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 01:30 PM)", "Radhanagar Beach Sunset (03:30 PM – 05:30 PM)", "Optional Water Sports"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry to Neil Island (Shaheed Dweep, ~1 Hour cruise). After lunch, visit Bharatpur Beach, famous for turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, alongside the Natural Rock Bridge formation, before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 3)"
      },
      {
        day: 4,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, take the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 4)"
      },
      {
        day: 5,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "havelock-escape",
    slug: "havelock-escape",
    name: "Havelock Escape",
    duration: "4 Nights / 5 Days",
    nightSplit: "(2 N Port Blair – 2 N Havelock)",
    nights: 4,
    days: 5,
    route: "Port Blair • Havelock Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838953/golden-pebble/images/packages/havelock-escape.webp",
    shortDescription: "A popular 5-day getaway staying 2 nights in Port Blair and 2 nights in Havelock Island featuring Cellular Jail, Radhanagar Sunset, Elephant Beach, and Chidiyatapu.",
    description: "Explore the perfect 5-day Andaman trip focusing on historic Port Blair and tropical Havelock Island. Includes Cellular Jail, Sound & Light Show, Corbyn's Cove, Radhanagar Beach sunset, Elephant Beach marine excursion, and Chidiyatapu sunset point.",
    highlightsList: [
      "Cellular Jail National Memorial (03:45 PM – 04:45 PM)",
      "Corbyn's Cove Beach",
      "Light & Sound Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Return Morning Ferry Havelock to Port Blair (09:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "4 Nights / 5 Days" },
      { label: "Night Breakdown", value: "2 N PB • 2 N HL" },
      { label: "Islands Covered", value: "2 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Beach", name: "Corbyn's Cove Beach" },
      { category: "World Famous Sunset", name: "Radhanagar Beach" },
      { category: "Water Adventure", name: "Elephant Beach Excursion" },
      { category: "Sunset Vista", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Upon arrival at Veer Savarkar International Airport, Port Blair, meet our representative for hotel transfer and check-in. In the afternoon (03:45 PM – 04:45 PM), visit the historical Cellular Jail to learn about India's freedom struggle. Continue to Corbyn's Cove Beach for palm-fringed coastal walks. At 05:15 PM – 06:15 PM, attend the captivating Sound & Light Show at Cellular Jail.",
        activities: ["Cellular Jail Visit (03:45 PM – 04:45 PM)", "Corbyn's Cove Beach", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "Check out early from your Port Blair hotel and board the morning inter-island ferry to Havelock Island (07:30 AM – 09:30 AM). On arrival, check in at your Havelock resort and relax. In the afternoon (03:00 PM – 06:00 PM), visit Asia's renowned Radhanagar Beach (Beach No. 7) to relax on soft white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Elephant Beach Excursion & Water Sports Activity",
        description: "After breakfast, depart between 09:00 AM – 12:30 PM on a speed boat trip to Elephant Beach, famous for vibrant coral reefs and crystal-clear waters. Enjoy complimentary snorkeling or indulge in optional water adventures such as Sea Walk, Jet Skiing, and Banana Rides before returning to your Havelock resort.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Snorkeling", "Optional Water Sports"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock to Port Blair via Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast, check out from your Havelock resort and take the return morning ferry to Port Blair (09:30 AM – 12:30 PM). Check into your Port Blair hotel. In the afternoon (03:00 PM – 06:00 PM), enjoy a scenic coastal drive to Chidiyatapu ('Bird Island') for spectacular sunset vistas and local handicrafts shopping.",
        activities: ["Return Ferry to Port Blair (09:30 AM – 12:30 PM)", "Chidiyatapu Sunset Drive (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 4)"
      },
      {
        day: 5,
        title: "Departure from Port Blair",
        description: "Enjoy breakfast at your hotel, check out, and transfer to Veer Savarkar International Airport, Port Blair, carrying magical island memories of your Andaman holiday."
      }
    ]
  },
  {
    id: "tropical-island-escape",
    slug: "tropical-island-escape",
    name: "Tropical Island Escape",
    duration: "5 Nights / 6 Days",
    nightSplit: "(2 N Port Blair – 2 N Havelock – 1 N Neil)",
    nights: 5,
    days: 6,
    route: "Port Blair • Havelock • Neil Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838960/golden-pebble/images/packages/tropical-island-escape.webp",
    shortDescription: "A popular 6-day island itinerary with 2 nights in Port Blair, 2 nights in Havelock, and 1 night in Neil Island, including Elephant Beach and Chidiyatapu.",
    description: "Experience the perfect balance of Andaman's premier island destinations over 6 days. Enjoy 2 nights in Port Blair, 2 nights in Havelock Island, and 1 night in Neil Island, covering Cellular Jail, Radhanagar Beach, Elephant Beach, Natural Bridge, and Chidiyatapu.",
    highlightsList: [
      "Cellular Jail Historical Visit (03:00 PM – 04:30 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (09:30 AM – 11:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil to Port Blair (09:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "5 Nights / 6 Days" },
      { label: "Night Breakdown", value: "2 N PB • 2 N HL • 1 N NL" },
      { label: "Islands Covered", value: "3 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail Memorial & Sound Show" },
      { category: "World Famous Shore", name: "Radhanagar Beach Sunset" },
      { category: "Marine Corals", name: "Elephant Beach Water Excursion" },
      { category: "Tranquil Shores", name: "Neil Island & Natural Rock Bridge" },
      { category: "Sunset Vista", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Havelock",
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Neil Island",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Transfer to your hotel, check in, and refresh. In the afternoon (03:00 PM – 04:30 PM), visit the famous Cellular Jail ('Kala Pani') constructed by the British to showcase freedom fighters' struggle. In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (03:00 PM – 04:30 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 09:30 AM – 11:30 AM). On arrival, meet our representative with a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), visit Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (09:30 AM – 11:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat trip to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for an evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, depart for Neil Island (Shaheed Dweep) by morning ferry (~1 Hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, along with the Natural Rock Bridge formation, before checking into your Neil Island resort.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 4)"
      },
      {
        day: 5,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (09:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (09:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Departure from Port Blair",
        description: "Post breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "north-bay-heritage-tour",
    slug: "north-bay-heritage-tour",
    name: "North Bay & Island Heritage",
    duration: "5 Nights / 6 Days",
    nightSplit: "(3 N Port Blair – 1 N Havelock – 1 N Neil)",
    nights: 5,
    days: 6,
    route: "Port Blair • Havelock • Neil • North Bay & Ross",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838955/golden-pebble/images/packages/north-bay-heritage-tour.webp",
    shortDescription: "A comprehensive 6-day itinerary including North Bay Coral Island, Ross Island heritage, Havelock's Radhanagar Beach, Neil Island, and Cellular Jail.",
    description: "Explore the best of Port Blair, Havelock, Neil Island, plus North Bay Coral Island and Ross Island heritage over 6 enriched days. Features 3 nights in Port Blair, 1 night in Havelock, and 1 night in Neil Island.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)",
      "North Bay Coral Island & Ross Island Excursion (09:00 AM – 03:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "5 Nights / 6 Days" },
      { label: "Night Breakdown", value: "3 N PB • 1 N HL • 1 N NL" },
      { label: "Islands Covered", value: "5 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair", "North Bay & Ross"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Shore", name: "Corbyn's Cove Beach" },
      { category: "Premier Beach", name: "Radhanagar Beach Sunset" },
      { category: "Island Exploration", name: "Neil Island & Natural Bridge" },
      { category: "Underwater Coral Reef", name: "North Bay Island Exploration" },
      { category: "Colonial History", name: "Ross Island Nature Walk & Ruins" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Sharing for 03 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Havelock",
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Neil Island",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry to Neil Island (Shaheed Dweep, ~1 Hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, alongside the Natural Rock Bridge formation, before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 3)"
      },
      {
        day: 4,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 4)"
      },
      {
        day: 5,
        title: "Port Blair → North Bay Coral Island & Ross Island Sightseeing",
        description: "Post breakfast, embark on a full day excursion (09:00 AM – 03:00 PM) to North Bay Island (Coral Island) for underwater coral reef exploration, snorkeling, and water sports. Continue to Ross Island, the historic British administrative capital, for a sylvan nature walk among colonial ruins, spotted deer, and peacocks. Return to your hotel for overnight stay.",
        activities: ["North Bay Coral Reef Excursion (09:00 AM – 03:00 PM)", "Ross Island Colonial Ruins Walk", "Optional Water Sports"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Departure from Port Blair",
        description: "Post breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport / Harbor for your return journey home."
      }
    ]
  },
  {
    id: "andaman-leisure-haven",
    slug: "andaman-leisure-haven",
    name: "Andaman Leisure Haven",
    duration: "5 Nights / 6 Days",
    nightSplit: "(1 N Port Blair – 2 N Havelock – 2 N Neil)",
    nights: 5,
    days: 6,
    route: "Port Blair • Havelock • Neil Island",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A relaxed 6-day island holiday with 2 nights in Havelock and 2 nights in Neil Island, featuring an extra day at leisure in Neil Island.",
    description: "Designed for travelers seeking extended beach relaxation across Andaman's best islands. Features 1 night in Port Blair, 2 nights in Havelock Island, and 2 nights in Neil Island with a full day at leisure in Neil.",
    highlightsList: [
      "Cellular Jail Historical Visit (1 Hour Trip)",
      "Afternoon Ferry Port Blair to Havelock (1.5 – 2 Hours)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Full Day Leisure in Neil Island (Sitapur & Sunrise Beach)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "5 Nights / 6 Days" },
      { label: "Night Breakdown", value: "1 N PB • 2 N HL • 2 N NL" },
      { label: "Islands Covered", value: "3 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail National Memorial" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Corals", name: "Elephant Beach Excursion" },
      { category: "Neil Island Exploration", name: "Bharatpur & Lakshmanpur Beaches" },
      { category: "Extra Island Leisure", name: "Sitapur Beach & Sunrise Exploration" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Port Blair",
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Havelock",
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Neil Island",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Afternoon Ferry to Havelock → Radhanagar Beach",
        description: "Arrive at Port Blair Airport in the morning where our representative welcomes you with a name placard. Visit the famous Cellular Jail ('Kala Pani') to learn about the colonial prison and freedom struggle (1-hour visit depending on flight arrival). In the afternoon, board the inter-island ferry to Havelock Island (Swaraj Dweep, 1.5 to 2 hours journey). On arrival at Havelock, meet our representative at the exit gate, transfer to hotel, and refresh. Later (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on pure white sand and witness breathtaking ocean sunset views.",
        activities: ["Cellular Jail Visit (1 Hr Trip)", "Afternoon Ferry to Havelock (1.5–2 Hrs)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 1)"
      },
      {
        day: 2,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for a relaxing evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry to Neil Island (Shaheed Dweep, ~1 Hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, alongside the Natural Rock Bridge formation, before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 3)"
      },
      {
        day: 4,
        title: "Neil Island → Full Day at Leisure & Beach Exploration (Sitapur & Sunrise Beach)",
        description: "After breakfast, spend the entire day at leisure. Option to explore marine life by indulging in optional water activities (Scuba Diving, Snorkeling), or visit Sitapur Beach and Sunrise Beach to soak in the sun. Return to resort for a relaxing overnight stay.",
        activities: ["Sitapur & Sunrise Beach Exploration", "Neil Island Beach Walks", "Optional Water Sports / Leisure"],
        overnight: "Neil Island (Night 4)"
      },
      {
        day: 5,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "havelock-relaxation-tour",
    slug: "havelock-relaxation-tour",
    name: "Havelock Relaxation Tour",
    duration: "5 Nights / 6 Days",
    nightSplit: "(2 N Port Blair – 3 N Havelock)",
    nights: 5,
    days: 6,
    route: "Port Blair • Havelock Island • Port Blair",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838954/golden-pebble/images/packages/havelock-relaxation-tour.jpg",
    shortDescription: "A focused 6-day Havelock getaway featuring 3 full nights on Havelock Island, Radhanagar Beach, Elephant Beach, and an extra day at leisure.",
    description: "Designed for travelers who want extended resort time on Havelock Island without island-hopping stress. Features 2 nights in Port Blair and 3 nights in Havelock Island.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Day at Leisure on Havelock (Kalapathar & Govind Nagar Beaches)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Port Blair (09:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "5 Nights / 6 Days" },
      { label: "Night Breakdown", value: "2 N PB • 3 N HL" },
      { label: "Islands Covered", value: "2 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Havelock Island", "Port Blair"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Extended Island Stay", name: "Kalapathar & Govind Nagar Beaches" },
      { category: "Marine Corals", name: "Elephant Beach Excursion" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Occupancy for 02 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Occupancy for 03 Nights with Breakfast at Havelock",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock Island → Full Day at Leisure (Kalapathar & Govind Nagar Beaches)",
        description: "After breakfast, spend the entire day at leisure. Explore the marine life of Andamans by indulging in optional water activities (Scuba Diving, Snorkeling, Sea Walk). You may also visit Kalapathar Beach and Govind Nagar Beach to soak in the sun before returning to your resort.",
        activities: ["Kalapathar & Govind Nagar Beach Walks", "Island Resort Leisure", "Optional Water Sports"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for an evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 4)"
      },
      {
        day: 5,
        title: "Havelock to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (09:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (09:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "portblair-havelock-scenic",
    slug: "portblair-havelock-scenic",
    name: "Port Blair & Havelock Island Scenic",
    duration: "5 Nights / 6 Days",
    nightSplit: "(3 N Port Blair – 2 N Havelock)",
    nights: 5,
    days: 6,
    route: "Port Blair • Havelock • North Bay & Ross",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838958/golden-pebble/images/packages/portblair-havelock-scenic.jpg",
    shortDescription: "A comprehensive 6-day island itinerary featuring 3 nights in Port Blair and 2 nights in Havelock Island, including North Bay Coral Island & Ross Island.",
    description: "Enjoy a complete 6-day holiday exploring Port Blair's national heritage and Havelock's premier beaches. Features 3 nights in Port Blair and 2 nights in Havelock Island with Cellular Jail, Radhanagar Beach, Elephant Beach, Chidiyatapu, and a full-day North Bay & Ross Island excursion.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Port Blair (09:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)",
      "North Bay Coral Island & Ross Island Excursion (09:00 AM – 03:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "5 Nights / 6 Days" },
      { label: "Night Breakdown", value: "3 N PB • 2 N HL" },
      { label: "Islands Covered", value: "4 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Port Blair", "North Bay & Ross"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Relaxation", name: "Corbyn's Cove Beach" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Corals", name: "Elephant Beach Boat Ride" },
      { category: "Sunset Sanctuary", name: "Chidiyatapu Sunset Point" },
      { category: "Colonial History & Reefs", name: "North Bay Coral Island & Ross Island" }
    ],
    inclusions: [
      "Accommodation 01 Double Occupancy for 03 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Occupancy for 02 Nights with Breakfast at Havelock",
      "All transfers as per itinerary in AC Car at Port Blair & Havelock",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for an evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (09:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (09:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 4)"
      },
      {
        day: 5,
        title: "Port Blair → North Bay Coral Island & Ross Island Sightseeing",
        description: "Post breakfast, embark on a full day excursion (09:00 AM – 03:00 PM) to North Bay Island (Coral Island) for underwater coral reef exploration, snorkeling, and water sports. Continue to Ross Island, the historic British administrative capital, for a sylvan nature walk among colonial ruins, spotted deer, and peacocks. Return to your hotel for overnight stay.",
        activities: ["North Bay Coral Reef Excursion (09:00 AM – 03:00 PM)", "Ross Island Colonial Ruins Walk", "Optional Water Sports"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "port-blair-cultural-expedition",
    slug: "port-blair-cultural-expedition",
    name: "Port Blair & Island Heritage",
    duration: "6 Nights / 7 Days",
    nightSplit: "(4 N Port Blair – 1 N Havelock – 1 N Neil)",
    nights: 6,
    days: 7,
    route: "Port Blair • Havelock • Neil • North Bay & Ross",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838957/golden-pebble/images/packages/port-blair-cultural-expedition.jpg",
    shortDescription: "A rich 7-day Andaman journey featuring 4 nights in Port Blair, 1 night in Havelock, and 1 night in Neil Island, including City Museums, Chatham Saw Mill, North Bay & Ross Island.",
    description: "Discover the complete cultural and natural heritage of the Andaman Islands over 7 days. Includes 4 nights in Port Blair, 1 night in Havelock Island, and 1 night in Neil Island, featuring Cellular Jail, Chatham Saw Mill, Samudrika Marine Museum, Anthropological Museum, North Bay Coral Island, Ross Island, and Chidiyatapu.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)",
      "North Bay Coral Island & Ross Island Excursion (09:00 AM – 03:00 PM)",
      "Port Blair City Museums & Chatham Saw Mill (09:00 AM – 01:00 PM)",
      "Sagarika Govt. Handicraft Emporium Shopping (05:00 PM – 06:30 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "6 Nights / 7 Days" },
      { label: "Night Breakdown", value: "4 N PB • 1 N HL • 1 N NL" },
      { label: "Islands Covered", value: "5 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair", "City Tour & Shopping"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Neil Island Exploration", name: "Bharatpur & Lakshmanpur Beaches" },
      { category: "Coral Reef Excursion", name: "North Bay Coral Island Exploration" },
      { category: "Colonial Capital", name: "Ross Island Nature Walk & Ruins" },
      { category: "Cultural Heritage", name: "Chatham Saw Mill & Museums Tour" }
    ],
    inclusions: [
      "Accommodation 01 Double Sharing for 04 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Havelock",
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Neil Island",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry to Neil Island (Shaheed Dweep, ~1 Hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, alongside the Natural Rock Bridge formation, before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 3)"
      },
      {
        day: 4,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 4)"
      },
      {
        day: 5,
        title: "Port Blair → North Bay Coral Island & Ross Island Sightseeing",
        description: "Post breakfast, embark on a full day excursion (09:00 AM – 03:00 PM) to North Bay Island (Coral Island) for underwater coral reef exploration, snorkeling, and water sports. Continue to Ross Island, the historic British administrative capital, for a sylvan nature walk among colonial ruins, spotted deer, and peacocks. Return to your hotel for overnight stay.",
        activities: ["North Bay Coral Reef Excursion (09:00 AM – 03:00 PM)", "Ross Island Colonial Ruins Walk", "Optional Water Sports"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Port Blair → City Tour (Museums & Saw Mill) & Sagarika Shopping",
        description: "Post breakfast, proceed for Port Blair city tour (09:00 AM – 01:00 PM) covering Chatham Saw Mill (Asia's oldest saw mill), Forest Museum, Samudrika Naval Marine Museum, Science Centre, and Anthropological Museum. In the evening (05:00 PM – 06:30 PM), visit Sagarika Govt. Emporium for local handicraft shopping.",
        activities: ["Port Blair City Museums Tour (09:00 AM – 01:00 PM)", "Chatham Saw Mill", "Sagarika Govt. Emporium (05:00 PM – 06:30 PM)"],
        overnight: "Port Blair (Night 6)"
      },
      {
        day: 7,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "grand-andaman-leisure",
    slug: "grand-andaman-leisure",
    name: "Grand Andaman Leisure",
    duration: "6 Nights / 7 Days",
    nightSplit: "(2 N Port Blair – 3 N Havelock – 1 N Neil)",
    nights: 6,
    days: 7,
    route: "Port Blair • Havelock • Neil Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838950/golden-pebble/images/packages/grand-andaman-leisure.jpg",
    shortDescription: "A luxurious 7-day Andaman holiday featuring 3 full nights in Havelock Island, 2 nights in Port Blair, and 1 night in Neil Island.",
    description: "Enjoy an extended 7-day tropical getaway with 3 full nights in Havelock Island, 2 nights in Port Blair, and 1 night in Neil Island. Experience Cellular Jail, Radhanagar Beach, Elephant Beach marine excursion, an extra day at leisure in Havelock, Bharatpur Beach, Natural Bridge, and Chidiyatapu.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Day at Leisure on Havelock (Kalapathar & Govind Nagar Beaches)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "6 Nights / 7 Days" },
      { label: "Night Breakdown", value: "2 N PB • 3 N HL • 1 N NL" },
      { label: "Islands Covered", value: "3 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Coral Reef Excursion", name: "Elephant Beach Boat Ride" },
      { category: "Extended Island Stay", name: "Kalapathar & Govind Nagar Beaches" },
      { category: "Neil Island Exploration", name: "Bharatpur Beach & Natural Bridge" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Sharing for 03 Nights with Breakfast at Havelock",
      "Accommodation 01 Double Sharing for 01 Night with Breakfast at Neil Island",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for an evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock Island → Full Day at Leisure (Kalapathar & Govind Nagar Beaches)",
        description: "After breakfast, spend the entire day at leisure. Explore the marine life of Andamans by indulging in optional water activities (Scuba Diving, Snorkeling, Sea Walk). You may also visit Kalapathar Beach and Govind Nagar Beach to soak in the sun before returning to your resort.",
        activities: ["Kalapathar & Govind Nagar Beach Walks", "Island Resort Leisure", "Optional Water Sports"],
        overnight: "Havelock Island (Night 4)"
      },
      {
        day: 5,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry to Neil Island (Shaheed Dweep, ~1 Hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, alongside the Natural Rock Bridge formation, before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 5)"
      },
      {
        day: 6,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 6)"
      },
      {
        day: 7,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "andaman-island-trinity",
    slug: "andaman-island-trinity",
    name: "Andaman Island Trinity",
    duration: "6 Nights / 7 Days",
    nightSplit: "(2 N Port Blair – 2 N Havelock – 2 N Neil)",
    nights: 6,
    days: 7,
    route: "Port Blair • Havelock • Neil Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838946/golden-pebble/images/packages/andaman-island-trinity.jpg",
    shortDescription: "A grand 7-day island getaway featuring 2 nights in Port Blair, 2 nights in Havelock Island, and 2 nights in Neil Island with an extra day at leisure.",
    description: "Experience the ultimate 7-day Andaman journey covering Port Blair, Havelock Island, and Neil Island with 2 nights in each location. Enjoy Cellular Jail, Corbyn's Cove, Radhanagar Beach sunset, Elephant Beach marine corals, Bharatpur & Lakshmanpur Beaches, Natural Bridge, an extra day at leisure in Neil, and Chidiyatapu sunset point.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Full Day Leisure in Neil Island (Sitapur & Sunrise Beach)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point & Black Rock Shore (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "6 Nights / 7 Days" },
      { label: "Night Breakdown", value: "2 N PB • 2 N HL • 2 N NL" },
      { label: "Islands Covered", value: "3 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Historic Heritage", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coastal Shore", name: "Corbyn's Cove Beach" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Corals", name: "Elephant Beach Excursion" },
      { category: "Neil Island Exploration", name: "Bharatpur & Lakshmanpur Beaches" },
      { category: "Extra Island Leisure", name: "Sitapur Beach & Sunrise Exploration" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Port Blair",
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Havelock",
      "Accommodation 01 Double Sharing for 02 Nights with Breakfast at Neil Island",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pickup & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrive at Port Blair Airport by morning/afternoon flight. Representative transfer to hotel. After freshening up, visit the historic Cellular Jail ('Kala Pani') constructed by the British (02:00 PM – 03:00 PM). Continue to Corbyn's Cove Beach, ideal for swimming and sun unwinding (03:15 PM – 05:00 PM). In the evening (05:15 PM – 06:15 PM), attend the captivating Sound & Light Show at Cellular Jail before returning to your hotel.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning inter-island ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a name placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness an unforgettable ocean sunset.",
        activities: ["Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock Island → Elephant Beach Excursion & Water Sports",
        description: "After a sumptuous breakfast, embark on a 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment). Return to your resort for an evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach → Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry to Neil Island (Shaheed Dweep, ~1 Hour cruise). After lunch, visit Bharatpur Beach, popular for gentle turquoise waters and water sports. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach for views of Havelock and Port Blair, alongside the Natural Rock Bridge formation, before checking into your Neil Island hotel.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 4)"
      },
      {
        day: 5,
        title: "Neil Island → Full Day at Leisure & Beach Exploration (Sitapur & Sunrise Beach)",
        description: "After breakfast, spend the entire day at leisure. Option to explore marine life by indulging in optional water activities (Scuba Diving, Snorkeling), or visit Sitapur Beach and Sunrise Beach to soak in the sun. Return to resort for a relaxing overnight stay.",
        activities: ["Sitapur & Sunrise Beach Exploration", "Neil Island Beach Walks", "Optional Water Sports / Leisure"],
        overnight: "Neil Island (Night 5)"
      },
      {
        day: 6,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return for local handicrafts shopping and overnight stay in Port Blair.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 6)"
      },
      {
        day: 7,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, for your return journey home."
      }
    ]
  },
  {
    id: "andaman-heritage-explorer",
    slug: "andaman-heritage-explorer",
    name: "Andaman Coral & Heritage Explorer",
    duration: "6 Nights / 7 Days",
    nightSplit: "(3 N Port Blair – 2 N Havelock – 1 N Neil)",
    nights: 6,
    days: 7,
    route: "Port Blair • Havelock • Neil • Port Blair • North Bay & Ross",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838943/golden-pebble/images/packages/andaman-heritage-explorer.webp",
    shortDescription: "A comprehensive 7-day Andaman journey featuring 3 nights in Port Blair, 2 nights in Havelock, 1 night in Neil Island, Radhanagar Beach, Elephant Beach corals, Natural Bridge, Chidiyatapu sunset, and North Bay & Ross Island.",
    description: "Experience the ultimate 7-day classic Andaman tour with 3 nights in Port Blair, 2 nights in Havelock Island, and 1 night in Neil Island. Includes Cellular Jail, Sound & Light Show, Radhanagar Beach, Elephant Beach speedboat excursion, Bharatpur & Lakshmanpur beaches with Natural Bridge, Chidiyatapu sunset point, and full day North Bay Coral Island & Ross Island excursion.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)",
      "North Bay Coral Island & Ross Island Excursion (09:00 AM – 03:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "6 Nights / 7 Days" },
      { label: "Night Breakdown", value: "3 N PB • 2 N HL • 1 N NL" },
      { label: "Islands Covered", value: "5 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "Havelock Island", "Neil Island", "Port Blair", "North Bay & Ross"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Corals", name: "Elephant Beach Speedboat Excursion" },
      { category: "Coral Island & Heritage", name: "North Bay & Ross Island Excursion" },
      { category: "Natural Wonder", name: "Lakshmanpur Natural Rock Bridge" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation for 06 Nights as per itinerary (3N Port Blair, 2N Havelock, 1N Neil)",
      "Daily Breakfast at the hotel restaurant (CP Plan)",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pick up & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrival at Port Blair by Morning/Afternoon flight and transfer to Hotel. After freshening up, visit the famous Cellular Jail ('Kala Pani'), constructed by the British during colonial rule. Later, visit Corbyn's Cove Beach, ideal for swimming and sun unwinding. In the evening, attend the captivating Sound & Light Show at Cellular Jail where the saga of the Indian freedom struggle comes alive, followed by overnight stay in Port Blair.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island via Morning Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a placard, transfer to resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on pristine white sands and witness an unforgettable ocean sunset.",
        activities: ["Morning Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 2)"
      },
      {
        day: 3,
        title: "Havelock Island → Elephant Beach Speedboat & Marine Corals Excursion",
        description: "After a sumptuous breakfast, embark on a scenic 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and vibrant coral reefs. Enjoy optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (direct payment basis). Return to your resort for a relaxing evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Marine Coral Reef Exploration", "Optional Water Sports (Direct Payment)"],
        overnight: "Havelock Island (Night 3)"
      },
      {
        day: 4,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach, Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry (~1 Hour) to Neil Island (Shaheed Dweep). After lunch, visit Bharatpur Beach, famous for water sports including glass bottom boat, jet ski, and snorkeling. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach offering views of Havelock and Port Blair, along with the famous Natural Rock Bridge, before overnight stay at Neil Island.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 4)"
      },
      {
        day: 5,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return to Port Blair for local handicrafts shopping and overnight stay.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 5)"
      },
      {
        day: 6,
        title: "Port Blair → North Bay Coral Island & Ross Island Full Day Excursion",
        description: "Post breakfast, head for a full day excursion (09:00 AM – 03:00 PM) to North Bay Island (Coral Island) for vibrant coral reef exploration and optional underwater water sports. Continue to Ross Island, the historic British administrative capital, for a nature walk amidst colonial ruins, deer, and peacocks. Return to hotel for overnight stay in Port Blair. (Note: Wandoor Beach serves as an alternate if North Bay/Ross is non-operational).",
        activities: ["North Bay Coral Reef Excursion (09:00 AM – 03:00 PM)", "Ross Island Colonial Heritage Walk", "Optional Underwater Adventures (Direct Payment)"],
        overnight: "Port Blair (Night 6)"
      },
      {
        day: 7,
        title: "Departure from Port Blair",
        description: "Post breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, carrying fond memories of your 7-day Andaman expedition."
      }
    ]
  },
  {
    id: "andaman-grand-expedition",
    slug: "andaman-grand-expedition",
    name: "Andaman Grand Expedition",
    duration: "13 Nights / 14 Days",
    nightSplit: "(4 N Port Blair – 6 N Havelock – 3 N Neil)",
    nights: 13,
    days: 14,
    route: "Port Blair • North Bay & Ross • Baratang • Havelock • Neil Island",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838942/golden-pebble/images/packages/andaman-grand-expedition.webp",
    shortDescription: "The ultimate 14-day comprehensive Andaman tour featuring Port Blair, North Bay & Ross Island, Baratang Limestone Caves & Mud Volcano, 6 nights in Havelock, and 3 nights in Neil Island.",
    description: "Experience the ultimate 14-day grand Andaman journey with TryTrabby. Includes historic Cellular Jail, Sound & Light Show, North Bay Coral Island & Ross Island excursion, day trip to Baratang Limestone Caves & Mud Volcano, 6 relaxing nights in Havelock Island with Radhanagar & Elephant Beach, 3 tranquil nights in Neil Island, and Chidiyatapu sunset point.",
    highlightsList: [
      "Cellular Jail Historical Visit (02:00 PM – 03:00 PM)",
      "Corbyn's Cove Beach (03:15 PM – 05:00 PM)",
      "Sound & Light Show at Cellular Jail (05:15 PM – 06:15 PM)",
      "North Bay Coral Island & Ross Island Sightseeing (09:00 AM – 03:00 PM)",
      "Baratang Island Limestone Caves & Mud Volcano Excursion (04:30 AM – 07:30 PM)",
      "Morning Ferry Port Blair to Havelock (07:30 AM – 09:30 AM)",
      "Radhanagar Beach World Famous Sunset (03:00 PM – 06:00 PM)",
      "Elephant Beach Speedboat & Marine Corals Excursion (09:00 AM – 12:30 PM)",
      "Extended Resort Leisure & Beach Exploration on Havelock (4 Days)",
      "Morning Ferry Havelock to Neil Island (1 Hour)",
      "Bharatpur & Lakshmanpur Beaches with Natural Bridge (11:00 AM – 05:30 PM)",
      "Extended Island Leisure in Neil Island (2 Days)",
      "Morning Ferry Neil to Port Blair (10:30 AM – 12:30 PM)",
      "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)"
    ],
    quickInfo: [
      { label: "Duration", value: "13 Nights / 14 Days" },
      { label: "Night Breakdown", value: "4 N PB • 6 N HL • 3 N NL" },
      { label: "Islands Covered", value: "6 Islands" },
      { label: "Meal Plan", value: "Breakfast Included" }
    ],
    routeSteps: ["Port Blair", "North Bay & Ross", "Baratang", "Havelock Island", "Neil Island", "Port Blair"],
    visualHighlights: [
      { category: "Freedom History", name: "Cellular Jail & Sound & Light Show" },
      { category: "Coral Island & Heritage", name: "North Bay & Ross Island Sightseeing" },
      { category: "Geological Wonder", name: "Baratang Limestone Caves & Mud Volcano" },
      { category: "World Famous Beach", name: "Radhanagar Beach Sunset" },
      { category: "Marine Corals", name: "Elephant Beach Speedboat Excursion" },
      { category: "Extended Island Stay", name: "Havelock & Neil Beach Leisure" },
      { category: "Sunset Point", name: "Chidiyatapu Sunset Point" }
    ],
    inclusions: [
      "Accommodation for 13 Nights as per itinerary (4N Port Blair, 6N Havelock, 3N Neil)",
      "Daily Breakfast at the hotel restaurant",
      "All transfers as per itinerary in AC Car at Port Blair, Havelock & Neil Island",
      "Airport Pick up & Drop transfers at Port Blair Airport",
      "Entry and Ferry Tickets to visit all places of sightseeing specified in itinerary",
      "Baratang Island excursion permits and forest vehicle transfers",
      "Transfer to Havelock & Neil Island by A/C Luxury Tourist Private Ferry"
    ],
    exclusions: COMMON_EXCLUSIONS,
    importantInfo: COMMON_IMPORTANT_INFO,
    waterAdventures: WATER_ADVENTURES,
    honeymoonExperiences: HONEYMOON_EXPERIENCES,
    privateFerryInfo: PRIVATE_FERRY_INFO,
    thingsToKnow: THINGS_TO_KNOW,
    termsAndConditions: TERMS_AND_CONDITIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair → Cellular Jail → Corbyn's Cove Beach → Sound & Light Show",
        description: "Arrival at Port Blair by Morning/Afternoon flight and transfer to Hotel. After freshening up, visit the famous Cellular Jail ('Kala Pani'), constructed by the British during colonial rule. Later, visit Corbyn's Cove Beach, ideal for swimming and sun unwinding. In the evening, attend the captivating Sound & Light Show at Cellular Jail brought alive with the saga of the Indian freedom struggle, followed by overnight stay in Port Blair.",
        activities: ["Cellular Jail Visit (02:00 PM – 03:00 PM)", "Corbyn's Cove Beach (03:15 PM – 05:00 PM)", "Sound & Light Show (05:15 PM – 06:15 PM)"],
        overnight: "Port Blair (Night 1)"
      },
      {
        day: 2,
        title: "Port Blair → North Bay Island & Ross Island Excursion",
        description: "Post breakfast, depart for a full day excursion (09:00 AM – 03:00 PM) to North Bay Island (Coral Island), famous for underwater exploration, coral reefs, and colorful marine life. Enjoy optional snorkeling, scuba diving, swimming, and trekking. Later, proceed to Ross Island, the historic British administrative capital, for a nature walk amidst colonial ruins, deer, and peacocks. Return to hotel for comfortable overnight stay in Port Blair. (Note: Wandoor Beach serves as an alternate if North Bay/Ross is non-operational).",
        activities: ["North Bay Coral Reef Excursion (09:00 AM – 03:00 PM)", "Ross Island Colonial Ruins Walk", "Optional Underwater Exploration (Direct Payment)"],
        overnight: "Port Blair (Night 2)"
      },
      {
        day: 3,
        title: "Port Blair → Day Trip to Baratang Island (Limestone Caves & Mud Volcano)",
        description: "After an early morning breakfast (04:30 AM – 07:30 PM), head on a full day tour to Baratang Island passing through dense tropical forests and mangrove creeks. Wade through Baratang Creek to explore the prehistoric Limestone Caves with massive protruding rock formations and visit the natural mud volcanoes created by underground organic gases. Return to Port Blair for overnight stay.",
        activities: ["Baratang Forest Drive & Creek Crossing (04:30 AM – 07:30 PM)", "Prehistoric Limestone Caves Tour", "Mud Volcano Exploration"],
        overnight: "Port Blair (Night 3)"
      },
      {
        day: 4,
        title: "Port Blair to Havelock Island via Morning Ferry → Radhanagar Beach Sunset",
        description: "After breakfast and check-out, board the morning ferry to Havelock Island (Swaraj Dweep, 07:30 AM – 09:30 AM). Meet our representative at the exit gate holding a placard, transfer to hotel/resort, and refresh. In the afternoon (03:00 PM – 06:00 PM), explore Radhanagar Beach (Beach No. 7), named Asia's Best Beach, to relax on white sands and witness a breathtaking ocean sunset.",
        activities: ["Morning Inter-Island Ferry (07:30 AM – 09:30 AM)", "Radhanagar Beach Sunset (03:00 PM – 06:00 PM)"],
        overnight: "Havelock Island (Night 4)"
      },
      {
        day: 5,
        title: "Havelock Island → Elephant Beach Speedboat & Marine Corals Excursion",
        description: "After a sumptuous breakfast, take a 30-minute boat ride to Elephant Beach (09:00 AM – 12:30 PM), famous for exotic marine life and coral reefs. Indulge in optional water activities such as snorkeling, glass bottom boat, sea walk, scuba diving, jet ski, and banana rides (on direct payment basis). Rejuvenate and return to your hotel for an evening at leisure.",
        activities: ["Speedboat to Elephant Beach (09:00 AM – 12:30 PM)", "Coral Reef Exploration", "Optional Water Sports (Direct Payment)"],
        overnight: "Havelock Island (Night 5)"
      },
      {
        day: 6,
        title: "Havelock Island → Day at Leisure & Kalapathar Beach Stroll",
        description: "Enjoy a relaxing breakfast and spend the day at leisure exploring Havelock Island's tranquil coastal shores. Take an optional walk along the black rock shores of Kalapathar Beach or relax at your resort.",
        activities: ["Kalapathar Beach Stroll", "Resort Relaxation & Leisure"],
        overnight: "Havelock Island (Night 6)"
      },
      {
        day: 7,
        title: "Havelock Island → Day at Leisure & Marine Adventures",
        description: "Enjoy breakfast and spend your day at leisure. Option to participate in optional marine adventures such as scuba diving certification, sea walk, or mangrove kayaking on direct payment basis.",
        activities: ["Optional Scuba Diving / Sea Walk", "Island Exploration at Leisure"],
        overnight: "Havelock Island (Night 7)"
      },
      {
        day: 8,
        title: "Havelock Island → Day at Leisure & Govind Nagar Beach Walk",
        description: "Unwind on soft white sand shores at Govind Nagar Beach or sample local seafood and beachside cafes across Havelock Island.",
        activities: ["Govind Nagar Beach Stroll", "Beachside Dining & Cafe Experience"],
        overnight: "Havelock Island (Night 8)"
      },
      {
        day: 9,
        title: "Havelock Island → Day at Leisure & Beachside Relaxation",
        description: "Spend your final full day on Havelock Island relaxing by the ocean, taking photography walks, and unwinding amidst palm-lined beaches.",
        activities: ["Havelock Coastal Photography", "Beachfront Unwinding & Leisure"],
        overnight: "Havelock Island (Night 9)"
      },
      {
        day: 10,
        title: "Havelock to Neil Island via Morning Ferry → Bharatpur Beach, Lakshmanpur Beach & Natural Bridge",
        description: "After breakfast and check-out, board the morning ferry (~1 Hour) to Neil Island (Shaheed Dweep). After lunch, visit Bharatpur Beach, famous for water sports including glass bottom boat, jet ski, snorkeling, scuba diving, and speed boat rides. In the afternoon (11:00 AM – 05:30 PM), explore Lakshmanpur Beach offering views of Havelock and Port Blair, alongside the famous Natural Rock Bridge.",
        activities: ["Morning Ferry to Neil Island (1 Hr)", "Bharatpur Beach Water Sports (Direct Payment)", "Lakshmanpur Beach & Natural Rock Bridge (11:00 AM – 05:30 PM)"],
        overnight: "Neil Island (Night 10)"
      },
      {
        day: 11,
        title: "Neil Island → Day at Leisure & Sitapur Sunrise Exploration",
        description: "Spend a peaceful day at leisure on Neil Island. Visit Sitapur Beach early morning to watch the golden sunrise over the Bay of Bengal and explore serene coral beaches.",
        activities: ["Sitapur Beach Golden Sunrise", "Neil Island Village & Coral Exploration"],
        overnight: "Neil Island (Night 11)"
      },
      {
        day: 12,
        title: "Neil Island → Day at Leisure & Coastal Exploration",
        description: "Enjoy breakfast and relax amidst Neil Island's organic farming villages and turquoise bays. Option for optional glass-bottom boat rides or coral reef snorkeling.",
        activities: ["Neil Island Coastal Exploration", "Optional Glass Bottom Boat Ride"],
        overnight: "Neil Island (Night 12)"
      },
      {
        day: 13,
        title: "Neil Island to Port Blair via Morning Ferry → Chidiyatapu Sunset & Shopping",
        description: "After breakfast and check-out, board the morning ferry back to Port Blair (10:30 AM – 12:30 PM). Representative transfer to your hotel. After lunch, proceed to Chidiyatapu (30 km from Port Blair), known for long trails of black rocks, boulders, and dramatic sunset views (03:00 PM – 06:00 PM). Return to Port Blair for local market shopping before hotel overnight stay.",
        activities: ["Morning Ferry to Port Blair (10:30 AM – 12:30 PM)", "Chidiyatapu Sunset Point (03:00 PM – 06:00 PM)", "Local Handicrafts Shopping"],
        overnight: "Port Blair (Night 13)"
      },
      {
        day: 14,
        title: "Departure from Port Blair",
        description: "Post breakfast, check out from the hotel and receive a private transfer to Veer Savarkar International Airport, Port Blair, carrying grand memories of your 14-day Andaman expedition."
      }
    ]
  }
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((pkg) => pkg.slug === slug);
}
