import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PricingTable } from "@/components/sections/PricingTable";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { CoverageAreas } from "@/components/sections/CoverageAreas";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import type { FAQItem } from "@/lib/types";
import { MovingGallery } from "@/components/shared/Gallery";

export const metadata: Metadata = MetadataTemplate({
  title: "شركة نقل اثاث دبي | دار العلم خبرة +15 سنة بأسعار شفافة",
  description:
    "شركة نقل اثاث دبي بخبرة تتجاوز 15 عامًا — رد فوري خلال 10 دقائق، معاينة وعرض سعر مجاني، تأمين شامل، فك وتركيب وتغليف بدون دفعة مقدمة. اتصل 0551557018.",
  ogTitle: "نقل اثاث دبي — شركة دار العلم لنقل وتغليف الأثاث",
  ogDescription:
    "خدمات نقل اثاث في دبي وكل الإمارات بفريق محترف، شاحنات مغلقة، تأمين شامل، وأسعار واضحة من أول مكالمة.",
});

const faqs: FAQItem[] = [
  {
    question: "كم تكلفة نقل اثاث في دبي؟",
    answer: (
      <p>
        تتراوح أسعار نقل اثاث دبي بين 500 درهم لاستوديو صغير و4,500 درهم لفيلا 3
        غرف. السعر يعتمد على حجم الأثاث، الطابق، توفر المصعد، والمسافة بين
        المنزلين. اتصل بنا للحصول على معاينة وعرض سعر مجاني.
      </p>
    ),
  },
  {
    question: "هل تحتاجون دفعة مقدمة؟",
    answer: (
      <p>
        لا. لا نأخذ أي دفعة مقدمة. تدفع فقط بعد إنجاز النقل بالكامل والتأكد من
        سلامة الأثاث.
      </p>
    ),
  },
  {
    question: "هل خدمة فك وتركيب الأثاث ضمن السعر؟",
    answer: (
      <p>
        نعم، خدمة الفك والتركيب مشمولة في عرض السعر الأساسي، بما فيها غرف النوم،
        الخزائن، الطاولات، والمطابخ.
      </p>
    ),
  },
  {
    question: "ما هي مدة عملية نقل الأثاث؟",
    answer: (
      <p>
        نقل شقة غرفة وصالة عادة يستغرق 3–5 ساعات، شقة غرفتين 5–7 ساعات، وفيلا
        كاملة يوم واحد.
      </p>
    ),
  },
  {
    question: "هل تنقلون من دبي إلى إمارات أخرى؟",
    answer: (
      <p>
        نعم، نخدم النقل بين الإمارات: دبي – أبوظبي، دبي – الشارقة، دبي – عجمان،
        دبي – العين، دبي – رأس الخيمة، دبي – الفجيرة، ودبي – أم القيوين.
      </p>
    ),
  },
  {
    question: "هل لديكم تأمين على الأثاث أثناء النقل؟",
    answer: (
      <p>نعم. كل عملية نقل مغطاة بتأمين شامل ضد الكسر، الفقدان، أو التلف.</p>
    ),
  },
  {
    question: "هل تعملون في عطلات الأسبوع؟",
    answer: (
      <p>
        نعم، نعمل 7 أيام في الأسبوع بما فيها الجمعة والسبت. خدمة المكاتب متاحة
        في عطلات الأسبوع لتقليل تعطيل أعمالك.
      </p>
    ),
  },
  {
    question: "هل تقدمون خدمة تخزين الأثاث؟",
    answer: (
      <p>
        نعم، عندنا مستودعات آمنة في دبي للتخزين القصير والطويل الأجل بأسعار
        شهرية تنافسية.
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="افضل شركة نقل اثاث دبي بخبرة +15 سنة — نقل بدون خدش"
        subtitle="في شركة دار العلم نقل اثاث دبي، نقل أثاث منزلك أو مكتبك مهمتنا اليومية منذ أكثر من 15 سنة. نرد على واتساب خلال 10 دقائق، نعطيك عرض سعر فوري قبل أن تتحرك قطعة واحدة."
        showForm
      />
      <TrustStats />

      <ServicesGrid />
      <WhyUsSection />
      <PricingTable />
      <MovingGallery />
      <div className="-mt-10" />
      <ProcessSteps />
      <GuaranteesSection />
      <LocationsGrid />
      <CoverageAreas />
      <ReviewsSection />
      <CTASection
        eyebrow="احجز الآن"
        title="جاهز لنقل اثاثك؟ تواصل معنا الآن"
        description="رد خلال 10 دقائق، معاينة مجانية، وعرض سعر مكتوب وثابت — بدون دفعة مقدمة ولا رسوم خفية."
        variant="solid"
      />
      <FAQSection faqs={faqs} />
    </>
  );
}
