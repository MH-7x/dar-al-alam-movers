"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function StickyCTAs() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("quote-form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed bottom-4 end-4 z-50 flex flex-col gap-3">
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="اتصل بنا"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary)] text-white shadow-xl hover:opacity-90 transition-opacity"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
