"use client";

/** Switch/toggle control with sliding knob animation. Uses button with role="switch" for accessibility. */
interface ToggleProps {
  /** Text label displayed next to the toggle. */
  label: string;
  /** Controlled on/off state. @default false */
  checked?: boolean;
  /** Called with the new state when toggled. */
  onChange?: (checked: boolean) => void;
  /** Disables interaction and reduces opacity. @default false */
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
