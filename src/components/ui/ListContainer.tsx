import { ReactNode } from "react";

/** Card-wrapped list with header and optional footer. Wraps StackedList, Feed, or any list content. */
interface ListContainerProps {
  /** Header title. */
  title?: string;
  /** Header description. */
  description?: string;
  /** Header actions (buttons, dropdowns). */
  actions?: ReactNode;
  /** Footer content (pagination, "View all" link, summary). */
  footer?: ReactNode;
  /** List body content. */
  children: ReactNode;
}

export default function ListContainer({ title, description, actions, footer, children }: ListContainerProps) {
  const hasHeader = title || actions;

  return (
    <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden">
      {hasHeader && (
        <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-[var(--color-border)]">
          <div className="min-w-0">
            {title && (
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{description}</p>
            )}
          </div>
          {actions && <div className="shrink-0 flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className="px-6 py-3 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
          {footer}
        </div>
      )}
    </div>
  );
}
