import { siteConfig } from "@/lib/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteConfig.name,
    image: `${siteConfig.url}/logos/logo-1.svg`,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Floor 10 - The Walk - Marsa Dubai - Dubai Marina - Dubai",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
      postalCode: "00000",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.079038,
      longitude: 55.134169,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Umm Al Quwain",
      "Fujairah",
      "Al Ain",
    ],
    url: siteConfig.url,

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "341",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
