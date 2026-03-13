import { ReactNode } from "react";

interface FeedItem {
  /** Unique key. */
  id: string;
  /** Left element (Avatar, icon). */
  icon?: ReactNode;
  /** Main content (description of the event). */
  content: ReactNode;
  /** Timestamp or relative time. */
  timestamp: string;
}

/** Activity feed / timeline for showing chronological events. */
interface FeedProps {
  /** Feed items in chronological order. */
  items: FeedItem[];
}

export default function Feed({ items }: FeedProps) {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {items.map((item, i) => (
          <li key={item.id}>
            <div className="relative pb-8">
              {i < items.length - 1 && (
                <span className="absolute left-4 top-5 -ml-px h-full w-0.5 bg-[var(--color-border)]" />
              )}
              <div className="relative flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)]">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="text-sm text-[var(--color-text-secondary)]">{item.content}</div>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.timestamp}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
