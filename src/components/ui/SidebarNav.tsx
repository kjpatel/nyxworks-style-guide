"use client";

import { ReactNode } from "react";

interface NavSection {
  /** Optional section heading. */
  heading?: string;
  /** Navigation items in this section. */
  items: NavItem[];
}

interface NavItem {
  /** Unique identifier / href. */
  id: string;
  /** Display label. */
  label: string;
  /** Icon rendered before the label. */
  icon?: ReactNode;
  /** Badge or count rendered after the label. */
  badge?: ReactNode;
}

/** Vertical sidebar navigation with sections, icons, and active state. */
interface SidebarNavProps {
  /** Navigation sections. */
  sections: NavSection[];
  /** Currently active item id. */
  activeId: string;
  /** Called when an item is clicked. */
  onSelect: (id: string) => void;
}

export default function SidebarNav({ sections, activeId, onSelect }: SidebarNavProps) {
  return (
    <nav className="space-y-6">
      {sections.map((section, i) => (
        <div key={section.heading ?? i}>
          {section.heading && (
            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 px-3">
              {section.heading}
            </p>
          )}
          <div className="space-y-0.5">
            {section.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeId === item.id
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] font-medium"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && <span className="shrink-0">{item.badge}</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
