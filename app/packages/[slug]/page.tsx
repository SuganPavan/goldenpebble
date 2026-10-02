import { notFound } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import PackageDetailTemplate from "@/components/PackageDetailTemplate";
import { constructMetadata } from "@/lib/seo";

interface PackageDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PackageDetailPageProps) {
  const resolvedParams = await params;
  const pkg = PACKAGES.find((p) => p.slug === resolvedParams.slug);
  if (!pkg) return {};

  return constructMetadata({
    title: `${pkg.name} | ${pkg.duration} | Hotel Golden Pebble`,
    description: `${pkg.name} is a ${pkg.duration} Andaman island itinerary featuring stay at Hotel Golden Pebble in Govind Nagar, Havelock Island (Swaraj Dweep). Contact reservations for current package rates and details.`,
    path: `/packages/${pkg.slug}`
  });
}

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const resolvedParams = await params;
  const pkg = PACKAGES.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailTemplate key={pkg.slug} pkg={pkg} />;
}
