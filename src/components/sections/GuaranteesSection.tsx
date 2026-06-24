import { ShieldCheck, Clock, DollarSign, Lock } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "ضمان عدم الكسر",
    desc: "أي قطعة تتلف بسبب فريقنا، نتحمل تكلفة الإصلاح أو الاستبدال الكامل بدون جدال.",
  },
  {
    icon: Clock,
    title: "ضمان الموعد",
    desc: "نصل في الوقت المتفق عليه — في حال تأخرنا لأي سبب، نخصم مبلغًا محددًا من الفاتورة.",
  },
  {
    icon: DollarSign,
    title: "ضمان السعر",
    desc: "السعر المعروض هو السعر النهائي، مهما طالت ساعات العمل أو زاد عدد القطع.",
  },
  {
    icon: Lock,
    title: "ضمان السرية",
    desc: "للشركات والمكاتب، نوقّع اتفاقية عدم إفصاح إذا طلب العميل ذلك.",
  },
];

export function GuaranteesSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full tracking-wide mb-3">
            ضماناتنا
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            4 ضمانات نلتزم بها لكل عميل
          </h2>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">
            نلتزم بهذه الضمانات لأننا نؤمن بأن الثقة تُبنى بالأفعال لا بالكلام
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-medium text-white mb-2">{title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
