export interface Location {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  distance: string;
  travelTime: string;
  transportMode: string;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "radhanagar-beach",
    slug: "radhanagar-beach",
    name: "Radhanagar Beach (Beach No. 7)",
    subtitle: "Voted Asia's Best Beach by TIME Magazine",
    distance: "10 km",
    travelTime: "20 mins",
    transportMode: "Cab / Scooter / Auto",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Famous worldwide for its soft white sand, calm turquoise waters, and breathtaking sunset views.",
    description: "Radhanagar Beach, designated as Beach No. 7, is Havelock Island's crowning jewel. Spanning 2 kilometers of soft white coral sand framed by lush mahua trees, its shallow clear waters are ideal for swimming. Watching the golden sun dip below the horizon here is an unforgettable Andaman experience.",
    highlights: [
      "Powdery white sand shoreline extending 2 km",
      "Safe, gentle sea waves ideal for swimming",
      "Stunning sunset photography opportunities",
      "Eco-friendly changing facilities and lifeguard posts"
    ],
    bestTimeToVisit: "03:30 PM – 06:00 PM (for sunset)"
  },
  {
    id: "elephant-beach",
    slug: "elephant-beach",
    name: "Elephant Beach",
    subtitle: "Havelock's Hub for Coral Reefs & Water Sports",
    distance: "8 km",
    travelTime: "15 mins (Jetty) + 20 mins (Speedboat)",
    transportMode: "Speedboat from Jetty or Jungle Trek",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Vibrant coral reef sanctuary popular for snorkeling, sea walking, scuba diving, and parasailing.",
    description: "Elephant Beach is renowned for its lively reef ecosystems situated right near the shore. Visitors arrive via a scenic 20-minute speedboat ride from Havelock Jetty or a 2-km guided forest trek. It is the premier destination on the island for aquatic adventures including snorkeling, underwater sea walk, glass-bottom boat rides, and banana boat rides.",
    highlights: [
      "Shallow coral reefs packed with colorful clownfish and parrotfish",
      "Undersea Walking & Scuba Diving facilities",
      "Exciting parasailing and jet ski rides",
      "Lush jungle backdrop bordering white sands"
    ],
    bestTimeToVisit: "08:00 AM – 01:00 PM (Speedboats operate morning only)"
  },
  {
    id: "kalopathar-beach",
    slug: "kalopathar-beach",
    name: "Kalopathar Beach",
    subtitle: "Serene Shoreline of Black Rocks & Blue Waters",
    distance: "6.5 km",
    travelTime: "12 mins",
    transportMode: "Cab / Scooter / Auto",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A picturesque beach named after its dramatic black rocks contrasting with deep azure ocean waters.",
    description: "Located on the south-eastern coast of Havelock Island, Kalopathar Beach gets its name from the distinctive black boulders scattered along the white sand coast. Lined with dense green forest and palm trees, it offers a quieter, highly romantic setting ideal for morning walks, peaceful reading, and sunrise photography.",
    highlights: [
      "Unique contrast of black volcanic rocks against turquoise sea",
      "Peaceful atmosphere away from heavy tourist crowds",
      "Great morning sunrise views and fresh coconut stalls",
      "Shaded hammocks and wooden benches along the forest edge"
    ],
    bestTimeToVisit: "05:30 AM – 09:00 AM (for sunrise) or early afternoon"
  },
  {
    id: "govind-nagar-beach",
    slug: "govind-nagar-beach",
    name: "Govind Nagar Beach (Beach No. 3)",
    subtitle: "Tranquil Local Beach Near Golden Pebble",
    distance: "1.5 km",
    travelTime: "4 mins",
    transportMode: "Walking / Scooter",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Conveniently close to the hotel, featuring calm waters, diving schools, and peaceful evening walks.",
    description: "Govind Nagar Beach, located just a short distance from Hotel Golden Pebble, is Beach No. 3. It serves as the primary base for several renowned scuba dive centers due to the famous Nemo Reef located just offshore. The beach features gentle shallow waters perfect for evening strolls and dipping your feet.",
    highlights: [
      "Just 1.5 km (4 mins) from Hotel Golden Pebble",
      "Home to Nemo Reef dive site",
      "Shallow, calm waters ideal for relaxing walks",
      "Proximity to local market and seafood cafes"
    ],
    bestTimeToVisit: "Anytime during daylight hours"
  },
  {
    id: "neil-island",
    slug: "neil-island",
    name: "Neil Island (Shaheed Dweep)",
    subtitle: "Neighboring Island of Coral Bridges & Organic Farming",
    distance: "30 km",
    travelTime: "75 mins by Ferry",
    transportMode: "Inter-Island Private / Govt Ferry",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A tranquil neighbor island famous for Bharatpur Beach, Laxmanpur Beach, and the Natural Coral Bridge.",
    description: "Neil Island (Shaheed Dweep) is a tiny, laid-back island located south of Havelock. Known as the vegetable bowl of the Andamans, it features flat terrain, serene rural charm, natural rock formations like the Howrah Natural Bridge, and clear reef beaches at Bharatpur and Laxmanpur.",
    highlights: [
      "Natural Coral Bridge formation at Laxmanpur Beach No. 2",
      "Clear glass-bottom boat coral tours at Bharatpur Beach",
      "Spectacular sunset points at Laxmanpur Beach No. 1",
      "Relaxed, slow-paced island vibe"
    ],
    bestTimeToVisit: "Full day trip via morning ferry from Havelock"
  }
];
