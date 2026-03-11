"use client";

import { Check } from "lucide-react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Checkbox({ label, checked = false, onChange, disabled = false }: CheckboxProps) {
  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
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
