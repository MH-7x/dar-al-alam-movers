import { CheckCircle2, MapPin, Star, Phone, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import type { FAQItem } from "@/lib/types";
import { MovingGallery } from "../shared/Gallery";

interface PricingRow {
  type: string;
  price: string;
}

interface Challenge {
  title: string;
  desc: string;
}

interface SiblingLocation {
  nameAr: string;
  slug: string;
}

interface LocationPageTemplateProps {
  nameAr: string;
  slug: string;
  h1: string;
  intro: React.ReactNode;
  challenges: Challenge[];
  areas: string[];
  pricingRows: PricingRow[];
  whyUs: string[];
  siblings: SiblingLocation[];
  faqs: FAQItem[];
}

const trustItems = [
  "+15 سنة خبرة",
  "شاحنات مغلقة مكيّفة",
  "تأمين شامل",
  "رد خلال 10 دقائق",
  "بدون دفعة مقدمة",
  "7 أيام في الأسبوع",
];

export function LocationPageTemplate({
  nameAr,
  slug,
  h1,
  intro,
  challenges,
  areas,
  pricingRows,
  whyUs,
  siblings,
  faqs,
}: LocationPageTemplateProps) {
  const breadcrumbs = [
    { name: "الرئيسية", href: "/" },
    { name: "المواقع", href: "/المواقع" },
    { name: `نقل اثاث ${nameAr}`, href: `/المواقع/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="bg-[var(--primary)] pt-8 pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 items-end">
            <div className="pb-12">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white mb-5">
                {h1}
              </h1>
              <div id="intro" className=" text-base leading-relaxed mb-8">
                {intro}
              </div>
              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/90 transition-opacity"
                >
                  <Phone size={15} />
                  اتصل الآن
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <MessageCircle size={15} />
                  واتساب
                </a>
              </div>
            </div>
            {/* Form card */}
            <div className="pb-0">
              <div className="bg-white rounded-t-2xl p-6 shadow-xl">
                <QuoteForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────── */}
      <section className="bg-[var(--secondary)] py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-xs text-white/85"
              >
                <CheckCircle2 size={13} className="text-white/60" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges ────────────────────────────────── */}
      {challenges.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <SectionEyebrow text="خصوصيات المنطقة" />
            <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] mb-8">
              لماذا نقل اثاث {nameAr} يحتاج خبرة خاصة؟
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--muted)] hover:border-[var(--primary)]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-[var(--primary)]">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-[var(--secondary)] mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <MovingGallery />
      {/* ── Services ──────────────────────────────────── */}
      <ServicesGrid
        eyebrow="خدماتنا"
        title={`خدمات نقل الأثاث في ${nameAr}`}
        showAll
      />

      {/* ── Areas ─────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionEyebrow text="مناطق التغطية" />
          <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] mb-6">
            مناطق نخدم فيها نقل اثاث {nameAr}
          </h2>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-xs text-[var(--primary)] font-medium"
              >
                <MapPin size={11} />
                {area}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            ننقل أيضًا بين {nameAr} وجميع الإمارات السبع بنفس الجودة وبأسعار
            مدروسة.
          </p>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────── */}
      <section className="py-14 bg-[var(--muted)]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionEyebrow text="الأسعار" />
          <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] mb-6">
            أسعار نقل اثاث {nameAr} 2026
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--primary)] text-white">
                  <th className="text-start px-5 py-3.5 font-medium">
                    نوع العقار
                  </th>
                  <th className="text-end px-5 py-3.5 font-medium">
                    السعر التقريبي
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-t border-[var(--border)] hover:bg-[var(--accent)]/20 transition-colors ${
                      i % 2 === 1 ? "bg-[var(--muted)]/40" : ""
                    }`}
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
            <div className="px-5 py-3.5 border-t border-[var(--border)] bg-[var(--accent)]/30 flex items-center justify-between flex-wrap gap-3">
              <p className="text-xs text-[var(--muted-foreground)]">
                الأسعار تقريبية وتشمل: الفك، التغليف، النقل، التركيب، والتأمين
                الشامل.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-1.5 text-xs bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone size={12} />
                عرض سعر مجاني
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow text={`لماذا دار العلم في ${nameAr}`} />
              <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] mb-6">
                لماذا تختار دار العلم لنقل اثاث {nameAr}؟
              </h2>
              <div className="flex flex-col gap-3">
                {whyUs.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--muted)]"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[var(--primary)] mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Rating card */}
            <div className="flex justify-center">
              <div className="bg-[var(--primary)] rounded-3xl p-10 text-center text-white max-w-xs w-full">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-ts-tarek), sans-serif" }}
                >
                  4.9
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-6">
                  +320 تقييم موثق من عملائنا
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "سنة خبرة", val: "+15" },
                    { label: "عملية نقل", val: "+10K" },
                    { label: "نسبة الرضا", val: "98%" },
                    { label: "أيام خدمة", val: "7" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-xl p-3">
                      <div className="text-xl font-bold">{s.val}</div>
                      <div className="text-white/70 text-xs mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sibling Locations ─────────────────────────── */}
      {siblings.length > 0 && (
        <section className="py-12 bg-[var(--muted)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <SectionEyebrow text="مناطق أخرى" />
            <h2 className="text-lg font-bold text-[var(--secondary)] mb-5">
              نخدم أيضًا في
            </h2>
            <div className="flex flex-wrap gap-3">
              {siblings.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/المواقع/${loc.slug}`}
                  className="px-4 py-2 rounded-xl border border-[var(--border)] bg-white text-sm text-[var(--secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  نقل اثاث {loc.nameAr}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ReviewsSection />

      <CTASection
        title={`احجز نقل اثاثك في ${nameAr} الآن`}
        description="رد خلال 10 دقائق، معاينة مجانية، وعرض سعر مكتوب وثابت — بدون دفعة مقدمة ولا رسوم خفية."
        variant="solid"
      />

      <FAQSection faqs={faqs} />
    </>
  );
}
