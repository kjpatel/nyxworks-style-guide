"use client";

import { ReactNode, useState } from "react";
import { X } from "lucide-react";

/** Dismissible top banner for announcements, cookie notices, and promotions. */
interface BannerProps {
  /** Banner body content. */
  children: ReactNode;
  /** Color variant. @default "info" */
  variant?: "info" | "success" | "warning" | "error" | "accent";
  /** Icon rendered before the content. */
  icon?: ReactNode;
  /** Show a dismiss button. @default true */
  dismissible?: boolean;
  /** Called when dismiss is clicked. */
  onDismiss?: () => void;
}

const variantStyles = {
  info: "bg-[var(--color-info)]/10 border-[var(--color-info)]/20 text-[var(--color-info-light)]",
  success: "bg-[var(--color-success)]/10 border-[var(--color-success)]/20 text-[var(--color-success-light)]",
  warning: "bg-[var(--color-warning)]/10 border-[var(--color-warning)]/20 text-[var(--color-warning-light)]",
  error: "bg-[var(--color-error)]/10 border-[var(--color-error)]/20 text-[var(--color-error-light)]",
  accent: "bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20 text-[var(--color-accent-light)]",
};

export default function Banner({
  children,
  variant = "info",
  icon,
  dismissible = true,
  onDismiss,
}: BannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`flex items-center gap-3 px-4 py-3 border rounded-xl text-sm ${variantStyles[variant]}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <p className="flex-1 text-[var(--color-text-secondary)]">{children}</p>
      {dismissible && (
        <button
          onClick={() => { setVisible(false); onDismiss?.(); }}
          className="shrink-0 p-0.5 rounded hover:bg-[var(--color-bg-card-hover)] transition-colors text-[var(--color-text-muted)]"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
