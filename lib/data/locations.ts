export interface Location {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "Beaches & Coastal Attractions" | "Island Points of Interest" | "Nearby Island Destination";
  island: string;
  locationArea: string;
  image: string;
  images: string[];
  altText: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  accessibilityNote: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "govind-nagar-beach",
    slug: "govind-nagar-beach",
    name: "Govind Nagar Beach (Beach No. 3)",
    subtitle: "Calm Local Coastal Stretch in Govind Nagar",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "Govind Nagar, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838903/golden-pebble/images/nearby_location/Govind_Nagar_Beach_1.png",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838903/golden-pebble/images/nearby_location/Govind_Nagar_Beach_1.png",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838909/golden-pebble/images/nearby_location/Govind_Nagar_Beach_2.jpg"
    ],
    altText: "Govind Nagar Beach Beach No. 3 in Havelock Island Swaraj Dweep",
    shortDescription: "Situated in Govind Nagar, this quiet beach stretch features shallow waters, coastal cafes, and local scuba diving centers.",
    description: "Govind Nagar Beach (Beach No. 3) is situated along the main hub of Govind Nagar on Swaraj Dweep (Havelock Island). Hotel Golden Pebble is located in Govind Nagar, making Beach No. 3 a very accessible local coastal area for guests. Known for its calm shallow waters and proximity to dive centers conducting training near Nemo Reef, it offers a peaceful atmosphere for morning walks and seaside dining.",
    highlights: [
      "Located in Govind Nagar near local market and seaside cafes",
      "Calm, shallow coastal waters ideal for morning strolls",
      "Popular departure point for coastal dive centers and boat excursions",
      "Relaxed local beach vibe away from heavy commercial crowds"
    ],
    bestTimeToVisit: "Early morning or late afternoon for coastal walks",
    accessibilityNote: "Located in the Govind Nagar area of Swaraj Dweep (Havelock Island)."
  },
  {
    id: "vijaynagar-beach",
    slug: "vijaynagar-beach",
    name: "Vijaynagar Beach (Beach No. 5)",
    subtitle: "Shaded Shoreline Lined with Mahua and Palm Trees",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "Eastern Coast, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838937/golden-pebble/images/nearby_location/Vijaynagar_Beach_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838937/golden-pebble/images/nearby_location/Vijaynagar_Beach_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838938/golden-pebble/images/nearby_location/Vijaynagar_Beach_2.jpg"
    ],
    altText: "Vijaynagar Beach Beach No. 5 in Swaraj Dweep Havelock Island",
    shortDescription: "A serene eastern shoreline famous for fringing coral reefs, turquoise shallow waters, and lush mahua trees.",
    description: "Vijaynagar Beach, designated as Beach No. 5, stretches along the eastern coast of Swaraj Dweep (Havelock Island). The shoreline is defined by massive mahua and coconut trees dipping towards clear turquoise waters. Its shallow tide allows visitors to wade far out into calm ocean waters during low tide, making it a peaceful spot for relaxation.",
    highlights: [
      "Lush coastal tree cover offering natural shade along white sand",
      "Shallow water conditions during low tide, perfect for wading",
      "Quiet eastern shoreline suitable for morning sunrise views",
      "Clear sea views looking across the Bay of Bengal"
    ],
    bestTimeToVisit: "Sunrise and morning hours for calm waters",
    accessibilityNote: "Situated on the eastern coast of Swaraj Dweep (Havelock Island)."
  },
  {
    id: "radhanagar-beach",
    slug: "radhanagar-beach",
    name: "Radhanagar Beach (Beach No. 7)",
    subtitle: "World-Renowned White Sand Shoreline & Golden Sunsets",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "Western Coast, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838932/golden-pebble/images/nearby_location/Radhanagar_Beach_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838932/golden-pebble/images/nearby_location/Radhanagar_Beach_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838933/golden-pebble/images/nearby_location/Radhanagar_Beach_2.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838934/golden-pebble/images/nearby_location/Rathanagar_beach.jpg"
    ],
    altText: "Radhanagar Beach Beach No. 7 in Swaraj Dweep Havelock Island",
    shortDescription: "Famous internationally for soft white coral sand, expansive tropical foliage, and panoramic sunset vistas.",
    description: "Radhanagar Beach (Beach No. 7) is Swaraj Dweep's most iconic natural attraction. Located on the western coast of Havelock Island, it features a broad 2-kilometer expanse of fine white coral sand bordered by dense tropical rainforest. The beach is widely celebrated for its clean shoreline, gentle waves, and memorable sunset views across the open sea.",
    highlights: [
      "Expansive 2 km white sand beach backed by tropical forest",
      "Designated lifeguard zones for safe coastal swimming",
      "Spectacular sunset vistas over the western horizon",
      "Eco-certified beach amenities and changing facilities"
    ],
    bestTimeToVisit: "3:30 PM – 6:00 PM for sunset viewing",
    accessibilityNote: "Located on the western side of Swaraj Dweep (Havelock Island)."
  },
  {
    id: "elephant-beach",
    slug: "elephant-beach",
    name: "Elephant Beach",
    subtitle: "Reef Marine Sanctuary & Water Activity Hub",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "North-Western Coast, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838895/golden-pebble/images/nearby_location/Elephant_Beach_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838895/golden-pebble/images/nearby_location/Elephant_Beach_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838896/golden-pebble/images/nearby_location/Elephant_Beach_2.jpg"
    ],
    altText: "Elephant Beach marine reef and water sports in Swaraj Dweep Havelock Island",
    shortDescription: "A popular coastal site known for shallow coral reefs, snorkeling, sea walks, and water sports.",
    description: "Elephant Beach is a major hub for marine water sports on Swaraj Dweep (Havelock Island). Located along the north-western coast, the area features shallow coral beds close to shore, making it a focal point for snorkeling excursions, undersea walks, glass-bottom boat rides, and parasailing.",
    highlights: [
      "Shallow reef systems teeming with tropical fish species",
      "Primary location for sea walking and snorkeling activities",
      "Clear waters surrounded by coastal jungle and white sand",
      "Accessible via localized boat services or trekking trails"
    ],
    bestTimeToVisit: "Morning hours (8:00 AM – 1:00 PM)",
    accessibilityNote: "Situated on the northern coastline of Swaraj Dweep (Havelock Island)."
  },
  {
    id: "kalopathar-beach",
    slug: "kalopathar-beach",
    name: "Kalopathar Beach",
    subtitle: "Distinctive Black Rocks & Deep Turquoise Waters",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "South-Eastern Coast, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838912/golden-pebble/images/nearby_location/Kalapathar_Beach_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838912/golden-pebble/images/nearby_location/Kalapathar_Beach_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838912/golden-pebble/images/nearby_location/Kalapathar_Beach_2.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838913/golden-pebble/images/nearby_location/Kalapathar_Beach_3.jpg"
    ],
    altText: "Kalopathar Beach black rocks in Swaraj Dweep Havelock Island",
    shortDescription: "Named after black boulders scattered along white sands contrasting with deep blue ocean waters.",
    description: "Kalopathar Beach is situated on the south-eastern coast of Swaraj Dweep (Havelock Island). Taking its name from the large black rocks lining the shoreline, this beach offers a scenic contrast of dark stone, pale sand, and deep blue water. It provides a peaceful setting for morning sightseeing, fresh coconut stalls, and coastal photography.",
    highlights: [
      "Unique landscape featuring black rocks along white sandy shores",
      "Quiet, picturesque setting ideal for morning walks",
      "Panoramic views of the open ocean and coastal forest",
      "Local fruit and tender coconut vendors along the beach road"
    ],
    bestTimeToVisit: "Early morning for sunrise or calm daytime visits",
    accessibilityNote: "Located along the south-eastern road of Swaraj Dweep (Havelock Island)."
  },
  {
    id: "nemo-beach-reef",
    slug: "nemo-beach-reef",
    name: "Nemo Beach / Nemo Reef",
    subtitle: "Shallow Coral Haven for Scuba Diving & Snorkeling",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "Govind Nagar Coast, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838929/golden-pebble/images/nearby_location/Nemo_Beach_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838929/golden-pebble/images/nearby_location/Nemo_Beach_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838930/golden-pebble/images/nearby_location/Nemo_Beach_2.jpg"
    ],
    altText: "Nemo Reef scuba diving and coral reef in Govind Nagar Havelock Island",
    shortDescription: "A famous shallow coral reef near Govind Nagar frequented for beginner scuba dives and reef observation.",
    description: "Nemo Reef, located offshore near Govind Nagar Beach on Swaraj Dweep (Havelock Island), is one of the island's most well-known shallow dive sites. Named for its population of anemonefish (Nemo), the reef features calm conditions and shallow coral formations, making it a preferred location for certified dive master sessions and Discover Scuba Diving.",
    highlights: [
      "Shallow coral formations ideal for beginner scuba training",
      "Abundant sea anemones, clownfish, and marine biodiversity",
      "Calm, sheltered marine conditions close to Govind Nagar",
      "Frequent site for introductory underwater photo sessions"
    ],
    bestTimeToVisit: "Morning dive and snorkel sessions",
    accessibilityNote: "Located offshore along the Govind Nagar coastal stretch of Swaraj Dweep."
  },
  {
    id: "neils-cove",
    slug: "neils-cove",
    name: "Neil's Cove",
    subtitle: "Secluded Lagoon and Rock Formations Near Radhanagar",
    category: "Beaches & Coastal Attractions",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "Northern End of Radhanagar Beach, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838921/golden-pebble/images/nearby_location/Neils_Cove_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838921/golden-pebble/images/nearby_location/Neils_Cove_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838922/golden-pebble/images/nearby_location/Neils_Cove_2.jpg"
    ],
    altText: "Neil's Cove lagoon near Radhanagar Beach in Swaraj Dweep Havelock Island",
    shortDescription: "A sheltered natural cove and tidal inlet located towards the northern side of Radhanagar Beach.",
    description: "Neil's Cove is a tranquil, sheltered lagoon formation located just north of Radhanagar Beach on Swaraj Dweep (Havelock Island). Characterized by rocky tide pools and calm blue inlets, it is a favored spot for scenic photography and nature observation along the western coastline.",
    highlights: [
      "Natural lagoon and rocky inlet formations",
      "Scenic coastal scenery adjacent to Radhanagar Beach",
      "Quiet nature observation point away from main beach crowds",
      "Clear tidal pools during low tide"
    ],
    bestTimeToVisit: "Late afternoon alongside Radhanagar Beach visits",
    accessibilityNote: "Situated at the northern extension of Radhanagar Beach on Swaraj Dweep."
  },
  {
    id: "lighthouse-point",
    slug: "lighthouse-point",
    name: "Lighthouse Point",
    subtitle: "Prominent Coastal Landmark & Marine Navigation Site",
    category: "Island Points of Interest",
    island: "Swaraj Dweep (Havelock Island)",
    locationArea: "Northern Coast, Swaraj Dweep",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838917/golden-pebble/images/nearby_location/Lighthouse_Point_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838917/golden-pebble/images/nearby_location/Lighthouse_Point_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838918/golden-pebble/images/nearby_location/Lighthouse_Point_2.jpg"
    ],
    altText: "Lighthouse Point coastal landmark in Swaraj Dweep Havelock Island",
    shortDescription: "A coastal marine landmark and dive area situated on the northern waters of Swaraj Dweep.",
    description: "Lighthouse Point is a notable coastal landmark situated on the northern reaches of Swaraj Dweep (Havelock Island). Known primarily as a marine navigation beacon and dive location, the surrounding waters feature coral structures and varied underwater topography popular among sea explorers.",
    highlights: [
      "Distinctive coastal landmark along the northern shoreline",
      "Surrounding marine area frequented by licensed dive operators",
      "Panoramic views of northern Swaraj Dweep waters",
      "Interesting underwater rock and coral formations"
    ],
    bestTimeToVisit: "Daytime boat tours or organized marine excursions",
    accessibilityNote: "Located along the northern maritime coast of Swaraj Dweep (Havelock Island)."
  },
  {
    id: "neil-island",
    slug: "neil-island",
    name: "Neil Island (Shaheed Dweep)",
    subtitle: "Separate Island Destination & Day-Trip Spot",
    category: "Nearby Island Destination",
    island: "Shaheed Dweep (Neil Island)",
    locationArea: "Ritchie's Archipelago, Andaman & Nicobar Islands",
    image: "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838924/golden-pebble/images/nearby_location/neil_island_image_1.jpg",
    images: [
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838924/golden-pebble/images/nearby_location/neil_island_image_1.jpg",
      "https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838923/golden-pebble/images/nearby_location/neil_island_2.webp"
    ],
    altText: "Neil Island Shaheed Dweep natural rock bridge in Andaman Islands",
    shortDescription: "A separate neighboring island known for Howrah Natural Bridge, Bharatpur Beach, and Laxmanpur Beach.",
    description: "Neil Island (Shaheed Dweep) is a separate island destination located in the Ritchie's Archipelago, south of Swaraj Dweep (Havelock Island). It is distinct from Havelock and requires inter-island maritime vessel travel to visit. Famous for its relaxed rural atmosphere, natural rock formations like the Howrah Natural Bridge, and coral beaches at Bharatpur and Laxmanpur, Neil Island is commonly visited as a separate day trip or overnight destination.",
    highlights: [
      "Separate island destination accessible by inter-island ferry vessels",
      "Howrah Natural Bridge rock formation at Laxmanpur Beach No. 2",
      "Coral reef glass-bottom boat viewing at Bharatpur Beach",
      "Serene sunset viewpoints at Laxmanpur Beach No. 1"
    ],
    bestTimeToVisit: "Planned day trip or multi-day island tour",
    accessibilityNote: "Separate island destination. Requires inter-island ferry transportation from Swaraj Dweep (Havelock Island) or Port Blair."
  }
];
