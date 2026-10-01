import { notFound } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import PackageDetailTemplate from "@/components/PackageDetailTemplate";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Island Explorer – 4 Nights 5 Days Andaman Package | Golden Pebble",
  description: "Discover the best of the Andaman Islands through a carefully planned five-day journey covering beaches, island transfers, sightseeing and coastal experiences.",
  path: "/packages/island-explorer"
});

export default function IslandExplorerPage() {
  const pkg = PACKAGES.find((p) => p.slug === "island-explorer");

  if (!pkg) {
    notFound();
  }

  return <PackageDetailTemplate pkg={pkg} />;
}
