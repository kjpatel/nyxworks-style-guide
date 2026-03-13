import { ReactNode } from "react";

interface SectionTab {
  /** Tab label text. */
  label: string;
  /** Whether this tab is active. */
  active?: boolean;
  /** Click handler. */
  onClick?: () => void;
}

/** Standalone section heading with description, tabs, and actions. */
interface SectionHeadingProps {
  /** Section title. */
  title: string;
  /** Description below the title. */
  description?: string;
  /** Actions rendered right-aligned. */
  actions?: ReactNode;
  /** Badge rendered inline with the title. */
  badge?: ReactNode;
  /** Optional tab row below the heading. */
  tabs?: SectionTab[];
  /** Show a bottom border. @default true */
  border?: boolean;
}

export default function SectionHeading({ title, description, actions, badge, tabs, border = true }: SectionHeadingProps) {
  return (
    <div className={`${border ? "border-b border-[var(--color-border)]" : ""} pb-4`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
            {badge}
          </div>
          {description && (
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{description}</p>
          )}
        </div>
        {actions && <div className="shrink-0 flex items-center gap-2">{actions}</div>}
      </div>
      {tabs && tabs.length > 0 && (
        <div className="flex gap-1 mt-4 -mb-[calc(1rem+1px)]">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={tab.onClick}
              className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 ${
                tab.active
                  ? "border-[var(--color-accent)] text-[var(--color-accent-light)]"
                  : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-border)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
