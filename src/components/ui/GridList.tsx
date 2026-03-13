import { ReactNode } from "react";

interface GridListItem {
  /** Unique key. */
  id: string;
  /** Item title. */
  title: string;
  /** Optional description below the title. */
  description?: string;
  /** Optional image or icon slot (rendered at top of card). */
  image?: ReactNode;
  /** Optional badge overlay (top-right corner). */
  badge?: ReactNode;
  /** Click handler. Makes the card interactive. */
  onClick?: () => void;
}

/** Responsive grid of selectable/clickable cards. */
interface GridListProps {
  /** Grid items. */
  items: GridListItem[];
  /** Number of columns. @default 3 */
  columns?: 2 | 3 | 4;
}

const columnMap = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function GridList({ items, columns = 3 }: GridListProps) {
  return (
    <div className={`grid gap-4 ${columnMap[columns]}`}>
      {items.map((item) => {
        const Tag = item.onClick ? "button" : "div";
        return (
          <Tag
            key={item.id}
            onClick={item.onClick}
            className={`rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden text-left transition-all ${
              item.onClick
                ? "hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] cursor-pointer"
                : ""
            }`}
          >
            {item.image && (
              <div className="relative">
                {item.image}
                {item.badge && <div className="absolute top-2 right-2">{item.badge}</div>}
              </div>
            )}
            <div className="p-4">
              {!item.image && item.badge && <div className="mb-2">{item.badge}</div>}
              <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.title}</p>
              {item.description && (
                <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2">{item.description}</p>
              )}
            </div>
          </Tag>
        );
      })}
    </div>
  );
}
