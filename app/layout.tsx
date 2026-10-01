import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickWhatsAppFab from "@/components/QuickWhatsAppFab";
import InitialPageLoader from "@/components/InitialPageLoader";
import { generateHotelSchema } from "@/lib/structuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Hotel Golden Pebble | Premium Boutique Hotel in Havelock Island",
    template: "%s | Hotel Golden Pebble Havelock"
  },
  description: "Experience luxury island living at Hotel Golden Pebble, Havelock (Swaraj Dweep), Andaman. Offering air-conditioned rooms, delicious dining, curated packages, and personalized hospitality.",
  metadataBase: new URL("https://goldenpebble.co.in"),
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelSchema = generateHotelSchema();

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${caveat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="bg-[#073F3B] text-[#1C2A28] font-sans antialiased selection:bg-[#E98268] selection:text-white">
        <InitialPageLoader />
        <Header />
        <main className="min-h-screen bg-[#F8F6EF]">{children}</main>
        <Footer />
        <QuickWhatsAppFab />
      </body>
    </html>
  );
}
