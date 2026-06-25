import type { Metadata } from "next";
import Image from "next/image";
import { MetadataTemplate } from "@/lib/MetaDataTemplate";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import {
  CheckCircle2,
  Users,
  Truck,
  Shield,
  Clock,
  Star,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = MetadataTemplate({
  title: "من نحن | شركة دار العلم لنقل الأثاث في دبي والإمارات",
  description:
    "تعرّف على شركة دار العلم لنقل الأثاث — خبرة +15 سنة، أكثر من 10,000 عملية نقل ناجحة، فريق محترف ومُدرَّب، تأمين شامل، خدمة في دبي وكل الإمارات.",
  slug: "من-نحن",
  ogImage: "/فريق-شركة-دار-العلم-لنقل-الاثاث-في-دبي.jpg",
});

const breadcrumbs = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/من-نحن" },
];

const stats = [
  { val: "+15", label: "سنة خبرة" },
  { val: "+10K", label: "عملية نقل ناجحة" },
  { val: "+4K", label: "شقة في دبي" },
  { val: "7", label: "إمارات نخدمها" },
];

const values = [
  {
    icon: Shield,
    title: "الصدق في السعر",
    desc: "السعر الذي نعرضه عليك في البداية هو الفاتورة النهائية. لا رسوم خفية، لا مفاجآت يوم النقل. الشفافية ليست ميزة عندنا — هي شرط أساسي.",
  },
  {
    icon: Truck,
    title: "الاحترام للأثاث",
    desc: "كل قطعة تنقلها معنا تخضع لتغليف مهني، فك دقيق، نقل آمن في شاحنة مغلقة، وتركيب مدروس. نتعامل مع التحف العائلية بنفس عناية الكنبات الجديدة.",
  },
  {
    icon: Clock,
    title: "الالتزام بالموعد",
    desc: "نصل في الوقت المتفق عليه — لا قبل ولا بعد. إذا تأخرنا لأي سبب، نخصم من الفاتورة. الوقت ثمين ونحن نحترم وقتك.",
  },
  {
    icon: Users,
    title: "الإنسانية في التعامل",
    desc: "فريقنا ليس مجرد عمال نقل — هم أناس مُختارون بعناية ومدربون، يعرفون أن الابتسامة والاحترام جزء من الخدمة كما الشاحنة والمواد.",
  },
];

const differentiators = [
  "رد خلال 10 دقائق على واتساب",
  "معاينة مجانية في الموقع",
  "عرض سعر مكتوب وملزم",
  "بدون دفعة مقدمة",
  "تأمين شامل على كل قطعة",
  "ضمان عدم الكسر",
  "تنظيف بعد النقل",
  "خدمة 7 أيام في الأسبوع",
  "خبرة موثقة +15 سنة",
];

const teamRoles = [
  {
    role: "منسقو الحجوزات",
    desc: "يردون على واتساب والمكالمات خلال 10 دقائق.",
  },
  {
    role: "مهندسو معاينة",
    desc: "يأتون إلى موقعك ويعطون عرض سعر دقيق ومكتوب.",
  },
  {
    role: "عمال نقل مدربون",
    desc: "خضعوا لتدريب متخصص على الفك، التغليف، والتحميل.",
  },
  {
    role: "نجارون محترفون",
    desc: "متخصصون في غرف النوم، المطابخ، والخزائن المدمجة.",
  },
  {
    role: "سائقون مرخصون",
    desc: "يعرفون كل طرق الإمارات السبع ويصلون في الموعد.",
  },
  {
    role: "فريق ضمان الجودة",
    desc: "يتابع كل عملية ويتأكد من رضا العميل بعد التسليم.",
  },
];

const coverageAreas = [
  "دبي",
  "أبوظبي",
  "العين",
  "الشارقة وخورفكان وكلباء",
  "عجمان",
  "رأس الخيمة",
  "الفجيرة",
  "أم القيوين",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-[var(--primary)] pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div>
              <SectionEyebrow text="من نحن" light />
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                شركة دار العلم نقل اثاث
              </h1>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                شركة عائلية تأسست في دبي قبل أكثر من 15 عامًا، بدأت برحلة واحدة
                وفريق صغير ومهمة واضحة: ننقل أثاث الناس كما لو كان أثاثنا.
                اليوم، وبعد أكثر من 10,000 عملية نقل ناجحة في الإمارات السبع، ما
                زلنا نلتزم بنفس المبدأ — كل قطعة أثاث تستحق العناية، وكل عميل
                يستحق الصدق في السعر.
              </p>
              {/* Stat pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white">{s.val}</div>
                    <div className="text-xs text-white/70 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/فريق-شركة-دار-العلم-لنقل-الاثاث-في-دبي.jpg"
                alt=" فريق شركة دار العلم نقل اثاث في دبي - فريق محترف ومدرب لخدمات نقل الأثاث في الإمارات"
                fill
                loading="eager"
                priority
                className="object-cover"
              />
              {/* Floating rating badge */}
              <div className="absolute bottom-4 end-4 bg-white rounded-xl p-4 shadow-lg text-center min-w-[100px]">
                <div className="text-2xl font-bold text-[var(--primary)]">
                  4.9
                </div>
                <div className="flex justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  +320 تقييم
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionEyebrow text="قصتنا" />
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-6">
                رحلة 15 سنة من الثقة والاحترافية
              </h2>
              <div className="flex flex-col gap-5 text-[var(--muted-foreground)] leading-relaxed text-sm">
                <p>
                  بدأت دار العلم كفريق صغير في دبي، يضم سائقًا واحدًا وثلاثة
                  عمال نقل. أول عميل لنا كانت عائلة تنتقل من شقة في ديرة إلى
                  فيلا في الراشدية. أنهينا النقل في يوم واحد، بدون خدش، وبسعر
                  متفق عليه مسبقًا.
                </p>
                <p>
                  اتصلت بنا الأم في اليوم التالي شاكرة، ثم أرسلت لنا 12 عميلًا
                  من أصدقائها وأقاربها. من تلك اللحظة، فهمنا أن{" "}
                  <strong className="text-[var(--secondary)]">
                    نقل الأثاث ليس مهنة فقط
                  </strong>{" "}
                  — إنه ثقة. والثقة لا تُبنى بالإعلانات، بل بالعمل الجاد وكلمة
                  شفهية تنتقل من بيت إلى بيت.
                </p>
                <p>
                  اليوم، عندنا أسطول من الشاحنات المغلقة المكيفة، فرق فك وتركيب
                  متخصصة، نجارون محترفون، مستودعات آمنة في دبي، ومكتب مركزي يرد
                  على واتساب خلال 10 دقائق. لكن روح العمل لم تتغير — نتعامل مع
                  كل عميل وكأنه أول عميل.
                </p>
              </div>
            </div>
            {/* Mission box */}
            <div className="bg-[var(--primary)] rounded-3xl p-8 text-white">
              <SectionEyebrow text="مهمتنا" light />
              <h3 className="text-xl font-bold text-white mb-4">
                ننقل أثاثك سليمًا، في الموعد، وبالسعر المتفق عليه — بدون مفاجآت.
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                نحن نعرف أن يوم النقل من أصعب أيام أي عائلة. صندوق واحد ضائع
                يعني ذكريات ضائعة. كرسي عتيق مكسور يعني حزن لا يُعوَّض. لذلك،
                نضع كل قطعة على رأس قائمتنا.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "بدون كسر",
                  "في الموعد",
                  "بالسعر المتفق عليه",
                  "بدون دفعة مقدمة",
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
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────── */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionEyebrow text="قيمنا" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
              القيم التي تحرك كل قرار نتخذه
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-base font-medium text-[var(--secondary)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionEyebrow text="ما يميزنا" />
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-6">
                لماذا نحن مختلفون عن غيرنا في دبي والإمارات؟
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm mb-6 leading-relaxed">
                عدد كبير من شركات نقل الأثاث في دبي يقدم خدمة جيدة. لكن قليل
                منها يجمع{" "}
                <strong className="text-[var(--secondary)]">
                  كل هذه الميزات معًا
                </strong>
                :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {differentiators.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--muted)]"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[var(--primary)] flex-shrink-0"
                    />
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Numbers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "+15 سنة", label: "خبرة في نقل الأثاث في الإمارات" },
                { val: "+10,000", label: "عملية نقل ناجحة" },
                { val: "+4,000", label: "شقة نقلت في دبي وحدها" },
                { val: "+1,500", label: "فيلا في الإمارات السبع" },
                { val: "+800", label: "مكتب وشركة خدمناهم" },
                { val: "0", label: "دفعة مقدمة مطلوبة" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--muted)] rounded-2xl p-5 border border-[var(--border)]"
                >
                  <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                    {s.val}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────── */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionEyebrow text="فريقنا" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
              من يقف وراء كل عملية نقل ناجحة؟
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto text-sm">
              كل أعضاء فريقنا خضعوا لفحص أمني ومُدرَّبون على التعامل بأدب
              واحترام في كل بيت يدخلونه.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamRoles.map(({ role, desc }) => (
              <div
                key={role}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-3">
                  <Users size={18} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-base font-medium text-[var(--secondary)] mb-2">
                  {role}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage ─────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionEyebrow text="مناطق خدمتنا" />
            <h2 className="text-2xl font-bold text-[var(--secondary)]">
              نخدم نقل الأثاث في كل الإمارات
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {coverageAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--accent)] text-sm text-[var(--primary)] font-medium"
              >
                <MapPin size={13} />
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-5 text-sm text-[var(--muted-foreground)]">
            ننفذ النقل بين الإمارات بنفس الجودة والأسعار الشفافة — داخل المدينة
            أو بين الإمارات.
          </p>
        </div>
      </section>

      <GuaranteesSection />
      <ReviewsSection />

      <CTASection
        eyebrow="تواصل معنا"
        title="جاهز لتجربة نقل أثاث مختلف؟"
        description="احصل على معاينة مجانية وعرض سعر مكتوب من فريق دار العلم — بدون دفعة مقدمة ولا التزام."
        variant="solid"
      />
    </>
  );
}
