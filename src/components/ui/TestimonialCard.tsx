import { ReactNode } from "react";

type Variant = "default" | "featured" | "minimal";

/** Customer testimonial quote card. */
interface TestimonialCardProps {
  /** The testimonial quote text. */
  quote: string;
  /** Author name. */
  author: string;
  /** Author role/title. */
  role?: string;
  /** Author avatar (ReactNode). */
  avatar?: ReactNode;
  /** Optional company logo. */
  logo?: ReactNode;
  /** Visual variant. @default "default" */
  variant?: Variant;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  logo,
  variant = "default",
  className = "",
}: TestimonialCardProps) {
  if (variant === "minimal") {
    return (
      <figure className={`space-y-4 ${className}`}>
        <blockquote className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-3">
          {avatar && <div className="shrink-0">{avatar}</div>}
          <div>
            <p className="text-sm font-medium text-[var(--color-text-primary)]">{author}</p>
            {role && <p className="text-xs text-[var(--color-text-muted)]">{role}</p>}
          </div>
        </figcaption>
      </figure>
    );
  }

  const isFeatured = variant === "featured";

  return (
    <figure
      className={`rounded-2xl bg-[var(--color-bg-card)] border overflow-hidden p-6 ${
        isFeatured
          ? "border-[var(--color-accent)]/30 shadow-[0_0_24px_-6px_var(--color-accent)]"
          : "border-[var(--color-border)]"
      } ${className}`}
    >
      {isFeatured && (
        <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] -mx-6 -mt-6 mb-6" />
      )}
      <span className="text-5xl leading-none text-[var(--color-accent)]/20 font-serif">&ldquo;</span>
      <blockquote className="text-sm text-[var(--color-text-secondary)] leading-relaxed -mt-4 mb-4">
        {quote}
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
        {avatar && <div className="shrink-0">{avatar}</div>}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">{author}</p>
          {role && <p className="text-xs text-[var(--color-text-muted)]">{role}</p>}
        </div>
        {logo && <div className="shrink-0 opacity-60">{logo}</div>}
      </figcaption>
    </figure>
  );
}
