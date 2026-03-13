"use client";

import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarItem {
  /** Unique identifier. */
  id: string;
  /** Display label. */
  label: string;
  /** Link URL. Renders as <a> when provided. */
  href?: string;
  /** Click handler. Used when no href. */
  onClick?: () => void;
}

/** Reusable top navigation bar with brand, links, actions, and mobile menu. */
interface NavbarProps {
  /** Brand element: logo, wordmark, or any ReactNode. */
  brand: ReactNode;
  /** Navigation items. */
  items: NavbarItem[];
  /** ID of the currently active item. */
  activeId?: string;
  /** Right-side actions (buttons, avatar, theme toggle). */
  actions?: ReactNode;
  /** Stick to top of viewport. @default false */
  sticky?: boolean;
}

export default function Navbar({ brand, items, activeId, actions, sticky = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)]"
    }`;

  return (
    <div
      className={`${
        sticky ? "sticky top-0 z-50" : ""
      } border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <div className="shrink-0">{brand}</div>

        <nav className="hidden md:flex items-center gap-1 ml-8">
          {items.map((item) =>
            item.href ? (
              <a key={item.id} href={item.href} className={linkClasses(activeId === item.id)}>
                {item.label}
              </a>
            ) : (
              <button key={item.id} onClick={item.onClick} className={linkClasses(activeId === item.id)}>
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          {actions && <div className="hidden md:flex items-center gap-2">{actions}</div>}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 space-y-1">
          {items.map((item) =>
            item.href ? (
              <a key={item.id} href={item.href} className={`block ${linkClasses(activeId === item.id)}`}>
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                onClick={item.onClick}
                className={`block w-full text-left ${linkClasses(activeId === item.id)}`}
              >
                {item.label}
              </button>
            )
          )}
          {actions && <div className="pt-3 border-t border-[var(--color-border)] mt-3">{actions}</div>}
        </div>
      )}
    </div>
  );
}
