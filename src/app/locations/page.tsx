import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = MetadataTemplate({
  title: "مناطق خدمة نقل الأثاث | دار العلم دبي وكل الإمارات",
  description: "نخدم دبي وجميع الإمارات السبع — أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين، والعين. اتصل 0551557018.",
  slug: "locations",
});

const breadcrumbs = [
  { name: "الرئيسية", href: "/" },
  { name: "مناطق الخدمة", href: "/locations" },
];

export default function LocationsIndexPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="bg-[var(--accent)] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-4xl font-bold text-[var(--secondary)] mt-2">مناطق خدمة نقل الأثاث</h1>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-2xl">
            نقدم خدمات نقل الأثاث في دبي وجميع الإمارات السبع بنفس مستوى الجودة والاحترافية.
          </p>
        </div>
      </div>
      <LocationsGrid eyebrow="تغطية شاملة" title="نصل إلى كل إمارة" />
      <CTASection
        title="احجز نقل اثاثك في أي إمارة"
        description="نغطي جميع الإمارات السبع بفريق محترف وشاحنات مغلقة."
        variant="solid"
      />
    </>
  );
}
