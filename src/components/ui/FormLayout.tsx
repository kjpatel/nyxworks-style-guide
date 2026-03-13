import { ReactNode } from "react";

/** Two-column form section: title + description on left, fields on right. Stacks on mobile. */
interface FormLayoutProps {
  /** Section title. */
  title: string;
  /** Section description. */
  description?: string;
  /** Form fields rendered in the right column. */
  children: ReactNode;
  /** Show a top divider before this section. @default false */
  divider?: boolean;
}

export default function FormLayout({ title, description, children, divider = false }: FormLayoutProps) {
  return (
    <div className={divider ? "border-t border-[var(--color-border)] pt-8" : ""}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        <div className="md:col-span-1">
          <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{title}</h3>
          {description && (
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{description}</p>
          )}
        </div>
        <div className="md:col-span-2 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
