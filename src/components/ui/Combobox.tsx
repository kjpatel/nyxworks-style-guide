"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

interface ComboboxOption {
  value: string;
  label: string;
}

/** Searchable select dropdown for long option lists (users, countries, tags). */
interface ComboboxProps {
  /** Label displayed above the input. */
  label?: string;
  /** Placeholder text. @default "Search…" */
  placeholder?: string;
  /** Full list of options to filter against. */
  options: ComboboxOption[];
  /** Currently selected value. */
  value?: string;
  /** Called with the selected option's value. */
  onChange?: (value: string) => void;
  /** Error message. */
  error?: string;
  /** Disables the combobox. @default false */
  disabled?: boolean;
}

export default function Combobox({
  label,
  placeholder = "Search\u2026",
  options,
  value,
  onChange,
  error,
  disabled = false,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputId = label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div ref={ref} className="relative space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <button
        type="button"
        id={inputId}
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-[var(--color-bg)] border text-sm transition-colors ${
          error
            ? "border-[var(--color-error)]"
            : open
              ? "border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/30"
              : "border-[var(--color-border)]"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className={selected ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          size={14}
          className={`text-[var(--color-text-muted)] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-xl z-50 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--color-border)]">
            <Search size={14} className="text-[var(--color-text-muted)] shrink-0" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="w-full text-sm bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
            />
          </div>
          <div className="max-h-60 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-sm text-[var(--color-text-muted)]">No results</p>
            ) : (
              filtered.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange?.(option.value);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    option.value === value
                      ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {error && <p className="text-xs text-[var(--color-error-light)]">{error}</p>}
    </div>
  );
}
