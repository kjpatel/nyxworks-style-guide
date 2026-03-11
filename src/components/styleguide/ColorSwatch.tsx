interface ColorSwatchProps {
  name: string;
  variable: string;
  value: string;
  usage: string;
}

export default function ColorSwatch({ name, variable, value, usage }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
      <div
        className="w-14 h-14 rounded-lg shrink-0 border border-[var(--color-border)]"
        style={{ backgroundColor: value }}
      />
      <div className="min-w-0">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs font-mono text-[var(--color-accent-light)]">{variable}</p>
        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{value} &middot; {usage}</p>
      </div>
    </div>
  );
}
