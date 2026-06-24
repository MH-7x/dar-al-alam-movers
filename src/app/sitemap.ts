import type { MetadataRoute } from "next";
import { APP_URL } from "@/lib/App";
import { services, locations } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: APP_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${APP_URL}/خدماتنا`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${APP_URL}/المواقع`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${APP_URL}/من-نحن`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${APP_URL}/اتصل-بنا`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${APP_URL}/سياسة-الخصوصية`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${APP_URL}/شروط-الخدمة`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${APP_URL}/خدماتنا/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${APP_URL}/المواقع/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
