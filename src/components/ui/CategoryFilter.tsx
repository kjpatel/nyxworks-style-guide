"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  /** Group heading (e.g., "Category", "Color"). */
  label: string;
  /** Filter options. */
  options: FilterOption[];
}

/** Faceted filter sidebar with collapsible groups and checkboxes. */
interface CategoryFilterProps {
  /** Filter groups. */
  groups: FilterGroup[];
  /** Currently selected values keyed by group label. */
  selected: Record<string, string[]>;
  /** Called when selections change. */
  onChange: (selected: Record<string, string[]>) => void;
  className?: string;
}

export default function CategoryFilter({ groups, selected, onChange, className = "" }: CategoryFilterProps) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggleCollapse = (label: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const toggleOption = (groupLabel: string, value: string) => {
    const current = selected[groupLabel] || [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...selected, [groupLabel]: next });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {groups.map((group) => {
        const isCollapsed = collapsed.has(group.label);
        const groupSelected = selected[group.label] || [];

        return (
          <div key={group.label}>
            <button
              onClick={() => toggleCollapse(group.label)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              <span>{group.label}</span>
              <ChevronDown
                size={14}
                className={`text-[var(--color-text-muted)] transition-transform duration-200 ${
                  isCollapsed ? "" : "rotate-180"
                }`}
              />
            </button>
            {!isCollapsed && (
              <div className="space-y-2 mt-1">
                {group.options.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={groupSelected.includes(opt.value)}
                      onChange={() => toggleOption(group.label, opt.value)}
                      className="rounded border-[var(--color-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]/30 w-4 h-4"
                    />
                    <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                      {opt.label}
                    </span>
                    {opt.count !== undefined && (
                      <span className="text-xs text-[var(--color-text-muted)] ml-auto">{opt.count}</span>
                    )}
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
