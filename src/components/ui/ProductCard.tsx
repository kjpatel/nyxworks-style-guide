import { ReactNode } from "react";
import { Star } from "lucide-react";

type Variant = "vertical" | "horizontal" | "compact";

/** Product display card for ecommerce grids and lists. */
interface ProductCardProps {
  /** Product image or placeholder. */
  image?: ReactNode;
  /** Product title. */
  title: string;
  /** Short description. */
  description?: string;
  /** Formatted price. */
  price: string;
  /** Original price (strikethrough). */
  originalPrice?: string;
  /** Star rating (0–5). */
  rating?: number;
  /** Number of reviews. */
  reviewCount?: number;
  /** Badge overlay (e.g., "Sale", "New"). */
  badge?: ReactNode;
  /** Action element (e.g., "Add to Cart" button). */
  action?: ReactNode;
  /** Link URL wrapping the card. */
  href?: string;
  /** Layout variant. @default "vertical" */
  variant?: Variant;
  className?: string;
}

function StarRating({ value, count }: { value: number; count?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={12}
            className={
              i < Math.round(value)
                ? "fill-[var(--color-warning)] text-[var(--color-warning)]"
                : "text-[var(--color-border)] fill-transparent"
            }
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-[var(--color-text-muted)]">({count})</span>
      )}
    </div>
  );
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  originalPrice,
  rating,
  reviewCount,
  badge,
  action,
  href,
  variant = "vertical",
  className = "",
}: ProductCardProps) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href } : {};

  if (variant === "horizontal") {
    return (
      <Tag
        {...linkProps}
        className={`flex gap-4 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all ${href ? "cursor-pointer" : ""} ${className}`}
      >
        {image && (
          <div className="relative shrink-0 w-32 bg-[var(--color-bg-card-hover)]">
            {image}
            {badge && <div className="absolute top-2 left-2">{badge}</div>}
          </div>
        )}
        <div className="flex-1 p-4 min-w-0">
          <h3 className="text-sm font-medium text-[var(--color-text-primary)] truncate">{title}</h3>
          {description && <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2">{description}</p>}
          {rating !== undefined && <div className="mt-1"><StarRating value={rating} count={reviewCount} /></div>}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">{price}</span>
            {originalPrice && <span className="text-xs text-[var(--color-text-muted)] line-through">{originalPrice}</span>}
          </div>
          {action}
        </div>
      </Tag>
    );
  }

  if (variant === "compact") {
    return (
      <Tag
        {...linkProps}
        className={`flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-bg-card-hover)] transition-colors ${href ? "cursor-pointer" : ""} ${className}`}
      >
        {image && <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-bg-card-hover)] overflow-hidden">{image}</div>}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">{title}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{price}</p>
        </div>
      </Tag>
    );
  }

  // vertical
  return (
    <Tag
      {...linkProps}
      className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all ${href ? "cursor-pointer" : ""} ${className}`}
    >
      {image && (
        <div className="relative aspect-square bg-[var(--color-bg-card-hover)] overflow-hidden">
          {image}
          {badge && <div className="absolute top-2 left-2">{badge}</div>}
        </div>
      )}
      <div className="p-4">
        <h3 className="text-sm font-medium text-[var(--color-text-primary)] truncate">{title}</h3>
        {description && <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2">{description}</p>}
        {rating !== undefined && <div className="mt-1"><StarRating value={rating} count={reviewCount} /></div>}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">{price}</span>
          {originalPrice && <span className="text-xs text-[var(--color-text-muted)] line-through">{originalPrice}</span>}
        </div>
        {action}
      </div>
    </Tag>
  );
}
