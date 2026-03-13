"use client";

import { ReactNode } from "react";

interface ButtonGroupItem {
  /** Unique value for this option. */
  value: string;
  /** Display label. */
  label: ReactNode;
}

/** Segmented control / grouped button selector for toggling between views or filters. */
interface ButtonGroupProps {
  /** Available options. */
  items: ButtonGroupItem[];
  /** Currently selected value. */
  value: string;
  /** Called with the new value when selection changes. */
  onChange: (value: string) => void;
  /** Size variant. @default "md" */
  size?: "sm" | "md";
}

export default function ButtonGroup({ items, value, onChange, size = "md" }: ButtonGroupProps) {
  const padding = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";

  return (
    <div className="inline-flex rounded-lg border border-[var(--color-border)] overflow-hidden">
      {items.map((item, i) => (
        <button
          key={item.value}
          onClick={() => onChange(item.value)}
          className={`${padding} font-medium transition-colors ${
            value === item.value
              ? "bg-[var(--color-accent)] text-white"
              : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]"
          } ${i > 0 ? "border-l border-[var(--color-border)]" : ""}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
