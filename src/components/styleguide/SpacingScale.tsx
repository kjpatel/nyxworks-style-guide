interface SpacingScaleProps {
  name: string;
  size: string;
}

export default function SpacingScale({ name, size }: SpacingScaleProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-10 text-right text-xs font-mono text-[var(--color-accent-light)]">{name}</span>
      <div
        className="h-4 rounded bg-[var(--color-accent)]/30 border border-[var(--color-accent)]/50"
        style={{ width: size }}
      />
      <span className="text-xs text-[var(--color-text-muted)]">{size}</span>
    </div>
  );
}
