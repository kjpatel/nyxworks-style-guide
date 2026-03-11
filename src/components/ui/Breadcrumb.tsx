import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  /** Display text for the breadcrumb segment. */
  label: string;
  /** Link URL. Last item (current page) typically omits this. */
  href?: string;
}

/** Navigation breadcrumb trail with chevron separators. Last item renders as plain text. */
interface BreadcrumbProps {
  /** Ordered list of breadcrumb segments. */
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={14} className="text-[var(--color-text-muted)]" />}
          {item.href ? (
            <Link
              href={item.href}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-light)] no-underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--color-text-primary)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
