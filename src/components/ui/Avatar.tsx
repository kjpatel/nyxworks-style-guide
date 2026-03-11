type Size = "sm" | "md" | "lg";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-lg",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Avatar({ src, alt, name, size = "md" }: AvatarProps) {
  return (
    <div
      className={`rounded-full flex items-center justify-center overflow-hidden shrink-0 bg-[var(--color-accent)]/20 text-[var(--color-accent-light)] font-semibold ${sizeClasses[size]}`}
    >
      {src ? (
        <img src={src} alt={alt || name || ""} className="w-full h-full object-cover" />
      ) : (
        <span>{name ? getInitials(name) : "?"}</span>
      )}
    </div>
  );
}
