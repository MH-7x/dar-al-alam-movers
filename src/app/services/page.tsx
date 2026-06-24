import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = MetadataTemplate({
  title: "خدمات نقل الأثاث في دبي والإمارات | دار العلم",
  description: "نقل منازل، شقق، فلل، مكاتب، تغليف، فك وتركيب، وتخزين — خدمات متكاملة لنقل الأثاث في دبي والإمارات. اتصل 0551557018.",
  slug: "services",
});

const breadcrumbs = [
  { name: "الرئيسية", href: "/" },
  { name: "خدماتنا", href: "/services" },
];

export default function ServicesIndexPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="bg-[var(--accent)] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-4xl font-bold text-[var(--secondary)] mt-2">خدمات نقل الأثاث في دبي والإمارات</h1>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-2xl">
            نقدم في دار العلم مجموعة متكاملة من خدمات نقل الأثاث لتلبية جميع احتياجاتك السكنية والتجارية
            في دبي وكل الإمارات.
          </p>
        </div>
      </div>
      <ServicesGrid eyebrow="كل خدماتنا" title="اختر الخدمة التي تناسبك" showAll />
      <CTASection
        title="تحتاج مساعدة في اختيار الخدمة المناسبة؟"
        description="تواصل معنا وسنساعدك في تحديد الخدمة الأنسب لاحتياجاتك."
        variant="muted"
      />
    </>
  );
}
