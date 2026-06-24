import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { services } from "@/lib/siteConfig";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const serviceImages: Record<string, string> = {
  "home-furniture": "/placeholders/service-home.svg",
  apartment: "/placeholders/service-home.svg",
  villa: "/placeholders/service-villa.svg",
  office: "/placeholders/service-office.svg",
  packing: "/placeholders/service-packing.svg",
  assembly: "/placeholders/service-packing.svg",
  storage: "/placeholders/service-storage.svg",
};

interface ServicesGridProps {
  eyebrow?: string;
  title?: string;
  showAll?: boolean;
}

export function ServicesGrid({
  eyebrow = "خدماتنا",
  title = "خدمات نقل الأثاث في دبي والإمارات",
  showAll = true,
}: ServicesGridProps) {
  const list = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionEyebrow text={eyebrow} />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((service) => (
            <Link
              key={service.id}
              href={`/خدماتنا/${service.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-(--primary)/30 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-accent">
                <Image
                  src={service.image ?? "/placeholders/service-home.svg"}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-medium text-[var(--secondary)] mb-1.5">
                  {service.titleAr}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {service.descAr}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--primary)] font-medium group-hover:gap-2 transition-all">
                  اعرف المزيد
                  <ChevronLeft size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
