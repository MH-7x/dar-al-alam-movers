import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = MetadataTemplate({
  title: "اتصل بنا | شركة دار العلم لنقل الأثاث في دبي",
  description:
    "تواصل مع شركة دار العلم لنقل الأثاث في دبي والإمارات. اتصل على 0551557018 أو راسلنا واتساب — رد خلال 10 دقائق ومعاينة مجانية.",
  slug: "contact",
});

const breadcrumbs = [
  { name: "الرئيسية", href: "/" },
  { name: "اتصل بنا", href: "/contact" },
];

const steps = [
  {
    num: "1",
    title: "الاستجابة الفورية",
    desc: "نرد على رسالتك أو مكالمتك خلال 10 دقائق.",
  },
  {
    num: "2",
    title: "الاستشارة الأولية",
    desc: "نأخذ تفاصيل النقل ونعطي تقدير سعر مبدئي.",
  },
  {
    num: "3",
    title: "حجز المعاينة",
    desc: "نحدد موعدًا للمعاينة في الموقع خلال 24 ساعة (مجانًا).",
  },
  {
    num: "4",
    title: "عرض سعر مكتوب",
    desc: "يصلك خلال يوم واحد، ثابت ومُلزم — لا يتغير يوم النقل.",
  },
  {
    num: "5",
    title: "حجز موعد النقل",
    desc: "نتفق على التاريخ والساعة المناسبة لك.",
  },
  {
    num: "6",
    title: "يوم النقل",
    desc: "الفريق يصل في الموعد، ينجز العمل، يسلّمك أثاثك سليمًا.",
  },
];

const quickFaqs = [
  {
    q: "كم وقت أحتاج للتخطيط لنقل أثاثي؟",
    a: "أسبوع كافٍ، لكن يمكننا التعامل مع طلبات نقل خلال 24 ساعة في الحالات الطارئة.",
  },
  {
    q: "هل تأتون مجانًا للمعاينة؟",
    a: "نعم. المعاينة في الموقع مجانية تمامًا في دبي وكل الإمارات.",
  },
  {
    q: "هل أحتاج لدفع شيء مقدمًا؟",
    a: "لا. لا نأخذ أي دفعة مقدمة. تدفع بعد إنجاز النقل كاملًا.",
  },
];

const hoursTable = [
  { day: "السبت – الخميس", hours: "24 ساعة" },
  { day: "الجمعة", hours: "24 ساعة" },
  { day: "العطلات الرسمية", hours: "24 ساعة" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-[var(--primary)] pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div>
              <SectionEyebrow text="تواصل معنا" light />
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                اتصل بنا — احصل على عرض سعر فوري خلال 10 دقائق
              </h1>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                سواء كنت تخطط لنقل شقة صغيرة أو فيلا كاملة، نحن جاهزون لخدمتك.
                اتصل بنا الآن وستحصل على:
              </p>
              <div className="flex md:flex-row flex-wrap flex-col gap-2.5">
                {[
                  "رد خلال 10 دقائق على واتساب",
                  "معاينة مجانية في الموقع",
                  "عرض سعر مكتوب وثابت",
                  "بدون دفعة مقدمة ولا التزام",
                  "خدمة 7 أيام في الأسبوع",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 text-sm text-white/90"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-white/60 flex-shrink-0"
                    />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact cards */}
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] mb-0.5">
                    اتصل مباشرة
                  </p>
                  <p
                    className="text-lg font-bold text-[var(--primary)]"
                    dir="ltr"
                  >
                    {siteConfig.phoneDisplay}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    متاح 7 أيام، 24 ساعة
                  </p>
                </div>
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] mb-0.5">
                    واتساب — الأسرع
                  </p>
                  <p className="text-lg font-bold text-[#25D366]" dir="ltr">
                    {siteConfig.phoneDisplay}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    رد خلال 10 دقائق
                  </p>
                </div>
              </a>
              <a
                href={siteConfig.email}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-foreground " />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] mb-0.5">
                    {" "}
                    البريد الألكتروني
                  </p>
                  <p className="text-lg font-bold text-foreground " dir="ltr">
                    {siteConfig.email}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    رد خلال 10 دقائق
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionEyebrow text="نموذج الطلب" />
              <h2 className="text-xl font-bold text-[var(--secondary)] mb-6">
                اطلب عرض سعر مجاني
              </h2>
              <QuoteForm variant="section" />
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-5">
              {/* Hours */}
              <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
                <div className="bg-[var(--secondary)] px-5 py-3.5 flex items-center gap-2">
                  <Clock size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">
                    ساعات العمل
                  </span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {hoursTable.map(({ day, hours }) => (
                      <tr key={day} className="border-t border-[var(--border)]">
                        <td className="px-5 py-3 text-[var(--secondary)]">
                          {day}
                        </td>
                        <td className="px-5 py-3 text-end text-[var(--primary)] font-medium">
                          {hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-3 bg-[var(--muted)] border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--muted-foreground)]">
                    متاحون 7 أيام في الأسبوع على مدار 24 ساعة — بما فيها العطلات
                    الرسمية.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-[var(--border)] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[var(--primary)]" />
                  <span className="text-sm font-medium text-[var(--secondary)]">
                    منطقة التغطية
                  </span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  دبي وكل الإمارات السبع — أبوظبي، الشارقة، عجمان، رأس الخيمة،
                  الفجيرة، أم القيوين، والعين.
                </p>
              </div>

              {/* Quick FAQs */}
              <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
                <div className="bg-[var(--muted)] px-5 py-3.5">
                  <span className="text-sm font-medium text-[var(--secondary)]">
                    أسئلة سريعة
                  </span>
                </div>
                {quickFaqs.map(({ q, a }) => (
                  <div
                    key={q}
                    className="px-5 py-4 border-t border-[var(--border)]"
                  >
                    <p className="text-xs font-medium text-[var(--secondary)] mb-1">
                      {q}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ─────────────────────────────── */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionEyebrow text="ما الذي يحدث بعد اتصالك؟" />
            <h2 className="text-2xl font-bold text-[var(--secondary)]">
              6 خطوات من أول مكالمة حتى التسليم
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-[var(--primary)] flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-white">{num}</span>
                </div>
                <h3 className="text-sm font-medium text-[var(--secondary)] mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="py-14 bg-[var(--primary)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            اتصل بنا الآن أو راسلنا واتساب
          </h2>
          <p className="text-white/75 text-sm mb-8">
            رد خلال 10 دقائق ومعاينة مجانية خلال 24 ساعة — بدون دفعة مقدمة ولا
            التزام.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-white/90 transition-opacity"
            >
              <Phone size={16} />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
            >
              <MessageCircle size={16} />
              واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
