interface TypeScaleProps {
  name: string;
  className: string;
  size: string;
}

export default function TypeScale({ name, className, size }: TypeScaleProps) {
  return (
    <div className="flex items-baseline gap-6 py-3 border-b border-[var(--color-border)] last:border-0">
      <div className="w-20 shrink-0">
        <span className="text-xs font-mono text-[var(--color-accent-light)]">{className}</span>
      </div>
      <div className="w-32 shrink-0">
        <span className="text-xs text-[var(--color-text-muted)]">{size}</span>
      </div>
      <p className={`${className} truncate`}>
        The quick brown fox — {name}
      </p>
    </div>
  );
}
