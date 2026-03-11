import { ReactNode } from "react";

type Variant = "default" | "interactive" | "featured";

interface CardProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export default function Card({ variant = "default", children, className = "" }: CardProps) {
  const base = "rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden";

  const variants: Record<Variant, string> = {
    default: "",
    interactive:
      "hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all cursor-pointer glow-border",
    featured:
      "border-[var(--color-accent)]/30 shadow-[0_0_24px_-6px_var(--color-accent)]",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {variant === "featured" && (
        <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]" />
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
