interface SectionEyebrowProps {
  text: string;
  light?: boolean;
}

export function SectionEyebrow({ text, light = false }: SectionEyebrowProps) {
  return (
    <span
      className={`inline-block text-xs font-medium px-3 py-1 rounded-full tracking-wide uppercase mb-3 ${
        light
          ? "bg-white/20 text-white"
          : "text-[var(--primary)] bg-[var(--accent)]"
      }`}
    >
      {text}
    </span>
  );
}
