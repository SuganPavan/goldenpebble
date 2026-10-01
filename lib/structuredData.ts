import { HOTEL_INFO } from "./data/hotel";
import { ROOMS } from "./data/rooms";

export function generateHotelSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || HOTEL_INFO.contact.website;

  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${baseUrl}/#hotel`,
    "name": HOTEL_INFO.name,
    "description": `${HOTEL_INFO.name} offers boutique accommodations in Havelock Island (Swaraj Dweep), Andaman & Nicobar Islands, featuring air-conditioned rooms, in-house dining, and guest hospitality.`,
    "url": baseUrl,
    "telephone": HOTEL_INFO.contact.phone,
    "email": HOTEL_INFO.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Govind Nagar / Beach No. 3 Area",
      "addressLocality": "Havelock Island (Swaraj Dweep)",
      "addressRegion": "Andaman & Nicobar Islands",
      "postalCode": "744211",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.0003,
      "longitude": 92.9818
    },
    "priceRange": "₹5,774 - ₹6,824",
    "image": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "checkinTime": "12:00",
    "checkoutTime": "09:00",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Complimentary Breakfast",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Restaurant",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Wi-Fi",
        "value": true
      }
    ],
    "containsPlace": ROOMS.map((room) => ({
      "@type": "HotelRoom",
      "name": room.name,
      "description": room.shortDescription,
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 3
      },
      "offers": {
        "@type": "Offer",
        "price": room.seasonRate.rackRate.replace(/[^\d]/g, ""),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }))
  };
}

export function generateRestaurantSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || HOTEL_INFO.contact.website;

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${baseUrl}/restaurant/#restaurant`,
    "name": `${HOTEL_INFO.name} Restaurant`,
    "description": HOTEL_INFO.dining.description,
    "servesCuisine": ["Indian", "Seafood", "Continental", "Asian"],
    "telephone": HOTEL_INFO.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Havelock Island",
      "addressRegion": "Andaman & Nicobar Islands",
      "addressCountry": "IN"
    },
    "priceRange": "₹750 - ₹1500 per meal",
    "seatingCapacity": 30
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || HOTEL_INFO.contact.website;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": it.name,
      "item": it.item.startsWith("http") ? it.item : `${baseUrl}${it.item}`
    }))
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
