export interface Package {
  id: string;
  slug: string;
  name: string;
  duration: string;
  nights: number;
  days: number;
  startingPrice: string;
  priceBasis: string;
  image: string;
  shortDescription: string;
  description: string;
  tags: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export const PACKAGES: Package[] = [
  {
    id: "3-nights-beach-bliss",
    slug: "3-nights-beach-bliss",
    name: "3 Nights Beach Bliss",
    duration: "3 Nights / 4 Days",
    nights: 3,
    days: 4,
    startingPrice: "₹24,999",
    priceBasis: "per person",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A serene short getaway featuring pristine beaches, comfortable accommodation, and complimentary breakfast.",
    description: "Designed for travelers seeking a refreshing coastal escape. Enjoy 3 restful nights at Hotel Golden Pebble with daily breakfast, seamless port transfers, and visits to Havelock's iconic Radhanagar & Kalopathar beaches.",
    tags: ["Stay", "Meals", "Transfers"],
    inclusions: [
      "3 Nights accommodation in Deluxe Room at Golden Pebble",
      "Daily breakfast at air-conditioned restaurant",
      "Havelock jetty pickup and drop transfers",
      "Day tour to Radhanagar Beach (Beach No. 7)",
      "Day tour to Kalopathar Beach",
      "Inclusive of all applicable hotel taxes"
    ],
    exclusions: [
      "Airfare / Ferry tickets to Havelock",
      "Lunch & Dinner (available via meal supplement @ ₹750/meal)",
      "Water sports activities (Scuba, Snorkeling, Kayaking)",
      "Personal expenses and laundry"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Havelock & Hotel Check-in",
        description: "Arrive at Havelock Jetty via ferry. Meet our representative and transfer to Hotel Golden Pebble. Check in, relax, and spend a peaceful evening at nearby Govind Nagar Beach."
      },
      {
        day: 2,
        title: "Radhanagar Beach Sunset Tour",
        description: "After breakfast, head to world-famous Radhanagar Beach (Beach No. 7). Walk along powdery white sands and witness one of Asia's finest sunsets."
      },
      {
        day: 3,
        title: "Kalopathar Beach & Local Exploration",
        description: "Visit Kalopathar Beach, known for black rocks contrasting against turquoise waters. Optional water activities or relaxed cafe hopping."
      },
      {
        day: 4,
        title: "Departure from Havelock",
        description: "Enjoy breakfast at the restaurant, check out, and transfer to Havelock Jetty for your onward ferry."
      }
    ]
  },
  {
    id: "4-nights-dive-explore",
    slug: "4-nights-dive-explore",
    name: "4 Nights Dive & Explore",
    duration: "4 Nights / 5 Days",
    nights: 4,
    days: 5,
    startingPrice: "₹34,999",
    priceBasis: "per couple",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Immerse yourself in Andaman's rich marine life with scuba diving, snorkeling, and tropical beach tours.",
    description: "The ultimate adventure package for aquatic enthusiasts. Includes 4 nights stay at Golden Pebble, guided reef snorkeling or scuba diving experience, and visits to Elephant Beach & Radhanagar.",
    tags: ["Stay", "Meals", "Transfers"],
    inclusions: [
      "4 Nights stay in Deluxe Room with Balcony at Golden Pebble",
      "Daily breakfast at the restaurant",
      "Introductory Scuba Dive or Snorkeling session with certified instructor",
      "Speedboat transfer to Elephant Beach",
      "Havelock jetty pickup and drop",
      "All hotel taxes included"
    ],
    exclusions: [
      "Main island ferry tickets",
      "Personal equipment rentals beyond session",
      "Lunch and dinner meals",
      "Gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        description: "Check into Hotel Golden Pebble. Briefing on underwater activity schedule and rest."
      },
      {
        day: 2,
        title: "Elephant Beach & Snorkeling",
        description: "Board speedboat to Elephant Beach for coral reef snorkeling amidst vibrant marine life."
      },
      {
        day: 3,
        title: "Scuba Diving Experience at Nemo Reef",
        description: "Try introductory scuba diving with a qualified dive master at Nemo Reef."
      },
      {
        day: 4,
        title: "Radhanagar & Kalopathar Sightseeing",
        description: "Explore Havelock's top rated beaches and enjoy relaxing coastal vistas."
      },
      {
        day: 5,
        title: "Departure",
        description: "Check out after breakfast and transfer to the jetty."
      }
    ]
  },
  {
    id: "5-nights-romance-retreat",
    slug: "5-nights-romance-retreat",
    name: "5 Nights Romance Retreat",
    duration: "5 Nights / 6 Days",
    nights: 5,
    days: 6,
    startingPrice: "₹42,999",
    priceBasis: "per couple",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "An idyllic honeymoon & romantic escape featuring bed decoration, celebration cake, and beach leisure.",
    description: "Celebrate love in island paradise. Includes 5 nights in our Deluxe Balcony Room, complimentary flower bed decoration, celebration cake, daily breakfast, and private transfers.",
    tags: ["Stay", "Meals", "Transfers"],
    inclusions: [
      "5 Nights stay in Deluxe Room with Balcony",
      "Daily breakfast at Golden Pebble restaurant",
      "Special Flower Bed Decoration (worth ₹1,500)",
      "Half KG Celebration Cake (worth ₹1,000)",
      "Private vehicle transfers for all sightseeing tours",
      "Taxes and service charges included"
    ],
    exclusions: [
      "Inter-island ferry tickets",
      "Lunch / Dinner unless upgraded",
      "Personal leisure spending"
    ],
    itinerary: [
      {
        day: 1,
        title: "Romantic Welcome at Golden Pebble",
        description: "Arrival transfer, check-in to floral decorated balcony room with welcome cake."
      },
      {
        day: 2,
        title: "Radhanagar Beach Sunset Walk",
        description: "Spend a romantic afternoon and sunset at Radhanagar Beach."
      },
      {
        day: 3,
        title: "Private Mangrove Kayaking or Beach Day",
        description: "Enjoy peaceful sea kayaking through calm island mangroves or beach relaxation."
      },
      {
        day: 4,
        title: "Kalopathar Sunrise & Photo Tour",
        description: "Catch early morning light at Kalopathar Beach followed by cafe lunch."
      },
      {
        day: 5,
        title: "Leisure & Shopping in Havelock",
        description: "Explore local handicrafts, enjoy fresh seafood dinner at the hotel."
      },
      {
        day: 6,
        title: "Farewell Havelock",
        description: "Breakfast and departure transfer to Havelock Jetty."
      }
    ]
  },
  {
    id: "6-nights-island-adventure",
    slug: "6-nights-island-adventure",
    name: "6 Nights Island Adventure",
    duration: "6 Nights / 7 Days",
    nights: 6,
    days: 7,
    startingPrice: "₹54,999",
    priceBasis: "per person",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Comprehensive Havelock exploration covering all top beaches, water sports, and Neil Island excursion.",
    description: "The complete Andaman vacation package covering Havelock's highlights and Neil Island trip while enjoying reliable hospitality at Hotel Golden Pebble.",
    tags: ["Stay", "Meals", "Transfers"],
    inclusions: [
      "6 Nights accommodation at Hotel Golden Pebble",
      "Daily buffet/served breakfast",
      "Complete Havelock island sightseeing",
      "Day excursion assistance to Neil Island (Shaheed Dweep)",
      "All port pickups and drops",
      "Hotel taxes included"
    ],
    exclusions: [
      "Ferry tickets (Government / Private)",
      "Meals other than breakfast",
      "Water sports charges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Havelock",
        description: "Check into Hotel Golden Pebble and evening beach walk."
      },
      {
        day: 2,
        title: "Elephant Beach Water Sports",
        description: "Speedboat ride and active water sports at Elephant Beach."
      },
      {
        day: 3,
        title: "Radhanagar Sunset & Relaxation",
        description: "Unwind at Beach No. 7 with beach loungers and tropical fresh coconut water."
      },
      {
        day: 4,
        title: "Neil Island Day Trip",
        description: "Day ferry excursion to Neil Island visiting Bharatpur & Natural Bridge."
      },
      {
        day: 5,
        title: "Kalopathar Beach & Local Cuisine",
        description: "Visit eastern shores of Havelock and dine at Golden Pebble restaurant."
      },
      {
        day: 6,
        title: "Island Leisure & Souvenir Shopping",
        description: "Free day for village walks, cycling, or diving."
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast and departure transfer."
      }
    ]
  }
];
