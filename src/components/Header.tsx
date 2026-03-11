"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Foundations", href: "/foundations" },
  { label: "Components", href: "/components" },
  { label: "Patterns", href: "/patterns" },
  { label: "Examples", href: "/examples" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    setTheme(saved ?? "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image
            src={theme === "dark" ? "/icon-dark.png" : "/icon-light.png"}
            alt="NyxWorks"
            width={28}
            height={28}
            className={`rounded-sm ${theme === "light" ? "mix-blend-multiply" : ""}`}
          />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gradient">NyxWorks.ai</span>
            <span className="text-[var(--color-text-muted)] font-normal ml-2 text-sm">Style Guide</span>
          </span>
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

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[var(--color-text-secondary)]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
