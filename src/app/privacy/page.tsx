import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = MetadataTemplate({
  title: "سياسة الخصوصية | دار العلم نقل اثاث",
  description: "سياسة الخصوصية الخاصة بشركة دار العلم لنقل الأثاث — كيف نجمع، نستخدم، ونحمي بياناتك الشخصية وفقًا لقوانين الإمارات.",
  slug: "privacy",
  noIndex: false,
});

const breadcrumbs = [
  { name: "الرئيسية", href: "/" },
  { name: "سياسة الخصوصية", href: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <section className="bg-[var(--accent)] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mt-2">سياسة الخصوصية</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">آخر تحديث: يناير 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 prose-content">
          <div className="flex flex-col gap-8 text-[var(--muted-foreground)] leading-relaxed text-sm">
            <p>
              تحترم شركة دار العلم نقل اثاث خصوصيتك. توضح هذه السياسة كيف نجمع، نستخدم، ونحمي
              بياناتك الشخصية عند زيارتك لموقعنا أو استخدامك لخدماتنا في الإمارات العربية المتحدة.
            </p>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">ما البيانات التي نجمعها؟</h2>
              <p className="mb-2">عند تواصلك معنا، نجمع:</p>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                <li>الاسم الكامل</li>
                <li>رقم الهاتف</li>
                <li>البريد الإلكتروني (إذا قدمته)</li>
                <li>عناوين النقل (الحالي والجديد)</li>
                <li>تفاصيل طلب النقل</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">كيف نستخدم بياناتك؟</h2>
              <ul className="list-disc ps-5 flex flex-col gap-1">
                <li>للتواصل معك وتقديم عرض السعر المطلوب</li>
                <li>لتنسيق عملية النقل وتأكيد المواعيد</li>
                <li>لإرسال تأكيد الحجز والفاتورة</li>
                <li>لتحسين خدماتنا بناءً على تجربتك</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">هل نشارك بياناتك؟</h2>
              <p>
                لا نبيع ولا نؤجر بياناتك لأي طرف ثالث. قد نشارك معلوماتك مع شركاء موثوقين لأغراض
                تشغيلية فقط (مثل شركات التأمين) وبموجب اتفاقيات سرية صارمة.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">حماية البيانات</h2>
              <p>
                نطبق معايير أمان معلوماتية صارمة لحماية بياناتك. يُحتفظ بالبيانات فقط للمدة اللازمة
                لتقديم الخدمة والامتثال للمتطلبات القانونية في الإمارات.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">حقوقك</h2>
              <p>
                يحق لك في أي وقت طلب الاطلاع على بياناتك، تصحيحها، أو حذفها. للتواصل بشأن
                الخصوصية، راسلنا على: <a href="mailto:nimramovers@gmail.com" className="text-[var(--primary)]" dir="ltr">nimramovers@gmail.com</a>
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">ملفات تعريف الارتباط (Cookies)</h2>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط الضرورية لعمل الموقع وتحليل الأداء. يمكنك ضبط
                متصفحك لرفض ملفات الارتباط، وإن كان ذلك قد يؤثر على بعض وظائف الموقع.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--secondary)] mb-3">التعديلات على هذه السياسة</h2>
              <p>
                نحتفظ بحق تعديل هذه السياسة في أي وقت. ستُنشر أي تغييرات على هذه الصفحة مع تحديث
                تاريخ "آخر تحديث".
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
