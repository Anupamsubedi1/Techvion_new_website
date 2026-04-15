import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techvion.com"),
  icons: {
    icon: "/techvion-logo.png",
    shortcut: "/techvion-logo.png",
    apple: "/techvion-logo.png",
  },
  title: {
    default: "Techvion — Scalable Digital Solutions",
    template: "%s | Techvion",
  },
  description:
    "Techvion builds modern, scalable web & software solutions with premium UX.",
  openGraph: {
    title: "Techvion",
    description:
      "Modern IT & SaaS solutions. Web development, e-commerce, branding, and more.",
    url: "https://www.techvion.com",
    siteName: "Techvion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techvion",
    description:
      "Modern IT & SaaS solutions. Web development, e-commerce, branding, and more.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-dvh overflow-x-hidden bg-white text-[#022B3A] antialiased`}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
