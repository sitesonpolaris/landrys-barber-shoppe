import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { BUSINESS, SITE_URL } from "@/lib/site";
import "./globals.css";

const gloock = localFont({
  src: "../fonts/gloock.woff2",
  weight: "400",
  variable: "--font-gloock",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const archivo = localFont({
  src: "../fonts/archivo.woff2",
  weight: "400 700",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const TITLE = "Landry’s Barber Shoppe | Family Barber Shop in Gastonia, NC";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: BUSINESS.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: BUSINESS.name,
    title: TITLE,
    description: BUSINESS.description,
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Landry’s Barber Shoppe, Gastonia NC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: BUSINESS.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  formatDetection: { telephone: true },
  other: { "geo.region": "US-NC", "geo.placename": "Gastonia" },
};

export const viewport: Viewport = {
  themeColor: "#0d1611",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gloock.variable} ${archivo.variable}`}>
      <head>
        <link rel="preload" href="/media/hero-poster-1920.webp" as="image" type="image/webp" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  );
}
