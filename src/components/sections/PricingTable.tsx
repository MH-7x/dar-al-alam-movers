import Link from "next/link";
import { Phone } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { siteConfig } from "@/lib/siteConfig";

const rows = [
  { type: "استوديو", workers: "3", trucks: "1", price: "500 – 800" },
  { type: "شقة غرفة وصالة", workers: "3 – 4", trucks: "1", price: "800 – 1,400" },
  { type: "شقة غرفتين وصالة", workers: "4 – 5", trucks: "1 – 2", price: "1,200 – 2,200" },
  { type: "شقة 3 غرف", workers: "5 – 6", trucks: "2", price: "1,800 – 2,800" },
  { type: "فيلا غرفتين", workers: "5 – 6", trucks: "2", price: "2,000 – 3,200" },
  { type: "فيلا 3 غرف", workers: "6 – 7", trucks: "2 – 3", price: "2,800 – 4,500" },
  { type: "فيلا 4+ غرف", workers: "7+", trucks: "3+", price: "يحدد بالمعاينة" },
  { type: "مكتب صغير", workers: "4 – 5", trucks: "1 – 2", price: "1,500 – 3,000" },
];

export function PricingTable() {
  return (
    <section className="py-16 md:py-24 bg-[var(--muted)]">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionEyebrow text="الأسعار" />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
            أسعار نقل الأثاث في دبي 2026
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto">
            نؤمن بالشفافية الكاملة. هذه أسعار تقريبية — السعر الفعلي يُحدد بعد المعاينة المجانية.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[var(--border)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--primary)] text-white">
                  <th className="text-start px-5 py-4 font-medium">نوع العقار</th>
                  <th className="text-center px-4 py-4 font-medium">عدد العمال</th>
                  <th className="text-center px-4 py-4 font-medium">الشاحنات</th>
                  <th className="text-end px-5 py-4 font-medium">السعر (درهم)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.type}
                    className={`border-t border-[var(--border)] transition-colors hover:bg-[var(--accent)]/30 ${
                      idx % 2 === 1 ? "bg-[var(--muted)]/50" : ""
                    }`}
                  >
                    <td className="px-5 py-3.5 font-medium text-[var(--secondary)]">{row.type}</td>
                    <td className="px-4 py-3.5 text-center text-[var(--muted-foreground)]">{row.workers}</td>
                    <td className="px-4 py-3.5 text-center text-[var(--muted-foreground)]">{row.trucks}</td>
                    <td className="px-5 py-3.5 text-end font-medium text-[var(--primary)]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 bg-[var(--accent)]/30 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              <strong className="text-[var(--secondary)]">السعر يشمل:</strong> الفك، التغليف، النقل، التركيب، والتنظيف بعد النقل.
              {" "}<strong className="text-[var(--secondary)]">يتغير حسب:</strong> الطابق، توفر المصعد، المسافة، وكمية القطع الزجاجية.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone size={16} />
            احصل على عرض سعر دقيق ومجاني — {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
