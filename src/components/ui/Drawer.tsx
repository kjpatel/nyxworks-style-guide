"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

/** Slide-in panel for detail views, mobile navigation, and supplementary content. */
interface DrawerProps {
  /** Controls visibility. */
  open: boolean;
  /** Called when backdrop or close button is clicked. */
  onClose: () => void;
  /** Header title text. */
  title: string;
  /** Drawer body content. */
  children: ReactNode;
  /** Side the drawer slides in from. @default "right" */
  side?: "left" | "right";
  /** Width class. @default "max-w-md" */
  width?: string;
}

export default function Drawer({
  open,
  onClose,
  title,
  children,
  side = "right",
  width = "max-w-md",
}: DrawerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative ml-auto w-full ${width} h-full bg-[var(--color-bg-card)] border-l border-[var(--color-border)] shadow-2xl flex flex-col ${
          side === "left" ? "ml-0 mr-auto border-l-0 border-r border-[var(--color-border)]" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] shrink-0">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
