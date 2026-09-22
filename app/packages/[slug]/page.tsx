import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import BookingCTA from "@/components/BookingCTA";
import { PACKAGES } from "@/lib/data/packages";
import { constructMetadata } from "@/lib/seo";
import { Check, X, Clock, Tag } from "lucide-react";

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
    title: `${pkg.name} (${pkg.duration}) Package Details`,
    description: `${pkg.shortDescription} Starting from ${pkg.startingPrice} ${pkg.priceBasis}. Includes stay at Golden Pebble, breakfast, and transfers.`,
    path: `/packages/${pkg.slug}`
  });
}

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const resolvedParams = await params;
  const pkg = PACKAGES.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-14 sm:pb-16 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Packages", href: "/packages" },
              { label: pkg.name }
            ]}
          />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-3">
            {pkg.name}
          </h1>
          <div className="flex items-center gap-4 mt-2 text-xs text-[#E8DCC5] font-light">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C9A66B]" />
              {pkg.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-[#C9A66B]" />
              {pkg.startingPrice} / {pkg.priceBasis}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Package Overview
              </h2>
              <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DCC5] shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#063F3C] mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#063F3C]" />
                  What&apos;s Included
                </h3>
                <ul className="space-y-2 text-xs text-[#1C2A28]/80 font-light">
                  {pkg.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#063F3C] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DCC5] shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#063F3C] mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-[#E98268]" />
                  What&apos;s Excluded
                </h3>
                <ul className="space-y-2 text-xs text-[#1C2A28]/80 font-light">
                  {pkg.exclusions.map((exc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-[#E98268] shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#063F3C]">
                Day-by-Day Itinerary Highlights
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E8DCC5]">
                {pkg.itinerary.map((item) => (
                  <div key={item.day} className="relative pl-9">
                    <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-[#063F3C] text-white text-xs font-bold flex items-center justify-center">
                      D{item.day}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#063F3C]">{item.title}</h4>
                    <p className="text-xs text-[#1C2A28]/80 font-light leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <EnquiryForm
                defaultPackageName={pkg.name}
                defaultEnquiryType="Package enquiry"
              />
            </div>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
