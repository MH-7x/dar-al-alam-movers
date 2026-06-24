import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const steps = [
  {
    number: "01",
    title: "اطلب عرض السعر",
    desc: "تواصل معنا عبر الهاتف أو واتساب وسنرد خلال 10 دقائق بتقدير سعر مبدئي",
  },
  {
    number: "02",
    title: "التغليف والفك",
    desc: "يصل فريقنا في الموعد المحدد ويتولى تغليف وفك جميع قطع الأثاث بعناية",
  },
  {
    number: "03",
    title: "النقل الآمن",
    desc: "ننقل أثاثك في شاحناتنا المغلقة والمكيفة مع تأمين شامل على كل القطع",
  },
  {
    number: "04",
    title: "التركيب والتسليم",
    desc: "نركب الأثاث في مكانه الجديد ونسلمك المكان مرتبًا جاهزًا للسكن",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionEyebrow text="كيف نعمل" />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">أربع خطوات لنقل مريح</h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-start">
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 start-[calc(50%+20px)] end-[-50%] h-px bg-[var(--border)]" />
              )}
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="text-base font-medium text-[var(--secondary)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
