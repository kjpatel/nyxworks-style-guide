import { ReactNode } from "react";

type Variant = "centered" | "split" | "banner" | "card";

/** Call-to-action section with multiple layout variants. */
interface CTASectionProps {
  /** Heading text. */
  title: string;
  /** Supporting description. */
  description?: string;
  /** CTA buttons/actions. */
  actions: ReactNode;
  /** Layout variant. @default "centered" */
  variant?: Variant;
  /** Media element for split variant. */
  media?: ReactNode;
  className?: string;
}

export default function CTASection({
  title,
  description,
  actions,
  variant = "centered",
  media,
  className = "",
}: CTASectionProps) {
  if (variant === "banner") {
    return (
      <section className={`px-6 ${className}`}>
        <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            {description && <p className="mt-1 text-sm text-white/80">{description}</p>}
          </div>
          <div className="shrink-0 flex gap-3">{actions}</div>
        </div>
      </section>
    );
  }

  if (variant === "card") {
    return (
      <section className={`px-6 ${className}`}>
        <div className="mx-auto max-w-2xl rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-accent)]/30 shadow-[0_0_24px_-6px_var(--color-accent)] overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]" />
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h2>
            {description && <p className="mt-2 text-[var(--color-text-secondary)]">{description}</p>}
            <div className="mt-6 flex flex-wrap justify-center gap-3">{actions}</div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className={`py-24 px-6 ${className}`}>
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">{title}</h2>
            {description && <p className="mt-3 text-lg text-[var(--color-text-secondary)]">{description}</p>}
            <div className="mt-8 flex gap-3">{actions}</div>
          </div>
          {media && <div>{media}</div>}
        </div>
      </section>
    );
  }

  // centered
  return (
    <section className={`py-24 px-6 text-center ${className}`}>
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">{title}</h2>
        {description && <p className="mt-3 text-lg text-[var(--color-text-secondary)]">{description}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>
      </div>
    </section>
  );
}
