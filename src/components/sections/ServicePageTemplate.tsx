import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import Link from "next/link";
import type { FAQItem } from "@/lib/types";
import { services } from "@/lib/siteConfig";

interface PricingRow {
  type: string;
  price: string;
}

interface RelatedService {
  titleAr: string;
  slug: string;
  descAr: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  slug: string;
  nameAr: string;
  image?: string;
  intro: React.ReactNode;
  features: string[];
  pricingRows?: PricingRow[];
  relatedServices: RelatedService[];
  faqs: FAQItem[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  slug,
  nameAr,
  image = "/placeholders/service-home.svg",
  intro,
  features,
  pricingRows,
  relatedServices,
  faqs,
}: ServicePageTemplateProps) {
  const breadcrumbs = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/خدماتنا" },
    { name: nameAr, href: `/خدماتنا/${slug}` },
  ];

  const imageSrc = services.find((s) => s.slug === slug)?.image;
  const alt = services.find((s) => s.slug === slug)?.imageAlt;
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={nameAr}
        description={subtitle}
        url={`/خدماتنا/${slug}`}
      />

      {/* Hero section */}
      <section className="bg-[var(--primary)] pt-8 pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 items-end">
            {/* Text */}
            <div className="pb-12">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white mb-4">
                {title}
              </h1>
              <div className="text-white/80 text-base leading-relaxed mb-8">
                {subtitle}
              </div>
              {/* Trust row */}
              <div className="flex flex-wrap gap-4">
                {["بدون دفعة مقدمة", "تأمين شامل", "فك وتركيب مجاني"].map(
                  (t) => (
                    <div
                      key={t}
                      className="flex items-center gap-1.5 text-xs text-white/90"
                    >
                      <CheckCircle2 size={14} className="text-white/70" />
                      {t}
                    </div>
                  ),
                )}
              </div>
            </div>
            {/* Image */}
            <div className="relative aspect-video rounded-t-2xl overflow-hidden">
              <Image
                src={imageSrc ?? image}
                alt={alt ?? nameAr}
                fill
                loading="eager"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form + intro */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionEyebrow text="عن الخدمة" />
              <div className="prose-sm text-[var(--muted-foreground)] leading-relaxed">
                {intro}
              </div>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-[var(--secondary)] mb-5">
                  ماذا تشمل خدمة {nameAr}؟
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--muted)]"
                    >
                      <ShieldCheck
                        size={16}
                        className="text-[var(--primary)] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky form */}
            <div>
              <div className="sticky top-6">
                <QuoteForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      {pricingRows && pricingRows.length > 0 && (
        <section className="py-12 bg-[var(--muted)]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <SectionEyebrow text="الأسعار" />
            <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] mb-6">
              أسعار {nameAr} التقريبية
            </h2>
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--primary)] text-white">
                    <th className="text-start px-5 py-3.5 font-medium">
                      النوع / الحجم
                    </th>
                    <th className="text-end px-5 py-3.5 font-medium">
                      السعر التقريبي (درهم)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.type}
                      className={`border-t border-[var(--border)] ${i % 2 === 1 ? "bg-[var(--muted)]/40" : ""}`}
                    >
                      <td className="px-5 py-3.5 text-[var(--secondary)]">
                        {row.type}
                      </td>
                      <td className="px-5 py-3.5 text-end font-medium text-[var(--primary)]">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-5 py-3 text-xs text-[var(--muted-foreground)] border-t border-[var(--border)] bg-[var(--muted)]/30">
                الأسعار تقريبية. السعر النهائي يُحدد بعد المعاينة المجانية.
              </p>
            </div>
          </div>
        </section>
      )}

      <ProcessSteps />
      <GuaranteesSection />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-[var(--muted)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <SectionEyebrow text="خدمات ذات صلة" />
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-6">
              خدمات قد تهمك أيضًا
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/خدماتنا/${s.slug}`}
                  className="p-5 rounded-xl border border-[var(--border)] bg-white hover:shadow-md hover:border-[var(--primary)]/30 transition-all"
                >
                  <h3 className="text-base font-medium text-[var(--secondary)] mb-1">
                    {s.titleAr}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {s.descAr}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`جاهز لحجز ${nameAr}؟`}
        description="تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر مكتوب خلال دقائق."
        variant="solid"
      />

      <FAQSection faqs={faqs} />
    </>
  );
}
