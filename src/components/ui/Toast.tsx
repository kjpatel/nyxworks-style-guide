import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

type Variant = "info" | "success" | "warning" | "error";

/** Notification toast with semantic icon and optional close button. */
interface ToastProps {
  /** Semantic variant controlling icon and color. @default "info" */
  variant?: Variant;
  /** Text message displayed in the toast. */
  message: string;
  /** If provided, renders a close button that calls this handler. */
  onClose?: () => void;
}

const config: Record<Variant, { icon: typeof Info; accent: string }> = {
  info: { icon: Info, accent: "var(--color-info)" },
  success: { icon: CheckCircle, accent: "var(--color-success)" },
  warning: { icon: AlertTriangle, accent: "var(--color-warning)" },
  error: { icon: AlertCircle, accent: "var(--color-error)" },
};

export default function Toast({ variant = "info", message, onClose }: ToastProps) {
  const { icon: Icon, accent } = config[variant];

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-xl">
      <Icon size={18} style={{ color: accent }} />
      <p className="text-sm text-[var(--color-text-primary)] flex-1">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
