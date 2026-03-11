import { ReactNode } from "react";
import { Inbox } from "lucide-react";

/** Centered placeholder for empty lists or missing content. Defaults to an Inbox icon. */
interface EmptyStateProps {
  /** Custom icon. Defaults to Lucide Inbox. */
  icon?: ReactNode;
  /** Primary heading text. */
  title: string;
  /** Secondary description below the title. */
  description?: string;
  /** Action element (e.g. a Button) rendered below the description. */
  action?: ReactNode;
}

export default function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="mb-4 text-[var(--color-text-muted)]">
        {icon || <Inbox size={48} strokeWidth={1} />}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-[var(--color-text-muted)] max-w-sm mb-4">{description}</p>
      )}
      {action}
    </div>
  );
}
