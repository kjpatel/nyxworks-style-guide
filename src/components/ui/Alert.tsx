import { ReactNode } from "react";
import { AlertCircle, CheckCircle, AlertTriangle, Info } from "lucide-react";

type Variant = "info" | "success" | "warning" | "error";

/** Inline alert banner with semantic icon, optional title, and body text. */
interface AlertProps {
  /** Semantic variant controlling icon and color. @default "info" */
  variant?: Variant;
  /** Optional bold title above the body text. */
  title?: string;
  /** Alert body content. */
  children: ReactNode;
}

const config: Record<Variant, { icon: typeof Info; classes: string }> = {
  info: {
    icon: Info,
    classes: "border-[var(--color-info)]/30 bg-[var(--color-info)]/5 text-[var(--color-info-light)]",
  },
  success: {
    icon: CheckCircle,
    classes: "border-[var(--color-success)]/30 bg-[var(--color-success)]/5 text-[var(--color-success-light)]",
  },
  warning: {
    icon: AlertTriangle,
    classes: "border-[var(--color-warning)]/30 bg-[var(--color-warning)]/5 text-[var(--color-warning-light)]",
  },
  error: {
    icon: AlertCircle,
    classes: "border-[var(--color-error)]/30 bg-[var(--color-error)]/5 text-[var(--color-error-light)]",
  },
};

export default function Alert({ variant = "info", title, children }: AlertProps) {
  const { icon: Icon, classes } = config[variant];

  return (
    <div className={`flex gap-3 p-4 rounded-xl border ${classes}`}>
      <Icon size={20} className="shrink-0 mt-0.5" />
      <div>
        {title && <p className="font-semibold text-sm mb-1">{title}</p>}
        <p className="text-sm text-[var(--color-text-secondary)]">{children}</p>
      </div>
    </div>
  );
}
