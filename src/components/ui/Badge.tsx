import { ReactNode } from "react";

type Color = "default" | "accent" | "success" | "warning" | "error" | "info";
type Size = "sm" | "md";

/** Inline label/tag with semantic color variants. */
interface BadgeProps {
  /** Semantic color. @default "default" */
  color?: Color;
  /** Badge size. @default "md" */
  size?: Size;
  children: ReactNode;
}

const colorClasses: Record<Color, string> = {
  default:
    "bg-[var(--color-bg)] text-[var(--color-text-muted)] border-[var(--color-border)]",
  accent:
    "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border-[var(--color-accent)]/20",
  success:
    "bg-[var(--color-success)]/10 text-[var(--color-success-light)] border-[var(--color-success)]/20",
  warning:
    "bg-[var(--color-warning)]/10 text-[var(--color-warning-light)] border-[var(--color-warning)]/20",
  error:
    "bg-[var(--color-error)]/10 text-[var(--color-error-light)] border-[var(--color-error)]/20",
  info:
    "bg-[var(--color-info)]/10 text-[var(--color-info-light)] border-[var(--color-info)]/20",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-3 py-1",
};

export default function Badge({ color = "default", size = "md", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${colorClasses[color]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}
