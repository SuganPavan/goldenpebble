import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import BookingCTA from "@/components/BookingCTA";
import { LOCATIONS } from "@/lib/data/locations";
import { constructMetadata } from "@/lib/seo";
import { MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react";

interface LocationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: LocationDetailPageProps) {
  const resolvedParams = await params;
  const location = LOCATIONS.find((l) => l.slug === resolvedParams.slug);
  if (!location) return {};

  return constructMetadata({
    title: `${location.name} (${location.distance} from Golden Pebble)`,
    description: `${location.description} Travel time: ${location.travelTime} via ${location.transportMode}.`,
    path: `/nearby-locations/${location.slug}`
  });
}

export default async function LocationDetailPage({ params }: LocationDetailPageProps) {
  const resolvedParams = await params;
  const location = LOCATIONS.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-14 sm:pb-16 overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Nearby Locations", href: "/nearby-locations" },
              { label: location.name }
            ]}
          />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-3">
            {location.name}
          </h1>
          <p className="text-sm text-[#E8DCC5] font-light mt-2">{location.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src={location.image}
                alt={location.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Travel Specs */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm text-xs text-[#063F3C]">
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{location.distance}</span>
                <span className="text-[10px] text-[#1C2A28]/60">From Golden Pebble</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{location.travelTime}</span>
                <span className="text-[10px] text-[#1C2A28]/60">Travel Duration</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Navigation className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{location.transportMode}</span>
                <span className="text-[10px] text-[#1C2A28]/60">Transport Mode</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Destination Guide
              </h2>
              <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                {location.description}
              </p>

              <h3 className="font-serif text-xl font-bold text-[#063F3C] pt-4 border-t border-[#E8DCC5]/60">
                Key Highlights & Experiences
              </h3>
              <div className="space-y-2 pt-1">
                {location.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#063F3C]">
                    <CheckCircle2 className="w-4 h-4 text-[#E98268] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60 text-xs text-[#063F3C] font-medium mt-4">
                <span className="font-bold uppercase tracking-wider block mb-1">Best Time to Visit:</span>
                <span>{location.bestTimeToVisit}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <EnquiryForm defaultEnquiryType="General enquiry" />
            </div>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
