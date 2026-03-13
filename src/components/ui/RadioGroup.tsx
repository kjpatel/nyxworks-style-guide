"use client";

interface RadioOption {
  /** Option value. */
  value: string;
  /** Display label. */
  label: string;
  /** Optional description shown below the label. */
  description?: string;
}

/** Mutually exclusive option selection for forms and settings. */
interface RadioGroupProps {
  /** Label displayed above the group. */
  label?: string;
  /** Available options. */
  options: RadioOption[];
  /** Currently selected value. */
  value?: string;
  /** Called with the new value when selection changes. */
  onChange?: (value: string) => void;
  /** Error message displayed below. */
  error?: string;
  /** Disables all options. @default false */
  disabled?: boolean;
}

export default function RadioGroup({
  label,
  options,
  value,
  onChange,
  error,
  disabled = false,
}: RadioGroupProps) {
  return (
    <fieldset className={`space-y-1.5 ${disabled ? "opacity-50" : ""}`} disabled={disabled}>
      {label && (
        <legend className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">
          {label}
        </legend>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-start gap-3 cursor-pointer rounded-lg p-3 border transition-colors ${
              value === option.value
                ? "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5"
                : "border-[var(--color-border)] hover:border-[var(--color-accent)]/20"
            } ${disabled ? "cursor-not-allowed" : ""}`}
          >
            <span
              className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                value === option.value
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                  : "border-[var(--color-border)]"
              }`}
              onClick={() => !disabled && onChange?.(option.value)}
            >
              {value === option.value && <span className="w-2 h-2 rounded-full bg-white" />}
            </span>
            <div onClick={() => !disabled && onChange?.(option.value)}>
              <span className="text-sm text-[var(--color-text-primary)]">{option.label}</span>
              {option.description && (
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{option.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-xs text-[var(--color-error-light)]">{error}</p>}
    </fieldset>
  );
}
