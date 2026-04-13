import Head from "next/head";
import JsonLd from "@/components/json-ld";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
}: SEOProps) {
  const fullTitle = title ? `${title} | SHO-SHA LAUNDRY` : "SHO-SHA LAUNDRY | Professional Laundry & Investment";
  const fullDescription = description || "Layanan laundry profesional dengan sistem autopilot. Investasi laundry terpercaya dengan keuntungan maksimal dan ROI teruji 15+ tahun.";
  const baseUrl = "https://shosha-laundry.com";
  const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="SHO SHA LAUNDRY" />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      <JsonLd />
    </>
  );
}
