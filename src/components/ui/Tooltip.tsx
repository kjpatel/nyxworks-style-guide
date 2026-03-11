"use client";

import { useState, ReactNode } from "react";

/** Hover-triggered tooltip that appears above the wrapped element. */
interface TooltipProps {
  /** Text displayed in the tooltip. */
  content: string;
  /** Element that triggers the tooltip on hover. */
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] whitespace-nowrap shadow-lg z-50">
          {content}
        </span>
      )}
    </span>
  );
}
