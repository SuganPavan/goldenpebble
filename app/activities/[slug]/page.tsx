import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import BookingCTA from "@/components/BookingCTA";
import { ACTIVITIES } from "@/lib/data/activities";
import { constructMetadata } from "@/lib/seo";
import { Clock, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";

interface ActivityDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACTIVITIES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ActivityDetailPageProps) {
  const resolvedParams = await params;
  const activity = ACTIVITIES.find((a) => a.slug === resolvedParams.slug);
  if (!activity) return {};

  return constructMetadata({
    title: `${activity.name} in Havelock Island | Golden Pebble`,
    description: `${activity.description} Duration: ${activity.duration}. Suitable for: ${activity.suitability}.`,
    path: `/activities/${activity.slug}`
  });
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const resolvedParams = await params;
  const activity = ACTIVITIES.find((a) => a.slug === resolvedParams.slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="bg-[#F8F6EF]">
      {/* Header Banner */}
      <div className="relative text-white pt-32 sm:pt-36 pb-14 sm:pb-16 overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Experiences", href: "/activities" },
              { label: activity.name }
            ]}
          />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-3">
            {activity.name}
          </h1>
          <p className="text-sm text-[#E8DCC5] font-light mt-2">{activity.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm text-xs text-[#063F3C]">
              <div className="flex flex-col items-center text-center">
                <Clock className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{activity.duration}</span>
                <span className="text-[10px] text-[#1C2A28]/60">Activity Duration</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-5 h-5 text-[#C9A66B] mb-1" />
                <span className="font-bold">{activity.suitability}</span>
                <span className="text-[10px] text-[#1C2A28]/60">Target Group</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#063F3C]">
                Activity Description
              </h2>
              <p className="text-sm text-[#1C2A28]/80 font-light leading-relaxed">
                {activity.description}
              </p>

              <h3 className="font-serif text-xl font-bold text-[#063F3C] pt-4 border-t border-[#E8DCC5]/60">
                Highlights & Session Details
              </h3>
              <div className="space-y-2 pt-1">
                {activity.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#063F3C]">
                    <CheckCircle2 className="w-4 h-4 text-[#E98268] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {activity.safetyInfo && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2 mt-4">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Safety & Health Note:</span>
                    <span>{activity.safetyInfo}</span>
                  </div>
                </div>
              )}
            </div>
            {/* What's Included & What to Bring */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#063F3C] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A66B]" />
                  <span>Activity Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#1C2A28]/80 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E98268] shrink-0" />
                    <span>Certified Instructor & Guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E98268] shrink-0" />
                    <span>Full Gear & Safety Equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E98268] shrink-0" />
                    <span>Underwater Photo & Video Transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E98268] shrink-0" />
                    <span>Boat Pick & Drop to Dive Site</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8DCC5] shadow-sm space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#063F3C] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A66B]" />
                  <span>What to Bring</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#1C2A28]/80 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#063F3C] shrink-0" />
                    <span>Comfortable Swimwear / Rashguard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#063F3C] shrink-0" />
                    <span>Personal Towel & Spare Dry Clothes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#063F3C] shrink-0" />
                    <span>Valid Govt Photo ID (Aadhaar / Passport)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#063F3C] shrink-0" />
                    <span>Sunscreen & Waterproof Pouch</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience FAQs */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#063F3C]">
                Frequently Asked Questions ({activity.name})
              </h3>
              <div className="space-y-3 text-xs text-[#1C2A28]/80 font-light">
                <div className="p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <span className="font-bold text-[#063F3C] block mb-1">Q: Do I need swimming skills for this activity?</span>
                  <span>Non-swimmers can comfortably participate under 1-on-1 certified instructor supervision.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <span className="font-bold text-[#063F3C] block mb-1">Q: Are underwater photos and videos provided?</span>
                  <span>Yes, digital photos and video clips are taken by your instructor and transferred to your phone.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8F6EF] border border-[#E8DCC5]/60">
                  <span className="font-bold text-[#063F3C] block mb-1">Q: What is the age requirement?</span>
                  <span>Participants aged 10 years and above are eligible for introductory dives and sea walks.</span>
                </div>
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
