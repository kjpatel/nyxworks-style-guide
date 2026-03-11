import { InputHTMLAttributes } from "react";

/** Text input with optional label and error message. Supports all native input attributes. */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed above the input. Also used to generate `id` if not provided. */
  label?: string;
  /** Error message displayed below the input. Turns border red when set. */
  error?: string;
}

export default function Input({ label, error, className = "", id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg)] border text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 transition-colors ${
          error
            ? "border-[var(--color-error)] focus:ring-[var(--color-error)]/30"
            : "border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-[var(--color-error-light)]">{error}</p>}
    </div>
  );
}
