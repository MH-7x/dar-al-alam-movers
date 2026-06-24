import Link from "next/link";
import { MapPin, ChevronLeft } from "lucide-react";
import { locations } from "@/lib/siteConfig";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

interface LocationsGridProps {
  eyebrow?: string;
  title?: string;
}

export function LocationsGrid({
  eyebrow = "تغطية شاملة",
  title = "نصل إلى كل إمارة",
}: LocationsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionEyebrow text={eyebrow} />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">{title}</h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto">
            نقدم خدمات نقل الأثاث في دبي وجميع الإمارات السبع بنفس مستوى الجودة والاحترافية
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/المواقع/${loc.slug}`}
              className="group flex items-start gap-3 p-5 rounded-xl border border-[var(--border)] bg-white hover:shadow-md transition-shadow"
            >
              <MapPin size={18} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-base font-medium text-[var(--secondary)]">نقل اثاث {loc.nameAr}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">{loc.descAr}</p>
                <span className="flex items-center gap-1 text-sm text-[var(--primary)] font-medium mt-2">
                  اعرف المزيد
                  <ChevronLeft size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
