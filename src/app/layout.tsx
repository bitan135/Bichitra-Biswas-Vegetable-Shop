import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const notoBengali = Noto_Sans_Bengali({ subsets: ["bengali"], variable: "--font-noto-bengali" });

export const metadata: Metadata = {
  title: "Bichitra Biswas Vegetable Shop — Fresh Vegetables Krishnanagar Since 1990",
  description: "Trusted vegetable supplier in Krishnanagar since 1990. Fresh vegetables sourced from Sealdah market and farmers across Nadia. Supplying hotels, restaurants, schools, hospitals, caterers and events. Call +91 9732711025",
  keywords: "vegetable shop Krishnanagar, fresh vegetables Nadia, wholesale vegetables West Bengal, vegetable supplier Krishnanagar, Bichitra Biswas vegetables, sabji Krishnanagar",
  openGraph: {
    title: "Bichitra Biswas Vegetable Shop — Krishnanagar",
    description: "Fresh vegetables since 1990. Supplying hotels, restaurants, schools, hospitals and events across Krishnanagar and Nadia.",
    url: "https://bichitra-biswas-vegetable-shop.vercel.app",
    type: "website",
  },
  alternates: {
    canonical: "https://bichitra-biswas-vegetable-shop.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bichitra Biswas Vegetable Shop",
    "description": "Fresh vegetable supplier in Krishnanagar since 1990",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Patra Bazar, M.M. Ghosh Street",
      "addressLocality": "Krishnanagar",
      "addressRegion": "West Bengal",
      "postalCode": "741101",
      "addressCountry": "IN"
    },
    "telephone": "+919732711025",
    "openingHours": "Mo-Su 06:00-15:00",
    "url": "https://bichitra-biswas-vegetable-shop.vercel.app",
    "foundingDate": "1990",
    "priceRange": "₹"
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${notoBengali.variable}`}>
      <body className="font-sans antialiased text-cream bg-dark">
        <div className="global-grain"></div>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
