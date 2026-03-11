"use client";

import { useState, ReactNode } from "react";
import { Code, Eye } from "lucide-react";

interface SpecimenProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
}

export default function Specimen({ title, description, children, code }: SpecimenProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{description}</p>
          )}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setShowCode(false)}
            className={`p-2 rounded-lg transition-colors ${
              !showCode
                ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`p-2 rounded-lg transition-colors ${
              showCode
                ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            <Code size={16} />
          </button>
        </div>
      </div>

      {!showCode ? (
        <div className="p-6">{children}</div>
      ) : (
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-[var(--color-text-secondary)] whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
