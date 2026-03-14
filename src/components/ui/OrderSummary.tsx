import { ReactNode } from "react";

interface SummaryLine {
  /** Line label (e.g., "Subtotal", "Tax"). */
  label: string;
  /** Line value (e.g., "$99.00"). */
  value: string;
  /** Whether this is the total line (bold + border). @default false */
  isTotal?: boolean;
}

/** Checkout order summary card with line items and optional promo/CTA. */
interface OrderSummaryProps {
  /** Line items (subtotal, shipping, tax, total). */
  lines: SummaryLine[];
  /** CTA button at bottom (e.g., "Checkout"). */
  action?: ReactNode;
  /** Promo code area (input + apply button). */
  promo?: ReactNode;
  /** Card title. @default "Order Summary" */
  title?: string;
  className?: string;
}

export default function OrderSummary({
  lines,
  action,
  promo,
  title = "Order Summary",
  className = "",
}: OrderSummaryProps) {
  return (
    <div className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-[var(--color-border)]">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
      </div>
      <div className="p-6 space-y-3">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`flex items-center justify-between ${
              line.isTotal ? "pt-3 border-t border-[var(--color-border)]" : ""
            }`}
          >
            <span
              className={
                line.isTotal
                  ? "text-sm font-semibold text-[var(--color-text-primary)]"
                  : "text-sm text-[var(--color-text-secondary)]"
              }
            >
              {line.label}
            </span>
            <span
              className={
                line.isTotal
                  ? "text-lg font-bold text-[var(--color-text-primary)]"
                  : "text-sm font-medium text-[var(--color-text-primary)]"
              }
            >
              {line.value}
            </span>
          </div>
        ))}
        {promo && <div className="pt-3 border-t border-[var(--color-border)]">{promo}</div>}
        {action && <div className="pt-3">{action}</div>}
      </div>
    </div>
  );
}
