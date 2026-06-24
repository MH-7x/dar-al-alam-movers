"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/types";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { GenerateFaqSchema } from "@/lib/GenerateFaqSchema";
import { ConvertFaqsInRaw } from "@/lib/ConvertFaqsInRaw";

interface FAQSectionProps {
  faqs: FAQItem[];
  eyebrow?: string;
  title?: string;
}

export function FAQSection({
  faqs,
  eyebrow = "الأسئلة الشائعة",
  title = "أسئلة يطرحها عملاؤنا",
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const schema = GenerateFaqSchema(ConvertFaqsInRaw(faqs));

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="text-center mb-10">
          <SectionEyebrow text={eyebrow} />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">{title}</h2>
        </div>
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 py-5 text-start"
                aria-expanded={open === idx}
              >
                <span className="text-base font-medium text-[var(--secondary)]">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-[var(--primary)] flex-shrink-0 transition-transform duration-200 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === idx && (
                <div className="pe-12 pb-5 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
