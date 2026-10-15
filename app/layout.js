import "./globals.css";
import Analytics from "@/components/Analytics";
import { MERCHANT_ORIGIN } from "@/lib/affiliate";
import { SITE, OG_IMAGE } from "@/lib/site";

// Favicon and apple icon come from app/favicon.ico, app/icon.png and app/apple-icon.png
// (file-based metadata, which Next.js prefixes with basePath automatically).
export const metadata = {
  metadataBase: new URL(SITE.origin),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.baseUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: "TESWAY X7 AWD dual-motor electric bike" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0f172a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: SITE.name, url: SITE.origin, email: SITE.email },
    { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={MERCHANT_ORIGIN} />
        <link rel="dns-prefetch" href={MERCHANT_ORIGIN} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
