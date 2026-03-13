import { ReactNode } from "react";

/** Layout helper for form action bars — save/cancel, confirmations, toggles. */
interface ActionPanelProps {
  children: ReactNode;
  /** Visual variant. @default "default" */
  variant?: "default" | "card" | "well";
  /** Button alignment. @default "right" */
  align?: "left" | "right" | "between";
}

const alignMap = {
  left: "justify-start",
  right: "justify-end",
  between: "justify-between",
};

const variantMap = {
  default: "",
  card: "rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] px-6 py-4",
  well: "rounded-xl bg-[var(--color-bg-card-hover)] px-6 py-4",
};

export default function ActionPanel({ children, variant = "default", align = "right" }: ActionPanelProps) {
  return (
    <div className={`flex items-center gap-3 ${alignMap[align]} ${variantMap[variant]}`}>
      {children}
    </div>
  );
}
