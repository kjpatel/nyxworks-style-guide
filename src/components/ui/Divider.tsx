/** Horizontal divider with optional centered label (e.g., "or" on auth forms). */
interface DividerProps {
  /** Centered text label (e.g., "or", "continue with"). */
  label?: string;
  /** Vertical spacing around the divider. @default "md" */
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = { sm: "my-4", md: "my-6", lg: "my-8" };

export default function Divider({ label, spacing = "md" }: DividerProps) {
  if (label) {
    return (
      <div className={`flex items-center gap-4 ${spacingMap[spacing]}`}>
        <div className="flex-1 border-t border-[var(--color-border)]" />
        <span className="text-xs text-[var(--color-text-muted)] shrink-0">{label}</span>
        <div className="flex-1 border-t border-[var(--color-border)]" />
      </div>
    );
  }

  return <hr className={`border-t border-[var(--color-border)] ${spacingMap[spacing]}`} />;
}
