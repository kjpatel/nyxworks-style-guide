import { ReactNode } from "react";

interface SocialLink {
  icon: ReactNode;
  href: string;
}

type Variant = "card" | "compact" | "horizontal";

/** Team member card with avatar, bio, and social links. */
interface TeamMemberProps {
  /** Person's name. */
  name: string;
  /** Job title / role. */
  role: string;
  /** Avatar element (Avatar component, img, etc.). */
  avatar?: ReactNode;
  /** Short bio. */
  bio?: string;
  /** Social media links. */
  socials?: SocialLink[];
  /** Layout variant. @default "card" */
  variant?: Variant;
  className?: string;
}

export default function TeamMember({
  name,
  role,
  avatar,
  bio,
  socials,
  variant = "card",
  className = "",
}: TeamMemberProps) {
  const socialRow = socials && socials.length > 0 && (
    <div className="flex items-center gap-2">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );

  if (variant === "horizontal") {
    return (
      <div className={`flex items-start gap-4 ${className}`}>
        {avatar && <div className="shrink-0">{avatar}</div>}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">{name}</p>
          <p className="text-xs text-[var(--color-accent-light)]">{role}</p>
          {bio && <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">{bio}</p>}
          {socialRow && <div className="mt-3">{socialRow}</div>}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {avatar && <div className="shrink-0">{avatar}</div>}
        <div className="min-w-0">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">{name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{role}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden p-6 text-center ${className}`}
    >
      {avatar && <div className="flex justify-center mb-4">{avatar}</div>}
      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{name}</p>
      <p className="text-xs text-[var(--color-accent-light)] mt-0.5">{role}</p>
      {bio && <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">{bio}</p>}
      {socialRow && <div className="mt-4 flex justify-center">{socialRow}</div>}
    </div>
  );
}
