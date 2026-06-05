import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/site/sticky-cta";
import { site } from "@/content/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Techvion: Design, Build & Scale Software",
    template: "%s | Techvion",
  },
  description: site.description,
  keywords: [
    "software development company",
    "web development",
    "Next.js agency",
    "mobile app development",
    "e-commerce development",
    "digital marketing",
    "Kathmandu software company",
    "product studio",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: "/techvion-logo.png",
    shortcut: "/techvion-logo.png",
    apple: "/techvion-logo.png",
  },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title: "Techvion: Design, Build & Scale Software",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Techvion: Design, Build & Scale Software",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: site.legalName,
  alternateName: site.name,
  url: site.domain,
  logo: `${site.domain}/techvion-logo.png`,
  email: site.email,
  telephone: site.phoneDisplay,
  foundingDate: String(site.founded),
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.line,
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  areaServed: "Worldwide",
  sameAs: site.social.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} min-h-dvh overflow-x-hidden bg-background font-sans text-foreground antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
