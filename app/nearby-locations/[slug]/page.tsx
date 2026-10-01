import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import BookingCTA from "@/components/BookingCTA";
import { LOCATIONS } from "@/lib/data/locations";
import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/structuredData";
import { MapPin, Clock, Navigation, CheckCircle2, Info, Sparkles } from "lucide-react";
import AutoImageCarousel from "@/components/AutoImageCarousel";

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
    title: `${location.name} | Swaraj Dweep (Havelock Island)`,
    description: `${location.description} Category: ${location.category}. Located in ${location.locationArea}.`,
    path: `/nearby-locations/${location.slug}`
  });
}

export default async function LocationDetailPage({ params }: LocationDetailPageProps) {
  const resolvedParams = await params;
  const location = LOCATIONS.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Nearby Locations", item: "/nearby-locations" },
    { name: location.name, item: `/nearby-locations/${location.slug}` }
  ]);

  const locationPhotoList = location.images && location.images.length > 0 ? location.images : [location.image];

  return (
    <div className="relative min-h-screen bg-[#F8F6EF]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* FULL-PAGE SPECIFIC LOCATION AMBIENT BACKGROUND BACKDROP */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 filter blur-sm scale-105 transition-all duration-1000">
        <Image
          src={location.image}
          alt={`${location.name} background backdrop`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#F8F6EF]/90 to-[#F8F6EF]" />
      </div>

      {/* Header Banner with Direct Priority Background Image */}
      <div className="relative text-white pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden min-h-[420px] flex items-end">
        <Image
          src={location.image}
          alt={location.altText}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-105 contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pb-4">
          <Breadcrumbs
            items={[
              { label: "Nearby Locations", href: "/nearby-locations" },
              { label: location.name }
            ]}
          />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/50 text-[#E8DCC5] text-[10px] font-sans font-bold tracking-[0.2em] uppercase shadow-sm backdrop-blur-md mt-3 mb-2">
            <Sparkles className="w-3 h-3 text-[#C5A46D]" />
            <span>{location.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal drop-shadow-lg text-white">
            {location.name}
          </h1>
          <p className="text-sm sm:text-base text-[#E8DCC5] font-light mt-2 max-w-2xl leading-relaxed drop-shadow-md">
            {location.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Destination Specific Image Hero Carousel */}
            <div className="rounded-3xl overflow-hidden border border-[#C5A46D]/40 shadow-2xl bg-white p-2">
              <AutoImageCarousel
                images={locationPhotoList}
                altText={location.altText}
                aspectRatioClassName="relative h-80 sm:h-96 lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-md"
                sizes="(max-width: 1024px) 100vw, 60vw"
                intervalMs={3500}
              />
            </div>

            {/* Travel Specs Bar */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8DCC5] shadow-md text-xs text-[#063F3C]">
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold truncate max-w-full">{location.locationArea}</span>
                <span className="text-[10px] text-[#1C2A28]/60 uppercase tracking-wider">Location Area</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Navigation className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold truncate max-w-full">{location.island}</span>
                <span className="text-[10px] text-[#1C2A28]/60 uppercase tracking-wider">Island Region</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold truncate max-w-full">{location.category}</span>
                <span className="text-[10px] text-[#1C2A28]/60 uppercase tracking-wider">Category</span>
              </div>
            </div>

            {/* Destination Guide Card */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E8DCC5] shadow-md space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Destination Guide
              </h2>
              <p className="text-sm text-[#1C2A28]/85 font-light leading-relaxed">
                {location.description}
              </p>

              <h3 className="font-serif text-xl font-bold text-[#063F3C] pt-4 border-t border-[#E8DCC5]/60">
                Key Highlights &amp; Experiences
              </h3>
              <div className="space-y-2.5 pt-1">
                {location.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#063F3C]">
                    <CheckCircle2 className="w-4 h-4 text-[#E98268] shrink-0 mt-0.5" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F6EF] border border-[#E8DCC5] text-xs text-[#063F3C] font-medium mt-4 space-y-2 shadow-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider block mb-0.5 text-[#C9A66B]">
                    Recommended Time to Visit:
                  </span>
                  <span className="text-sm font-semibold">{location.bestTimeToVisit}</span>
                </div>
                <div className="pt-2 border-t border-[#E8DCC5]/60 flex items-start gap-1.5 text-[11px] text-[#4E5C58]">
                  <Info className="w-3.5 h-3.5 text-[#C9A66B] shrink-0 mt-0.5" />
                  <span>{location.accessibilityNote}</span>
                </div>
              </div>
            </div>

            {/* Contextual Internal Links Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#063F3C] via-[#073F3B] to-[#0a4f4b] text-white space-y-4 shadow-xl border border-[#073D37]">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#C5A46D] text-left sm:text-center xl:text-left">
                Explore Swaraj Dweep with Golden Pebble
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F6EF]/90 font-light leading-relaxed text-left sm:text-center xl:text-left">
                Golden Pebble in Govind Nagar serves as a convenient base for exploring attractions across Havelock Island.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 items-center justify-start sm:justify-center xl:justify-start">
                <Link
                  href="/activities"
                  className="px-5 py-2.5 rounded-full bg-[#C5A46D] hover:bg-white text-[#073F3B] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-center"
                >
                  Explore Havelock Experiences
                </Link>
                <Link
                  href="/packages"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 backdrop-blur-md text-center"
                >
                  View Tour Packages
                </Link>
                <Link
                  href="/rooms"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 backdrop-blur-md text-center"
                >
                  Check Room Availability
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Fixed Booking Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 z-30 max-h-[calc(100vh-6.5rem)] overflow-y-auto pr-1">
              <EnquiryForm defaultEnquiryType="General enquiry" />
            </div>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
