"use client";

import { useState, ReactNode } from "react";

interface Tab {
  /** Tab button label. */
  label: string;
  /** Content rendered when this tab is active. */
  content: ReactNode;
}

/** Tabbed content switcher with accent underline on the active tab. */
interface TabsProps {
  /** Array of tab definitions. */
  tabs: Tab[];
  /** Initially active tab index. @default 0 */
  defaultIndex?: number;
}

export default function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div>
      <div className="flex gap-1 border-b border-[var(--color-border)] mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              active === i
                ? "border-[var(--color-accent)] text-[var(--color-accent-light)]"
                : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
