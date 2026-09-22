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
      "Full safety briefing and equipment provided"
    ],
    includedEquipment: ["Wetsuit", "Mask & Snorkel", "BCA Vest", "Regulator", "Fins"],
    safetyInfo: "Medical questionnaire required before diving. Flying or high altitude travel restricted for 18 hours after dive."
  },
  {
    id: "snorkeling",
    slug: "snorkeling",
    name: "Snorkeling",
    subtitle: "Swim Alongside Marine Life in Shallow Reefs",
    category: "Water Sport",
    duration: "1 - 2 Hours",
    suitability: "All Age Groups & Families",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
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
    id: "beach-walks-sunsets",
    slug: "beach-walks-sunsets",
    name: "Beach Walks & Sunset Watching",
    subtitle: "Unwind at Radhanagar & Kalopathar Beaches",
    category: "Leisure",
    duration: "Flexible",
    suitability: "All Guests",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
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
