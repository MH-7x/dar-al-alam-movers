const stats = [
  { value: "+15", label: "سنة خبرة", sub: "في دبي والإمارات" },
  { value: "+10,000", label: "عملية نقل ناجحة", sub: "بدون كسر أو خدش" },
  { value: "+50", label: "فرد في الفريق", sub: "مدرّبون ومؤمَّنون" },
  { value: "+20", label: "شاحنة مغلقة", sub: "مكيّفة بمقاسات متعددة" },
];

export function TrustStats() {
  return (
    <section className="bg-white border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`py-8 px-6 text-center ${idx < stats.length - 1 ? "border-e border-[var(--border)]" : ""}`}
            >
              <div
                className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-1"
                style={{ fontFamily: "var(--font-ts-tarek), sans-serif" }}
              >
                {stat.value}
              </div>
              <p className="text-sm font-medium text-[var(--secondary)]">{stat.label}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
