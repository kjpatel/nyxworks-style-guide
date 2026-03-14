"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  /** Question text. */
  question: string;
  /** Answer content. */
  answer: string | ReactNode;
}

/** Accordion-style FAQ section. */
interface FAQProps {
  /** Optional section title. */
  title?: string;
  /** FAQ items. */
  items: FAQItem[];
  /** Allow multiple items open simultaneously. @default false */
  multiple?: boolean;
  className?: string;
}

export default function FAQ({ title, items, multiple = false, className = "" }: FAQProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-8">{title}</h2>
      )}
      <div className="space-y-3 max-w-2xl mx-auto">
        {items.map((item, i) => {
          const isOpen = openIndices.has(i);
          return (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 ml-4 text-[var(--color-text-muted)] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
