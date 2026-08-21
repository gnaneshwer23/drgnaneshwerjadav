import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export default function Seo({
  title,
  description = site.defaultDescription,
  path = "/",
  jsonLd,
}: SeoProps) {
  const url = `${site.url}${path === "/" ? "/" : path}`;
  const image = `${site.url}/og.jpg`;
  const fullTitle = title
    ? path === "/"
      ? title
      : `${title} — ${site.navName}`
    : site.defaultTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd ? (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      ) : null}
    </Helmet>
  );
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "GB",
  },
  sameAs: [site.linkedin, site.github],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Verona" },
    { "@type": "CollegeOrUniversity", name: "University of Kent" },
    { "@type": "CollegeOrUniversity", name: "University of Siena" },
    { "@type": "CollegeOrUniversity", name: "Kakatiya University" },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.navName,
  url: site.url,
  description: site.defaultDescription,
};
