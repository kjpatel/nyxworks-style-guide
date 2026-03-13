import { ReactNode } from "react";

interface DescriptionItem {
  /** Key / label. */
  label: string;
  /** Value — can be text or any ReactNode. */
  value: ReactNode;
}

/** Key-value pair display for detail pages, billing summaries, and order info. */
interface DescriptionListProps {
  /** List of label-value pairs. */
  items: DescriptionItem[];
  /** Layout direction. @default "horizontal" */
  layout?: "horizontal" | "stacked";
}

export default function DescriptionList({ items, layout = "horizontal" }: DescriptionListProps) {
  if (layout === "stacked") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-[var(--color-text-muted)] mb-1">{item.label}</dt>
            <dd className="text-sm text-[var(--color-text-primary)]">{item.value}</dd>
          </div>
        ))}
      </div>
    );
  }

  return (
    <dl className="divide-y divide-[var(--color-border)]">
      {items.map((item) => (
        <div key={item.label} className="flex items-start justify-between py-3 gap-4">
          <dt className="text-sm text-[var(--color-text-muted)] shrink-0">{item.label}</dt>
          <dd className="text-sm text-[var(--color-text-primary)] text-right">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
