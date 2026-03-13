/** Track + fill bar for usage meters, uploads, and quotas. */
interface ProgressBarProps {
  /** Percentage filled (0–100). */
  value: number;
  /** Color variant. @default "accent" */
  color?: "accent" | "success" | "warning" | "error" | "info";
  /** Label shown above the bar. */
  label?: string;
  /** Show percentage text to the right of the label. @default false */
  showValue?: boolean;
  /** Bar height. @default "md" */
  size?: "sm" | "md" | "lg";
}

const colorMap = {
  accent: "bg-[var(--color-accent)]",
  success: "bg-[var(--color-success)]",
  warning: "bg-[var(--color-warning)]",
  error: "bg-[var(--color-error)]",
  info: "bg-[var(--color-info)]",
};

const sizeMap = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

export default function ProgressBar({
  value,
  color = "accent",
  label,
  showValue = false,
  size = "md",
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>}
          {showValue && <span className="text-sm text-[var(--color-text-muted)]">{clamped}%</span>}
        </div>
      )}
      <div className={`w-full rounded-full bg-[var(--color-border)] ${sizeMap[size]}`}>
        <div
          className={`rounded-full transition-all ${sizeMap[size]} ${colorMap[color]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
