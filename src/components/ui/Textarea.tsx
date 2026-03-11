import { TextareaHTMLAttributes } from "react";

/** Multi-line text input with optional label and error message. */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label displayed above the textarea. */
  label?: string;
  /** Error message displayed below. Turns border red when set. */
  error?: string;
}

export default function Textarea({ label, error, className = "", id, ...props }: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg)] border text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 transition-colors resize-y min-h-[100px] ${
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
