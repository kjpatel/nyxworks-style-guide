import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
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
