import { ReactNode } from "react";

/** Horizontal layout: fixed-width media on left, flexible content on right. */
interface MediaObjectProps {
  /** Left element: image, icon, or Avatar. */
  media: ReactNode;
  /** Primary title text. */
  title?: string;
  /** Description or secondary content below the title. */
  description?: ReactNode;
  /** Actions slot rendered on the far right. */
  actions?: ReactNode;
  /** Vertical alignment of media. @default "top" */
  align?: "top" | "center";
}

export default function MediaObject({ media, title, description, actions, align = "top" }: MediaObjectProps) {
  return (
    <div className={`flex gap-4 ${align === "center" ? "items-center" : "items-start"}`}>
      <div className="shrink-0">{media}</div>
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-medium text-[var(--color-text-primary)]">{title}</p>}
        {description && <div className="text-sm text-[var(--color-text-secondary)] mt-0.5">{description}</div>}
      </div>
      {actions && <div className="shrink-0 flex items-center gap-2">{actions}</div>}
    </div>
  );
}
