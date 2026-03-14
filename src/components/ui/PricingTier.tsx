import { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface PricingFeature {
  /** Feature description. */
  text: string;
  /** Whether this feature is included. @default true */
  included?: boolean;
}

/** Single pricing tier card — compose 2–3 in a grid for a pricing section. */
interface PricingTierProps {
  /** Tier name (e.g., "Starter", "Pro"). */
  name: string;
  /** Short description. */
  description?: string;
  /** Formatted price (e.g., "$29"). */
  price: string;
  /** Price suffix (e.g., "/mo"). */
  priceSuffix?: string;
  /** Feature list. */
  features: PricingFeature[];
  /** CTA button/element. */
  cta: ReactNode;
  /** Highlight as recommended tier. @default false */
  featured?: boolean;
  /** Badge element (e.g., "Most Popular"). */
  badge?: ReactNode;
  className?: string;
}

export default function PricingTier({
  name,
  description,
  price,
  priceSuffix,
  features,
  cta,
  featured = false,
  badge,
  className = "",
}: PricingTierProps) {
  return (
    <div
      className={`rounded-2xl bg-[var(--color-bg-card)] border overflow-hidden ${
        featured
          ? "border-[var(--color-accent)]/30 shadow-[0_0_24px_-6px_var(--color-accent)]"
          : "border-[var(--color-border)]"
      } ${className}`}
    >
      {featured && (
        <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{name}</h3>
          {badge && <div>{badge}</div>}
        </div>
        {description && (
          <p className="text-sm text-[var(--color-text-muted)] mb-4">{description}</p>
        )}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-bold text-[var(--color-text-primary)]">{price}</span>
          {priceSuffix && (
            <span className="text-sm text-[var(--color-text-muted)]">{priceSuffix}</span>
          )}
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              {f.included !== false ? (
                <Check size={16} className="shrink-0 mt-0.5 text-[var(--color-success-light)]" />
              ) : (
                <X size={16} className="shrink-0 mt-0.5 text-[var(--color-text-muted)]" />
              )}
              <span className={f.included !== false ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)]"}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>
        {cta}
      </div>
    </div>
  );
}
