"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Foundations", href: "/foundations" },
  { label: "Components", href: "/components" },
  { label: "Patterns", href: "/patterns" },
  { label: "Examples", href: "/examples" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link href="/" className="text-lg font-bold tracking-tight no-underline">
          <span className="text-gradient">NyxWorks</span>
          <span className="text-[var(--color-text-muted)] font-normal ml-2 text-sm">Style Guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm no-underline transition-colors ${
                  active
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[var(--color-text-secondary)]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm no-underline transition-colors ${
                  active
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
