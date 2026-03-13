import { InputHTMLAttributes, ReactNode } from "react";

/** Enhanced input with leading/trailing addons (icons, text, buttons). */
interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed above the input. */
  label?: string;
  /** Error message below the input. */
  error?: string;
  /** Icon inside the left edge of the input. */
  leadingIcon?: ReactNode;
  /** Icon inside the right edge of the input. */
  trailingIcon?: ReactNode;
  /** Text addon on the left, sharing the border (e.g., "https://"). */
  leadingAddon?: string;
  /** Text addon on the right, sharing the border (e.g., ".com"). */
  trailingAddon?: string;
  /** Button or element rendered as a trailing addon. */
  trailingButton?: ReactNode;
}

export default function InputGroup({
  label,
  error,
  leadingIcon,
  trailingIcon,
  leadingAddon,
  trailingAddon,
  trailingButton,
  className = "",
  id,
  ...props
}: InputGroupProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <div
        className={`flex rounded-lg border overflow-hidden bg-[var(--color-bg)] transition-colors focus-within:ring-2 ${
          error
            ? "border-[var(--color-error)] focus-within:ring-[var(--color-error)]/30"
            : "border-[var(--color-border)] focus-within:border-[var(--color-accent)] focus-within:ring-[var(--color-accent)]/30"
        } ${className}`}
      >
        {leadingAddon && (
          <span className="flex items-center px-3 bg-[var(--color-bg-card-hover)] border-r border-[var(--color-border)] text-sm text-[var(--color-text-muted)] whitespace-nowrap">
            {leadingAddon}
          </span>
        )}
        {leadingIcon && (
          <span className="flex items-center pl-3 text-[var(--color-text-muted)]">
            {leadingIcon}
          </span>
        )}
        <input
          id={inputId}
          className={`flex-1 px-3 py-2.5 bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none min-w-0 ${
            leadingIcon ? "pl-2" : ""
          } ${trailingIcon ? "pr-2" : ""}`}
          {...props}
        />
        {trailingIcon && (
          <span className="flex items-center pr-3 text-[var(--color-text-muted)]">
            {trailingIcon}
          </span>
        )}
        {trailingAddon && (
          <span className="flex items-center px-3 bg-[var(--color-bg-card-hover)] border-l border-[var(--color-border)] text-sm text-[var(--color-text-muted)] whitespace-nowrap">
            {trailingAddon}
          </span>
        )}
        {trailingButton && (
          <span className="flex items-stretch -my-px -mr-px">
            {trailingButton}
          </span>
        )}
      </div>
      {error && <p className="text-xs text-[var(--color-error-light)]">{error}</p>}
    </div>
  );
}
