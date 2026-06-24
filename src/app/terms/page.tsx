import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = MetadataTemplate({
  title: "الشروط والأحكام | دار العلم نقل اثاث",
  description: "الشروط والأحكام الخاصة بخدمات شركة دار العلم نقل اثاث في دبي والإمارات.",
  slug: "terms",
});

const breadcrumbs = [
  { name: "الرئيسية", href: "/" },
  { name: "الشروط والأحكام", href: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <section className="bg-[var(--accent)] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mt-2">الشروط والأحكام</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">آخر تحديث: يناير 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-8 text-[var(--muted-foreground)] leading-relaxed text-sm">
            <p>
              باستخدامك لخدمات شركة دار العلم نقل اثاث، فإنك توافق على الشروط والأحكام التالية.
              يُرجى قراءتها بعناية قبل تأكيد أي حجز.
            </p>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">1. الحجز والتأكيد</h2>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                <li>يُعتبر الحجز مؤكدًا فور إرسال تأكيد خطي (واتساب أو بريد إلكتروني) من الشركة.</li>
                <li>عرض السعر المقدم ملزم للطرفين ولا يتغير إلا بموافقة خطية مسبقة.</li>
                <li>يحق للعميل إلغاء الحجز قبل 24 ساعة من موعد النقل دون رسوم.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">2. مسؤوليات الشركة</h2>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                <li>الوصول في الموعد المحدد أو إبلاغ العميل مسبقًا في حالة أي تأخير.</li>
                <li>التعامل مع جميع قطع الأثاث بعناية ومسؤولية.</li>
                <li>تغطية أي تلف أو كسر يحدث بسبب إهمال الفريق بالتعويض أو الإصلاح.</li>
                <li>عدم الإفصاح عن أي معلومات خاصة بالعميل لأطراف ثالثة.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">3. مسؤوليات العميل</h2>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                <li>إبلاغ الشركة بأي قطع ثمينة أو هشة تحتاج تعاملًا خاصًا.</li>
                <li>تهيئة وصول مناسب للشاحنة في كلا العنوانين.</li>
                <li>الحضور شخصيًا أو تعيين مندوب مفوض يوم النقل.</li>
                <li>التحقق من سلامة جميع القطع قبل توقيع وثيقة الاستلام.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">4. الدفع</h2>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                <li>لا تُطلب أي دفعة مقدمة. يتم الدفع بعد إتمام عملية النقل.</li>
                <li>وسائل الدفع المقبولة: نقدًا، تحويل بنكي، أو بطاقة ائتمان.</li>
                <li>تُصدر فاتورة رسمية لكل عملية نقل.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">5. التأمين والمسؤولية</h2>
              <p>
                تغطي الشركة بتأمين شامل جميع قطع الأثاث المنقولة ضد الكسر والتلف والفقدان الناجم عن
                عملية النقل. لا تتحمل الشركة مسؤولية الأضرار الناتجة عن قوة قاهرة أو أسباب خارج
                نطاق سيطرتها.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">6. القانون المطبق</h2>
              <p>
                تخضع هذه الشروط لقوانين الإمارات العربية المتحدة وتُحل أي نزاعات أمام المحاكم
                المختصة في إمارة دبي.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
