export const colors = {
  core: [
    { name: "bg", variable: "--color-bg", value: "#0B0F1A", usage: "Page background" },
    { name: "bg-card", variable: "--color-bg-card", value: "#12162A", usage: "Card / panel backgrounds" },
    { name: "bg-card-hover", variable: "--color-bg-card-hover", value: "#1A1F36", usage: "Card hover state" },
    { name: "border", variable: "--color-border", value: "#1E2440", usage: "Borders, dividers" },
    { name: "text-primary", variable: "--color-text-primary", value: "#E8EAF0", usage: "Headings, body text" },
    { name: "text-secondary", variable: "--color-text-secondary", value: "#C9CCD6", usage: "Descriptions, secondary text" },
    { name: "text-muted", variable: "--color-text-muted", value: "#7B7F8E", usage: "Captions, placeholders" },
    { name: "accent", variable: "--color-accent", value: "#5B3FD6", usage: "Primary brand color, buttons" },
    { name: "accent-light", variable: "--color-accent-light", value: "#8A5CFF", usage: "Hover states, highlights" },
    { name: "accent-dark", variable: "--color-accent-dark", value: "#4A2FC0", usage: "Active states, gradients" },
  ],
  semantic: [
    { name: "success", variable: "--color-success", value: "#22c55e", usage: "Success states, confirmations" },
    { name: "success-light", variable: "--color-success-light", value: "#4ade80", usage: "Success highlights" },
    { name: "warning", variable: "--color-warning", value: "#f59e0b", usage: "Warnings, cautions" },
    { name: "warning-light", variable: "--color-warning-light", value: "#fbbf24", usage: "Warning highlights" },
    { name: "error", variable: "--color-error", value: "#ef4444", usage: "Errors, destructive actions" },
    { name: "error-light", variable: "--color-error-light", value: "#f87171", usage: "Error highlights" },
    { name: "info", variable: "--color-info", value: "#3b82f6", usage: "Informational states" },
    { name: "info-light", variable: "--color-info-light", value: "#60a5fa", usage: "Info highlights" },
  ],
} as const;

export const typography = {
  fonts: [
    { name: "Geist Sans", variable: "--font-sans", usage: "Body text, UI elements" },
    { name: "Geist Mono", variable: "--font-mono", usage: "Code, data, technical content" },
  ],
  scale: [
    { name: "xs", class: "text-xs", size: "0.75rem / 12px" },
    { name: "sm", class: "text-sm", size: "0.875rem / 14px" },
    { name: "base", class: "text-base", size: "1rem / 16px" },
    { name: "lg", class: "text-lg", size: "1.125rem / 18px" },
    { name: "xl", class: "text-xl", size: "1.25rem / 20px" },
    { name: "2xl", class: "text-2xl", size: "1.5rem / 24px" },
    { name: "3xl", class: "text-3xl", size: "1.875rem / 30px" },
    { name: "4xl", class: "text-4xl", size: "2.25rem / 36px" },
    { name: "5xl", class: "text-5xl", size: "3rem / 48px" },
  ],
  weights: [
    { name: "Normal", class: "font-normal", value: "400" },
    { name: "Medium", class: "font-medium", value: "500" },
    { name: "Semibold", class: "font-semibold", value: "600" },
    { name: "Bold", class: "font-bold", value: "700" },
  ],
} as const;

export const spacing = [
  { name: "1", class: "p-1", size: "4px" },
  { name: "2", class: "p-2", size: "8px" },
  { name: "3", class: "p-3", size: "12px" },
  { name: "4", class: "p-4", size: "16px" },
  { name: "5", class: "p-5", size: "20px" },
  { name: "6", class: "p-6", size: "24px" },
  { name: "8", class: "p-8", size: "32px" },
  { name: "10", class: "p-10", size: "40px" },
  { name: "12", class: "p-12", size: "48px" },
  { name: "16", class: "p-16", size: "64px" },
  { name: "20", class: "p-20", size: "80px" },
  { name: "24", class: "p-24", size: "96px" },
] as const;
