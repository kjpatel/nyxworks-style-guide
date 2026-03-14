"use client";

import { ReactNode } from "react";
import { Minus, Plus, X } from "lucide-react";

/** Shopping cart line item with quantity controls. */
interface CartItemProps {
  /** Product image. */
  image?: ReactNode;
  /** Product title. */
  title: string;
  /** Variant info (size, color, etc.). */
  variant?: string;
  /** Price per unit. */
  price: string;
  /** Current quantity. */
  quantity: number;
  /** Called when quantity changes. */
  onQuantityChange?: (quantity: number) => void;
  /** Called when item is removed. */
  onRemove?: () => void;
  className?: string;
}

export default function CartItem({
  image,
  title,
  variant,
  price,
  quantity,
  onQuantityChange,
  onRemove,
  className = "",
}: CartItemProps) {
  return (
    <div className={`flex items-start gap-4 py-4 ${className}`}>
      {image && (
        <div className="shrink-0 w-16 h-16 rounded-lg bg-[var(--color-bg-card-hover)] border border-[var(--color-border)] overflow-hidden">
          {image}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">{title}</p>
            {variant && <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{variant}</p>}
          </div>
          {onRemove && (
            <button
              onClick={onRemove}
              className="shrink-0 p-1 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-0 rounded-lg border border-[var(--color-border)] overflow-hidden">
            <button
              onClick={() => onQuantityChange?.(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="px-3 py-1 text-xs font-medium text-[var(--color-text-primary)] border-x border-[var(--color-border)]">
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange?.(quantity + 1)}
              className="px-2 py-1 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="text-sm font-medium text-[var(--color-text-primary)]">{price}</span>
        </div>
      </div>
    </div>
  );
}
