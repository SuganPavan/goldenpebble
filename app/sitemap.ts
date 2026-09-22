import { MetadataRoute } from "next";
import { ROOMS } from "@/lib/data/rooms";
import { PACKAGES } from "@/lib/data/packages";
import { LOCATIONS } from "@/lib/data/locations";
import { ACTIVITIES } from "@/lib/data/activities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldenpebble.co.in";

  const staticRoutes = [
    "",
    "/about",
    "/rooms",
    "/packages",
    "/nearby-locations",
    "/activities",
    "/restaurant",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const roomRoutes = ROOMS.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const packageRoutes = PACKAGES.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  const locationRoutes = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/nearby-locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const activityRoutes = ACTIVITIES.map((act) => ({
    url: `${baseUrl}/activities/${act.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...roomRoutes,
    ...packageRoutes,
    ...locationRoutes,
    ...activityRoutes
  ];
}
