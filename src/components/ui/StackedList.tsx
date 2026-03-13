import { ReactNode } from "react";

interface StackedListItem {
  /** Unique key. */
  id: string;
  /** Primary text (name, title). */
  primary: string;
  /** Secondary text (description, subtitle). */
  secondary?: string;
  /** Left element (Avatar, icon, image). */
  left?: ReactNode;
  /** Right element (Badge, action button, timestamp). */
  right?: ReactNode;
  /** Click handler for the row. */
  onClick?: () => void;
}

/** Stacked list of items with optional avatar, text, and trailing action. */
interface StackedListProps {
  /** List items. */
  items: StackedListItem[];
}

export default function StackedList({ items }: StackedListProps) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] divide-y divide-[var(--color-border)] overflow-hidden">
      {items.map((item) => {
        const Tag = item.onClick ? "button" : "div";
        return (
          <Tag
            key={item.id}
            onClick={item.onClick}
            className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-colors ${
              item.onClick ? "hover:bg-[var(--color-bg-card-hover)] cursor-pointer" : ""
            }`}
          >
            {item.left && <span className="shrink-0">{item.left}</span>}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.primary}</p>
              {item.secondary && (
                <p className="text-xs text-[var(--color-text-muted)] truncate">{item.secondary}</p>
              )}
            </div>
            {item.right && <span className="shrink-0">{item.right}</span>}
          </Tag>
        );
      })}
    </div>
  );
}
