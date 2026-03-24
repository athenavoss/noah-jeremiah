import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export const metadata: Metadata = {
  title: "NOAH JEREMIAH — Hollywood. Handmade.",
  description: "Luxury clothing and accessories. Made in the USA. Made by hand. Made once.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%232A2A28'/><text x='16' y='22' font-family='serif' font-size='16' font-weight='500' fill='%23C5A572' text-anchor='middle'>NJ</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="bg-[#EDEBE8] text-[#2A2A28]">{children}</body>
    </html>
  );
}
