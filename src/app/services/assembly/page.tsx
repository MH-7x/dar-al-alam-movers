import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { FAQItem } from "@/lib/types";

export const metadata: Metadata = MetadataTemplate({
  title: "فك وتركيب الأثاث في دبي | نجارون متخصصون",
  description: "خدمة فك وتركيب الأثاث في دبي بنجارين متخصصين — غرف النوم، الخزائن، المطابخ، والأثاث الإيكيا. اتصل 0551557018.",
  slug: "services/assembly",
});

const faqs: FAQItem[] = [
  {
    question: "هل تتعاملون مع أثاث إيكيا؟",
    answer: <p>نعم، فريقنا خبير في فك وتركيب جميع منتجات إيكيا والماركات الأخرى.</p>,
  },
  {
    question: "هل يمكنكم تركيب مطبخ كامل؟",
    answer: <p>نعم، نفك ونركب المطابخ الكاملة بما فيها الأرفف الجدارية والخزائن العلوية والسفلية.</p>,
  },
];

export default function AssemblyPage() {
  return (
    <ServicePageTemplate
      title="فك وتركيب الأثاث في دبي — نجارون متخصصون بدقة عالية"
      subtitle="فك وتركيب جميع أنواع الأثاث بنجارين متخصصين بدون خدش أو تلف."
      slug="assembly"
      nameAr="الفك والتركيب"
      image="/placeholders/service-packing.svg"
      pricingRows={[
        { type: "غرفة نوم كاملة", price: "150 – 300" },
        { type: "خزانة كبيرة (4+ أبواب)", price: "100 – 200" },
        { type: "مطبخ كامل", price: "300 – 600" },
        { type: "أثاث إيكيا (مجموعة)", price: "200 – 500" },
      ]}
      intro={
        <p>
          خدمة <strong>فك وتركيب الأثاث في دبي</strong> من دار العلم تشمل جميع أنواع الأثاث — غرف
          النوم، الخزائن، المطابخ، الأثاث الإيكيا، والطاولات. نجارونا يحملون جميع الأدوات ويحفظون كل
          قطعة صغيرة في أكياس مرقمة.
        </p>
      }
      features={[
        "نجارون متخصصون معتمدون",
        "فك وتركيب غرف النوم الكاملة",
        "فك وتركيب المطابخ والخزائن",
        "خبرة في أثاث إيكيا وجميع الماركات",
        "حفظ المسامير في أكياس مرقمة",
        "تركيب الأرفف الجدارية",
        "لا خدش ولا تلف مضمون",
        "خدمة متاحة بدون نقل",
      ]}
      relatedServices={[
        { slug: "home-furniture", titleAr: "نقل أثاث المنزل", descAr: "نقل كامل مع فك وتركيب" },
        { slug: "packing", titleAr: "التغليف الاحترافي", descAr: "تغليف قبل النقل" },
        { slug: "office", titleAr: "نقل المكاتب", descAr: "فك وتركيب مقسمات المكتب" },
      ]}
      faqs={faqs}
    />
  );
}
