import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "solid" | "muted" | "split";
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta = { label: "اطلب عرض السعر", href: "/اتصل-بنا" },
  secondaryCta = { label: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
  variant = "solid",
}: CTASectionProps) {
  const isSolid = variant === "solid";
  const isMuted = variant === "muted";

  return (
    <section
      className={`py-16 md:py-24 ${
        isSolid
          ? "bg-[var(--primary)]"
          : isMuted
          ? "bg-[var(--accent)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full tracking-wide uppercase mb-3 ${
              isSolid ? "bg-white/20 text-white" : "bg-[var(--primary)] text-white"
            }`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`text-2xl md:text-3xl font-bold mb-4 ${
            isSolid ? "text-white" : "text-[var(--secondary)]"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-base mb-8 leading-relaxed ${
              isSolid ? "text-white/80" : "text-[var(--muted-foreground)]"
            }`}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-opacity hover:opacity-90 ${
              isSolid
                ? "bg-white text-[var(--primary)]"
                : "bg-[var(--primary)] text-white"
            }`}
          >
            {primaryCta.label}
            <ArrowLeft size={16} />
          </Link>
          <a
            href={secondaryCta.href}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border transition-opacity hover:opacity-90 ${
              isSolid
                ? "border-white text-white"
                : "border-[var(--primary)] text-[var(--primary)]"
            }`}
          >
            <Phone size={16} />
            <span dir="ltr">{secondaryCta.label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
