import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Solarithm Energy Solutions | Powering Tomorrow, Today",
  description: "Solarithm Energy Solutions Private Limited - PM SURYA GHAR PORTAL Registered. Authorized Channel Partner for Adani, Polycab, Waaree, Luminous. Providing residential and commercial solar solutions across Rajasthan.",
  openGraph: {
    title: "Solarithm Energy Solutions",
    description: "Harness the power of the sun with top solar panels in Rajasthan. PM SURYA GHAR PORTAL registered.",
    url: "https://www.solarithmenergy.in",
    siteName: "Solarithm Energy Solutions",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-dark bg-white overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
