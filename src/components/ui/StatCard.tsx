import { ReactNode } from "react";

/** Standalone stat display card for dashboards and overview screens. */
interface StatCardProps {
  /** Metric label (e.g., "Revenue", "Users"). */
  label: string;
  /** Main value (e.g., "$48.2K", "2,847"). */
  value: string;
  /** Change indicator (e.g., "+12%"). */
  change?: string;
  /** Whether the change is positive, negative, or neutral. @default "neutral" */
  trend?: "up" | "down" | "neutral";
  /** Icon shown in the top-right corner. */
  icon?: ReactNode;
}

export default function StatCard({ label, value, change, trend = "neutral", icon }: StatCardProps) {
  const trendColor =
    trend === "up"
      ? "text-[var(--color-success)]"
      : trend === "down"
        ? "text-[var(--color-error)]"
        : "text-[var(--color-text-muted)]";

  return (
    <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6">
      <div className="flex items-start justify-between mb-2">
        <p className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">{label}</p>
        {icon && <span className="text-[var(--color-text-muted)]">{icon}</span>}
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      {change && (
        <span className={`text-xs font-medium ${trendColor}`}>{change}</span>
      )}
    </div>
  );
}
