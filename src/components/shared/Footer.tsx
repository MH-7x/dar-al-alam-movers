import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, services, locations } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/logo-2-for-black-bg.svg"
              alt="شركة دار العلم نقل اثاث"
              width={200}
              height={100}
              className="mb-6"
            />
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              شركة دار العلم نقل اثاث — خبرة تتجاوز 15 عامًا في نقل الأثاث بدبي
              وكل الإمارات. فريق محترف، شاحنات مغلقة، تأمين شامل.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-[var(--accent)]" />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>واتساب — رد خلال 10 دقائق</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">خدماتنا</h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/خدماتنا/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.titleAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">
              مناطق الخدمة
            </h3>
            <ul className="flex flex-col gap-2">
              {locations.map((l) => (
                <li key={l.id}>
                  <Link
                    href={`/المواقع/${l.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    نقل اثاث {l.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">الشركة</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/من-نحن"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/اتصل-بنا"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link
                  href="/سياسة-الخصوصية"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/شروط-الخدمة"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/50">ساعات العمل</p>
              <p className="text-sm text-white/80 mt-1">{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name} — جميع الحقوق محفوظة
          </p>
          <p className="text-xs text-white/50">
            التغطية: {siteConfig.coverage}
          </p>
        </div>
      </div>
    </footer>
  );
}
