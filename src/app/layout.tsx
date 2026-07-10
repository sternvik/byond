import type { Metadata } from "next";
import {Plus_Jakarta_Sans, DM_Mono, Crimson_Pro} from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans" 
});

const dmMono = DM_Mono({ 
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono" 
});

const crimsonPro = Crimson_Pro({ 
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: "BYOND | Building Athlete Brands",
  description: "Beyond the Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmMono.variable} ${crimsonPro.variable}`}>
      <body>{children}</body>
    </html>
  );
}