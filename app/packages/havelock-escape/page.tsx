import { notFound } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import PackageDetailTemplate from "@/components/PackageDetailTemplate";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Havelock Escape – 4 Nights 5 Days Package | Golden Pebble",
  description: "A relaxed 5-day island getaway focused on Port Blair and Havelock, with Radhanagar Beach and Elephant Beach forming the centre of the experience.",
  path: "/packages/havelock-escape"
});

export default function HavelockEscapePage() {
  const pkg = PACKAGES.find((p) => p.slug === "havelock-escape");

  if (!pkg) {
    notFound();
  }

  return <PackageDetailTemplate pkg={pkg} />;
}
