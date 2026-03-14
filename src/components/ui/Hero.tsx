import { ReactNode } from "react";

type Variant = "centered" | "split" | "splitReverse" | "withScreenshot";

/** Marketing hero section with eyebrow, title, subtitle, actions, and optional media. */
interface HeroProps {
  /** Eyebrow badge/label above the heading. */
  eyebrow?: ReactNode;
  /** Main heading text. */
  title: string;
  /** Subtitle below the heading. */
  subtitle?: string;
  /** CTA buttons/actions. */
  actions?: ReactNode;
  /** Image or screenshot element for split/screenshot layouts. */
  media?: ReactNode;
  /** Layout variant. @default "centered" */
  variant?: Variant;
  /** Apply gradient accent to title. @default false */
  gradient?: boolean;
  className?: string;
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  variant = "centered",
  gradient = false,
  className = "",
}: HeroProps) {
  const titleClasses = `text-4xl md:text-5xl font-bold tracking-tight ${
    gradient
      ? "bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-accent-light)] to-[var(--color-accent)] bg-clip-text text-transparent"
      : "text-[var(--color-text-primary)]"
  }`;

  if (variant === "split" || variant === "splitReverse") {
    return (
      <section className={`py-24 px-6 ${className}`}>
        <div className={`mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${variant === "splitReverse" ? "lg:direction-rtl" : ""}`}>
          <div className={variant === "splitReverse" ? "lg:order-2" : ""}>
            {eyebrow && <div className="mb-4">{eyebrow}</div>}
            <h1 className={titleClasses}>{title}</h1>
            {subtitle && (
              <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">{subtitle}</p>
            )}
            {actions && <div className="mt-8">{actions}</div>}
          </div>
          {media && (
            <div className={variant === "splitReverse" ? "lg:order-1" : ""}>
              {media}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 px-6 text-center ${className}`}>
      <div className="mx-auto max-w-3xl">
        {eyebrow && <div className="mb-4 flex justify-center">{eyebrow}</div>}
        <h1 className={titleClasses}>{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">{subtitle}</p>
        )}
        {actions && <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>}
      </div>
      {media && variant === "withScreenshot" && (
        <div className="mx-auto max-w-5xl mt-16 rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-2xl">
          {media}
        </div>
      )}
    </section>
  );
}
