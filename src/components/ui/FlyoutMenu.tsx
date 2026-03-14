"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface FlyoutItem {
  /** Unique identifier. */
  id: string;
  /** Item label. */
  label: string;
  /** Item description. */
  description?: string;
  /** Item icon. */
  icon?: ReactNode;
  /** Link URL. Renders as <a>. */
  href?: string;
  /** Click handler. */
  onClick?: () => void;
}

type Align = "left" | "center" | "right";
type Width = "sm" | "md" | "lg";

/** Rich dropdown menu with icon + description items. */
interface FlyoutMenuProps {
  /** Trigger element (button/link). */
  trigger: ReactNode;
  /** Menu items. */
  items: FlyoutItem[];
  /** Optional footer element. */
  footer?: ReactNode;
  /** Panel alignment. @default "left" */
  align?: Align;
  /** Panel width. @default "md" */
  width?: Width;
  className?: string;
}

const widthMap: Record<Width, string> = {
  sm: "w-56",
  md: "w-72",
  lg: "w-96",
};

const alignMap: Record<Align, string> = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
};

export default function FlyoutMenu({
  trigger,
  items,
  footer,
  align = "left",
  width = "md",
  className = "",
}: FlyoutMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div
          className={`absolute top-full mt-2 ${alignMap[align]} ${widthMap[width]} z-50 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-lg overflow-hidden`}
        >
          <div className="p-2">
            {items.map((item) => {
              const Tag = item.href ? "a" : "button";
              const tagProps = item.href
                ? { href: item.href }
                : { onClick: () => { item.onClick?.(); setOpen(false); } };
              return (
                <Tag
                  key={item.id}
                  {...tagProps}
                  className="flex items-start gap-3 w-full p-3 rounded-lg text-left hover:bg-[var(--color-bg-card-hover)] transition-colors"
                >
                  {item.icon && (
                    <div className="shrink-0 mt-0.5 text-[var(--color-accent-light)]">{item.icon}</div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.label}</p>
                    {item.description && (
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.description}</p>
                    )}
                  </div>
                </Tag>
              );
            })}
          </div>
          {footer && (
            <div className="px-4 py-3 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
