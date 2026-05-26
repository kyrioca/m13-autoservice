import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/lib/config";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `M13 Autoservice Jülich — Premium Fahrzeugpflege, Politur & Versiegelung`,
    template: `%s | M13 Autoservice Jülich`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL("https://m13-autoservice.de"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: "https://m13-autoservice.de",
    title: `M13 Autoservice — Premium Fahrzeugpflege Jülich`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "M13 Autoservice — Premium Fahrzeugpflege in Jülich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `M13 Autoservice — Premium Fahrzeugpflege Jülich`,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  "@id": "https://m13-autoservice.de/#business",
  name: siteConfig.name,
  description: siteConfig.description,
  url: "https://m13-autoservice.de",
  email: siteConfig.contact.email,
  sameAs: [siteConfig.contact.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: siteConfig.contact.city,
    postalCode: siteConfig.contact.zip,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9222,
    longitude: 6.361,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "47",
  },
  priceRange: "€€",
  currenciesAccepted: "EUR",
  areaServed: { "@type": "City", name: "Jülich" },
  hasMap: siteConfig.contact.mapsUrl,
  foundingDate: String(siteConfig.founded),
  knowsAbout: [
    "Fahrzeugaufbereitung", "Handwäsche", "Politur", "Lackversiegelung", "Innenreinigung",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${anton.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="bg-theme text-primary antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
