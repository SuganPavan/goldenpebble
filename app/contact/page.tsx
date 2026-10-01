import ContactPageAnimated from "@/components/ContactPageAnimated";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Reservations | Hotel Golden Pebble Havelock",
  description: "Contact Soni at Hotel Golden Pebble reservations. Phone & WhatsApp: +91 9434288856, Email: booking@goldenpebble.co.in. Reservation hours: 09:30 AM – 06:30 PM."
});

export default function ContactPage() {
  return <ContactPageAnimated />;
}
