"use client";

import { useState } from "react";

type Variant = "centered" | "inline" | "card";

/** Email capture / newsletter signup section. */
interface NewsletterProps {
  /** Section heading. */
  title: string;
  /** Supporting description. */
  description?: string;
  /** Input placeholder. @default "Enter your email" */
  placeholder?: string;
  /** Button label. @default "Subscribe" */
  buttonLabel?: string;
  /** Called with email value on submit. */
  onSubmit?: (email: string) => void;
  /** Layout variant. @default "centered" */
  variant?: Variant;
  className?: string;
}

export default function Newsletter({
  title,
  description,
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  onSubmit,
  variant = "centered",
  className = "",
}: NewsletterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setEmail("");
  };

  const inputRow = (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 transition-colors"
      />
      <button
        type="submit"
        className="shrink-0 px-4 py-2.5 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm font-medium transition-colors"
      >
        {buttonLabel}
      </button>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
          {description && <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{description}</p>}
        </div>
        <div className="w-full sm:w-auto sm:min-w-[320px]">{inputRow}</div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-8 text-center ${className}`}>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{title}</h3>
        {description && <p className="text-sm text-[var(--color-text-secondary)] mt-2">{description}</p>}
        <div className="mt-6 max-w-md mx-auto">{inputRow}</div>
      </div>
    );
  }

  // centered
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h3>
      {description && <p className="text-[var(--color-text-secondary)] mt-2">{description}</p>}
      <div className="mt-6 max-w-md mx-auto">{inputRow}</div>
    </div>
  );
}
