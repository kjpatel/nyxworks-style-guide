"use client";

import { useState, useMemo, useCallback, createElement } from "react";
import { icons } from "lucide-react";
import { Search, X, Copy, Check } from "lucide-react";
import Footer from "@/components/Footer";

/* ── search index (built once at module level) ── */
const iconEntries = Object.entries(icons).map(([name, component]) => ({
  name,
  component,
  searchable: name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .toLowerCase(),
}));

/* ── preset options ── */
const sizes = [16, 20, 24, 32, 48];
const strokes = [1, 1.5, 2, 2.5, 3];
const colorPresets = [
  { label: "Default", value: "currentColor" },
  { label: "Accent", value: "var(--color-accent)" },
  { label: "Muted", value: "var(--color-text-muted)" },
];

export default function IconsPage() {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("currentColor");
  const [customColor, setCustomColor] = useState("#8A5CFF");
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return iconEntries;
    const q = query.toLowerCase().trim();
    return iconEntries.filter((e) => e.searchable.includes(q));
  }, [query]);

  const activeColor = color === "custom" ? customColor : color;

  const copyToClipboard = useCallback(
    (text: string, label: string) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
      });
    },
    [],
  );

  const selectedEntry = selected
    ? iconEntries.find((e) => e.name === selected)
    : null;

  return (
    <>
      <div className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Icons</h1>
            <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
            <p className="text-[var(--color-text-secondary)]">
              Browse, search, and customize all {iconEntries.length} Lucide
              icons. Click any icon to copy its import.
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
            <input
              type="text"
              placeholder="Search icons..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Customize controls */}
          <div className="flex flex-wrap gap-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            {/* Size */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Size
              </label>
              <div className="flex gap-1">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                      size === s
                        ? "bg-[var(--color-accent)] text-white"
                        : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Stroke width */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Stroke
              </label>
              <div className="flex gap-1">
                {strokes.map((sw) => (
                  <button
                    key={sw}
                    onClick={() => setStrokeWidth(sw)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                      strokeWidth === sw
                        ? "bg-[var(--color-accent)] text-white"
                        : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                    }`}
                  >
                    {sw}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Color
              </label>
              <div className="flex items-center gap-1">
                {colorPresets.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setColor(c.value)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                      color === c.value
                        ? "bg-[var(--color-accent)] text-white"
                        : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
                <button
                  onClick={() => setColor("custom")}
                  className={`relative w-7 h-7 rounded-lg border-2 transition-colors overflow-hidden ${
                    color === "custom"
                      ? "border-[var(--color-accent)]"
                      : "border-[var(--color-border)]"
                  }`}
                  title="Custom color"
                >
                  <span
                    className="absolute inset-0.5 rounded"
                    style={{ backgroundColor: customColor }}
                  />
                </button>
                {color === "custom" && (
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="w-20 px-2 py-1 text-xs rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] font-mono"
                    placeholder="#hex"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Result count */}
          <p className="text-sm text-[var(--color-text-muted)]">
            {filtered.length === iconEntries.length
              ? `${iconEntries.length} icons`
              : `${filtered.length} of ${iconEntries.length} icons`}
          </p>

          {/* Icon grid */}
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
              contentVisibility: "auto",
            }}
          >
            {filtered.map(({ name, component }) => (
              <button
                key={name}
                onClick={() => setSelected(selected === name ? null : name)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all cursor-pointer ${
                  selected === name
                    ? "bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/40"
                    : "hover:bg-[var(--color-bg-card)] border border-transparent hover:border-[var(--color-border)]"
                }`}
                title={name}
              >
                {createElement(component, {
                  size,
                  strokeWidth,
                  style: { color: activeColor },
                })}
                <span className="text-[10px] text-[var(--color-text-muted)] truncate w-full text-center leading-tight">
                  {name}
                </span>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-muted)]">
                No icons match &ldquo;{query}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Detail panel */}
      {selectedEntry && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md shadow-2xl">
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-start gap-6">
            {/* Preview */}
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
              {createElement(selectedEntry.component, {
                size: 40,
                strokeWidth,
                style: { color: activeColor },
              })}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold">
                  {selectedEntry.name}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto p-1 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {/* Import snippet */}
                <CodeSnippet
                  label="Import"
                  code={`import { ${selectedEntry.name} } from "lucide-react";`}
                  copied={copied}
                  onCopy={copyToClipboard}
                />

                {/* JSX snippet */}
                <CodeSnippet
                  label="JSX"
                  code={`<${selectedEntry.name}${size !== 24 ? ` size={${size}}` : ""}${strokeWidth !== 2 ? ` strokeWidth={${strokeWidth}}` : ""}${activeColor !== "currentColor" ? ` color="${activeColor}"` : ""} />`}
                  copied={copied}
                  onCopy={copyToClipboard}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={selectedEntry ? "pb-36" : ""}>
        <Footer />
      </div>
    </>
  );
}

function CodeSnippet({
  label,
  code,
  copied,
  onCopy,
}: {
  label: string;
  code: string;
  copied: string | null;
  onCopy: (text: string, label: string) => void;
}) {
  const isCopied = copied === label;
  return (
    <div className="flex items-center gap-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] px-3 py-2 font-mono text-xs max-w-full">
      <span className="text-[var(--color-text-muted)] flex-shrink-0">
        {label}:
      </span>
      <code className="text-[var(--color-text-secondary)] truncate">
        {code}
      </code>
      <button
        onClick={() => onCopy(code, label)}
        className="flex-shrink-0 p-1 rounded text-[var(--color-text-muted)] hover:text-[var(--color-accent-light)] transition-colors"
        title={`Copy ${label.toLowerCase()}`}
      >
        {isCopied ? (
          <Check size={14} className="text-green-500" />
        ) : (
          <Copy size={14} />
        )}
      </button>
    </div>
  );
}
