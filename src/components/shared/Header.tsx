"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig, services, locations } from "@/lib/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo-1.svg"
              alt="شركة دار العلم نقل اثاث"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
              الرئيسية
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
                خدماتنا
              </button>
              <div className="absolute top-full end-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm text-[var(--secondary)] hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    {s.titleAr}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
                مناطق الخدمة
              </button>
              <div className="absolute top-full end-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {locations.map((l) => (
                  <Link
                    key={l.id}
                    href={`/locations/${l.slug}`}
                    className="block px-4 py-2.5 text-sm text-[var(--secondary)] hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    {l.nameAr}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
              اتصل بنا
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:flex items-center gap-2 bg-[var(--primary)] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[var(--secondary)]"
              aria-label="القائمة"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-[var(--secondary)]">الرئيسية</Link>
            <div className="py-1">
              <p className="text-xs text-[var(--muted-foreground)] py-1 font-medium">خدماتنا</p>
              {services.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block py-2 ps-3 text-sm text-[var(--secondary)]">
                  {s.titleAr}
                </Link>
              ))}
            </div>
            <div className="py-1">
              <p className="text-xs text-[var(--muted-foreground)] py-1 font-medium">مناطق الخدمة</p>
              {locations.map((l) => (
                <Link key={l.id} href={`/locations/${l.slug}`} onClick={() => setOpen(false)} className="block py-2 ps-3 text-sm text-[var(--secondary)]">
                  {l.nameAr}
                </Link>
              ))}
            </div>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-[var(--secondary)]">من نحن</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-[var(--secondary)]">اتصل بنا</Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white text-sm font-medium px-4 py-3 rounded-lg"
            >
              <Phone size={16} />
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
