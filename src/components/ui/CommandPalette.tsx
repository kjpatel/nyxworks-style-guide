"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { Search } from "lucide-react";

interface CommandItem {
  /** Unique identifier. */
  id: string;
  /** Display label. */
  label: string;
  /** Icon rendered before the label. */
  icon?: ReactNode;
  /** Keyboard shortcut hint (e.g., "⌘K"). */
  shortcut?: string;
  /** Called when the item is selected. */
  onSelect: () => void;
  /** Optional group heading (items are grouped by this value). */
  group?: string;
}

/** Cmd+K searchable command overlay for quick navigation and actions. */
interface CommandPaletteProps {
  /** Controls visibility. */
  open: boolean;
  /** Called when backdrop, Escape, or selection closes the palette. */
  onClose: () => void;
  /** Command items to search and display. */
  items: CommandItem[];
  /** Input placeholder. @default "Type a command…" */
  placeholder?: string;
}

export default function CommandPalette({
  open,
  onClose,
  items,
  placeholder = "Type a command\u2026",
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  // Group items by group field
  const groups: { label: string; items: CommandItem[] }[] = [];
  const seen = new Set<string>();
  for (const item of filtered) {
    const g = item.group ?? "";
    if (!seen.has(g)) {
      seen.add(g);
      groups.push({ label: g, items: [] });
    }
    groups.find((gr) => gr.label === g)!.items.push(item);
  }

  const flatItems = groups.flatMap((g) => g.items);

  const selectItem = useCallback(
    (item: CommandItem) => {
      item.onSelect();
      onClose();
      setQuery("");
      setActiveIndex(0);
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % Math.max(flatItems.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + flatItems.length) % Math.max(flatItems.length, 1));
      } else if (e.key === "Enter" && flatItems[activeIndex]) {
        e.preventDefault();
        selectItem(flatItems[activeIndex]);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, activeIndex, flatItems, onClose, selectItem]);

  if (!open) return null;

  let flatIndex = 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <Search size={18} className="text-[var(--color-text-muted)] shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full text-sm bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
          />
        </div>
        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-sm text-[var(--color-text-muted)] text-center">No results</p>
          ) : (
            groups.map((group) => (
              <div key={group.label}>
                {group.label && (
                  <p className="px-4 pt-3 pb-1 text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                    {group.label}
                  </p>
                )}
                {group.items.map((item) => {
                  const idx = flatIndex++;
                  return (
                    <button
                      key={item.id}
                      onClick={() => selectItem(item)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        idx === activeIndex
                          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]"
                      }`}
                    >
                      {item.icon && <span className="shrink-0">{item.icon}</span>}
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.shortcut && (
                        <kbd className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono">
                          {item.shortcut}
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
