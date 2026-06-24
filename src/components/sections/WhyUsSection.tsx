import Image from "next/image";
import { Clock, FileText, Truck, Users, DollarSign } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const reasons = [
  {
    icon: Clock,
    title: "استجابة فورية خلال 10 دقائق",
    desc: "سواء راسلتنا على واتساب أو اتصلت مباشرة، يرد عليك مختص حقيقي خلال 10 دقائق، يأخذ تفاصيل النقل، ويعطيك تقدير سعر مبدئي قبل أن تنهي المكالمة.",
  },
  {
    icon: FileText,
    title: "معاينة مجانية وعرض سعر مكتوب",
    desc: "نأتي إلى منزلك أو مكتبك في دبي مجانًا، نعاين الأثاث، ونعطيك عرض سعر مكتوب وملزم — لن يتغير السعر يوم النقل.",
  },
  {
    icon: Truck,
    title: "شاحنات مغلقة ومكيّفة بمقاسات متعددة",
    desc: "أسطولنا من الشاحنات المغلقة يحمي أثاثك من حرارة دبي والغبار، وعندنا مقاسات مختلفة تناسب الاستوديو، الشقة، الفيلا، أو المكتب الكامل.",
  },
  {
    icon: Users,
    title: "فريق نقل اثاث مدرّب ومؤمَّن",
    desc: "كل عامل في فريقنا تدرّب على فك وتركيب جميع أنواع الأثاث — غرف النوم، خزائن المطبخ، الأجهزة الكبيرة، التحف، والقطع الزجاجية. كل عملية مغطاة بتأمين شامل.",
  },
  {
    icon: DollarSign,
    title: "أسعار شفافة بدون رسوم خفية",
    desc: "السعر الذي نعرضه عليك في البداية هو السعر النهائي في الفاتورة. لا توجد رسوم إضافية على الطوابق، الشرفات، أو وقت الانتظار.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/لماذا-تختار-شركة-دار-العلم-لنقل-الاثاث-في-دبي.jpg"
                alt="لماذا تختار شركة دار العلم نقل اثاث في دبي - فريق محترف ومدرب وأسعار شفافة"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 md:-end-5 bg-[var(--primary)] text-white rounded-2xl p-5 shadow-xl">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-ts-tarek), sans-serif" }}
              >
                4.9
              </div>
              <div className="text-xs text-white/80 mt-1">تقييم العملاء</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionEyebrow text="لماذا دار العلم؟" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-2">
              لماذا تختار دار العلم لنقل اثاث دبي؟
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
              نعرف أن يوم النقل من أصعب الأيام على أي عائلة أو شركة. لذلك صممنا
              خدماتنا لتزيل عنك القلق من أول مكالمة.
            </p>
            <div className="flex flex-col gap-5">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[var(--secondary)] mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
