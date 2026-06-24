import type { Metadata } from "next";
import { APP_URL, APP_NAME } from "./App";

interface MetaDataTemplateProps {
  title: string;
  description: string;
  slug?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function MetadataTemplate({
  title,
  description,
  slug = "",
  ogTitle,
  ogDescription,
  ogImage = "/logos/logo-1.svg",
  noIndex = false,
}: MetaDataTemplateProps): Metadata {
  console.log("in coming url : ", slug);

  // Decode percent-encoded characters (like Arabic) to raw UTF-8 characters
  const decodedSlug = decodeURIComponent(slug);
  const url = `${APP_URL}${decodedSlug ? `/${decodedSlug}` : ""}`;

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
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [ogImage],
    },
  };
}
