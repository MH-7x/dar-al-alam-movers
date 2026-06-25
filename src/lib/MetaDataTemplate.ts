import type { Metadata } from "next";
import { APP_URL, APP_NAME } from "./App";
import { services, locations } from "./siteConfig";

interface MetaDataTemplateProps {
  title: string;
  description: string;
  slug?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const locationImageMap: Record<string, string> = {
  "abu-dhabi": "/gallery/نقل-اثاث-ابوظبي-شركة-دار-العلم.jpg",
  "al-ain": "/gallery/نقل-اثاث-العين-شركة-دار-العلم.jpg",
  "sharjah": "/gallery/نقل-اثاث-الشارقة-شركة-دار-العلم.jpg",
  "ajman": "/gallery/نقل-اثاث-عجمان-شركة-دار-العلم.jpg",
  "ras-al-khaimah": "/gallery/نقل-اثاث-راس-الخيمة-شركة-دار-العلم.jpg",
  "umm-al-quwain": "/gallery/نقل-الاثاث-ام-القيوين-شركة-دار-العلم.jpg",
  "fujairah": "/gallery/نقل-اثاث-الفجيرة-شركة-دار-العلم.jpg",
};

export function MetadataTemplate({
  title,
  description,
  slug = "",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}: MetaDataTemplateProps): Metadata {
  console.log("in coming url : ", slug);

  // Decode percent-encoded characters (like Arabic) to raw UTF-8 characters
  const decodedSlug = decodeURIComponent(slug);
  const url = `${APP_URL}${decodedSlug ? `/${decodedSlug}` : ""}`;

  // Determine open graph image
  let resolvedOgImage = ogImage;

  if (!resolvedOgImage) {
    // 1. Check if it's a service page
    const matchedService = services.find((s) => decodedSlug.includes(s.slug));
    if (matchedService) {
      resolvedOgImage = matchedService.image;
    } else {
      // 2. Check if it's a location page
      const matchedLocation = locations.find((l) => decodedSlug.includes(l.slug));
      if (matchedLocation && matchedLocation.id in locationImageMap) {
        resolvedOgImage = locationImageMap[matchedLocation.id];
      } else if (decodedSlug.includes("من-نحن")) {
        // 3. Keep the original default logo for the about page ("من نحن")
        resolvedOgImage = "/logos/logo-1.svg";
      } else {
        // 4. Default for all other pages
        resolvedOgImage = "/نقل-اثاث-الشقق-في-دبي-والامارات-دار-العلم.jpg";
      }
    }
  }

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: url,
      siteName: APP_NAME,
      locale: "ar_AE",
      type: "website",
      images: [{ url: resolvedOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [resolvedOgImage],
    },
  };
}
