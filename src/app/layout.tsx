import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorTrail from "@/components/ui/CursorTrail";
import { NavigationProvider } from "@/contexts/NavigationContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "TAJ | Software Engineer & Full Stack Developer",
  description:
    "Premium personal portfolio of TAJ — a Software Engineer & Full Stack Developer crafting performant, scalable web applications.",
  keywords: ["portfolio", "developer", "full stack", "next.js", "react"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <CursorTrail />
        <NavigationProvider>
          <SmoothScroll>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />
          </SmoothScroll>
        </NavigationProvider>
      </body>
    </html>
  );
}
