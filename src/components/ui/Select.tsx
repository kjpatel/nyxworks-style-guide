import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

/** Themed select dropdown with custom chevron, label, and error state. */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Label displayed above the select. */
  label?: string;
  /** Error message displayed below. Turns border red when set. */
  error?: string;
  /** List of options with value/label pairs. */
  options: { value: string; label: string }[];
}

export default function Select({ label, error, options, className = "", id, ...props }: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`w-full appearance-none px-4 py-2.5 pr-10 rounded-lg bg-[var(--color-bg)] border text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 transition-colors ${
            error
              ? "border-[var(--color-error)] focus:ring-[var(--color-error)]/30"
              : "border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30"
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none"
        />
      </div>
      {error && <p className="text-xs text-[var(--color-error-light)]">{error}</p>}
    </div>
  );
}
