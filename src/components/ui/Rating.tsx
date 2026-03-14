"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type Size = "sm" | "md" | "lg";

/** Star rating display with optional interactive mode. */
interface RatingProps {
  /** Current rating value (0–5). */
  value: number;
  /** Maximum rating. @default 5 */
  max?: number;
  /** Star size. @default "md" */
  size?: Size;
  /** Whether user can change the rating. @default true */
  readonly?: boolean;
  /** Called when rating changes (interactive mode). */
  onChange?: (value: number) => void;
  /** Show numeric value next to stars. @default false */
  showValue?: boolean;
  /** Review count text (e.g., "128 reviews"). */
  reviewCount?: string;
  className?: string;
}

const sizeMap: Record<Size, number> = { sm: 14, md: 18, lg: 24 };

export default function Rating({
  value,
  max = 5,
  size = "md",
  readonly = true,
  onChange,
  showValue = false,
  reviewCount,
  className = "",
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;
  const iconSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          const starIndex = i + 1;
          const filled = starIndex <= Math.round(displayValue);
          return (
            <button
              key={i}
              type="button"
              disabled={readonly}
              onClick={() => onChange?.(starIndex)}
              onMouseEnter={() => !readonly && setHoverValue(starIndex)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              className={`${readonly ? "cursor-default" : "cursor-pointer hover:scale-110"} transition-transform disabled:opacity-100`}
            >
              <Star
                size={iconSize}
                className={
                  filled
                    ? "fill-[var(--color-warning)] text-[var(--color-warning)]"
                    : "text-[var(--color-border)] fill-transparent"
                }
              />
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-[var(--color-text-primary)]">{value.toFixed(1)}</span>
      )}
      {reviewCount && (
        <span className="text-sm text-[var(--color-text-muted)]">({reviewCount})</span>
      )}
    </div>
  );
}
