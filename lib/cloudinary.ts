import cloudinaryMapping from "./cloudinary_mapping.json";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dj3hvn4ja";
const BASE_CDN_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Returns the Cloudinary CDN URL for any local public asset path.
 * Example: getCloudinaryUrl("https://res.cloudinary.com/dj3hvn4ja/image/upload/v1727768400/golden-pebble/images/golden-pebble-property.jpg")
 * -> "https://res.cloudinary.com/dj3hvn4ja/image/upload/v.../golden-pebble/images/golden-pebble-property.jpg"
 */
export function getCloudinaryUrl(src: string): string {
  if (!src) return "";

  // If already a full URL (Unsplash, external HTTP, or existing Cloudinary URL), return directly
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // Check mapping dictionary
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  const mappedUrl = (cloudinaryMapping as Record<string, string>)[normalizedSrc];

  if (mappedUrl) {
    return mappedUrl;
  }

  // Fallback dynamic Cloudinary URL construction
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
  const resourceType = isVideo ? "video" : "image";
  const cleanPath = normalizedSrc.replace(/^\//, "");
  
  return `${BASE_CDN_URL}/${resourceType}/upload/golden-pebble/${cleanPath}`;
}
