/** Pulsing placeholder for loading states. Pass Tailwind size classes to control dimensions. */
interface SkeletonProps {
  /** Tailwind classes for width/height. @default "h-4 w-full" */
  className?: string;
}

export default function Skeleton({ className = "h-4 w-full" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-[var(--color-border)] ${className}`}
    />
  );
}
