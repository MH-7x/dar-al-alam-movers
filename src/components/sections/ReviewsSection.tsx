import { Star, Quote } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const reviews = [
  {
    name: "أحمد الشمري",
    location: "مردف، دبي",
    text: "خدمة ممتازة من أول تواصل حتى التسليم. الفريق محترف جدًا وما تأخروا ولا دقيقة. شكرًا دار العلم.",
    stars: 5,
    type: "نقل فيلا",
  },
  {
    name: "فاطمة العلي",
    location: "الشارقة",
    text: "نقلوا أثاث بيتنا من دبي للشارقة بدون أي كسر أو خدش. السعر كان واضح من البداية وما تغير.",
    stars: 5,
    type: "نقل بين الإمارات",
  },
  {
    name: "محمد الزعابي",
    location: "الجداف، دبي",
    text: "جربت شركات ثانية قبل وكانت تجربة سيئة. مع دار العلم الخدمة كانت على مستوى. أنصح الكل فيهم.",
    stars: 5,
    type: "نقل شقة",
  },
  {
    name: "سارة خالد",
    location: "أبوظبي",
    text: "غاية في الأمانة والدقة. غليّفوا كل قطعة صغيرة بعناية وركبوا كل شيء في بيتنا الجديد.",
    stars: 5,
    type: "نقل مع تغليف",
  },
  {
    name: "خالد المنصوري",
    location: "الروضة، دبي",
    text: "أفضل شركة نقل اثاث تعاملت معها في دبي. سعر معقول، التزام بالمواعيد، فريق محترم.",
    stars: 5,
    type: "نقل مكتب",
  },
  {
    name: "نورة بنت راشد",
    location: "عجمان",
    text: "ردوا علي على الواتساب خلال دقائق وعطوني عرض سعر فوري. يوم النقل سار بدون مشاكل.",
    stars: 5,
    type: "نقل شقة",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionEyebrow text="آراء عملائنا" />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">ماذا يقول عملاؤنا</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-[var(--secondary)]">4.9</span>
            <span className="text-sm text-[var(--muted-foreground)]">من 5 — بناءً على +320 تقييم</span>
          </div>
        </div>

        {/* Grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="snap-start flex-shrink-0 w-[85vw]">
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  location,
  text,
  stars,
  type,
}: {
  name: string;
  location: string;
  text: string;
  stars: number;
  type: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
      {/* Quote icon + stars */}
      <div className="flex items-start justify-between">
        <Quote size={28} className="text-[var(--accent)] fill-[var(--accent)]" />
        <div className="flex items-center gap-0.5">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">{text}</p>

      {/* Footer */}
      <div className="flex items-end justify-between pt-3 border-t border-[var(--border)]">
        <div>
          <p className="text-sm font-medium text-[var(--secondary)]">{name}</p>
          <p className="text-xs text-[var(--muted-foreground)]">{location}</p>
        </div>
        <span className="text-xs bg-[var(--accent)] text-[var(--primary)] px-2 py-1 rounded-full font-medium">
          {type}
        </span>
      </div>
    </div>
  );
}
