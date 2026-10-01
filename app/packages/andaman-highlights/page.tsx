import { notFound } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import PackageDetailTemplate from "@/components/PackageDetailTemplate";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Andaman Highlights – 4 Nights 5 Days Package | Golden Pebble",
  description: "Experience the essential Andaman attractions with a balanced 5-day itinerary covering Port Blair, Havelock and Neil Island.",
  path: "/packages/andaman-highlights"
});

export default function AndamanHighlightsPage() {
  const pkg = PACKAGES.find((p) => p.slug === "andaman-highlights");

  if (!pkg) {
    notFound();
  }

  return <PackageDetailTemplate pkg={pkg} />;
}
