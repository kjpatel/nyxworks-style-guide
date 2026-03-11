"use client";

interface ToggleProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Toggle({ label, checked = false, onChange, disabled = false }: ToggleProps) {
  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative w-10 h-6 rounded-full transition-colors ${
          checked ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
    </label>
  );
}
