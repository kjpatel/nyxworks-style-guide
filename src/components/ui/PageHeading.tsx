import { ReactNode } from "react";

/** Page-level heading bar with optional breadcrumb, description, and trailing actions. */
interface PageHeadingProps {
  /** Page title. */
  title: string;
  /** Description shown below the title. */
  description?: string;
  /** Breadcrumb or meta content rendered above the title. */
  breadcrumb?: ReactNode;
  /** Actions rendered on the right side (buttons, dropdown). */
  actions?: ReactNode;
}

export default function PageHeading({ title, description, breadcrumb, actions }: PageHeadingProps) {
  return (
    <div className="space-y-1">
      {breadcrumb && <div className="mb-2">{breadcrumb}</div>}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {description && (
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
      </div>
    </div>
  );
}
