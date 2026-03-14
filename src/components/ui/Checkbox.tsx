"use client";

import { Check } from "lucide-react";

/** Custom checkbox with accent color when checked. Uses button with role="checkbox" for accessibility. */
interface CheckboxProps {
  /** Text label displayed next to the checkbox. */
  label: string;
  /** Controlled checked state. @default false */
  checked?: boolean;
  /** Called with the new checked value when toggled. */
  onChange?: (checked: boolean) => void;
  /** Disables interaction and reduces opacity. @default false */
  disabled?: boolean;
}

export default function Checkbox({ label, checked = false, onChange, disabled = false }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
          checked
            ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
            : "bg-[var(--color-bg)] border-[var(--color-border)] hover:border-[var(--color-accent)]/50"
        }`}
      >
        {checked && <Check size={14} className="text-white" />}
      </button>
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
    </label>
  );
}
