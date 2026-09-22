import { Metadata } from "next";
import { HOTEL_INFO } from "./data/hotel";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

const DEFAULT_KEYWORDS = [
  "Golden Pebble Havelock",
  "Hotel Golden Pebble Andaman",
  "Havelock Island Hotels",
  "Budget Luxury Hotels Havelock",
  "Swaraj Dweep Accommodation",
  "Best Hotel in Havelock Island",
  "Golden Pebble Rates",
  "Deluxe Room Havelock",
  "Radhanagar Beach Hotels",
  "Andaman Resort Booking"
];

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  keywords = []
}: PageSeoProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || HOTEL_INFO.contact.website;
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title} | ${HOTEL_INFO.name}, Havelock Island`;

  return {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    authors: [{ name: HOTEL_INFO.name }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: HOTEL_INFO.name,
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${baseUrl}${image}`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}
