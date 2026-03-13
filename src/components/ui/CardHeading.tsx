import { ReactNode } from "react";

/** Card header strip with title, description, badge, and trailing actions. */
interface CardHeadingProps {
  /** Heading title. */
  title: string;
  /** Description below the title. */
  description?: string;
  /** Actions rendered on the right (buttons, dropdowns). */
  actions?: ReactNode;
  /** Badge rendered inline with the title. */
  badge?: ReactNode;
  /** Show a bottom border. @default true */
  border?: boolean;
}

export default function CardHeading({ title, description, actions, badge, border = true }: CardHeadingProps) {
  return (
    <div className={`flex items-start justify-between gap-4 px-6 py-4 ${border ? "border-b border-[var(--color-border)]" : ""}`}>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
          {badge}
        </div>
        {description && (
          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{description}</p>
        )}
      </div>
      {actions && <div className="shrink-0 flex items-center gap-2">{actions}</div>}
    </div>
  );
}
