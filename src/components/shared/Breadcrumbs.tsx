import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className="py-3">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronLeft size={14} className={light ? "text-white/50" : "text-[var(--muted-foreground)]"} />
            )}
            {index === items.length - 1 ? (
              <span
                className={`text-sm ${light ? "text-white/70" : "text-[var(--muted-foreground)]"}`}
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`text-sm hover:underline ${light ? "text-white/90" : "text-[var(--primary)]"}`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
