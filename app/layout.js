import "./globals.css";
import Analytics from "@/components/Analytics";
import { MERCHANT_ORIGIN } from "@/lib/affiliate";
import { SITE, OG_IMAGE } from "@/lib/site";

// Favicon files live in public/ and are linked by absolute URL on the spoke deployment, so they
// load no matter which public path the Hub proxy uses.
const ICON_BASE = `${SITE.spokeOrigin}${SITE.subpath}`;

export const metadata = {
  icons: {
    icon: [
      { url: `${ICON_BASE}/favicon.ico`, sizes: "any" },
      { url: `${ICON_BASE}/favicon-32.png`, type: "image/png", sizes: "32x32" },
      { url: `${ICON_BASE}/favicon-192.png`, type: "image/png", sizes: "192x192" },
    ],
    shortcut: `${ICON_BASE}/favicon.ico`,
    apple: [{ url: `${ICON_BASE}/apple-touch-icon.png`, sizes: "180x180" }],
  },
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
