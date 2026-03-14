import { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

/** Formatted price display with optional sale/original price. */
interface PriceTagProps {
  /** Current price string (e.g., "$29"). */
  price: string;
  /** Original price shown as strikethrough. */
  originalPrice?: string;
  /** Size variant. @default "md" */
  size?: Size;
  /** Show a sale badge when originalPrice is provided. @default false */
  saleBadge?: boolean;
  className?: string;
}

const sizeMap: Record<Size, { price: string; original: string }> = {
  sm: { price: "text-sm font-medium", original: "text-xs" },
  md: { price: "text-xl font-semibold", original: "text-sm" },
  lg: { price: "text-3xl font-bold", original: "text-base" },
};

export default function PriceTag({ price, originalPrice, size = "md", saleBadge = false, className = "" }: PriceTagProps) {
  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`${sizeMap[size].price} text-[var(--color-text-primary)]`}>{price}</span>
      {originalPrice && (
        <span className={`${sizeMap[size].original} text-[var(--color-text-muted)] line-through`}>{originalPrice}</span>
      )}
      {saleBadge && originalPrice && (
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-error)]/10 text-[var(--color-error-light)] border border-[var(--color-error)]/20">
          Sale
        </span>
      )}
    </div>
  );
}
