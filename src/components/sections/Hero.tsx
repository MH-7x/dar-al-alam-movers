import Image from "next/image";
import { Phone, CheckCircle, MessageCircle, Shield, Clock, Award } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { QuoteForm } from "./QuoteForm";

interface HeroProps {
  title: string;
  subtitle?: string;
  showForm?: boolean;
  compact?: boolean;
  breadcrumb?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const trustBadges = [
  { icon: Award, label: "خبرة +15 سنة" },
  { icon: Shield, label: "تأمين شامل" },
  { icon: Clock, label: "رد خلال 10 دقائق" },
];

export function Hero({
  title,
  subtitle,
  showForm = true,
  compact = false,
  breadcrumb,
  imageSrc = "/placeholders/hero.svg",
  imageAlt = "شركة دار العلم نقل اثاث دبي",
}: HeroProps) {
  if (compact) {
    return (
      <section className="relative bg-[var(--primary)] py-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {breadcrumb}
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-3 leading-tight">{title}</h1>
          {subtitle && <p className="text-white/80 text-base max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[var(--primary)] overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              متاح الآن — رد خلال 10 دقائق
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                {subtitle}
              </p>
            )}

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-7">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                  <Icon size={15} className="text-white/80" />
                  <span className="text-white text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl text-sm font-medium"
              >
                <MessageCircle size={17} />
                واتساب — رد فوري
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-[var(--primary)] px-5 py-3 rounded-xl text-sm font-medium"
              >
                <Phone size={17} />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Desktop contact */}
            <div className="hidden lg:flex items-center gap-4 mt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                <span dir="ltr" className="font-medium">{siteConfig.phoneDisplay}</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
              >
                <MessageCircle size={16} />
                <span>واتساب — رد خلال 10 دقائق</span>
              </a>
            </div>
          </div>

          {/* Form or Image */}
          {showForm ? (
            <div className="lg:ms-auto w-full lg:max-w-md">
              <QuoteForm variant="hero" />
            </div>
          ) : (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-10 bg-[var(--primary)]">
        <svg viewBox="0 0 1440 40" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 L1440,40 L1440,0 Q720,40 0,0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
