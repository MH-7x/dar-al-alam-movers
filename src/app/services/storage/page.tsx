import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { FAQItem } from "@/lib/types";

export const metadata: Metadata = MetadataTemplate({
  title: "تخزين الأثاث في دبي | مستودعات آمنة بمراقبة 24/7",
  description: "خدمة تخزين أثاث دبي في مستودعات مؤمنة بمراقبة 24/7 — تخزين قصير وطويل الأجل بأسعار شهرية مرنة. اتصل 0551557018.",
  slug: "services/storage",
});

const faqs: FAQItem[] = [
  {
    question: "ما أقل مدة تخزين متاحة؟",
    answer: <p>أقل مدة تخزين أسبوع واحد. نوفر أسعارًا شهرية مرنة للتخزين القصير والطويل الأجل.</p>,
  },
  {
    question: "هل المستودعات مكيفة؟",
    answer: <p>نعم، مستودعاتنا مكيفة ومراقبة 24/7 لحماية أثاثك من حرارة دبي والرطوبة.</p>,
  },
  {
    question: "هل يمكنني استرجاع أثاثي متى أريد؟",
    answer: <p>نعم، يمكنك الوصول إلى أثاثك أو استرجاعه في أي وقت خلال ساعات العمل.</p>,
  },
];

export default function StoragePage() {
  return (
    <ServicePageTemplate
      title="تخزين الأثاث في دبي — مستودعات آمنة بمراقبة 24/7"
      subtitle="مستودعات آمنة مكيفة لتخزين أثاثك قصيرًا أو طويلًا بأسعار شهرية مرنة."
      slug="storage"
      nameAr="التخزين الآمن"
      image="/placeholders/service-storage.svg"
      pricingRows={[
        { type: "تخزين صغير (حتى 10 م²)", price: "من 300 / شهر" },
        { type: "تخزين متوسط (10–25 م²)", price: "من 500 / شهر" },
        { type: "تخزين كبير (25+ م²)", price: "يحدد حسب الحجم" },
      ]}
      intro={
        <p>
          <strong>تخزين الأثاث في دبي</strong> مع دار العلم يعني أثاثك في مستودعات مكيفة ومراقبة
          24/7، مع تأمين شامل لكل قطعة. سواء تحتاج تخزينًا لأسبوع بين نقلتين أو سنة كاملة، نوفر
          لك الحل بأسعار شهرية تنافسية.
        </p>
      }
      features={[
        "مستودعات مكيفة ومراقبة 24/7",
        "تأمين شامل على كل القطع",
        "تخزين من أسبوع واحد فصاعدًا",
        "أسعار شهرية مرنة",
        "جرد كامل للمخزون",
        "حماية ضد الرطوبة والحشرات",
        "إمكانية الوصول للأثاث خلال ساعات العمل",
        "خدمة التوصيل عند الحاجة",
      ]}
      relatedServices={[
        { slug: "home-furniture", titleAr: "نقل أثاث المنزل", descAr: "نقل كامل ثم تخزين" },
        { slug: "packing", titleAr: "التغليف الاحترافي", descAr: "تغليف قبل التخزين" },
        { slug: "villa", titleAr: "نقل الفلل", descAr: "تخزين الأثاث الزائد" },
      ]}
      faqs={faqs}
    />
  );
}
