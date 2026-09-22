import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Hotel Golden Pebble Havelock",
  description: "Read the official privacy policy for Hotel Golden Pebble, Havelock Island."
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8F6EF]">
      <div className="relative text-white pt-32 sm:pt-36 pb-12 sm:pb-14 overflow-hidden">
        <Image
          src="/images/golden-pebble-property.jpg"
          alt="Golden Pebble Property"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#E8DCC5] font-light mt-1">
            Last Updated: March 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8DCC5] shadow-sm space-y-6 text-sm text-[#1C2A28]/80 font-light leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">1. Data Collection & Purpose</h2>
          <p>
            Hotel Golden Pebble respects your privacy. When you fill out an enquiry or reservation form on our website, we collect personal information including your full name, email address, phone number, check-in/check-out dates, and special requests. This data is used solely to confirm room availability, communicate booking status, and fulfill hospitality services.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">2. Government Registration Requirements</h2>
          <p>
            In compliance with Government of India regulations and Andaman & Nicobar Administration policies, all guests must present valid photo identification (Aadhaar, Passport, Voter ID) upon check-in. Foreign Nationals and NRIs must additionally provide Passport, Visa, and Restricted Area Permits (RAP) where applicable.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">3. Data Sharing & Security</h2>
          <p>
            We do not sell, rent, or trade guest personal information to third parties. Data is stored securely and accessed only by authorized hotel reservation personnel.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#063F3C]">4. Contact Us</h2>
          <p>
            If you have questions regarding our privacy practices, please contact us at booking@goldenpebble.co.in or call +91 9434288856.
          </p>
        </div>
      </div>
    </div>
  );
}
