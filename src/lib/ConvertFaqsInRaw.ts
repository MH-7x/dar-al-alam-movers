import type { FAQItem } from "./types";

export interface RawFAQ {
  question: string;
  answer: string;
}

export function ConvertFaqsInRaw(faqs: FAQItem[]): RawFAQ[] {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: typeof faq.answer === "string" ? faq.answer : "",
  }));
}
