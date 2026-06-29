import type { FAQItem } from "./types";
import type { ReactNode } from "react";

export interface RawFAQ {
  question: string;
  answer: string;
}

function extractText(node: ReactNode): string {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join(" ");
  }
  if (typeof node === "object" && "props" in node) {
    const props = (node as any).props;
    if (props && props.children) {
      return extractText(props.children);
    }
  }
  return "";
}

export function ConvertFaqsInRaw(faqs: FAQItem[]): RawFAQ[] {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: extractText(faq.answer).trim(),
  }));
}
