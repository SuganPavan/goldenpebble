export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  platform: string;
  date: string;
  title: string;
  comment: string;
  roomBooked?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Priya & Rajesh Sharma",
    location: "Bengaluru, India",
    rating: 5,
    platform: "Google Reviews",
    date: "February 2026",
    title: "An unforgettable stay in the heart of paradise!",
    comment: "Hotel Golden Pebble exceeded our expectations. The rooms were spotless, comfortable, and warm with timber acoustics. Soni and the front desk staff arranged all our island transfers seamlessly. The breakfast at the restaurant was delicious and freshly cooked every morning!",
    roomBooked: "Deluxe Room with Balcony"
  },
  {
    id: "review-2",
    name: "Vikram Sengupta",
    location: "Kolkata, India",
    rating: 5,
    platform: "MakeMyTrip",
    date: "January 2026",
    title: "Great value for money & fantastic location",
    comment: "Best value stay in Havelock! Located very close to Govind Nagar beach and main market area. The air-conditioned dining room serves great food, and the transparency in pricing without hidden charges made our trip so stress-free.",
    roomBooked: "Deluxe Room"
  },
  {
    id: "review-3",
    name: "Ananya & Rohan Verma",
    location: "Mumbai, India",
    rating: 5,
    platform: "Booking.com",
    date: "December 2025",
    title: "Peaceful atmosphere & top-notch hospitality",
    comment: "We booked the Honeymoon package with flower bed decoration and celebration cake. The room was beautifully setup upon arrival. The staff is genuinely courteous and helpful with scuba diving arrangements.",
    roomBooked: "Deluxe Room with Balcony"
  },
  {
    id: "review-4",
    name: "David & Sarah Miller",
    location: "London, UK",
    rating: 4,
    platform: "Agoda",
    date: "November 2025",
    title: "Charming boutique hotel with peaceful vibes",
    comment: "Golden Pebble is a cozy property nestled in lush greenery. The bed was extremely comfortable and the hot water shower worked flawlessly. Highly recommended for couples looking for clean, quiet comfort in Swaraj Dweep.",
    roomBooked: "Deluxe Room"
  }
];
