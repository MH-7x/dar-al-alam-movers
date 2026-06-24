import { MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const dubaiAreas = [
  "دبي مارينا",
  "جميرا (1، 2، 3)",
  "نخلة جميرا",
  "البرشاء",
  "ديرة",
  "بر دبي",
  "وسط مدينة دبي",
  "الخليج التجاري",
  "JLT",
  "JVC",
  "JVT",
  "مردف",
  "القصيص",
  "القرهود",
  "الراشدية",
  "الجداف",
  "الفرجان",
  "موتور سيتي",
  "واحة دبي للسيليكون",
  "دبي هيلز",
  "دبي الجنوب",
  "DIFC",
  "القوز",
  "الكرامة",
  "النهضة",
  "الممزر",
  "ريمرام",
  "ليوان",
  "دبي لاند",
];

const emirates = [
  "أبوظبي",
  "الشارقة",
  "عجمان",
  "رأس الخيمة",
  "الفجيرة",
  "أم القيوين",
  "العين",
];

export function CoverageAreas() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionEyebrow text="التغطية الجغرافية" />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
            مناطق تغطية نقل الأثاث في دبي
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto">
            نغطي جميع مناطق دبي الرئيسية وكل الإمارات السبع بنفس مستوى الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dubai areas */}
          <div>
            <h3 className="text-base font-medium text-[var(--secondary)] mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-[var(--primary)]" />
              مناطق دبي
            </h3>
            <div className="">
              <div className="flex flex-wrap gap-2">
                {dubaiAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--primary)] font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <h3 className="text-base font-medium text-[var(--secondary)] mb-4 flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--primary)]" />
                  خارج دبي
                </h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                  {emirates.map((em) => (
                    <div
                      key={em}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                      <span className="text-sm text-[var(--secondary)]">
                        نقل اثاث {em}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-4/3 bg-muted rounded-2xl"></div>
          {/* Other emirates */}
        </div>
      </div>
    </section>
  );
}
